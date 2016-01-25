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
            return false;
        };

        var submitFormBtn = document.getElementById('submitFormBtn');

        submitFormBtn.onclick = function () {
            if (!isNotEmptyRequiredFields(form) || (!law1.checked && !law2.checked)) {
                showErrors(form);
            } else {
                removeHintsFromInputs();
                form.submit();
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

    function showErrors(form) {
        var commonDiv = form.querySelector('div#commonPart');
        var requiredInputFields = commonDiv.querySelectorAll('input.required');
        for(var i = 0; i < requiredInputFields.length; i++) {
            requiredInputFields[i].parentElement.classList.add('has-error');
            requiredInputFields[i].parentElement.nextElementSibling.classList.remove('hidden');
        }

        var law1 = document.getElementById('law1');
        var law2 = document.getElementById('law2');

        if (!law1.checked && !law2.checked) {
            law1.parentElement.parentElement.nextElementSibling.classList.remove('hidden');
        }
    }

    function isNotEmptyRequiredFields(form) {
        var requiredInputs = form.querySelectorAll('input.required');
        for(var i = 0; i < requiredInputs.length; i++) {
            if (!requiredInputs[i].value) {
                return false;
            }
        }
        return true;
    }

    function removeHintsFromInputs() {
        var inputsWithHints = document.querySelectorAll('input.hint');
        for(var i = 0; i < inputsWithHints.length; i++) {
            if (inputsWithHints[i].value === inputsWithHints[i].title) {
                inputsWithHints[i].value = '';
            }
        }
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
        var commonDiv = form.querySelector('div#commonPart');
        var requiredInputFields = commonDiv.querySelectorAll('input.required');
        for(var i = 0; i < requiredInputFields.length; i++) {
            requiredInputFields[i].parentElement.classList.remove('has-error');
            requiredInputFields[i].parentElement.nextElementSibling.classList.add('hidden');
        }

        var law1 = document.getElementById('law1');
        law1.parentElement.parentElement.nextElementSibling.classList.add('hidden');
    }
})();