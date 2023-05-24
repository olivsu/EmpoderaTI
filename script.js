const SCROLL_OFFSET = 200;
const ACTIVE_SCROLL_CSS_CLASS = 'active';

const $sections = [...document.querySelectorAll('[data-scroll]')];
const $linksToScroll = [...document.querySelectorAll('[data-scroll-to]')];

function desactiveAllElements() {
    $linksToScroll.forEach(($link) => (
        $link.classList.remove(ACTIVE_SCROLL_CSS_CLASS)
    ));
}

function activeElement(dataScroll) {
    const $linkFound = $linksToScroll
        .find(($link) => $link.getAttribute('data-scroll-to') === dataScroll);

    desactiveAllElements();

    $linkFound.classList.add(ACTIVE_SCROLL_CSS_CLASS);
}

function handleScrollTo(event) {
    event.preventDefault();

    const dataScroll = event.currentTarget.getAttribute('data-scroll-to');
    const $section = document.querySelector(`[data-scroll="${dataScroll}"]`);

    if (!$section) {
        return;
    }

    $section.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function handleScroll() {
    $sections.forEach(($section) => {
        const sectionTop = $section.offsetTop - SCROLL_OFFSET;

        if (scrollY >= sectionTop) {
            const dataScroll = $section.getAttribute('data-scroll');

            activeElement(dataScroll);
        }
    });
}

$linksToScroll.forEach(($element) => {
    $element.addEventListener('click', handleScrollTo);
});

window.addEventListener('scroll', handleScroll);

// menu hamburger

$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})

// Arcodeon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}   