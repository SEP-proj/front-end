import axios from 'axios'

const baseUrl = "http://192.168.0.48:8080"

export async function getClickSubject(category){
    console.log("category" + category)
    let subject = await axios.post(baseUrl+"/v1/post/recommend/subject",{
        category:category
    })


    return subject.data;
   
} 


export async function saveAll(WritingText){
  let concat=await axios.put(baseUrl+"/v1/post/concat",{
  
    id:1,
    introduction:WritingText.intro,
    body:WritingText.body,
        conclusion:WritingText.conclu
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
export async function getChatText(WritingText,chatText){
 let Chat= await axios.post(baseUrl + "/v1/post/chat/help",{
  
    introduction:WritingText.intro,
    body:WritingText.body,
    conclusion:WritingText.conclu,
    user_input:chatText
   })
return Chat.data.data.body.answer;
}
export async function getSendText(chatText){
 let Chat= await axios.post(baseUrl + "/v1/post/chat/help",{
  

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
export async function completeText(submit,bchecked){
 let Text= await axios.get(baseUrl + "/v1/post/result",{
    id:1,
    title:submit.title,
    content:submit.content,
    published:bchecked
   
   })
return Text.data;
}
export async function getCommunityList(){

return ""
}
