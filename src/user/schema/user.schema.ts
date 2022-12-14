import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  surname: string;
  @Prop({ required: true })
  age: number;
  @Prop({ required: true })
  email: string;
  @Prop()
  created: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
