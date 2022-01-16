const { sendOrder } = require('./publisher');

const productName = process.argv[2] || "Farinha branca";
const deliveryAddress = process.argv[3] || "Ceilândia, em frente ao lote 14";

const order = {
    productName: productName,
    deliveryAddress: deliveryAddress
};

sendOrder(order);
