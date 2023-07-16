"use client";

import { ProjectKind, ProjectStatus } from "@/app/interfaces/project";
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
  Select,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from 'yup';

export default function Page() {

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      description: "",
      status: "",
      kind: "",
      link: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      image: Yup.string().required("Required").url("Must be a valid URL"),
      link: Yup.string().required("Required").url("Must be a valid URL"),
      description: Yup.string().required("Required"),
      status: Yup.string().required("Required").oneOf(Object.values(ProjectStatus)),
      kind: Yup.string().required("Required").oneOf(Object.values(ProjectKind)),
    }),
    onSubmit: async (values, { setFieldError }) => {
      const response = await fetch('/api/create', {
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
          window.location.href = `/${ADMIN}/${id}`
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
        Add new project
      </Heading>

      <form action="" method="post" onSubmit={formik.handleSubmit}>
        <VStack spacing={9} maxW={'500px'}>
          <FormControl
            id="title"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.title && formik.touched.title}
          >
            <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Title</FormLabel>
            <Input type="text" />
            <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="image"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.image && formik.touched.image}
          >
            <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Image</FormLabel>
            <Input type="text" />
            <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="link"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.link && formik.touched.link}
          >
            <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Link</FormLabel>
            <Input type="text" />
            <FormErrorMessage>{formik.errors.link}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="description"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.description && formik.touched.description}
          >
            <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Description</FormLabel>
            <Textarea />
            <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="status"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.status && formik.touched.status}
          >
            <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Status</FormLabel>
            <Select placeholder="Select option">
              <option value={ProjectStatus.COMPLETED}>Completed</option>
              <option value={ProjectStatus.ONGOING}>In progress</option>
            </Select>
            <FormErrorMessage>{formik.errors.status}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="kind"
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.kind && formik.touched.kind}
          >
            <FormLabel fontWeight={600} fontSize={'1rem'} mb={4}>Kind</FormLabel>
            <Select placeholder="Select option">
              <option value={ProjectKind.PERSONAL}>Personal</option>
              <option value={ProjectKind.PROFESSIONAL}>Work</option>
            </Select>
            <FormErrorMessage>{formik.errors.kind}</FormErrorMessage>
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
            <Link href={`/${ADMIN}`}>
              Cancel
            </Link>
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
}
