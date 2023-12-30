import { HumanObject } from "./HumanObjects";
import { Student } from "./student";
import { SubjectTestResult, TranscriptKeyWord } from "./types";

export class Transcript {
    private _Sesmester: string;
    private _SubjectTestResult: SubjectTestResult[] = [];

   get (transcriptGetKeyWord : TranscriptKeyWord) {
        switch (transcriptGetKeyWord) {
            case TranscriptKeyWord.sesmester:
                return this._Sesmester;
            case TranscriptKeyWord.subjectTestResult:
                return this._SubjectTestResult;
        }
    }

    set (transcriptSetKeyWord : TranscriptKeyWord, sesmester? : string, subjectTestResult? : SubjectTestResult) {
        switch (transcriptSetKeyWord) {
            case TranscriptKeyWord.sesmester:
                this._Sesmester = sesmester;
                break;
            case TranscriptKeyWord.subjectTestResult:
                this._SubjectTestResult.push(subjectTestResult);
                break;
            default:
        }
    }
    
}