console.log(document.getElementById('lipsum'));
            
$('#lipsum').fadeIn(1000);
$('#lipsum p').append('new');

//Challenge
//Style each paragraph's background color as a random color backgroundColor: rgb()
//Hint: let r = Math.floor(Math.random() * 255);
function render_rainbow(){
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function(elem) {
        elem.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    })
}