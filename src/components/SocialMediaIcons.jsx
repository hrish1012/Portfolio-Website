const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/hrishita-barkhade/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={require("../assets/x.jpg")}  />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://twitter.com/hrishita1012"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src={require("../assets/twitter.png" )}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/hrish1012"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={require("../assets/github.png")} className="max-w-[30px]" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://instagram.com/_hrishita_1012_"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={require("../assets/instagram.png" )}/>
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;