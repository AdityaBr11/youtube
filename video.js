
const detail_div=document.getElementById("video");
const tit_div=document.getElementById("tit")

const playvideo= ()=>{
    let { videoId,snippet }=JSON.parse(localStorage.getItem("clicked_item"));
    // console.log(arr);
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.width='100%';iframe.height='100%';
    iframe.setAttribute("allowfullscreen",true)

    detail_div.append(iframe)
    // console.log(snippet);
    const tilte_html=document.createElement('h3');
    tilte_html.innerText=snippet.title;
    tilte_html.style.color="white";

    let like=document.createElement('div');
    let p=document.createElement('p');
    p.innerText=`457,129 views`
    let i1=document.createElement('i');
    i1.innerText="80k";
    i1.setAttribute("class","ri-thumb-up-line");
    let i2=document.createElement('i');
    i2.innerText="DISLIKE";
    i2.setAttribute("class","ri-thumb-down-line");

    let i3=document.createElement('i');
    i3.innerText="SHARE";
    i3.setAttribute("class","ri-share-forward-line");

    let i4=document.createElement('i');
    i4.innerText="DOWNLOAD";
    i4.setAttribute("class","ri-download-line");

    let i5=document.createElement('i');
    i5.innerText="THANKS";
    i5.setAttribute("class","ri-hand-heart-line");

    let i6=document.createElement('i');
    i6.innerText="CLIP";
    i6.setAttribute("class","ri-scissors-cut-fill");

    let i7=document.createElement('i');
    i7.innerText="SAVE";
    i7.setAttribute("class","ri-menu-add-fill");

    let i8=document.createElement('i');
    i8.setAttribute("class","ri-more-fill");
    like.append(p,i1,i2,i3,i4,i5,i6,i7,i8)
    let hr=document.createElement('hr');
    hr.style.width="100%";

    let desc=document.createElement("p");
    desc.innerText=`description: ${snippet.description}`;

    tit_div.append(tilte_html,like,hr,desc);

    //show video= iframe
}



// youtube embeded data
/* <iframe width="560" height="315" src="https://www.youtube.com/embed/gQJzYOU4gOU" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe> */