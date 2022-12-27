var fps = new FramerateLoop();

document.addEventListener('DOMContentLoaded', () => 
{
    ["cut", "copy", "paste", "contextmenu", "drag"].forEach((val) => 
    {
        document.body.addEventListener(val, (e) => e.preventDefault());
    });

    var sex = setTimeout(() => 
    {
        document.getElementById('blackTransition').style.top = "-2000px";
        clearTimeout(sex);
    }, 500);

    doFetch();
});