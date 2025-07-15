// Обучение js

// function 

function adminStatus(age,name){
    alert("Hello!")
    console.log(`Code is good!${"Возраст: "+age+' '+ "Имя: "+name}`);
}
adminStatus(12,"Oleg")
function letLearn(status){
    switch(status){
        case 1:
            result = "Ok";
            break;
        case 0:
            result = "Error";
            break;
        default:
            result = "Ошибка на сервере! Повторите попытку позже!";
            break;
    }
    alert(result);
}
letLearn(1)
// Внешние переменные
const userNameAdmin = 'Nikita';

function adminName() {
    alert(`Здравствуйте!${" "+userNameAdmin}`)
    
}
adminName();

let userName = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  alert(message);
}

alert( userName ); // Вася перед вызовом функции

showMessage();

alert( userName ); // Петя, значение внешней переменной было изменено функцией