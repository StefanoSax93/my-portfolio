//carousel

const slides = [
    {
        title: 'Boolzapp',
        image: 'files/boolzapp.png',
        text: 'This non-responsive project is inspired to whatsapp. Here you can search for your contacts and send them messages',
        demoLink:'https://stefanosax93.github.io/vue-boolzapp/',
        codeLink:'https://github.com/StefanoSax93/vue-boolzapp'
    }, 
    {
        title: 'Boolflix',
        image: 'files/boolflix.png',
        text: 'In this responsive project you can search films or tv series. I got the data from themoviedb through an API call, for which I used axios library',
        demoLink:'https://stefanosax93.github.io/vue-boolflix/',
        codeLink:'https://github.com/StefanoSax93/vue-boolflix'
    }, 
    {
        title: 'Insurance Consulting',
        image: 'files/insurance-consulting.png',
        text: 'I created this responsive project with vue.cli and i used aos library for components animations',
        demoLink:'https://stefanosax93.github.io/proj-html-vuejs/',
        codeLink:'https://github.com/StefanoSax93/proj-html-vuejs'
    }, 
    {
        title: 'Spotify',
        image: 'files/spotify.png',
        text: 'Simple responsive project inspired to spotify.',
        demoLink:'https://stefanosax93.github.io/html-css-spotifyweb/',
        codeLink:'https://github.com/StefanoSax93/html-css-spotifyweb'
    },
];

//inserisco vue
const app = new Vue({
    el: '#carousel',

    data: {
        //prendo i dati dall'array slides
        slide: slides,
        //aggiungo un indice per la slide
        currentIndex: 0,
    },
    
    mounted: function() {
        this.nextSlide();;
    },

    methods: {
        //aggiungo le funzioni per i click
        downClick() {
            if(this.currentIndex >= 0 && this.currentIndex < this.slide.length - 1) {
                this.currentIndex ++; 
            } else {
                this.currentIndex = 0;
            }
        },
        upClick() {
            if(this.currentIndex > 0 && this.currentIndex < this.slide.length) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.slide.length - 1;
            }   
        },
        //aggiungo la funzione per il focus sulla thumb
        thumbClick(index) {
            this.currentIndex = index;
        },
        next() {
            if(this.currentIndex < this.slide.length - 1) {
            this.currentIndex += 1;
            } else {
            this.currentIndex = 0;
            }
        },
        nextSlide() {
            this.timer = setInterval(this.next, 3000);             
        },
        //quando vado in hover mi fermo l'autoplay
        mouseEnter() {
            clearInterval(this.timer);
        },
        //quando esco dall'hover riprendo l'autoplay
        mouseLeave() {
            this.nextSlide();
        }
    },
});