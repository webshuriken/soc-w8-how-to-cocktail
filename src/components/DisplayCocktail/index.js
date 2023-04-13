import Image from '../Image';
import IngredientList from '../IngredientTable';
import Instructions from '../Instructions'


function DisplayCocktail({cocktail}) {
  const {name, isAlcoholic, glass, thumbnail, instructions, ingredients} = cocktail;

  return (
    <section>
      <header className='flex'>
        <div className='relative border-t-2 border-r-2 border-l-2 border-cocktail-fuchsia-100 rounded-t-lg shadow-cocktail-fuchsia overflow-hidden'>
          <span className='block absolute -inset-0 rounded-t-md shadow-inner-cocktail-fuchsia' aria-hidden="true"></span>
          <h1 className='relative p-2 text-white text-shadow-cocktail-fuchsia-neon'>
            {name}
          </h1>
        </div>
      </header>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='relative w-full max-w-[420px] md:w-1/3 border-2 border-cocktail-fuchsia-100 rounded-b-lg rounded-tr-lg p-4 shadow-cocktail-fuchsia overflow-hidden'>
          <span className='block absolute -inset-0 rounded-b-md rounded-tr-md shadow-inner-cocktail-fuchsia' aria-hidden="true"></span>
          <Image className="" 
            src={thumbnail} />
        </div>
        <div className='flex flex-col gap-4 md:w-2/3 text-white'>
          <div className='relative border-2 border-cocktail-fuchsia-100 rounded-lg p-4 shadow-cocktail-fuchsia overflow-hidden'>
          <span className='block absolute -inset-0 rounded-md shadow-inner-cocktail-fuchsia' aria-hidden="true"></span>
            {/* TODO: IMPLEMENT THE LOGIC TO DISPLAY THE INGREDIENTS */}
            <h3 className='text-shadow-cocktail-fuchsia-neon font-bold'>Ingredients</h3>
            <IngredientList ingredients={ingredients} />
          </div>
          <div className='relative border-2 border-cocktail-fuchsia-100 rounded-lg p-4 shadow-cocktail-fuchsia overflow-hidden'>
            <span className='block absolute -inset-0 rounded-md shadow-inner-cocktail-fuchsia' aria-hidden="true"></span> 
            <h3 className='text-shadow-cocktail-fuchsia-neon font-bold'>Instructions</h3>
            <Instructions instructions={instructions} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DisplayCocktail;