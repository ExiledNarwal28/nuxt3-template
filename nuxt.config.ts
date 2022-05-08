import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  build: {
    transpile: ['graphql'],
  },
  buildModules: ['@nuxt3/graphql-codegen-module', '@nuxt3/apollo-module'],
  graphqlCodegen: {
    // TODO: Move to env var
    schema: ['http://localhost:8000/api/graphql'],
  },
  apollo: {
    default: {
      // TODO: Move to env var
      uri: process.env.URL ? `${process.env.URL}/api/graphql` : 'http://localhost:8000/api/graphql',
    },
  },
  ignore: ['data/db'],
});
