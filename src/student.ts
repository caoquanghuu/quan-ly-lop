import { HumanObject } from "./HumanObjects";
import { Transcript } from "./transcript";
import { BasicInformation, SubjectTestResult, StudentKeyWord} from "./types";

export class Student extends HumanObject {
    private _Conduct : string;
    private _Transcript : Transcript[] = [];

    getStudent (studentGetKeyWord : StudentKeyWord) {
        switch (studentGetKeyWord) {
            case StudentKeyWord.conduct:
                return this._Conduct;
            case StudentKeyWord.transcript:
                return this._Transcript;
        }
        
    }

    setStudent (studentSetKeyWord : StudentKeyWord, conduct? : string, transcript? : Transcript) {
        switch (studentSetKeyWord) {
            case StudentKeyWord.conduct:
                this._Conduct = conduct;
                break;
            case StudentKeyWord.transcript:
                this._Transcript.push(transcript);
                break;
            default:
        }
    }
}