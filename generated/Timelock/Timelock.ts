// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CancelTransaction extends ethereum.Event {
  get params(): CancelTransaction__Params {
    return new CancelTransaction__Params(this);
  }
}

export class CancelTransaction__Params {
  _event: CancelTransaction;

  constructor(event: CancelTransaction) {
    this._event = event;
  }

  get txHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get target(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get signature(): string {
    return this._event.parameters[3].value.toString();
  }

  get data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get eta(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class ExecuteTransaction extends ethereum.Event {
  get params(): ExecuteTransaction__Params {
    return new ExecuteTransaction__Params(this);
  }
}

export class ExecuteTransaction__Params {
  _event: ExecuteTransaction;

  constructor(event: ExecuteTransaction) {
    this._event = event;
  }

  get txHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get target(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get signature(): string {
    return this._event.parameters[3].value.toString();
  }

  get data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get eta(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class NewAdmin extends ethereum.Event {
  get params(): NewAdmin__Params {
    return new NewAdmin__Params(this);
  }
}

export class NewAdmin__Params {
  _event: NewAdmin;

  constructor(event: NewAdmin) {
    this._event = event;
  }

  get newAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NewDelay extends ethereum.Event {
  get params(): NewDelay__Params {
    return new NewDelay__Params(this);
  }
}

export class NewDelay__Params {
  _event: NewDelay;

  constructor(event: NewDelay) {
    this._event = event;
  }

  get newDelay(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NewPendingAdmin extends ethereum.Event {
  get params(): NewPendingAdmin__Params {
    return new NewPendingAdmin__Params(this);
  }
}

export class NewPendingAdmin__Params {
  _event: NewPendingAdmin;

  constructor(event: NewPendingAdmin) {
    this._event = event;
  }

  get newPendingAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class QueueTransaction extends ethereum.Event {
  get params(): QueueTransaction__Params {
    return new QueueTransaction__Params(this);
  }
}

export class QueueTransaction__Params {
  _event: QueueTransaction;

  constructor(event: QueueTransaction) {
    this._event = event;
  }

  get txHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get target(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get signature(): string {
    return this._event.parameters[3].value.toString();
  }

  get data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get eta(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class Timelock extends ethereum.SmartContract {
  static bind(address: Address): Timelock {
    return new Timelock("Timelock", address);
  }

  GRACE_PERIOD(): BigInt {
    let result = super.call("GRACE_PERIOD", "GRACE_PERIOD():(uint256)", []);

    return result[0].toBigInt();
  }

  try_GRACE_PERIOD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("GRACE_PERIOD", "GRACE_PERIOD():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAXIMUM_DELAY(): BigInt {
    let result = super.call("MAXIMUM_DELAY", "MAXIMUM_DELAY():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAXIMUM_DELAY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAXIMUM_DELAY",
      "MAXIMUM_DELAY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MINIMUM_DELAY(): BigInt {
    let result = super.call("MINIMUM_DELAY", "MINIMUM_DELAY():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MINIMUM_DELAY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MINIMUM_DELAY",
      "MINIMUM_DELAY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  admin_initialized(): boolean {
    let result = super.call(
      "admin_initialized",
      "admin_initialized():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_admin_initialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "admin_initialized",
      "admin_initialized():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  delay(): BigInt {
    let result = super.call("delay", "delay():(uint256)", []);

    return result[0].toBigInt();
  }

  try_delay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("delay", "delay():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingAdmin(): Address {
    let result = super.call("pendingAdmin", "pendingAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_pendingAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingAdmin", "pendingAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  queueTransaction(
    target: Address,
    value: BigInt,
    signature: string,
    data: Bytes,
    eta: BigInt
  ): Bytes {
    let result = super.call(
      "queueTransaction",
      "queueTransaction(address,uint256,string,bytes,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromString(signature),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromUnsignedBigInt(eta)
      ]
    );

    return result[0].toBytes();
  }

  try_queueTransaction(
    target: Address,
    value: BigInt,
    signature: string,
    data: Bytes,
    eta: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "queueTransaction",
      "queueTransaction(address,uint256,string,bytes,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromString(signature),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromUnsignedBigInt(eta)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  queuedTransactions(param0: Bytes): boolean {
    let result = super.call(
      "queuedTransactions",
      "queuedTransactions(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBoolean();
  }

  try_queuedTransactions(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "queuedTransactions",
      "queuedTransactions(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get admin_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get delay_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptAdminCall extends ethereum.Call {
  get inputs(): AcceptAdminCall__Inputs {
    return new AcceptAdminCall__Inputs(this);
  }

  get outputs(): AcceptAdminCall__Outputs {
    return new AcceptAdminCall__Outputs(this);
  }
}

export class AcceptAdminCall__Inputs {
  _call: AcceptAdminCall;

  constructor(call: AcceptAdminCall) {
    this._call = call;
  }
}

export class AcceptAdminCall__Outputs {
  _call: AcceptAdminCall;

  constructor(call: AcceptAdminCall) {
    this._call = call;
  }
}

export class CancelTransactionCall extends ethereum.Call {
  get inputs(): CancelTransactionCall__Inputs {
    return new CancelTransactionCall__Inputs(this);
  }

  get outputs(): CancelTransactionCall__Outputs {
    return new CancelTransactionCall__Outputs(this);
  }
}

export class CancelTransactionCall__Inputs {
  _call: CancelTransactionCall;

  constructor(call: CancelTransactionCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get signature(): string {
    return this._call.inputValues[2].value.toString();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get eta(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CancelTransactionCall__Outputs {
  _call: CancelTransactionCall;

  constructor(call: CancelTransactionCall) {
    this._call = call;
  }
}

export class ExecuteTransactionCall extends ethereum.Call {
  get inputs(): ExecuteTransactionCall__Inputs {
    return new ExecuteTransactionCall__Inputs(this);
  }

  get outputs(): ExecuteTransactionCall__Outputs {
    return new ExecuteTransactionCall__Outputs(this);
  }
}

export class ExecuteTransactionCall__Inputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get signature(): string {
    return this._call.inputValues[2].value.toString();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get eta(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ExecuteTransactionCall__Outputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class QueueTransactionCall extends ethereum.Call {
  get inputs(): QueueTransactionCall__Inputs {
    return new QueueTransactionCall__Inputs(this);
  }

  get outputs(): QueueTransactionCall__Outputs {
    return new QueueTransactionCall__Outputs(this);
  }
}

export class QueueTransactionCall__Inputs {
  _call: QueueTransactionCall;

  constructor(call: QueueTransactionCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get signature(): string {
    return this._call.inputValues[2].value.toString();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get eta(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class QueueTransactionCall__Outputs {
  _call: QueueTransactionCall;

  constructor(call: QueueTransactionCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class SetDelayCall extends ethereum.Call {
  get inputs(): SetDelayCall__Inputs {
    return new SetDelayCall__Inputs(this);
  }

  get outputs(): SetDelayCall__Outputs {
    return new SetDelayCall__Outputs(this);
  }
}

export class SetDelayCall__Inputs {
  _call: SetDelayCall;

  constructor(call: SetDelayCall) {
    this._call = call;
  }

  get delay_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDelayCall__Outputs {
  _call: SetDelayCall;

  constructor(call: SetDelayCall) {
    this._call = call;
  }
}

export class SetPendingAdminCall extends ethereum.Call {
  get inputs(): SetPendingAdminCall__Inputs {
    return new SetPendingAdminCall__Inputs(this);
  }

  get outputs(): SetPendingAdminCall__Outputs {
    return new SetPendingAdminCall__Outputs(this);
  }
}

export class SetPendingAdminCall__Inputs {
  _call: SetPendingAdminCall;

  constructor(call: SetPendingAdminCall) {
    this._call = call;
  }

  get pendingAdmin_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPendingAdminCall__Outputs {
  _call: SetPendingAdminCall;

  constructor(call: SetPendingAdminCall) {
    this._call = call;
  }
}
