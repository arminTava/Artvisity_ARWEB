import { NextApiRequest, NextApiResponse } from 'next';
import { projectDataModel } from '~/projectsJson/projectsDescriptions';



export default async function getModelData(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'GET') {
    const roomName = req.query.roomName as string;
    let d = projectDataModel[roomName] ? projectDataModel[roomName] : {} 

    return res.json(d);
  }
}