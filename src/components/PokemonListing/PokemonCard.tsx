import placeholderImg from '../../assets/ditto-placeholder.png';

type Props = {
  name: string;
  image: string;
  id?: number;
};

const PokemonCard = ({ name, image, id }: Props) => {
  return (
    <>
      <div className='card bg-base-100 w-full  h-full shadow-sm hover:shadow-xl transition'>
        <div className='px-4 pt-4'>
          <figure className=' bg-gray-100  rounded-lg'>
            <img
              src={image}
              alt={name}
              loading='lazy'
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null; // prevent infinite loop
                target.src = placeholderImg;
              }}
              className='rounded-xl h-44 object-contain transition-all duration-300'
            />
          </figure>
        </div>

        <div className='card-body items-center py-4 gap-0'>
          <h2 className='card-title capitalize text-base lg:text-lg'>{name}</h2>
          <p className='text-mute'>#{String(id).padStart(3, '0')}</p>
        </div>
      </div>
    </>
  );
};
export default PokemonCard;
