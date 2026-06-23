import type { ChangeEvent } from "react";
import { Fade } from "react-awesome-reveal";
import logoBca from "../../../public/assets/images/checkout/logo_bca.png";
import logoMandiri from "../../../public/assets/images/checkout/logo_mandiri.png";
import FileInput from "../../components/form/file/FileInput";
import TextInput from "../../components/form/text/TextInput";

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

interface PaymentProps {
  data: BookingData;
  itemDetails: BookingDetailsData;
  checkout: CheckoutData;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: {
    target: { name: string; value: FileList | null };
  }) => void;
}

const Payment = ({
  data,
  itemDetails,
  checkout,
  onChangeText,
  onChangeFile,
}: PaymentProps) => {
  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <FileInput
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={onChangeFile}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <TextInput
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={onChangeText}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <TextInput
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={onChangeText}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Payment;
