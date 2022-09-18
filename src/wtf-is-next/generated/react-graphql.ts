import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  message: Scalars['String'];
  /** An object relationship */
  user?: Maybe<User>;
  userId: Scalars['uuid'];
};

/** aggregated selection of "messages" */
export type MessagesAggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<MessagesAggregateFields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type MessagesAggregateFields = {
  __typename?: 'messages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MessagesMaxFields>;
  min?: Maybe<MessagesMinFields>;
};


/** aggregate fields of "messages" */
export type MessagesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<MessagesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type MessagesBoolExp = {
  _and?: Maybe<Array<MessagesBoolExp>>;
  _not?: Maybe<MessagesBoolExp>;
  _or?: Maybe<Array<MessagesBoolExp>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  message?: Maybe<StringComparisonExp>;
  user?: Maybe<UserBoolExp>;
  userId?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "messages" */
export enum MessagesConstraint {
  /** unique or primary key constraint on columns "id" */
  MESSAGES_PKEY = 'messages_pkey'
}

/** input type for inserting data into table "messages" */
export type MessagesInsertInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  user?: Maybe<UserObjRelInsertInput>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type MessagesMaxFields = {
  __typename?: 'messages_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type MessagesMinFields = {
  __typename?: 'messages_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "messages" */
export type MessagesMutationResponse = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type MessagesOnConflict = {
  constraint: MessagesConstraint;
  update_columns?: Array<MessagesUpdateColumn>;
  where?: Maybe<MessagesBoolExp>;
};

/** Ordering options when selecting data from "messages". */
export type MessagesOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  message?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
  userId?: Maybe<OrderBy>;
};

/** primary key columns input for table: messages */
export type MessagesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "messages" */
export enum MessagesSelectColumn {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  MESSAGE = 'message',
  /** column name */
  USERID = 'userId'
}

/** input type for updating data in table "messages" */
export type MessagesSetInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "messages" */
export type MessagesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: MessagesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: Maybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MessagesStreamCursorValueInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "messages" */
export enum MessagesUpdateColumn {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  MESSAGE = 'message',
  /** column name */
  USERID = 'userId'
}

export type MessagesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<MessagesSetInput>;
  where: MessagesBoolExp;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<MessagesMutationResponse>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<MessagesMutationResponse>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<MessagesMutationResponse>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update multiples rows of table: "messages" */
  update_messages_many?: Maybe<Array<Maybe<MessagesMutationResponse>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<UserMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteMessagesArgs = {
  where: MessagesBoolExp;
};


/** mutation root */
export type MutationRootDeleteMessagesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootInsertMessagesArgs = {
  objects: Array<MessagesInsertInput>;
  on_conflict?: Maybe<MessagesOnConflict>;
};


/** mutation root */
export type MutationRootInsertMessagesOneArgs = {
  object: MessagesInsertInput;
  on_conflict?: Maybe<MessagesOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  on_conflict?: Maybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserOneArgs = {
  object: UserInsertInput;
  on_conflict?: Maybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootUpdateMessagesArgs = {
  _set?: Maybe<MessagesSetInput>;
  where: MessagesBoolExp;
};


/** mutation root */
export type MutationRootUpdateMessagesByPkArgs = {
  _set?: Maybe<MessagesSetInput>;
  pk_columns: MessagesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateMessagesManyArgs = {
  updates: Array<MessagesUpdates>;
};


/** mutation root */
export type MutationRootUpdateUserArgs = {
  _set?: Maybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _set?: Maybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserManyArgs = {
  updates: Array<UserUpdates>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: MessagesAggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type QueryRootMessagesArgs = {
  distinct_on?: Maybe<Array<MessagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MessagesOrderBy>>;
  where?: Maybe<MessagesBoolExp>;
};


export type QueryRootMessagesAggregateArgs = {
  distinct_on?: Maybe<Array<MessagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MessagesOrderBy>>;
  where?: Maybe<MessagesBoolExp>;
};


export type QueryRootMessagesByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootUserArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


export type QueryRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


export type QueryRootUserByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: MessagesAggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table in a streaming manner : "messages" */
  messages_stream: Array<Messages>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner : "user" */
  user_stream: Array<User>;
};


export type SubscriptionRootMessagesArgs = {
  distinct_on?: Maybe<Array<MessagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MessagesOrderBy>>;
  where?: Maybe<MessagesBoolExp>;
};


export type SubscriptionRootMessagesAggregateArgs = {
  distinct_on?: Maybe<Array<MessagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MessagesOrderBy>>;
  where?: Maybe<MessagesBoolExp>;
};


export type SubscriptionRootMessagesByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootMessagesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<MessagesStreamCursorInput>>;
  where?: Maybe<MessagesBoolExp>;
};


export type SubscriptionRootUserArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


export type SubscriptionRootUserByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootUserStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<UserStreamCursorInput>>;
  where?: Maybe<UserBoolExp>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  username: Scalars['String'];
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UserSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: Maybe<Array<UserBoolExp>>;
  _not?: Maybe<UserBoolExp>;
  _or?: Maybe<Array<UserBoolExp>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  username?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "id" */
  USER_PKEY = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<UserOnConflict>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: Maybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  USERNAME = 'username'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** Streaming cursor of the table "user" */
export type UserStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: Maybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserStreamCursorValueInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  USERNAME = 'username'
}

export type UserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<UserSetInput>;
  where: UserBoolExp;
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type MessageFragment = (
  { __typename?: 'messages' }
  & Pick<Messages, 'message' | 'createdAt' | 'id' | 'userId'>
  & { user?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, 'username'>
  )> }
);

export type GetHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHistoryQuery = (
  { __typename?: 'query_root' }
  & { messages: Array<(
    { __typename?: 'messages' }
    & Pick<Messages, 'message' | 'createdAt' | 'id' | 'userId'>
    & { user?: Maybe<(
      { __typename?: 'user' }
      & Pick<User, 'username'>
    )> }
  )> }
);

export const MessageFragmentDoc = gql`
    fragment Message on messages {
  message
  createdAt
  id
  userId
  user {
    username
  }
}
    `;
export const GetHistoryDocument = gql`
    query GetHistory {
  messages(order_by: {createdAt: desc}) {
    message
    createdAt
    id
    userId
    user {
      username
    }
  }
}
    `;

/**
 * __useGetHistoryQuery__
 *
 * To run a query within a React component, call `useGetHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHistoryQuery(baseOptions?: Apollo.QueryHookOptions<GetHistoryQuery, GetHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHistoryQuery, GetHistoryQueryVariables>(GetHistoryDocument, options);
      }
export function useGetHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHistoryQuery, GetHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHistoryQuery, GetHistoryQueryVariables>(GetHistoryDocument, options);
        }
export type GetHistoryQueryHookResult = ReturnType<typeof useGetHistoryQuery>;
export type GetHistoryLazyQueryHookResult = ReturnType<typeof useGetHistoryLazyQuery>;
export type GetHistoryQueryResult = Apollo.QueryResult<GetHistoryQuery, GetHistoryQueryVariables>;