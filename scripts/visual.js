// Paint a small filled circle on the canvas for each key (location) in coords (randomly placed)
function drawLocations() 
{
    for (let k in coords) 
    {
        ctx.beginPath();
        let x = coords[k].x
        let y = coords[k].y
        ctx.arc(x, y, 10, 0, 6.3);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "15px Arial";
        ctx.textAlign = "center";
        ctx.fillText(k, x, y+5);
        ctx.stroke();

    }
}

function drawRoads() 
{
    for (let k of roads)
    {
        let startx = coords[k[0]].x;
        let starty = coords[k[0]].y;
        ctx.moveTo(startx,starty);

        let endx = coords[k[1]].x;
        let endy = coords[k[1]].y;
        ctx.lineTo(endx,endy);
        ctx.stroke();
    }
}

function drawPackages()
{
    let rectLength = 40;
    let rectHeight = 20;
    let rectColor = "red";
    let fontSize = rectHeight;
    let font = "Arial";
    let fontColor = "white";
    
    for (let k in coords)
    {
        for (let i = 0; i < coords[k].packages.length; i++)
        {
            let x = coords[k].x + 10;
            let y = coords[k].y + ((rectHeight + 5) * i) + 10;

            ctx.beginPath();
            ctx.fillStyle = rectColor;
            ctx.fill();
            ctx.fillRect(x,y,rectLength, rectHeight);

            ctx.font = fontSize + "px " + font;
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(coords[k].packages[i].end, x + (rectLength / 2), y + (rectHeight / 3) + fontSize / 2);

            ctx.stroke();


        }
    }
}

function reDraw()
{
    
    ctx.beginPath();
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    drawRoads();
    drawLocations();
    drawPackages();
}
