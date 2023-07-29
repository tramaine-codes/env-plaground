import 'dotenv/config';
import { email, envsafe, json, str } from 'envsafe';

export const environment = envsafe({
  API_KEY: str(),
  ADMIN_EMAIL: email({ default: 'admin@example.com' }),
  EMAIL_CONFIG_JSON: json({ desc: 'Additional email parameters' }),
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
});

// eslint-disable-next-line no-console
console.log(environment);
