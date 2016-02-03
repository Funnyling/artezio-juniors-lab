(function () {
    $(function () {
        var panelHead = $('#panelHead');
        var panelBody = $('#panelBody');
        var law1 = $('#law1');
        var law2 = $('#law2');
        var additionalParamsForLaw1 = $('#additionalParams1');
        var additionalParamsForLaw2 = $('#additionalParams2');
        var requiredInputFields = $('#commonPart').find('input.required');
        var chevronUp = panelHead.find('a#chevronUpHref');
        var chevronDown = panelHead.find('a#chevronDownHref');

        additionalParamsForLaw1.hide();
        additionalParamsForLaw2.hide();
        chevronDown.hide();

        panelHead.on('click', function () {
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

        $('#clearFormBtn').on('click', function () {
            hideAllErrors();
            additionalParamsForLaw1.hide();
            additionalParamsForLaw2.hide();
            $('#searchForm').trigger('reset');
            showHint();
            return false;
        });

        $('#submitFormBtn').on('click', function () {
            if (!checkRequiredInputs() || (!law1.is(':checked') && !law2.is(':checked'))) {
                showErrors();
            } else {
                removeHintsFromInputs();
                hideAllErrors();
                $('#searchForm').submit();
                return false;
            }
            return false;
        });

        law1.on('click', function () {
            showAdditionalParamsForLaw($(this), law2, additionalParamsForLaw1, additionalParamsForLaw2);
        });

        law2.on('click', function () {
            showAdditionalParamsForLaw($(this), law1, additionalParamsForLaw2, additionalParamsForLaw1);
        });

        showHint();

        function showErrors() {
            requiredInputFields.each(function() {
                if ($(this).val() === $(this).attr('title') || $(this).val() == '') {
                    $(this).parent().addClass('has-error');
                    $(this).parent().next().removeClass('hidden');
                }
            });

            if (!law1.is(':checked') && !law2.is(':checked')) {
                law1.parent().parent().next().removeClass('hidden');
            }
        }

        function hideAllErrors() {
            requiredInputFields.each(function() {
                $(this).parent().removeClass('has-error');
                $(this).parent().next().addClass('hidden');
            });
            law1.parent().parent().next().addClass('hidden');
        }

    });


    function showAdditionalParamsForLaw(law, anotherLaw, additionalParamsForLaw, additionalParamsForAnotherLaw) {
        if (law.is(':checked') && !anotherLaw.is(':checked')) {
            additionalParamsForLaw.show();
            additionalParamsForAnotherLaw.hide()
        } else if (law.is(':checked') && anotherLaw.is(':checked')) {
            additionalParamsForAnotherLaw.show();
            additionalParamsForLaw.hide();
        } else {
            additionalParamsForLaw.hide();
            additionalParamsForAnotherLaw.hide();
        }
        law.parent().parent().next().addClass('hidden');
    }

    function checkRequiredInputs() {
        var result = true;
        $('input.required').each(function() {
            if ($(this).val() === $(this).attr('title') || $(this).val() == '') {
                result = false;
            }
        });
        return result;
    }

    function showHint() {
        $('input.hint').each(function() {
            setUpHintElement($(this));
        });
    }

    function setUpHintElement(element) {
        if (element.val() === element.attr('title') || element.val() == '') {
            element.val(element.attr('title'));
            element.addClass('colorValue');
        }

        element.on('focus', function () {
            if ($(this).val() === $(this).attr('title')) {
                $(this).removeClass('colorValue');
                $(this).val('');
            }
        });

        element.on('blur', function () {
            if ($(this).val() === $(this).attr('title') || $(this).val() == '') {
                $(this).val($(this).attr('title'));
                $(this).addClass('colorValue');
            }

            if ($(this).hasClass('required') && $(this).parent().hasClass('has-error')
                && $(this).val() !== $(this).attr('title') && $(this).val() != '') {
                $(this).parent().removeClass('has-error');
                $(this).parent().next().addClass('hidden');
            }
        });
    }

    function removeHintsFromInputs() {
        $('input.hint').each(function() {
            if ($(this).val() === $(this).attr('title')) {
                $(this).val('');
            }
        });
    }
})();