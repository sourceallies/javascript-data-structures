'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = exports.Queue = function () {
    function Queue() {
        _classCallCheck(this, Queue);

        this.array = [];
    }

    _createClass(Queue, [{
        key: 'size',
        value: function size() {
            return this.array.length;
        }
    }, {
        key: 'enqueue',
        value: function enqueue(item) {
            this.array.push(item);
        }
    }, {
        key: 'dequeue',
        value: function dequeue() {
            if (this.size() === 0) {
                throw new Error('Cannot dequeue on an empty queue!');
            }

            return this.array.splice(0, 1)[0];
        }
    }, {
        key: 'peek',
        value: function peek() {
            if (this.size() === 0) {
                throw new Error('Cannot peek on an empty queue!');
            }

            return this.array[0];
        }
    }]);

    return Queue;
}();