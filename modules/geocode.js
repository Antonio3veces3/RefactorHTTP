const request= require('../node_modules/postman-request');
const geocodeReverse=(coordenada,callback)=>{
    let urlLatLon=`https://us1.locationiq.com/v1/reverse.php?key=pk.fbf42ca576ba46626be6c1582a7a8ff3&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;
    request(urlLatLon, function (error, response, body) {
        if (error){
            //todo lo que necesite para reportar el error
            // tenemos dos partes en callback (error, dataResponse)
            callback('Ocurrio un error',undefined);
        }else{
            let data=JSON.parse(body);
            callback(undefined,{
                road:data.address.road,
                state:data.address.state,
                country: data.address.country
            })
        }
    });
}
module.exports=geocodeReverse;
