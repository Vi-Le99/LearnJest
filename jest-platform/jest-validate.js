const { validate } = require('jest-validate');

const configByUser = {
    transform: '<rootDir>/node_modules/my-custom-transform',//transform là tên biến, đổi thành tên khác cũng đc
};

const result = validate(configByUser, {
    comment: '  Documentation: http://custom-docs.com',// k có dòng comment này vẫn ra gt như cũ
    exampleConfig: { transform: '<rootDir>/node_modules/babel-jest' },
});

console.log(result);//in ra: { hasDeprecationWarnings: false, isValid: true }
/*
Giá trị trả về là một đối tượng có hai thuộc tính:
hasDeprecationWarnings: type boolean, cho biết liệu cấu hình có cảnh báo không dùng nữa hay không,
isValid, type boolean cho biết cấu hình có đúng hay không.

Giả sử ta đổi thành
const configByUser = {
  trans: '<rootDir>/node_modules/my-custom-transform',//transform là tên biến, đổi thành tên khác cũng đc
};

trans không khớp với tên transform ở dưới, lúc này nó sẽ đưa ra warning:
● Validation Warning:

  Unknown option "trans" with value "<rootDir>/node_modules/my-custom-transform" was found. Did you mean "transform"?
  This is probably a typing mistake. Fixing it will remove this message.

  Documentation: http://custom-docs.com
{ hasDeprecationWarnings: false, isValid: true }


*/
