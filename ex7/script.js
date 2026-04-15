
var chr = '';
var miss = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

window.onload = generateText;

function generateText() {
    
    for (let i = 0; i < getRandomInt(3)+1; i++) {
        chr += String.fromCharCode(97 + getRandomInt(26));
    }
    document.getElementById('ShowBox').innerHTML = chr;
}

document.addEventListener("keyup", function (event) {
    let key = event.key.toLowerCase();

    if (key.length === 1 && key >= "a" && key <= "z") {
        if (chr.length > 0 && key === chr[0]) {
            chr = chr.substring(1);
            document.getElementById("ShowBox").innerHTML = chr;
        

            if (chr.length === 0) {
                
            }
        }
        else {
            miss++;
            console.log("Missed: " + miss);
            if (miss >= 3) {
                for (let i = 0; i < 3; i++) {
                    chr += String.fromCharCode(97 + getRandomInt(26));
                }
                document.getElementById('ShowBox').innerHTML = chr;
                miss = 0;
            }
        }
        generateText();
    }
});
