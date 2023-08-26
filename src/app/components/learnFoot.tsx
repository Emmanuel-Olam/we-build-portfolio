import Image from "next/image";
import copyright from "../asset/copyright.svg";

const LearnFoot = () => {
  return (
    <>
    <div className="bg-[#000000] w-[100%] flex justify-center ">
        <div className="mt-[9px] mb-[7px]">
          <div className="flex">
            <Image src={copyright} alt="icon" />
            <div className="text-[13px] ml-[5px]">Copyright 2023 All Rights Reserved by</div>
          </div>
          <div className="text-[13px] font-bold">Future Users Building Agency (FUBA)</div>
        </div>
      </div>
    </>
  )
}

export default LearnFoot