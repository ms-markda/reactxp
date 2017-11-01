import RX = require('../common/Interfaces');
import Types = require('../common/Types');
export declare class Alert implements RX.Alert {
    show(title: string, message?: string, buttons?: Types.AlertButtonSpec[], icon?: string): void;
}
declare const _default: Alert;
export default _default;
