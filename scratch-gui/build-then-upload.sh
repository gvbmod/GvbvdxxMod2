yarn build

cd build

git init
git add .
git commit -m "Upload website release."
git branch -M website
git remote add origin https://github.com/gvbmod/GvbvdxxMod2.git
git push -f origin website