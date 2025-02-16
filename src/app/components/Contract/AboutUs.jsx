// import { Image } from "antd";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container mt-0 mx-auto px-0 md:px-4 pb-10">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Image Collage */}
        <Image
          src="/images/aboutImg.png"
          alt="Online Learning"
          height={1200}
          width={1200}
          preview={false}
        />

        {/* Content */}

        <div className="space-y-4 px-4">
          <h2 className="text-4xl font-bold text-center">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt
            reprehenderit labore deleniti corrupti eius? Iusto, aspernatur
            laboriosam maiores neque aliquam incidunt ullam officiis
            dignissimos, velit ipsa expedita earum repudiandae et quis cumque
            eligendi provident aliquid praesentium. Et nisi impedit ipsum totam
            facere ex dolorum magni ipsa? Nostrum, asperiores quis! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Harum consequuntur
            molestias facere sapiente ut repellendus expedita, reiciendis
            beatae, quasi cumque ratione dolorum sit! Aliquam culpa repudiandae
            ad, quis accusantium necessitatibus porro aut cupiditate quod
            repellat quibusdam optio perferendis, deserunt iste alias in esse
            unde voluptatibus totam ab quidem ipsam amet deleniti. Ipsa,
            temporibus tempore voluptate doloremque eaque officiis, ut labore
            perspiciatis, architecto enim fuga. Libero quas explicabo illum hic
            magnam eum asperiores reiciendis, aspernatur fugiat ex ea sit neque
            dolorem aperiam molestiae aliquid eaque! Inventore quae rem,
            possimus repellat eaque, ea asperiores fuga, quas officiis sunt qui
            corporis numquam suscipit. Corporis deleniti officiis ipsum
            asperiores error esse distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
