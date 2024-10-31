import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil
            illo nam quas ex ut delectus nisi quae quidem magnam, cupiditate
            commodi, autem quibusdam suscipit nesciunt. Perspiciatis non, dicta
            fugit voluptatum obcaecati animi! Repudiandae accusantium dolore, a
            quisquam veniam aperiam voluptas perspiciatis excepturi. Neque eos
            porro accusamus provident asperiores ipsam!
          </p>
          <p>
            Since our inception, we have been dedicated to delivering top-notch
            products and services to our valued customers. We take pride in our
            commitment to excellence and strive to exceed expectations in every
            aspect of our business.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to provide our customers with the highest quality
            products and services at an unbeatable price. We are committed to
            making a positive impact on the lives of our customers through our
            commitment to quality and customer satisfaction.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulosly selsect and vet each product to ensure quality and
            authenticity.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly and efficient interfaces, you can shop at
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is always ready to assist you in
            any way possible.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
