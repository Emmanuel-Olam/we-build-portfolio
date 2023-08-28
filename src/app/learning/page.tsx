"use client";
import React from "react";
import { Providers } from "../providers";
import { Box } from "@chakra-ui/react";
import FirstStep from "../components/FirstStep";
import { FormProvider } from "../components/FormContext";
import { FormStep } from "../components/FormStep";

const Learning = () => {
  return (
    <>
      <Providers>
        <Box>
          <FormProvider>
            <FormStep />
          </FormProvider>
        </Box>
      </Providers>
    </>
  );
};

export default Learning;
