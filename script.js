function openProject1()
{
    document.getElementById("project1-content").classList.add("active");
}

function closeProject1()
{
    document.getElementById("project1-content").style.display = "none";
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayedDisplay()
{
    for (let i = 1; i < 7; i++)
    {
        document.getElementById("aboutMe" + i).style.display = "block";
        document.getElementById("aboutMeLoading").style.display = "block";
        await delay(1000);
    }
}