import { HumanObject } from "./HumanObjects";
import { Student } from "./student";
import { Transcript } from "./transcript";
import { HumanObjectKeyWord, StudentKeyWord, TranscriptKeyWord } from "./types";




export class Main {
    private _student : Student[] = [];
    private _teacher : HumanObject[] = [];

    private buttonGetAllTeacherInformation  = <HTMLButtonElement>(document.getElementById('btn-get-all-teacher-information'));
    private buttonGetAllStudentInformation = <HTMLButtonElement>(document.getElementById('btn-get-all-student-information'));

    private buttonAddTeacherInformation = <HTMLButtonElement>(document.getElementById('btn-add-teacher-information'));
    private buttonAddStudentInformation = <HTMLButtonElement>(document.getElementById('btn-add-student-information'));

    private buttonSubmitTeacherInformation = <HTMLButtonElement>(document.getElementById('btn-submit-teacher-information'));
    private buttonSubmitStudentInformation = <HTMLButtonElement>(document.getElementById('btn-submit-student-information'));

    private buttonGetAllTestResult = <HTMLButtonElement>(document.getElementById('btn-get-all-student-information'));


    private inputName = <HTMLButtonElement>(document.getElementById('name'));
    private inputAge = <HTMLButtonElement>(document.getElementById('age'));
    private inputSex = <HTMLButtonElement>(document.getElementById('sex'));
    private inputPhoneNumber = <HTMLButtonElement>(document.getElementById('phone-number'));
    private inputEmail = <HTMLButtonElement>(document.getElementById('email'));
    private inputClass = <HTMLButtonElement>(document.getElementById('in-class'));

    private spaceShowResult =  <HTMLDivElement>(document.getElementById('space-show-result'));

    private spaceFillInformation = <HTMLDivElement>(document.getElementById('space-fill-information'));

    

    constructor() {

        const student1 = new Student();
        student1.set(HumanObjectKeyWord.basicInformation, {name : 'huu',age : 16, sex: 'man', phoneNumber: 123, email: 'huu@gmail.com', role: 'student'});
        student1.set(HumanObjectKeyWord.inClass, undefined, '10b7');
        student1.setStudent(StudentKeyWord.conduct, 'good');
        const student1Transcript1 = new Transcript();
        student1Transcript1.set(TranscriptKeyWord.sesmester, 'sesmester1');
        student1Transcript1.set(TranscriptKeyWord.subjectTestResult, undefined, {subjectName: 'math', test15MinResult1: 8, test15MinResult2: 9, test45MinResult :10, testMiddleSesmester :10, testLastSesmester:10});
        student1.setStudent(StudentKeyWord.transcript, undefined, student1Transcript1);
        this._student.push(student1);
        console.log(this._student);

    }

   

}
    


window.onload = () => {
    new Main();
}