import React, { useEffect, useReducer, useState } from "react";

export default function markerar() {
  return <div>marker</div>;
}

// import Head from "next/head";
// // import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
// import Script from "next/script";
// import ARCanvas from "../components/ar/arCanvas";
// import ARMarker from "../components/ar/arMarker";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useRouter } from "next/router";
// // import "aframe-extras";
// import { AiOutlineArrowLeft } from "react-icons/ai";

// function GltfModel({ gltfName, scale, rotation }: any) {
//   const [flag, toggle] = useReducer((state) => !state, true);
//   useEffect(() => {
//     const interval = setInterval(toggle, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   const { scene } = useLoader(GLTFLoader, gltfName) as any;
//   return (
//     <mesh rotation={rotation}>
//       <primitive scale={scale} object={scene} />;
//     </mesh>
//   );
// }

// export default function markerar() {
//   const [loaded, setLoaded] = useState(false);
//   const [showToast, setShowToast] = useState<boolean>(true);
//   const [Modelname, setModelname] = useState<string | string[]>("");
//   const [markerUrl, setMarkerUrl] = useState<string | string[]>("");
//   const [scale, setScale] = useState<number[]>([1, 1, 1]);
//   const [rotation, setRotation] = useState<number[]>([0, 0, 0]);
//   const router = useRouter();

//   useEffect(() => {
//     if (!router.isReady) return;
//     var { gltfName, markerUrl, rotation, scale } = router.query;
//     setModelname(gltfName);
//     setMarkerUrl(markerUrl);
//     scale = scale as string;
//     rotation = rotation as string;
//     if (scale)
//       console.log(
//         scale.split(",").map(function (item) {
//           return parseInt(item);
//         })
//       );
//     if (scale)
//       setScale(
//         scale.split(",").map(function (item) {
//           return parseInt(item);
//         })
//       );
//     if (rotation)
//       setRotation(
//         rotation.split(",").map(function (item) {
//           return parseInt(item);
//         })
//       );
//     if (window != undefined) {
//       const toRef = setTimeout(() => {
//         setLoaded(true);
//         clearTimeout(toRef);
//       }, 2000);
//     }
//     const toRef2 = setTimeout(() => {
//       setShowToast(false);
//       clearTimeout(toRef2);
//     }, 6000);
//   }, []);
//   //patt.hiro /markerLogo.patt
//   return (
//     <div>
//       {loaded ? (
//         <div className="object-cover top-0 left-0 fixed h-screen w-full  ">
//           <div className="flex flex-col z-[100] bg-black shadow-xl">
//             <div className="float-left  py-4 px-2">
//               <div onClick={() => router.back()} className="flex items-center">
//                 <AiOutlineArrowLeft className="cursor-pointer fill-[#ecf0f3]" />
//                 <span className="px-1 cursor-pointer text-[#ecf0f3]">Back</span>
//               </div>
//             </div>
//           </div>
//           <div
//             className={
//               showToast ? "flex justify-center items-center" : "hidden"
//             }
//           >
//             <span className="text-[#ecf0f3] ">Scanne Marker</span>
//           </div>
//           {/* <div className="object-cover top-0 left-0 fixed"> */}
//           <ARCanvas
//             camera={{ position: [0, 0, 2], near: 0.01, far: 1000 }}
//             dpr={window.devicePixelRatio}
//             onCreated={({ gl }) => {
//               gl.setSize(window.innerWidth, window.innerHeight);
//             }}
//             gl={{
//               alpha: true,
//               antialias: true,
//               precision: "highp",
//               logarithmicDepthBuffer: true,
//             }}
//           >
//             <ambientLight />
//             {/* <pointLight position={[10, 10, 0]} /> */}
//             <pointLight position={[0, 0, 0]} />
//             <ARMarker
//               type={"pattern"}
//               patternUrl={markerUrl}
//               params={{ size: 1 }}
//             >
//               <GltfModel
//                 gltfName={Modelname}
//                 scale={scale}
//                 rotation={rotation}
//               />
//             </ARMarker>
//           </ARCanvas>
//           <GltfModel gltfName={Modelname} scale={scale} rotation={rotation} />
//           {/* </div> */}
//         </div>
//       ) : (
//         <div className="text-[#ecf0f3] text-xl justify-center items-center flex h-screen">
//           Marker werden eingerichtet
//         </div>
//       )}
//     </div>
//   );
// }
