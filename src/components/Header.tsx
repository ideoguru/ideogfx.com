const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <a href="/">
        <img src="/logo.png" alt="Ideogfx Logo" className="h-12" />
      </a>
  
      {/* Centered Navigation */}
      <nav className="hidden md:flex flex-grow items-center justify-center bg-gray-100 px-8 py-2 rounded-full shadow-md space-x-8">
        <a href="#who-we-are" className="text-gray-800 hover:text-purple-600 font-medium">
          Who We Are
        </a>
        <a href="#what-we-do" className="text-gray-800 hover:text-purple-600 font-medium">
          What We Do
        </a>
        <a href="#insights" className="text-gray-800 hover:text-purple-600 font-medium">
          Insights
        </a>
        <a href="#get-in-touch" className="text-gray-800 hover:text-purple-600 font-medium">
          Get In Touch
        </a>
      </nav>
    </div>
  </header>
  );
};

export default Header;
