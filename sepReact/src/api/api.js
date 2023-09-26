
import { request } from './apiutil';

const baseUrl = "http://192.168.0.189:8080"


export  function getClickSubject(category){
   console.log(category)
   return request({
      
      url:baseUrl+"/v1/post/recommend/subject",
      method:'post',
      body: JSON.stringify({
        category:category
      }) 
   })
 }
 export function next(Subject,category,memeberId){
console.log(memeberId)
let temp;
switch(category){
   case "일상" : 
   temp=  "DAILY";
      break;
  
   case "사회" : 
   temp= "SOCIETY"; break;
   case "과학" :  temp=  "SCIENCE";break;
   case "스포츠" :  temp=  "SPORTS";break;
   case "문화/예술" :  temp=  "CULTURE";break;
   case "환경" :  temp=  "ENVIRONMENT";break;
   default :  temp=  category
}
console.log(temp)
     return request({
      url:baseUrl + "/v1/post",
      method:'post',
      body:JSON.stringify({
         category:temp,
         subject:Subject,      
         memberId: memeberId
      })
     }) 
  
  }
 
  export async function recommendCategory(Subject){

   return request({
      url:baseUrl + "/v1/post/test",
      method:'post',
      body:JSON.stringify({
         
         title:Subject,      
         memberId: 1
      })
   })
   }
   
export function saveAll(WritingText,userId){
   return request({
      url:baseUrl+"/v1/post/concat",
      method:'put',
      body:JSON.stringify({
         id:userId,
         introduction:WritingText.intro,
         body:WritingText.body,
             conclusion:WritingText.conclu
      })
   })
}
export function updateSave(WritingText,userId){
   console.log(WritingText)
   console.log(userId)
   return request({
      url:baseUrl+"/v1/post/update",
      method:'put',
      body:JSON.stringify({
         id:userId,
         introduction:WritingText.intro,
         body:WritingText.body,
         conclusion:WritingText.conclu
      })
   })
}


export function getChatText(WritingText,chatText){
 console.log('api들어온',WritingText)
 console.log('api들어온',chatText)
   return request({
      url:baseUrl + '/v1/post/chat/help',
      method:'post',
      body:JSON.stringify({
         introduction:WritingText.intro,
         body:WritingText.body,
         conclusion:WritingText.conclu,
         user_input:chatText
      })
   })
}
export function getChatRobot(WritingText){
   return request({
      url:baseUrl + '/v1/post/chat/question',
      method:'post',
      body:JSON.stringify({
         introduction:WritingText.intro,
         body:WritingText.body,
         conclusion:WritingText.conclu,
 
      })
   })
}
export function getChatFeedback(submit){
   return request({
      url:baseUrl + '/v1/post/chat/feedback',
      method:'post',
      body:JSON.stringify({
         content:submit.content
      })
   })
}



export async function getSendText(chatText){
 
return request({
   url:baseUrl + "/v1/post/chat/help",
   method:'post',
   body:JSON.stringify({
user_input:chatText
   })
})
}
export async function getRecommendTitle(submit){
console.log(submit.content)
return request({
   url:baseUrl + "/v1/post/recommend/title",
   method:'post',
   body:JSON.stringify({

      content:submit.content
   })
})
}
export async function completeText(submit,content,bchecked,userId){
console.log(submit.title)
console.log(content)
console.log(bchecked)
return request({
   url:baseUrl + "/v1/post/final",
   method:'put',
   body:JSON.stringify({
      id:userId,
      title:submit.title,
      content:content,
      published:bchecked
   })
})
}
export async function getCommunityList(){

return request({
   url:baseUrl + "/v1/post/all",
   method:'get',
  
})
}
export async function getCategory(category){
   let temp;
   switch(category){
      case "일상" : 
      temp=  "DAILY";
         break;
     
      case "사회" : 
      temp= "SOCIETY"; break;
      case "과학" :  temp=  "SCIENCE";break;
      case "스포츠" :  temp=  "SPORTS";break;
      case "문화/예술" :  temp=  "CULTURE";break;
      case "환경" :  temp=  "ENVIRONMENT";break;
      default :  temp=  category
   }
return request({
   url:baseUrl + "/v1/post/category",
   method:'post',
   body:JSON.stringify({
     category:temp
   })
})
}
export async function getPostDetail(id){
  console.log(id)
return request({
   url:baseUrl + "/v1/post/"+id,
   method:'get',
 
})
}
