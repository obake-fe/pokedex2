This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App
https://laughing-cray-9d5255.netlify.app/

## Flow
![pokedex_flow drawio (1)](https://user-images.githubusercontent.com/39367757/168613202-36e47b87-d0b7-4f7a-a1dc-864f9aafb90f.png)


## Node.js

```shell
14.15.1
```

## Scripts
```shell
# install
yarn

# start
yarn start

# unit test
yarn test
yarn test --coverage

# e2e test
yarn cypress

# storybook
yarn storybook

# build
yarn build:local
yarn build:prod
```

## Directory Structure
┏	api<br>
┣	components<br>
┃&nbsp;	┣ App.tsx<br>
┃&nbsp;	┣ atoms<br>
┃&nbsp;	┣ molecules<br>
┃&nbsp;	┣ organisms<br>
┃&nbsp;	┣ templates<br>
┃&nbsp;	┗ pages<br>
┣	containers<br>
┃&nbsp;	┣ atoms<br>
┃&nbsp;	┣ molecules<br>
┃&nbsp;	┗ organisms<br>
┣ store<br>
┣ constants<br>
┣ sagas<br>
┣ styles<br>
┣ utils<br>
┣ tests<br>
┃&nbsp;	┣ api<br>
┃&nbsp;	┣ sagas<br>
┃&nbsp;	┗ utils<br>
┣ stories<br>
┃&nbsp;	┣ atoms<br>
┃&nbsp;	┗ molecules<br>
┗ index.tsx

## Coding Rules

### Don't use default export
[なぜ default export を使うべきではないのか？ - LINE ENGINEERING](https://engineering.linecorp.com/ja/blog/you-dont-need-default-export/)

### Don't use any type
[any型で諦めない React.EventCallback](https://qiita.com/Takepepe/items/f1ba99a7ca7e66290f24)

### Use const assertion in ActionCreator's return value type
[TypeScript3.4 の const assertion - Qiita](https://qiita.com/Takepepe/items/f39c249ed31e546ecb7c)

### Use React.VFC when define React Component Type
[Reactコンポーネントの定義にFCではなくVFCを使う](https://ikesyo.hatenablog.com/entry/2020/12/18/141737)
