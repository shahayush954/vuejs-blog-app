new Vue({
    el: "#vue-app",
    data: {
        name: "Ayush",
        job: "Software Developer",
        website: "https://shahayush954.herokuapp.com",
        websiteHTML: "<a href='https://shahayush954.herokuapp.com'>Visit Website</a>",
        age: 25,
        x: 0,
        y: 0,
        formName: "",
        formAge: "",
    },
    methods: {
        greet: function(time) {
            return "Good " + time + " " + this.name;
        },

        add: function(inc){
            this.age += inc;
        },

        subtract: function(dec){
            this.age -= dec;
        },

        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        handleChange: function(event){
            this[event.target.name] = event.target.value;
        }
    }
});