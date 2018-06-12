import { IHello } from "./interface_standard";

export interface IGreeting extends IHello {
    shakeHands(gripFirmness: number) : string;
    sayGoodbye(name: string) : string;
}