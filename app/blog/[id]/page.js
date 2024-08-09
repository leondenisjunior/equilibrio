export const dynamicParams = false
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

export default async function Page({ params }) {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        titulo: 'Categorias',
        descricao: 'One of your best product become more stand out',
        html: ` <p> ${params.id}
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
        ullamco cillum dolor. Voluptate exercitation incididunt aliquip
        deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla
        duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat
        irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
        exercitation incididunt aliquip deserunt. tate exercitation
        incididunt aliquip deserunt.
      </p>`,
        imagem: 'https://cademeudono3.s3.amazonaws.com/EIOS2174.png',
      })
    }, 2000)
  })
  return (
    <section className="max-w-4xl ml-auto mr-auto">
      <h1 className="text-lg text-green mb-5 mt-5">{data.titulo}</h1>
      <h2 className="text-4xl font-semibold mb-8">{data.descricao}</h2>
      <div
        className="text-xl font-normal mb-12 text-gray"
        dangerouslySetInnerHTML={{
          __html: data.html,
        }}
      />
      <img className="mb-8" src={data.imagem} alt="image" />{' '}
    </section>
  )
}
