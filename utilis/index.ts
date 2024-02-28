
export async function fetchCars() {
  const headers = {
  
      "X-RapidAPI-Key": "c71440e67dmshace1fb3f5bfd548p173f7ejsn6f864a5c6637",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    }
    const response = await fetch( "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {headers: headers,}
    )
 
const result = await response.json();
return result;
 
}
