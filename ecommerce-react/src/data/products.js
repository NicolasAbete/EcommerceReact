const products = [
    {
        id: 1,
        name:"Teclado",
        description: "Teclado con RGB gamer",
        stock: 5,
        image:"/img/kumarak552.webp",
        price:250,
        category:"PerifericosGamer",
    },
    {
        id: 2,
        name:"Mouse logitech gamer con sensor hero avanzado",
        description: "MouseG305 gamer",
        stock: 10,
        image:"/img/mouseg305.webp",
        price:100,
        category:"PerifericosGamer",
    },
    {
        id: 3,
        name:"TV smart samsung",
        description: "Television smart de 70pulgadas",
        stock: 12,
        image:"/img/tv.webp",
        price:300,
        category:"TVs",
    },
    {
        id: 4,
        name:"SmartWatch",
        description: "Reloj Smart Watch apple",
        stock: 4,
        image:"/img/applewatch.webp",
        price:400,
        category:"Tecnologia",
    },
    {
        id: 5,
        name:"Auriculares G733",
        description: "Auriculares gamer Logitethc G733 con RGB",
        stock: 15,
        image:"/img/g733.webp",
        price:300,
        category:"PerifericosGamer",
    }
];

const getPorducts = () => {
    return new Promise ((resolve, reject)=> {

        setTimeout(()=> {
            resolve(products);
        },3000);

    });
};

const getProductById = (productId) => {

    return new Promise ((resolve,reject)=>{

        setTimeout (()=>{
            const product = products.find((product)=> product.id === Number(productId) );
            resolve(product);
        }, 3000);

    })
};

export {getPorducts, getProductById};
