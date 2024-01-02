import { HumanObject } from "./humanObjects";
import { mockDataInformation, mockDataTestResult } from "./mockData";
import { Student } from "./student";
import { BasicInformation, DisplayableInformation, SesmesterResult } from "./types";
import { getElement } from "./ultis";


export class Main {
    private _student : Student[] = [];
    private _teacher : HumanObject[] = [];
    private _nameClass : string;

    private buttonGetAllStudentInformation = getElement('btn-get-all-student-information'); 
    private buttonGetAllTeacherInformation = getElement('btn-get-all-teacher-information'); 
    private buttonGetAllStudentTestResult = getElement('btn-get-all-student-test-result');
    private buttonAddTeacherInformation = getElement('btn-add-teacher-information');
    private buttonAddStudentInformation = getElement('btn-add-student-information');

    private buttonSubmitTeacherInformation = getElement('btn-submit-teacher-information');
    private buttonSubmitStudentInformation = getElement('btn-submit-student-information');

    private inputName = getElement('input-name');
    private inputAge = getElement('input-age');
    private inputSex = getElement('input-sex');
    private inputPhoneNumber = getElement('input-phone-number');
    private inputEmail = getElement('input-email');
    private inputJob = getElement('input-job');

    private spaceShowResult = getElement('space-show-result');

    constructor() {
        const student1 = new Student();
        student1.basicInformation = mockDataInformation[0];
        student1.sesmester = mockDataTestResult[0];
        student1.sesmester = mockDataTestResult[1];
        this._student.push(student1);

        const student2 = new Student();
        student2.basicInformation = mockDataInformation[1];
        student2.sesmester = mockDataTestResult[0];
        student2.sesmester = mockDataTestResult[1];
        this._student.push(student2);

        const teacher1 = new HumanObject();
        teacher1.basicInformation = mockDataInformation[2];
        this._teacher.push(teacher1);
        
        this.buttonGetAllStudentInformation.addEventListener('mouseup', () => this.getAllHumanInformation(this._student));
        this.buttonGetAllTeacherInformation.addEventListener('mouseup', () => this.getAllHumanInformation(this._teacher));

        this.buttonGetAllStudentTestResult.addEventListener('mouseup', this.getAllStudentTestResult.bind(this));
        
        this.buttonSubmitStudentInformation.addEventListener('mouseup', () => this.addHumanInfoFromInput(this._student));
        this.buttonSubmitTeacherInformation.addEventListener('mouseup', () => this.addHumanInfoFromInput(this._teacher))
    }

    getAllHumanInformation(humanObjects : HumanObject[]) {
        const humanInfoList = humanObjects.map(student => student.displayableInformation);
        this.displayResult(humanInfoList);
    }
    
    displayResult(basicInformationList : DisplayableInformation[])  {
        basicInformationList.forEach(information => {
            const node = document.createElement('li');
            const textNode = document.createTextNode(`${information.name} ${information.age} ${information.sex} ${information.phoneNumber} ${information.email}`);
            node.appendChild(textNode);
            this.spaceShowResult.appendChild(node);
        });
    }

    getAllStudentTestResult() {    
        const studentListName = this._student.map(student => student.name);
        const studentListTestResult = this._student.map(student => student.transcript);
        this.displayTestResult(studentListName, studentListTestResult);
    }

    displayTestResult(listName: string[], listResult : SesmesterResult[][]) {
        const L = listName.length;
        for (let i = 0; i < L ; i++) {
            const node = document.createElement('li');
            const textNode1 = document.createTextNode(listName[i]);
            node.appendChild(textNode1);
            this.spaceShowResult.appendChild(node);
            listResult[i].forEach(sesmester => {
                const nodeChild = document.createElement('li');
                const textNode2 = document.createTextNode(` ${sesmester.Math.subjectName} ${sesmester.Math.test15MinResult1} ${sesmester.Math.test15MinResult2} ${sesmester.Math.test45MinResult} ${sesmester.Math.testMiddleSesmester} ${sesmester.Math.testLastSesmester}`);
                const textNode3 = document.createTextNode(`   ${sesmester.Phy.subjectName} ${sesmester.Phy.test15MinResult1} ${sesmester.Phy.test15MinResult2} ${sesmester.Phy.test45MinResult} ${sesmester.Phy.testMiddleSesmester} ${sesmester.Phy.testLastSesmester}`);
                const textNode4 = document.createTextNode(`   ${sesmester.Pyo.subjectName} ${sesmester.Pyo.test15MinResult1} ${sesmester.Pyo.test15MinResult2} ${sesmester.Pyo.test45MinResult} ${sesmester.Pyo.testMiddleSesmester} ${sesmester.Pyo.testLastSesmester}`);
                nodeChild.appendChild(textNode2);
                nodeChild.appendChild(textNode3);
                nodeChild.appendChild(textNode4);
                node.appendChild(nodeChild);
            })
        }
    }

    addHumanInfoFromInput(humanObjects: HumanObject[]) {
        const newHumanInformation : BasicInformation = {name : this.inputName.value, age : parseInt(this.inputAge.value), sex : this.inputSex.value , phoneNumber : parseInt(this.inputPhoneNumber.value), email : this.inputEmail.value, job : this.inputJob.value};
        let newHumanOject = new HumanObject();
        newHumanOject.basicInformation = newHumanInformation;
        humanObjects.push(newHumanOject);
        console.log(humanObjects);
    }

}
    


window.onload = () => {
    new Main();
}