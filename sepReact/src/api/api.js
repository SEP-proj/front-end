import axios from 'axios'

const baseUrl = "http://192.168.0.189:8080"

export async function getClickSubject(category){
    console.log("category" + category)
    let subject = await axios.post(baseUrl+"/v1/post/recommend/subject",{
        category:category
    })


    return subject.data;
   
} 


export async function saveAll(Intro,MainSub,Conclu){
  
   let concat=await axios.put(baseUrl+"/v1/post/concat",{
    id:1,
    introduction:Intro,
        body:MainSub,
        conclusion:Conclu
    })
 
  return concat.data;
}
export async function saveIntro(Intro){
   let intro=await axios.put(baseUrl+"/v1/post/introduction",{
    id:1,
    introduction:Intro
   
    })
    
  return intro.data;
}
export async function saveMainSub(MainSub){
   let main=await axios.put(baseUrl+"/v1/post/body",{
    id:1,
   
        body:MainSub,
       
    })
    
  return main.data;
}
export async function saveConclu(Conclu){
   let conclu=await axios.put(baseUrl+"/v1/post/conclusiont",{
    id:1,
    
   
        conclusion:Conclu
    })
    
  return conclu.data;
}


export async function next(Subject){
  await axios.post(baseUrl + "/v1/post",{
       title:Subject,
       category:"SOCIETY",
       memberId: 1
   })

}
export async function getChatText(Intro,MainSub,Conclu,chatText){
 let Chat= await axios.post(baseUrl + "/v1/post/chat/help",{
  
    introduction:Intro,
    body:MainSub,
    conclusion:Conclu,
    user_input:chatText
   })
return Chat.data.data.body.answer;
}
export async function getRecommendTitle(){
 let Title= await axios.get(baseUrl + "/v1/post/recommend/title",{
    title:""
   
   })
return Title.data;
}
