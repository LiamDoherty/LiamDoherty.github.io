// JavaScript Document
$( document ).ready(function() {
	
	var imageElement = document.getElementById("image");
	var imageCover = document.getElementById("blackImage");
	var images = ["CTF_Payload", "Gameplay", "PackageCombo", "screenCap"];
	var currentImage = 0;
	var cycleTime = 3000;
	var altAnimation = false;
	
	fadeOutImage();
	function fadeOutImage()
	{
		imageCover.style.opacity = "0";
		if(altAnimation)
		imageCover.style.animation = "fadeImageOut 1s ease-out";
		else imageCover.style.animation = "fadeImageOutAlt 1s ease-out";
		
		altAnimation = !altAnimation;
		setTimeout(function(){cycleImages();}, 500);
	}
	
	function cycleImages()
	{
		imageElement.src = images[currentImage] + ".png";
		if(currentImage == images.length - 1)
		{
			currentImage = 0;
		}
		else
		{
			currentImage++;
		}
		setTimeout(function(){fadeOutImage();}, cycleTime);
	}
	
	
});