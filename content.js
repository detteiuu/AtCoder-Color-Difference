window.addEventListener("load", function() {
    if (document.getElementById("history") != null) {
        let tbody = document.getElementById("history").children[1];

        for (let i=0; i<tbody.childElementCount; i++) {
            let diff = tbody.children[i].children[5];
            let text = diff.textContent;
            if (text.length >= 2) {
                let num = parseInt(text.slice(1));
                if (text.charAt(0) == "+" | text.charAt(0) == "±") {
                    if (num < 50) {
                        diff.style.backgroundColor = "#ececb2";
                    } else {
                        diff.style.backgroundColor = "#ffd9b2";
                    }
                    diff.style.fontWeight = "bold";
                    if (text.charAt(0) == "+") {
                        diff.style.color = "red";
                        diff.textContent = text + " ⇧";
                    } else {
                        diff.textContent = text + " ⇨";
                    }
                } else if (text.charAt(0) == "-") {
                    if (num < 50) {
                        diff.style.backgroundColor = "#b2ecec";
                    } else {
                        diff.style.backgroundColor = "#b2b2ff";
                    }
                    diff.style.fontWeight = "bold";
                    diff.style.color = "blue";
                    diff.textContent = text + " ⇩";
                }
            }
        }
    }
});