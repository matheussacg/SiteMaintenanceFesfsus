export default function Services() {
    return (
        <div className="">
            <div className="flex flex-col w-screen justify-center items-center px-4 gap-4">
                <div className="w-full container">
                    <p className="text-green-700 text-lg">Navegue pelos serviços disponíveis no momento:</p>
                </div>
                <div className="flex justify-center md:container flex-wrap gap-1 max-sm:flex-col">
                    <a className="max-sm:w-[170px] sm:px-4 h-[42px] bg-green-700 rounded-md flex justify-center items-center text-white cursor-pointer" target="_blank" href="http://fesfsus.begcloud.com:81/PortalRH/Account/Login?ReturnUrl=%2fPortalRH%2f">Portal Rh</a>
                    <a className="max-sm:w-[170px] sm:px-4 h-[42px] bg-green-700 rounded-md flex justify-center items-center text-white cursor-pointer" target="_blank" href="https://www.rhid.com.br/v2/#/login">Ponto Eletrônico</a>
                    <a className="max-sm:w-[170px] sm:px-4 h-[42px] bg-green-700 rounded-md flex justify-center items-center text-white cursor-pointer" target="_blank" href="http://helpdesk.fesfsus.ba.gov.br/">Helpdesk</a>
                    <a className="max-sm:w-[170px] sm:px-4 h-[42px] bg-green-700 rounded-md flex justify-center items-center text-white cursor-pointer" target="_blank" href="https://www.outlook.com/fesfsus.ba.gov.br">E-mail institucional</a>
                    <a className="max-sm:w-[170px] sm:px-4 h-[42px] bg-green-700 rounded-md flex justify-center items-center text-white cursor-pointer" target="_blank" href="/diarias">Solicitações de diárias</a>
                    <a className="max-sm:w-[170px] sm:px-4 h-[42px] bg-green-700 rounded-md flex justify-center items-center text-white cursor-pointer" target="_blank" href="/processos-seletivos">Processos Seletivos</a>
                    <a className="max-sm:w-[170px] sm:px-4 h-[42px] bg-green-700 rounded-md flex justify-center items-center text-white cursor-pointer" target="_blank" href="/credenciamento">Credenciamento</a>
                    <a className="max-sm:w-[170px] sm:px-4 h-[42px] bg-green-700 rounded-md flex justify-center items-center text-white cursor-pointer" target="_blank" href="/contatos">Contatos</a>
                    <a className="max-sm:w-[170px] sm:px-4 h-[42px] bg-green-700 rounded-md flex justify-center items-center text-white cursor-pointer" target="_blank" href="/transparencia">Transparência</a>
                </div>
            </div>
        </div>
    );
}
