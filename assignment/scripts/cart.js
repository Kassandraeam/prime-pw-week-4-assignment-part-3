console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Required Features:
let basket = [];
addItem = (item) =>{
    basket.push(item);
    //console.log(`${item} was added to the basket. The basket is now:`, basket);
    return true;
};

addItem('T-shirt');
addItem('Dress pants');
addItem('Belt');
addItem('Shoes');
addItem('Second pair of shoes');
addItem('Tank top');

listItems = () => {
    for (let i=0; i<basket.length; i++) {
        console.log(basket[i]);
    }
};

listItems();

empty = () => { 
    basket = [];
    //console.log(basket);
};

//empty();
//listItems();
//Stretch Goals

let maxItems = 5;

isFull = () => {
    //false if basket.length < maxItems.
    //true if basket.length >= maxItems.
    if (basket.length < maxItems){
        console.log('Basket has room.');
        return true;
    } else if (basket.length >= maxItems){
        console.log('Basket is full.');
        return false;
    }
};

//isFull();
