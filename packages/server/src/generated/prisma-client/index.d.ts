// Code generated by Prisma (prisma@1.18.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  game: (where?: GameWhereInput) => Promise<boolean>;
  project: (where?: ProjectWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  game: (where: GameWhereUniqueInput) => Game;
  games: (
    args?: {
      where?: GameWhereInput;
      orderBy?: GameOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<GameNode>;
  gamesConnection: (
    args?: {
      where?: GameWhereInput;
      orderBy?: GameOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => GameConnection;
  project: (where: ProjectWhereUniqueInput) => Project;
  projects: (
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<ProjectNode>;
  projectsConnection: (
    args?: {
      where?: ProjectWhereInput;
      orderBy?: ProjectOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProjectConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UserNode>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createGame: (data: GameCreateInput) => Game;
  updateGame: (
    args: { data: GameUpdateInput; where: GameWhereUniqueInput }
  ) => Game;
  updateManyGames: (
    args: { data: GameUpdateInput; where?: GameWhereInput }
  ) => BatchPayload;
  upsertGame: (
    args: {
      where: GameWhereUniqueInput;
      create: GameCreateInput;
      update: GameUpdateInput;
    }
  ) => Game;
  deleteGame: (where: GameWhereUniqueInput) => Game;
  deleteManyGames: (where?: GameWhereInput) => BatchPayload;
  createProject: (data: ProjectCreateInput) => Project;
  updateProject: (
    args: { data: ProjectUpdateInput; where: ProjectWhereUniqueInput }
  ) => Project;
  updateManyProjects: (
    args: { data: ProjectUpdateInput; where?: ProjectWhereInput }
  ) => BatchPayload;
  upsertProject: (
    args: {
      where: ProjectWhereUniqueInput;
      create: ProjectCreateInput;
      update: ProjectUpdateInput;
    }
  ) => Project;
  deleteProject: (where: ProjectWhereUniqueInput) => Project;
  deleteManyProjects: (where?: ProjectWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  game: (
    where?: GameSubscriptionWhereInput
  ) => GameSubscriptionPayloadSubscription;
  project: (
    where?: ProjectSubscriptionWhereInput
  ) => ProjectSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type GameOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "img_ASC"
  | "img_DESC"
  | "url_ASC"
  | "url_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ProjectOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "targetPoints_ASC"
  | "targetPoints_DESC"
  | "gainedPoints_ASC"
  | "gainedPoints_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "confirmed_ASC"
  | "confirmed_DESC"
  | "points_ASC"
  | "points_DESC"
  | "pointsCounter_ASC"
  | "pointsCounter_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type GameWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface GameWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  img?: String;
  img_not?: String;
  img_in?: String[] | String;
  img_not_in?: String[] | String;
  img_lt?: String;
  img_lte?: String;
  img_gt?: String;
  img_gte?: String;
  img_contains?: String;
  img_not_contains?: String;
  img_starts_with?: String;
  img_not_starts_with?: String;
  img_ends_with?: String;
  img_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: GameWhereInput[] | GameWhereInput;
  OR?: GameWhereInput[] | GameWhereInput;
  NOT?: GameWhereInput[] | GameWhereInput;
}

export type ProjectWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ProjectWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  targetPoints?: Int;
  targetPoints_not?: Int;
  targetPoints_in?: Int[] | Int;
  targetPoints_not_in?: Int[] | Int;
  targetPoints_lt?: Int;
  targetPoints_lte?: Int;
  targetPoints_gt?: Int;
  targetPoints_gte?: Int;
  gainedPoints?: Int;
  gainedPoints_not?: Int;
  gainedPoints_in?: Int[] | Int;
  gainedPoints_not_in?: Int[] | Int;
  gainedPoints_lt?: Int;
  gainedPoints_lte?: Int;
  gainedPoints_gt?: Int;
  gainedPoints_gte?: Int;
  AND?: ProjectWhereInput[] | ProjectWhereInput;
  OR?: ProjectWhereInput[] | ProjectWhereInput;
  NOT?: ProjectWhereInput[] | ProjectWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  confirmed?: Boolean;
  confirmed_not?: Boolean;
  points?: Int;
  points_not?: Int;
  points_in?: Int[] | Int;
  points_not_in?: Int[] | Int;
  points_lt?: Int;
  points_lte?: Int;
  points_gt?: Int;
  points_gte?: Int;
  pointsCounter?: Int;
  pointsCounter_not?: Int;
  pointsCounter_in?: Int[] | Int;
  pointsCounter_not_in?: Int[] | Int;
  pointsCounter_lt?: Int;
  pointsCounter_lte?: Int;
  pointsCounter_gt?: Int;
  pointsCounter_gte?: Int;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface GameCreateInput {
  name: String;
  img: String;
  url?: String;
  description?: String;
}

export interface GameUpdateInput {
  name?: String;
  img?: String;
  url?: String;
  description?: String;
}

export interface ProjectCreateInput {
  name: String;
  description: String;
  targetPoints?: Int;
  gainedPoints?: Int;
}

export interface ProjectUpdateInput {
  name?: String;
  description?: String;
  targetPoints?: Int;
  gainedPoints?: Int;
}

export interface UserCreateInput {
  name?: String;
  email: String;
  password: String;
  confirmed?: Boolean;
  points?: Int;
  pointsCounter?: Int;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  confirmed?: Boolean;
  points?: Int;
  pointsCounter?: Int;
}

export interface GameSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: GameWhereInput;
  AND?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput;
  OR?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput;
  NOT?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput;
}

export interface ProjectSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProjectWhereInput;
  AND?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
  OR?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
  NOT?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface GameNode {
  id: ID_Output;
  name: String;
  img: String;
  url?: String;
  description?: String;
}

export interface Game extends Promise<GameNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  img: () => Promise<String>;
  url: () => Promise<String>;
  description: () => Promise<String>;
}

export interface GameSubscription
  extends Promise<AsyncIterator<GameNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  img: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface GameConnectionNode {}

export interface GameConnection
  extends Promise<GameConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<GameEdgeNode>>() => T;
  aggregate: <T = AggregateGame>() => T;
}

export interface GameConnectionSubscription
  extends Promise<AsyncIterator<GameConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<GameEdgeSubscription>>>() => T;
  aggregate: <T = AggregateGameSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface GameEdgeNode {
  cursor: String;
}

export interface GameEdge extends Promise<GameEdgeNode>, Fragmentable {
  node: <T = Game>() => T;
  cursor: () => Promise<String>;
}

export interface GameEdgeSubscription
  extends Promise<AsyncIterator<GameEdgeNode>>,
    Fragmentable {
  node: <T = GameSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateGameNode {
  count: Int;
}

export interface AggregateGame
  extends Promise<AggregateGameNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateGameSubscription
  extends Promise<AsyncIterator<AggregateGameNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProjectNode {
  id: ID_Output;
  name: String;
  description: String;
  targetPoints?: Int;
  gainedPoints?: Int;
}

export interface Project extends Promise<ProjectNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  targetPoints: () => Promise<Int>;
  gainedPoints: () => Promise<Int>;
}

export interface ProjectSubscription
  extends Promise<AsyncIterator<ProjectNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  targetPoints: () => Promise<AsyncIterator<Int>>;
  gainedPoints: () => Promise<AsyncIterator<Int>>;
}

export interface ProjectConnectionNode {}

export interface ProjectConnection
  extends Promise<ProjectConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<ProjectEdgeNode>>() => T;
  aggregate: <T = AggregateProject>() => T;
}

export interface ProjectConnectionSubscription
  extends Promise<AsyncIterator<ProjectConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProjectEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProjectSubscription>() => T;
}

export interface ProjectEdgeNode {
  cursor: String;
}

export interface ProjectEdge extends Promise<ProjectEdgeNode>, Fragmentable {
  node: <T = Project>() => T;
  cursor: () => Promise<String>;
}

export interface ProjectEdgeSubscription
  extends Promise<AsyncIterator<ProjectEdgeNode>>,
    Fragmentable {
  node: <T = ProjectSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProjectNode {
  count: Int;
}

export interface AggregateProject
  extends Promise<AggregateProjectNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProjectSubscription
  extends Promise<AsyncIterator<AggregateProjectNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  name?: String;
  email: String;
  password: String;
  confirmed?: Boolean;
  points?: Int;
  pointsCounter?: Int;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  confirmed: () => Promise<Boolean>;
  points: () => Promise<Int>;
  pointsCounter: () => Promise<Int>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  confirmed: () => Promise<AsyncIterator<Boolean>>;
  points: () => Promise<AsyncIterator<Int>>;
  pointsCounter: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UserEdgeNode>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface GameSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface GameSubscriptionPayload
  extends Promise<GameSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Game>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = GamePreviousValues>() => T;
}

export interface GameSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<GameSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = GameSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = GamePreviousValuesSubscription>() => T;
}

export interface GamePreviousValuesNode {
  id: ID_Output;
  name: String;
  img: String;
  url?: String;
  description?: String;
}

export interface GamePreviousValues
  extends Promise<GamePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  img: () => Promise<String>;
  url: () => Promise<String>;
  description: () => Promise<String>;
}

export interface GamePreviousValuesSubscription
  extends Promise<AsyncIterator<GamePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  img: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface ProjectSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ProjectSubscriptionPayload
  extends Promise<ProjectSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Project>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProjectPreviousValues>() => T;
}

export interface ProjectSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProjectSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProjectSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProjectPreviousValuesSubscription>() => T;
}

export interface ProjectPreviousValuesNode {
  id: ID_Output;
  name: String;
  description: String;
  targetPoints?: Int;
  gainedPoints?: Int;
}

export interface ProjectPreviousValues
  extends Promise<ProjectPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  targetPoints: () => Promise<Int>;
  gainedPoints: () => Promise<Int>;
}

export interface ProjectPreviousValuesSubscription
  extends Promise<AsyncIterator<ProjectPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  targetPoints: () => Promise<AsyncIterator<Int>>;
  gainedPoints: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  name?: String;
  email: String;
  password: String;
  confirmed?: Boolean;
  points?: Int;
  pointsCounter?: Int;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  confirmed: () => Promise<Boolean>;
  points: () => Promise<Int>;
  pointsCounter: () => Promise<Int>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  confirmed: () => Promise<AsyncIterator<Boolean>>;
  points: () => Promise<AsyncIterator<Int>>;
  pointsCounter: () => Promise<AsyncIterator<Int>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/**
 * Type Defs
 */

export const prisma: Prisma;
