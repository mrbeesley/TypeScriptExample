import { Standard } from "./ClassExample/standard";
import { StandardChild } from "./ClassExample/child_standard";

class Startup {
    public static main(): number {
        var std = new Standard('Michael', 'Beesley');
        var child = new StandardChild('Michael', 'Beesley', 'Mr');
        console.log('Parent:');
        console.log(std.sayHello());
        std.setMiddleName('Ray');
        console.log(std.sayHello());

        console.log('Child:');
        console.log(child.sayHello());
        child.setMiddleName('Ray');
        console.log(child.sayHello());

        var testCast = <Standard>child;
        console.log('Child Cast:')
        console.log(testCast.sayHello());

        console.log('Rest param example:')
        console.log(std.calculateValue(1, 2, 3, 4, 5));

        console.log('Callback example:')
        std.hollerback((message: string, name: string) => {
            return `Message from ${name}: ${message}`;
        });

        return 0;
    }
}

Startup.main();