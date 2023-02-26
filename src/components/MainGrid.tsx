import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Room } from "../interfaces/models";

const Model = dynamic(() => import("./ModelViewer"), {
  ssr: false,
});

function MainGrid() {
  const router = useRouter();
  const [room, setRoom] = useState<Room>({
    name: "theater",
    models: [],
  });
  useEffect(() => {
    async function fetchMyAPI(roomName: string | string[]) {
      let response = await fetch(
        "http://localhost:3005/get-model-data?name=" + roomName
      ); //http://localhost:5001/artvisity/europe-west1/getWebRoom?Room=
      const data: Room = await response.json();
      setRoom(data);
    }

    if (!router.isReady) return;
    const { roomName } = router.query;
    fetchMyAPI(roomName);
    // var roomNew  = {
    //   name: "theater",
    //   models:
    //   [
    //     {
    //       modelName: "Test",
    //       modelUrl: "https://modelviewer.dev//shared-assets/models/NeilArmstrong.glb"
    //     },
    //     {
    //       modelName: "Test2",
    //       modelUrl: "https://modelviewer.dev//shared-assets/models/NeilArmstrong.glb"
    //     }
    //   ]
    // }
  }, [router.isReady]);

  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 justify-center">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {room.models.map((item) => (
          <div key={item.modelName}>
            <Model model={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default MainGrid;
