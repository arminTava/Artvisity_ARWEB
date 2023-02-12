import Script from "next/script";
import React, { useEffect } from "react";
import * as ARnftThreejs from "@webarkit/arnft-threejs";

// import * as THREE from "three";
export default function MarkerLoader() {
  // let width = 640;
  // let height = 480;
  // useEffect(() => {
  //   console.log("window.innerHeight", window.innerHeight);
  //   async function loader() {
  //     const ARnft = (await import("../lib/dist/ARnft.js")).default;
  //     //   const ARnftThreejs = (await import("../lib/js/ARnftThreejs.js")).default; //needs three version 00.37
  //     //   const _ = (await import("../lib/js/third_party/three.min.js")).default;
  //     ARnft.ARnft.init(
  //       width,
  //       height,
  //       [["pinball"]],
  //       [["pinball"]],
  //       "config.json",
  //       true
  //     )
  //       .then((nft) => {
  //         let mat = new THREE.MeshLambertMaterial({
  //           color: 0xff0000,
  //         });
  //         let boxGeom = new THREE.BoxGeometry(1, 1, 1);
  //         let cube = new THREE.Mesh(boxGeom, mat);
  //         cube.position.z = 90;
  //         cube.scale.set(180, 180, 180);

  //         document.addEventListener("containerEvent", function (ev) {
  //           let canvas = document.getElementById("canvas");
  //           let fov = (0.8 * 180) / Math.PI;
  //           let ratio = width / height;
  //           let config = {
  //             renderer: {
  //               alpha: true,
  //               antialias: true,
  //               context: null,
  //               precision: "mediump",
  //               premultipliedAlpha: true,
  //               stencil: true,
  //               depth: true,
  //               logarithmicDepthBuffer: true,
  //             },
  //             camera: {
  //               fov: fov,
  //               ratio: ratio,
  //               near: 0.01,
  //               far: 1000,
  //             },
  //           };

  //           let sceneThreejs = new ARnftThreejs.SceneRendererTJS(
  //             config,
  //             canvas,
  //             nft.uuid,
  //             true
  //           );
  //           sceneThreejs.initRenderer();

  //           let nftAddTJS = new ARnftThreejs.NFTaddTJS(nft.uuid);
  //           nftAddTJS.oef = true;
  //           nftAddTJS.add(cube, "pinball", false);

  //           const tick = () => {
  //             sceneThreejs.draw();
  //             window.requestAnimationFrame(tick);
  //           };
  //           tick();
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   loader();
  // }, []);
  return (
    <div>
      <div>marker</div>
      {/* <Script src="lib/js/third_party/three.js/three.min.js" /> */}
    </div>
  );
}
