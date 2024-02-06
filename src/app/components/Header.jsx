export default function Header() {
    return (
        <div className="w-screen sm:flex sm:justify-center">
            <div className="container flex flex-col items-center xl:flex-row justify-between pr-10 pl-10 pt-3 pb-3">
                <div className="flex justify-center xl:justify-normal ">
                    <img src="logo.webp" alt="Logo FESFSUS" width={264}></img>
                </div>
                <div className="hidden sm:flex">
                    <nav className="navbar flex lg:block lg:pt-4 lg:pb-4">
                        <ul className="flex gap-5 cursor-pointer">
                            <li className="text-green-700 text-center text-lg hover:underline">Início</li>
                            <li className="text-green-700 text-center text-lg hover:underline">Processos Seletivos</li>
                            <li className="text-green-700 text-center text-lg hover:underline">Transparência</li>
                            <li className="text-green-700 text-center text-lg hover:underline">Contatos</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
