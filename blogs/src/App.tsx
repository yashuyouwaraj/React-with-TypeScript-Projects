import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicList from "./components/TopicList";
import TrendsList from "./components/TrendsList";
import { BlogProvider } from "./Shared/BlogContext";
import { useState } from "react";
import type { Blog } from "./types";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen,setModalOpen]=useState(false)
  const [editingBlog,setEditingBlog]=useState<Blog | null>(null)

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />
        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button onClick={openModalForNewBlog} className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4">Add New Blog<IoMdAddCircle className="ml-[.5rems]" />{" "}</button>

              {/* Article List */}
              {isModalOpen && <Modal onClose={()=>setModalOpen(false)}><BlogForm /></Modal>}

            </div>
          </section>

          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
