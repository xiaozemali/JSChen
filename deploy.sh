#!/usr/bin/env sh
# yarn
# yarn build

# 确保脚本抛出遇到的错误
set -e

echo "blog.jschen.cc" > blog/.vuepress/dist/CNAME

rm -rf deploy
mkdir deploy
cd deploy
git clone git@github.com:guestccc/guestccc.github.io.git
cd guestccc.github.io
rm -rf `ls |egrep -v '(.git)'`
cp -rf ../../blog/.vuepress/dist/* .
git add .
git commit -m 'deploy'
git push origin master

cd ../../
rm -rf deploy