/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Input } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InputUpdateFormInputValues = {
    age?: number;
    gleason?: string;
    histology?: string;
    visceral_metastases?: string;
    family_history?: string;
    bone_metastases?: string;
    ln_metastases?: string;
};
export declare type InputUpdateFormValidationValues = {
    age?: ValidationFunction<number>;
    gleason?: ValidationFunction<string>;
    histology?: ValidationFunction<string>;
    visceral_metastases?: ValidationFunction<string>;
    family_history?: ValidationFunction<string>;
    bone_metastases?: ValidationFunction<string>;
    ln_metastases?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputUpdateFormOverridesProps = {
    InputUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    gleason?: PrimitiveOverrideProps<SelectFieldProps>;
    histology?: PrimitiveOverrideProps<SelectFieldProps>;
    visceral_metastases?: PrimitiveOverrideProps<SelectFieldProps>;
    family_history?: PrimitiveOverrideProps<SelectFieldProps>;
    bone_metastases?: PrimitiveOverrideProps<SelectFieldProps>;
    ln_metastases?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type InputUpdateFormProps = React.PropsWithChildren<{
    overrides?: InputUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    input?: Input;
    onSubmit?: (fields: InputUpdateFormInputValues) => InputUpdateFormInputValues;
    onSuccess?: (fields: InputUpdateFormInputValues) => void;
    onError?: (fields: InputUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InputUpdateFormInputValues) => InputUpdateFormInputValues;
    onValidate?: InputUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InputUpdateForm(props: InputUpdateFormProps): React.ReactElement;
