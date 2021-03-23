/* 
RU
Функцию sumInput()
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
Ноль 0 – считается числом, ввод значений при вводе «0» не останавливается.

EN
Function sumInput() 
Asks the user to use the values using a hint and store them in an array.
Finishes entering values when the user enters a non-numeric value, an empty string, or clicks Cancel.
Counts and returns the number of elements in the array.
Zero 0 - it is considered, the value input does not stop when entering "0".
*/

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );