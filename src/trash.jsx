
{ readyArr  =  this.props.news.map((element) => {

  let arrForSort = [];

  if(element.price_usd != undefined && element.name == "Bitcoin" || element.name == "Ethereum" || element.name == "Ripple" ||element.name == "Bitcoin Cash" ||element.name == "Tether" ||element.name == "Litecoin" ||element.name == "EOS" ||element.name == "Binance Coin"  || element.name == "Stellar"){

    arrForSort = arrForSort.push(element)
    
  

return arrForSort

}
  console.log(arrForSort)
  
  if(this.state.sortType == null) {
    let result = []

    {/* result = arrForSort.map((element, index) => {
      return <Item data={element} key={index}  />
    }) */}

    return result
  }


  
  else if (this.state.sortType == "name") {
     
    let result = arrForSort.sort((a,b) => {
    return b.price_usd - a.price_usd 
    })
    
    result = result.map((item,index) => {
      return (
        <Item key={index} data={item}  />
      ) 
    })
    console.log(result)
    return result
   }

   else if (this.state.sortType == "price") {
     
     let result = arrForSort.sort((a,b) => {
     return a.price_usd - b.price_usd 
     })
     console.log(result)
     result = result.map((item,index) => {
       return (
         <Item key={index} data={item}  />
       ) 
     })
     console.log(result)
     return result 

   }
   

   {/* else if (this.state.sortType == "price") {
     
     let result = arrForSort.sort((a,b) => {
     return a.price_usd - b.price_usd 
     })
     console.log(result)
     result = result.map((item,index) => {
       return (
         <Item key={index} data={item}  />
       ) 
     })
     console.log(result)
     return result  
    } */}



 
 )} 
 







{/* {this.props.news.map((element) => {
  if(element.price_usd != undefined && element.name == "Bitcoin" || element.name == "Ethereum" || element.name == "Ripple" ||element.name == "Bitcoin Cash" ||element.name == "Tether" ||element.name == "Litecoin" ||element.name == "EOS" ||element.name == "Binance Coin"  || element.name == "Stellar"){
    arrForSort.push(element)
    {console.log(this.state.sortType)}
  return <Item data={element} arrayForSort={arrForSort} />
  }
 })}  */}
