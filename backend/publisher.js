const mqtt = require('mqtt');

const pub = mqtt.connect('mqtt://test.mosquitto.org');

const queue = "orders";

function sendOrder(order) {

    pub.on('connect', () => {
        console.log("Conectado ao broker MQTT");
        
        pub.publish(queue, JSON.stringify(order), {qos: 2, retain: true});
    
        console.log("Pedido enviado com sucesso!");
    
        pub.end();
    });

};

module.exports = { sendOrder }