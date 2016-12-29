


var Window_Height = document.documentElement.clientHeight;
window.onwheel = function() {
    var Scroll_Height = document.documentElement.scrollHeight;
    var A_I_Top = document.getElementById('about-image').getBoundingClientRect().top;
    var A_D_Top = document.getElementById('about-description').getBoundingClientRect().top;
    var L_I_Top = document.getElementById('lays-image').getBoundingClientRect().top;
    var L_D_Top = document.getElementById('lays-description').getBoundingClientRect().top;
    if (Scroll_Height - A_I_Top >= Window_Height/32) {
        document.getElementById('about-image').classList.add('animated');
        document.getElementById('about-image').classList.add('fadeInRight');
    }
    if (Scroll_Height - A_D_Top >= Window_Height/32) {
        document.getElementById('about-description').classList.add('animated');
        document.getElementById('about-description').classList.add('fadeInLeft');
    }
    if (Scroll_Height - L_I_Top >= Window_Height/32) {
        document.getElementById('lays-image').classList.add('animated');
        document.getElementById('lays-image').classList.add('fadeInLeft');
    }
    if (Scroll_Height - L_D_Top >= Window_Height/32) {
        document.getElementById('lays-description').classList.add('animated');
        document.getElementById('lays-description').classList.add('fadeInRight');
    }
}
