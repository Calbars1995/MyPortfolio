function openProject1()
{
    document.getElementById("project1-content").classList.add("active");
}

function closeProject1()
{
    document.getElementById("project1-content").style.display = "none";
}
async function delayedDisplay()
{
    for (let i = 0; i < 7; i++)
    {
        document.getElementById("aboutMe" = i).style.display = "block";
        await delay(1000);
        i++;
    }
    
}