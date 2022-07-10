<script>
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
li.forEach(el => {
    el.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});
</script>