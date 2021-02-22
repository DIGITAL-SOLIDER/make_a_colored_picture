function preload()
{

}
function setup()
{
    canvas = createCanvas(800,500);
    canvas.position(140,300);
    vedio = createCapture(VIDEO);
    vedio.hide();

    tint_color="";
}

function draw()
{
    image(vedio,0,0,800,500);
    tint(tint_color);
}

function filteri ()
{
    tint_color = document.getElementById("colorei").value;
}

function take_snapshot()
{
    save("colored_picture")
}