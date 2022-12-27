var shuffle = 
[
    "isn't it like the " + Math.floor(Math.random() * 1000) + "th time already???",
    "shits gonna take 10 years to be fixed",
    "placeholder",
    "changelog: its broken",
    "this shit takin me 2 whole days",
    "soon...",
    "Luis Padriqueee",
    "Como vamos a perder contra Marruecos",
    "No soy xenofobo",
    "Haxe code ported to JS what???",
    "helppppppp",
    "might do a custom rest api",
    "i hate this so much",
    "15/12",
    "4/1",
    "sorry for not having an https cert",
    "Coming from CutsceneHandler.hx from Psych Engine",
    "i did all of this before making actual online services",
    "about to get doxxed lmao",
    "give me ideas on what the fuck should i add here",
    "another placeholder",
    "ran out of ideas",
    "why is http not compatible on https",
    "fuck security man",
    "took me months to build this page",
    "i lost all of my progress thanks to codespaces retention limit",
    "this is even better actually",
    "i want to feel loved",
    "the fuck",
    "how did it break now",
    "maybe the fetch url is broken",
    "this error was hardcoded actually",
    "thanks ngrok",
    "might need something better eventually",
    "empty"
];

var transitioning = false;

function showOffline(errorText) 
{
    var timedHandler = new TimedEvents(fps);
    timedHandler.endTime = 30;
    document.getElementById('online').style.display = "none";
    var mainDiv = document.getElementById('notonline');
    mainDiv.style.cssText = "display: flex;";

    timedHandler.finishCallback = () =>
    {
        document.body.addEventListener('keydown', (e) =>
        {
            if (e.key == "r")
            {
                if (transitioning) return;

                transitioning = true;
                obj4.style.opacity = 0;
                obj4.style.top = "-30px";
                var fuck = setInterval(() =>
                {
                    obj4.innerText = shuffle[Math.floor(Math.random() * shuffle.length)];
                    obj4.style.top = "0px";
                    obj4.style.opacity = 1;
                    transitioning = false;
                    clearInterval(fuck);
                }, 1000);
            }
        });
    }

    var obj1 = timedHandler.createObject("text1", "h1", "Oopsies", "animatedText");
    var obj2 = timedHandler.createObject("text2", "h2", "Seems like I messed up", "animatedText");
    var obj3 = timedHandler.createObject("text3", "h3", "The server isn't working right now, sorry", "animatedText");
    var obj4 = timedHandler.createObject("text4", "p", shuffle[Math.floor(Math.random() * shuffle.length)], "animatedText");
    var obj5 = timedHandler.createObject("text5", "p", errorText, "animatedTFixed");

    timedHandler.timer(0, function()
    {
        mainDiv.appendChild(obj1);
        obj1.style.zIndex = 5;

        mainDiv.appendChild(obj2);
        obj2.style.zIndex = 4;
        obj2.style.top = "-10px";

        mainDiv.appendChild(obj3);
        obj3.style.zIndex = 3;
        obj3.style.top = "-20px";

        mainDiv.appendChild(obj4);
        obj4.style.zIndex = 2;
        obj4.style.top = "-30px";

        mainDiv.appendChild(obj5);
        obj5.style.zIndex = 1;
        obj5.style.top = "-10px";
    });

    timedHandler.timer(4, function () 
    {
        obj1.style.opacity = 1;
    });

    timedHandler.timer(10, function () 
    {
        obj2.style.top = "0px";
        obj2.style.opacity = 1;
    });

    timedHandler.timer(14, function () 
    {
        obj3.style.top = "0px";
        obj3.style.opacity = 1;
    });

    timedHandler.timer(25, function ()
    {
        obj4.style.top = "0px";
        obj4.style.opacity = 1;
    });

    timedHandler.timer(30, function ()
    {
        obj5.style.top = "0px";
        obj5.style.opacity = 0.5;
    });
}