"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import "../globals.css";
// import { Providers } from "../providers";
// import { Box } from "@chakra-ui/react";
import LearningFooter from "./learningFooter";
import LearnFoot from "./learnFoot";
import { useForm } from "react-hook-form";


type TFormValues = {
  firstName: string;
  otherName: string;
  gender: string;
  phone: number;
  email: string;
  age: number;
  nationality: string;
  state: string;
};

// interface formData {
//   firstName: string;
//   otherNames: string;
//   gender: string;
//   phone: number;
//   email: string;
//   age: number;
//   nationality: string;
//   state: string;
// }
const FirstStep = () => {

  const { } = useForm();
  const { register, handleSubmit } = useForm<TFormValues>();

  const onHandleFormSubmit = (data: TFormValues) => {
    console.log(data)
  };





//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     otherNames: "",
//     gender: "",
//     phone: "",
//     email: "",
//     age: 0,
//     nationality: "",
//     state: "",
//   });
  
//   const handleSaveAndContinue = () => {
//     const url ="/learn"
//     const finalData = {
//       ...formData,
//       age:formData.age.toString(),
//       otherNames:formData.otherNames.toString()
//     }
//     const params = new URLSearchParams(finalData);
//     router.push(`${url}?${params.toString()}`);
//   }
  

// console.log(formData)
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  // const handleSaveAndContinue = () => {
    
  //   router.push({
  //     pathname: "/learn",
  //     query: formData,
  //   });
  // };
  

  
  return (
    // <Providers>
      // <Box>
        <div id="#background" className="flex justify-center mt-[15px]">
          <div className=" w-[100%]">
            <div className='lg:h-screen h-[466px] bg-[url("https://res.cloudinary.com/dmye53wps/image/upload/v1692970506/learnhero_s2c0ye.svg")] shadow-[#000000] bg-cover bg-center w-full '>
              <div className="lg:max-w-7xl mx-auto w-full ">
                <div className="font-bold lg:text-[40px] text-[20px] text-shadow-[0_4px_16px_#000000] text-[#FFf] lg:w-[60%] w-[92%] lg:mx-[0px] mx-auto lg:pt-[25%] pt-[53%] ">
                  Discover a World of Opportunities With Freelancing Mastery.
                </div>
              </div>
            </div>
            <div className="lg:max-w-7xl w-[90%] mx-auto lg:flex lg:flex-col lg:justify-center mt-[15px]">
              <div className="text-[18px] lg:text-[34px] text-[#fff] font-bold lg:mx-auto">
                Personal Information
              </div>
              <form className="lg:w-[768px]"  onSubmit={handleSubmit(onHandleFormSubmit)}>
                <div className=" mt-[19px] lg:mt-[30px] mb-[11px] lg:mb-[20px] ">
                  <label
                    htmlFor="first_name"
                    className="text-[17px] lg:text-[24px] font-bold text-[#fff] lg:mx-auto"
                  >
                    FIRST NAME
                  </label>
                  <input
                    // name="firstName"
                    className="lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] mt-[8px] "
                    placeholder="Enter"
                    {...register("firstName")}
                    // onChange={handleInputChange}
                  />
                </div>
                <div className=" mt-[19px] lg:mt-[30px] mb-[11px] lg:mb-[20px] ">
                  <label
                    htmlFor="other_name"
                    className="text-[17px] lg:text-[24px] font-bold text-[#fff] lg:mx-auto"
                  >
                    OTHER NAMES
                  </label>
                  <input
                    className="lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] mt-[8px] "
                    placeholder="Enter"
                    // name="otherName"
                    type="name"
                    {...register("otherName")}
                  />
                </div>
                <div className=" mt-[19px] lg:mt-[30px] mb-[11px] lg:mb-[20px] ">
                  <label
                    htmlFor="gender"
                    className="text-[17px] lg:text-[24px] font-bold text-[#fff] lg:mx-auto"
                  >
                    GENDER
                  </label>
                  <input
                    className="lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] mt-[8px] "
                    placeholder="Enter"
                    type="name"
                    // name="gender"
                    {...register("gender")}
                    // onChange={handleInputChange}
                  />
                </div>
                <div className=" mt-[19px] lg:mt-[30px] mb-[11px] lg:mb-[20px] ">
                  <label
                    htmlFor="phone"
                    className="text-[17px] lg:text-[24px] font-bold text-[#fff] lg:mx-auto"
                  >
                    PHONE NUMBER
                  </label>
                  <input
                    className="lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] mt-[8px] "
                    placeholder="Enter"
                  />
                </div>
                <div className=" mt-[19px] lg:mt-[30px] mb-[11px] lg:mb-[20px] ">
                  <label
                    htmlFor="email"
                    className="text-[17px] lg:text-[24px] font-bold text-[#fff] lg:mx-auto"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    className="lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] mt-[8px] "
                    placeholder="Enter"
                    type="email"
                    // name="email"
                    {...register("email")}
                    // onChange={handleInputChange}
                  />
                </div>
                <div className=" mt-[19px] lg:mt-[30px] mb-[11px] lg:mb-[20px] ">
                  <label
                    htmlFor="age"
                    className="text-[17px] lg:text-[24px] font-bold text-[#fff] lg:mx-auto"
                  >
                    AGE
                  </label>
                  <input
                    className="lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] mt-[8px] "
                    placeholder="Enter"
                    type="name"
                    // name="age"
                    {...register("age")}
                    // onChange={handleInputChange}
                  />
                </div>
                <div className=" mt-[19px] lg:mt-[30px] mb-[11px] lg:mb-[20px] ">
                  <label
                    htmlFor="nationality"
                    className="text-[17px] lg:text-[24px] font-bold text-[#fff] lg:mx-auto"
                  >
                    NATIONALITY
                  </label>
                  <input
                    className="lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] mt-[8px] "
                    placeholder="Enter"
                    type="name"
                    // name="nationality"
                    {...register("nationality")}
                    // onChange={handleInputChange}
                  />
                </div>
                <div className=" mt-[19px] lg:mt-[30px] mb-[11px] lg:mb-[20px] ">
                  <label
                    htmlFor="state"
                    className="text-[17px] lg:text-[24px] font-bold text-[#fff] lg:mx-auto"
                  >
                    STATE OF RESIDENCE
                  </label>
                  <input
                    className="lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] mt-[8px] "
                    placeholder="Enter"
                    type="name"
                    // name="state"
                    {...register("state")}
                    // onChange={handleInputChange}
                  />
                </div>
                <button
                type="button"
                  className="bg-[#3E205C] lg:text-[] text-[#fff] text-[16px] font-medium mt-[18px] w-[196px] h-[46px] rounded-[10px] "
                  // onClick={handleSaveAndContinue}
                  
                >
                  Save and Continue
                </button>
              </form>
              <LearningFooter />
            </div>
            <LearnFoot />
          </div>
        </div>
      // </Box>
    // </Providers>
  );
};

export default FirstStep;
