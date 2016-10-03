'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hashmap = exports.Hashmap = function () {
    function Hashmap() {
        _classCallCheck(this, Hashmap);

        this.map = {};
    }

    _createClass(Hashmap, [{
        key: 'size',
        value: function size() {
            return Object.keys(this.map).length;
        }
    }, {
        key: 'put',
        value: function put(key, value) {
            if (value === undefined) {
                throw new Error('Cannot put undefined as a value!');
            }

            if (key === undefined) {
                throw new Error('Cannot put undefined as a key!');
            }

            this.map[key] = value;
        }
    }, {
        key: 'get',
        value: function get(key) {
            return this.map[key];
        }
    }, {
        key: 'containsKey',
        value: function containsKey(key) {
            if (key === undefined) {
                throw new Error('This hashmap implementation cannot contain undefined as a key!');
            }

            return this.map[key] !== undefined;
        }
    }, {
        key: 'containsValue',
        value: function containsValue(value) {
            var _this = this;

            if (value === undefined) {
                throw new Error('This hashmap implementation cannot contain undefined as a value!');
            }

            return Object.keys(this.map).filter(function (key) {
                return _this.map[key] === value;
            }).length === 1;
        }
    }, {
        key: 'remove',
        value: function remove(key) {
            delete this.map[key];
        }
    }]);

    return Hashmap;
}();