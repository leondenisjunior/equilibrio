export default function Product({ type, name, image, description }) {
  return (
    <div className="bg-gray2 rounded-2xl h-[470px] w-[275px] p-5 flex flex-col items-center">
      <span className="text-sm text-gray mb-2">{type}</span>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <img className="h-[275px] w-full mb-2" src={image} alt={name} />
      <p className="text-sm text-left">{description}</p>
    </div>
  )
}
