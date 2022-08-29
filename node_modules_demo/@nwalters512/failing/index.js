"use strict";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _child_process = _interopRequireDefault(require("child_process"));

var _path = _interopRequireDefault(require("path"));

var load = function load() {
  return _child_process.default.spawnSync(process.execPath, [_path.default.join(__dirname, './worker.js')]);
};

var _default = load();

exports.default = _default;
