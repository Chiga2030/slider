"use strict";
var toActiveEl, numberNewActiveEl, wrapperTranslate, transform, slider = document.querySelector(".slider"), btnRight = slider.querySelector(".btn-wrapper_right"), btnLeft = slider.querySelector(".btn-wrapper_left"), wrapper = slider.querySelector(".wrapper"), sliderInfo = slider.querySelector(".slider-info"), slides = slider.querySelectorAll(".slider__slide"), getInitTranslate = function() {
    transform = 768 < document.documentElement.clientWidth ? (wrapperTranslate = 30,
    21.8) : 425 < document.documentElement.clientWidth ? (wrapperTranslate = 0,
    48) : (wrapperTranslate = 0,
    100)
};
getInitTranslate(),
window.addEventListener("resize", function() {
    getInitTranslate(),
    setInitTranslate()
}),
btnRight.addEventListener("click", function() {
    return slideTo("right")
}),
btnLeft.addEventListener("click", function() {
    return slideTo("left")
});
var setTranslate = function(e, t) {
    e.style.transform = "translateX(".concat(t, "vw)")
}
  , newActiveEl = function(n) {
    return slides.forEach(function(e, t, r) {
        e.classList.value.indexOf("active") + 1 && (toActiveEl = "right" === n ? (numberNewActiveEl = t + 2,
        r[t + 1]) : r[(numberNewActiveEl = t) - 1])
    })
}
  , sliderInfoValue = function() {
    var n;
    return slides.forEach(function(e, t, r) {
        e.classList.value.indexOf("active") + 1 && (n = "".concat(t + 1, " / ").concat(r.length))
    }),
    n
};
sliderInfo.innerHTML = sliderInfoValue();
var slideTo = function(e) {
    var t = document.querySelector(".active");
    newActiveEl(e),
    numberNewActiveEl && numberNewActiveEl <= slides.length && ("right" === e ? wrapperTranslate -= transform : wrapperTranslate += transform),
    toActiveEl && (setTranslate(wrapper, wrapperTranslate),
    t.classList.remove("active"),
    toActiveEl.classList.add("active"),
    sliderInfo.innerHTML = sliderInfoValue())
}
  , setInitTranslate = function() {
    slides.forEach(function(e, t) {
        e.classList.value.indexOf("active") + 1 && setTranslate(wrapper, wrapperTranslate -= t * transform)
    })
};
setInitTranslate();
var toActiveEl2, numberNewActiveEl2, wrapperTranslate2, transform2, slider2 = document.querySelector(".slider-students-work"), btnRight2 = slider2.querySelector(".btn-wrapper_right"), btnLeft2 = slider2.querySelector(".btn-wrapper_left"), wrapper2 = slider2.querySelector(".wrapper"), sliderInfo2 = slider2.querySelector(".slider-info"), slides2 = slider2.querySelectorAll(".slider__slide"), getInitTranslate2 = function() {
    transform2 = 768 < document.documentElement.clientWidth ? (wrapperTranslate2 = 30,
    21.8) : 425 < document.documentElement.clientWidth ? (wrapperTranslate2 = 0,
    48) : (wrapperTranslate2 = 0,
    100)
};
getInitTranslate2(),
window.addEventListener("resize", function() {
    getInitTranslate2(),
    setInitTranslate2()
}),
btnRight2.addEventListener("click", function() {
    return slideTo2("right")
}),
btnLeft2.addEventListener("click", function() {
    return slideTo2("left")
});
var setTranslate2 = function(e, t) {
    e.style.transform = "translateX(".concat(t, "vw)")
}
  , newActiveEl2 = function(n) {
    return slides2.forEach(function(e, t, r) {
        e.classList.value.indexOf("active2") + 1 && (toActiveEl2 = "right" === n ? (numberNewActiveEl2 = t + 2,
        r[t + 1]) : r[(numberNewActiveEl2 = t) - 1])
    })
}
  , sliderInfoValue2 = function() {
    var n;
    return slides2.forEach(function(e, t, r) {
        e.classList.value.indexOf("active2") + 1 && (n = "".concat(t + 1, " / ").concat(r.length))
    }),
    n
};
sliderInfo2.innerHTML = sliderInfoValue2();
var slideTo2 = function(e) {
    var t = document.querySelector(".active2");
    newActiveEl2(e),
    numberNewActiveEl2 && numberNewActiveEl2 <= slides2.length && ("right" === e ? wrapperTranslate2 -= transform2 : wrapperTranslate2 += transform2),
    toActiveEl2 && (setTranslate2(wrapper2, wrapperTranslate2),
    t.classList.remove("active2"),
    toActiveEl2.classList.add("active2"),
    sliderInfo2.innerHTML = sliderInfoValue2())
}
  , setInitTranslate2 = function() {
    slides2.forEach(function(e, t) {
        e.classList.value.indexOf("active2") + 1 && setTranslate2(wrapper2, wrapperTranslate2 -= t * transform2)
    })
};
setInitTranslate2();
var toActiveEl3, numberNewActiveEl3, wrapperTranslate3, transform3, slider3 = document.querySelector(".slider-feedback"), btnRight3 = slider3.querySelector(".btn-wrapper_right"), btnLeft3 = slider3.querySelector(".btn-wrapper_left"), wrapper3 = slider3.querySelector(".wrapper"), sliderInfo3 = slider3.querySelector(".slider-info"), slides3 = slider3.querySelectorAll(".slider__slide"), getInitTranslate3 = function() {
    transform3 = 1800 < document.documentElement.clientWidth ? (wrapperTranslate3 = 38,
    21.8) : 768 < document.documentElement.clientWidth ? (wrapperTranslate3 = 15,
    27) : 425 < document.documentElement.clientWidth ? (wrapperTranslate3 = 0,
    48) : (wrapperTranslate3 = 0,
    100)
};
getInitTranslate3(),
window.addEventListener("resize", function() {
    getInitTranslate3(),
    setInitTranslate3()
}),
btnRight3.addEventListener("click", function() {
    return slideTo3("right")
}),
btnLeft3.addEventListener("click", function() {
    return slideTo3("left")
});
var setTranslate3 = function(e, t) {
    e.style.transform = "translateX(".concat(t, "vw)")
}
  , newActiveEl3 = function(n) {
    return slides3.forEach(function(e, t, r) {
        e.classList.value.indexOf("active3") + 1 && (toActiveEl3 = "right" === n ? (numberNewActiveEl3 = t + 2,
        r[t + 1]) : r[(numberNewActiveEl3 = t) - 1])
    })
}
  , sliderInfoValue3 = function() {
    var n;
    return slides3.forEach(function(e, t, r) {
        e.classList.value.indexOf("active3") + 1 && (n = "".concat(t + 1, " / ").concat(r.length))
    }),
    n
};
sliderInfo3.innerHTML = sliderInfoValue3();
var slideTo3 = function(e) {
    var t = document.querySelector(".active3");
    newActiveEl3(e),
    numberNewActiveEl3 && numberNewActiveEl3 <= slides3.length && ("right" === e ? wrapperTranslate3 -= transform3 : wrapperTranslate3 += transform3),
    toActiveEl3 && (setTranslate3(wrapper3, wrapperTranslate3),
    t.classList.remove("active3"),
    toActiveEl3.classList.add("active3"),
    sliderInfo3.innerHTML = sliderInfoValue3())
}
  , setInitTranslate3 = function() {
    slides3.forEach(function(e, t) {
        e.classList.value.indexOf("active3") + 1 && setTranslate3(wrapper3, wrapperTranslate3 -= t * transform3)
    })
};
setInitTranslate3();
var toActiveEl4, numberNewActiveEl4, wrapperTranslate4, transform4, slider4 = document.querySelector(".slider-result"), btnRight4 = slider4.querySelector(".btn-wrapper_right"), btnLeft4 = slider4.querySelector(".btn-wrapper_left"), wrapper4 = slider4.querySelector(".wrapper"), sliderInfo4 = slider4.querySelector(".slider-info"), slides4 = slider4.querySelectorAll(".slider__slide"), getInitTranslate4 = function() {
    transform4 = 1800 < document.documentElement.clientWidth ? (wrapperTranslate4 = 38,
    21.8) : 768 < document.documentElement.clientWidth ? (wrapperTranslate4 = 15,
    21.8) : 425 < document.documentElement.clientWidth ? (wrapperTranslate4 = 0,
    48) : (wrapperTranslate4 = 0,
    100)
};
getInitTranslate4(),
window.addEventListener("resize", function() {
    getInitTranslate4(),
    setInitTranslate4()
}),
btnRight4.addEventListener("click", function() {
    return slideTo4("right")
}),
btnLeft4.addEventListener("click", function() {
    return slideTo4("left")
});
var setTranslate4 = function(e, t) {
    e.style.transform = "translateX(".concat(t, "vw)")
}
  , newActiveEl4 = function(n) {
    return slides4.forEach(function(e, t, r) {
        e.classList.value.indexOf("active4") + 1 && (toActiveEl4 = "right" === n ? (numberNewActiveEl4 = t + 2,
        r[t + 1]) : r[(numberNewActiveEl4 = t) - 1])
    })
}
  , sliderInfoValue4 = function() {
    var n;
    return slides4.forEach(function(e, t, r) {
        e.classList.value.indexOf("active4") + 1 && (n = "".concat(t + 1, " / ").concat(r.length))
    }),
    n
};
sliderInfo4.innerHTML = sliderInfoValue4();
var slideTo4 = function(e) {
    var t = document.querySelector(".active4");
    newActiveEl4(e),
    numberNewActiveEl4 && numberNewActiveEl4 <= slides4.length && ("right" === e ? wrapperTranslate4 -= transform4 : wrapperTranslate4 += transform4),
    toActiveEl4 && (setTranslate4(wrapper4, wrapperTranslate4),
    t.classList.remove("active4"),
    toActiveEl4.classList.add("active4"),
    sliderInfo4.innerHTML = sliderInfoValue4())
}
  , setInitTranslate4 = function() {
    slides4.forEach(function(e, t) {
        e.classList.value.indexOf("active4") + 1 && setTranslate4(wrapper4, wrapperTranslate4 -= t * transform4)
    })
};
setInitTranslate4();
