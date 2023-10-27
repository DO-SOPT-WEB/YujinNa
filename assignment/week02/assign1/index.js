const sec1ImgList = document.querySelectorAll(".sec1wrap img");

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
    console.log(event.target.nextElementSibling);
    const title=event.target.nextElementSibling;
    title.style.visibility="visible";
    const desc=event.target.nextElementSibling.nextElementSibling;
    desc.style.visibility="visible";
}

function removeContent(event){    
    console.log(event.target.nextElementSibling);
    const title=event.target.nextElementSibling;
    title.style.visibility="hidden";
    const desc=event.target.nextElementSibling.nextElementSibling;
    desc.style.visibility="hidden";
}





