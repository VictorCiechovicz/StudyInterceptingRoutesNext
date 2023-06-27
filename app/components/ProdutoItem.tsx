import Image from 'next/image'
import Link from 'next/link'

interface ProdutoItemProps {
  title: string
  url: string
}

export default function ProdutoItem({ url, title }: ProdutoItemProps) {
  return (
    <>
      <Image
        alt={title}
        src={url}
        width={300}
        height={300}
        className="w-full object-cover aspect-square rounded-md"
      />
      <div className='flex flex-col items-center'>      <div className="text-center mt-10">
        <h1 className="font-bold text-lg  uppercase">{title}</h1>
     
      </div>
      <div className="bg-blue-500 items-center flex justify-center p-1 m-2 rounded-lg">
      <Link  href={'/'}>
          Voltar
        </Link>
      </div>
      </div>

      </>
  )
}
