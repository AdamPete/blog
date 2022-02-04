import Link from 'next/link';

export default function Pagination({ currentPage, numPage }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPage;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPage === 1) return <></>;

  return (
    <div className='mt-6'>
      <ul className='flex pl-0 list-none my-2'>
        {!isFirst && (
          <Link href={prevPage} passHref>
            <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
              Previous
            </li>
          </Link>
        )}

        {!isLast && (
          <Link href={nextPage} passHref>
            <li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
