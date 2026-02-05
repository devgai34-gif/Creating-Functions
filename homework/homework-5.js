console.log("Файл homework-5.js успешно подключен!");

function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

// Пример вызова функции:
showWeather('Москве', 20);
showWeather('Токио', 15);


// Константа (скорость света в м/с)
const LIGHT_SPEED = 299792458;

function compareSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

// Примеры вызова:
compareSpeed(500);            // Субсветовая скорость
compareSpeed(300000000);      // Сверхсветовая скорость
compareSpeed(299792458);      // Скорость света


// 1. Создаём переменные
let carName = "Lada";   // Название товара
let carPrice = 300;     // Цена товара

// 2. Создаём функцию для покупки
function tryToBuy(currentBudget) {
    // Проверяем, хватает ли денег
    if (currentBudget >= carPrice) {
        // Если денег достаточно или впритык
        console.log(carName + " приобретён. Спасибо за покупку!");
    } else {
        // Если денег меньше, чем цена
        let difference = carPrice - currentBudget;
        console.log("Вам не хватает " + difference + "$, пополните баланс.");
    }
}
// 3. Проверяем работу программы
console.log("--- Проверка покупки ---");

// у нас есть 200$
tryToBuy(200); 

// А теперь, мы накопили 400$
tryToBuy(400);

/**
 * Функция управления климат-контролем
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

// 1. Создаём 3 переменные (модели машин) в стиле camelCase
let ladaModel = "Lada Vesta";
let nivaModel = "Niva Travel";
let vazModel = "Vaz 2107";

// 2. Создаём функцию
// Название: checkCarStatus (Проверить статус машины)

function checkCarStatus(carName) {
    console.log("Checking the condition of: " + carName);
    console.log(carName + " is ready to go!");
}

// 3. Запускаем функцию для наших машин
checkCarStatus(ladaModel);
checkCarStatus(nivaModel);
checkCarStatus(vazModel);