import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-44 bg-red mt-50">
      <div className="w-5/6 mx-auto pt-5">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-black">
            Hrishita Barkhade
          </p>
          <p className="font-playfair text-md text-black">
            ©2023 Hrishita. All Rights Reserved.

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
