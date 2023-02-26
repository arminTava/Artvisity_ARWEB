import Head from "next/head";
import MainGrid2 from "../components/MainGrid2";
import { Room } from "../interfaces/models";
import Navbar2 from "../components/Navbar";
import Router, { useRouter } from "next/router";
import { useQuery } from "react-query";
import { InferGetStaticPropsType } from "next/types";

// export async function getServerSideProps(context: any) {
//   try {
//     console.log("roomName");
//     const { roomName } = context.query;
//     console.log("roomName");
//     console.log(roomName);
//     let response = await fetch(
//       "http://localhost:3000/api/get-model-data?roomName=" + roomName
//     ); //http://localhost:5001/artvisity/europe-west1/getWebRoom?Room= http://localhost:3005/get-model-data?name= https://explore.artvisity.io/ar/get-model-data?name=
//     const data: Room = await response.json();
//     console.log("ddata " + data.models[0].modelName);
//     return {
//       props: { room: data },
//     };
//   } catch {
//     const data: Room = {
//       name: "Artvisity",
//       models: [],
//     };
//     if (data.models === undefined) {
//       const data: Room = {
//         name: "Artvisity",
//         models: [],
//       };
//     }
//     return {
//       props: { room: data },
//     };
//   }
// }

const IndexPage = () => {
  //InferGetStaticPropsType<typeof getServerSideProps>
  const router = useRouter();
  if (!router) return;
  const { isLoading, data, isError } = useQuery(
    ["model-data"],
    async () => {
      const { roomName } = router.query;
      let response = await fetch("/api/get-model-data?roomName=" + roomName); //http://localhost:5001/artvisity/europe-west1/getWebRoom?Room= http://localhost:3005/get-model-data?name= https://explore.artvisity.io/ar/get-model-data?name=
      const data: Room = await response.json();
      return data;
    },
    {
      enabled: router.isReady,
      // initialData: room,
    }
  );

  if (isError) {
    return (
      <div className="flex flex-col items-center">
        <Navbar2 website={data?.website} />
        <span className="text-white mt-20">Ups, something went wrong</span>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Artvisity | Explore</title>
        <meta name="description" content="AR" />
        <link rel="icon" href="/Logo_Artvisity.png" />
      </Head>
      <Navbar2 website={data?.website} />
      {/* <div>
          <div
            className={
              loadingDone ? "hidden" : "items-center justify-center py-10"
            }
          >
            <Loading />
          </div>
          <div className={loadingDone ? "" : "hidden"}>
            <MainGrid2 {...room} />
          </div>
        </div> */}
      <div>
        <div className="">
          <MainGrid2
            room={data as Room}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
