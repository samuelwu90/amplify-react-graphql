/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewForm1InputValues = {
    Field0?: string;
    Field1?: boolean;
    Field2?: boolean;
    Field3?: boolean;
    Field4?: boolean;
    Field5?: boolean;
    Field6?: boolean;
};
export declare type NewForm1ValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<boolean>;
    Field2?: ValidationFunction<boolean>;
    Field3?: ValidationFunction<boolean>;
    Field4?: ValidationFunction<boolean>;
    Field5?: ValidationFunction<boolean>;
    Field6?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm1OverridesProps = {
    NewForm1Grid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field2?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field3?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field4?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field5?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Field6?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type NewForm1Props = React.PropsWithChildren<{
    overrides?: NewForm1OverridesProps | undefined | null;
} & {
    onSubmit: (fields: NewForm1InputValues) => void;
    onChange?: (fields: NewForm1InputValues) => NewForm1InputValues;
    onValidate?: NewForm1ValidationValues;
} & React.CSSProperties>;
export default function NewForm1(props: NewForm1Props): React.ReactElement;
