import Card from './Card';

export default function Cards({characters, onClose}) {

   return(
      <div>
      {characters.map((elemt) => {
      return <Card
         key={elemt.id}
         name={elemt.name}
         species={elemt.species}
         gender={elemt.gender}
         image={elemt.image}
         onClose={() => onClose(elemt.id)}
         id={elemt.id}
      />})}
      </div>
   )
   
}
