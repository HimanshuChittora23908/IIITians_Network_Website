import { Resolver, Mutation, Arg } from "type-graphql"
import projectModel, { ProjectClass } from "../schema/projectSchema";

@Resolver()
export class ideaResolver {

    @Mutation(() => ProjectClass)
    async createIdea(
        @Arg("name", () => String) name: String,
        @Arg("institution", () => String) institution: String,
        @Arg("techStack", () => String) techStack: String,
        @Arg("futureScope", () => String) futureScope: String,
        @Arg("description", () => String) description: String,
        @Arg("teamRequired", () => Boolean) teamRequired: Boolean
    ): Promise<ProjectClass> {
        const idea = new projectModel({
            name,
            institution,
            description,
            techStack,
            futureScope,
            teamRequired
        })

        await idea.save();
        console.log(idea);
        return idea;
    }
}

