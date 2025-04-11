import { useState, useRef } from 'react'
import './App.css'

function App() {
  // State to store profile data
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  // Reference for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first file if available
    if (file) {
      setImageUrl(URL.createObjectURL(file)); // Create a URL for the image and store it in state
    }
  };

  // Trigger file input when profile image is clicked
  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-100 p-6 rounded-xl w-96 h-auto">
        {/* Profile image input */}
        <div className="rounded-full w-24 h-24 mb-4 hover:opacity-80 flex justify-center mx-auto bg-gray-200 overflow-hidden">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
        
          <div 
            onClick={handleProfileImageClick}
            className="w-full h-full cursor-pointer"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full text-gray-400">
                <span className="text-2xl">+</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Name input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none sm:w-80 md:w-96"
          />
        </div>
        
        {/* Bio textarea */}
        <div className="mb-6">
          <textarea
            rows={3}
            placeholder="Write a short bio about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none sm:w-80 md:w-96"
          ></textarea>
        </div>

        {/* Save Changes Button */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
