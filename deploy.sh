#!/usr/bin/env sh

mkdir deploy
cd deploy
git clone git@github.com:guestccc/guestccc.github.io.git
cd guestccc.github.io
rm -rf `ls |egrep -v '(.git)'`
cp -rf ../../.vuepress/dist/ .
git add .
git commit -m 'deploy'
git push origin master