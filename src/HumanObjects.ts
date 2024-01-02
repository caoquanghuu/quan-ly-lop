import { BasicInformation, DisplayableInformation} from "./types";


export class HumanObject {
    private _basicInformation: BasicInformation;

    get displayableInformation() {
        const displayableInformation : DisplayableInformation = this._basicInformation;
        return displayableInformation;
    }

    get name(){
        return this._basicInformation.name;
    }

    public set basicInformation(info: BasicInformation) {
        this._basicInformation = { ... info };
    }
}