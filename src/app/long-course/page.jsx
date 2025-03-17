'use client';
import { useTranslation } from "react-i18next";
import Long from "../components/Course/Long";

const LongCourse = () => {
    const { t } = useTranslation();
    return ( <Long /> );
}
 
export default LongCourse;