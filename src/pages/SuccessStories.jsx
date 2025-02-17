import SuccessCard from "./SuccessCard"
import  { useState, useEffect } from "react";
function SuccessStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStories([
        {
          id: 1,
          petName: "Max",
          owner: "John Doe",
          image: "https://www.walkervillevet.com.au/wp-content/uploads/2018/05/rabbit-care-info.jpg",
          story: "Max was a wild and mischievous puppy. He found his forever home in our house!",
        },
      ]);
    }, 3000);
  }, []);
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🐾 Adoption Success Stories</h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        See how our adorable pets found their loving homes!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <SuccessCard key={story.id} story={story} />
        ))}
      </div>
      
      <div className="text-center mt-5">
        <button className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-lg text-2xl hover:bg-gray-700">
          Share Your Story
        </button>
      </div>
    </div>
  );
}

export default SuccessStories;