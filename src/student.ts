import { HumanObject } from "./HumanObjects";
import { Subject } from "./utils";

export class Student extends HumanObject {
    private hanhkiem : string;
    public sesmester1 : Subject[] = [];
    public sesmester2 : Subject[] = [];

    constructor(){
        super();
        this.sesmester1;
        this.sesmester2;
    }

    public setSubjectResult(subject : Subject, sesmester : Subject[]) {
        let subjects = sesmester.map(subject => subject.subjectName);
        const isSubjectExist = subjects.some(i => i === subject.subjectName);
        if (isSubjectExist) {
            console.log('subject already exist');
            return;
        }
        else {
            let newSubjectResult = subject;
            sesmester.push(newSubjectResult);
        }
        
    }

    public changeHanhKiem(hanhkiem: string) {
        this.hanhkiem = hanhkiem;
    }

    public getSubjectResult(subjectName : any, sesmester : Subject[]) {
        const subJectList = sesmester.map(subject => subject.subjectName);
        const positionOfSubject = subJectList.findIndex(subjectName);
        if (positionOfSubject === -1) {
            console.log('this subject undefine');
            return;
        }
        return sesmester[positionOfSubject];
    }

    public getAllSubjectResult(sesmester: Subject[]) {
        return sesmester;
    }
}