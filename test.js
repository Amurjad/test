var test = confirm("ФСБ: Вы запросили доступ к сайту", "");

if (test == true) {
  var test2 = confirm("ФСБ: Мы проверим ваши личные данные", "");
} else if (test == false) {
  alert("Ошибка");
}
if (test2 == true) {
  alert("Спасибо! Это не займет много времени!");
} else if (test2 == false) {
  alert("Ошибка");
}
do {
  var fio = prompt("Ф.И.О" , "");
} while (fio != "Назаров Андрей Александрович");
do {
  var dateS = prompt("dd/mm/yyyy", "");
}while (dateS != "16.04.1996");
do {
  var login = prompt("Ваш логин", "");
}while (login != "admin");
do {
  var pass = prompt("Ваш пароль", "");
}while (pass != "12345");
alert ("Добро Пожаловать!");