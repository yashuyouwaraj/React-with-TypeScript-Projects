import { MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";

type Blog = {
  title: string;
  author: string;
  likes: number;
  comments: number;
};

const PopularBlogs: React.FC = () => {
  const blogs: Blog[] = [
    {
      title: "How Much Should I Spend on Ecom?",
      author: "Jordan",
      likes: 142,
      comments: 44,
    },
    {
      title: "Ecom: What Real Customers Have to Say",
      author: "John",
      likes: 153,
      comments: 25,
    },
    {
      title: "What Do the Best Ecoms Look Like?",
      author: "HuXn",
      likes: 50,
      comments: 14,
    },
  ];

  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, idx) => (
          <li key={idx} className="mb-4">
            <div className="flex justify-between items-center">
                <span className="font-bold mb-2">{blog.title}</span>
            </div>
            <span className="text-gray-600">Publish by {blog.author}</span>
            <div className="flex items-center mt-2">
                <ThumbsUp size={16} />
                <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
                
                <MessageCircle size={16} />
                <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
