const btn = document.querySelector("button");
var paragraph = document.querySelector("p");
const form = document.querySelector(".form");
const h = document.querySelector("h6");

function generate() {
    var options = "0123456789ABCDEF";
    var color = "#";    
    for (let i = 0; i < 6; i++) {
        color += options[Math.floor(Math.random() * 16)];
    }    
    paragraph.innerHTML = color;
    document.body.style.backgroundColor = color;
    form.style.boxShadow = "none";
    h.innerHTML = "Click color to copy";
    }

function copy() {
    const textarea = document.createElement("textarea");
    textarea.value = paragraph.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    Toastify({
        text: 'Copied to clipboard',
        duration: 1500, 
        gravity: 'bottom', 
        position: 'center',
        stopOnFocus:false, 
        style: {
            background: "#f5f5f5",
            color: "grey",
            borderRadius: "20px",
            opacity: "0.8",
            cursor: "auto"
          }
        
      }).showToast();
    }

    btn.addEventListener("click", generate);
    paragraph.addEventListener("click", copy);
