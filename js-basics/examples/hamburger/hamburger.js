//====================================================================================
// МОДУЛЬ Hamburger

var Hamburger = (function() 
{
	Hamburger.SIZE_SMALL = {name: 'Small', maxCountStuff: 5, calories: 100, price: 0.25};
	Hamburger.SIZE_LARGE = {name: 'Large', maxCountStuff: 10, calories: 200, price: 0.5};

	Hamburger.STUFFING_CHEESE = {name: 'Cheese', calories: 150, price: 2.3};
	Hamburger.STUFFING_SALAD = {name: 'Salad', calories: 35, price: 0.8};
	Hamburger.STUFFING_POTATO = {name: 'Potato', calories: 135, price: 1.65};
	Hamburger.STUFFING_FISH = {name: 'Fish', calories: 110, price: 2.2};
	Hamburger.STUFFING_PINEAPPLE = {name: 'Pineapple', calories: 60, price: 2.15};

	Hamburger.TOPPING_MAYO = {name: 'Mayo', calories: 109, price: 1.2};
	Hamburger.TOPPING_SPICE = {name: 'Spice', calories: 55, price: 1.35};
	Hamburger.TOPPING_KETCHUP = {name: 'Ketchup', calories: 78, price: 1.45};
	Hamburger.TOPPING_BARBECUE = {name: 'Barbecue', calories: 103, price: 1.67};
	Hamburger.TOPPING_MUSTARD = {name: 'Mustard', calories: 67, price: 1.25};

	Hamburger.ARRAY_TOPPING = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_KETCHUP, Hamburger.TOPPING_BARBECUE, Hamburger.TOPPING_MUSTARD];
	Hamburger.ARRAY_STUFFING = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_FISH, Hamburger.STUFFING_PINEAPPLE];

	function Hamburger(size) {
		// Свойство size
		this.size = size;
		
		// Свойство stuffing
		this.stuffing = [];

		// Свойство topping
		this.topping = [];

		// Добавляем в stuffing все начинки, учитывая размер гамбургера
		for(var i = 1; i < arguments.length && i <= this.size.maxCountStuff; i++) {
			this.addOneItemInArrayWithoutRepeat(this.stuffing, arguments[i]);
		}
	}

	// Добавление одного элемента без повторений
	Hamburger.prototype.addOneItemInArrayWithoutRepeat = function(array, item) {
		var isStoredInArray = array.indexOf(item) >= 0;
		if(! isStoredInArray) {
			array.push(item);
		}
		return !isStoredInArray;
	};

	// Метод addStuffing. Добавление начинки к гамбургеру
	Hamburger.prototype.addStuffing = function (_stuffing) {
		return this.addOneItemInArrayWithoutRepeat(this.stuffing, _stuffing);
	};

	// Метод addTopping
	Hamburger.prototype.addTopping = function (_topping) {
		return this.addOneItemInArrayWithoutRepeat(this.topping, _topping);
	};

	// Метод removeTopping
	Hamburger.prototype.removeTopping = function (_topping) {
		var index = this.topping.indexOf(_topping);
		var isStoredInArray = index >= 0;
		if(isStoredInArray){
				this.topping.splice(index, 1);
		}
		return isStoredInArray;	
	};

	// Метод removeStuffing
	Hamburger.prototype.removeStuffing = function (_stuffing) {
		var index = this.stuffing.indexOf(_stuffing);
		var isStoredInArray = index >= 0;
		if(isStoredInArray){
				this.stuffing.splice(index, 1);
		}
		return isStoredInArray;	
	};

	// Вычисление суммы значений элементов массива по переданному свойству
	Hamburger.prototype.calculateProperty = function(nameProperty) {
		var total = this.stuffing.concat(this.topping).reduce(function(sum, current) {
			return sum + current[nameProperty];
		}, 0);
		return total;
	};

	// Метод calculateCalories
	Hamburger.prototype.calculateCalories = function () {
		return this.calculateProperty('calories') + this.size.calories;
	};

	// Метод calculatePrice
	Hamburger.prototype.calculatePrice = function () {
		var price = this.calculateProperty('price') + this.size.price;
		return price.toFixed(2);
	};

	return Hamburger;
})();

//====================================================================================
// МОДУЛЬ handlePage

var handlePage = (function() {

	// Button SMALL
	var buttonSmall = document.getElementById('selectSmallSize');
	// Добавляем обработчик события на клик buttonSmall
	buttonSmall.addEventListener('click', chooseSize(Hamburger.SIZE_SMALL));

	// Button LARGE
	var buttonLarge = document.getElementById('selectLargeSize');
	// Добавляем обработчик события на клик buttonLarge
	buttonLarge.addEventListener('click', chooseSize(Hamburger.SIZE_LARGE));

	var blockHamburgerMenu = document.getElementById('blockHamburgerMenu');
	var blockHamburgerCreator = document.getElementById('blockHamburgerCreator');

	// Элементы Информационного блока.
	var sizeHamburger = document.getElementById('sizeHamburger');
	var toppings = document.getElementById('toppings');
	var stuffings = document.getElementById('stuffings');
	var calories = document.getElementById('calories');
	var price = document.getElementById('price');

	// Тело таблицы Topping.
	var tbodyTableTopping = document.getElementById('tbodyTableTopping');
	tbodyTableTopping.addEventListener('click', deleteTopping);

	// Тело таблицы Stuffing.
	var tbodyTableStuffing = document.getElementById('tbodyTableStuffing');
	tbodyTableStuffing.addEventListener('click', deleteStuffing);

	// Кнопки для добавления топпинга Add Topping и стаффинга Add Stuffing
	var buttonAddTopping = document.getElementById('buttonAddTopping');
	var buttonAddStuffing = document.getElementById('buttonAddStuffing');

	//Список добавляемых топпингов
	var toppingItems = document.getElementById('toppingItems');
	toppingItems.addEventListener('click', addTopping);

	// Список добавляемых стаффингов
	var stuffingItems = document.getElementById('stuffingItems');
	stuffingItems.addEventListener('click', addStuffing);

	// Input для ввода количества гамбургеров.
	var countHamburger = document.getElementById('countHamburger');
	countHamburger.addEventListener('input', calculateTotalPrice);

	var totalPrice = document.getElementById('totalPrice');

	// div чека.
	var checkDiv = document.getElementById('checkDiv');

	// Кнопка Buy It!
	var buyItButton = document.getElementById('buyItButton');
	buyItButton.addEventListener('click', buyIt);

	// ГАМБУРГЕР
	var hamburger;

	// Скрыть элемент.
	function hideElement(element) {
		element.setAttribute('style', 'display:none');
	}

	// Показать элемент.
	function showElement(element) {
		element.setAttribute('style', 'display:block');
	}

	// Показать блок для наполнения гамбургера.
	function showBlockHambergerCreator() {
		hideElement(blockHamburgerMenu);
		showElement(blockHamburgerCreator);
	}

	// Заполнение списка Add Topping.
	(function fillAddTopping(){
		for(var i = 0; i < Hamburger.ARRAY_TOPPING.length; i++){
			fillOneItemInAddToppingOrAddStuffing(toppingItems, Hamburger.ARRAY_TOPPING[i].name);
		}
	})();

	// Заполнение списка Add Stuffing.
	(function fillAddStuffing(){
		for(var i = 0; i < Hamburger.ARRAY_STUFFING.length; i++){
			fillOneItemInAddToppingOrAddStuffing(stuffingItems, Hamburger.ARRAY_STUFFING[i].name);
		}
	})();

	// Добавление одного элемента в список Add Topping или Add Stuffing.
	function fillOneItemInAddToppingOrAddStuffing(ul, addedItemName){
		var li = document.createElement('LI');
		var a = document.createElement('A');
		var aText = document.createTextNode(addedItemName);
		a.dataset.value = addedItemName;

		a.appendChild(aText);
		li.appendChild(a);
		ul.appendChild(li);
	}

	// Выбор размера гамбургера
	function chooseSize(size) {
		return function() {
			showBlockHambergerCreator();
			hamburger = new Hamburger(size);
			fillInformationBlocks();
		}
	}

	// Заполнение информационных блоков.
	function fillInformationBlocks(){
		sizeHamburger.textContent = hamburger.size.name;
		toppings.textContent = hamburger.topping.length;
		stuffings.textContent = hamburger.stuffing.length;
		calories.textContent = hamburger.calculateCalories();
		price.textContent = '$' + hamburger.calculatePrice();

		calculateTotalPrice();
	}

	// Добавление одного топпинга.
	function addTopping(event){
		var target = event.target;
		addOneItem(Hamburger.ARRAY_TOPPING, hamburger.topping, hamburger.addTopping, target, tbodyTableTopping, buttonAddTopping);

	}

	// Добавление одного стаффинга.
	function addStuffing(event){
		var target = event.target;
		addOneItem(Hamburger.ARRAY_STUFFING, hamburger.stuffing, hamburger.addStuffing, target, tbodyTableStuffing, buttonAddStuffing);

	}

	// Добавление одного элемента(топпинга или стаффинга).

	// Добавляем элемент к гамбургеру в массив currentArray, с помощью функции funcForAddItem.
	// Объект события - target, элемент добавляется в таблицу с телом tbody. В случае необходимости
	// блокируется кнопка buttonAdd.
	function addOneItem(baseArray, currentArray, funcForAddItem, target, tbody, buttonAdd){
		var isAdded;
		var addedItem;
		while(target != this){
			if(target.tagName == 'A'){
				// Определяем, какой топпинг/стаффинг выбрал пользователь и добавляем его к гамбургеру.
				for(var i = 0; i < baseArray.length; i++){
					if(target.dataset.value === baseArray[i].name){
						addedItem = baseArray[i];
						isAdded = funcForAddItem.call(hamburger, addedItem);
						break;
					}
				}
				// После добавления топпинга/стаффиинга к гамбургеру добавляем этот топпинг/стаффинг в таблицу, перерассчитываем
				// информационный блок и скрываем топпинг/стаффинг в списке. В случае, если все топпинги/стаффинги в списке скрыты, блокируем список.
				if(isAdded){
					addItemInTable(tbody, addedItem, currentArray.length);
					fillInformationBlocks();
					hideElement(target);
					if(baseArray.length === currentArray.length){
						buttonAdd.disabled = true;
					}
				}
				return;
			}
			target = target.parentElement;
		}
	}

	// Добавление одной строки в таблицу.
	function addItemInTable(tbodyElement, item, index){
		var row = document.createElement('TR');

		var number = document.createElement('TD');
		var numberText = document.createTextNode(index);
		number.appendChild(numberText);

		var name = document.createElement('TD');
		name.setAttribute('width', '50%');
		var nameText = document.createTextNode(item.name);
		name.appendChild(nameText);

		var price = document.createElement('TD');
		price.setAttribute('width', '50%');
		var priceText = document.createTextNode('$' + item.price);
		price.appendChild(priceText);

		var columnButton = document.createElement('TD');
		columnButton.setAttribute('width', 'auto');
		var button = document.createElement('BUTTON');
		button.setAttribute('value', item.name);
		button.classList.add('btn', 'btn-sm', 'btn-danger');
		var span = document.createElement('SPAN');
		span.classList.add('glyphicon', 'glyphicon-remove');
		button.appendChild(span);
		columnButton.appendChild(button);

		row.appendChild(number);
		row.appendChild(name);
		row.appendChild(price);
		row.appendChild(columnButton);

		tbodyElement.appendChild(row);
	}

	// Удаление одного топпинга.
	function deleteTopping(event){
		var target = event.target;
		deleteOneItem(Hamburger.ARRAY_TOPPING, hamburger.topping, hamburger.removeTopping, target, tbodyTableTopping, buttonAddTopping, toppingItems);
	}

	// Удаление одного стаффинга.
	function deleteStuffing(event){
		var target = event.target;
		deleteOneItem(Hamburger.ARRAY_STUFFING, hamburger.stuffing, hamburger.removeStuffing, target, tbodyTableStuffing, buttonAddStuffing, stuffingItems);
	}

	// Удаление одного элемента (топпинга или стаффинга)
	function deleteOneItem(baseArray, currentArray, funcForRemoveItem, target, tbody, buttonAdd, listItems){
		var deletedItem;
		while(target != this) {
			if(target.tagName == 'BUTTON'){
				// Определяем, какой топпинг/стаффинг выбрал пользователь, и удаляем его из гамбургера.
				for(var i = 0; i < baseArray.length; i++){
					if(target.value === baseArray[i].name){
						deletedItem = baseArray[i];
						funcForRemoveItem.call(hamburger, deletedItem);
						break;
					}
				}
				// После удаления топпинга/стаффинга из гамбургера разблокируем Add Topping/ Add Stuffing,
				if(currentArray.length === baseArray.length - 1){
					buttonAdd.disabled = false;
				}
				// удалим строку из таблицы,
				var deletedRow = target.closest('tr');
				deletedRow.parentElement.removeChild(deletedRow);
				// сделаем видимым элемент toppingItems/stuffingItems,
				var listItem = listItems.querySelector('a[data-value=\"' + deletedItem.name + '\"]');
				showElement(listItem);
				// пересчитаем номера строк,
				for(var i = 1; i <= tbody.rows.length; i++){
					tbody.rows[i-1].cells[0].textContent = i;
				}
				// пересчитаем информационный блок.
				fillInformationBlocks();
			return;
			}
			target = target.parentElement;
		}
	}

	// Вычисление итоговой информации.
	function calculateTotalPrice(){
		if(countHamburger.value > 50){
			countHamburger.value = 50;
		}
		if(countHamburger.value < 1){
			countHamburger.value = 1;
		}
		var total = hamburger.calculatePrice() * countHamburger.value;
		totalPrice.textContent = '$' + total.toFixed(2);
	}

	// Обработчик клика на кнопку Buy It
	function buyIt(){
		var oldCheckTable = document.getElementById('checkTable');

		if(oldCheckTable != null){
			oldCheckTable.remove();
		}

		// Создание таблицы
		var checkTable = document.createElement('table');
		checkTable.id = 'checkTable';
		checkTable.classList.add('checkTable');

		var checkTbody = document.createElement('tbody');
		checkTbody.id = 'checkTbody';

		checkDiv.appendChild(checkTable);
		checkTable.appendChild(checkTbody);


		if(hamburger.topping.length > 0){
			addOneHeaderRowInCheck('Topping');
		}
		for(var i = 0; i < hamburger.topping.length; i++){
			addOneContentRowInCheck(hamburger.topping[i].name, '$' + hamburger.topping[i].price);
		}

		if(hamburger.stuffing.length > 0){
			addOneHeaderRowInCheck('Stuffing');
		}
		for(var i = 0; i < hamburger.stuffing.length; i++){
			addOneContentRowInCheck(hamburger.stuffing[i].name, '$' + hamburger.stuffing[i].price);
		}

		var priceHamburger = hamburger.calculatePrice();
		var count = countHamburger.value;
		var total = (priceHamburger * count).toFixed(2);
		addOneHeaderRowInCheck('Size');
		addOneContentRowInCheck(hamburger.size.name, '$' + hamburger.size.price);
		addOneContentRowInCheck('Price', '$' + priceHamburger, 'checkTrHorizontal');
		addOneContentRowInCheck('Count', count);
		addOneContentRowInCheck('Total', '$' + total);

		showElement(checkDiv);

		// Добавить одну строку с двумя столбцами в чек.
		function addOneContentRowInCheck(firstValue, secondValue, classNameForRow){
			var row = document.createElement('TR');

			var firstColumn = document.createElement('TD');
			firstColumn.classList.add('checkFirstTd');
			var secondColumn = document.createElement('TD');
			secondColumn.classList.add('checkSecondTd');
			row.appendChild(firstColumn);
			row.appendChild(secondColumn);

			var firstColumnText = document.createTextNode(firstValue);
			var secondColumnText = document.createTextNode(secondValue);
			firstColumn.appendChild(firstColumnText);
			secondColumn.appendChild(secondColumnText);

			if(classNameForRow){
				row.classList.add(classNameForRow);
			}

			checkTbody.appendChild(row);
		}

		// Добавить строку-заголовок в чек.
		function addOneHeaderRowInCheck(value){
			var row = document.createElement('TR');
			var column = document.createElement('TD');
			row.appendChild(column);

			var columnText = document.createTextNode(value);
			column.appendChild(columnText);
			column.setAttribute('colspan', '2');
			column.classList.add('checkHeaderTd');

			checkTbody.appendChild(row);
		}
	}
});

// Добавление обработчика события к DOMContentLoaded.
document.addEventListener('DOMContentLoaded', handlePage);