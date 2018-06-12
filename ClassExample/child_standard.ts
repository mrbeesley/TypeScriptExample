import { Standard } from "./standard";

class StandardChild extends Standard {
    title: string;

    constructor(firstName: string, lastName: string, title: string) {
        super(firstName, lastName);
        this.title = title;
    }

    sayHello() : string {
        return `Hello from ${this.title}. ${this.getFullName()}`;
    }
}
export { StandardChild };