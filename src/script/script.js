setTimeout(() => {

    const links = document.querySelectorAll('a');
    links.forEach(element => {
        let k = getComputedStyle(element).color;
        element.addEventListener('mouseover', () => {
            element.style.color = k;
        })
    });

    // hamma linklani o'zini rangida qoldrish!

    let navBtn = document.querySelector('.header-nav__item2');

    navBtn.addEventListener('mouseover', () => {
        navBtn.style.color = "var(--red-color)";
        navBtn.style.background = "#fff";
    });

    navBtn.addEventListener('mouseout', () => {
        navBtn.style.color = "#fff";
        navBtn.style.background = "var(--red-color)";
    });

    let slide = document.querySelectorAll('.slider-img');

    let indicator = document.querySelectorAll('.slider-indicator');
    indicator.forEach(ech => {
        ech.addEventListener('click', () => {
            for (let d = 0; d < indicator.length; d++) {
                const echEl = indicator[d];
                echEl.classList.remove('active');

            }
            if (ech === indicator[0]) {
                slide[0].classList.add('active')
                slide[0].classList.remove('active2')
                slide[0].classList.remove('active3')

                slide[1].classList.add('active2')
                slide[1].classList.remove('active')
                slide[1].classList.remove('active3')

                slide[2].classList.add('active3')
                slide[2].classList.remove('active')
                slide[2].classList.remove('active2')
            }
            else if (ech === indicator[1]) {
                slide[0].classList.add('active3')
                slide[0].classList.remove('active2')
                slide[0].classList.remove('active')

                slide[1].classList.add('active')
                slide[1].classList.remove('active2')
                slide[1].classList.remove('active3')

                slide[2].classList.add('active2')
                slide[2].classList.remove('active')
                slide[2].classList.remove('active3')
            }
            else if (ech === indicator[2]) {
                slide[0].classList.add('active2')
                slide[0].classList.remove('active3')
                slide[0].classList.remove('active')

                slide[1].classList.add('active3')
                slide[1].classList.remove('active2')
                slide[1].classList.remove('active')

                slide[2].classList.add('active')
                slide[2].classList.remove('active2')
                slide[2].classList.remove('active3')
            }
            ech.classList.add('active');

        })
    })
    const left = document.getElementById('left');
    const right = document.getElementById('right');

    let n = 1;
    left.addEventListener('click', () => {
        if (n === 0) {
            slide[0].classList.add('active')
            slide[0].classList.remove('active2')
            slide[0].classList.remove('active3')

            slide[1].classList.add('active2')
            slide[1].classList.remove('active')
            slide[1].classList.remove('active3')

            slide[2].classList.add('active3')
            slide[2].classList.remove('active')
            slide[2].classList.remove('active2')

            indicator[0].classList.add('active');
            indicator[1].classList.remove('active');
            indicator[2].classList.remove('active');


            n = 1
        }
        else if (n === 1) {
            slide[0].classList.add('active2')
            slide[0].classList.remove('active3')
            slide[0].classList.remove('active')

            slide[1].classList.add('active3')
            slide[1].classList.remove('active2')
            slide[1].classList.remove('active')

            slide[2].classList.add('active')
            slide[2].classList.remove('active2')
            slide[2].classList.remove('active3')



            indicator[2].classList.add('active');
            indicator[1].classList.remove('active');
            indicator[0].classList.remove('active');


            n = 2
        }
        else if (n === 2) {
            slide[0].classList.add('active3')
            slide[0].classList.remove('active2')
            slide[0].classList.remove('active')

            slide[1].classList.add('active')
            slide[1].classList.remove('active2')
            slide[1].classList.remove('active3')

            slide[2].classList.add('active2')
            slide[2].classList.remove('active')
            slide[2].classList.remove('active3')

            indicator[1].classList.add('active');
            indicator[0].classList.remove('active');
            indicator[2].classList.remove('active');

            n = 0
        }
    });
    right.addEventListener('click', () => {
        if (n === 0) {
            slide[0].classList.add('active')
            slide[0].classList.remove('active2')
            slide[0].classList.remove('active3')

            slide[1].classList.add('active2')
            slide[1].classList.remove('active')
            slide[1].classList.remove('active3')

            slide[2].classList.add('active3')
            slide[2].classList.remove('active')
            slide[2].classList.remove('active2')

            indicator[0].classList.add('active');
            indicator[1].classList.remove('active');
            indicator[2].classList.remove('active');


            n = 1
        }
        else if (n === 1) {
            slide[0].classList.add('active3')
            slide[0].classList.remove('active2')
            slide[0].classList.remove('active')

            slide[1].classList.add('active')
            slide[1].classList.remove('active2')
            slide[1].classList.remove('active3')

            slide[2].classList.add('active2')
            slide[2].classList.remove('active')
            slide[2].classList.remove('active3')



            indicator[1].classList.add('active');
            indicator[2].classList.remove('active');
            indicator[0].classList.remove('active');


            n = 2
        }
        else if (n === 2) {
            slide[0].classList.add('active2')
            slide[0].classList.remove('active3')
            slide[0].classList.remove('active')

            slide[1].classList.add('active3')
            slide[1].classList.remove('active2')
            slide[1].classList.remove('active')

            slide[2].classList.add('active')
            slide[2].classList.remove('active2')
            slide[2].classList.remove('active3')

            indicator[2].classList.add('active');
            indicator[1].classList.remove('active');
            indicator[0].classList.remove('active');

            n = 0
        }
    });

    const select = document.querySelectorAll('.carBrand-select'),
          disabledOption = document.querySelectorAll('#disabled-option');


    select.forEach(sel => {
        sel.addEventListener('click', () =>{
            disabledOption.forEach(disabled => {
                disabled.setAttribute('disabled', '')
            });
        })
    });

    const CarsPriceFrom = document.querySelector('.CarsPriceFrom');
    const CarsPriceTo = document.querySelector('.CarsPriceTo');
    const antSliderFrom = document.querySelector('.ant-slider-handle-1');
    const antSliderTo = document.querySelector('.ant-slider-handle-2');

    function CalcSum () {
        let PriceFrom = antSliderFrom.getAttribute('aria-valuenow');
        let PriceTo = antSliderTo.getAttribute('aria-valuenow');

        CarsPriceFrom.innerHTML = PriceFrom
        CarsPriceTo.innerHTML = PriceTo
        setTimeout(() => {
            CalcSum()
        }, 100);
    }

    CalcSum()

    const [a,b, ...c] = 'dhagdh';
    console.log(a+' '+b+' '+c);

}, 1000);


