class ArrangeBox {
    constructor(items) {
        // Создаем div с классом container
        var containerDiv = document.createElement('div');
        containerDiv.classList.add('container');

        // Создаем div с классом arrange-box
        var arrangeBoxDiv = document.createElement('div');
        arrangeBoxDiv.classList.add('arrange-box');

        // Создаем div с классом data
        var dataDiv = document.createElement('div');
        dataDiv.classList.add('data');

        // Создаем div с классом buttons-container1
        var buttonsContainerDiv1 = document.createElement('div');
        buttonsContainerDiv1.classList.add('buttons-container1');

        // Создаем кнопки и добавляем их в buttons-container1
        var buttonLabels = ['Вверх', 'Вверх в начало списка', 'Вниз', 'Вниз в конец списка'];
        buttonLabels.forEach(function(label) {
            var button = document.createElement('button');
            button.textContent = label;
            buttonsContainerDiv1.appendChild(button);
        });

        // Создаем div с классом items-container для "Доступный"
        var itemsContainerDiv1 = document.createElement('div');
        itemsContainerDiv1.classList.add('items-container');

        var headerAvailable = document.createElement('header');
        headerAvailable.textContent = 'Доступный';

        var filterDiv1 = document.createElement('div');
        filterDiv1.classList.add('filter');

        var inputAvailable = document.createElement('input');
        inputAvailable.setAttribute('placeholder', 'Поиск');
        inputAvailable.setAttribute('type', 'text');
		
		// Обработчик события для поля ввода поиска
        inputAvailable.addEventListener('input', function() {
            var searchText = inputAvailable.value.toLowerCase(); // Получаем текст из поля ввода и приводим к нижнему регистру

            // Перебираем все элементы списка selectAvailable
            Array.from(selectAvailable.options).forEach(function(option) {
                var optionText = option.textContent.toLowerCase(); // Получаем текст текущего элемента списка и приводим к нижнему регистру
                // Если текст элемента списка содержит введенный текст, то отображаем элемент, иначе скрываем его
                if (optionText.includes(searchText)) {
                    option.style.display = 'block';
                } else {
                    option.style.display = 'none';
                }
            });
        });

        var selectAvailable = document.createElement('select');
        selectAvailable.setAttribute('id','selectAvailable');
        selectAvailable.classList.add('list');
        selectAvailable.setAttribute('size', items.length);

        items.forEach(function(itemText, index) {
            var optionItem = document.createElement('option');
            optionItem.value = index;
            optionItem.textContent = itemText;
            selectAvailable.appendChild(optionItem);
        });
		
		// Обработчик события для кнопки "Вниз"
        buttonsContainerDiv1.querySelector("button:nth-child(3)").addEventListener('click', function() {
            var selectedOption = selectAvailable.options[selectAvailable.selectedIndex];
            if (selectedOption) {
                // Создаем новый option
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;

                // Вставляем новый option после выбранного элемента в selectAvailable
                var selectedIndex = selectAvailable.selectedIndex;
                if (selectedIndex < selectAvailable.options.length - 2) {
                selectAvailable.insertBefore(optionItem, selectAvailable.options[selectedIndex + 2]);
                } else {
                selectAvailable.appendChild(optionItem);
                }

                // Удаляем выбранный элемент из selectAvailable
                selectAvailable.removeChild(selectedOption);

                // Выбираем новый элемент
                optionItem.selected = true;
            }
        });
		
		// Обработчик события для кнопки "Вверх"
        buttonsContainerDiv1.querySelector("button:nth-child(1)").addEventListener('click', function() {
            var selectedOption = selectAvailable.options[selectAvailable.selectedIndex];
            if (selectedOption) {
                // Создаем новый option
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;

                // Вставляем новый option после выбранного элемента в selectAvailable
                var selectedIndex = selectAvailable.selectedIndex;
                if (selectedIndex < selectAvailable.options.length + 1) {
                selectAvailable.insertBefore(optionItem, selectAvailable.options[selectedIndex - 1]);
                } else {
                selectAvailable.appendChild(optionItem);
                }

                // Удаляем выбранный элемент из selectAvailable
                selectAvailable.removeChild(selectedOption);

                // Выбираем новый элемент
                optionItem.selected = true;
            }
        });
		
		// Обработчик события для кнопки "Вниз в конец списка"
        buttonsContainerDiv1.querySelector("button:nth-child(4)").addEventListener('click', function() {
            var selectedOption = selectAvailable.options[selectAvailable.selectedIndex];
            if (selectedOption) {
                // Создаем новый option
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;

                // Удаляем выбранный элемент из selectAvailable
                selectAvailable.removeChild(selectedOption);

                // Добавляем новый option в конец списка selectAvailable
                selectAvailable.appendChild(optionItem);
            }
        });
		
		// Обработчик события для кнопки "Вверх в начало списка"
        buttonsContainerDiv1.querySelector("button:nth-child(2)").addEventListener('click', function() {
            var selectedOption = selectAvailable.options[selectAvailable.selectedIndex];
            if (selectedOption) {
                // Создаем новый option
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;

                // Удаляем выбранный элемент из selectAvailable
                selectAvailable.removeChild(selectedOption);

                // Добавляем новый option в начало списка selectAvailable
                selectAvailable.insertBefore(optionItem, selectAvailable.firstChild);
            }
        });

        itemsContainerDiv1.appendChild(headerAvailable);
        itemsContainerDiv1.appendChild(filterDiv1);
        filterDiv1.appendChild(inputAvailable);
        itemsContainerDiv1.appendChild(selectAvailable);

        // Создаем div с классом buttons-container2
        var buttonsContainerDiv2 = document.createElement('div');
        buttonsContainerDiv2.classList.add('buttons-container2');

        var buttonLabels2 = ['>', '<', '>>', '<<'];
        buttonLabels2.forEach(function(label) {
            var button = document.createElement('button');
            button.textContent = label;
            buttonsContainerDiv2.appendChild(button);
        });

        // Создаем второй items-container для "Выбрано"
        var itemsContainerDiv2 = document.createElement('div');
        itemsContainerDiv2.classList.add('items-container');

        var headerAvailable2 = document.createElement('header');
        headerAvailable2.textContent = 'Выбрано';

        var filterDiv2 = document.createElement('div');
        filterDiv2.classList.add('filter');

        var inputAvailable2 = document.createElement('input');
        inputAvailable2.setAttribute('placeholder', 'Поиск');
        inputAvailable2.setAttribute('type', 'text');

		// Обработчик события для поля ввода поиска
        inputAvailable2.addEventListener('input', function() {
            var searchText = inputAvailable2.value.toLowerCase(); // Получаем текст из поля ввода и приводим к нижнему регистру

            // Перебираем все элементы списка selectAvailable2
            Array.from(selectAvailable2.options).forEach(function(option) {
                var optionText = option.textContent.toLowerCase(); // Получаем текст текущего элемента списка и приводим к нижнему регистру
                // Если текст элемента списка содержит введенный текст, то отображаем элемент, иначе скрываем его
                if (optionText.includes(searchText)) {
                    option.style.display = 'block';
                } else {
                    option.style.display = 'none';
                }
            });
        });

        var selectAvailable2 = document.createElement('select');
        selectAvailable2.classList.add('list');
        selectAvailable2.setAttribute('size', items.length); 

        // Обработчик события для кнопки ">"
        buttonsContainerDiv2.querySelector("button:nth-child(1)").addEventListener('click', function() {
            var selectedOption = selectAvailable.options[selectAvailable.selectedIndex];
            if (selectedOption) {
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;
                selectAvailable2.appendChild(optionItem);
                selectAvailable.removeChild(selectedOption);
            }
        });
		
		// Обработчик события для кнопки "<"
        buttonsContainerDiv2.querySelector("button:nth-child(2)").addEventListener('click', function() {
            var selectedOption = selectAvailable2.options[selectAvailable2.selectedIndex];
            if (selectedOption) {
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;
                selectAvailable.appendChild(optionItem);
                selectAvailable2.removeChild(selectedOption);
            }
        });
		
		// Обработчик события для кнопки ">>"
        buttonsContainerDiv2.querySelector("button:nth-child(3)").addEventListener('click', function() {
            // Получаем все опции из selectAvailable
            var options = selectAvailable.options;

            // Перебираем каждую опцию
            for (var i = options.length - 1; i >= 0; i--) {
                var option = options[i];

                // Создаем новую опцию для selectAvailable2
                var optionItem = document.createElement('option');
                optionItem.value = option.value;
                optionItem.textContent = option.textContent;

                // Добавляем созданную опцию в selectAvailable2
                selectAvailable2.appendChild(optionItem);

                // Удаляем исходную опцию из selectAvailable
                selectAvailable.removeChild(option);
            }
        });
		
		// Обработчик события для кнопки "<<"
        buttonsContainerDiv2.querySelector("button:nth-child(4)").addEventListener('click', function() {
            // Получаем все опции из selectAvailable2
            var options = selectAvailable2.options;

            // Перебираем каждую опцию
            for (var i = options.length - 1; i >= 0; i--) {
                var option = options[i];

                // Создаем новую опцию для selectAvailable
                var optionItem = document.createElement('option');
                optionItem.value = option.value;
                optionItem.textContent = option.textContent;

                // Добавляем созданную опцию в selectAvailable
                selectAvailable.appendChild(optionItem);

                // Удаляем исходную опцию из selectAvailable
                selectAvailable2.removeChild(option);
            }
        });

        itemsContainerDiv2.appendChild(headerAvailable2);
        itemsContainerDiv2.appendChild(filterDiv2);
        filterDiv2.appendChild(inputAvailable2);
        itemsContainerDiv2.appendChild(selectAvailable2);

        // Создаем div с классом buttons-container3
        var buttonsContainerDiv3 = document.createElement('div');
        buttonsContainerDiv3.classList.add('buttons-container3');

        var buttonLabels3 = ['Вверх', 'Вверх в начало списка', 'Вниз', 'Вниз в конец списка'];
        buttonLabels3.forEach(function(label) {
            var button = document.createElement('button');
            button.textContent = label;
            buttonsContainerDiv3.appendChild(button);
        });

		// Обработчик события для кнопки "Вниз"
        buttonsContainerDiv3.querySelector("button:nth-child(3)").addEventListener('click', function() {
            var selectedOption = selectAvailable2.options[selectAvailable2.selectedIndex];
            if (selectedOption) {
                // Создаем новый option
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;

                // Вставляем новый option после выбранного элемента в selectAvailable2
                var selectedIndex = selectAvailable2.selectedIndex;
                if (selectedIndex < selectAvailable2.options.length - 2) {
                selectAvailable2.insertBefore(optionItem, selectAvailable2.options[selectedIndex + 2]);
                } else {
                selectAvailable2.appendChild(optionItem);
                }

                // Удаляем выбранный элемент из selectAvailable2
                selectAvailable2.removeChild(selectedOption);

                // Выбираем новый элемент
                optionItem.selected = true;
            }
        });
		
		// Обработчик события для кнопки "Вверх"
        buttonsContainerDiv3.querySelector("button:nth-child(1)").addEventListener('click', function() {
            var selectedOption = selectAvailable2.options[selectAvailable2.selectedIndex];
            if (selectedOption) {
                // Создаем новый option
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;

                // Вставляем новый option после выбранного элемента в selectAvailable2
                var selectedIndex = selectAvailable2.selectedIndex;
                if (selectedIndex < selectAvailable2.options.length + 1) {
                selectAvailable2.insertBefore(optionItem, selectAvailable2.options[selectedIndex - 1]);
                } else {
                selectAvailable2.appendChild(optionItem);
                }

                // Удаляем выбранный элемент из selectAvailable2
                selectAvailable2.removeChild(selectedOption);

                // Выбираем новый элемент
                optionItem.selected = true;
            }
        });
		
		// Обработчик события для кнопки "Вниз в конец списка"
        buttonsContainerDiv3.querySelector("button:nth-child(4)").addEventListener('click', function() {
            var selectedOption = selectAvailable2.options[selectAvailable2.selectedIndex];
            if (selectedOption) {
                // Создаем новый option
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;

                // Удаляем выбранный элемент из selectAvailable2
                selectAvailable2.removeChild(selectedOption);

                // Добавляем новый option в конец списка selectAvailable2
                selectAvailable2.appendChild(optionItem);
            }
        });
		
		// Обработчик события для кнопки "Вверх в начало списка"
        buttonsContainerDiv3.querySelector("button:nth-child(2)").addEventListener('click', function() {
            var selectedOption = selectAvailable2.options[selectAvailable2.selectedIndex];
            if (selectedOption) {
                // Создаем новый option
                var optionItem = document.createElement('option');
                optionItem.value = selectedOption.value;
                optionItem.textContent = selectedOption.textContent;

                // Удаляем выбранный элемент из selectAvailable2
                selectAvailable2.removeChild(selectedOption);

                // Добавляем новый option в начало списка selectAvailable2
                selectAvailable2.insertBefore(optionItem, selectAvailable2.firstChild);
            }
        });

        // Добавляем все созданные элементы в соответствующие родительские элементы
        dataDiv.appendChild(buttonsContainerDiv1);
        dataDiv.appendChild(itemsContainerDiv1);
        dataDiv.appendChild(buttonsContainerDiv2);
        dataDiv.appendChild(itemsContainerDiv2);
        dataDiv.appendChild(buttonsContainerDiv3);

        // Создаем div с классом control
        var controlDiv = document.createElement('div');
        controlDiv.classList.add('control');

        // Добавляем div data и control в div arrange-box
        arrangeBoxDiv.appendChild(dataDiv);
        arrangeBoxDiv.appendChild(controlDiv);

        // Добавляем div arrange-box в div container
        containerDiv.appendChild(arrangeBoxDiv);

        // Добавляем div container в body
        document.body.appendChild(containerDiv);

              
            
    }

    
    changeElementsList(newItems)
    {
        selectAvailable.innerHTML="";
            newItems.forEach(function(itemText, index) {
                var optionItem = document.createElement('option');
                optionItem.value = index;
                optionItem.textContent = itemText;
                selectAvailable.appendChild(optionItem);
            });
    }
    
}