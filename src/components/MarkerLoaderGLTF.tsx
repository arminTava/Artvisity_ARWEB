import { useRouter } from "next/router.js";
import Script from "next/script";
import React, { useEffect, useState } from "react";
// import * as ARnftThreejs from "@webarkit/arnft-threejs";

import * as THREE from "three";

export default function MarkerLoaderGLTF() {
  let ARnft: any;
  async function loader(
    modelName: string,
    gltfUrl: string,
    markerUrl: string,
    rotation: string,
    scale: string
  ) {
    let width = 640;
    let height = 480;
    let scales: number[];
    let rotations: number[];
    if (scale)
      scales = (scale as string).split(",").map((item) => parseInt(item));
    if (rotation)
      rotations = (rotation as string).split(",").map((item) => parseInt(item));

    ARnft = (await import("../lib/dist/ARnft.js")).default;
    const ARnftThreejs = (await import("../lib/js/ARnftThreejs.js")).default; //needs three version 00.37
    //   const _ = (await import("../lib/js/third_party/three.min.js")).default;
    console.log("ViewStart", ARnft.ARnft.cameraView);
    ARnft.ARnft.init(
      width,
      height,
      [[markerUrl]],
      [[modelName]],
      "config.json",
      true
    )
      .then((nft: any) => {
        console.log("ViewStart", ARnft.ARnft.cameraView);
        document.addEventListener("containerEvent", function (ev) {
          let canvas = document.getElementById("canvas");
          let fov = (0.8 * 180) / Math.PI;
          let ratio = width / height;
          let config = {
            renderer: {
              alpha: true,
              antialias: true,
              context: null,
              precision: "mediump",
              premultipliedAlpha: true,
              stencil: true,
              depth: true,
              logarithmicDepthBuffer: true,
            },
            camera: {
              fov: fov,
              ratio: ratio,
              near: 0.01,
              far: 1000,
            },
          };

          let sceneThreejs = new ARnftThreejs.SceneRendererTJS(
            config,
            canvas,
            nft.uuid,
            true
          );
          sceneThreejs.initRenderer();

          const renderer = sceneThreejs.getRenderer();
          const scene = sceneThreejs.getScene();
          renderer.outputEncoding = THREE.sRGBEncoding;
          renderer.physicallyCorrectLights = true;
          let directionalLight = new THREE.DirectionalLight("#fff", 0.4);
          directionalLight.position.set(0.5, 0, 0.866);
          scene.add(directionalLight);

          let nftAddTJS = new ARnftThreejs.NFTaddTJS(nft.uuid);
          nftAddTJS.oef = true;
          function modelCallback(gltf: any) {
            var model = gltf.scene.children[0];
            console.log("model", model);
            console.log("scales", scales);
            console.log("rotations", rotations);
            // model.position.y = 200;
            if (scales !== undefined && scales.length > 1) {
              model.scale.x = scales[0];
              model.scale.y = scales[1];
              model.scale.z = scales[2];
            }
            if (rotations !== undefined && rotations.length > 1) {
              model.rotation.x = rotations[0];
              model.rotation.y = rotations[1];
              model.rotation.z = rotations[2];
            }
          }
          console.log("url", gltfUrl);
          nftAddTJS.addModelWithCallback(
            gltfUrl,
            modelName,
            modelCallback,
            false
          );
          const tick = () => {
            sceneThreejs.draw();
            window.requestAnimationFrame(tick);
          };
          tick();
        });
        document.addEventListener("btnBackEvent", function () {
          router.back();
          // ARnft.ARnft.prototype.dispose();
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
    return ARnft;
  }

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    let { modelName, gltfUrl, markerUrl, rotation, scale } = router.query;
    console.log(modelName, gltfUrl, markerUrl, rotation, scale);
    loader(
      modelName as string,
      gltfUrl as string,
      markerUrl as string,
      rotation as string,
      scale as string
    );
    const handleBrowseAway = () => {
      console.log("Dismount");
      ARnft.ARnft.prototype.dispose();
      const element = document.getElementById("stats");
      if (element) element.remove();
    };
    router.events.on("routeChangeStart", handleBrowseAway);
    return () => {
      router.events.off("routeChangeStart", handleBrowseAway);
      //remove all listensers
      //document.removeEventListener("containerEvent")
    };
  }, [router.isReady]);
  return (
    <div>
      <div className="text-[#ecf0f3] text-xl justify-center translate-y-20 flex h-screen">
        Marker werden eingerichtet
      </div>
    </div>
  );
}
