const products = [
    {
        id: 1,
        name:"Teclado",
        description: "Teclado con RGB gamer",
        stock: 5,
        image:"",
        price:250,
    },
    {
        id: 2,
        name:"Mouse logitech",
        description: "MouseG305 gamer",
        stock: 10,
        image:"",
        price:100,
    },
    {
        id: 3,
        name:"TV smart samsung",
        description: "Television smart de 70pulgadas",
        stock: 12,
        image:"",
        price:300,
    },
    {
        id: 4,
        name:"SmartWatch",
        description: "Reloj Smart Watch apple",
        stock: 4,
        image:"",
        price:400,
    },
    {
        id: 5,
        name:"Auriculares G733",
        description: "Auriculares gamer Logitethc G733 con RGB",
        stock: 15,
        image:"",
        price:300,
    }
];

const getPorducts = () => {
    return new Promise ((resolve, reject)=> {

        setTimeout(()=> {
            resolve(products);
        },3000);

    });
};

export default getPorducts;
