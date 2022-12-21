let LSdata=JSON.parse(localStorage.getItem("details"))||[];
let container_div=document.getElementById("container");
console.log(LSdata);

let appendVideos= (details)=>{
    //nature of data=array of object.
    // container_div.innerHTML=null;
    

    details.forEach( ({snippet,id})=>{
        const title=snippet.title;
        const videoId=id.videoId;
        const thumbnails=snippet.thumbnails.high.url;
        const channel_name=snippet.channelTitle;
        // console.log(title);
        // console.log(videoId);
        // console.log(thumbnails);
        // console.log(channel_name);

        const div=document.createElement('div');

        const img=document.createElement('img');
        img.src=thumbnails;
        const vdo=document.getElementById("vdo");
        vdo.src=videoId;
        const tilte_html=document.createElement('h4');
        tilte_html.innerText=title;
        const channel_html=document.createElement('h5')
        channel_html.innerText=channel_name;

        div.append(vdo,tilte_html,channel_html);
        container_div.append(div)
    })

}
appendVideos()
