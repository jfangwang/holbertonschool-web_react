
import { Seq } from "immutable";
export default function printBestStudents(object) {
  const s = Seq(object);
  const student = seq.filter((val) => val.score > 70).toJS();

  Object.keys(student).map((k) => {
    student[k]['firstName'] = student[k]['firstName'].replace(/\b(\w)/g, s => s.toUpperCase())
    student[k]['lastName'] = student[k]['lastName'].replace(/\b(\w)/g, s => s.toUpperCase())
    return student[key];
  });
}
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  }
};
console.log(printBestStudents(grades));