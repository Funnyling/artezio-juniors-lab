(function () {
    document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('searchForm');
        var panelHead = document.getElementById('panelHead');
        var panelBody = document.getElementById('panelBody');

        panelHead.onclick = function () {
            var chevronUp = panelHead.querySelector('a#chevronUpHref');
            var chevronDown = panelHead.querySelector('a#chevronDownHref');
            if (panelBody.classList.contains('collapsed')) {
                panelBody.classList.remove('collapsed');
                panelBody.classList.remove('hidden');
                panelBody.classList.add('show');
                chevronDown.classList.add('hidden');
                chevronUp.classList.remove('hidden');
            } else {
                panelBody.classList.add('collapsed');
                panelBody.classList.add('hidden');
                panelBody.classList.remove('show');
                chevronUp.classList.add('hidden');
                chevronDown.classList.remove('hidden');
            }
        };

        var clearFormBtn = document.getElementById('clearFormBtn');
        clearFormBtn.onclick = function () {
            hideErrors(form);
            hideElement(additionalParams1);
            hideElement(additionalParams2);
            form.reset();
            showHint();
        };

        var submitFormBtn = document.getElementById('submitFormBtn');

        submitFormBtn.onclick = function () {
            if (!isNotEmptyRequiredFields(form) || (!law1.checked && !law2.checked)) {
                showErrors(form);
            } else {
                //todo удалять подсказки, если такие поля есть, чтобы их не сабмитать
                //form.submit();
            }
            return false;
        };

        var law1 = document.getElementById('law1');
        var law2 = document.getElementById('law2');
        var additionalParams1 = document.getElementById('additionalParams1');
        var additionalParams2 = document.getElementById('additionalParams2');

        law1.onclick = function () {
            if (this.checked && !law2.checked) {
                showElement(additionalParams1);
                hideElement(additionalParams2);
            } else if (!this.checked && law2.checked) {
                showElement(additionalParams2);
                hideElement(additionalParams1);
            } else {
                hideElement(additionalParams2);
                hideElement(additionalParams1);
            }
        };

        law2.onclick = function () {
            if (this.checked && !law1.checked) {
                showElement(additionalParams2);
                hideElement(additionalParams1);
            } else if (!this.checked && law1.checked) {
                showElement(additionalParams1);
                hideElement(additionalParams2);
            } else {
                hideElement(additionalParams2);
                hideElement(additionalParams1);
            }
        };

        showHint();
    });

    function showElement(element) {
        element.classList.add('show');
        element.classList.remove('hidden');
    }

    function hideElement(element) {
        element.classList.remove('show');
        element.classList.add('hidden');
    }

    //todo дополнить выводом ошибки на чекбоксах, если ниодин не выбран
    function showErrors(form) {
        var requiredFields = form.querySelectorAll('input.required');
        for(var i = 0; i < requiredFields.length; i++) {
            requiredFields[i].parentElement.classList.add('has-error');
        }
    }

    //todo переписать поиск на валидные значения
    function isNotEmptyRequiredFields(form) {
        var requiredInputs = form.querySelectorAll('input.required');
        for(var i = 0; i < requiredInputs.length; i++) {
            if (!requiredInputs[i].value) {
                return false;
            }
        }
        return true;
    }

    function showHint() {
        var inputsWithHints = document.querySelectorAll('input.hint');
        for(var i = 0; i < inputsWithHints.length; i++) {
            if (inputsWithHints[i].value === inputsWithHints[i].title || inputsWithHints[i].value == '') {
                inputsWithHints[i].value = inputsWithHints[i].title;
                inputsWithHints[i].classList.add('colorValue');
            }
            setUpHintElement(inputsWithHints[i]);
        }
    }

    function setUpHintElement(element) {
        element.onfocus = function () {
            if (this.value === this.title) {
                this.classList.remove('colorValue');
                this.value = '';
            }
        };

        element.onblur = function () {
            if (this.value === this.title || this.value == '') {
                this.value = this.title;
                this.classList.add('colorValue');
            }
        };
    }

    function hideErrors(form) {
        var requiredFields = form.querySelectorAll('input.required');
        for(var i = 0; i < requiredFields.length; i++) {
            requiredFields[i].parentElement.classList.remove('has-error');
        }
    }
})();