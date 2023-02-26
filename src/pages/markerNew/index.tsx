import dynamic from "next/dynamic";
import React, { useEffect } from "react";

// import MarkerLoader from "../../components/MarkerLoader";
import MarkerLoaderGLTF from "../../components/MarkerLoaderGLTF";

export default function index() {
  
  return (
    <div>
      {" "}
      <MarkerLoaderGLTF />
    </div>
  );
}
