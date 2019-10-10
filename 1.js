 // объявляем глобальные переменные
let limit;            // предельное значение счета
let correct_answer;   // правильный ответ
let count_question=0; // счетчик вопросов
let count_answers=0;  // счетчик ответов
let count_prank=0;    // счетчик баловства
let timer;            // таймер
 // let value            текущее значение таймера

/* // функция запрета работы javascript
function no_js(event) {
var event = event || window.event;
if (event.stopPropagation) {event.stopPropagation()}
  else event.cancelBubble = true;} */

 // получение случайного целого числа int в диапазоне от min до max+1
 // int = Math.floor(min + Math.random() * (max + 1 - min));
 // начиная с нуля
 // int = Math.floor(Math.random() * (max + 1));
 // начиная с единицы
 // int = Math.floor(1 + Math.random() * max);


 // функция выбора типа вычислений
function typeCounting(answer) {
 // считываем выбранный тип вычислений и показываем его в заголовке
let typeCount = answer.innerHTML;
document.getElementById("header").innerHTML = typeCount;
 // определяем значение по умолчанию для выбранного типа вычислений
limit=(typeCount=="Сложение и вычитание")?20:(typeCount=="Таблица умножения")?100:(typeCount=="Умножение и деление")?150:(typeCount=="Простые уравнения")?200:alert("произошла ошибка");
 // и устанавливаем его в поле ввода для числа, ограничивающего счет
document.getElementById('limit').value = limit;
}

 // функция выбора числа, ограничивающего счет, при разном типе вычислений
function defaultLimit() {
typeCount = document.getElementById("header").innerHTML;
 // Определяем значение по умолчанию для выбранного типа вычислений
limit=(typeCount=="Сложение и вычитание")?20:(typeCount=="Таблица умножения")?100:(typeCount=="Умножение и деление")?150:(typeCount=="Простые уравнения")?200:alert("произошла ошибка");
 // и устанавливаем его в поле ввода для числа, ограничивающего счет
document.getElementById('limit').value = limit;
}

 // функция перехода к началу
function toIntro() {
 // считываем тип вычисления и ограничитель счета
typeCount = document.getElementById("typeCounting_double").innerHTML;
limit = parseInt(document.getElementById('input').innerHTML);
 // очищаем таймер
clearTimeout(timer);
document.getElementById('progress').value = 0;
 // скрываем счетчик
document.getElementById("count").style.display="none";
count_question--; // уменьшаем счетчик вопросов на единицу
 // заменяем заголовок с простым названием на выбор пунктов
document.getElementById("typeCounting").style.display="inline-block";
document.getElementById("typeCounting_double").style.display="none";
 // скрываем простой текст с уже установленным значением ограничения
 // показываем вместо него поле ввода для значения, ограничивающего счет
document.getElementById("limit").style.display="inline-block";
document.getElementById("input").style.display="none";
 // устанавливаем тип вычисления и ограничитель счета
document.getElementById("header").innerHTML = typeCount;
document.getElementById('limit').value = limit;
 // возвращаем начальную страницу
document.getElementById("intro").style.display="block";
document.getElementById("test").style.display="none";
 // скрываем страницу с результатами
document.getElementById("rating").style.display="none";
count_question = 0; // обнуляем счетчик вопросов
count_answers = 0; // обнуляем счетчик ответов
 // скрываем кнопку СТОП
document.getElementById("stop").style.display="none";
 // скрываем страницу уравнений
document.getElementById("equation").style.display="none";
}

 // функция тип проверки
function typeTest() {
document.getElementById("stop").style.display="inline-block";
let typeTest = document.getElementById("header").innerHTML;
 // alert(typeTest);
if (typeTest=="Сложение и вычитание") {testAddition()}
else if (typeTest=="Таблица умножения") {testMultiplication()}
else if (typeTest=="Умножение и деление") {testMultiAndDivision()}
else if (typeTest=="Простые уравнения") {testEquation()}
else {alert("произошла непредвиденная ошибка");}
}

 // функция перехода к проверке
function toTest() {
 // получаем число, ограничивающее счет
limit = parseInt(document.getElementById('limit').value);
 // заменяем заголовок с выбором пунктов на простое название
let typeTest = document.getElementById("header").innerHTML;
document.getElementById("typeCounting").style.display="none";
document.getElementById("typeCounting_double").innerHTML=typeTest;
document.getElementById("typeCounting_double").style.display="inline-block";
 // скрываем начальную страницу и показываем страницу с примерами
document.getElementById("intro").style.display="none";
if (typeTest =="Простые уравнения"){
document.getElementById("equation").style.display="block";}
else {document.getElementById("test").style.display="block";}
 // скрываем поле ввода для значения, ограничивающего счет и вместо него
 // показываем простой текст с уже установленным значением
document.getElementById("limit").style.display="none";
document.getElementById("input").innerHTML = limit;
document.getElementById("input").style.display="inline-block";
 // увеличиваем счетчик вопросов на единицу и показываем номер вопроса
count_question++;
document.getElementById("counter").innerHTML = count_question;
}

 // функция проверки уравнений
function testEquation() {
 // очищаем поле ввода ответа
document.getElementById('response').value = "";
 // вызываем функцию перехода к проверке
toTest();
 // выбираем переменные
let a = Math.floor(Math.random()*(limit/2+1));
let b = Math.floor(Math.random()*(limit/2+1));
let c = Math.floor(a+Math.random()*(limit/2+1-a));
let d = a+b;
let e = Math.floor(d+Math.random()*(limit+1-d));
let f = Math.floor(Math.random()*(d+1));
let g = Math.floor(Math.random()*(limit/2+1));
 // определяем тип уравнения
let type1 = "x - "+a+" = "+b;
let type2 = b+" = x - "+a;
let type3 = a+" + x = "+c;
let type4 = "x + "+a+" = "+c;
let type5 = c+" - x = "+a;
let type6 = c+" = "+a+" + x";
let type7 = c+" = x + "+a;
let type8 = a+" = "+c+" - x";
let type9 = a+" + ( "+b+" + x ) = "+e;
let type10 = "x + ( "+a+" + "+b+" ) = "+e;
let type11 = e+" - ( "+a+" + x ) = "+b;
let type12 = a+" + ( x + "+b+" ) = "+e;
let type13 = e+" - ( x + "+a+" ) = "+b;
let type14 = a+" + ( "+b+" - x ) = "+f;
let type15 = a+" - ( x - "+b+" ) = "+f;
let type16 = "x - ( "+a+" - "+f+" ) = "+b;
let type17 = a+" - ( "+b+" - x ) = "+c;
let type18 = a+" + ( x - "+b+" ) = "+c;
let type19 = "x + ( "+a+" - "+b+" ) = "+c;
let type20 = "x - ( "+a+" + "+b+" ) = "+g;
 // создаем таблицу типов уравнений
let tableTypes = [type1, type2, type3, type4, type5, type6, type7, type8, type9, type10, type11, type12, type13, type14, type15, type16, type17, type18, type19, type20];
 // случайным образом выбираем тип уравнения из таблицы
let typeEquation = tableTypes[Math.floor(Math.random()*20)];
 // показываем уравнение пользователю
document.getElementById("example").innerHTML = typeEquation;
 // определяем правильный ответ
correct_answer=(typeEquation==type1||typeEquation==type2)?b+a:
(typeEquation==type3||typeEquation==type4||typeEquation==type5||typeEquation==type6||typeEquation==type7||typeEquation==type8)?c-a:
(typeEquation==type9||typeEquation==type10||typeEquation==type11||typeEquation==type12||typeEquation==type13)?e-a-b:
(typeEquation==type14||typeEquation==type15||typeEquation==type16)?a+b-f:
(typeEquation==type17||typeEquation==type18||typeEquation==type19)?c-a+b:g+a+b;
 // alert(correct_answer);
}


 // функция проверки умножения/деления
function testMultiAndDivision() {
 // вызываем функцию перехода к проверке
toTest();
 // определяем знак выполняемого действия и помещаем его в sign 
let sign = Math.floor(Math.random()*2) ? '&#215;':':';
document.getElementById("sign").innerHTML = sign;

 // действия в зависимости от знака - если знак умножения
if (sign=="&#215;") {
 // определяем случайным образом первый множитель
 // и помещаем его на место, т.е. в item1
let number1 = Math.floor(Math.random()*(limit+1));
document.getElementById("item1").innerHTML = number1;
 // определяем предел чисел, на которые можно умножить первый множитель
 // с учетом того, что произведение не может превышать число, указанное в limit
let limitMulti = Math.floor(limit/number1);
 // определяем случайным образом второй множитель
 // и помещаем его на место, т.е. в item2
let number2 = Math.floor(Math.random()*(limitMulti+1));
document.getElementById("item2").innerHTML = number2;
 // вычисляем правильный ответ при умножении
correct_answer = number1*number2;
}
else {
 // в противном случае, т.е., если получилось деление
 // выбираем случайное число в диапазоне от 1 до limit
 // чтобы исключить деление с нулем
let number1 = Math.floor(1+Math.random()*limit);
 // определяем предел чисел, на которые можно умножить первый множитель
 // с учетом того, что произведение не может превышать число, указанное в limit
let limitDivision = Math.floor(limit/number1);
 // определяем случайным образом второе число
let number2 = Math.floor(1+Math.random()*limitDivision);
 // получаем третье число
let number3 = number1*number2;
 // размещаем числа по местам, т.е. на место делимого и делителя
document.getElementById("item1").innerHTML = number3;
document.getElementById("item2").innerHTML = number2;
 // определяем правильный ответ
correct_answer = number1;
}
 // создаем неправильные ответы и размещаем все ответы по местам
createAnswers();
}


 // функция проверки таблицы умножения
function testMultiplication() {
 // вызываем функцию перехода к проверке
toTest();
 // помещаем знак выполняемого действия в sign
document.getElementById("sign").innerHTML = '&#215;';

 // определяем случайным образом множители
 // и помещаем их по местам, т.е. в item1 и в item2
let number1 = Math.floor(Math.random()*(Math.sqrt(limit)+1));
document.getElementById("item1").innerHTML = number1;
let number2 = Math.floor(Math.random()*(Math.sqrt(limit)+1));
document.getElementById("item2").innerHTML = number2;
 // вычисляем правильный ответ при умножении
correct_answer = number1*number2;
 // создаем неправильные ответы и размещаем все ответы по местам
createAnswers();
}



 // функция проверки сложения/вычитания
function testAddition() {
 // вызываем функцию перехода к проверке
toTest();
 // определяем первое число для сложения-вычитания
 // и помещаем его на место, т.е. в item1
let number1 = Math.floor(Math.random()*(limit+1));
document.getElementById("item1").innerHTML = number1;

 // определяем знак выполняемого действия и помещаем его в sign
let sign = Math.floor(Math.random()*2) ? '+':'&#150;';
document.getElementById("sign").innerHTML = sign;

 // в зависимости от знака действия определяем выбор второго числа
if (sign=="+") {
 // т.е. если знак +, то выполняется функция по определению второго числа с
 // учетом, что сумма не может превышать limit, и устанавливаем его в item2
let arr2number = []; // создаем новый пустой массив
 // заполняем его значениями, пригодными в качестве второго числа
for(let i=0; i<=limit-number1; i++) arr2number.push(i);
 // получаем из этого массива случайное число и устанавливаем его в item2
let number2 = arr2number[Math.floor(Math.random()*arr2number.length)];
document.getElementById("item2").innerHTML = number2;

 // вычисляем правильный ответ при сложении
correct_answer = number1+number2;}
else {
 // в противном случае, определяем случайным образом вторую цифру для примера
 // вычитания, с учетом того, что разность не может быть меньше 0, т.е.
 // второе число не может быть больше первого и устанавливаем его в item2
let arr2number = []; // создаем новый пустой массив
 // заполняем его значениями, пригодными в качестве второго числа
for(let i=0; i<=number1; i++) arr2number.push(i);
 // получаем из этого массива случайное число и устанавливаем его в item2
let number2 = arr2number[Math.floor(Math.random()*arr2number.length)];
document.getElementById("item2").innerHTML = number2;

 // вычисляем правильный ответ при вычитании
correct_answer = number1-number2;}
 // создаем неправильные ответы и размещаем все ответы по местам
createAnswers();
}

 // функция создания и размещения ответов
function createAnswers() {
 //

 // создаем новый пустой массив для неправильных ответов
let arr_errAnswers = [];

if (correct_answer<=5) {
for(let i=0; i<=10; i++) arr_errAnswers.push(i);}
else if (correct_answer>=limit-5) {
for(let i=limit; i>=limit-10; i--) arr_errAnswers.push(i);}
else {
for(let i=correct_answer-5; i<=correct_answer+5; i++) arr_errAnswers.push(i);}
 // удаляем из массива правильный ответ
arr_errAnswers.splice(arr_errAnswers.indexOf(correct_answer), 1);
 // определяем в массиве arr_errAnswers случайным образом четыре неправильных ответа
let errAnswers1=arr_errAnswers[Math.floor(Math.random()*arr_errAnswers.length)];
 // удаляем из массива полученный неправильный ответ
arr_errAnswers.splice(arr_errAnswers.indexOf(errAnswers1), 1);
let errAnswers2=arr_errAnswers[Math.floor(Math.random()*arr_errAnswers.length)];
 // удаляем из массива полученный неправильный ответ
arr_errAnswers.splice(arr_errAnswers.indexOf(errAnswers2), 1);
let errAnswers3=arr_errAnswers[Math.floor(Math.random()*arr_errAnswers.length)];
 // удаляем из массива полученный неправильный ответ
arr_errAnswers.splice(arr_errAnswers.indexOf(errAnswers3), 1);
let errAnswers4=arr_errAnswers[Math.floor(Math.random()*arr_errAnswers.length)];
 // удаляем из массива полученный неправильный ответ
arr_errAnswers.splice(arr_errAnswers.indexOf(errAnswers4), 1);

 // создаем новый массив ответов
let arrAnswers = [errAnswers1, errAnswers2, errAnswers3, errAnswers4, correct_answer];
 // устанавливаем ответы в случайном порядке по предназначенным местам
let answer1 = arrAnswers[Math.floor(Math.random()*arrAnswers.length)];
document.getElementById("answer1").innerHTML = answer1;
 // удаляем из массива установленный ответ
arrAnswers.splice(arrAnswers.indexOf(answer1), 1);
let answer2 = arrAnswers[Math.floor(Math.random()*arrAnswers.length)];
document.getElementById("answer2").innerHTML = answer2;
 // удаляем из массива установленный ответ
arrAnswers.splice(arrAnswers.indexOf(answer2), 1);
let answer3 = arrAnswers[Math.floor(Math.random()*arrAnswers.length)];
document.getElementById("answer3").innerHTML = answer3;
 // удаляем из массива установленный ответ
arrAnswers.splice(arrAnswers.indexOf(answer3), 1);
let answer4 = arrAnswers[Math.floor(Math.random()*arrAnswers.length)];
document.getElementById("answer4").innerHTML = answer4;
 // удаляем из массива установленный ответ
arrAnswers.splice(arrAnswers.indexOf(answer4), 1);
let answer5 = arrAnswers[Math.floor(Math.random()*arrAnswers.length)];
document.getElementById("answer5").innerHTML = answer5;
}

 // функция, сообщающая пользователю о правильном ответе
function reactionYes(){

 // alert(document.getElementById("reaction").innerHTML);
 // clearTimeout(reactionYesTimer);
}

 // ответы пользователя
function userAnswers(ans){
 // увеличиваем счетчик вопросов на единицу
count_answers++;
 // увеличиваем счетчик баловства на единицу
count_prank++;
if (count_prank==2) {document.getElementById("popup").style.display="flex";}
 // определяем тип проверки
let typeTest = document.getElementById("typeCounting_double").innerHTML;
 // считываем число, на котором кликнул пользователь
let userAnswer = (typeTest=="Простые уравнения")?document.getElementById("response").value:parseInt(ans.innerHTML);
 // document.getElementById("response").innerHTML="верно";
if (userAnswer==correct_answer) {
if (typeTest=="Сложение и вычитание") {testAddition()}
else if (typeTest=="Таблица умножения") {testMultiplication()}
else if (typeTest=="Умножение и деление") {testMultiAndDivision()}
else if (typeTest=="Простые уравнения") {
 // сообщаем пользователю о правильном ответе
document.getElementById("reaction").style.color="#00ff00";
document.getElementById("reaction").innerHTML="верно";
setTimeout('document.getElementById("reaction").innerHTML=""', 1000);
testEquation()}
else {alert("произошла ошибка")}
}
else {
 // сообщаем пользователю о неправильном ответе
document.getElementById("reaction").style.color="#ff0000";
document.getElementById("reaction").innerHTML="ошибка";
setTimeout('document.getElementById("reaction").innerHTML=""', 1000);}
}

function go_on(){document.getElementById("popup").style.display="none";}


 // функция прогресс-бара
function getProgress(){
 // показываем счетчик
document.getElementById("count").style.display="block";
 // принимаем максимальное значение шкалы прогресс-бара
let max = (document.getElementById("typeCounting_double").innerHTML=="Простые уравнения")?500:100;
 // устанавливаем максимальное значение шкалы прогресс-бара
document.getElementById('progress').max=max;
 // считываем в коде html текущее значение шкалы прогресс-бара
let value = document.getElementById('progress').value;
 // действия по окончании установленного времени
if(value+1>max) {
 // скрываем счетчик
document.getElementById("count").style.display="none";
 // скрываем страницу с проверкой id=test
document.getElementById("test").style.display="none";
 // скрываем кнопку СТОП
document.getElementById("stop").style.display="none";
 // скрываем страницу уравнений
document.getElementById("equation").style.display="none";
 // показываем страницу с итогами проверки id=rating
document.getElementById("rating").style.display="block";
 // показываем число выполненных примеров
document.getElementById("total").innerHTML = count_question-1;
 // показываем число ошибок
document.getElementById("errors").innerHTML = (count_answers-count_question+1);

 // отношение числа правильных ответов к общему количеству ответов
let ratio = (count_question-1) / count_answers;
let score; // оценка
 // расчет оценки
if (count_answers==0){score=0}
else {score=(ratio<=0.5)?1:(ratio<=0.75)?2:(ratio<=0.9)?3:(ratio<=0.95)?4:5;}

 // расчет размера шрифта оценки
let fontSizeScore;
if (score>=4){ fontSizeScore=(count_question<=10)?"50%":(count_question<=20)?"100%":(count_question<=30)?"200%":(count_question<=40)?"300%":"400%";
}
 // устанавливаем размер шрифта оценки
document.getElementById("score").style.fontSize = fontSizeScore;
 // показываем полученную оценку
document.getElementById("score").innerHTML = score;
}

 // действия в установленное время
document.getElementById('progress').value++; // заполнение прогресс-бара
 // показываем оставшееся время
document.getElementById("note").innerHTML = 'осталось '+(max-value)+ ' сек';
 // уменьшаем счетчик баловства на единицу
count_prank--;

 // запуск таймера и установка задержки (шага) таймера в миллисекундах
let step;
timer = setTimeout(getProgress,1000);
}


 // функция удаления всплывающей подсказки по наведению
function hide(){
if(!document.getElementById('floatTip'));
else document.body.removeChild(document.getElementById('floatTip'));}

 // функция показа всплывающей подсказки по наведению
function show(a) {
var d = document.createElement('div');
d.className='floatTip';
d.id='floatTip';
d.innerHTML = a;
document.body.appendChild(d);
var ww = d.getBoundingClientRect().right - d.getBoundingClientRect().left;
var hh = d.getBoundingClientRect().bottom - d.getBoundingClientRect().top;
document.onmouseover=mouseover;
function mouseover(event) {
event = event || window.event;
var x = 0;
var y = 0;
x = event.clientX;
y = event.clientY;
if (x <= document.body.scrollLeft + ww/2) {
 d.style.left = document.body.scrollLeft + 'px'; }
else if (x >= document.body.scrollLeft + document.body.clientWidth - ww) {
d.style.left = document.body.scrollLeft + document.body.clientWidth - ww + 'px';}
else {
    d.style.left = x + document.body.scrollLeft - ww/2 + 'px';
  }
if (y <= hh + 10) {
d.style.top = y + document.body.scrollTop + 10 + 'px';
} else {
d.style.top = y + document.body.scrollTop - hh - 10 + 'px';
}
}
d.style.opacity='0.9';
d.style.filter='alpha(opacity=90)';
}
