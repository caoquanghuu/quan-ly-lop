import { BasicInformation } from "./utils";


export class HumanObject {
    public basicInformation: BasicInformation;


    public getInformation() {
        return this.basicInformation;
    }

    public setInformation(information : BasicInformation) {
        const basicInformation = information;
        this.basicInformation = basicInformation;
    }

    public changeClass(newClass : string) {
        this.basicInformation.inClass = newClass;
    }
}