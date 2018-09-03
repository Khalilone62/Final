var image = document.getElementById('logo');

image.onclick = function() {
    var mySrc = image.getAttribute('src');
    if(mySrc === 'images/md.jpg') {
      image.setAttribute ('src','images/mfd.jpg');
    } else {
      image.setAttribute ('src','images/md.jpg');
    }
}


function changeBackground() {

	var text=document.getElementById("para").style.BackgroundColor = "red";  
}


