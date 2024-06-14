document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("addBtn").addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.getElementById("nameInput").value;
        const price = document.getElementById("priceInput").value;
        const category = document.getElementById("selectCategory").value;
        addExpense(name, category, price);
        document.getElementById("nameInput").value = '';
        document.getElementById("priceInput").value = '';
    });
});
let totalProducts = 0;
let totalFastFoods = 0;
let totalSport = 0;
let totalDrinks = 0;
let totalHousehold = 0;
let totalElectronic = 0;
let totalAuto = 0;
let totalFertilizers = 0;
let totalPlants = 0;
function addExpense(name, category, price) {
    const table = document.getElementById('table');
    const td = document.createElement('tr');
    td.classList.add('purcashes__item', 'purcashes__row');
    td.innerHTML = ` 
      <td class="purcashes__td" id="name">${name}</td>
      <td class="purcashes__td" id="category">${category}</td>
      <td class="purcashes__td" id="price">${price}</td>
      <td class="purcashes__td"> <i class="purcashes__item-del fa-solid fa-trash" onclick="deleteExpense(this)">❌</i> </td>`;

    table.appendChild(td);

    const prod = document.getElementById('Legend-price-product');
    const fast = document.getElementById('Legend-price-fastfood');
    const sport = document.getElementById('Legend-price-sport');
    const drink = document.getElementById('Legend-price-drinks');
    const HHold = document.getElementById('Legend-price-Household');
    const elec = document.getElementById('Legend-price-Electronic');
    const auto = document.getElementById('Legend-price-Auto');
    const plnts = document.getElementById('Legend-price-Plants');
    const fert = document.getElementById('Legend-price-Fertilizers');

    if (category === "Products") {
        totalProducts += parseFloat(price);
        prod.innerText = totalProducts;
    } else if (category === "FastFoods") {
        totalFastFoods += parseFloat(price);
        fast.innerText = totalFastFoods;
    } else if (category === "Sport") {
        totalSport += parseFloat(price);
        sport.innerText = totalSport;
    } else if (category === "Drinks") {
        totalDrinks += parseFloat(price);
        drink.innerText = totalDrinks;
    } else if (category === "Household") {
        totalHousehold += parseFloat(price);
        HHold.innerText = totalHousehold;
    } else if (category === "Electronic") {
        totalElectronic += parseFloat(price);
        elec.innerText = totalElectronic;
    } else if (category === "Auto") {
        totalAuto += parseFloat(price);
        auto.innerText = totalAuto;
    } else if (category === "Fertilizers") {
        totalFertilizers += parseFloat(price);
        fert.innerText = totalFertilizers;
    } else if (category === "Plants") {
        totalPlants += parseFloat(price);
        plnts.innerText = totalPlants;
    } else {
        console.error("Неизвестная категория");
    }

    const deleteBtn = td.querySelector('.purcashes__item-del');
    deleteBtn.addEventListener('click', () => {
        deleteExpense(td);
    });

}
function deleteExpense(element) {
    const parentRow = element.closest('.purcashes__row');
    const category = parentRow.querySelector('.purcashes__td:nth-child(2)').innerText;
    const price = parseFloat(parentRow.querySelector('.purcashes__td:nth-child(3)').innerText);

    const prod = document.getElementById('Legend-price-product');
    const fast = document.getElementById('Legend-price-fastfood');
    const sport = document.getElementById('Legend-price-sport');
    const drink = document.getElementById('Legend-price-drinks');
    const HHold = document.getElementById('Legend-price-Household');
    const elec = document.getElementById('Legend-price-Electronic');
    const auto = document.getElementById('Legend-price-Auto');
    const plnts = document.getElementById('Legend-price-Plants');
    const fert = document.getElementById('Legend-price-Fertilizers');

    if (category === "Products") {
        totalProducts = Math.max(0, totalProducts - price);
        prod.innerText = totalProducts;
    } else if (category === "FastFoods") {
        totalFastFoods = Math.max(0, totalFastFoods - price);
        fast.innerText = totalFastFoods;
    } else if (category === "Sport") {
        totalSport = Math.max(0, totalSport - price);
        sport.innerText = totalSport;
    } else if (category === "Drinks") {
        totalDrinks = Math.max(0, totalDrinks - price);
        drink.innerText = totalDrinks;
    } else if (category === "Household") {
        totalHousehold = Math.max(0, totalHousehold - price);
        HHold.innerText = totalHousehold;
    } else if (category === "Electronic") {
        totalElectronic = Math.max(0, totalElectronic - price);
        elec.innerText = totalElectronic;
    } else if (category === "Auto") {
        totalAuto = Math.max(0, totalAuto - price);
        auto.innerText = totalAuto;
    } else if (category === "Fertilizers") {
        totalFertilizers = Math.max(0, totalFertilizers - price);
        fert.innerText = totalFertilizers;
    } else if (category === "Plants") {
        totalPlants = Math.max(0, totalPlants - price);
        plnts.innerText = totalPlants;
    } else {
        console.error("Неизвестная категория");
    }

    parentRow.remove();
}

// Мой код состоит из 4 частей 

// 1 часть 
// Под первой часть я подразумеваю функцию обработки клика на кнопку.
// Сначала мы обращаемся к документу и пишем какие действия будем обрабатывать при клике на кнопку которая будет добавлять.
// На следующих 3 строках мы получаем 3 значения из 3 инпутов это 1 имя 2 цена 3 категория они понадобятся для расчета цен в легенде.
// Потом мы вызываем функцию добавления её я опишу в 3 части. После чего мы отчищаем поля ввода для инпута цены и имени.

// 2 часть 
// Под второй частью я подразумеваю добавление счетчиков для всех категорий.
// вторая часть отчень простая в ней мы добавляем счетчики для всех категорий это необходимо для расчета той же легенды.

// 3 часть 
// Под третьей частью я подразумеваю функцию добавления элемента таблицы на страницу 
// Сначала я получаю таблицу т.е получаю область на которой буду создавать элементы таблицы 
// Потом я создаю константу которая будет создавать элемент таблицы(tr). Это понадобится для функции добавления этого самого элемента на таблицу
// После чего я добавляю в эту константу 2 класса которые должны ей присваиваться для того чтобы таблица выглядела со стилем а не без него
// Потом я в эту переменную добавляю текст как раз тот который нужен для создания и который будет использован для этого.
// После чего я добавляю в переменную table ранее заданный элемент таблицы.
// Далее я создаю несколько констант в которых получаю все значения легенды.
// Потом идет Небольшой список условий на примере я разбиру только 1 элемент он служит примером для всех остальных.
// Проверяем равна ли категория равна продуктам, мы создаем счетчик продуктов который будет равен сумме продуктов и только что преобразованного в число счетчика продуктов
// Если категория не равна ни одной из указанных в консоль ввыводиться ошибка 'неизвестная категория'.
// Потом я создаю кнопку удаления находя её по классу в элементе таблицы.
// После чего я обрабатывая клик на эту кнопку говорю что она делает функицию удаления .

// 4 часть 
// Под четвертой частью я подразумеваю функцию удаления элемента таблицы и расчета значений легенды.
// Сначала я создаю константу с именем parentRow она будет удалять все элементы с классом purcashes__row.
// Потом я создаю категорию и цену (Они необходимы для дальнейших условий).
// После чего я создаю легенду всех категорий продуктов 
// Потом создается условие. Рассмотрю я только 1 (для наглядного примера). Рассмотрю только 1.
// Если категория равна продуктам то счётчик продуктов равен далее я пошел на хитрость
// Я вызвал математическую функцию и 2 числа(это разность счетчика и только что полученной цены и нуль) функция находит большее число
// Ну и легенда будет равна счетчику продуктов(Все зависит от категории продуктов)
// В ином случае выводиться ошибка 'неизвестная категория'
// Ну и после чего мы удаляем все элементы с классом purcashes__row.
// Все
