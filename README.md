# Geek Shop

### Front-End for E-commerce App developed with:

- ReactJs
- React-Bootstrap
- Firebase

## Components

## Services

### Firebase

The service __firebase.js__ provides the functions needed to interact with Cloud Firestore in order to obtain information from the database.

- __getDocuments__:
    
    Function that receives five parameters:
        
        -col (string): name of the collection that provides the information.
        -isOneItem (boolean): true if you want to get only one document form database, false if you want to get more than one item.
        -filter (string or boolean): if you want to filter the documents, provide a string that will work as the parameter from the database that you want to compare against your variable. In case you don't need to filter, provide false.
        -operator(string or boolean): provide the operator that will compare the filter with the variable. In case you don't need to filter, provide false.
        -compareTo(string or boolean): provide the variable that will be compared with the filter. In case you don't need to filter, provide false.

    
## Contexts

### CartContext

The context __cartContext.js__ provides several functions to allow the user to buy products.

- __isInCart__: function that receives the parameter 'id' with the type string. It allows the Cart component to know if the item selected by the user is already in the cart.
- __removeItem__: function that receives the parameter 'itemId' with the type string. It allows the user to remove an item from the cart.
- __clear__: function that doesn't receive any parameters and allows the user to remove all elements from the cart.
- __getTotal__: function that doesn't receive any parameters and allows the Cart component to obtain the total price of the items in the cart.
- __saveOrder__: function that allows the user to send the order to the database. It receives three parameters that the user provides through the component CartForm:

        -name (string) : name and lastname of the user.
        -phone (number) : telephone number of the user.
        -email (string) : email of the user.

