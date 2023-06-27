import ProdutoItem from '@/app/components/ProdutoItem'

async function getProdutosById(produtoId: string) {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${produtoId}`
  )
  const data = await request.json()
  return data
}

interface Props {
  params: {
    id: string
  }
}

export default async function Produtos({ params }: Props) {
  const produto = await getProdutosById(params.id)
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-500">
        <ProdutoItem {...produto} />
      </div>
    </div>
  )
}
