let helper = document.getElementById('helper')

window.addEventListener('resize', () => {
    helper.innerHTML = window.innerWidth
})