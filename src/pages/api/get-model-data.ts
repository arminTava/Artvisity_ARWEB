import { NextApiRequest, NextApiResponse } from 'next';



export default async function getModelData(
  req: NextApiRequest,
  res: NextApiResponse
) {

  console.log("TEST TEST")
  if (req.method === 'GET') {
    const roomName = req.query.roomName as string;
    let d = {}
    if (roomName ==="Theatermuseum") {
      d = {
        "name": "Theatermuseum",
        "website": "https://www.artvisity.io",
        "models": [
          {
            "modelName": "test3",
            "modelUrl": "https://modelviewer.dev//shared-assets/models/NeilArmstrong.glb",
            "modelPoster": "https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717",
            "arMode": 0,
            "scale": "30,30,30", 
            "rotation": "-45,0,0",
            "markerUrl": "dummy/pinball"
          
          },
          {
            "modelName": "Dream Tunnel",
            "modelSujet": "Lorem ipsum dolo",
            "modelUrl": "https://modelviewer.dev//shared-assets/models/NeilArmstrong.glb",
            "modelPoster": "https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717",
            "arMode": 1,
            "scale": "30,30,30", 
            "rotation": "-45,0,0",
            "markerUrl": "dummy/pinball"
          },
        ]
    }
    }

    return res.json(d);
  }
}