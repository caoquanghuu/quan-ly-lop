export interface BasicInformation {
    name: string;
    age: number;
    sex: string;
    phoneNumber: number;
    email: string;
    role: string;
}

export interface SubjectTestResult {
    subjectName: string;
    test15MinResult1: number;
    test15MinResult2: number; 
    test45MinResult : number;
    testMiddleSesmester: number;
    testLastSesmester: number;
}

export enum StudentKeyWord {
    conduct = 'conduct',
    transcript = 'transcript',
}

export enum HumanObjectKeyWord {
    basicInformation,
    inClass,
}

export enum TranscriptKeyWord {
    sesmester,
    subjectTestResult
}
