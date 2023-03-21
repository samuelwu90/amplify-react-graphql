import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum YesNo {
  YES = "YES",
  NO = "NO"
}



type EagerInput = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Input, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly age?: number | null;
  readonly gleason?: YesNo | keyof typeof YesNo | null;
  readonly histology?: YesNo | keyof typeof YesNo | null;
  readonly visceral_metastases?: YesNo | keyof typeof YesNo | null;
  readonly family_history?: YesNo | keyof typeof YesNo | null;
  readonly bone_metastases?: YesNo | keyof typeof YesNo | null;
  readonly ln_metastases?: YesNo | keyof typeof YesNo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInput = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Input, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly age?: number | null;
  readonly gleason?: YesNo | keyof typeof YesNo | null;
  readonly histology?: YesNo | keyof typeof YesNo | null;
  readonly visceral_metastases?: YesNo | keyof typeof YesNo | null;
  readonly family_history?: YesNo | keyof typeof YesNo | null;
  readonly bone_metastases?: YesNo | keyof typeof YesNo | null;
  readonly ln_metastases?: YesNo | keyof typeof YesNo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Input = LazyLoading extends LazyLoadingDisabled ? EagerInput : LazyInput

export declare const Input: (new (init: ModelInit<Input>) => Input) & {
  copyOf(source: Input, mutator: (draft: MutableModel<Input>) => MutableModel<Input> | void): Input;
}