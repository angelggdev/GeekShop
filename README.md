# Geek Shop

### Front-End for E-commerce App developed with:

- ReactJs
- React-Bootstrap
- Firebase
- Formik

## Views

### Route '/'

This route renders the ItemListContainer Component, that displays the catalogue of products.

### Route '/item/:itemId'

This route renders the details of the item with the id 'itemId'.

### Route '/about'

This route renders the About Component.

### Route '/categories/:categoryName'

This route renders the list of products of the category 'categoryName'.

### Route '/contact'

This route renders the Contact Component.

### Route '/cart'

This route renders the Cart Component, that shows the list of items added to the cart, the total price and a form to enter the user's data and finish the purchase.

### Other routes

Any other route will render the Error component, letting the user know that an empty url has been accessed.

## Components

### NavBar

    Component that renders the navigation bar
### NavMobile

    Component that renders the mobile version of the menu

### NavLinks

    Component that renders the links from the menu in the navigation bar (in both the PC and mobile versions).
    This component maps the categories array from the database to render the name of each category.

### CartWidget

    Component that renders the icon for the cart in the navigation bar.
    This component shows the number of items the user stores in the cart.

### ItemListContainer

    Component that renders the catalogue.
    It calls the function getItems from the service firebase.js to get the items array from the database.

### ItemList

    Component that maps the catalogue's items and renders one Item component for every item.

### Item

    Component that renders the item's data.

### ItemDetailContainer

    Component that renders the ItemDetail component.
    It calls the function getItems from the service firebase.js to get the selected item from the database.

### ItemDetail

    Component that renders the details of an item.

### ItemCount

    Component that renders the buttons to add products to the cart.
    It calls the function addItems from the cartContext.js.
### Cart

    Component that renders the Cart View.
    It renders the CartForm, CartItem and NotificationModal components.
    It maps the cartItems array and renders one CartItem component for each item in the array.

### CartForm

    Component that renders the form that the user has to fill to create an order.
    It uses the function saveOrder from the cartContext to create an order.

### CartItem

    Component that renders an item from the cartItems array.

### NotificationModal 

    Component that renders the success or error message after an order is created.
    It only shows if the state showModal from the cartContext.js is true.

### About

    Component that renders the About View.

### Contact 

    Component that renders the Contact View.

### Footer

    Component that renders the footer.

### Error

    Component that renders the error page.

## Services

### Firebase

The service __firebase.js__ provides the functions needed to interact with Cloud Firestore in order to obtain information from the database.

- __getDocuments__:
    
    Function that brings information from the database. It receives five parameters:
        
        -col (string): name of the collection that provides the information.
        -isOneItem (boolean): true if you want to get only one document form database, false if you want to get more than one item.
        -filter (string or boolean): if you want to filter the documents, provide a string that will work as the parameter from the database that you want to compare against your variable. In case you don't need to filter, provide false.
        -operator(string or boolean): provide the operator that will compare the filter with the variable. In case you don't need to filter, provide false.
        -compareTo(string or boolean): provide the variable that will be compared with the filter. In case you don't need to filter, provide false.

- __createOrder__:

    Function that allows the Cart Component to create an order in the database. It receives five parameters:

        -name (string): name of the buyer.
        -phone (number) : phone of the buyer.
        -email (string) : email of the buyer.
        -products (object) : products in the cart.
        -totalPrice (number) : total price of the products.


*To use this service you will need to store your own firebase credentials in the .env file to access the database (a .env example file is available in the repository to serve as a guide for this).*

## Contexts

### CartContext

The context __cartContext.js__ provides several functions to allow the user to buy products.

- __isInCart__: function that receives the parameter 'id' with the type string. It allows the Cart component to know if the item selected by the user is already in the cart.
- __removeItem__: function that receives the parameter 'itemId' with the type string. It allows the user to remove an item from the cart.
- __clear__: function that doesn't receive any parameters and allows the user to remove all elements from the cart.
- __getTotal__: function that doesn't receive any parameters and allows the Cart component to obtain the total price of the items in the cart.
- __addItem__ : function that receives the parameter item as an object, and stores that item in the cart items.
- __saveOrder__: function that allows the user to send the order to the database. It receives three parameters that the user provides through the component CartForm:

        -name (string) : name and lastname of the user.
        -phone (number) : telephone number of the user.
        -email (string) : email of the user.

It also provides variables:

-__cartItems__ : array that stores the items that the user wants to buy.


-__badge__: variable that stores the number of items in the cart.


-__sendingOrder__: variable that stores a boolean value that indicates whether and order is being created or not.


-__notification__: variable that stores a message of success or error that will be shown after the order is created.


-__showModal__: variable that stores a boolean value that indicates whether the modal with the notification has to be shown or not.
