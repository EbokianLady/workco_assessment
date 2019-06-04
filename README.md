# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)

I installed node-sass for scss compatability.
Of particular note: Colors, fonts and button default styles are each in their own file. This prevented a lot of repetition in styling, cleaned up my scss styles and allowed for quick access and ease of styling.

```
.productButton {
  @extend %button;
  @extend %blue-button;
  border-radius: 999px;
  font-size: calc(0.7em + 1vw);
  font-weight: 300;
  padding: 8px 20px;
}
```

I took a mobile-first approach, and implemented changes only as needed in @media queries. For a responsive design, much of the css sizing attributes are based on view-width with min and max values where appropriate.
For each of the icons (shopping cart and x - +) I created an svg with a fill of currentColor, allowing me to reuse the same icon rather than creating multiple for each color.

The cart needed to have a stationary header and footer, but also needed the interior content to scroll if the content was greater than the view-height. Because the size of the cart container varies, I did some calculations to find the available space, the result being a dynamic scrolling list that looks good on all screen sizes.

```
.cartList {
  overflow: scroll;
  max-height: calc(98.8vh - 158px);

  .cartSummary {
    .row {
      margin: 20px 0px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      h2 {
        margin: 0px;
        font-size: calc(0.7em + 1vw);
      }

      h3 {
        margin: 0px;
        font-size: calc(0.7em + 1vw);
        font-weight: 300;
      }
    }
  }
}
```

2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)

For the cart to function, it first needed the ability to open and close. I added in two new constants with corresponding actions and reducers. This is kept in state so that other state changes (such as removing an item for a cart) doesn't reset the the cart to it's default of hidden.

Next up, I implemented adding and removing an item from the cart view. ```addToCart``` was already provided so I connected that function in through the Cart Container and wrote a corresponding ```removeFromCart```. In the case that a product is reduced to a quantity of 0, the reducer conditionally removes that key from the ```quantityByIds``` slice of state entirely.
Additionally, I passed both ```removeFromCart``` and ```removeProductFromCart``` through the products slice of state to restore inventory.

```
const quantityById = (state = initialState.quantityById, action) => {
  const { productId, product } = action;

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [productId]: (state[productId] || 0) + 1 }
    case REMOVE_FROM_CART:
      const newQuantity = state[productId] - 1;
      if (newQuantity > 0) {
        return { ...state, [productId]: newQuantity }
      } else {
        delete state[productId];
        return state;
      }
    case REMOVE_PRODUCT_FROM_CART:
      delete state[product.id];
      return state;
    default:
      return state;
  }
}
```

3. [Hook Up Product API](/tasks/03-product-api.md)

The structure of the product object that was provided differed from the structure of that recieved from the API. I chose to refactor my code to accept the format from the API, because this approach would be better able to handle the eventuality that prices are from varying currencies.

Finally, I did decide to 'hard-code' the product images for the purpose of display. I imagine that a real cart would have a url for an image link, but lacking that within this exercise, I thought it best for presentation.
