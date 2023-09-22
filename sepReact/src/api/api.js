import axios from 'axios'
import { request } from './apiutil';

const baseUrl = "http://192.168.0.48:8080"


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
 export function next(Subject){
  
     return request({
      url:baseUrl + "/v1/post",
      method:'post',
      body:JSON.stringify({
         title:'스포츠 복장에 대한 성차별',      
         memberId: 1
      })
     })
  
  }
 

export function saveAll(WritingText){
   return request({
      url:baseUrl+"/v1/post/concat",
      method:'put',
      body:JSON.stringify({
         id:1,
         introduction:WritingText.intro,
         body:WritingText.body,
             conclusion:WritingText.conclu
      })
   })
}

export function getChatText(WritingText,chatText){
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
         user_input:chatText
      })
   })
}
export function getChatFeedback(WritingText,chatText){
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

return request({
   url:baseUrl + "/v1/post/recommend/title",
   method:'post',
   body:JSON.stringify({

      content:submit.content
   })
})
}
export async function completeText(submit,content,bchecked){
console.log(submit.title)
console.log(content)
console.log(bchecked)
return request({
   url:baseUrl + "/v1/post/final",
   method:'put',
   body:JSON.stringify({
      id:1,
      title:submit.title,
      content:content,
      published:bchecked
   })
})
}
export async function getCommunityList(submit,bchecked){

return request({
   url:baseUrl + "/v1/post/result",
   method:'get',
   body:JSON.stringify({
      id:1,
      title:submit.title,
      content:submit.content,
      published:bchecked
   })
})
}
