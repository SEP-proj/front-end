import axios from 'axios'

export async function getClickSubject(category){
    console.log("category" + category)
    let subject = await axios.post("http://192.168.0.48:8080/v1/post/recommand",{
        category:category
    })


    return subject.data;
   
} 


export async function saveAll(Intro,MainSub,Conclu){
  
   let concat=await axios.put("http://192.168.0.48:8080/v1/post/concat",{
    id:1,
    introduction:Intro,
        body:MainSub,
        conclusion:Conclu
    })
 
  return concat.data;
}
export async function saveIntro(Intro){
   let intro=await axios.put("http://192.168.0.48:8080/v1/post/introduction",{
    id:1,
    introduction:Intro
   
    })
    
  return intro.data;
}
export async function saveMainSub(MainSub){
   let main=await axios.put("http://192.168.0.48:8080/v1/post/body",{
    id:1,
   
        body:MainSub,
       
    })
    
  return main.data;
}
export async function saveConclu(Conclu){
   let conclu=await axios.put("http://192.168.0.48:8080/v1/post/conclusiont",{
    id:1,
    
   
        conclusion:Conclu
    })
    
  return conclu.data;
}


