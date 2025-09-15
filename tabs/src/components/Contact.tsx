import { FaTwitter, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const links = [
    {
      href: "https://twitter.com/@huxnwebdev",
      label: "Twitter",
      icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
    },
    {
      href: "https://youtube.com/@huxnwebdev",
      label: "YouTube",
      icon: <FaYoutube className="h-6 w-6 text-red-600" />,
    },
    {
      href: "https://github.com/HuXn-WebDev",
      label: "GitHub",
      icon: <FaGithub className="h-6 w-6 text-gray-900" />,
    },
    {
      href: "https://instagram.com/huxnshorts",
      label: "Instagram",
      icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ml-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 sm">Contact Me</h2>
        <div className="flex items-center">
            {links.map(link=>(
                <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]">
                    {link.icon}
                    <span className="text-lg">{link.label}</span>    
                </a>
            ))}
        </div>
    </section>
  );
};

export default Contact;