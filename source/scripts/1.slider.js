"use strict";




var toActiveEl5, numberNewActiveEl5, wrapperTranslate5, transform5, slider5 = document.querySelector(".slider-curator"), btnRight5 = slider5.querySelector(".btn-wrapper_right"), btnLeft5 = slider5.querySelector(".btn-wrapper_left"), wrapper5 = slider5.querySelector(".wrapper"), sliderInfo5 = slider5.querySelector(".slider-info"), slides5 = slider5.querySelectorAll(".slider__slide"),

getInitTranslate5 = function() {
        transform5 = 980 < document.documentElement.clientWidth ? (wrapperTranslate5 = 10,
        21.8) : 480 < document.documentElement.clientWidth ? (wrapperTranslate5 = 0,
        48) : (wrapperTranslate5 = 0,
        100)
    };


getInitTranslate5(),
window.addEventListener("resize", function() {
    getInitTranslate5(),
    setInitTranslate5()
}),
btnRight5.addEventListener("click", function() {
    return newSlideTo("right")
}),
btnLeft5.addEventListener("click", function() {
    return newSlideTo("left")
});
var setTranslate5 = function(e, t) {
    e.style.transform = "translateX(".concat(t, "vw)")
}
  , newActiveEl5 = function(n) {
    return slides5.forEach(function(e, t, r) {
        e.classList.value.indexOf("active5") + 1 && (toActiveEl5 = "right" === n ? (numberNewActiveEl5 = t + 2,
        r[t + 1]) : r[(numberNewActiveEl5 = t) - 1])
    })
}
  , sliderInfoValue5 = function() {
    var n;
    return slides5.forEach(function(e, t, r) {
        e.classList.value.indexOf("active5") + 1 && (n = "".concat(t + 1, " / ").concat(r.length))
    }),
    n
};
sliderInfo5.innerHTML = sliderInfoValue5();
var slideTo5 = function(e) {
    var t = document.querySelector(".active5");
    newActiveEl5(e),
    numberNewActiveEl5 && numberNewActiveEl5 <= slides5.length && ("right" === e ? wrapperTranslate5 -= transform5 : wrapperTranslate5 += transform5),
    toActiveEl5 && (setTranslate5(wrapper5, wrapperTranslate5),
    t.classList.remove("active5"),
    toActiveEl5.classList.add("active5"),
    sliderInfo5.innerHTML = sliderInfoValue5())
}
  , setInitTranslate5 = function() {
    slides5.forEach(function(e, t) {
        e.classList.value.indexOf("active5") + 1 && setTranslate5(wrapper5, wrapperTranslate5 -= t * transform5)
    })
};
setInitTranslate5();
