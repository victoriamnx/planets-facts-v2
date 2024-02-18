export function Header() {
  return (
    <header className="flex justify-end items-center h-20 border-b border-gray">
      {" "}
      <a
        className="relative text-white text-3xl not-italic font-hairline uppercase mr-auto select-none ml-8 no-underline hover:border-none"
        href="index.html"
      >
        the planets
      </a>
      <nav>
        <ul className="flex items-center justify-end list-none m-0 p-0 overflow-hidden bg-transparent select-none mr-10 gap-[2.6rem]">
          <li className="flex items-center h-16" id="mercury">
            <a
              className="no-underline text-xs not-italic font-normal leading-6 uppercase"
              href="index.html"
            >
              mercury
            </a>
          </li>
          <li className="flex items-center h-16" id="venus">
            <a
              className="no-underline text-xs not-italic font-normal leading-6 uppercase"
              href="./pages/venus.html"
            >
              venus
            </a>
          </li>
          <li className="flex items-center h-16" id="earth">
            <a
              className="no-underline text-xs not-italic font-normal leading-6 uppercase"
              href="./pages/earth.html"
            >
              earth
            </a>
          </li>
          <li className="flex items-center h-16" id="mars">
            <a
              className="no-underline text-xs not-italic font-normal leading-6 uppercase"
              href="./pages/mars.html"
            >
              mars
            </a>
          </li>
          <li className="flex items-center h-16" id="jupiter">
            <a
              className="no-underline text-xs not-italic font-normal leading-6 uppercase"
              href="./pages/jupiter.html"
            >
              jupiter
            </a>
          </li>
          <li className="flex items-center h-16" id="saturn">
            <a
              className="no-underline text-xs not-italic font-normal leading-6 uppercase"
              href="./pages/saturn.html"
            >
              saturn
            </a>
          </li>
          <li className="flex items-center h-16" id="uranus">
            <a
              className="no-underline text-xs not-italic font-normal leading-6 uppercase"
              href="./pages/uranus.html"
            >
              uranus
            </a>
          </li>
          <li className="flex items-center h-16" id="neptune">
            <a
              className="no-underline text-xs not-italic font-normal leading-6 uppercase"
              href="./pages/neptune.html"
            >
              neptune
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
