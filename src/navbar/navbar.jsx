import navbarBg from "../assets/navbar/bg-navbar.png";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center w-screen navbar fixed top-0 mt-2">
      <div
        style={{ backgroundImage: `url(${navbarBg})`, backgroundSize: "cover" }}
        className="flex flex-row justify-between w-[500px] border box-shadow rounded-full p-1 text-black bg-white navFont text-[18px]"
      >
        <div className="cursor-pointer  hover:scale-125 transition-transform duration-300">
          Biquínis
        </div>
        <div className="cursor-pointer  hover:scale-125 transition-transform duration-300">
          Maiôs
        </div>
        <div className="cursor-pointer  hover:scale-125 transition-transform duration-300">
          Saídas de praia
        </div>
        <div className="cursor-pointer  hover:scale-125 transition-transform duration-300">
          Acessórios
        </div>
        
      </div>
    </div>
  );
}


