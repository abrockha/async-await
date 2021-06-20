function getRandomNumber(){
	return new Promise(function(resolve,reject){
  	setTimeout(function(){
    	resolve({result : Math.random()});
    }, 500)
  })
}

async function getResult(){
	let result = await getRandomNumber();
  console.log(result.result);
  return result
}

getResult();