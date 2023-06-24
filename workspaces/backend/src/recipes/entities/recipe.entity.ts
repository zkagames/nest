import {Prop , Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose';

export type RecipeDocument = Recipe & Document;

@Schema({
    toJSON: ({
        virtuals: true,
        getters: true
    })
})
export class Recipe {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    user: string;

    @Prop({required: true})
    stages: Array<{action: string, item: string}>;
}

const RecipeSchema = SchemaFactory.createForClass(Recipe);
RecipeSchema.virtual('id').get(function(this: Document){
    return this._id.toHexString();
});

export {RecipeSchema};