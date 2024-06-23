import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
console.log('MONGODB_URI:', MONGODB_URI); // Debug log

// let cached = (global as any).mongoose ;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {

  try {
    if (cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');
  
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
      dbName: 'evently',
      bufferCommands: false,
    })

    cached.conn = await cached.promise;
    
    
    console.log('mongo db connected!');
    
    return cached.conn;
  } catch (error) {
  console.error('error in database', error);
  }
 
}


// // database.ts

// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;
// console.log('MONGODB_URI in server:', MONGODB_URI); // Debug log

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads in development.
//  * This prevents connections growing exponentially during API Route usage.
//  */
// let cached = (global as any).mongoose ;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
