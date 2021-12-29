const browseBtn = document.querySelector('.browse_button');
const realInput = document.querySelector('#image');

browseBtn.addEventListener('click',()=>{
	realInput.click();
});

function setThumbnail(event) {
	var reader = new FileReader();
	reader.onload = function (event) {
		var img = document.createElement("img");
		img.setAttribute("src", event.target.result);
		document.querySelector("div#preveiw_container").append(img);
	};
	reader.readAsDataURL(event.target.files[0]);
}

