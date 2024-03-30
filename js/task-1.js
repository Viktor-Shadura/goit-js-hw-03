'use strict';

// Задача 1. Генератор slug

// Виконуй це завдання у файлі task-1.js

// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!

// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті. У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.

// З цим розібралися? А тепер давай нарешті виконувати задачу!

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// Залиш цей код для перевірки ментором.

// На що буде звертати увагу ментор при перевірці:

// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

//TODO PRACTIKE

// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// Оголошена функція calculateEvenTotal(number)
// Виклик функції calculateEvenTotal(1) повертає 0
// Виклик функції calculateEvenTotal(3) повертає 2
// Виклик функції calculateEvenTotal(7) повертає 12
// Виклик функції calculateEvenTotal(18) повертає 90
// Виклик функції calculateEvenTotal(27) повертає 182
// Виклик функції calculateEvenTotal() з випадковим числом повертає правильне значення


function calculateEvenTotal(number) {

  let index = 0;
  let totalPrice = 0;

  for (let i = 0; i <= number; i++) {
    
    i % 2 === 1 ? totalPrice + 0 : totalPrice += i;
  }
  return totalPrice;
}

console.log(calculateEvenTotal(1));
console.log(calculateEvenTotal(3));
console.log(calculateEvenTotal(7));
console.log(calculateEvenTotal(18));
console.log(calculateEvenTotal(27));