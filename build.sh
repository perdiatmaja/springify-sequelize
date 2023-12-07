echo "build ts to js"
rm -rf "./dist/js"
tsc --build tsconfig.build.json
rm -rf "./dist/js/dist"
