import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Room } from "../interfaces/models";
import Loading from "./Loading";

const Model = dynamic(() => import("./ModelViewer"), {
  ssr: false,
});

interface MainGridProps {
  room: Room;
  isLoading: boolean;
  isError: boolean;
}

function MainGrid2({ room, isLoading, isError }: MainGridProps) {
  const [loadingDone, setLoadingDone] = useState(false);
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    const toRef = setTimeout(() => {
      setLoadingDone(true);
      clearTimeout(toRef);
    }, 3000);
    setMounted(true);
    const element = document.getElementById("loading");
    if (element) element.remove();
  });
  if (!isMounted) return null;

  return (
    <div className="w-full md:h-screen p-2 absolute py-16 items-center justify-center">
      {isLoading ? (
        <div className="items-center justify-center py-1">
          <Loading />
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center ">
            <div className="items-center justify-center p-4 mb-7">
              <span className="text-[#ecf0f3] text-3xl font-bold uppercase">
                {room?.name}
              </span>
            </div>
            {/* <div
              className={
                loadingDone ? "hidden" : "items-center justify-center py-3"
              }
            >
              <img
                className="w-14 w- h-14 mx-5 animate-[wiggle_1s_ease-in-out_infinite]  "
                src="https://cdn-icons-png.flaticon.com/512/2165/2165988.png"
                alt="loading..."
              />
            </div> */}
          </div>

          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {room?.models &&
              room?.models.map((item) => (
                <div key={item.modelName}>
                  <Model model={item} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default MainGrid2;
