const wrapper = document.getElementById("bubleconteiner");

const Bubbleanimation = x => 
{
    if(x.clientY >= 400)
    {
        const bubble = document.createElement("div");

        bubble.className = "bubble";

        bubble.style.left = x.clientX + "px";

        wrapper.appendChild(bubble);

        setTimeout(()=>wrapper.removeChild(bubble),2000);
    }
}

window.onmousemove = e => Bubbleanimation(e);
Bubbleanimation();

function spawnbubble()
{
    const bubble = document.createElement("div");

    bubble.className = "bubble";

    bubble.style.left = Math.floor(Math.random()*window.innerWidth) + "px";
    bubble.style.width = "max(150px, 15vw)";
    bubble.style.height = "max(150px, 15vw)";

    wrapper.appendChild(bubble);

    setTimeout(()=>wrapper.removeChild(bubble),2000);

    setTimeout("spawnbubble()",50);
}