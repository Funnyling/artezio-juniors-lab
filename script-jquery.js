(function () {
    $(function () {
        var form = $('#searchForm');
        var panelHead = $('#panelHead');
        var panelBody = $('#panelBody');
        var law1 = $('#law1');
        var law2 = $('#law2');
        var additionalParamsForLaw1 = $('#additionalParams1');
        var additionalParamsForLaw2 = $('#additionalParams2');
        var clearFormBtn = $('#clearFormBtn');
        var submitFormBtn = $('#submitFormBtn');
        var commonDiv = $('#commonPart');
        var requiredInputFields = commonDiv.find('input.required');

        panelHead.on('click', function () {
            var chevronUp = panelHead.find('a#chevronUpHref');
            var chevronDown = panelHead.find('a#chevronDownHref');
            if (panelBody.hasClass('collapsed')) {
                panelBody.removeClass('collapsed');
                panelBody.show();
                chevronDown.hide();
                chevronUp.show();
            } else {
                panelBody.addClass('collapsed');
                panelBody.hide();
                chevronDown.show();
                chevronUp.hide();
            }
        });

        clearFormBtn.onclick = function () {
            hideAllErrors();
            additionalParamsForLaw1.hide();
            additionalParamsForLaw2.hide();
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

        law1.on('click', function () {
            showAdditionalParamsForLaw(this, law2, additionalParamsForLaw1, additionalParamsForLaw2);
        });

        law2.on('click', function () {
            showAdditionalParamsForLaw(this, law1, additionalParamsForLaw2, additionalParamsForLaw1);
        });

        showHint();

        function showErrors() {
            for(var i = 0; i < requiredInputFields.length; i++) {
                if (requiredInputFields[i].value === requiredInputFields[i].title || requiredInputFields[i].value == '') {
                    requiredInputFields[i].parentElement.classList.add('has-error');
                    requiredInputFields[i].parentElement.nextElementSibling.classList.remove('hidden');
                }
            }

            if (!law1.checked && !law2.checked) {
                law1.parent().parent().next().show();
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
        if (law.is(':checked') && !anotherLaw.is(':checked')) {
            additionalParamsForLaw.show();
            additionalParamsForAnotherLaw.hide()
        } else if (!law.is(':checked') && anotherLaw.is(':checked')) {
            additionalParamsForAnotherLaw.show();
            additionalParamsForLaw.hide();
        } else {
            additionalParamsForLaw.hide();
            additionalParamsForAnotherLaw.hide();
        }
        law.parent().parent().next().hide();
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
        if (element.val() === element.attr('title') || element.val() == '') {
            element.val(element.attr('title'));
            element.addClass('colorValue');
        }

        element.on('focus', function () {
            if (this.val() === this.attr('title')) {
                this.removeClass('colorValue');
                this.val('');
            }
        });

        element.on('blur', function () {
            if (this.val() === this.attr('title') || this.val() == '') {
                this.val(this.attr('title'));
                this.addClass('colorValue');
            }

            if (this.hasClass('required') && this.parent().hasClass('has-error')
                && this.value !== this.title && this.value != '') {
                this.parent().removeClass('has-error');
                this.parent().next().addClass('hidden');
            }
        });
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