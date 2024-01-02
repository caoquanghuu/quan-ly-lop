export interface BasicInformation {
    name: string;
    age: number;
    sex: string;
    phoneNumber: number;
    email: string;
    job: string;
}

type RemoveJobField<Type> = {
    [P in keyof Type as Exclude<P, 'job'>] : Type[P];
};

export type DisplayableInformation = RemoveJobField<BasicInformation>;

export interface SubjectTestResult {
    subjectName: string;
    test15MinResult1: number;
    test15MinResult2: number; 
    test45MinResult : number;
    testMiddleSesmester: number;
    testLastSesmester: number;
}

export enum Subject {
    Math=  'Math',
    Phy=   'Phy',
    Pyo=   'Pyo',
}


export type SesmesterResult = {
    [key in Subject]: SubjectTestResult;
};

