console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Required Features:
//if isFull = false, add item.
//if isFull = true, do not add item.
let basket = [];
let maxItems = 5;
// addItem = (item) =>{
//     basket.push(item);
//     //console.log(`${item} was added to the basket. The basket is now:`, basket);
//     return true;
// };


addItem = (item) => {
    if (isFull() === true){
        basket.push(item);
        console.log(`${item} was added to the basket.`);
        return true;
    } else if (isFull() === false){
        console.log(`Basket is full. ${item} was not added.`)
        return false;
    }
};
isFull = () => {
    //false if basket.length < maxItems.
    //true if basket.length >= maxItems.
    if (basket.length < maxItems){
        //console.log('Basket has room.');
        return true;
    } else if (basket.length >= maxItems){ // this is running twice.
        //console.log(`Basket is full.`);
        return false;
    }
};

addItem('T-shirt');
addItem('Dress pants');
addItem('Belt');
addItem('Shoes');
addItem('Tank top');
addItem('SHOULD NOT BE ADDED');


listItems = () => {
    for (let i=0; i<basket.length; i++) {
        console.log(basket[i]);
    }
};

//listItems();

empty = () => { 
    basket = [];
    //console.log(basket);
};

//empty();
//listItems();
//Stretch Goals


//isFull();

removeItem = (item) => {
    let remove = basket.indexOf(item)
    if (remove > -1) {
        let itemRemoved = basket.splice(remove, 1); //(item to remove, how many indexs/spots. 2 would remove the item called out and another one.)
        console.log(`${item} was removed.`)
        return itemRemoved;
    } else {
        return null;
    }
} 
removeItem('Belt');