import { BasicInformation, HumanObjectKeyWord } from "./types";


export class HumanObject {
    public basicInformation: BasicInformation;
    public _InClass: string;

    get (humanObjectGetKeyword : HumanObjectKeyWord) {
        switch (humanObjectGetKeyword) {
            case HumanObjectKeyWord.basicInformation: 
                return this.basicInformation;
            case HumanObjectKeyWord.inClass:
                return this._InClass;
            default:
        }
    }

    set (humanObjectSetKeyword : HumanObjectKeyWord, basicInformation? : BasicInformation, inClass? : string) {
        switch (humanObjectSetKeyword) {
            case HumanObjectKeyWord.basicInformation:
                this.basicInformation = basicInformation;
                break;
            case HumanObjectKeyWord.inClass:
                this._InClass = inClass;
                break;
            default:
        }
    }
}