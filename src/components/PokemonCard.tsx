type Props = {
  name: string;
  image: string;
  id?: number;
};

const PokemonCard = ({ name, image, id }: Props) => {
  return (
    <>
      <div className='card bg-base-100 w-full shadow-sm hover:shadow-xl transition'>
        <div className='px-4 pt-4'>
          <figure className=' bg-gray-100  rounded-lg'>
            <img
              src={image}
              alt={name}
              className='rounded-xl h-44 object-contain'
            />
          </figure>
        </div>

        <div className='card-body items-center py-4 gap-0'>
          <h2 className='card-title capitalize'>{name}</h2>
          <p className='text-mute'>#{String(id).padStart(3, '0')}</p>
        </div>
      </div>
    </>
  );
};
export default PokemonCard;
