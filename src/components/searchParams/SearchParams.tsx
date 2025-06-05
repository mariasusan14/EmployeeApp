 import { useSearchParams } from "react-router-dom";
 export const SearchParams=()=>{


 
 //const {id} =useParams()

    const[searchParams,setSearchParams]=useSearchParams();


// in the url after ?
// http://url/details?status=inactive
    function handleGetParams(){
         console.log(searchParams.get("status"));
    }
   // cannot set directly to searchParams hence we create new instance of Urlsearchparams to make a copy of search params and then set new value to newsearchparams
    function handleSetParams(){
       const newSearchParams= new URLSearchParams(searchParams);
       newSearchParams.set("status","inactive")
       setSearchParams(newSearchParams)
    }

    return(
      <>
      <button onClick={handleSetParams} >set</button>
      <button onClick={handleGetParams}>get</button>
      </>
    )
    }
