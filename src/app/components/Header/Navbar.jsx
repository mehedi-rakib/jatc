// import { Link } from "react-router-dom";
import Link from "next/link";
import CustomDropdown from "../Controler/CustomDropdown.js";
const Navbar = () => {
  const Student = [
    {
      key: "1",
      label: <a href="./student-result">Student Result</a>,
    },
    {
      key: "2",
      label: <a href="./student-verify">Student Verify ID</a>,
    },
    {
      key: "3",
      label: <a href="./student-apply">Student Apply</a>,
    },
  ];
  const Course = [
    {
      key: "1",
      label: <a href="./">Long Term</a>,
    },
    {
      key: "2",
      label: <a href="./">Short Term</a>,
    },
    {
      key: "3",
      label: <a href="./">Private Lesson</a>,
    },
  ];
  const Test = [
    {
      key: "1",
      label: <a href="./">Test 1</a>,
    },
    {
      key: "2",
      label: <a href="./">Test 2</a>,
    },
    {
      key: "3",
      label: <a href="./">Test 3</a>,
    },
  ];

  return (
    <div className="flex space-x-4 text-sm font-semibold p-0">
      <Link className="nav-item" href="./">
        HOME
      </Link>
      <CustomDropdown className="nav-item" label="COURSE" items={Course} />
      <Link className="nav-item" href="./">
        SCHEDULE
      </Link>
      <Link className="nav-item" href="./notice">NOTICE</Link>
      <CustomDropdown
        className="nav-item"
        label="STUDENT INFO"
        items={Student}
      />
      <CustomDropdown className="nav-item" label="JLPT TEST" items={Test} />
      <Link className="nav-item" href="./news">
        IMPORTTENT LINKS
      </Link>
      <Link className="nav-item" href="./contact-us">
        CONTACT US
      </Link>
    </div>
  );
};

export default Navbar;
