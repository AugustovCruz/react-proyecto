const productos = [
    {
    id:1,
    title: "Remera",
    price: 400,
    detail: "la mejor remera del mercado",
    imgurl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/030/513/products/16570313215051-d982d2224177794ac516570315939140-640-0.webp",
    },
    {
    id:2,
    title: "buzo",
    price: 800,
    detail: "el mejor buzo",
    imgurl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/1311-7de0c8aec92793a2f016128282027834-640-0.jpg",
    },
    {
    id:3,
    title: "zapatilla",
    price: 400,
    detail: "la mejor zapas",
    imgurl: "https://media.revistagq.com/photos/600efe822e86c58dd2fc996f/master/pass/adidas%20the-simpsons.jpg",
    },
    {
    id:4,
    title: "pelota",
    price: 400,
    detail: "el mejor balon",
    imgurl: "https://m.media-amazon.com/images/I/51rL1s3z7KL._AC_SX425_.jpg",
    },
    {
    id:5,
    title: "zapatilla",
    price: 800,
    detail: "Ultimo modelo",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahk4lqkTqhSWAheI6dMoZGyxCnzFgIwWO4Q&usqp=CAU",
    },
    {
    id:6,
    title: "zapatilla",
    price: 1200,
    detail: "la mejor marca",
    imgurl: "https://beat21.net/download/multimedia.normal.b7490ab27cb63cc8.414f54334a4859324542475a46444c474957354555474945454d5f6e6f726d616c2e6a7067.jpg",
    },
    {
    id:7,
    title: "ropa",
    price: 700,
    detail: "la mejor prenda",
    imgurl: "https://ae01.alicdn.com/kf/He444d112bb7e4f41b988befe1f7b6d19Z/Camiseta-con-estampado-3D-de-Los-Simpson-para-hombre-y-mujer-ropa-Harajuku-de-dibujos-animados.jpg",
    },
    {
    id:8,
    title: "pelota",
    price: 500,
    detail: "el mejor balon",
    imgurl: "https://digitalhub.fifa.com/transform/0321ae6b-d024-470f-95ae-09a1cd02b3ef/Commercial-Affiliates-Marketing-Workshop-Day-5",
    },
    {
    id:9,
    title: "pelota",
    price: 400,
    detail: "Lista para usar",
    imgurl: "https://sporting.vtexassets.com/arquivos/ids/557628/6HM8141-000-1.jpg?v=637928169669670000",
    },
    {
    id:10,
    title: "pelota",
    price: 300,
    detail: "Lista para su uso",
    imgurl: "https://media.ambito.com/p/7b01b7a6dbdc842d886ac9ffb8b5a8ec/adjuntos/239/imagenes/040/308/0040308087/730x0/smart/al-rihlajpg.jpg",
    },
    {
    id:11,
    title: "remera",
    price: 600,
    detail: "=D",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_649142-MLM52010419269_102022-W.jpg",
},
];

function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(productos);
        }, 2000);
    });
    }
export default getItems;
