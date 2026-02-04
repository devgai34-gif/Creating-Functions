console.log("Файл homework-5.js успешно подключен!");

function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

// Пример вызова функции:
showWeather('Москве', 20);
showWeather('Токио', 15);


// Константа (скорость света в м/с)
const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

// Примеры вызова:
checkSpeed(500);            // Субсветовая скорость
checkSpeed(300000000);      // Сверхсветовая скорость
checkSpeed(299792458);      // Скорость света


// Переменные с данными о товаре
const product = "Игровая консоль";
const price = 500;

/**
 * Функция для попытки покупки товара
 * @param {number} budget - текущая сумма денег у пользователя
 */
function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    // Рассчитываем разницу
    const debt = price - budget;
    console.log(`Вам не хватает ${debt}$, пополните баланс`);
  }
}

// Примеры использования:
buyProduct(600); // Денег хватает
buyProduct(350); // Денег не хватает


/**
 * Функция управления климат-контролем
 * @param {number} currentTemp - Текущая температура
 * @param {number} targetTemp - Желаемая температура
 */
function manageClimateControl(currentTemp, targetTemp) {
  console.log(`Система запущена. Сейчас в комнате: ${currentTemp}°C. Цель: ${targetTemp}°C.`);

  if (currentTemp < targetTemp) {
    const diff = targetTemp - currentTemp;
    console.log(`Включаю обогрев. Нужно поднять температуру на ${diff}°C.`);
  } else if (currentTemp > targetTemp) {
    const diff = currentTemp - targetTemp;
    console.log(`Включаю кондиционер. Нужно охладить помещение на ${diff}°C.`);
  } else {
    console.log("Идеальная температура достигнута. Режим ожидания.");
  }
}

// Проверка разных сценариев:
manageClimateControl(18, 23); // Холодно -> Обогрев
manageClimateControl(30, 22); // Жарко -> Охлаждение
manageClimateControl(24, 24); // Норма -> Ожидание

// Называем функцию maiRobot (Mой Робот)
function maiRobot(candies) {
  if (candies > 5) {
    console.log("Ого! Хватит на сегодня! 🛑");
  } else if (candies === 0) {
    console.log("Ты еще не ел конфет? Давай найдем одну! 🍬");
  } else {
    console.log("Какое вкусное угощение! Приятного аппетита! ✨");
  }
}

// Пробуем запустить робота:
maiRobot(10); // Слишком много
maiRobot(3);  // В самый раз
maiRobot(0);  // Пора подкрепиться

// Переменная №1: Текст (String) — имя нашего питомца
let dragonName = "Искорка";

// Переменная №2: Число (Number) — сколько лет дракону
let dragonAge = 3;

// Переменная №3: Да/Нет (Boolean) — умеет ли он летать прямо сейчас
let canFly = true;

// Посмотрим, что у нас получилось
console.log("Знакомьтесь, это " + dragonName);
console.log("Ему уже " + dragonAge + " года");
console.log("Умеет летать: " + canFly);