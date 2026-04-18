//array of object methods
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
    },
    {
        id: 2,
        name: "Smartphone",
        price: 499.99,
    },
]

console.log(products[0].name);
console.log(products[1].price);
products[0].price = 899.99;
console.log(products[0].price);
products.push({
    id: 3,
    name: "Tablet",
    price: 299.99,
});
console.log(products);
products.pop();
console.log(products);
console.log(products.length);
console.log(products[products.length - 1].name);
console.log(products.find(product => product.id === 2));
console.log(products.filter(product => product.price > 500));