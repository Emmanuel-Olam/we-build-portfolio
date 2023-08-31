"use client";

import Image from "next/image";
import uparrow from '../asset/uparrow.svg'
import React, { useState} from "react";
import "../globals.css";
import { Providers } from "../providers";
import { Box } from "@chakra-ui/react";
import LearningFooter from "./learningFooter";
import LearnFoot from "./learnFoot";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import transporter from "./mailer";

const people = [
  { course: 'Upwork Free Class' },
  {course: 'Upwork Paid Mentorship' },
]
const connection = [
  { connect: 'From a Friend'},
  { connect: 'From Instagram'},
  { connect: 'From Whatsapp'},
  { connect: 'Others'}

]

type TFormValues = {
  course: string;
  people: string;
  connection:string;
  goal:string;
  addInfo: string;
}

const SecondStep = () => {
  // const router = useRouter();

  const {  setFormData, formData } = useFormState(); 
  const [isCreated, setCreated] = useState(false);
  const [selected, setSelected] = useState(people[0])
  const [selectConnect, setSelectConnect] = useState(connection[0])

  const { register, handleSubmit } = useForm<TFormValues>(
    {defaultValues: formData}
  );
  const onHandleFormSubmit = async (data: TFormValues) => {
    // console.log(data)
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setCreated(true);

     // Prepare the email content
     const emailContent = `
     FIRST NAME: ${formData.firstName}
     OTHER NAMES: ${formData.otherName}
     GENDER: ${formData.gender}
     PHONE NUMBER: ${formData.phone}
     EMAIL ADDRESS:  ${formData.email}
     AGE:  ${formData.age}
     NATIONALITY: ${formData.nationality}
     STATE OF RESIDENCE: ${formData.state}
     COURSE: ${selected.course}
     How did you hear about FUBA: ${selectConnect.connect}
     GOAL OF FREELANCING: ${data.goal}
     ADDITIONAL INFORMATION: ${data.addInfo}
   `;
console.log(emailContent)
    // Send the data to the API route
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailContent }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setCreated(true);
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    isCreated ? (
    <div>
      <h1>Form submitted Successfully</h1>
      {/* <pre>{JSON.stringify(formData)}</pre> */}
    </div>) : 
    <>
      {/* <Providers>
        <Box> */}
          <div className="flex justify-center mt-[35px]">
            <div className=" w-[100%]">
              <div className='lg:h-screen h-[466px] bg-[url("https://res.cloudinary.com/dmye53wps/image/upload/v1693050439/reghero_yhm1pe.png")] shadow-[#000000] bg-cover bg-center w-full '>
                <div className="lg:max-w-7xl mx-auto w-full ">
                  <div className="font-bold lg:text-[40px] text-[20px] text-shadow-[0_4px_16px_#000000] text-[#FFf] lg:w-[60%] w-[92%] lg:mx-[0px] mx-auto lg:pt-[25%] pt-[53%] ">
                    Welcome to a World of Financial Freedom.
                  </div>
                </div>
              </div>
              <div className="lg:max-w-7xl w-[90%] mx-auto lg:flex lg:flex-col lg:justify-center mt-[15px]">
                <div className="text-[18px] lg:text-[34px] text-[#fff] font-bold lg:mx-auto">
                  Registration Info.
                </div>
                <form onSubmit={handleSubmit(onHandleFormSubmit)} className="mx-auto flex flex-col">
                  <div className="mt-[19px] flex flex-col">
                    <Listbox {...register("course")} onChange={setSelected}>
                      <div className="relative mt-[2.25rem] flex flex-col">
                        <label htmlFor="other_name" className='text-[17px] lg:text-[24px] font-bold text-[#fff]'>SELECT  COURSE</label>
                        <Listbox.Button className="relative lg:w-[485px] w-full mt-[8px] lg:h-[48px] cursor-default rounded-lg bg-none py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] z-30" >
                          <span className="block truncate">
                            {selected.course}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <Image src={uparrow} alt='icon' />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in z-40 duration-100"
                          leaveFrom="opacity-100 z-40"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                            {people.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-amber-100 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={person}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {person.course}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        {/* <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        /> */}
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                  <div className="mt-[19px] flex flex-col">
                    <Listbox {...register("connection")} onChange={setSelectConnect}>
                      <div className="relative mt-[2.25rem] flex flex-col">
                        <label htmlFor="other_name" className='text-[17px] lg:text-[24px] font-bold text-[#fff]'>HOW DID YOU HEAR ABOUT FUBA?</label>
                        <Listbox.Button className="relative w-full cursor-default mt-[8px] rounded-lg bg-none py-2 pl-3 pr-10 text-left  bg-none py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm lg:w-[372px] w-[337px] h-[33px] pl-[16px] rounded-[5px] border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] z-20">
                          <span className="block truncate z-20">
                            {selectConnect.connect}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <Image src={uparrow} alt='icon' />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100 z-20"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                            {connection.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-amber-100 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={person}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {person.connect}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                  <div className="mt-[19px] flex flex-col">
                  <label htmlFor="other" className='text-[17px] lg:text-[24px] font-bold text-[#fff] '>WHAT IS YOUR GOAL OF FREELANCING?</label>
                  <textarea placeholder="Type..." {...register("goal")} className="lg:w-[485px] w-[337px] lg:h-[48px]  h-[106px] mt-[8px] rounded-[5px] border shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] bg-[#0000] pt-[9px] pl-[15px] mt-[10px] " id="message" />
                  </div>
                  <div className="mt-[19px] flex flex-col">
                  <label htmlFor="other" className='text-[17px] lg:text-[24px] font-bold text-[#fff] '>ADDITIONAL INFORMATION</label>
                  <textarea placeholder="Type..." {...register("addInfo")} className="lg:w-[485px] w-[337px] lg:h-[48px] mt-[8px] h-[106px] rounded-[5px] border shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-[#A09CB9] bg-[#0000] focus:ring-[#0000] bg-[#0000] pt-[9px] pl-[15px] mt-[10px] " id="message" />
                  </div>
                  <div className="mt-[19px] mb-[17px]">
                  <input type="checkbox" id="checkbox" className="black"/>
                  <label htmlFor="checkbox" className="text-[11px] ml-[6px]">I hereby agree to the terms of service</label>
                  </div>
                  <button type="submit" className='bg-[#3E205C] lg:text-[] text-[#fff] text-[16px] font-medium mt-[18px] w-[196px] h-[46px] rounded-[10px] '>Submit</button>
                </form>
                <LearningFooter />
              </div>
              <LearnFoot />
            </div>
          </div>
        {/* </Box>
      </Providers> */}
    </>
  );
};

export default SecondStep;
