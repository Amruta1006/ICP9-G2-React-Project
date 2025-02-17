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
        {
          id: 2,
          petName: "Lucy",
          owner: "Jane Smith",
          image: "https://www.tierschutzbund.de/fileadmin/_processed_/2/f/csm_Header_Hauskatze_in_Wohnung_c_Lalandrew-stock.adobe.com_dd6d2fabda.jpg",
          story: "Lucy was a shy and curious kitten. She found her home in our garden!",
        },
        {
          id: 3,
          petName: "Buddy",
          owner: "Alice Johnson",
          image: "https://t3.ftcdn.net/jpg/02/82/28/10/360_F_282281016_H1uPO6dYx5AsYLTHW5fRyDhSI2xnaYPh.jpg",
          story: "Buddy was a friendly and playful dog. He found his home in our park!",
        },
        {
          id: 4,
          petName: "Buddy",
          owner: "Alice Johnson",
          image: "https://t3.ftcdn.net/jpg/02/82/28/10/360_F_282281016_H1uPO6dYx5AsYLTHW5fRyDhSI2xnaYPh.jpg",
          story: "Buddy was a friendly and playful dog. He found his home in our park!",
        },
        {
          id: 5,
          petName: "Socks",
          owner: "Bob Brown",
          image: "https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_640.jpg",
          story: "Socks was a loving and patient cat. He found his forever home in our garden!",
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