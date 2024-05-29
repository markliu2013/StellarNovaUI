#!/usr/bin/env sh

# ignore error
# set -e

# build
npm run docs:build

# directory to deploy
cd docs/.vitepress/dist

git remote add stellarnovaui https://github.com/markliu2013/StellarNovaUI.git
git add -A
git commit -m 'deploy'

git push -f stellarnovaui master

# cd -
