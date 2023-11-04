const sec1ImgList = document.querySelectorAll(".sec1wrap img");
const topBtn = document.querySelector("#top img");

sec1ImgList.forEach((img)=>{
    let title=img.getAttribute('img-title');
    let desc=img.getAttribute('img-description');
    const divtitle = document.createElement('div');
    const divdesc = document.createElement('div');
    divtitle.classList.add('title');
    divdesc.classList.add('content');
    divtitle.appendChild(document.createTextNode(title));
    divdesc.appendChild(document.createTextNode(desc));
    const wrapper=img.parentNode;

    wrapper.append(divtitle);
    wrapper.append(divdesc);
    wrapper.addEventListener('mouseover', showContent);
    wrapper.addEventListener('mouseout', removeContent);

    if(desc.length>39){
        const showMoreBtn = document.createElement('input');
        showMoreBtn.setAttribute('type','button');
        showMoreBtn.setAttribute('value','더보기');
        showMoreBtn.classList.add('showMoreBtn');
        showMoreBtn.addEventListener('click',showMoreDescription);
        wrapper.appendChild(showMoreBtn);
    }
    
})

function showContent(event){    
    const children=Array.from(event.target.parentElement.children);
    children.forEach(child=>{
        if(child.hasAttribute('alt')){
            child.style.filter="brightness(0.5)"
        }else if(child.getAttribute('class')=="content"){
            child.style.overflow="hidden";
            child.style.textOverflow="ellipsis";
            child.style.visibility="visible";
        }else{
            child.style.visibility="visible";
        }
    })
    
}

function removeContent(event){    
    const children=Array.from(event.target.parentElement.children);
    children.forEach(child=>{
        if(child.hasAttribute('alt'))
            child.style.filter="none";
        else if(child.getAttribute('class')=="content"){
            child.style.overflow="unset";
            child.style.textOverflow="unset";
            child.style.visibility="hidden";
        }
        else
            child.style.visibility="hidden";
    })
}

function showMoreDescription(event){
    const desc=event.target.previousElementSibling;
    const img=desc.previousElementSibling.previousElementSibling;
    desc.style.overflow="unset";
    desc.style.textOverflow="unset";
    img.style.filter="brightness(0.5)";

    event.target.style.visibility="hidden";


}

window.addEventListener('scroll', () => {
    let scrollDepth = ((window.scrollY + window.innerHeight)/document.body.scrollHeight)-0.2;
    topBtn.style.opacity=scrollDepth;
});