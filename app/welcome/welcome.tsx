export interface produtosProps {
  produto: {
    id: number,
    nome: string,
    preco: number
  }

}

export function Welcome({ produto }: produtosProps) {
  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(produto.preco)

  return (
    <tr key={produto.id} className="border-t hover:bg-gray-800">
      <td className="px-2 py-2">{produto.id}</td>
      <td className="px-2 py-2 text-xs">{produto.nome}</td>
      <td className="px-2 py-2">{precoFormatado}</td>
    </tr>
    )
}

