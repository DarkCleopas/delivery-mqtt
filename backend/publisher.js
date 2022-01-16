require('dotenv').config();

const mqtt = require('mqtt');


const pub = mqtt.connect('mqtt://test.mosquitto.org');

const queue = process.env.QUEUE;

function sendOrders(orders) {

    pub.on('connect', () => {
        console.log("Conectado ao broker MQTT");
        
        pub.publish(queue, JSON.stringify(orders), {qos: 2, retain: true});
    
        console.log("Pedido enviado com sucesso!");
    
        pub.end();
    });

};


module.exports = { sendOrders }