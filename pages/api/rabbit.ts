import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB, connectRabbit } from '../../utils/functions';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  connectDB();

  const messageChannel = await connectRabbit();

  console.log(messageChannel);

  res.end();
}
