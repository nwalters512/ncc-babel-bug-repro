"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _child_process = require("child_process");

var _path = require("path");

var load = function load() {
  return _child_process.spawnSync(process.execPath, [_path.join(__dirname, './worker.js')]);
};

var _default = load();

exports.default = _default;
