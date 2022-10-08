/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RandomInterface extends utils.Interface {
  functions: {
    "Generate_Number()": FunctionFragment;
    "rand_num()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "Generate_Number" | "rand_num"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "Generate_Number",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rand_num", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "Generate_Number",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rand_num", data: BytesLike): Result;

  events: {};
}

export interface Random extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RandomInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    Generate_Number(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rand_num(overrides?: CallOverrides): Promise<[number]>;
  };

  Generate_Number(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rand_num(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    Generate_Number(overrides?: CallOverrides): Promise<number>;

    rand_num(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    Generate_Number(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rand_num(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    Generate_Number(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rand_num(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}