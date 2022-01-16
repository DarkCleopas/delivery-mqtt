require('dotenv').config();

const mqtt = require('mqtt');


const sub = mqtt.connect('mqtt://test.mosquitto.org');

const queue = process.env.QUEUE;

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
            console.log("Um novo pedido apareceu!");
            
            const orders = JSON.parse(message.toString());

            console.log(orders);
        } catch(e) {
            console.error(e);
        }
    }
});