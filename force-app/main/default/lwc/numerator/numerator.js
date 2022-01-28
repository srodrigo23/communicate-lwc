import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {

    /*
    The @api decorator in the child component exposes a property, making it public, 
    so that the parent component can update it.
    */
    //@api counter = 0;

    /*
    This code changes counter to a property with getter (get) and setter (set) functions. 
    It also adds the priorCount and _currentCount properties.
    */
    _currentCount = 0;
    priorCount = 0;
    @api
    get counter() {
        return this._currentCount;
    }

    set counter(value) {
        his.priorCount = this._currentCount;
        this._currentCount = value;
    }

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

    /*
    The @api decorator in the child component exposes a function, 
    making it public, so that the parent component can call it.
    */
    @api
    maximizeCounter() {
        this.counter += 1000000;
    }
}