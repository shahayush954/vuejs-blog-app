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
        a: 0,
        b: 0,
        computedAge: 20,
        available: false,
        nearby: false,
        
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
        },
    },

    computed: {
        addA: function (){
            return this.a + this.computedAge;
        },

        addB: function (){
            return this.b + this.computedAge;
        },

        computedClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});