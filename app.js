
// function otherFunc(){
//     console.log('we are in function');
//     console.log('do some stuff');
// }


// console.log('start');

// otherFunc();
// console.log('end');

// console.log('start');

//  function login(email,password,callback){
//      setTimeout(()=>{
//         console.log('we have the data');
//         callback( {userEmail:email});
//      },3000);
//  }

// function getUserVideos(email,callback){
//     setTimeout(()=>{
//         callback(['video1','video2','video3',])
//     },2000)
// }

// function videoDetails(video,callback){
//     setTimeout(()=>{
//         callback('title of the videos');
//     },2000)
// }

//  const user=login('jyabnt@gmai.com',123,user=>{
//     console.log(user);
//     getUserVideos(user,videos=>{
//         console.log(videos);
//         videoDetails(videos[0],(title)=>{
//             console.log(title)
//         })
//     })
//  });
 

// console.log('finish');

function multiply(){
    return multiply();
}

multiply();