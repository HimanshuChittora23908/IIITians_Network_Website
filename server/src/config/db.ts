import { connect, ConnectionOptions } from 'mongoose';

const mongoUri = process.env.MONGO_URI as string;
// const mongoUri = 'mongodb+srv://raghhav:raghhav10@cluster0.zw0no.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const conOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
};

export const connectDatabase = async (): Promise<void> => {
  const con = await connect(mongoUri, conOptions);
  console.log(` MONGODB: ${con.connection.host} `);
};
