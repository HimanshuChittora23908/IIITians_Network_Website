import { prop, getModelForClass } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { Field, ObjectType } from 'type-graphql';

mongoose.connect("mongodb://localhost:27017/projects");

@ObjectType('Idea', { description: "idea Schema" })
export class ProjectClass {
    @Field()
    @prop({ required: true })
    public name?: string;
    
    @Field()
    @prop({ required: true })
    public institution?: string;
    
    @Field()
    @prop({ required: true })
    public description?: string;
    
    @Field()
    @prop({ type: () => String })
    public techStack?: string;

    @Field()
    @prop()
    public futureScope?: string;

    @Field()
    @prop({ required: true })
    public teamRequired?: boolean;

}

const projectModel = getModelForClass(ProjectClass);

export default projectModel;

