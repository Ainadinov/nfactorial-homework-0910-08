// Как найти?…
// 1. Таблицу с `id="age-table"`.
const ageTable = document.getElementById("age-table");
console.log(ageTable);
// 2. Все элементы `label` внутри этой таблицы (их три).
const ageTabelLabel = document.querySelectorAll( "table label");
console.log(ageTabelLabel);
// 3. Первый `td` в этой таблице (со словом «Age»).
const firtTd = document.querySelectorAll("td")[0];
console.log(firtTd);
// 4. Форму `form` с именем `name="search"`.
const fornSearch = document.getElementsByName("search")[0];
console.log(fornSearch); 
// 5. Первый `input` в этой форме.
const firstInput = document.querySelectorAll("input")[0];
console.log(firstInput);
// 6. Последний `input` в этой форме.
const lastInput = document.querySelectorAll("input")[1];
console.log(lastInput);



// Что выведет этот код?

//   let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   alert( body.firstChild.data ); 
  
  // BODY

