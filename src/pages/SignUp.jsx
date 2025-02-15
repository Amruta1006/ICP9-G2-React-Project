
const SignUp = () => {
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md mb-1"
        />
        {errors.name && <p className="text-red-500 text-sm mb-4">{errors.name}</p>}

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md mb-1"
        />
        {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}

        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md mb-1"
        />
        {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

        <label className="block mb-2">Contact Number</label>
        <input
          type="text"
          name="contact"
          value={user.contact}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md mb-1"
        />
        {errors.contact && <p className="text-red-500 text-sm mb-4">{errors.contact}</p>}

        <label className="block mb-2">Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border px-3 py-2 rounded-md mb-4"
        />
        {image && <img src={image} alt="Profile Preview" className="w-24 h-24 rounded-full mb-4" />}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
