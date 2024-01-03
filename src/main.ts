import { HumanObject } from "./humanObject";
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

    private spaceShowResult = getElement('space-show-result');

    private buttonSubmitTeacherInformation = getElement('btn-submit-teacher-information');
    private buttonSubmitStudentInformation = getElement('btn-submit-student-information');

    private inputName = getElement('input-name');
    private inputAge = getElement('input-age');
    private inputSex = getElement('input-sex');
    private inputPhoneNumber = getElement('input-phone-number');
    private inputEmail = getElement('input-email');
    private inputJob = getElement('input-job');

    private inputStudentName = getElement('input-student-name');

    private inputMath15Min1 = getElement('math-input-15-min-1');
    private inputMath15min2 = getElement('math-input-15-min-2');
    private inputMath45min = getElement('math-input-45-min');
    private inputMathMiddle = getElement('math-input-middle-test');
    private inputMathLast = getElement('math-input-last-test');

    private inputPhy15Min1 = getElement('phy-input-15-min-1');
    private inputPhy15min2 = getElement('phy-input-15-min-2');
    private inputPhy45min = getElement('phy-input-45-min');
    private inputPhyMiddle = getElement('phy-input-middle-test');
    private inputPhyLast = getElement('phy-input-last-test');

    private inputPyo15Min1 = getElement('pyo-input-15-min-1');
    private inputPyo15min2 = getElement('pyo-input-15-min-2');
    private inputPyo45min = getElement('pyo-input-45-min');
    private inputPyoMiddle = getElement('pyo-input-middle-test');
    private inputPyoLast = getElement('pyo-input-last-test');

    private buttonSubmitTestResult = getElement('btn-submit-test-result');

    private inputStudentNameConductChange = getElement('input-student-name-conduct-change');
    private inputNewConduct = getElement('input-new-conduct');
    private buttonSubmitNewConduct = getElement('btn-submit-new-conduct');

    constructor() {
        const student1 = new Student();
        student1.basicInformation = mockDataInformation[0];
        student1.sesmester = mockDataTestResult[0];
        student1.sesmester = mockDataTestResult[1];
        student1.conduct = 'good';
        this._student.push(student1);

        const student2 = new Student();
        student2.basicInformation = mockDataInformation[1];
        student2.sesmester = mockDataTestResult[0];
        student2.sesmester = mockDataTestResult[1];
        student2.conduct = 'bad';
        this._student.push(student2);

        const teacher1 = new HumanObject();
        teacher1.basicInformation = mockDataInformation[2];
        this._teacher.push(teacher1);
        
        this.buttonGetAllStudentInformation.addEventListener('mouseup', () => this.getAllHumanInformation(this._student));
        this.buttonGetAllTeacherInformation.addEventListener('mouseup', () => this.getAllHumanInformation(this._teacher));
        this.buttonGetAllStudentTestResult.addEventListener('mouseup', this.getAllStudentTestResult.bind(this));
        
        this.buttonSubmitStudentInformation.addEventListener('mouseup', () => this.addHumanInfoFromInput(this._student));
        this.buttonSubmitTeacherInformation.addEventListener('mouseup', () => this.addHumanInfoFromInput(this._teacher));

        this.buttonSubmitTestResult.addEventListener('mouseup', this.addTestResult.bind(this));

        this.buttonSubmitNewConduct.addEventListener('mouseup', this.fixStudentConduct.bind(this));
    }

    getAllHumanInformation(humanObjects : HumanObject[]) {
        const humanInfoList = humanObjects.map(student => student.displayableInformation);
        this.displayInformationResult(humanInfoList);
    }
    
    displayInformationResult(basicInformationList : DisplayableInformation[])  {
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
    }

    addTestResult() {
        const name = this.inputStudentName.value;
        const P = this._student.findIndex(student => student.name === name);

        if (P === -1) {
            console.log('student not exist')
            return
        };

        const newSesmester : SesmesterResult = {
            Math : {subjectName : 'math',
                test15MinResult1 : parseInt(this.inputMath15Min1.value), 
                test15MinResult2 : parseInt(this.inputMath15min2.value), 
                test45MinResult : parseInt(this.inputMath45min.value), 
                testMiddleSesmester : parseInt(this.inputMathMiddle.value), 
                testLastSesmester : parseInt(this.inputMathLast.value)},
            Phy : {subjectName : 'phy', 
                test15MinResult1 : parseInt(this.inputPhy15Min1.value), 
                test15MinResult2 : parseInt(this.inputPhy15min2.value), 
                test45MinResult : parseInt(this.inputPhy45min.value), 
                testMiddleSesmester : parseInt(this.inputPhyMiddle.value), 
                testLastSesmester : parseInt(this.inputPhyLast.value)},
            Pyo : {subjectName : 'pyo', 
                test15MinResult1 : parseInt(this.inputPyo15Min1.value),
                test15MinResult2 : parseInt(this.inputPyo15min2.value), 
                test45MinResult : parseInt(this.inputPyo45min.value), 
                testMiddleSesmester : parseInt(this.inputPyoMiddle.value), 
                testLastSesmester : parseInt(this.inputPyoLast.value)}};

        this._student[P]._Sesmester.push(newSesmester);
    }


    fixStudentConduct() {
        const inputName = this.inputStudentNameConductChange.value;
        const P = this._student.findIndex(student => student.name === inputName);

        if (P === -1) return;

        this._student[P].conduct = this.inputNewConduct.value;
    }
}
    


window.onload = () => {
    new Main();
}