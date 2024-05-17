
const counts = document.querySelectorAll('.count')
const speed = 300

counts.forEach((counter) => {
   function update (){
    const target = parseInt(counter.getAttribute('data-target'))
    const count = parseInt(counter.innerHTML)
    const adds = target / speed
    console.log();
    if(count < target){
        counter.innerHTML = Math.floor(adds + count)
        setTimeout(update, 1);
    }
}
update()
});