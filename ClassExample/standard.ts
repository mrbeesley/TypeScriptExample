import { IHello } from "./interface_standard";
import { IGreeting } from "./interface_extended";

class Standard implements IGreeting {
    
    // Fields and Properties

    firstName: string;
    private _middleName: string;

    // constructor

    constructor(firstName: string, public lastName: string) {
        this.firstName = firstName;
    }

    // methods

    sayHello() : string {
        return `Hello from, ${this.getFullName()}`
    }

    shakeHands(gripFirmness: number): string {
        let ret: string; 
        if(gripFirmness < 5) ret = 'Weak Handshake';
        else if (gripFirmness < 10) ret = 'Good Handshake';
        else 'Strong Handshake';
        return ret;
    }

    sayGoodbye(name: string) : string {
        return `Goodbye ${name}, its always a pleasure.`;
    }

    setMiddleName(value: string) : void {
        if(value == undefined)
        {
            throw 'You must supply a middle name!';
        }
        this._middleName = value;
    }

    getFullName() : string {
        if(this._middleName == undefined) return `${this.firstName} ${this.lastName}`
        return `${this.firstName} ${this._middleName} ${this.lastName}`
    }

    // rest param example
    calculateValue(...values : number[]) : number {
        var ret : number = 0;
        for (let val of values) {
            ret += val;
        }
        return ret;
    }

    // callback example
    hollerback(callback: (message: string, name: string) => string) {
        console.log(callback('yo!', this.firstName));
    }

}

export { Standard };