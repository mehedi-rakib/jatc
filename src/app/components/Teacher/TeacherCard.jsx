import { Card } from "antd";
const { Meta } = Card;

const golamMTitle = "Md Golam Kibria Bhuiyan";
const golamMDesc = "Managing Director";
const golamImgSrc = "/images/golam-kibria.png";

const chMTitle = "Md Abul Khair Bhuiyan";
const chMDesc = "Chairman";
const chImgSrc = "/images/chairman.png";

const bhMTitle = "Md Baharul Alam Bonny";
const bhMDesc = "Director of Administration";
const bhImgSrc = "/images/baharul.png";
const TeacherCard = () => (
  //space-y-4
  <div className=" md:flex  justify-center items-center gap-8">
    <Card
      hoverable
      //mobile full width
      // style={{
      //   width: 240,
      // }}
      className="my-10 w-full"
      cover={<img alt={chMTitle} src={chImgSrc} />}>
      <Meta title={chMTitle} description={chMDesc} />
    </Card>
    <Card
      hoverable
      className="my-10 md:my-0 w-full"
      // className="w-[240px] md:w-full px-2"
      cover={<img alt={golamMTitle} src={golamImgSrc} />}>
      <Meta title={golamMTitle} description={golamMDesc} />
    </Card>
    <Card
      hoverable
      className="my-10 w-full"
      cover={<img alt={bhMTitle} src={bhImgSrc} />}>
      <Meta title={bhMTitle} description={bhMDesc} />
    </Card>
    <Card
      hoverable
      className="my-10 w-full"
      cover={<img alt="Md Salahuddin" src="/images/salahuddin.png" />}>
      <Meta title="Md Salahuddin" description="Director of Administration" />
    </Card>
  </div>
);
export default TeacherCard;
