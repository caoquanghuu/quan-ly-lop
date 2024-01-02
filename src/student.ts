import { HumanObject } from "./humanObjects";
import {SesmesterResult} from "./types";

export class Student extends HumanObject {
    private _Conduct : string;
    public _Sesmester: SesmesterResult[] = [];

    get transcript () {
        return this._Sesmester;
    }

    get conduct() {
        return this._Conduct;
    }

    set conduct(conduct : string) {
        this._Conduct = conduct;
    }

    set sesmester(subjectTestResult : SesmesterResult) {
        this._Sesmester.push(subjectTestResult);
    }
}