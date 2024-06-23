import { Document, Schema, model, models, Model } from "mongoose";


console.log('models in mongodb in category.model.t:', models); // Debug log



export interface ICategory extends Document {
  _id: string;
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
})

// const Category = models.Category || model('Category', CategorySchema);
// Ensure the model is not recompiled
const Category: Model<ICategory> = models.Category || model<ICategory>('Category', CategorySchema);
export default Category;

// import { Document, Schema, model, models } from 'mongoose';

// export interface ICategory extends Document {
//   _id: string;
//   name: string;
// }

// const CategorySchema = new Schema({
//   name: { type: String, required: true, unique: true },
// });

// // Check if the Category model is already defined to avoid recompiling the model
// const Category = models.Category || model<ICategory>('Category', CategorySchema);

// export default Category;
