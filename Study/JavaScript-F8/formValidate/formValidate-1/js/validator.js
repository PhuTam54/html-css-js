// Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }


    var selectorRules = {}

    // Hàm thực hiện validate 
    function validate(inputElement, rule) {
        // value: inputElement.value
        // test func: rule.test 
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector 
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rules và check 
        // Nếu có lỗi, dừng việc kiểm tra 
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');

        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate 
    var formElement = document.querySelector(options.form);
    if (formElement) {

        // Khi submit form 
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate 
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript 
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {

                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});

                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định 
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lí ( lắng nghe sự kiện, blur, input, ...)
        options.rules.forEach(function (rule) {
            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                // Xử lí trường hợp blur ra khỏi input 
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lí trường hợp mỗi khi ng dùng nhập vào input 
                inputElement.onclick = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            })
        })
    }
}

//Định nghĩa rules

//Nguyên tắc của các rules:
// 1. Khi có lỗi => trả ra message
// 2. Khi hợp lệ => không trả gì ()

// rule yêu cầu điền 
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}

// rule check email 
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        }
    }
}

// rule check mật khẩu 
Validator.isPasswordSecure = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            return regex.test(value) ? undefined : 'Password must has at least 8 characters that include at least 1 lowercase' +
                'character, 1 uppercase characters, 1 number, and 1 speacial character in (!@#$%^&*)';
        }
    }
    //reguar expression (check password)
}

// rule comfirm 
Validator.isConfirmed = function (selector, confirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === confirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}