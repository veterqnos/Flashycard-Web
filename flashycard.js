
const q1btn3 = document.getElementById("q1btn3");
const q2btn3 = document.getElementById("q2btn3");
const resultsPar = document.getElementById("resultsPar");
const resultsLabel = document.getElementById("resultsLabel");
let points = localStorage.getItem('points');
if(points == null)
{
    points = 0;
}



if(document.URL.includes("q1.html"))
{
    q1btn3.onclick = function()
    {
        points = localStorage.getItem('points');
        points++;
        points = localStorage.setItem('points',points);
        
    }
}
if(document.URL.includes("q2.html"))
{
    q2btn3.onclick = function()
    {
        points = localStorage.getItem('points');
        points++;
        points = localStorage.setItem('points',points);
    }
}
if(document.URL.includes("results.html"))
{
    resultsLabel.textContent = points;
    points = localStorage.getItem('points');
    points = 0;
    points = localStorage.setItem('points',points);
}
if(document.URL.includes("flashycard.html"))
{
    points = localStorage.getItem('points');
    points = 0;
    points = localStorage.setItem('points',points);
}





