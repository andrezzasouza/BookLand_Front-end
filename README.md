# Bookland

Bookland is an online bookstore that sells physical books of many types. This project was developed by Andrezza Souza and Pedro Mafra.

You can check the deployed app here: 
https://bookland-bookstore.vercel.app/
</br>
Link to back-end:
https://github.com/andrezzasouza/BookLand_Back-end
</br>
</br>

<img src="./public/BookLand.gif" />

## About

This is a web simulation of an E-Commerce. Below are the implemented features:

- Sign-up
- Sign-in
- Logout
- Collection and Book Pages
- Cart
- Checkout

By using this app any user can create an account, visualize a book info and save it to cart, save address and payment infos for future buys, finish the purchase, and much more.
(Obs.: Use your mobile for a better experience)

## Technologies
Main thechnologies used in the construction of the project:<br>
<p>
  <img src="https://img.shields.io/badge/-Javascript-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-React-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Node.js-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Express-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-PostgreSQL-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Jest-red?style=for-the-badge" />
</p>

## How to run

1. Create a root project folder named BookLand
```
mkdir BookLand
```
2. Clone the front-end repo
```
git clone https://github.com/andrezzasouza/BookLand_Front-end.git
```
3. Install NPM packages for the front-end repo
```
npm install
```
4. Clone the back-end repo as a sibling to the front-end (within the /BookLand folder)
```
git clone https://github.com/andrezzasouza/BookLand_Back-end.git
```
5. Install NPM packages for the back-end repo
```
npm install
```
6. Follow instructions to fully run back-end at https://github.com/andrezzasouza/BookLand_Back-end

7. To run in test or development environments:
* Change API_URL variable in /src/services/api.js from **https://bookland-driven.herokuapp.com** to **http://localhost:yourBackEndPortNumber** with yourBackEndPortNumber being the PORT variable value set in your backend .env file (.env.dev or .env.test)

8. Run the front-end with
```
npm start
```
9. You can optionally build the project running (See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information)
```
npm run build
```
10. Finally access http://localhost:3000 on your favorite browser (unless it is Internet Explorer. In this case, review your life decisions :eyes:)
