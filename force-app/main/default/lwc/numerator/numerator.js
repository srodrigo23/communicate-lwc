import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {

    /*
    The @api decorator in the child component exposes a property, making it public, 
    so that the parent component can update it.
    */
    @api counter = 0;

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