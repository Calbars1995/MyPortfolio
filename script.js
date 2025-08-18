function defaultTheme()
{
    document.getElementById("defaultTheme").style.display = "none";
    document.getElementById("lightTheme").style.display = "inline-block";
    document.getElementById("darkTheme").style.display = "inline-block";
    document.getElementById("blueTheme").style.display = "inline-block";
    document.getElementById("pageBody").classList.remove("lightTheme");
    document.getElementById("pageBody").classList.remove("darkTheme");
    document.getElementById("pageBody").classList.remove("blueTheme");

}

function lightTheme()
{
    document.getElementById("lightTheme").style.display = "none";
    document.getElementById("defaultTheme").style.display = "inline-block";
    document.getElementById("darkTheme").style.display = "inline-block";
    document.getElementById("blueTheme").style.display = "inline-block";  
    document.getElementById("pageBody").classList.add("lightTheme");
}

function darkTheme()
{
    document.getElementById("darkTheme").style.display = "none";
    document.getElementById("defaultTheme").style.display = "inline-block";
    document.getElementById("lightTheme").style.display = "inline-block";
    document.getElementById("blueTheme").style.display = "inline-block";
    document.getElementById("pageBody").classList.add("darkTheme");
}

function blueTheme()
{
    document.getElementById("blueTheme").style.display = "none";
    document.getElementById("defaultTheme").style.display = "inline-block";
    document.getElementById("lightTheme").style.display = "inline-block";
    document.getElementById("darkTheme").style.display = "inline-block";
    document.getElementById("pageBody").classList.add("blueTheme");
}

function openProject1()
{
    document.getElementById("project1-content").classList.add("active");
    document.getElementById("project1Button").style.display = "none";
}

function closeProject1()
{
    document.getElementById("project1-content").classList.remove("active");
    document.getElementById("project1Button").style.display = "block";
    document.getElementById("project1Button").style.margin = "auto";
}

//delay function that can be used later to delay things
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//delayed display of the lines in about me section
async function delayedDisplay()
{
    document.getElementById("aboutMeButton").style.display = "none";
    document.getElementById("aboutMePleaseClick").style.display = "none";
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