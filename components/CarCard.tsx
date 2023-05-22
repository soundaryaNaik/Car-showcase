"use client";

import { useState } from "react";
import Image from "next/image";

import { CarCardProps } from "@types";
import { calculateCarRent } from "@utils";
import CustomButton from "./CustomButton";

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  let [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='group flex flex-col p-6 justify-center items-start text-black-400 bg-light-white-100 rounded-[24px] hover:shadow-md'>
      <h2 className='text-[22px] leading-[26px] font-bold'>
        {make.charAt(0).toUpperCase() + make.slice(1)}{" "}
        {model.charAt(0).toUpperCase() + model.slice(1)}
      </h2>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>
          /day
        </span>
      </p>

      <div className='relative w-full h-40 my-4 object-contain'>
        <Image
          src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${make}&modelFamily=${
            model.split(" ")[0]
          }&zoomType=fullscreen&modelYear=${year}`}
          alt='car model'
          fill
          priority
          className='object-contain'
        />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/steering-wheel.svg'
              width={20}
              height={20}
              alt='steering wheel'
            />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' width={20} height={20} alt='seat' />
            <p className='text-[14px] leading-[17px]'>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' width={20} height={20} alt='seat' />
            <p className='text-[14px] leading-[17px]'>{mpg} MPG</p>
          </div>
        </div>

        <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
          <CustomButton
            title='Rent Now'
            containerStyles='w-full py-[16px] rounded-lg bg-gradient-to-r from-[#5E60C1] from-[0.78%] to-[#7E80CD] to-[99.38%]'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
