const geocodeReverse= require('./modules/geocode');
const clima= require('./modules/clima');
//Seccion 2 
let coordenada={lat: /*25.9106*/ 19.226991 ,
  lon:/*-103.5734*/ -103.697438};

geocodeReverse(coordenada,(error,dataResponse)=>{
  if(error){
      console.log('Ocurrio un error');
  }else{
      console.log("Calle: "+dataResponse.road);
      console.log("Estado: "+dataResponse.state);
      console.log("Country: "+dataResponse.country);
      let estado= dataResponse.state;
      clima(estado,(error,dataResponse)=>{
        if(error){
          console.log("Ocurrio un error");
        }else{
          console.log("Temperatura: "+dataResponse.temperatura);
          console.log("Clima: "+dataResponse.clima);
        }
      })  
    }
})

