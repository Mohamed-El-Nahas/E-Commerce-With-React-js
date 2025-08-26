# 🛒 E-Commerce Website (React)

## 📌 Overview
This is a simple **E-Commerce web app** built with **React**.  
It allows users to browse products, view product details, add to cart, and proceed to checkout.  
Authentication pages (Login/Signup) are also included.

---

## 🚀 Features
- Home Page with featured products  
- Shop Page to browse all items  
- Product Details page  
- **Cart functionality (Redux Toolkit)**  
- Checkout Page  
- Authentication Pages: Login / Signup  
- Global state management using Redux  

---

## 🛠 Tech Stack
- **Frontend:** React.js  
- **State Management:** Redux Toolkit (CartSlice)  
- **Routing:** React Router  
- **Styling:** CSS  

---

## ⚙️ Project Structure
```
E-Commerce-With-React-js/
│── src/
│   ├── components/ (Header, Footer, UI components)
│   ├── pages/ (Home, Shop, ProductDetails, Cart, Checkout, Login, Signup)
│   ├── redux/
│   │   ├── store.js
│   │   └── Slice/CartSlice.js
│   ├── routers/ (Routing setup)
│   └── App.js
```

---

## 🔄 User Flows

### 🟢 Shopping Flow
1. User browses products on **Home/Shop page**.  
2. Clicks on a product → goes to **Product Details**.  
3. Adds product to cart (handled by **Redux**).  
4. Views and updates cart items.  
5. Proceeds to Checkout.  
---

## ▶️ Running the Project
```bash
npm install
npm start
```


Link : https://e-commerce-with-react-js-woad.vercel.app/home
