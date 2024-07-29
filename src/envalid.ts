import 'dotenv/config';
import { cleanEnv, email, json, str } from 'envalid';

const environment = cleanEnv(process.env, {
  API_KEY: str(),
  ADMIN_EMAIL: email({ default: 'admin@example.com' }),
  EMAIL_CONFIG_JSON: json<{ bar: string }>({
    desc: 'Additional email parameters',
  }),
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
});

// eslint-disable-next-line no-console
console.log(environment);
