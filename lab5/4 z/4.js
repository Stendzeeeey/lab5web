const students = new Map([
    ["Ида", 37],
    ["Лена", 46],
    ["Артур", 70],
    ["Платон", 88],
])


function putMark(mark) {
    let x;
    if (mark < 60) x = "Незачёт";
    else if (mark < 70) x ="Оценка 3";
    else if(mark < 90) x = "Оценка 4";
    else if (mark < 100) x = "Оценка 5";

    return x;
}
let a=students.get("Ида");
let b=students.get("Лена");
let c=students.get("Артур");
let d=students.get("Платон");
alert ("У Иды - " + putMark(a));
alert ("У Лены - " + putMark(b));
alert ("У Артура - " + putMark(c));
alert ("У Платона - " + putMark(d));



