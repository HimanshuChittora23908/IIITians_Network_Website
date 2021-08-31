import projectModel from "../schema/projectSchema";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }

  @Query(() => String)
  idea() {
    return projectModel.find();
  }
}
