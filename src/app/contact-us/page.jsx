import ContactSection from "../components/Contract/ContactSection";
import ContractForm from "../components/Contract/ContractForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Call, email or visit Japan Ambition Training Center in Khilkhet, Dhaka. We answer admission and course questions within one working day.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <ContractForm />
    </>
  );
}
