"use client";
import RootLayout from "src/app/components/Layout/RootLayout";
import { useParams } from "next/navigation";
import Test1 from "src/app/components/Test/Test1";
import Test2 from "src/app/components/Test/Test2";
import Test3 from "src/app/components/Test/Test3";
import Test4 from "src/app/components/Test/Test4";

const TestPage = () => {
  const params = useParams();
  const id = params?.id || "";
  const Test = () => {
    switch (id) {
      case "1":
        return <Test1 />;
      case "2":
        return <Test2 />;
      case "3":
        return <Test3 />;
      case "4":
        return <Test4 />;

      default:
        return <h1>Loading.....</h1>;
    }
  };
  return <div>{Test()}</div>;
};

export default TestPage;
TestPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
