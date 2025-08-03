type Props = {
  name: string;
  image: string;
};

const PokemonCard = ({ name, image }: Props) => {
  return (
    <>
      <div className='card bg-base-100 w-full shadow-sm hover:shadow-xl transition'>
        <div className='px-4 pt-4'>
          <figure className=' bg-gray-100  rounded-lg'>
            <img
              src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
              alt='Shoes'
              className='rounded-xl h-40 object-contain'
            />
          </figure>
        </div>

        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Card Title</h2>
          <p className='text-mute'>
            A card component has a figure A card component has a figure
          </p>
        </div>
      </div>
    </>
  );
};
export default PokemonCard;
