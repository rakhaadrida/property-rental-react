import { useEffect, useState, type ChangeEvent } from "react";
import { Fade } from "react-awesome-reveal";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/button/Button";
import Stepper from "../components/stepper/Stepper";
import Numbering from "../components/stepper/numbering/Numbering";
import Meta from "../components/stepper/meta/Meta";
import MainContent from "../components/stepper/mainContent/MainContent";
import Controller from "../components/stepper/controller/Controller";
import Payment from "../sections/checkout/Payment";
import BookingInformation from "../sections/checkout/BookingInformation";
import Completed from "../sections/checkout/Completed";
import ItemDetails from "../../specs/itemDetails.json";

const Checkout = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    proofPayment: null as FileList | null,
    bankName: "",
    bankHolder: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: type === "file" ? files : value,
    }));
  };

  const onChangeFile = (event: {
    target: { name: string; value: FileList | null };
  }) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const checkout = {
    duration: 3,
  };

  const bookingData = {
    title: ItemDetails.name,
    country: ItemDetails.country,
    city: ItemDetails.city,
    unit: ItemDetails.unit,
    price: ItemDetails.price,
    imageId: ItemDetails.imageUrls,
  };

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInformation
          data={data}
          itemDetails={bookingData}
          checkout={checkout}
          onChange={onChange}
        />
      ),
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={data}
          itemDetails={bookingData}
          checkout={checkout}
          onChangeText={onChange}
          onChangeFile={onChangeFile}
        />
      ),
    },
    completed: {
      title: "Yay! Completed",
      description: null,
      content: <Completed />,
    },
  };

  return (
    <>
      <Navbar isCentered />
      <Stepper steps={steps} initialStep="bookingInformation">
        {({ previousStep, nextStep, currentStep, steps }) => (
          <>
            <Numbering
              data={steps}
              current={currentStep}
              style={{ marginBottom: 50 }}
            />

            <Meta data={steps} current={currentStep} />

            <MainContent data={steps} current={currentStep} />

            {currentStep === "bookingInformation" && (
              <Controller>
                {data.firstName !== "" &&
                  data.lastName !== "" &&
                  data.email !== "" &&
                  data.phone !== "" && (
                    <Fade>
                      <Button
                        className="btn mb-3"
                        type="button"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                        href=""
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isLight
                  href={`/properties/${ItemDetails._id}`}
                  style={{ width: 300, height: 50, paddingTop: 12 }}
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {currentStep === "payment" && (
              <Controller>
                {data.proofPayment &&
                  data.bankName !== "" &&
                  data.bankHolder !== "" && (
                    <Fade>
                      <Button
                        className="btn mb-3"
                        type="button"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                        href=""
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className="btn"
                  type="button"
                  isBlock
                  isLight
                  onClick={previousStep}
                  href=""
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {currentStep === "completed" && (
              <Controller>
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isPrimary
                  hasShadow
                  href="/"
                >
                  Back to Home
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
};

export default Checkout;
