function siExamCentre(place, name) {
    place(name);
}
function vivaExam(name) {
    console.log(name, 'dhaka');
}
function writtenExam(name) {
    console.log(name, 'ctg');
}
function physicalExam(name) {
    console.log(name, 'ctg');
}
siExamCentre(vivaExam, 'police hq,');
siExamCentre(writtenExam, 'khulshi,');
siExamCentre(physicalExam, 'halishahar,');