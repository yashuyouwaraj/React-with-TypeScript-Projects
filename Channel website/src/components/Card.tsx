interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card = ({title,description,image,link}:CardProps) => {
  return (
    <div className="max-w-sm m-[1rem] bg-[#1A1C1E] rounded-lg shadow-md overflow-hidden mx-18">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 flex-col ">
            <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
            <p className="text-gray-400 mb-4">{description}</p>
            <a href={link} className="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-600 hover:text-white transition duration-200  ">Lean More</a>
        </div>
    </div>
  )
}

export default Card