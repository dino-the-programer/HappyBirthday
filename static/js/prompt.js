let Clientname = "";
let promptarr = ["Can I know your name","Please Enter your name","Please I need to know this"];
let c=1;
while (Clientname == "" || Clientname==null) {
    switch (c) {
        case 1:
            p = promptarr[0];
            break;
        case 2:
            p = promptarr[1];
            break;
        case 3:
            p = promptarr[2];
            break;
        default:
            p = "please!!";
    }
    Clientname = prompt(p);
    c++;
}

Clientname = Clientname.toLowerCase();
Clientname = Clientname.trim();
Clientname = Clientname.split(" ")[0];

document.title = document.title + " " + Clientname[0].toUpperCase() + Clientname.slice(1);
document.getElementById("heading").innerText = "Happy Birthday " + Clientname[0].toUpperCase() + Clientname.slice(1);