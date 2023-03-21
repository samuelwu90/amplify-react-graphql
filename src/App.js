import { useState } from "react";
import logo from "./logo.svg";
import logo2 from "./poet_logo2018_300px_trans.png";
import { InputCreateForm } from "./ui-components";

import {
  Badge,
  Card,
  Divider,
  Flex,
  Heading,
  Text,
  useTheme,
  View,
} from "@aws-amplify/ui-react";

function App() {
  const [riskOfMutation, setRiskOfMutation] = useState();
  const { tokens } = useTheme();

  const handleChange = (fields) => {
    const {
      age,
      gleason,
      histology,
      visceral_metastases,
      family_history,
      bone_metastases,
      ln_metastases,
    } = fields;

    const riskScore =
      -1.07 +
      (parseInt(age) || 0) * -0.01 +
      (gleason === "YES" ? 1 : 0) * 0.512 +
      (histology === "YES" ? 1 : 0) * 0.975 +
      (visceral_metastases === "YES" ? 1 : 0) * 0.613 +
      (family_history === "YES" ? 1 : 0) * 0.758 +
      (bone_metastases === "YES" ? 1 : 0) * -0.255 +
      (ln_metastases === "YES" ? 1 : 0) * -0.209;

    let result = (Math.exp(riskScore) / (1 + Math.exp(riskScore))) * 100;
    result = result.toFixed(2);
    setRiskOfMutation(result);
    // const riskOfMutation = (Math.exp(riskScore) / (1 + Math.exp(riskScore))) * 100;
    console.log(fields, riskScore, riskOfMutation, gleason ? 1 : 0);
  };

  return (
    <Flex>
      <View
        backgroundColor={tokens.colors.background.secondary}
        padding={tokens.space.large}
      >
        <Flex justifyContent="left">
          <img src={logo2} className="App-logo" alt="logo" />
        </Flex>

        <Flex width="100%" justifyContent="center">
          <Card variation="outlined">
            <Heading level={1}>
              Clinical Predictors of Germline DNA Damage Repair Gene Mutations
              in Patients with Advanced Prostate Cancer
            </Heading>
          </Card>{" "}
        </Flex>

        <Flex direction={{ base: "column", large: "row" }}>
          <View width="100%" height="100%">
            <Card variation="outlined">
              <Heading level={6}>Risk Score Calculation Formula</Heading>
              <InputCreateForm onChange={handleChange} />{" "}
            </Card>{" "}
            <Card variation="outlined">
              <Flex direction="row" justifyContent="center">
                <Text>risk of mutation:</Text>
                <Badge>{riskOfMutation}%</Badge>
              </Flex>
            </Card>{" "}
          </View>
          <View width="100%" height="100%">
            <Card variation="outlined">
              <Heading level={6}>Description</Heading>
              <Flex direction="column" alignItems="flex-start">
                <Text>
                  This risk calculation formula allows clinicians to explore the
                  change in risk probability for patients with different
                  combinations of clinical risk factors. The manuscript
                  detailing the development and validation of this model will be
                  published in the near future.
                </Text>
                <Text>
                  Using the risk score calculation together with an individual’s
                  specific circumstances could help to prioritize the most
                  urgent patients for hereditary counselling and testing.
                  However, this resource is not meant to guide or advise
                  individual patients. Although we validated the model
                  internally, external validation is necessary. This should not
                  be interpreted as medical advice or replace the expert opinion
                  of a medical doctor.
                </Text>
              </Flex>
            </Card>{" "}
            <Card variation="outlined">
              <Heading level={6}>References</Heading>
              <Flex direction="column" alignItems="flex-start">
                <Text>
                  Yip SM, Sunderland K, Beigi A, Angeles A, Khalaf D, Warner E,
                  Vandekerkhove G, Sun S, Annala M, Wyatt AW, Chi KN. Predictors
                  of germline DNA damage repair gene mutations (gDDRm) in
                  patients (pts) with metastatic castration-resistant prostate
                  cancer (CRPC). J Clin Oncol. 2019; 37: Abstr 159.
                </Text>
              </Flex>
            </Card>{" "}
          </View>
        </Flex>
      </View>
    </Flex>
  );
}

export default App;
