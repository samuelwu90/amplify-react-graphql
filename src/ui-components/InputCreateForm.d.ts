/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InputCreateFormInputValues = {
    age?: number;
    gleason?: string;
    histology?: string;
    visceral_metastases?: string;
    family_history?: string;
    bone_metastases?: string;
    ln_metastases?: string;
};
export declare type InputCreateFormValidationValues = {
    age?: ValidationFunction<number>;
    gleason?: ValidationFunction<string>;
    histology?: ValidationFunction<string>;
    visceral_metastases?: ValidationFunction<string>;
    family_history?: ValidationFunction<string>;
    bone_metastases?: ValidationFunction<string>;
    ln_metastases?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputCreateFormOverridesProps = {
    InputCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    gleason?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    histology?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    visceral_metastases?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    family_history?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    bone_metastases?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    ln_metastases?: PrimitiveOverrideProps<RadioGroupFieldProps>;
} & EscapeHatchProps;
export declare type InputCreateFormProps = React.PropsWithChildren<{
    overrides?: InputCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InputCreateFormInputValues) => InputCreateFormInputValues;
    onSuccess?: (fields: InputCreateFormInputValues) => void;
    onError?: (fields: InputCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InputCreateFormInputValues) => InputCreateFormInputValues;
    onValidate?: InputCreateFormValidationValues;
} & React.CSSProperties>;
export default function InputCreateForm(props: InputCreateFormProps): React.ReactElement;
