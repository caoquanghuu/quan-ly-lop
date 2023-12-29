export interface BasicInformation {
    name: string;
    age: number;
    sex: string;
    phoneNumber: number;
    email: string;
    inClass: string;
}

export interface Subject {
    subjectName: string;
    test15MinResult : Test15MinResult;
    test45MinResult : number;
    testMiddleSesmester: number;
    testLastSesmester: number;
}

export interface Test15MinResult {
    test1 : number;
    test2 : number;
}