import React from 'react';
import HomePageContent from "./homepageContent2/HomePageContent";
import Apeintosh from "../apeintosh/Apeintosh";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage(): JSX.Element {
  // useEffect(() => AOS.init());
  useEffect(() => {
    AOS.init()
  });
  
  return (
    <>
      <Apeintosh />
      <HomePageContent />
    </>
  );
}
