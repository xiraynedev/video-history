import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB, connectRabbit } from '../../utils/functions';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  connectDB();

  const messageChannel = await connectRabbit();

  res.send('The messageChannel has been created!');
}
