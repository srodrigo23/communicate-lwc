import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import COUNT_UPDATED_CHANNEL from '@salesforce/messageChannel/Count_Updated__c';

/*
We import publish and MessageContext from the Lightning message service. 
We also import the channel we just created (Count_Updated__c). The data payload is sent with the publish function.
*/
export default class RemoteControl extends LightningElement {
    @wire(MessageContext)
    messageContext;
    handleIncrement() {
        // this.counter++;
        const payload = { 
            operator: 'add',
            constant: 1
        };
        publish(this.messageContext, COUNT_UPDATED_CHANNEL, payload);
    }

    handleDecrement() {
        // this.counter--;
        const payload = { 
            operator: 'subtract',
            constant: 1
        };
        publish(this.messageContext, COUNT_UPDATED_CHANNEL, payload);
    }

    handleMultiply(event) {
        const factor = event.detail;
        // this.counter *= factor;
        const payload = { 
            operator: 'multiply',
            constant: factor
        };
        publish(this.messageContext, COUNT_UPDATED_CHANNEL, payload);
    }

}