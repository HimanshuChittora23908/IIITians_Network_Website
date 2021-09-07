import { ConfirmUserResolver } from "./confirmUser";
import { HelloWorldResolver } from "./HelloWorldResolver";
import { RegisterResolver } from "./register/RegisterResolver";

export const Resolvers = [HelloWorldResolver, RegisterResolver, ConfirmUserResolver];