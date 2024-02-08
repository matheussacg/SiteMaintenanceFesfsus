import Footer from "../components/Footer";
import Header from "../components/Header";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export default async function ProcessosSeletivos() {
    const data = await getData()

    return (
        <>
            <Header />
                <div className=" flex flex-col items-center justify-center">
                    <h1 className="text-center mt-10 font-bold text-xl text-green-800">Processos Seletivos</h1>
                    <ul className="text-center mt-10">
                        {data.map((todo) => (
                            <li className="p-2 border-y-2" key={todo.id}> {todo.title} </li>
                        ))}
                    </ul>
                </div>
            <Footer />
        </>
    );

}
