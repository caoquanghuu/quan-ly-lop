import { HumanObject } from "./HumanObjects";
import { Student } from "./student";
import { Teacher } from "./teacher";
import { BasicInformation } from "./utils";

// const buttonGetAllTeacherInformation  = <HTMLButtonElement>(document.getElementById('btn-get-all-teacher-information'));



export class Main {
    private _student : Student[] = [];
    private _teacher : Teacher[] = [];

    private buttonGetAllTeacherInformation  = <HTMLButtonElement>(document.getElementById('btn-get-all-teacher-information'));
    private buttonGetAllStudentInformation = <HTMLButtonElement>(document.getElementById('btn-get-all-student-information'));

    private buttonAddTeacherInformation = <HTMLButtonElement>(document.getElementById('btn-add-teacher-information'));
    private buttonAddStudentInformation = <HTMLButtonElement>(document.getElementById('btn-add-student-information'));

    private buttonSubmitTeacherInformation = <HTMLButtonElement>(document.getElementById('btn-submit-teacher-information'));
    private buttonSubmitStudentInformation = <HTMLButtonElement>(document.getElementById('btn-submit-student-information'));


    private inputName = <HTMLButtonElement>(document.getElementById('name'));
    private inputAge = <HTMLButtonElement>(document.getElementById('age'));
    private inputSex = <HTMLButtonElement>(document.getElementById('sex'));
    private inputPhoneNumber = <HTMLButtonElement>(document.getElementById('phone-number'));
    private inputEmail = <HTMLButtonElement>(document.getElementById('email'));
    private inputClass = <HTMLButtonElement>(document.getElementById('in-class'));

    private spaceShowResult =  <HTMLDivElement>(document.getElementById('space-show-result'));

    private spaceFillInformation = <HTMLDivElement>(document.getElementById('space-fill-information'));

    

    constructor() {

        const teacher1 = new Teacher;
        teacher1.basicInformation = {name: 'huu', age: 18, sex: 'man', phoneNumber: 123, email: 'cao', inClass: '10b7'};
        this._teacher.push(teacher1);

        const teacher2 = new Teacher;
        teacher2.basicInformation = {name: 'huu2', age: 18, sex: 'man', phoneNumber: 123, email: 'cao', inClass: '10b7'};
        this._teacher.push(teacher2);

        const student1 = new Student;
        student1.basicInformation = {name: 'huu3', age: 18, sex: 'man', phoneNumber: 123, email: 'cao', inClass: '10b7'};
        this._student.push(student1);

        const student2 = new Student;
        student2.basicInformation = {name: 'huu4', age: 18, sex: 'man', phoneNumber: 123, email: 'cao', inClass: '10b7'};
        this._student.push(student2);

        this.buttonGetAllTeacherInformation.addEventListener('mouseup', () => this.getAllInformation(this._teacher));
        this.buttonGetAllStudentInformation.addEventListener('mouseup', () => this.getAllInformation(this._student));
        
        this.buttonAddTeacherInformation.addEventListener('mouseup', () => this.activeSubmitBox(this._teacher));
        this.buttonAddStudentInformation.addEventListener('mouseup', () => this.activeSubmitBox(this._student));

        // this.buttonSubmitInformation.addEventListener('mouseup', () => this.addInformation())
    }

    getAllInformation(humanObject : HumanObject[]) {
        const humanObjectInformationList = humanObject.map((humanObject) => humanObject.getInformation());
        humanObjectInformationList.forEach(basicInformation => this.showInformationResult(basicInformation))
    }

    showInformationResult(basicInformation : BasicInformation) {
        const node = document.createElement('li');
        const textNode = document.createTextNode(`${basicInformation.name} ${basicInformation.age} ${basicInformation.sex} ${basicInformation.phoneNumber} ${basicInformation.email} ${basicInformation.inClass}`);
        node.appendChild(textNode);
        this.spaceShowResult.appendChild(node);
    }

    activeSubmitBox(humanObject : HumanObject[]) {
        this.spaceFillInformation.style.display = `flex`;
       if (humanObject = this._teacher) {
        this.buttonSubmitTeacherInformation.style.display = 'inherit';
        this.buttonSubmitTeacherInformation.addEventListener('mouseup', () => this.addHumanObjectInformation(this._teacher));
       } else {
        this.buttonSubmitStudentInformation.style.display = 'inherit';
        this.buttonSubmitStudentInformation.addEventListener('mouseup', () => this.addHumanObjectInformation(this._student));
       }

        
    }

    addHumanObjectInformation(humanObject : HumanObject[]) {
        const newName : string = this.inputName.value;
        const newAge : number = parseInt(this.inputAge.value);
        const newSex : string = this.inputSex.value;
        const newPhoneNumber : number = parseInt(this.inputPhoneNumber.value);
        const newEmail : string = this.inputEmail.value;
        const newInClass : string = this.inputClass.value;

        const newBasicInformation : BasicInformation = { name: newName, age : newAge, sex : newSex, phoneNumber : newPhoneNumber, email : newEmail, inClass : newInClass};
        const newHumanObject = new HumanObject;

        newHumanObject.setInformation(newBasicInformation);
        humanObject.push(newHumanObject);

        this.spaceFillInformation.style.display = 'none';
    }
    
}

window.onload = () => {
    new Main();
}