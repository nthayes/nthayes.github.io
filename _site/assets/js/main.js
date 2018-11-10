var basketball = document.querySelector("img");
var angle = 0, lastTime = null;

function animate(time) {
  if(lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }
  lastTime = time;
  basketball.style.top = (Math.sin(angle) * 600) + "px";
  basketball.style.left = (Math.cos(angle) * 200) + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
