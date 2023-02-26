import "@google/model-viewer";
import { ModelViewerElement } from "@google/model-viewer/lib/model-viewer";
import {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Model3D, Room } from "../interfaces/models";
import { VscDebugStart, VscDebugPause } from "react-icons/vsc";
import Link from "next/link";
import React from "react";
import { Button } from "@material-tailwind/react";
import { TbAugmentedReality } from "react-icons/tb";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": MyElementAttributes;
    }
    interface MyElementAttributes {
      src: string;
      poster?: string;
      alt: string;
      ar?: boolean;
      ref?: MutableRefObject<HTMLElement | undefined>;
      style: CSSProperties;
      children?: any;
      autoplay?: boolean;
    }
  }
}
interface ModelViewerProps {
  model: Model3D;
}
const ModelViewer = ({ model }: ModelViewerProps) => {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     console.log("Intersect");
  //     setLoading(true);
  //   });
  //   console.log("refd", ref);
  //   if (ref.current) observer.observe(ref.current);
  // });
  const ref = useRef<HTMLElement | undefined>();
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("START");
  //     if (ref.current) ref.current.play();
  //   }, 10000);
  // });

  function setARMode(model: Model3D) {
    const [showVideo, setshowVideo] = useState(false);
    const [showAudio, setShowAudio] = useState(false);
    if (model.arMode == 0) {
      return (
        <div className="flex flex-col border-2 rounded-lg p-0 border-gray-300">
          <div className="bg-[#ecf0f3] rounded-lg">
            <model-viewer
              ref={ref}
              src={model.modelUrl}
              style={{ backgroundColor: model.modelBackground }}
              ios-src=""
              camera-orbit="5deg 50deg 4m"
              autoplay
              poster={model.modelPoster}
              alt="A 3D model of an astronaut"
              shadow-intensity="1"
              camera-controls
              touch-action="pan-y"
              ar-modes=" scene-viewer webxr quick-look"
              skybox-image={model.skyboxImage}
              auto-rotate
              ar
            >
              <button
                slot="ar-button"
                className="absolute bottom-0 right-0 bg-transparent pr-1"
              >
                <div className="flex flex-col items-center ">
                  <TbAugmentedReality
                    size={40}
                    className="hover:scale-125 cursor-pointer"
                  />
                  <h3 className="text-black text-[10px] cursor-pointer">
                    Go to AR
                  </h3>
                </div>
              </button>
            </model-viewer>
          </div>
          <div className="flex flex-col p-3">
            <span className="text-[#ecf0f3] ">
              <span className="font-bold">Station: </span>
              <span>{model.modelName}</span>
            </span>
            <span className="text-[#ecf0f3] ">
              <span className="font-bold">Objekt: </span>
              <span>{model.modelYear}</span>
            </span>
            <span className="text-[#ecf0f3] ">
              <span className="font-bold">Inhalt: </span>
              <span>{model.modelSujet}</span>
            </span>
            {model.videoUrl && (
              <div className="flex flex-col ">
                {/* <a target="_blank" href={model.videoUrl}> */}
                <div
                  onClick={() => {
                    setshowVideo(!showVideo);
                    setShowAudio(false);
                  }}
                  className="mt-2 flex items-center bg-white rounded-lg p-2 justify-center cursor-pointer hover:bg-gray-600 hover:text-white"
                >
                  Zum Video
                </div>
                {/* </a> */}
                <iframe
                  className={showVideo ? "block h-72 w-full" : "hidden"}
                  src={model.videoUrl}
                  allow="autoplay"
                ></iframe>
              </div>
            )}
            {model.audioUrl && (
              // <a target="_blank" href={model.audioUrl}>
              <div className="flex flex-col ">
                <div
                  onClick={() => {
                    setShowAudio(!showAudio);
                    setshowVideo(false);
                  }}
                  className="mt-2 flex items-center bg-white rounded-lg p-2 justify-center cursor-pointer hover:bg-gray-600 hover:text-white"
                >
                  Zum Audio
                  {/* {playAudio ? <VscDebugPause /> : <VscDebugStart />} */}
                </div>
                <iframe
                  className={showAudio ? "block h-72 w-full" : "hidden"}
                  src={model.audioUrl}
                  allow="autoplay"
                ></iframe>
              </div>

              // </a>
            )}
          </div>
        </div>
      );
    } else if (model.arMode == 1) {
      return (
        <div className="flex flex-col border-2 rounded-lg p-0 border-gray-300">
          <div className="bg-[#ecf0f3] rounded-lg relative">
            <model-viewer
              src={model.modelUrl}
              style={{ backgroundColor: model.modelBackground }}
              ios-src=""
              autoplay
              poster={model.modelPoster}
              alt="A 3D model of an astronaut"
              shadow-intensity="1"
              camera-controls
              touch-action="pan-y"
              skybox-image={model.skyboxImage}
              auto-rotate
            ></model-viewer>
            <div className="absolute  -mt-[55px]  right-2">
              <Link
                href={{
                  pathname: "/markerNew",
                  query: {
                    modelName: model.modelName,
                    gltfUrl: model.modelUrl,
                    markerUrl: model.markerUrl,
                    rotation: model.rotation,
                    scale: model.scale,
                  }, // the data
                }}
                passHref
              >
                <div className="flex flex-col items-center ">
                  <TbAugmentedReality
                    size={40}
                    className="hover:scale-125 cursor-pointer"
                  />
                  <h3 className="text-[#ecf0f3] text-[10px] cursor-pointer">
                    Marker
                  </h3>
                </div>
                {/* <Button className="bg-sky-500 h-15">
                <h3 className="text-[#ecf0f3] text-sm p-3">Marker</h3>
              </Button> */}
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-3 ">
            <span className="text-[#ecf0f3] ">
              <span className="font-bold">Titel: </span>
              <span>{model.modelName}</span>
            </span>
            <span className="text-[#ecf0f3] ">
              <span className="font-bold">Entstehungsjahr: </span>
              <span>{model.modelYear}</span>
            </span>
            <span className="text-[#ecf0f3] ">
              <span className="font-bold">Sujet: </span>
              <span>{model.modelSujet}</span>
            </span>
            {model.videoUrl && (
              <a target="_blank" href={model.videoUrl}>
                <div className="mt-2 flex items-center bg-white rounded-lg p-2 justify-center cursor-pointer hover:bg-gray-600 hover:text-white">
                  Zum Video
                </div>
              </a>
            )}
            {model.audioUrl && (
              <a target="_blank" href={model.audioUrl}>
                <div className="mt-2 flex items-center bg-white rounded-lg p-2 justify-center cursor-pointer hover:bg-gray-600 hover:text-white">
                  Zum Audio
                </div>
              </a>
            )}
          </div>
          {/* <div className="">
            <Link href={`/markerar?gltfName=${model.modelUrl}`} passHref>
              <h3 className="text-[#ecf0f3] p-3">Marker</h3>
            </Link>
          </div> */}
        </div>
      );
    }
  }
  // useEffect(() => {
  //   const modelViewer = document.querySelector("model-viewer");
  //   console.log(modelViewer);
  //   console.log(modelViewer.availableAnimations);
  // });

  return <div>{setARMode(model)}</div>;
};

export default ModelViewer;
