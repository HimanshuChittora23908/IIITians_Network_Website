import User ,{ UserClass } from './../entity/User';
import { Query, Resolver, Authorized, Ctx } from 'type-graphql';
import { DocumentType } from '@typegoose/typegoose';
import { BeAnObject } from '@typegoose/typegoose/lib/types';
import { Context } from '../types/Context';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  hello(): string {
    return 'hi!';
  }

  @Authorized()
  @Query(() => [UserClass])
  async users(): Promise<DocumentType<UserClass, BeAnObject>[] | null> {
    const users = await User.find({});
    return users;
  }

  @Query(() => UserClass, { nullable : true })
  async currentUser( @Ctx() ctx: Context ):Promise<DocumentType<UserClass, BeAnObject> | null>{
      const uid = ctx.req.session.passport!.user;
      console.log(ctx.req.session);
      const currentUser = await User.findById(uid);
      return currentUser;
  }
}