import { D, A } from "@mobily/ts-belt";

export const ERROR_CODES = {
  INVALID_BODY: 400001,
  WRONG_PASSWORD: 400002,
  MISSING_COOKIE: 400003,
  INVALID_JWT: 4000004,
  FAILED_CREATE_DB: 400005,
  UNIQUE_CONSTRAINT: 400006,
  JWT_EXPIRED: 4010001,
  NOT_FOUND: 404001,
  DATA_NOT_FOUND_DB: 404002,
  MISSING_AUTHENTICATION_BEARER: 404003,
  SERVER_ERROR: 500001,
  INTERNAL_CLIENT_ERROR: 500101,
} as const;

// check that error codes should be unique
const values = A.uniq(D.values(ERROR_CODES));
const keys = D.keys(ERROR_CODES);

if (values.length !== keys.length) {
  throw new Error("Please make ERROR_CODES  values uniques");
}
