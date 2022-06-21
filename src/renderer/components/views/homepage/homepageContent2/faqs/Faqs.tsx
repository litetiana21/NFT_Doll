import React from 'react';
import "./index.scss";
import FaqList from "./faqList/FaqList"; 
import { useMediaQuery } from "react-responsive";
export default function Faqs(): JSX.Element {
  const isMobile = useMediaQuery({ query: "(max-width:800px)" });
  return (
    <div id="faqs" className="hp-faqs" data-aos="zoom-out">
      <h1>
        Faq
        {!isMobile && (
          <>
            '<sup style={{ textTransform: "lowercase" }}>s</sup>
          </>
        )}{" "}
      </h1>
      <FaqList />
    </div>
  );
}
