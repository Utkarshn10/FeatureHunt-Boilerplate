import Image from "next/image";
import { Inter } from "next/font/google";
import InfoCards from "@/components/InfoCards";
import getRandomFeatureObject from "../../utils/randomFeatureGenerator";

export default function Home() {
  const randomFeatures = getRandomFeatureObject();
  const handleUpvoteClick = () =>{

  }
  
  return (
    <main className="min-h-screen flex justify-center">
      <li className="flex flex-col space-y-4 w-4/5">
      {Object.values(randomFeatures).map((featureInfo,index) => {
        return (
          <ul key={index}>
            <InfoCards props={featureInfo} />
          </ul>
        );
      })}
      </li>
    </main>
  );
}
