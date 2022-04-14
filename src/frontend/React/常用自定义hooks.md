# 常用自定义hooks

## usePersistFn

> 替代useCallback添加依赖，使用它可以不用加依赖值

```ts
import { useCallback, useRef } from 'react';

export type noop = (...args: any[]) => any;

/**
 * @see [详见](https://ahooks.js.org/zh-CN/hooks/advanced/use-persist-fn)
 * @see https://github.com/alibaba/hooks/blob/master/packages/hooks/src/usePersistFn/index.ts
 * @param fn
 */
function usePersistFn<T extends noop>(fn: T) {
  const ref = useRef<any>(() => {
    throw new Error('Cannot call function while rendering.');
  });

  ref.current = fn;

  const persistFn = useCallback(((...args) => ref.current(...args)) as T, [ref]);

  return persistFn;
}

export default usePersistFn;
```

```ts
const App = () => {
    const change = usePersistFn(() => {
        // ...logic
    })
}
```





## useCatchData

```ts
import { useState, useCallback, useRef, useEffect } from 'react';

let cacheData: any = null;

const useCacheData = (defaultData: any) => {
  const [data, setData] = useState(() => {
    return cacheData || defaultData;
  });

  const prevData = useRef(data);
  useEffect(() => {
    prevData.current = data;
  });

  const update = useCallback((data) => {
    cacheData = data;
    setData(data);
  }, []);

  return { data, update, prevData: prevData.current };
};

export default useCacheData;
```

