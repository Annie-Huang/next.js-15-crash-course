type MockUser = {
  id: number;
  name: string;
};

const MockUsers = async () => {
  const res = await fetch('https://67b9561b51192bd378dd2712.mockapi.io/users');
  const users = await res.json();

  return (
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
  );
};

export default MockUsers;
