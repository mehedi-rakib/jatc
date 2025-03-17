"use client";
import { useTranslation } from "react-i18next";
import ContactSection from "../components/Contract/ContactSection";
import ContractForm from "../components/Contract/ContractForm";

const ContractPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <ContactSection />
      <ContractForm />
    </>
  );
};

export default ContractPage;
