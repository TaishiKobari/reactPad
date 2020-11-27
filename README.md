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

## Data Fetching

[Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)

e.g. POST new memo using Fetch. -[to code](https://github.com/TaishiKobari/reactPad/blob/ac7161f150f9b3facd745fa749ceb9c09f163868/src/create.tsx#L56)

## Form (Controlled Components)

e.g. Controlling <input> tag and submission of <form> tag. -[to code](https://github.com/TaishiKobari/reactPad/blob/ac7161f150f9b3facd745fa749ceb9c09f163868/src/create.tsx#L35)

## React Hooks

- useState()
- useEffect()
- useReducer()

e.g. fetching all memo data in every rendering. -[to code](https://github.com/TaishiKobari/reactPad/blob/ac7161f150f9b3facd745fa749ceb9c09f163868/src/main.tsx#L41)

## TypeScript

e.g. defining type of memo which is fetched from server. -[to code](https://github.com/TaishiKobari/reactPad/blob/ac7161f150f9b3facd745fa749ceb9c09f163868/src/type.tsx#L1)
