function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
   var menuItems = document.getElementsByClassName('menuitems')[0];
   menuItems.addEventListener('click',function(){
      var ishidden = menuItems.classList.contains('hidden');
      if (ishidden) {
         menuItems.classList.remove('hidden');
      } else {
         menuItems.classList.add('hidden');
      }
   });
   handleViewArrow();
   window.addEventListener('scroll', function(){
      handleViewArrow();
   });
});
function scrollTop() {
   return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}
function handleViewArrow() {
   var arrow = document.getElementsByClassName('arrow')[0];
   var arrowDocker = document.getElementById('arrowdocker');
   var scrollTopBottom = ((scrollTop()??0) + window.innerHeight - (window.innerHeight/100) - arrow.offsetHeight);
   if ((window.innerHeight > arrowDocker.offsetTop) || (scrollTopBottom >= arrowDocker.offsetTop)) {
      console.log("WindowHeight:", window.innerHeight > arrowDocker.offsetTop, "ScrollTop:", (scrollTopBottom >= arrowDocker.offsetTop));
      arrow.classList.remove('detached');
   } else {
      arrow.classList.add('detached');
   }
}