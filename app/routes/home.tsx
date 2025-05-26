import type { Route } from "./+types/home";
import { Welcome, type produtosProps } from "../welcome/welcome";
import produtos from '../../produtos.json'
import { useState } from "react";
import logo from '/logo_deposito.svg'
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const produtosOrdenados = produtos.sort((produtoA, produtoB) =>
  produtoA.nome.localeCompare(produtoB.nome, 'pt-BR', { sensitivity: 'base' })
);
export default function Home() {
  const [busca, setBusca] = useState('')


  const produtosFiltrados = produtosOrdenados.filter(produto =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );
  return (
    <div className="flex flex-col justify-center items-center mt-20 bg-gray-950 text-gray-50">
      <div className="mb-10">
        <img src={logo} width={300} alt="logo deposito camargo" />
      </div>
      <div className="w-full max-w-[42rem]">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          className="border rounded px-2 py-2 w-full"
        />
      </div>
      <div className="overflow-x-auto mt-4">
        <div className="">

          <div className="flex justify-center items-center max-w-[42rem]">
            <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Código</th>
                  <th className="px-4 py-2 text-left">Nome</th>
                  <th className="px-4 py-2 text-left">Preço</th>
                </tr>
              </thead>
              <tbody>
                {produtosFiltrados.map(produto => {
                  return < Welcome key={produto.id} produto={produto} />
                }).sort()}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  );
}
