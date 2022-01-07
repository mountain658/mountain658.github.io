function openFullscreen(id) {
  if (document.getElementById(id).requestFullscreen) {
    document.getElementById(id).requestFullscreen();
  } else if (document.getElementById(id).webkitRequestFullscreen) { 
  
    document.getElementById(id).webkitRequestFullscreen();
  } else if (document.getElementById(id).msRequestFullscreen) { 
  
    document.getElementById(id).msRequestFullscreen();
  }
}