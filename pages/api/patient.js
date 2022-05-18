import mongoose from 'mongoose';
import mongoConnection from '../../middleware/db/index';

const handler = async (req, res) => {
  console.log(mongoose.connections[0].readyState);
  // if (mongoose.connections[0].readyState) {
  //   await mongoose.connection.close();
  // }

  await res.status(200).send({ message: 'Rx Pandan' });
};

export default mongoConnection(handler);
