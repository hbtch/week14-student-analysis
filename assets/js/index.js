//1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.
const grades = [1, 4, 25, 27, 30, 42, 45, 49, 51, 53, 68, 99];
const randomIndex = Math.floor(Math.random() * grades.length);
// Используем случайный индекс для выбора случайной оценки из массива
const randomGrade = grades[randomIndex];
console.log(randomGrade);
//2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
const mean = 
//3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
//4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
//5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
//6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
//7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
//- Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//- Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//- Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//- Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//- Если оценка ниже 20, преобразуйте её в "E"
//Выведите все найденные значения на экран.