// console.log('Script is loaded');

// // Open cart sidebar
// const Ebi = document.querySelector(".Tu");
// const Tonyi = document.querySelector(".cart-sidebar");
// const James = document.querySelector(".fa-times");

// Ebi.addEventListener("click", () => {
//     Tonyi.classList.add("show");
// });

// James.addEventListener("click", () => {
//     Tonyi.classList.remove("show");
// });

// // Function to update the number of items in the cart
// function increaseQuantity() {
//     const itemsNo = document.querySelector(".noi");
//     if (!itemsNo) {
//         console.error('Element to display item quantity not found');
//         return;
//     }
    
//     let mele = [];
//     const product = localStorage.getItem("products");
    
//     if (product) {
//         try {
//             mele = JSON.parse(product);
//         } catch (error) {
//             console.error("Error parsing products from localStorage", error);
//             return;
//         }
//     }

//     const itemQuantity = mele.length;
//     itemsNo.innerHTML = itemQuantity;
// }

// // Function to clear the cart
// function clearCart() {
//     const cartContent = document.querySelector('.cart-content');
//     if (!cartContent) {
//         console.error('Cart content element not found');
//         return;
//     }
    
//     cartContent.innerHTML = '';
//     localStorage.removeItem('products');
//     increaseQuantity(); // Update cart count after clearing
//     console.log("Cart cleared.");
// }

// // Fetch items from the products.json file
// fetch("products.json")
//     .then((response) => response.json())
//     .then((data) => {
//         const productList = document.querySelector(".product-list");
        
//         data.items.forEach((item, id2) => {
//             const productDiv = document.createElement("div");
//             productDiv.innerHTML = `
//                 <div class="product-card">
//                     <h3>${item.fields.title}</h3>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <button class="add-to-cart">
//                         <i class="fa solid fa-cart-plus" style="margin-right:0.1em; font-size:1em;"></i> Add to Cart
//                     </button>
//                     <div class="product-name">${item.fields.title}</div>
//                     <div class="product-pricing">$${item.fields.price}</div>
//                 </div>
//             `;
//             productList.appendChild(productDiv);
//         });

//         const addToCartIcons = document.querySelectorAll('.add-to-cart');

//         addToCartIcons.forEach((btn, id2) => {
//             btn.addEventListener("click", () => {
//                 const itemsToAdd = data.items[id2];
//                 const addedProducts = localStorage.getItem('products');
//                 let card = [];
                
//                 if (addedProducts) {
//                     card = JSON.parse(addedProducts);
//                 }

//                 if (card.length === 0) {
//                     card.push(itemsToAdd);
//                     localStorage.setItem("products", JSON.stringify(card));
//                 } else {
//                     let itExists = false;
                    
//                     card.forEach(item => {
//                         if (item.sys.id === itemsToAdd.sys.id) {
//                             itExists = true;
//                         }
//                     });
                    
//                     if (!itExists) {
//                         card.push(itemsToAdd);
//                         localStorage.setItem("products", JSON.stringify(card));
//                         console.log("Product added:", itemsToAdd);
//                     } else {
//                         console.log("Product already in cart");
//                     }
//                 }

//                 increaseQuantity();
//             });
//         });

//         // Show items in the cart
//         const itemsToShow = localStorage.getItem("products");

//         if (itemsToShow) {
//             let james = [];
//             try {
//                 james = JSON.parse(itemsToShow);
//             } catch (error) {
//                 console.error("Error parsing items from localStorage", error);
//                 return;
//             }

//             const cartContent = document.querySelector(".cart-content"); 
            
//             if (!cartContent) {
//                 console.error("Product container not found in the DOM.");
//                 return;
//             }

//             cartContent.innerHTML = ''; // Clear previous content

//             james.forEach((item) => {
//                 let cartItem = document.createElement("div");
//                 cartItem.classList.add("cart-product");
//                 cartItem.innerHTML = `
//                     <h3>${item.fields.title}</h3>
//                     <p>$${item.fields.price}</p>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                 `;
//                 cartContent.appendChild(cartItem);
//             });
//         } else {
//             console.log("No products found in the cart.");
//         }

//         // Event listener for the "Clear Cart" button
//         const clearCartButton = document.querySelector('.clear-cart .clear-cart-btn');
//         if (clearCartButton) {
//             clearCartButton.addEventListener('click', clearCart);
//             console.log("Clear Cart button initialized.");
//         } else {
//             console.error('Clear Cart button not found');
//         }
//     })
//     .catch((error) => {
//         console.error("Error fetching products:", error);
//     });

// // Call increaseQuantity when the page loads to reflect the current cart count
// window.addEventListener('DOMContentLoaded', increaseQuantity);




// Open cart sidebar
// const Ebi = document.querySelector(".Tu");
// const Tonyi = document.querySelector(".cart-sidebar");
// const James = document.querySelector(".fa-times");

// Ebi.addEventListener("click", () => {
//     Tonyi.classList.add("show");
// });

// James.addEventListener("click", () => {
//     Tonyi.classList.remove("show");
// });

// // Function to update the number of items in the cart
// function increaseQuantity() {
//     const itemsNo = document.querySelector(".noi");
//     if (!itemsNo) {
//         console.error('Element to display item quantity not found');
//         return;
//     }

//     let mele = [];
//     const product = localStorage.getItem("products");

//     if (product) {
//         try {
//             mele = JSON.parse(product);
//         } catch (error) {
//             console.error("Error parsing products from localStorage", error);
//             return;
//         }
//     }

//     const itemQuantity = mele.length;
//     itemsNo.innerHTML = itemQuantity;
// }

// // Function to show items in the cart
// function showItemsInCart() {
//     const itemsToShow = localStorage.getItem("products");

//     const cartContent = document.querySelector(".cart-content");

//     // Clear previous content to avoid duplicates
//     cartContent.innerHTML = '';

//     if (itemsToShow) {
//         let james = [];
//         try {
//             james = JSON.parse(itemsToShow);
//         } catch (error) {
//             console.error("Error parsing items from localStorage", error);
//             return;
//         }

//         james.forEach((item) => {
//             let cartItem = document.createElement("div");
//             cartItem.classList.add("cart-product");
//             cartItem.innerHTML = `
//                 <h3>${item.fields.title}</h3>
//                 <p>$${item.fields.price}</p>
//                 <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                 <div class="product-remove">${cartItem.id}
//                 <a href="#" style="color:red;">Remove</a></div>
//                 <div class="plus-minus">
//                 <i class="fa fa-angle-left" data-id="${item.id}"></i>
//                 <span class="no-of-items">${item.amount}?</span> data-id="${item.id}</i>
//             `;
//             cartContent.appendChild(cartItem);
//         });
//     } else {
//         console.log("No products found in the cart.");
//     }
// }

// // Fetch items from the products.json file
// fetch("products.json")
//     .then((response) => response.json())
//     .then((data) => {
//         const productList = document.querySelector(".product-list");

//         data.items.forEach((item, id2) => {
//             const productDiv = document.createElement("div");
//             productDiv.innerHTML = `
//                 <div class="product-card">
//                     <h3>${item.fields.title}</h3>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <button class="add-to-cart">
//                         <i class="fa solid fa-cart-plus" style="margin-right:0.1em; font-size:1em;"></i> Add to Cart
//                     </button>
//                     <div class="product-name">${item.fields.title}</div>
//                     <div class="product-pricing">$${item.fields.price}</div>
//                 </div>
//             `;
//             productList.appendChild(productDiv);
//         });

//         const addToCartIcons = document.querySelectorAll('.add-to-cart');

//         addToCartIcons.forEach((btn, id2) => {
//             btn.addEventListener("click", () => {
//                 const itemsToAdd = data.items[id2];
//                 const addedProducts = localStorage.getItem('products');
//                 let card = [];

//                 if (addedProducts) {
//                     card = JSON.parse(addedProducts);
//                 }

//                 let itExists = false;
//                 card.forEach(item => {
//                     if (item.sys.id === itemsToAdd.sys.id) {
//                         itExists = true;
//                     }
//                 });

//                 if (!itExists) {
//                     card.push(itemsToAdd);
//                     localStorage.setItem("products", JSON.stringify(card));
//                     console.log("Product added:", itemsToAdd);

//                     // Update the cart content immediately after adding a product
//                     showItemsInCart();  // Call the function to display the new item
//                     increaseQuantity();  // Update cart item count
//                 } else {
//                     console.log("Product already in cart");
//                 }
//             });
//         });

//         // Show items in the cart when the page loads
//         showItemsInCart();
//     })
//     .catch((error) => {
//         console.error("Error fetching products:", error);
//     });

// // Call increaseQuantity when the page loads to reflect the current cart count
// window.addEventListener('DOMContentLoaded', increaseQuantity);

// // Event listener for the "Clear Cart" button
// function clearCart() {
//     const cartContent = document.querySelector('.cart-content');
//     if (!cartContent) {
//         console.error('Cart content element not found');
//         return;
//     }

//     cartContent.innerHTML = '';  // Clear the displayed items
//     localStorage.removeItem('products');  // Remove from localStorage
//     increaseQuantity();  // Update cart item count
//     console.log("Cart cleared.");
// }

// const clearCartButton = document.querySelector('.clear-cart .clear-cart-btn');
// if (clearCartButton) {
//     clearCartButton.addEventListener('click', clearCart);
//     console.log("Clear Cart button initialized.");
// } else {
//     console.error('Clear Cart button not found');
// }


// console.log('Script is loaded');

// // Open cart sidebar
// const Ebi = document.querySelector(".Tu");
// const Tonyi = document.querySelector(".cart-sidebar");
// const James = document.querySelector(".fa-times");

// Ebi.addEventListener("click", () => {
//     Tonyi.classList.add("show");
// });

// James.addEventListener("click", () => {
//     Tonyi.classList.remove("show");
// });

// // Function to update the number of items in the cart
// function increaseQuantity() {
//     const itemsNo = document.querySelector(".noi");
//     if (!itemsNo) {
//         console.error('Element to display item quantity not found');
//         return;
//     }
    
//     let mele = [];
//     const product = localStorage.getItem("products");
    
//     if (product) {
//         try {
//             mele = JSON.parse(product);
//         } catch (error) {
//             console.error("Error parsing products from localStorage", error);
//             return;
//         }
//     }

//     const itemQuantity = mele.length;
//     itemsNo.innerHTML = itemQuantity;
// }

// // Fetch items from the products.json file
// fetch("products.json")
//     .then((response) => response.json())
//     .then((data) => {
//         const productList = document.querySelector(".product-list");
        
//         data.items.forEach((item, id2) => {
//             const productDiv = document.createElement("div");
//             productDiv.innerHTML = `
//                 <div class="product-card">
//                     <h3>${item.fields.title}</h3>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <button class="add-to-cart">
//                         <i class="fa solid fa-cart-plus" style="margin-right:0.1em; font-size:1em;"></i> Add to Cart
//                     </button>
//                     <div class="product-name">${item.fields.title}</div>
//                     <div class="product-pricing">$${item.fields.price}</div>
//                 </div>
//             `;
//             productList.appendChild(productDiv);
//         });

//         const addToCartIcons = document.querySelectorAll('.add-to-cart');

//         addToCartIcons.forEach((btn, id2) => {
//             btn.addEventListener("click", () => {
//                 const itemsToAdd = data.items[id2];
//                 const addedProducts = localStorage.getItem('products');
//                 let cart = [];

//                 if (addedProducts) {
//                     cart = JSON.parse(addedProducts);
//                 }

//                 let itExists = false;
//                 cart.forEach(item => {
//                     if (item.sys.id === itemsToAdd.sys.id) {
//                         itExists = true;
//                         item.amount += 1; // Increment amount if item exists
//                     }
//                 });

//                 if (!itExists) {
//                     itemsToAdd.amount = 1;  // Set initial amount
//                     cart.push(itemsToAdd);
//                 }

//                 localStorage.setItem("products", JSON.stringify(cart));

//                 increaseQuantity();
//                 displayCartItems();  // Update cart display
//             });
//         });

//         displayCartItems();  // Show items when page loads
//     })
//     .catch((error) => {
//         console.error("Error fetching products:", error);
//     });

// // Function to display cart items
// function displayCartItems() {
//     const itemsToShow = localStorage.getItem("products");
//     const cartContent = document.querySelector(".cart-content");

//     if (!cartContent) {
//         console.error("Product container not found in the DOM.");
//         return;
//     }

//     cartContent.innerHTML = '';  // Clear the cart content before rendering

//     if (itemsToShow) {
//         let cartItems = [];
//         try {
//             cartItems = JSON.parse(itemsToShow);
//         } catch (error) {
//             console.error("Error parsing items from localStorage", error);
//             return;
//         }

//         cartItems.forEach((item) => {
//             let cartItemDiv = document.createElement("div");
//             cartItemDiv.innerHTML = `
//                 <div class="cart-item">
//                     <h3>${item.fields.title}</h3>
//                     <p>$${item.fields.price}</p>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <div class="product-remove" data-id="${item.sys.id}">
//                         <a href="#" style="color:red;">Remove</a>
//                     </div>
//                     <div class="plus-minus">
//                         <i class="fa fa-angle-left" data-id="${item.sys.id}"></i>
//                         <span class="no-of-items">${item.amount}</span>
//                         <i class="fa fa-angle-right" data-id="${item.sys.id}"></i>
//                     </div>
//                 </div>
//             `;
//             cartContent.appendChild(cartItemDiv);
//         });
//     } else {
//         console.log("No products found in the cart.");
//     }
// }

// // Call increaseQuantity when the page loads
// window.addEventListener('DOMContentLoaded', increaseQuantity);

// // Function to clear the cart
// function clearCart() {
//     const cartContent = document.querySelector(".cart-content");
//     if (cartContent) {
//         cartContent.innerHTML = '';  // Clear the cart display
//     }
//     localStorage.removeItem('products');  // Clear the cart from localStorage
//     increaseQuantity();  // Reset the cart count at the top
// }
// const clearCartButton = document.querySelector('.clear-cart');
// clearCartButton.addEventListener('click', clearCart);


// Open cart sidebar
// const Ebi = document.querySelector(".Tu");
// const Tonyi = document.querySelector(".cart-sidebar");
// const James = document.querySelector(".fa-times");

// Ebi.addEventListener("click", () => {
//     Tonyi.classList.add("show");
// });

// James.addEventListener("click", () => {
//     Tonyi.classList.remove("show");
// });

// // Function to update the number of items in the cart
// function increaseQuantity() {
//     const itemsNo = document.querySelector(".noi");
//     if (!itemsNo) {
//         console.error('Element to display item quantity not found');
//         return;
//     }
    
//     let mele = [];
//     const product = localStorage.getItem("products");
    
//     if (product) {
//         try {
//             mele = JSON.parse(product);
//         } catch (error) {
//             console.error("Error parsing products from localStorage", error);
//             return;
//         }
//     }

//     const itemQuantity = mele.length;
//     itemsNo.innerHTML = itemQuantity;
// }

// // Fetch items from the products.json file
// fetch("products.json")
//     .then((response) => response.json())
//     .then((data) => {
//         const productList = document.querySelector(".product-list");
        
//         data.items.forEach((item, id2) => {
//             const productDiv = document.createElement("div");
//             productDiv.innerHTML = `
//                 <div class="product-card">
//                     <h3>${item.fields.title}</h3>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <button class="add-to-cart">
//                         <i class="fa solid fa-cart-plus" style="margin-right:0.1em; font-size:1em;"></i> Add to Cart
//                     </button>
//                     <div class="product-name">${item.fields.title}</div>
//                     <div class="product-pricing">$${item.fields.price}</div>
//                 </div>
//             `;
//             productList.appendChild(productDiv);
//         });

//         // Add functionality to all "Add to Cart" buttons
//         const addToCartIcons = document.querySelectorAll('.add-to-cart');

//         addToCartIcons.forEach((btn, id2) => {
//             btn.addEventListener("click", () => {
//                 const itemsToAdd = data.items[id2];
//                 const addedProducts = localStorage.getItem('products');
//                 let card = [];
                
//                 if (addedProducts) {
//                     card = JSON.parse(addedProducts);
//                 }

//                 let itExists = false;

//                 card.forEach(item => {
//                     if (item.sys.id === itemsToAdd.sys.id) {
//                         itExists = true;
//                         item.amount = (item.amount || 1) + 1;
//                     }
//                 });

//                 if (!itExists) {
//                     itemsToAdd.amount = 1; // Initialize amount if adding for the first time
//                     card.push(itemsToAdd);
//                 }

//                 localStorage.setItem("products", JSON.stringify(card));
//                 increaseQuantity();
//                 displayCartItems();
//             });
//         });

//         // Display items in the cart
//         displayCartItems();
//     })
//     .catch((error) => {
//         console.error("Error fetching products:", error);
//     });

// // Function to display cart items
// function displayCartItems() {
//     const itemsToShow = localStorage.getItem("products");
//     const cartContent = document.querySelector(".cart-content");

//     if (!cartContent) {
//         console.error("Product container not found in the DOM.");
//         return;
//     }

//     cartContent.innerHTML = ''; // Clear the cart content before rendering

//     if (itemsToShow) {
//         let cartItems = [];
//         try {
//             cartItems = JSON.parse(itemsToShow);
//         } catch (error) {
//             console.error("Error parsing items from localStorage", error);
//             return;
//         }

//         // Iterate over the cart items and display them
//         cartItems.forEach((item) => {
//             let cartItemDiv = document.createElement("div");

//             cartItemDiv.innerHTML = `
//                 <div class="cart-item">
//                     <h3>${item.fields.title}</h3>
//                     <p>$${item.fields.price}</p>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <div class="product-remove" data-id="${item.sys.id}">
//                         <a href="#" style="color:red;">Remove</a>
//                     </div>
//                     <div class="plus-minus">
//                         <i class="fa fa-angle-left" data-id="${item.sys.id}"></i>
//                         <span class="no-of-items">${item.amount || 1}</span>
//                         <i class="fa fa-angle-right" data-id="${item.sys.id}"></i>
//                     </div>
//                 </div>
//             `;

//             cartContent.appendChild(cartItemDiv);
//         });
//     } else {
//         console.log("No products found in the cart.");
//     }
// }

// // Function to clear the cart
// function clearCart() {
//     const cartContent = document.querySelector(".cart-content");
//     cartContent.innerHTML = '';
//     localStorage.removeItem('products');
//     increaseQuantity(); // Update the cart item count after clearing
// }

// // Attach clear cart event listener
// const clearcartButton = document.querySelector('.clear-cart');
// clearcartButton.addEventListener('click', clearCart);

// // Call increaseQuantity when the page loads to reflect the current cart count
// window.addEventListener('DOMContentLoaded', increaseQuantity);


// Log to verify script is loaded
// console.log('Script is loaded');

// // Open cart sidebar
// const Ebi = document.querySelector(".Tu");
// const Tonyi = document.querySelector(".cart-sidebar");
// const James = document.querySelector(".fa-times");

// Ebi.addEventListener("click", () => {
//     Tonyi.classList.add("show");
// });

// James.addEventListener("click", () => {
//     Tonyi.classList.remove("show");
// });

// // Function to update the number of items in the cart
// function increaseQuantity() {
//     const itemsNo = document.querySelector(".noi");
//     if (!itemsNo) {
//         console.error('Element to display item quantity not found');
//         return;
//     }

//     let cartItems = [];
//     const product = localStorage.getItem("products");

//     if (product) {
//         try {
//             cartItems = JSON.parse(product);
//         } catch (error) {
//             console.error("Error parsing products from localStorage", error);
//             return;
//         }
//     }

//     const itemQuantity = cartItems.length;
//     itemsNo.innerHTML = itemQuantity;
// }

// // Fetch items from the products.json file
// fetch("products.json")
//     .then((response) => response.json())
//     .then((data) => {
//         const productList = document.querySelector(".product-list");

//         data.items.forEach((item, id2) => {
//             // Create the product card for each item
//             const productDiv = document.createElement("div");
//             productDiv.innerHTML = `
//                 <div class="product-card">
//                     <h3>${item.fields.title}</h3>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <button class="add-to-cart">
//                         <i class="fa solid fa-cart-plus" style="margin-right:0.1em; font-size:1em;"></i> Add to Cart
//                     </button>
//                     <div class="product-name">${item.fields.title}</div>
//                     <div class="product-pricing">$${item.fields.price}</div>
//                 </div>
//             `;
//             productList.appendChild(productDiv);
//         });

//         // Add functionality to all "Add to Cart" buttons
//         const addToCartIcons = document.querySelectorAll('.add-to-cart');

//         addToCartIcons.forEach((btn, id2) => {
//             btn.addEventListener("click", () => {
//                 const itemsToAdd = data.items[id2];
//                 const addedProducts = localStorage.getItem('products');
//                 let cart = [];

//                 if (addedProducts) {
//                     cart = JSON.parse(addedProducts);
//                 }

//                 let itemExists = false;

//                 cart.forEach(item => {
//                     if (item.sys.id === itemsToAdd.sys.id) {
//                         itemExists = true;
//                         item.amount = (item.amount || 1) + 1; // Increment amount
//                     }
//                 });

//                 if (!itemExists) {
//                     itemsToAdd.amount = 1; // Add amount property to the new product
//                     cart.push(itemsToAdd);
//                 }

//                 localStorage.setItem("products", JSON.stringify(cart));

//                 increaseQuantity();
//                 displayCartItems();
//             });
//         });

//         // Call the displayCartItems function to show current cart content
//         displayCartItems();
//     })
//     .catch((error) => {
//         console.error("Error fetching products:", error);
//     });

// // Function to display cart items
// function displayCartItems() {
//     const itemsToShow = localStorage.getItem("products");
//     const cartContent = document.querySelector(".cart-content");

//     if (!cartContent) {
//         console.error("Product container not found in the DOM.");
//         return;
//     }

//     cartContent.innerHTML = ''; // Clear the cart content before rendering

//     if (itemsToShow) {
//         let cartItems = [];
//         try {
//             cartItems = JSON.parse(itemsToShow);
//         } catch (error) {
//             console.error("Error parsing items from localStorage", error);
//             return;
//         }

//         cartItems.forEach((item) => {
//             let cartItemDiv = document.createElement("div");

//             cartItemDiv.innerHTML = `
//                 <div class="cart-item">
//                     <h3>${item.fields.title}</h3>
//                     <p>$${item.fields.price}</p>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <div class="product-remove" data-id="${item.sys.id}">
//                         <a href="#" style="color:red;">Remove</a>
//                     </div>
//                     <div class="plus-minus">
//                         <i class="fa fa-angle-left" data-id="${item.sys.id}"></i>
//                         <span class="no-of-items">${item.amount || 1}</span>
//                         <i class="fa fa-angle-right" data-id="${item.sys.id}"></i>
//                     </div>
//                 </div>
//             `;

//             cartContent.appendChild(cartItemDiv);
//         });

//         // Add event listeners for increment and decrement buttons
//         const incrementButtons = document.querySelectorAll(".fa-angle-right");
//         const decrementButtons = document.querySelectorAll(".fa-angle-left");

//         incrementButtons.forEach((button) => {
//             button.addEventListener("click", () => {
//                 const productId = button.getAttribute("data-id");
//                 updateCartItemQuantity(productId, "increment");
//             });
//         });

//         decrementButtons.forEach((button) => {
//             button.addEventListener("click", () => {
//                 const productId = button.getAttribute("data-id");
//                 updateCartItemQuantity(productId, "decrement");
//             });
//         });
//     } else {
//         console.log("No products found in the cart.");
//     }
// }

// // Function to update the quantity of a product in the cart
// function updateCartItemQuantity(productId, action) {
//     const products = localStorage.getItem("products");
//     let cartItems = [];

//     if (products) {
//         cartItems = JSON.parse(products);
//     }

//     cartItems = cartItems.map((item) => {
//         if (item.sys.id === productId) {
//             if (action === "increment") {
//                 item.amount = (item.amount || 1) + 1;
//             } else if (action === "decrement") {
//                 item.amount = (item.amount || 1) - 1;

//                 if (item.amount < 1) {
//                     return null;
//                 }
//             }
//         }
//         return item;
//     }).filter(Boolean); // Filter out any null values (items with quantity 0)

//     localStorage.setItem("products", JSON.stringify(cartItems));

//     displayCartItems();
//     increaseQuantity(); // Update the cart item count at the top
// }

// // Function to clear the cart
// function clearCart() {
//     const cartContent = document.querySelector(".cart-content");
//     cartContent.innerHTML = '';
//     localStorage.removeItem('products');
//     increaseQuantity(); // Update the cart item count after clearing
// }

// // Attach clear cart event listener
// const clearcartButton = document.querySelector('.clear-cart');
// clearcartButton.addEventListener('click', clearCart);

// // Call increaseQuantity when the page loads to reflect the current cart count
// window.addEventListener('DOMContentLoaded', increaseQuantity);


// Log to verify script is loaded
// console.log('Script is loaded');



// Log to verify script is loaded
// console.log('Script is loaded');

// // Open cart sidebar
// const Ebi = document.querySelector(".Tu");
// const Tonyi = document.querySelector(".cart-sidebar");
// const James = document.querySelector(".fa-times");

// Ebi.addEventListener("click", () => {
//     Tonyi.classList.add("show");
// });

// James.addEventListener("click", () => {
//     Tonyi.classList.remove("show");
// });

// // Function to update the number of items in the cart
// function increaseQuantity() {
//     const itemsNo = document.querySelector(".noi");
//     if (!itemsNo) {
//         console.error('Element to display item quantity not found');
//         return;
//     }

//     let cartItems = [];
//     const product = localStorage.getItem("products");

//     if (product) {
//         try {
//             cartItems = JSON.parse(product);
//         } catch (error) {
//             console.error("Error parsing products from localStorage", error);
//             return;
//         }
//     }

//     const itemQuantity = cartItems.length;
//     itemsNo.innerHTML = itemQuantity;
// }

// // Function to calculate and display the total amount
// function updateTotalPrice() {
//     const totalAmountElement = document.querySelector('.total-amount');
//     const products = localStorage.getItem("products");
//     let cartItems = [];

//     if (products) {
//         cartItems = JSON.parse(products);
//     }

//     const total = cartItems.reduce((sum, item) => {
//         return sum + (item.fields.price * (item.amount || 1));
//     }, 0);

//     totalAmountElement.innerHTML = total.toFixed(2); // Display total with 2 decimal places
// }

// // Fetch items from the products.json file
// fetch("products.json")
//     .then((response) => response.json())
//     .then((data) => {
//         const productList = document.querySelector(".product-list");

//         data.items.forEach((item, id2) => {
//             // Create the product card for each item
//             const productDiv = document.createElement("div");
//             productDiv.innerHTML = `
//                 <div class="product-card">
//                     <h3>${item.fields.title}</h3>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <button class="add-to-cart">
//                         <i class="fa solid fa-cart-plus" style="margin-right:0.1em; font-size:1em;"></i> Add to Cart
//                     </button>
//                     <div class="product-name">${item.fields.title}</div>
//                     <div class="product-pricing">$${item.fields.price}</div>
//                 </div>
//             `;
//             productList.appendChild(productDiv);
//         });

//         // Add functionality to all "Add to Cart" buttons
//         const addToCartIcons = document.querySelectorAll('.add-to-cart');

//         addToCartIcons.forEach((btn, id2) => {
//             btn.addEventListener("click", () => {
//                 const itemsToAdd = data.items[id2];
//                 const addedProducts = localStorage.getItem('products');
//                 if (productInCart) {
//                     btn.textContent = "In Cart";
//                     btn.disabled = true;
//                 }
//                 let cart = [];

//                 if (addedProducts) {
//                     cart = JSON.parse(addedProducts);
//                 }

//                 let itemExists = false;

//                 cart.forEach(item => {
//                     if (item.sys.id === itemsToAdd.sys.id) {
//                         itemExists = true;
//                         item.amount = (item.amount || 1) + 1; // Increment amount
//                     }
//                 });

//                 if (!itemExists) {
//                     itemsToAdd.amount = 1; // Add amount property to the new product
//                     cart.push(itemsToAdd);
//                 }

//                 localStorage.setItem("products", JSON.stringify(cart));

//                 increaseQuantity();
//                 displayCartItems();
//                 updateTotalPrice(); // Update the total price after adding the item
//                 updateButtonState(productId);
//             });
//         });

//         // Call the displayCartItems function to show current cart content
//         displayCartItems();
//     })
//     .catch((error) => {
//         console.error("Error fetching products:", error);
//     });

// // Function to display cart items
// function displayCartItems() {
//     const itemsToShow = localStorage.getItem("products");
//     const cartContent = document.querySelector(".cart-content");

//     if (!cartContent) {
//         console.error("Product container not found in the DOM.");
//         return;
//     }

//     cartContent.innerHTML = ''; // Clear the cart content before rendering

//     if (itemsToShow) {
//         let cartItems = [];
//         try {
//             cartItems = JSON.parse(itemsToShow);
//         } catch (error) {
//             console.error("Error parsing items from localStorage", error);
//             return;
//         }

//         cartItems.forEach((item) => {
//             let cartItemDiv = document.createElement("div");

//             cartItemDiv.innerHTML = `
//                 <div class="cart-item">
//                     <h3>${item.fields.title}</h3>
//                     <p>$${item.fields.price}</p>
//                     <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
//                     <div class="product-remove" data-id="${item.sys.id}">
//                         <a href="#" style="color:red;">Remove</a>
//                     </div>
//                     <div class="plus-minus">
//                         <i class="fa fa-angle-left" data-id="${item.sys.id}"></i>
//                         <span class="no-of-items">${item.amount || 1}</span>
//                         <i class="fa fa-angle-right" data-id="${item.sys.id}"></i>
//                     </div>
//                 </div>
//             `;

//             cartContent.appendChild(cartItemDiv);
//         });

//         // Add event listeners for increment and decrement buttons
//         const incrementButtons = document.querySelectorAll(".fa-angle-right");
//         const decrementButtons = document.querySelectorAll(".fa-angle-left");
//         const removeButtons = document.querySelectorAll(".product-remove a");

//         incrementButtons.forEach((button) => {
//             button.addEventListener("click", () => {
//                 const productId = button.getAttribute("data-id");
//                 updateCartItemQuantity(productId, "increment");
//             });
//         });

//         decrementButtons.forEach((button) => {
//             button.addEventListener("click", () => {
//                 const productId = button.getAttribute("data-id");
//                 updateCartItemQuantity(productId, "decrement");
//             });
//         });

//         // Add event listeners to remove buttons
//         removeButtons.forEach((button) => {
//             button.addEventListener("click", (event) => {
//                 event.preventDefault(); // Prevent default link behavior
//                 const productId = button.closest(".product-remove").getAttribute("data-id");
//                 removeCartItem(productId);
//             });
//         });

//         // Update the total price after displaying cart items
//         updateTotalPrice();
//     } else {
//         console.log("No products found in the cart.");
//     }
// }

// // Function to update the quantity of a product in the cart
// function updateCartItemQuantity(productId, action) {
//     const products = localStorage.getItem("products");
//     let cartItems = [];

//     if (products) {
//         cartItems = JSON.parse(products);
//     }

//     cartItems = cartItems.map((item) => {
//         if (item.sys.id === productId) {
//             if (action === "increment") {
//                 item.amount = (item.amount || 1) + 1;
//             } else if (action === "decrement") {
//                 item.amount = (item.amount || 1) - 1;

//                 if (item.amount < 1) {
//                     return null;
//                 }
//             }
//         }
//         return item;
//     }).filter(Boolean); // Filter out any null values (items with quantity 0)

//     localStorage.setItem("products", JSON.stringify(cartItems));

//     displayCartItems();
//     increaseQuantity(); // Update the cart item count at the top
//     updateTotalPrice();  // Update the total price after changing quantity
// }

// // Function to remove a product from the cart
// function removeCartItem(productId) {
//     const products = localStorage.getItem("products");
//     let cartItems = [];

//     if (products) {
//         cartItems = JSON.parse(products);
//     }

//     cartItems = cartItems.filter((item) => item.sys.id !== productId); // Remove the product

//     localStorage.setItem("products", JSON.stringify(cartItems));

//     displayCartItems(); // Update the cart display after removal
//     increaseQuantity(); // Update the cart item count
//     updateTotalPrice(); // Update the total price after removal
// }

// // Function to clear the cart
// function clearCart() {
//     const cartContent = document.querySelector(".cart-content");
//     cartContent.innerHTML = '';
//     localStorage.removeItem('products');
//     increaseQuantity(); // Update the cart item count after clearing
//     updateTotalPrice();  // Reset the total price
// }

// // Attach clear cart event listener
// const clearcartButton = document.querySelector('.clear-cart');
// clearcartButton.addEventListener('click', clearCart);

console.log('Script is loaded');

// Open cart sidebar
const Ebi = document.querySelector(".Tu");
const Tonyi = document.querySelector(".cart-sidebar");
const James = document.querySelector(".close-cart");

Ebi.addEventListener("click", () => {
    Tonyi.classList.add("show");
});

James.addEventListener("click", () => {
    Tonyi.classList.remove("show");
});
    const burger = document.querySelector('.burger');
    const menuBar = document.querySelector('.list-items');
    const closeMenu = document.querySelector('.re');

    burger.addEventListener('click', () => {
        menuBar.classList.add('sho3');
    });

    closeMenu.addEventListener('click', () => {
        menuBar.classList.remove('sho3');
    });



// Function to update the number of items in the cart
function increaseQuantity() {
    const itemsNo = document.querySelector(".noi");
    if (!itemsNo) {
        console.error('Element to display item quantity not found');
        return;
    }

    let cartItems = [];
    const product = localStorage.getItem("products");

    if (product) {
        try {
            cartItems = JSON.parse(product);
        } catch (error) {
            console.error("Error parsing products from localStorage", error);
            return;
        }
    }

    const itemQuantity = cartItems.length;
    itemsNo.innerHTML = itemQuantity;
}

// Function to calculate and display the total amount
function updateTotalPrice() {
    const totalAmountElement = document.querySelector('.total-amount');
    const products = localStorage.getItem("products");
    let cartItems = [];

    if (products) {
        cartItems = JSON.parse(products);
    }

    const total = cartItems.reduce((sum, item) => {
        return sum + (item.fields.price * (item.amount || 1));
    }, 0);

    totalAmountElement.innerHTML = total.toFixed(2); // Display total with 2 decimal places
}

// Fetch items from the products.json file
fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
        const productList = document.querySelector(".product-list");

        data.items.forEach((item, id2) => {
            // Create the product card for each item
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `
                <div class="product-card">
                    <h3>${item.fields.title}</h3>
                    <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
                    <button class="add-to-cart" data-id="${item.sys.id}">
                        <i class="fa solid fa-cart-plus" style="margin-right:0.1em; font-size:1em;"></i> Add to Cart
                    </button>
                    <div class="product-name">${item.fields.title}</div>
                    <div class="product-pricing">$${item.fields.price}</div>
                </div>
            `;
            productList.appendChild(productDiv);
        });

        // Add functionality to all "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach((btn, id2) => {
            btn.addEventListener("click", () => {
                const itemsToAdd = data.items[id2];
                const addedProducts = localStorage.getItem('products');
                const productId = btn.getAttribute("data-id");
                
                if (btn.textContent.trim() === "Add to Cart") {
                    btn.textContent = "In Cart";
                    btn.disabled = true;
                }

                let cart = [];

                if (addedProducts) {
                    cart = JSON.parse(addedProducts);
                }

                let itemExists = false;

                cart.forEach(item => {
                    if (item.sys.id === itemsToAdd.sys.id) {
                        itemExists = true;
                        item.amount = (item.amount || 1) + 1; // Increment amount
                    }
                });

                if (!itemExists) {
                    itemsToAdd.amount = 1; // Add amount property to the new product
                    cart.push(itemsToAdd);
                }

                localStorage.setItem("products", JSON.stringify(cart));

                increaseQuantity();
                displayCartItems();
                updateTotalPrice(); // Update the total price after adding the item
            });
        });

        // Call the displayCartItems function to show current cart content
        displayCartItems();
    })
    .catch((error) => {
        console.error("Error fetching products:", error);
    });

// Function to display cart items
function displayCartItems() {
    const itemsToShow = localStorage.getItem("products");
    const cartContent = document.querySelector(".cart-content");

    if (!cartContent) {
        console.error("Product container not found in the DOM.");
        return;
    }

    cartContent.innerHTML = ''; // Clear the cart content before rendering

    if (itemsToShow) {
        let cartItems = [];
        try {
            cartItems = JSON.parse(itemsToShow);
        } catch (error) {
            console.error("Error parsing items from localStorage", error);
            return;
        }

        cartItems.forEach((item) => {
            let cartItemDiv = document.createElement("div");

            cartItemDiv.innerHTML = `
                <div class="cart-item">
                    <h3>${item.fields.title}</h3>
                    <p>$${item.fields.price}</p>
                    <img src="${item.fields.image.fields.file.url}" alt="${item.fields.title}">
                    <div class="product-remove" data-id="${item.sys.id}">
                        <a href="#" style="color:red;">Remove</a>
                    </div>
                    <div class="plus-minus">
                        <i class="fa fa-angle-left" data-id="${item.sys.id}"></i>
                        <span class="no-of-items">${item.amount || 1}</span>
                        <i class="fa fa-angle-right" data-id="${item.sys.id}"></i>
                    </div>
                </div>
            `;

            cartContent.appendChild(cartItemDiv);
        });

        // Add event listeners for increment and decrement buttons
        const incrementButtons = document.querySelectorAll(".fa-angle-right");
        const decrementButtons = document.querySelectorAll(".fa-angle-left");
        const removeButtons = document.querySelectorAll(".product-remove a");

        incrementButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const productId = button.getAttribute("data-id");
                updateCartItemQuantity(productId, "increment");
            });
        });

        decrementButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const productId = button.getAttribute("data-id");
                updateCartItemQuantity(productId, "decrement");
            });
        });

        // Add event listeners to remove buttons
        removeButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                const productId = button.closest(".product-remove").getAttribute("data-id");
                removeCartItem(productId);
            });
        });

        // Update the total price after displaying cart items
        updateTotalPrice();
    } else {
        console.log("No products found in the cart.");
    }
}

// Function to update the quantity of a product in the cart
function updateCartItemQuantity(productId, action) {
    const products = localStorage.getItem("products");
    let cartItems = [];

    if (products) {
        cartItems = JSON.parse(products);
    }

    cartItems = cartItems.map((item) => {
        if (item.sys.id === productId) {
            if (action === "increment") {
                item.amount = (item.amount || 1) + 1;
            } else if (action === "decrement") {
                item.amount = (item.amount || 1) - 1;

                if (item.amount < 1) {
                    return null;
                }
            }
        }
        return item;
    }).filter(Boolean); // Filter out any null values (items with quantity 0)

    localStorage.setItem("products", JSON.stringify(cartItems));

    displayCartItems();
    increaseQuantity(); // Update the cart item count at the top
    updateTotalPrice();  // Update the total price after changing quantity
}

// Function to remove a product from the cart
function removeCartItem(productId) {
    const products = localStorage.getItem("products");
    let cartItems = [];

    if (products) {
        cartItems = JSON.parse(products);
    }

    cartItems = cartItems.filter((item) => item.sys.id !== productId); // Remove the product

    localStorage.setItem("products", JSON.stringify(cartItems));

    displayCartItems(); // Update the cart display after removal
    increaseQuantity(); // Update the cart item count
    updateTotalPrice(); // Update the total price after removal

    // Re-enable "Add to Cart" button if the removed item was previously in the cart
    const productList = document.querySelectorAll(".product-card");
    productList.forEach((product) => {
        const addToCartButton = product.querySelector('.add-to-cart');
        if (addToCartButton && addToCartButton.getAttribute('data-id') === productId) {
            addToCartButton.textContent = "Add to Cart";
            addToCartButton.disabled = false;
        }
    });
}

// Function to clear the cart
function clearCart() {
    const cartContent = document.querySelector(".cart-content");
    cartContent.innerHTML = '';
    localStorage.removeItem('products');
    increaseQuantity(); // Update the cart item count after clearing
    updateTotalPrice();  // Reset the total price
}

// Attach clear cart event listener
const clearcartButton = document.querySelector('.clear-cart');
clearcartButton.addEventListener('click', clearCart);

// Call increaseQuantity when the page loads to reflect the current cart count


// Call increaseQuantity when the page loads to reflect the current cart count
window.addEventListener('DOMContentLoaded', increaseQuantity);

// deletion effect

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".text");
    const originalText = textElement.textContent;
    let index = originalText.length;
    let deleting = true;

    function deleteText() {
        if (index >= 0) {
            textElement.textContent = originalText.slice(0, index);
            index--;
            setTimeout(deleteText, 20); // Adjust the speed of deletion here (100ms per character)
        } else {
            deleting = false;
            setTimeout(addText, 500); // Pause before starting to add text
        }
    }

    function addText() {
        if (index < originalText.length) {
            textElement.textContent = originalText.slice(0, index + 1);
            index++;
            setTimeout(addText, 20); // Adjust the speed of adding text here (100ms per character)
        } else {
            deleting = true;
            setTimeout(deleteText, 500); // Pause before starting to delete text again
        }
    }

    deleteText();
});
