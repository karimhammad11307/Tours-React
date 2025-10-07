import logo from "../assets/black.png";
function Footer() {
  return (
    <footer className="w-full bg-white text-gray-800 py-8 mt-16 border-t border-gray-200">
      <div className="w-full px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img
            src={logo}
            alt="logo"
            className="h-30 w-auto mr-4 cursor-pointer"
          />
          <div className="flex items-center mb-4 md:mb-0">
            
            <div>
              <h3 className="text-xl font-bold">Travista</h3>
              <p className="text-gray-400 text-sm">
                © 2024 All rights reserved LADEN LTD for Web Solutions
              </p>
            </div>
          </div>
          <div className="flex space-x-7 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
