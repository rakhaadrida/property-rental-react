import { Fade } from "react-awesome-reveal";
import TextInput from "../../components/form/text/TextInput";
import type { ChangeEvent } from "react";

interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bankName: string;
  bankHolder: string;
  proofPayment: FileList | string | null;
}

interface BookingDetailsImageData {
  _id: string;
  url: string;
}

interface BookingDetailsData {
  title: string;
  country: string;
  city: string;
  unit: string;
  price: number;
  imageId: BookingDetailsImageData[];
}

interface CheckoutData {
  duration: number;
}

interface BookingInformationProps {
  data: BookingData;
  itemDetails?: BookingDetailsData | null;
  checkout: CheckoutData;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BookingInformation = ({
  data,
  itemDetails,
  checkout,
  onChange,
}: BookingInformationProps) => {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div
            className="col-5 py-5 checkout-booking-info"
            style={{ paddingRight: 80 }}
          >
            <Fade delay={300}>
              <div className="card" style={{ border: 0 }}>
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    className="img-cover"
                    src={itemDetails?.imageId[0].url}
                    alt={itemDetails?.title || ""}
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{itemDetails?.title}</h5>
                      <span className="text-gray-500 font-weight-light">
                        {itemDetails?.city}, {itemDetails?.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${+checkout.duration * (itemDetails?.price ?? 0)} USD
                      <span className="text-gray-500"> per </span>
                      {checkout.duration} {itemDetails?.unit}
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={300}>
              <label htmlFor="firstName" style={{ marginBottom: 8 }}>
                First Name
              </label>
              <TextInput
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={onChange}
              />

              <label htmlFor="lastName" style={{ marginBottom: 8 }}>
                Last Name
              </label>
              <TextInput
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={onChange}
              />

              <label htmlFor="email" style={{ marginBottom: 8 }}>
                Email Address
              </label>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={onChange}
              />

              <label htmlFor="phone" style={{ marginBottom: 8 }}>
                Phone Number
              </label>
              <TextInput
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default BookingInformation;
