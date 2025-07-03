const products = [
    {
        id: 1,
        nombre:"Teclado",
        descripcion: "Teclado con RGB gamer",
        stock: 5,
        imagen:"",
    },
    {
        id: 2,
        nombre:"Mouse logitech",
        descripcion: "MouseG305 gamer",
        stock: 10,
        imagen:"",
    },
    {
        id: 3,
        nombre:"TV smart samsung",
        descripcion: "Television smart de 70pulgadas",
        stock: 12,
        imagen:"",
    },
    {
        id: 4,
        nombre:"SmartWatch",
        descripcion: "Reloj Smart Watch apple",
        stock: 4,
        imagen:"",
    },
    {
        id: 5,
        nombre:"Auriculares G733",
        descripcion: "Auriculares gamer Logitethc G733 con RGB",
        stock: 15,
        imagen:"",
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
