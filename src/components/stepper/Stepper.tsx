import { useState } from "react";

interface StepperProps {
  steps: Record<string, { title: string; description: string | null; content: React.ReactNode }>;
  initialStep?: string;
  children: (props: {
    previousStep: () => void;
    nextStep: () => void;
    currentStep: string;
    steps: Record<string, { title: string; description: string | null; content: React.ReactNode }>;
  }) => React.ReactNode;
}

const Stepper = (props: StepperProps) => {
  const { steps, initialStep } = props;
  const stepKeys = Object.keys(steps);

  const [currentStep, setCurrentStep] = useState(
    initialStep !== undefined && stepKeys.indexOf(initialStep) !== -1
      ? initialStep
      : stepKeys[0],
  );

  const totalStep = stepKeys.length;
  const indexStep = stepKeys.indexOf(currentStep);

  function previousStep() {
    if (indexStep > 0) {
      setCurrentStep(stepKeys[indexStep - 1]);
    }
  }

  function nextStep() {
    if (indexStep < totalStep - 1) {
      setCurrentStep(stepKeys[indexStep + 1]);
    }
  }

  return <>{props.children({ previousStep, nextStep, currentStep, steps })}</>;
};

export default Stepper;
