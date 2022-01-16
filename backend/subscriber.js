const mqtt = require('mqtt');

const sub = mqtt.connect('mqtt://test.mosquitto.org');

const queue = "orders";

sub.on('connect', () => {
    console.log("Conectado ao broker MQTT");

    sub.subscribe(queue, (err) => {
        if (err) {
            console.error(err);
        }
    });
});

sub.on("message", (topic, message) => {
    if (topic === queue) {
        try{
            console.log("Recebi um novo pedido!");
            
            const order = JSON.parse(message.toString());

            console.log(order);
        } catch(e) {
            console.error(e);
        }
    }
});