// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('got the user');
//              reject(new Error('user not logged'))
//     },2000)
// });

// promise.then(user=>{
//     console.log(user)
// }).catch(err=>{
//     console.log(err.message);
// })

//PROMISES

// console.log('start');

 


// login('ed','bumba')
// .then(user=>getUserVideos(user.email))
//  .then(videos=>videoDetails(videos[0]))
//  .then(detail=>console.log(detail));

// console.log('finish');
// const yt=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('youtibe');
//         resolve({videos:[1,3,4,5,6,]});
//     },2000)
    
// })
// const fb=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('facebool');
//         resolve({posts:['posts1','posts2']});
//     },5000)
//     })
// Promise.all([yt,fb])
// .then(result=>console.log(result));
// loginUser("ed","bumba")
// .then(user=>getUserVideos(user.email))
// .then(videos=>videoDetails(videos[0]))
// .then(detail=>console.log(detail))
function loginUser(email,password){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log('we have the data');
           resolve( {userEmail:email});
        },3000);
    })
  
}

function getUserVideos(email){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           resolve(['video1','video2','video3',])
       },2000)
   })
  
}

function videoDetails(video){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           resolve('title of the videos');
       },2000)
   })
  
}


async function displayUser(){
const loggedUser= await loginUser('ed',123);
const videos=await getUserVideos(loggedUser.userEmail);
const details=await videoDetails(videos[0]);
console.log(details);
}

displayUser();