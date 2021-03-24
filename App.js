new Vue({
    el: "#vue-app",
    data: {
        name: "Ayush",
        job: "Software Developer",
        website: "https://shahayush954.herokuapp.com",
        websiteHTML: "<a href='https://shahayush954.herokuapp.com'>Visit Website</a>",
    },
    methods: {
        greet: function(time) {
            return "Good " + time + " " + this.name;
        }
    }
});