import { DocumentNode } from 'graphql';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  recipe: Recipe;
};

export type QueryRecipeArgs = {
  recipeInput: RecipeInput;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['String'];
  title: Scalars['String'];
};

export type RecipeInput = {
  id: Scalars['String'];
};

export type RecipeQueryVariables = Exact<{
  recipeInput: RecipeInput;
}>;

export type RecipeQuery = { __typename?: 'Query'; recipe: { __typename?: 'Recipe'; id: string; title: string } };

export const RecipeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Recipe' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'recipeInput' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'RecipeInput' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'recipe' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'recipeInput' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'recipeInput' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useRecipeQuery__
 *
 * To run a query within a Vue component, call `useRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRecipeQuery({
 *   recipeInput: // value for 'recipeInput'
 * });
 */
export function useRecipeQuery(
  variables:
    | RecipeQueryVariables
    | VueCompositionApi.Ref<RecipeQueryVariables>
    | ReactiveFunction<RecipeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>> = {},
) {
  return VueApolloComposable.useQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, variables, options);
}
export function useRecipeLazyQuery(
  variables:
    | RecipeQueryVariables
    | VueCompositionApi.Ref<RecipeQueryVariables>
    | ReactiveFunction<RecipeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>> = {},
) {
  return VueApolloComposable.useLazyQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, variables, options);
}
export type RecipeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  RecipeQuery,
  RecipeQueryVariables
>;
