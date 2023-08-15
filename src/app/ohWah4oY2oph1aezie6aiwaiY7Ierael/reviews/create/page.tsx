"use client";
import { ADMIN } from "@/constant";
import {
  Box,
  Heading,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from 'yup';

export default function Page() {

  const formik = useFormik({
    initialValues: {
      name: "",
      body: "",
      image: "",
      project: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      image: Yup.string().required("Required").url("Must be a valid URL"),
      body: Yup.string().required("Required"),
      project: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setFieldError }) => {
      const response = await fetch('/api/reviews/create', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = (await response.json()) as {
        id?: string,
        errors?: {
          [key in keyof typeof values]: string
        }
      }

      if (response.ok) {
        const id = data.id;
        if (id) {
          window.location.href = `/${ADMIN}/reviews/${id}`
        }
      }

      const errors = data.errors;
      const fields = Object.keys(values) as (keyof typeof values)[];
      if (errors) {
        fields.forEach(field => {
          if (errors[field]) {
            setFieldError(field, errors[field])
          }
        })
      }
    }
  });

  return (
    <Box>
      <Heading mb={12}>
        Add new review
      </Heading>

      <form action="" method="post" onSubmit={formik.handleSubmit}>
        <VStack spacing={9} maxW={'500px'}>
          <FormControl
            id="name"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.name && formik.touched.name}
          >
            <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Name</FormLabel>
            <Input type="text" />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="body"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.body && formik.touched.body}
          >
            <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Review</FormLabel>
            <Textarea />
            <FormErrorMessage>{formik.errors.body}</FormErrorMessage>
          </FormControl>
        </VStack>

        <ButtonGroup mt={12} spacing={10}>
          <Button
            colorScheme={'blue'}
            type="submit"
            isLoading={formik.isSubmitting}
            loadingText="Submitting"
          >Save</Button>
          <Button colorScheme={'red'}>
            <Link href={`/${ADMIN}/reviews`}>
              Cancel
            </Link>
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
}
