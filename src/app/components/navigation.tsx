import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className='flex justify-center items-center p-4'>
      <Link href='/' className='text-blue-500 mr-4'>
        Home
      </Link>
      <Link href='/about' className='text-blue-500 mr-4'>
        About
      </Link>
      <Link href='/products/1' className='text-blue-500 mr-4'>
        Product 1
      </Link>
    </nav>
  );
};
