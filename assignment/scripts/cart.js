console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
addItem = (item) =>{
    basket.push(item);
    console.log(basket);
    return true;
};

addItem('T-shirt');
addItem('Dress pants');

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

empty();
