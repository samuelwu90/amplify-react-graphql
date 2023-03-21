// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const YesNo = {
  "YES": "YES",
  "NO": "NO"
};

const { Input } = initSchema(schema);

export {
  Input,
  YesNo
};