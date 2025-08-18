//function to set theme of body to default
function defaultTheme()
{
    document.getElementById("defaultTheme").style.display = "none"; //removes default button
    document.getElementById("lightTheme").style.display = "inline-block"; //makes sure light theme button is shown
    document.getElementById("darkTheme").style.display = "inline-block"; //makes sure dark theme button is shown
    document.getElementById("blueTheme").style.display = "inline-block"; //makes sure blue theme button is shown
    document.getElementById("pageBody").classList.remove("lightTheme"); //makes sure light theme is removed
    document.getElementById("pageBody").classList.remove("darkTheme"); //makes sure dark theme is removed
    document.getElementById("pageBody").classList.remove("blueTheme"); //makes sure blue theme is removed
    //no need to add default theme as if i remove all other themes, it is the default
}

//function to set theme of body to light
function lightTheme()
{
    //each uncommented line is similar to comments above in default theme function
    document.getElementById("lightTheme").style.display = "none";
    document.getElementById("defaultTheme").style.display = "inline-block";
    document.getElementById("darkTheme").style.display = "inline-block";
    document.getElementById("blueTheme").style.display = "inline-block";  
    document.getElementById("pageBody").classList.add("lightTheme"); //need to add new appropriate theme
    document.getElementById("pageBody").classList.remove("defaultTheme");
    document.getElementById("pageBody").classList.remove("darkTheme");
    document.getElementById("pageBody").classList.remove("blueTheme");
}

//function to set theme of body to dark
function darkTheme()
{
    //each uncommented line is similar to comments above in default or light theme theme function
    document.getElementById("darkTheme").style.display = "none";
    document.getElementById("defaultTheme").style.display = "inline-block";
    document.getElementById("lightTheme").style.display = "inline-block";
    document.getElementById("blueTheme").style.display = "inline-block";
    document.getElementById("pageBody").classList.add("darkTheme");
    document.getElementById("pageBody").classList.remove("defaultTheme");
    document.getElementById("pageBody").classList.remove("lightTheme");
    document.getElementById("pageBody").classList.remove("blueTheme");
}

//function to set theme of body to blue
function blueTheme()
{
    //each uncommented line is similar to comments above in default or light theme theme function
    document.getElementById("blueTheme").style.display = "none";
    document.getElementById("defaultTheme").style.display = "inline-block";
    document.getElementById("lightTheme").style.display = "inline-block";
    document.getElementById("darkTheme").style.display = "inline-block";
    document.getElementById("pageBody").classList.add("blueTheme");
    document.getElementById("pageBody").classList.remove("defaultTheme");
    document.getElementById("pageBody").classList.remove("darkTheme");
    document.getElementById("pageBody").classList.remove("lightTheme");
}

function openProject1()
{
    document.getElementById("project1-content").classList.add("active"); //displays the project 1 "dropdown" or "window", whatever you want to call it
    document.getElementById("project1Button").style.display = "none"; //removes the project 1 button from being displayed
}

function closeProject1()
{
    document.getElementById("project1-content").classList.remove("active"); //hides the project 1 "window"
    document.getElementById("project1Button").style.display = "block"; //shows the project 1 button
    document.getElementById("project1Button").style.margin = "auto"; //aligns the project 1 button to middle otherwise it was on left side
}

//delay function that can be used later to delay things
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//delayed display of the lines in about me section
async function delayedDisplay()
{
    document.getElementById("aboutMeButton").style.display = "none"; //hides aboutMeButton
    document.getElementById("aboutMePleaseClick").style.display = "none"; //hides the line that says to click the above button
    document.getElementById("aboutMeLoading").style.display = "block"; //shows the loading more line
    //loop for showing the 6 about me lines
    for (let i = 1; i < 7; i++)
    {
        document.getElementById("aboutMe" + i).style.display = "block"; //shows the line in question
        await delay(1000); //1 second wait
    }
    document.getElementById("aboutMeLoading").style.display = "none"; //hides the more lines loading text
    document.getElementById("aboutMeLoaded").style.display = "block"; //shows that all lines are loaded
}