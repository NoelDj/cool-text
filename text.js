        document.addEventListener('DOMContentLoaded', () => {
            const h1 = document.querySelector('h1')
            const text = h1.textContent
            let n = 0
            h1.innerHTML = ''

            let arr = text.split('')
            let index = -1;
            let interval = setInterval(function() {
                arr[index++]
                const span = document.createElement('span')
                span.textContent = arr[index];

                console.log( arr[index])
                if (span.textContent == ' ') {

                    span.style.display = 'inline'
                    n++;
                    if(n==3){
                        n=0
                        const br = document.createElement('br')
                        br.classList.add('move')
                    h1.appendChild(br)
                    } else {
                        h1.appendChild(span)
                    }

                } else {
                    h1.appendChild(span)
                }

                if (index == arr.length) {
                    clearInterval(interval);
                }
            }, 150)
        })
