![React-Pad](https://user-images.githubusercontent.com/70504137/100419052-155d6700-30c7-11eb-8e23-53bb96ae5efa.png)

# Reactメモ帳

- Front-end(This repository: https://github.com/TaishiKobari/reactPad)
  - [React.js](https://ja.reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Netlify](https://www.netlify.com/)(deploy)
- Back-end(repository: https://github.com/TaishiKobari/expressPad)
  - [Express.js](https://expressjs.com/ja/)
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - [Heroku](https://www.heroku.com/)(deploy)

[This repository](https://github.com/TaishiKobari/reactPad) only has client side code.

The server side GitHub repository is [here](https://github.com/TaishiKobari/expressPad).

## App URL

### **https://clever-villani-c52831.netlify.app/**

## Design

[React Bootstrap](https://react-bootstrap.github.io/)

The basic UI is referenced from "[SE１年目のJavaScript Webアプリケーションフレームワーク道...Expressで簡易メモ帳アプリ(1)](https://qiita.com/Ponzmild/items/900c0403adbad7b843e6)".

## Client Side Routing

[React Router Dom](https://reactrouter.com/web/guides/quick-start)

Routing -[to code](https://github.com/TaishiKobari/reactPad/blob/df99d03c877dbb344036a17230eb1f790b03958f/src/index.tsx#L15)
- dashboard: [/](https://clever-villani-c52831.netlify.app/) (that is https://clever-villani-c52831.netlify.app/ .) -[to code](https://github.com/TaishiKobari/reactPad/blob/df99d03c877dbb344036a17230eb1f790b03958f/src/main.tsx#L37)
- create: [/create](https://clever-villani-c52831.netlify.app/create) -[to code](https://github.com/TaishiKobari/reactPad/blob/df99d03c877dbb344036a17230eb1f790b03958f/src/create.tsx#L14)
- detail: /:memoId -[to code](https://github.com/TaishiKobari/reactPad/blob/df99d03c877dbb344036a17230eb1f790b03958f/src/memoDetail.tsx#L39)
- edit: /edit/:memoId -[to code](https://github.com/TaishiKobari/reactPad/blob/df99d03c877dbb344036a17230eb1f790b03958f/src/edit.tsx#L39)
- delete: /delete/:memoId -[to code](https://github.com/TaishiKobari/reactPad/blob/df99d03c877dbb344036a17230eb1f790b03958f/src/delete.tsx#L40)

## data fetching

[Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
