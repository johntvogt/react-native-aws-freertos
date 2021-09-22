declare type AwsFreertosType = {
    startScanBtDevices(): void;
    stopScanBtDevices(): void;
    requestBtPermissions(): Promise<any>;
    connectDevice(macAddress: string): Promise<any>;
    disconnectDevice(macAddress: string): Promise<any>;
    disconnectNetworkOnConnectedDevice(macAddress: string, index: number): Promise<any>;
    saveNetworkOnConnectedDevice(macAddress: string, bssid: string, pw: string): Promise<any>;
    getConnectedDeviceAvailableNetworks(macAddress: string): Promise<WifiInfo[]>;
    triggerDidListNetwork(): void;
    getConnectedDeviceSavedNetworks(macAddress: string): Promise<WifiInfo[]>;
    deviceIsConnected(macAddress: string): Promise<boolean>;
    getGattCharacteristicsFromServer(macAddress: string, serviceUuidString: string): void;
    getDeviceServices(deviceUuid: string): Promise<any[]>;
    setAdvertisingServiceUUIDs(uuids: string[]): void;
};
export interface BtDevice {
    name: string;
    macAddr: string;
}
export interface WifiInfo {
    ssid: string;
    bssid: string;
    rssi: string;
    networkType: string;
    index: number;
    connected: boolean;
}
export interface Characteristic {
    uuid: string;
    value: number[];
}
export declare const eventKeys: {
    DID_UPDATE_BLE_POWER_STATE: string;
    DID_DISCONNECT_DEVICE: string;
    DID_DISCOVERED_DEVICE: string;
    DID_CONNECT_DEVICE: string;
    DID_FAIL_TO_CONNECT_DEVICE: string;
    DID_READ_CHARACTERISTIC_FROM_SERVICE: string;
    DID_LIST_NETWORK: string;
    DID_SAVE_NETWORK: string;
    ERROR_SAVE_NETWORK: string;
    DID_EDIT_NETWORK: string;
    DID_DELETE_NETWORK: string;
};
declare const _default: AwsFreertosType;
export default _default;
