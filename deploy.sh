#!/bin/sh

# 只要有一条命令不为true，则退出
set -e

echox () {
  date=`date '+%Y-%m-%d %H:%M:%S'`
  echo -e "\e[1;35m[$date]\e[0m \e[1;34m$1\e[0m"
  if [ ! $2 ];then
    eval $1
  fi
}

buildGitee () {
  echox '开始部署gitee' 1

  echox 'cd ../../'

  echox 'npm run build -- --gitee'

  echox 'git-auto push -m "deploy" '
}

buildGithub () {
  echox "开始部署github" 1

  echox 'cd .vitepress/dist'

  echox 'git init'

  echox 'git add .'

  echox 'git commit -m "deploy"'

  echox 'git branch -m master'

  echox 'git push -f git@github.com:feiyan-Nan/feiyan-Nan.github.io.git master'

  echox 'cd ..'

  echox 'rm -rf dist'
}

echox '开始构建' 1

echox 'npm run build'

#echox 'git-auto push -m "deploy" '
#
#echox '开始部署服务器' 1
#
#echox 'npm run deploy'

buildGithub

#buildGitee
