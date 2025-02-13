
const Navbar: React.FC = () => {

    return (
        <nav className="flex w-screen sticky">
            <div className="w-[50%] h-12 py-5 px-8">
                <div className="w-[50%] h-12 rounded-full bg-[#FCFCFC] border border-3 border-white">
                </div>
            </div>
            <div className="w-[50%] py-5 px-8 flex gap-8">
                <div className="w-[75%] bg-[#FCFCFC] h-12 rounded-full border border-3 border-white"></div>
                <div className="w-[20%] bg-[#FCFCFC] h-12 rounded-full border border-3 border-white"></div>
            </div>
        </nav>
    );
};

export default Navbar;