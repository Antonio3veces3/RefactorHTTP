const request= require('../node_modules/postman-request');
const weather= (estado,callback)=>{
    let URLweather=`http://api.weatherstack.com/current?access_key=f9f561faa09cbbf57f719a3a484f944e&query=${estado}`;
    request(URLweather, function(error,response,body){
        if(error){
            callback("Ocurrio un error", undefined);
        }else{
            let data= JSON.parse(body);
            callback(undefined,{
                temperatura: data.current.temperature,
                clima: data.current.weather_descriptions
            })
        }
    });
}
module.exports= weather; 