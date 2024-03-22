// Номер 1
let num1 = -1;
if (num1 > 0) {
  console.log("Положительное");
} else {
  console.log("Отрицательное");
}
// Номер 2
let num2 = 6;
if (num2 % 5 === 1) {
  console.log("четное");
} else {
  console.log("нечетное");
}
// Номер 3
let obj = {};
if (typeof obj === "object") {
  console.log("объект является ссылочным типом данных");
} else {
  console.log(`тип ${typeof obj} является примитивным типом данных`);
}
// Номер 4
let obj1 = {
  name: "Davran",
  age: 17,
};
if (obj1.age > 17) {
  console.log(`Привет, меня зовут ${obj1.name} и это мой первый код`);
} else {
  console.log(`Привет, меня зовут ${obj1.name} и я не совершеннолетний`);
}
// Номер 5
let name = "John";
let age = 18;
if (typeof name === "string" && typeof age === "number") {
  console.log("Все введено верно");
} else {
  console.log("Данные введены не верно");
}
// Номер 6
let str = "Hello World";
if (str === str.toLowerCase()) {
  console.log(str.toUpperCase());
} else {
  console.log(str.toLowerCase());
}
// Номер 7
let lang = "ru";
let message =
  lang === "en"
    ? "This is english"
    : lang === "ru"
    ? "Это русский"
    : lang === "de"
    ? "Das ist Deutsch"
    : "Бул кыргыз тили";
console.log(message);
// Номер 8
let obj8 = {
  name: "Hello",
  age: 19,
  status: "student",
  class: "JS-54",
  school: "Makers",
};
if (obj8.age >= 20 && obj8.status === "student" && obj8.school === "Makers") {
  console.log(
    `Привет, меня зовут ${obj8.name} и я студент в ${obj8.school} классе ${obj8.class}`
  );
} else {
  console.log(`Привет, меня зовут ${obj8.name} и мне ${obj8.age} лет`);
}
// Номер 9
let minute = 60;
if (minute >= 1 && minute <= 15) {
} else if (minute >= 16 && minute <= 30) {
} else if (minute >= 31 && minute <= 45) {
} else if (minute >= 46 && minute <= 60) {
} else {
  console.log("Число не верное");
}
// Номер 10
let num10 = 123456;

if (num10[0] + num10[1] + num10[2] === num10[3] + num10[4] + num10[5]) {
  console.log("да");
} else {
  console.log("нет");
}
