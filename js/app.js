let elements_to_watch = document.querySelectorAll('.watch');
// callback
let callback = function (items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("in-page");
        } else {
            item.target.classList.remove("in-page");
        }
    });
}
// observer
let observer = new IntersectionObserver(callback, { threshold: 0.55 });
// apply
elements_to_watch.forEach((element) => {
    observer.observe(element);
});

//carousel

function Carousel(containerID) {
    
    this.container = document.getElementById(containerID) || document.body;
    this.slides = this.container.querySelectorAll('.carousel');
    this.last = this.slides.length - 1;
    this.slide = 0;

    this.next = function () {
        this.slide === this.last ? this.slide = 0 : this.slide += 1;
        this.goto(this.slide);
    };

    this.prev = function () {
        this.slide === 0 ? this.slide = this.last : this.slide -= 1;
        this.goto(this.slide);
    };
}

function Carousel(t) { this.container = document.getElementById(t) || document.body, this.slides = this.container.querySelectorAll(".carousel"), this.last = this.slides.length - 1, this.slide = 0, this.next = function () { this.slide === this.last ? this.slide = 0 : this.slide += 1, this.goto(this.slide) }, this.prev = function () { 0 === this.slide ? this.slide = this.last : this.slide -= 1, this.goto(this.slide) }, this.play = function (t, s) { if (s ? this.prev() : this.next(), "number" == typeof t && t % 1 == 0) { var i = this; this.run = setTimeout(function () { i.play(t, s) }, t) } }, this.stop = function () { clearTimeout(this.run) }, this.goto = function (t) { if (t >= 0 && t <= this.last) { this.stop(); for (var s = 0; s <= this.last; s++)this.slides[s].style.display = s === t ? "inline-block" : "none"; return !0 } return console.log("ERROR: Carousel.GoTo(" + t + "): Index out of range 0.." + this.last), !1 }, this.goto(0) }

        var slideshow = new Carousel("blocks");