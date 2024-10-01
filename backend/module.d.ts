declare namespace NodeJS {

    export interface ProcessEnv {
      DATABASE_URL: string;
      JWT_SECRET_KEY: string;
      JWT_REFRESH_TOKEN_KEY: string;
      BB_NAME: string;
      DB_HOST: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_PORT: number;
      BB_TYPE: "mysql";
      DB_USERNAME: string
    }

  }