# React-常用的hooks

## useRefCallback

```ts
import { useRef, useCallback } from 'react';

export default function useRefCallback<F extends (...args: any[]) => any>(fn: F) {
  const func = useRef(fn);
  func.current = fn;
  return useCallback((...args) => {
    return func.current(...args);
  }, []) as unknown as F;
}
```

## useModal

```ts
import { useState, useCallback } from 'react';

const getUniqueKey = (): string =>
  `${String(new Date().getTime()).slice(5)}-${_.random(1000)}`;

interface UseModalReturn<T> {
  key: string;
  show: boolean;
  data: T;
  open: (nextState?: T) => void;
  close: (reset?: any) => void;
  setData: React.Dispatch<React.SetStateAction<T>>;
  reset: () => void;
}

/**
 * 提供 state 及 show, close 方法的 Hook，用于处理 Dialog, Drawer 的打开、关闭
 * show, close 的引用不会改变，可以安全的从依赖列表中省略
 */
export default function useModal<T = any>(defaultState?: any): UseModalReturn<T> {
  const [show, setShow] = useState<boolean>(false);
  const [state, setState] = useState<T>(defaultState || {});
  // 有时需要在组件显示时重置一下
  const [key, setKey] = useState(getUniqueKey());

  const open = useCallback((nextState?: T): void => {
    setShow(true);
    setState(nextState);
    setKey(getUniqueKey());
  }, []);

  const handleReset = useCallback((): void => {
    setState(defaultState);
  }, []);

  const close = useCallback((reset = true): void => {
    setShow(false);
    if (reset) {
      handleReset();
    }
  }, []);

  return {
    key,
    show,
    data: state,
    open,
    close,
    setData: setState,
    reset: handleReset,
  };
}
```



## 设计useFetch

### 添加useFetch

顶层组件记得使用引用`FetchContext`包装

```ts
import { useState, useCallback, useContext, createContext, useMemo } from 'react';
import useRefCallback from '@/hooks/useRefCallback';

type CB = (data: Record<any, any>) => void;

type FetchFun = (params?: Record<string, any>, cb?: CB) => void;

export const FetchContext = createContext<Record<string, FetchFun>>({});

function useFetch<T = any>(type: any) {
  const request = useContext(FetchContext)[type];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>(null);
  const handleFetch = useCallback(
    (params?: Record<string, any>, cb?: CB) => {
      setLoading(true);
      if (!request) {
        console.warn(`${type} not attached`);
        return;
      }
      request(params, (res) => {
        setLoading(false);
        setData(res);
        cb && cb(res);
      });
    },
    [request]
  );
  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
  }, []);
  return {
    data,
    loading,
    fetch: handleFetch,
    reset,
  };
}

export function useFetchInterceptor(
  interceptor: (
    type: string,
    params: Record<string, any> | undefined,
    callback: CB | undefined,
    next: FetchFun
  ) => void
) {
  const context = useContext(FetchContext);
  const interceptorWrap = useRefCallback(interceptor);

  const wrappedContext = useMemo(() => {
    return Object.keys(context).reduce((acc, type) => {
      acc[type] = (params: any, callback: CB) => {
        interceptorWrap(type, params, callback, context[type]);
      };
      return acc;
    }, {});
  }, [context]);

  return wrappedContext;
}

export default useFetch;
```



### 封装request

```ts
// template`/user/detail/${'id'}`
export function template(strings, ...keys) {
  return {
    toStringURL: (dict) => {
      const result = [strings[0]];
      keys.forEach((key, i) => {
        const value = dict[key];
        result.push(value, strings[i + 1]);
      });
      return result.join('');
    },

    getKeys: () => keys,
  };
}

// 过滤 0 null ‘’ false 等值
function filterFalsy(obj) {
  if (!obj) {
    return null;
  }

  const resultObject = {
    ...obj,
  };

  Object.keys(resultObject).forEach((key) => {
    !resultObject[key] && delete resultObject[key];
  });
  return resultObject;
}

// url使用template写
export default function fetchJson(url, options) {
  if (typeof url === 'object') {
    const keys = url.getKeys();
    url = url.toStringURL(option.params);
    // lodash omit
    option.params = _.omit(option.params, keys);
  }
  
  const method = (option.method || 'get').toUpperCase();
  const paramString = queryString.stringify(filterFalsy(option.params));
  const api = method === 'GET' ? `${url}?${isExport ? paramString : encodeURI(paramString)}` : url;
    
    
  const defaultOption = {
    url: api,
    method,
    headers: {
      'content-type': 'application/json',
    },
    extraOption: {
      // 对于这几个方法都需要提醒
      notify: !!['POST', 'PUT', 'PATCH'].includes(method),
    },
    // 不让axios拦截错误status code
    validateStatus: () => true,
  };
	
   return axios(_.merge(defaultOption, {
       data: option.body,
       ..._.omit(option, 'params')
   }))
    .then(checkResponseCode)
    .catch(checkResponseCode)
    .then(checkDataStatus);
}

function checkResponseCode(response) {
    const isRespNormal = !!response.status;

    const code = isRespNormal ? response.status : _.get(response, 'response.status');
      const data = isRespNormal ? response.data : _.get(response, 'response.data');
      
    switch(code) {
        case 200:
            return Promise.resolve({
                status: 'success',
                message: data.message,
                page: data.page,
                data,
                response
            })
        case 400:
            return Promise.resolve({
                status: 'invalid',
                message: data.message,
                response
            })
        // ...
    }
}

function checkDataStatus(response) {
    const config = _.get(data, 'response.config');
    switch(data.status) {
        case 200: {
          // 如果某个 Action 不需要消息提醒，设置 extraOption.notify=false 就可以了;
          const isNotify = _.get(config, 'extraOption.notify');
          isNotify && Alert.success('操作成功');

          return Promise.resolve(data);
        }
        case 400: {
			alert(data.message || '操作失败');
            return Promise.resolve(data);
        }
         // ...
        default: {
            return Promise.reject(data)
        }
    }
}

```



### 封装请求方法

```ts
export function fetchHookCB(cb) {
  return ({ data }) => {
    cb(data);
  };
}

export function requestCallback(api, config, callback) {
  fetchJson(api, config).then(fetchHookCB(callback));
}
```





### 添加请求文件

```ts
interface FetchType {
    GET_DETAIL = 'GET_DETAIL';
}

function useDetail(otherParams) {
    const fetchMap = useMemo(() => ({
        [FetchType.GET_DETAIL]: (params, cb) => {
            requestCallback(template`/detail/${'id'}`, {params: {...params, ...otherParams}})
        }
    }), [])
    return fetchMap;
}
```



### 引用组件

组件需要包裹到顶层组件当中

```tsx
import { FetchContext } from './useFetch'

function App() {
    const detailMap = useDetail();
    return <FetchContext.Provider {
            useMemo(()=>({...detailMap}), [detailMap])
        }>
    	{children}
    </FetchContext.Provider>
}
```



### 使用useFetch

```tsx
import useFetch from './useFetch'
function Detail() {
    const detail = useFetch(FetchType.GET_DETAIL);
    useEffect(() => {
        detail.fetch({ id: 1 }, () => {
            console.log('这里是回调函数')
        })
    }, [])
    console.log(detail.data, detail.loading)
}
```



### 使用useFetchInterceptor

```tsx
import {useFetchInterceptor, FetchContext} from './useFetch'
function App() {
    const interceptor = useFetchInterceptor((type, params, callback, next) => {
	switch(type) {
        case FetchType.GET_DETAIL:
        	Promise.then(callback);
            break;
        default:
            next(params, callback);
    }
})
    return <FetchContext.Provider value={interceptor}>{children}</FetchContext.Provider>
}
```

