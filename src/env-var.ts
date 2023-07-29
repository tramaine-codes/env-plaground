import 'dotenv/config';
import env from 'env-var';

const enviroment = {
  API_KEY: env.get('API_KEY').required().asString(),
  ADMIN_EMAIL: env
    .get('ADMIN_EMAIL')
    .default('admin@example.com')
    .required()
    .asString(),
  EMAIL_CONFIG_JSON: env.get('EMAIL_CONFIG_JSON').required().asJson(),
  NODE_ENV: env
    .get('NODE_ENV')
    .required()
    .asEnum(['development', 'test', 'production', 'staging'] as const),
};

// eslint-disable-next-line no-console
console.log(enviroment);
