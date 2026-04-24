//document.written("Hello");
function result()
{
    let input=document.getElementById('input').value;
    document.getElementById('text').textContent=inputData;
    let changecolor=document.getElementById('text')
    changecolor.style.color="red";
    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="magenta";
} 
let para=document.getElementById('paratext');
function changeTextColor()
{
    para.style.backgroundColor='#'+Math.floor(Math.random()*1677)
}
para.addEventListener('mouseover',changeTextColor);