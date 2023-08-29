import { useState, ReactNode, createContext, useContext, SetStateAction, Dispatch } from "react";

interface IFormData {
  firstName: string;
  otherName: string;
  gender: string;
  phone: number;
  email: string;
  age: number;
  nationality: string;
  state: string;
  people: string;
  connection:string;
  goal:string;
  addInfo: string;
} 

interface IFormContext {
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
  formData: IFormData;
  setFormData:  Dispatch<SetStateAction<IFormData>>;
}

const FormContext = createContext<IFormContext>({
  onHandleBack: () => {},
  onHandleNext: () => {},
  step: 1,
  formData: {
    firstName: "",
    otherName: "",
    gender: "",
    phone: 0,
    email: "",
    age: 0,
    nationality: "",
    state: "",
    people: "",
    connection: "",
    goal: "",
    addInfo: "",

  },
  setFormData: () => {},

});


interface IProps {
  children: ReactNode;
}


export function FormProvider({ children }: IProps) {
  const [formData, setFormData] = useState<IFormData>(
    {
      firstName: "",
      otherName: "",
      gender: "",
      phone: 0,
      email: "",
      age: 0,
      nationality: "",
      state: "",
      people: "",
      connection: "",
      goal: "",
      addInfo: "",
  
    }
  );
  const [step, setStep] = useState(1);

  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  console.log(formData)

  return (
    <FormContext.Provider
      value={{ onHandleBack, onHandleNext, step, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}