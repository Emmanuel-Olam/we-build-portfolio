import FirstStep from "./FirstStep";
import SecondStep from './SecondStep'
import { useFormState } from "./FormContext";

export function FormStep() {
  const { step } = useFormState()

  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
      default: 
      return null
  }
}