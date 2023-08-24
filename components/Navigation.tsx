export const Navigation = () => {
  return (
    <>
      <ul className="md:flex items-center gap-6 hidden">
        <li className="hover:underline hover:text-orange-500 underline-offset-4 cursor-pointer">
          Collections
        </li>
        <li className="hover:underline hover:text-orange-500 underline-offset-4 cursor-pointer">
          Men
        </li>
        <li className="hover:underline hover:text-orange-500 underline-offset-4 cursor-pointer">
          Women
        </li>
        <li className="hover:underline hover:text-orange-500 underline-offset-4 cursor-pointer">
          About
        </li>
        <li className="hover:underline hover:text-orange-500 underline-offset-4 cursor-pointer">
          Contact
        </li>
      </ul>
    </>
  );
};
