const spans =document.querySelector('span');
spans.forEach(span => {span.addEventListener('mouseover',function(e){
    span.classList.add('animated','rubberBand');
})
    
});
spans.forEach(span => {span.addEventListener('mouseout',function(e){
    span.classList.remove('animated','rubberBand');
})
    
});
