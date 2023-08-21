export const Navigation = () => {
  return (
    <>
      <ul className="md:flex items-center gap-6 hidden">
        <li className="hover:underline hover:text-orange-500 underline-offset-4">
          Collections
        </li>
        <li className="hover:underline hover:text-orange-500 underline-offset-4">Men</li>
        <li className="hover:underline hover:text-orange-500 underline-offset-4">
          Women
        </li>
        <li className="hover:underline hover:text-orange-500 underline-offset-4">
          About
        </li>
        <li className="hover:underline hover:text-orange-500 underline-offset-4">
          Contact
        </li>
      </ul>
    </>
  );
};
