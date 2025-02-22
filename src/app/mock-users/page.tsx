type MockUser = {
  id: number;
  name: string;
};

const MockUsers = async () => {
  const res = await fetch('https://67b9561b51192bd378dd2712.mockapi.io/users');
  const users = await res.json();

  return (
    <div className='py-10'>
      <form className='mb-4'>
        <input
          type='text'
          name='name'
          required
          className='p-2 mr-2 border border-gray-300 rounded text-gray-700'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Add User
        </button>
      </form>
      <div className='grid grid-cols-4 gap-4 '>
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className='p-4 bg-white shadow-md rounded-lg text-gray-700'
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockUsers;
