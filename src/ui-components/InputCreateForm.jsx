/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Flex,
  Grid,
  Radio,
  RadioGroupField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Input } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function InputCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    age: "",
    gleason: undefined,
    histology: undefined,
    visceral_metastases: undefined,
    family_history: undefined,
    bone_metastases: undefined,
    ln_metastases: undefined,
  };
  const [age, setAge] = React.useState(initialValues.age);
  const [gleason, setGleason] = React.useState(initialValues.gleason);
  const [histology, setHistology] = React.useState(initialValues.histology);
  const [visceral_metastases, setVisceral_metastases] = React.useState(
    initialValues.visceral_metastases
  );
  const [family_history, setFamily_history] = React.useState(
    initialValues.family_history
  );
  const [bone_metastases, setBone_metastases] = React.useState(
    initialValues.bone_metastases
  );
  const [ln_metastases, setLn_metastases] = React.useState(
    initialValues.ln_metastases
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAge(initialValues.age);
    setGleason(initialValues.gleason);
    setHistology(initialValues.histology);
    setVisceral_metastases(initialValues.visceral_metastases);
    setFamily_history(initialValues.family_history);
    setBone_metastases(initialValues.bone_metastases);
    setLn_metastases(initialValues.ln_metastases);
    setErrors({});
  };
  const validations = {
    age: [
      { type: "Required" },
      {
        type: "GreaterThanNum",
        numValues: [0],
        validationMessage: "The value must be greater than 0",
      },
    ],
    gleason: [{ type: "Required" }],
    histology: [{ type: "Required" }],
    visceral_metastases: [{ type: "Required" }],
    family_history: [{ type: "Required" }],
    bone_metastases: [{ type: "Required" }],
    ln_metastases: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          age,
          gleason,
          histology,
          visceral_metastases,
          family_history,
          bone_metastases,
          ln_metastases,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Input(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "InputCreateForm")}
      {...rest}
    >
      <TextField
        label="Age at diagnosis"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              age: value,
              gleason,
              histology,
              visceral_metastases,
              family_history,
              bone_metastases,
              ln_metastases,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <RadioGroupField
        label="Gleason 1 or 2 ≥ 5"
        name="gleason"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              gleason: value,
              histology,
              visceral_metastases,
              family_history,
              bone_metastases,
              ln_metastases,
            };
            const result = onChange(modelFields);
            value = result?.gleason ?? value;
          }
          if (errors.gleason?.hasError) {
            runValidationTasks("gleason", value);
          }
          setGleason(value);
        }}
        onBlur={() => runValidationTasks("gleason", gleason)}
        errorMessage={errors.gleason?.errorMessage}
        hasError={errors.gleason?.hasError}
        {...getOverrideProps(overrides, "gleason")}
      >
        <Radio
          children="Yes"
          value="YES"
          {...getOverrideProps(overrides, "gleasonRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="NO"
          {...getOverrideProps(overrides, "gleasonRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Intraductal or cribriform histology"
        name="histology"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              gleason,
              histology: value,
              visceral_metastases,
              family_history,
              bone_metastases,
              ln_metastases,
            };
            const result = onChange(modelFields);
            value = result?.histology ?? value;
          }
          if (errors.histology?.hasError) {
            runValidationTasks("histology", value);
          }
          setHistology(value);
        }}
        onBlur={() => runValidationTasks("histology", histology)}
        errorMessage={errors.histology?.errorMessage}
        hasError={errors.histology?.hasError}
        {...getOverrideProps(overrides, "histology")}
      >
        <Radio
          children="Yes"
          value="YES"
          {...getOverrideProps(overrides, "histologyRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="NO"
          {...getOverrideProps(overrides, "histologyRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Visceral metastases"
        name="visceral_metastases"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              gleason,
              histology,
              visceral_metastases: value,
              family_history,
              bone_metastases,
              ln_metastases,
            };
            const result = onChange(modelFields);
            value = result?.visceral_metastases ?? value;
          }
          if (errors.visceral_metastases?.hasError) {
            runValidationTasks("visceral_metastases", value);
          }
          setVisceral_metastases(value);
        }}
        onBlur={() =>
          runValidationTasks("visceral_metastases", visceral_metastases)
        }
        errorMessage={errors.visceral_metastases?.errorMessage}
        hasError={errors.visceral_metastases?.hasError}
        {...getOverrideProps(overrides, "visceral_metastases")}
      >
        <Radio
          children="Yes"
          value="YES"
          {...getOverrideProps(overrides, "visceral_metastasesRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="NO"
          {...getOverrideProps(overrides, "visceral_metastasesRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Family history"
        name="family_history"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              gleason,
              histology,
              visceral_metastases,
              family_history: value,
              bone_metastases,
              ln_metastases,
            };
            const result = onChange(modelFields);
            value = result?.family_history ?? value;
          }
          if (errors.family_history?.hasError) {
            runValidationTasks("family_history", value);
          }
          setFamily_history(value);
        }}
        onBlur={() => runValidationTasks("family_history", family_history)}
        errorMessage={errors.family_history?.errorMessage}
        hasError={errors.family_history?.hasError}
        {...getOverrideProps(overrides, "family_history")}
      >
        <Radio
          children="Yes"
          value="YES"
          {...getOverrideProps(overrides, "family_historyRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="NO"
          {...getOverrideProps(overrides, "family_historyRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Bone metastases"
        name="bone_metastases"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              gleason,
              histology,
              visceral_metastases,
              family_history,
              bone_metastases: value,
              ln_metastases,
            };
            const result = onChange(modelFields);
            value = result?.bone_metastases ?? value;
          }
          if (errors.bone_metastases?.hasError) {
            runValidationTasks("bone_metastases", value);
          }
          setBone_metastases(value);
        }}
        onBlur={() => runValidationTasks("bone_metastases", bone_metastases)}
        errorMessage={errors.bone_metastases?.errorMessage}
        hasError={errors.bone_metastases?.hasError}
        {...getOverrideProps(overrides, "bone_metastases")}
      >
        <Radio
          children="Yes"
          value="YES"
          {...getOverrideProps(overrides, "bone_metastasesRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="NO"
          {...getOverrideProps(overrides, "bone_metastasesRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="LN metastases"
        name="ln_metastases"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              age,
              gleason,
              histology,
              visceral_metastases,
              family_history,
              bone_metastases,
              ln_metastases: value,
            };
            const result = onChange(modelFields);
            value = result?.ln_metastases ?? value;
          }
          if (errors.ln_metastases?.hasError) {
            runValidationTasks("ln_metastases", value);
          }
          setLn_metastases(value);
        }}
        onBlur={() => runValidationTasks("ln_metastases", ln_metastases)}
        errorMessage={errors.ln_metastases?.errorMessage}
        hasError={errors.ln_metastases?.hasError}
        {...getOverrideProps(overrides, "ln_metastases")}
      >
        <Radio
          children="Yes"
          value="YES"
          {...getOverrideProps(overrides, "ln_metastasesRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="NO"
          {...getOverrideProps(overrides, "ln_metastasesRadio1")}
        ></Radio>
      </RadioGroupField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        ></Flex>
      </Flex>
    </Grid>
  );
}
