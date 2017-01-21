(function () {
    /*
    * Сортировка объектов 
    * Напишите код, который отсортирует массив объектов people по полю age.
    * Выведите список имён в массиве после сортировки.
    */
        var vasya = { name: 'Вася', age: 23 };
        var masha = { name: 'Маша', age: 18 };
        var vovochka = { name: 'Вовочка', age: 6 };
        var petya = {name: 'Петя'};

        var people = [vasya, masha, vovochka, petya];

        people.sort(comparePeople);

        // теперь people: [vovochka, masha, vasya]
        console.log(people[0].age); // 6
        console.log(people); // 6

    function comparePeople(first, second) {
        if ('age' in first && 'age' in second) {
            return first.age - second.age;
        } else {
            return -1;
        }
        // throw new Error('age поле не найдено, на объекте, проверьте правильность введеных данных.');
    }
})();

(function () {
    /**
   * Добавить класс в строку
   *
   * В объекте есть свойство className,
   * которое содержит список «классов» – слов, разделенных пробелом  className: 'open menu'
   *
   * Создайте функцию addClass(obj, cls), которая добавляет в список класс cls,
   * но только если его там еще нет. Функция не должна добавлять лишних пробелов.
   *
   */
    var obj = {
        className: 'open menu'
    };

    addClass(obj, 'new'); // obj.className='open menu new'
    addClass(obj, 'open'); // без изменений (класс уже существует)
    addClass(obj, 'me'); // obj.className='open menu new me'

    console.log(obj.className); // "open menu new me"

    function addClass(obj, classNameNewValue) {
        if (!(isClassNameCreate(obj, classNameNewValue))) {
            obj.className += ' ' + classNameNewValue;
        }
    }

    function isClassNameCreate(obj, classNameNewValue) {
        var arr = obj.className.split(' ');
        // return arr.some(elem=> elem == classNameNewValue);

           return arr.some(checkClassNameNewValue);
           function checkClassNameNewValue(element, index, array) {
               return element == classNameNewValue;
           }
    }

})();

(function () {
    /**
  * Перепишите цикл через map
  * Код ниже получает из массива строк новый массив, содержащий их длины.
  */
    var arr = ['Есть', 'жизнь', 'на', 'Марсе'];

    var newArray = [];

    // Переписать цикл
    newArray = arr.map(function (elem) {
        return elem.length;
    });

    console.log(newArray); // 4,5,2,5
})();
