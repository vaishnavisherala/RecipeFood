import React, { useEffect, useState } from 'react'

const Pratice = () => {
    const [items,setItem]=useState([]);
    const[loading,setLoading]=useState(false);
    useEffect(()=>{

      const fetchdata=async ()=>{
        try{
          setLoading(true)
        const response= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        const data = await response.json();
        console.log(data)
if (data.meals) {
          setItem(data.meals); // set the meals array
        }       
        }
        catch{
          alert("error fetching in items")
        }
      }
fetchdata();

    },[])
  return (
    <div>
<>
{loading ?
(items.map((item) => (
<li key={item.idMeal}>{item.strMeal} categories={item.strCategory}</li>
          ))):("no")
        
        }
</>
    
    </div>
  )
}
export default Pratice
