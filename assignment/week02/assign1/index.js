const sec1ImgList = document.querySelectorAll(".sec1wrap img");
const topBtn = document.querySelector("#top img");

sec1ImgList.forEach((img)=>{
    let title=img.getAttribute('img-title');
    let desc=img.getAttribute('img-description');
    const spantitle = document.createElement('span');
    const spandesc = document.createElement('span');
    spantitle.classList.add('title');
    spandesc.classList.add('content');
    spantitle.appendChild(document.createTextNode(title));
    spandesc.appendChild(document.createTextNode(desc));
    const wrapper=img.parentNode;

    wrapper.append(spantitle);
    wrapper.append(spandesc);
    img.addEventListener('mouseover', showContent);
    img.addEventListener('mouseout', removeContent);
    
})

function showContent(event){    
    const title=event.target.nextElementSibling;
    title.style.visibility="visible";
    const desc=event.target.nextElementSibling.nextElementSibling;
    desc.style.visibility="visible";
}

function removeContent(event){    
    const title=event.target.nextElementSibling;
    title.style.visibility="hidden";
    const desc=event.target.nextElementSibling.nextElementSibling;
    desc.style.visibility="hidden";
}

window.addEventListener('scroll', () => {
    let scrollDepth = ((window.scrollY + window.innerHeight)/document.body.scrollHeight)-0.2;
    topBtn.style.opacity=scrollDepth;
});