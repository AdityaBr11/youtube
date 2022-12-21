let menu=document.querySelector(".ri-menu-line");
let bar=document.querySelector(".sidebar");

// let content=document.querySelector("#content")
menu.onclick= ()=>{
    bar.classList.toggle("collapse-sidebar");

    // content.classList.toggle("large-content")
}


// 1.searchVideos

// ES6
// const API_KEY='AIzaSyAUuXylaZ9VXCmTIOIdztd0oNMMTJDBIp0';
const API_KEY=`AIzaSyAZoCr9C5xkgVXUoGBwKXX6ox6xnKm9X_0`
let container_div=document.getElementById("content");

// let body=JSON.parse(localStorage.getItem("all_video"))||[]

//fetching the popular videos
async function append( ){
    try{
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=mostPopular&key=${API_KEY}`);
    let data = await res.json();
    let items = data.items;
    console.log("item:",items )
    appendVideos(items)
    
    }catch(error){
        console.log(error)
    }
}
append( )


//fetch the search videos
const  searchVideos= async () =>{
    //fetch need url
    //Yt seach videos through their id...

    try{
        const query=document.getElementById("query").value;
        const res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${API_KEY}`);
        const data= await res.json()
        // console.log(data);
        const actual_data=data.items;
        console.log(actual_data);
        appendVideos(actual_data)


    }catch(error){
        console.log('error');

    }
}
const appendVideos= (data)=>{
    //nature of data=array of object.
    container_div.innerHTML=null;
    

    data.forEach( ({snippet,id})=>{
        // console.log(ele);
        //de-Structuring .......(mimic the structure)=>we have to write instead of ele,i to(snippet,id) then we have to remove it from below.

        //wht we need?
        //videoId
        //thumbanail
        //tilte
        //channel name
        const title=snippet.title;
        const videoId=id.videoId;
        const thumbnails=snippet.thumbnails.high.url;
        const channel_name=snippet.channelTitle;
        // console.log(title);
        // console.log(videoId);
        // console.log(thumbnails);
        // console.log(channel_name);

        const div=document.createElement('div');
        div.style.cursor="pointer";


        let arr={
            videoId,
            snippet,
        }
        // console.log(arr);
        div.onclick= ()=>{
            //now we have to think wht to get when i clicked.
            // console.log(title);
            storeClickedvideo(arr)
        }


        const img=document.createElement('img');
        img.src=thumbnails;
        const tilte_html=document.createElement('h4');
        tilte_html.innerText=title;
        const channel_html=document.createElement('h5')
        channel_html.innerText=channel_name;

        div.append(img,tilte_html,channel_html);
        container_div.append(div);
    })
    // let LSdata=localStorage.setItem("all_video",JSON.stringify(data))

};
const storeClickedvideo= (arr)=>{
    // console.log('hello');
    localStorage.setItem('clicked_item',JSON.stringify(arr));
    window.location.href="video.html"

}



// let menu=document.querySelector(".ri-menu-line");
// let bar=document.querySelector(".sidebar");
// menu.onclick= ()=>{
//     bar.classList.toggle()
// }



