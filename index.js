
const kofta=document.getElementById("kofta");
kofta.onclick=function() {
    window.open('kofta.html', '_blank');
}
const lobster=document.getElementById("lobster");
lobster.onclick=function() {
    window.open('lobster.html', '_blank');
}
const kabab=document.getElementById("kabab");
kabab.onclick=function() {
    window.open('kabab.html', '_blank');
}
const falafel=document.getElementById("falafel");
falafel.onclick=function() {
    window.open('falafel.html', '_blank');
}
const molokha=document.getElementById("molokha");
molokha.onclick=function() {
    window.open('molokha.html', '_blank');
}


//auto scroll
const scrollContainer = document.getElementById('scroll-container');

function autoScroll() {
    // Scroll the container by 200px horizontally
    scrollContainer.scrollBy({ left: scrollContainer.offsetWidth , behavior: 'smooth' });

    // If we've reached the end, reset to the start
    if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth-30) {

        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    }
}

// Run autoScroll every 5 seconds
setInterval(autoScroll, 4000);