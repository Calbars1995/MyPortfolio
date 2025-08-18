function openProject1()
{
    document.getElementById("project1-content").classList.add("active");
}

function closeProject1()
{
    document.getElementById("project1-content").style.display = "none";
}
//delay function that can be used later to delay things
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//delayed display of the lines in about me section
async function delayedDisplay()
{
    //loop for showing the 6 about me lines
    for (let i = 1; i < 7; i++)
    {
        document.getElementById("aboutMe" + i).style.display = "block";
        document.getElementById("aboutMeLoading").style.display = "block";
        await delay(1000);
    }
    document.getElementById("aboutMeLoading").style.display = "none";
    document.getElementById("aboutMeLoaded").style.display = "block";
}