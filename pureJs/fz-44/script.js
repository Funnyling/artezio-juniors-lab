(function () {
    document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('searchForm');
        var panelHead = document.getElementById('panelHead');
        var panelBody = document.getElementById('panelBody');
        var law1 = document.getElementById('law1');
        var law2 = document.getElementById('law2');
        var additionalParamsForLaw1 = document.getElementById('additionalParams1');
        var additionalParamsForLaw2 = document.getElementById('additionalParams2');
        var clearFormBtn = document.getElementById('clearFormBtn');
        var submitFormBtn = document.getElementById('submitFormBtn');
        var commonDiv = document.getElementById('commonPart');
        var requiredInputFields = commonDiv.querySelectorAll('input.required');

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

        clearFormBtn.onclick = function () {
            hideAllErrors();
            hideElement(additionalParamsForLaw1);
            hideElement(additionalParamsForLaw2);
            form.reset();
            showHint();
            return false;
        };

        submitFormBtn.onclick = function () {
            if (!checkRequiredInputs() || (!law1.checked && !law2.checked)) {
                showErrors();
            } else {
                removeHintsFromInputs();
                hideAllErrors();
                //form.submit();
                return false;
            }
            return false;
        };

        law1.onclick = function () {
            showAdditionalParamsForLaw(this, law2, additionalParamsForLaw1, additionalParamsForLaw2);
        };

        law2.onclick = function () {
            showAdditionalParamsForLaw(this, law1, additionalParamsForLaw2, additionalParamsForLaw1);
        };

        showHint();

        function showErrors() {
            for(var i = 0; i < requiredInputFields.length; i++) {
                if (requiredInputFields[i].value === requiredInputFields[i].title || requiredInputFields[i].value == '') {
                    requiredInputFields[i].parentElement.classList.add('has-error');
                    requiredInputFields[i].parentElement.nextElementSibling.classList.remove('hidden');
                }
            }

            if (!law1.checked && !law2.checked) {
                law1.parentElement.parentElement.nextElementSibling.classList.remove('hidden');
            }
        }

        function hideAllErrors() {
            for(var i = 0; i < requiredInputFields.length; i++) {
                requiredInputFields[i].parentElement.classList.remove('has-error');
                requiredInputFields[i].parentElement.nextElementSibling.classList.add('hidden');
            }
            law1.parentElement.parentElement.nextElementSibling.classList.add('hidden');
        }
    });

    function showAdditionalParamsForLaw(law, anotherLaw, additionalParamsForLaw, additionalParamsForAnotherLaw) {
        if (law.checked && !anotherLaw.checked) {
            showElement(additionalParamsForLaw);
            hideElement(additionalParamsForAnotherLaw);
        } else if (!law.checked && anotherLaw.checked) {
            showElement(additionalParamsForAnotherLaw);
            hideElement(additionalParamsForLaw);
        } else {
            hideElement(additionalParamsForLaw);
            hideElement(additionalParamsForAnotherLaw);
        }
        law.parentElement.parentElement.nextElementSibling.classList.add('hidden');
    }

    function showElement(element) {
        element.classList.add('show');
        element.classList.remove('hidden');
    }

    function hideElement(element) {
        element.classList.remove('show');
        element.classList.add('hidden');
    }

    function checkRequiredInputs() {
        var requiredInputs = document.querySelectorAll('input.required');
        for(var i = 0; i < requiredInputs.length; i++) {
            if (requiredInputs[i].value === requiredInputs[i].title || requiredInputs[i].value == '') {
                return false;
            }
        }
        return true;
    }

    function showHint() {
        var inputsWithHints = document.querySelectorAll('input.hint');
        for(var i = 0; i < inputsWithHints.length; i++) {
            setUpHintElement(inputsWithHints[i]);
        }
    }

    function setUpHintElement(element) {
        if (element.value === element.title || element.value == '') {
            element.value = element.title;
            element.classList.add('colorValue');
        }

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

            if (this.classList.contains('required') && this.parentElement.classList.contains('has-error')
                && this.value !== this.title && this.value != '') {
                this.parentElement.classList.remove('has-error');
                this.parentElement.nextElementSibling.classList.add('hidden');
            }
        };
    }

    function removeHintsFromInputs() {
        var inputsWithHints = document.querySelectorAll('input.hint');
        for(var i = 0; i < inputsWithHints.length; i++) {
            if (inputsWithHints[i].value === inputsWithHints[i].title) {
                inputsWithHints[i].value = '';
            }
        }
    }
})();