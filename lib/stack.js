'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = exports.Stack = function () {
    function Stack() {
        _classCallCheck(this, Stack);

        this.array = [];
    }

    _createClass(Stack, [{
        key: 'size',
        value: function size() {
            return this.array.length;
        }
    }, {
        key: 'push',
        value: function push(item) {
            this.array.push(item);
        }
    }, {
        key: 'peek',
        value: function peek() {
            if (this.size() === 0) {
                throw new Error('Cannot peek on an empty stack!');
            }

            return this.array[this.size() - 1];
        }
    }, {
        key: 'pop',
        value: function pop() {
            if (this.size() === 0) {
                throw new Error('Cannot pop on an empty stack!');
            }

            return this.array.splice(this.size() - 1)[0];
        }
    }]);

    return Stack;
}();