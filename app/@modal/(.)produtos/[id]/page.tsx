import Modal from '@/app/components/Modal'
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

export default async function ModalProdutos({ params }: Props) {
  const produto = await getProdutosById(params.id)
  return (
    <Modal>
      <ProdutoItem {...produto} />
    </Modal>
  )
}
