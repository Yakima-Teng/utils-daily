#!/usr/bin/env bash
cd dist
git init
git add -A
git commit -m 'update github pages'
git push -f https://github.com/Yakima-Teng/utils-daily.git master:gh-pages
