import React from "react";
import Image from "next/image";
import twitt from "../asset/twitt.png";
import instagram from "../asset/instagram.svg";
import arrow from "../asset/arrow.svg";
import Link from "next/link";

const LearningFooter = () => {
  return (
    <>
      <div className="lg:max-w-7xl w-[90%] mx-auto lg:flex lg:flex-col lg:justify-center mt-[50px]">
        <div className="text-center text-[16px] font-medium text-[#fff] ">
          Follow us in social media
        </div>
        <div className="flex justify-center mt-[20px]">
          <div>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.6059 1.0188H2.39625C1.63552 1.0188 1.01883 1.63549 1.01883 2.39622V24.6058C1.01883 25.3666 1.63552 25.9833 2.39625 25.9833H24.6059C25.3666 25.9833 25.9833 25.3666 25.9833 24.6058V2.39622C25.9833 1.63549 25.3666 1.0188 24.6059 1.0188Z"
                fill="#3D5A98"
              />
              <path
                d="M18.2419 25.9812V16.3139H21.4861L21.9713 12.5466H18.2419V10.1419C18.2419 9.05133 18.5456 8.30672 20.1087 8.30672H22.1041V4.93172C21.1379 4.83101 20.1668 4.78313 19.1953 4.78828C16.3223 4.78828 14.3438 6.53906 14.3438 9.76851V12.5466H11.0995V16.3139H14.3438V25.9812H18.2419Z"
                fill="white"
              />
            </svg>
          </div>
          <Image
            src={twitt}
            alt="icon"
            className="w-[25px] h-[25px] mx-[15px]"
          />
          <Image src={instagram} alt="icon" className="" />
        </div>
        <Link href="#background">
          <div className="w-[26px] h-[26px] bg-[#3B1D59] ml-auto mr-[0px] mb-[17px]">
            <Image src={arrow} alt="icon" className="" />
          </div>
        </Link>
      </div>
      
    </>
  );
};

export default LearningFooter;
