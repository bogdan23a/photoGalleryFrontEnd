function openNav() {
    toggleAnim();
    document.getElementById("mySidenav").style.width = "250px";
}


function closeNav() {
    toggleAnim();
    document.getElementById("mySidenav").style.width = "0";
}


function toggleAnim(){
	$('.navTrigger').toggleClass('active');
}


var isClosed = true;
function toggleMenu(){
  if(isClosed === true) {openNav(); isClosed = false;}
  else  {closeNav(); isClosed = true;}
}