import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../utils/functions';
const { ObjectId } = require('mongodb');
const { View } = require('../../models/View');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connectDB();
  async function run() {
    const videoId = new ObjectId(req.query.id);
    const viewed = await View.findById(videoId);

    res.json({ title: viewed.title });
  }

  run();
}
