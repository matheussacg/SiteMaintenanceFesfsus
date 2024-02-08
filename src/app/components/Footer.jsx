export default function Footer() {
    return (
        <div className="relative bottom-0 w-screen mt-8">
            <div className="bg-green-900 w-screen flex justify-center py-4">
                <div className="flex flex-col w-screen xl:w-[1342px] min-[1342px]:flex-row min-[1342px]:gap-x-5 xl:items-center min-[1342px]:h-[350px]">
                    <div className="p-4 min-[1342px]:w-1/5 flex flex-col items-center justify-center">
                        <img src="logo.webp" alt="Logo FESFSUS" width={309} height={100} className="bg-white pr-3 pl-3 pb-1 pt-1"/>
                        <p className="text-center mb-0 mt-1 text-white text-sm">Edf. Cidade do Salvador, 2° Andar - Av. Estados Unidos, 397 - Comércio, Salvador - BA, 40010-020.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-12 xl:ml-[188px] ">
                        <p className="text-center mb-0 mt-1 text-white text-lg font-semibold">Telefone: (71) 3417-3506</p>
                        <p className="text-center mb-0 mt-1 text-white text-lg font-semibold">E-mail: ascom@fesfsus.ba.gov.br</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
