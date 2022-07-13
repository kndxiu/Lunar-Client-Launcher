const indicator = document.getElementById("indicator");
const more = document.getElementById("more");
let servers = document.querySelectorAll(".servers .server");

document.addEventListener("mousemove", (e) => {
    let mx = event.clientX;
    let my = event.clientY;

    let width = window.innerWidth;

    if(mx + 30 > width - 250){
        indicator.style.top = my + "px";
        indicator.style.right = width - mx + 30 + "px";
        indicator.style.left = null; 
    }
    else{
        indicator.style.top = my + "px";
        indicator.style.left = mx + 30 + "px";
        indicator.style.right = null;
    }
})

servers.forEach(server => {
    server.addEventListener("mouseover", (e) => {
        indicator.innerHTML = '<div class="indicator_icon"><span class="iconify" data-icon="fa-solid:gamepad"></span></div>\n' +
        '<div class="indicator_server">'+ e.target.getAttribute("data-name") +'<br>Click to launch into the game!</div>'
        indicator.style.opacity = "1";
        indicator.style.visibility = "visible";
    })

    server.addEventListener("mouseout", () => {
        indicator.style.opacity = "0";
        indicator.style.visibility = "hidden";
    })
})

more.addEventListener("mouseover", (e) => {
    indicator.innerHTML = '<div class="indicator_icon"><span class="iconify" data-icon="clarity:settings-solid"></span></div>\n' +
    '<div class="indicator_server">Click to view launch options</div>'
    indicator.style.opacity = "1";
    indicator.style.visibility = "visible";
})

more.addEventListener("mouseout", () => {
    indicator.style.opacity = "0";
    indicator.style.visibility = "hidden";
})