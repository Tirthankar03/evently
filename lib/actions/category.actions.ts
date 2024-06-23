// category.action.ts
'use server'

import { CreateCategoryParams } from "@/types";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";
import { handleError } from "../utils";

export const createCategory = async ({ categoryName }: CreateCategoryParams) => {
  try {
    console.log('Connecting to database for createCategory...');
    await connectToDatabase();
    console.log('Database connected for createCategory.');

    console.log('Creating new category...');
    const newCategory = await Category.create({ name: categoryName });
    console.log('New category created:', newCategory);

    return JSON.parse(JSON.stringify(newCategory));
  } catch (err) {
    console.log('Error in createCategory:', err);
    handleError(err);
  }
};

export const getAllCategories = async () => {
  try {
    console.log('Connecting to database for getAllCategories...');
    await connectToDatabase();
    console.log('Database connected for getAllCategories.');

    console.log('Fetching categories...');
    const categories = await Category.find();
    console.log('Categories fetched:', categories);

    return JSON.parse(JSON.stringify(categories));
  } catch (err) {
    console.log('Error in getAllCategories:', err);
    handleError(err);
  }
};
