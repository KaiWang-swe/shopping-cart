/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
const cherry = {
  name: 'Carton of Cherries',
  price: 4,
  quantity: 0,
  productId: 111111,
  image: './images/cherry.jpg',
};

const strawberry = {
  name: 'Carton of Strawberry',
  price: 5,
  quantity: 0,
  productId: 222222,
  image: './images/strawberry.jpg',
};

const orange = {
  name: 'Bag of Oranges',
  price: 10,
  quantity: 0,
  productId: 333333,
  image: './images/orange.jpg',
};

products.push(cherry, strawberry, orange)



/* Declare an empty array named cart to hold the items in the cart */

// Although a hashmap would offer better scalability for managing the cart due to easier manipulation and access patterns,
// using a hashmap would require significant changes to the frontend code to handle the different data structure.
// For simplicity and to minimize the impact on existing frontend code, I'll continue using an array for the cart in this implementation.

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
const addProductToCart = function (productId) {
  const product = products.find(product => product.productId === productId);

  // Error handling
  if (!product) {
    throw new Error('No such product!');
  };

  if (!cart.includes(product)) {
    cart.push(product);
  };
  product.quantity++;
};


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
const increaseQuantity = function (productId) {
  const product = products.find(product => product.productId === productId);

  // Error handling
  if (!product) {
    throw new Error('No such product!')
  };

  product.quantity++;
};


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
const decreaseQuantity = function (productId) {
  const product = products.find(product => product.productId === productId);

  // Error handling
  if (!product) {
    throw new Error('No such product!');
  };

  if (!cart.includes(product)) {
    throw new Error(`There is no ${product.name} in the cart!`);
  };

  product.quantity--;

  if (product.quantity === 0) {
    cart.splice(cart.indexOf(product), 1);
  }
};


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
const removeProductFromCart = function (productId) {
  const product = products.find(product => product.productId === productId);

  // Error handling
  if (!cart.includes(product)) {
    return;
  };

  product.quantity = 0;
  cart.splice(cart.indexOf(product), 1);
};


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/


let totalPaid = 0


// I enjoy these Functional Programming techiques such as reduce and forEach methods
const cartTotal = function () {
  return cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
};


/* Create a function called emptyCart that empties the products from the cart */
const emptyCart = function () {
  cart = []
  products.forEach((product) => product.quantity = 0)
};


/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
const pay = function (amount) {
  let balance = totalPaid + amount - cartTotal()
  if (balance >= 0) {
    return balance;
  }
  else {
    totalPaid += amount
    return balance
  };
};


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}