import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
    
    @api label;
    @api icon;
    //ADDING BUBBLES PROPERTIE IN ORDER TO COMUNICATE WITH THE PARENT COMPONENT
    handleButton(event) {
        this.dispatchEvent(new CustomEvent('buttonclick',{
            bubbles: true
        }));
    }   

}