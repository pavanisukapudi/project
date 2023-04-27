function collOfImg()
{
    var allImgTag=document.images;
    for(i=0;i<allImgTag.length;i++)
    {
        allImgTag[i].src=`${i}.jpg`
    }

}
collOfImg()
function bigwindow(imgurl)
{
    document.getElementById("imgcontainer").style.backgroundImage=`url(${imgurl})`
}