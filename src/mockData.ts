import {BasicInformation, SesmesterResult } from "./types";

export const mockDataTestResult : SesmesterResult[] = [
    {
        Math : {subjectName: 'math', test15MinResult1: 8, test15MinResult2: 9, test45MinResult: 8,  testLastSesmester: 8, testMiddleSesmester : 9},
        Phy : {subjectName: 'Phy', test15MinResult1: 8, test15MinResult2: 9, test45MinResult: 8,  testLastSesmester: 8, testMiddleSesmester : 9},
        Pyo : {subjectName: 'Pyo', test15MinResult1: 8, test15MinResult2: 9, test45MinResult: 8,  testLastSesmester: 8, testMiddleSesmester : 9},
    },
    {
        Math : {subjectName: 'math', test15MinResult1: 8, test15MinResult2: 9, test45MinResult: 8,  testLastSesmester: 8, testMiddleSesmester : 9},
        Phy : {subjectName: 'Phy', test15MinResult1: 8, test15MinResult2: 9, test45MinResult: 8,  testLastSesmester: 8, testMiddleSesmester : 9},
        Pyo : {subjectName: 'Pyo', test15MinResult1: 8, test15MinResult2: 9, test45MinResult: 8,  testLastSesmester: 8, testMiddleSesmester : 9},
    }
]

export const mockDataInformation : BasicInformation[] = [
    {
        name : "cao",
        age : 15,
        sex : "man",
        phoneNumber: 12345,
        email : "caoquanghuu@gmail.com",
        job: "student",
    },
    {
        name : "hungsida",
        age : 15,
        sex : "man",
        phoneNumber: 12345,
        email : "hungsida@gmail.com",
        job: "student",
    },
    {
        name : "thaykhiet",
        age : 25,
        sex : "man",
        phoneNumber: 12345,
        email : "khiet@gmail.com",
        job: "teacher",
    }
]