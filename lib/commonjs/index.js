"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.eventKeys = void 0;

var _reactNative = require("react-native");

const {
  AwsFreertos
} = _reactNative.NativeModules;
const eventKeys = {
  // Bluetooth events
  DID_UPDATE_BLE_POWER_STATE: 'DID_UPDATE_BLE_POWER_STATE',
  DID_DISCONNECT_DEVICE: 'DID_DISCONNECT_DEVICE',
  DID_DISCOVERED_DEVICE: 'DID_DISCOVERED_DEVICE',
  DID_CONNECT_DEVICE: 'DID_CONNECT_DEVICE',
  DID_FAIL_TO_CONNECT_DEVICE: 'DID_FAIL_TO_CONNECT_DEVICE',
  DID_READ_CHARACTERISTIC_FROM_SERVICE: 'DID_READ_CHARACTERISTIC_FROM_SERVICE',
  // Wifi events of paired up device
  DID_LIST_NETWORK: 'DID_LIST_NETWORK',
  DID_SAVE_NETWORK: 'DID_SAVE_NETWORK',
  ERROR_SAVE_NETWORK: 'ERROR_SAVE_NETWORK',
  DID_EDIT_NETWORK: 'DID_EDIT_NETWORK',
  DID_DELETE_NETWORK: 'DID_DELETE_NETWORK'
};
exports.eventKeys = eventKeys;
var _default = AwsFreertos;
exports.default = _default;
//# sourceMappingURL=index.js.map