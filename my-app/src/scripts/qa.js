let plus = document.querySelectorAll('.delivery__questions-plus')
let minus = document.querySelectorAll('.delivery__questions-minus')

plus.forEach(elem=>{
    elem.addEventListener('click', function(){
        elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
        elem.nextElementSibling.style.display = elem.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        elem.previousElementSibling.querySelector('.delivery__questions-answer').style.display = elem.previousElementSibling.querySelector('.delivery__questions-answer').style.display ==='block' ? 'none' : 'block';
    })
})

minus.forEach(elem=>{
    elem.addEventListener('click', function(){
        elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
        elem.previousElementSibling.style.display = elem.previousElementSibling.style.display === 'block' ? 'none' : 'block';
        elem.previousElementSibling.previousElementSibling.querySelector('.delivery__questions-answer').style.display = elem.previousElementSibling.previousElementSibling.querySelector('.delivery__questions-answer').style.display ==='none' ? 'block' : 'none';
        console.log(elem.previousElementSibling.previousElementSibling.querySelector('.delivery__questions-answer').style.display)
        
})
}
)