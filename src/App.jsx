import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const AllCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(AllCoffees);
  



  return (
    <div className='p-16 '>
      <h1 className='font-semibold text-center text-2xl mt-14'>Espresso Emporium</h1>

      <h1 className='mt-7'>All Coffee available now : {AllCoffees.length}</h1>
      {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)
      }
    </div>


  )
}

export default App
