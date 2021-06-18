document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('alternate').addEventListener('click', () => {
        Array.prototype.forEach.call(document.querySelectorAll('tr'), (el, i) => {
            if (i % 2 == 0) {
                return null;
            }

            if (el.classList.contains('bg-dark')) {
                el.classList.remove('bg-dark')
                el.classList.remove('text-white')
                return null;
            }

            el.classList.add('bg-dark')
            el.classList.add('text-white')
        })
    })
})
