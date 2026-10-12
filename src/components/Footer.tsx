import logoText from "../assets/logo-text.png";
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 text-center lg:text-left">
            <img
              src={logoText}
              alt="logo-text"
              className="h-8 mx-auto lg:mx-0"
            />
            <p className="mt-4 text-sm text-gray-500 leading-relaxed lg:mx-0">
              Curated tools, technologies, and resources for developers building
              modern software
            </p>
            <div className="mt-6 flex justify-between lg:justify-start gap-6 text-sm text-gray-700">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold tracking-wider text-gray-900">
              PRODUCT
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </ul>
          </div>
          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold tracking-wider text-gray-900">
              COMPANY
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </ul>
          </div>
          <div className="hidden lg:block">
            <h3>LEGAL</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;