import { LightningElement } from 'lwc';

export default class Numerator extends LightningElement {

    counter = 0;
    handleIncrement() {
        this.counter++;
    }

    handleDecrement() {
        this.counter--;
    }

    //Receiving event from child to multiply with the data from attr.
    handleMultiply(event) {
        const factor = event.detail;
        this.counter *= factor;
    }
}