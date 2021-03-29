Vue.component("Greetings", {
    template: "<p>Hi there I am a reusable component from {{ name }} <button v-on:click='changeName'>Change Name</button></p>",
    data: function(){
        return {
            name: "Vasili Ivanowich"
        }
    },
    methods: {
        changeName: function() {
            this.name = "Nikolai Belinski";
        }
    }
});
const vue = new Vue({
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
        error: false,
        success: false,
        employeeNames: [
            "Vasili Ivanowich",
            "Nikolai Belinski",
            "John Davis",
            "Victor Reznov",
            "Lev Kravchenko"
        ],
        employees:[
            {name: "Vasili Ivanowich", age:30},
            {name: "Nikolai Belinski", age:30},
            {name: "John Davis", age:30},
            {name: "Victor Reznov", age:30},
            {name: "Lev Kravchenko", age:30},
        ],
        favouriteFood: "",
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

        readRefs: function(){
            this.favouriteFood = this.$refs.myInput.value;
        }
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

const one = new Vue({
    el: "#vue-app-1",
    data: {
        title: "First Instance",
    },
    computed:{
        greet: function() {
            return "From First Instance"
        }
    }
});

const two = new Vue({
    el: "#vue-app-2",
    data: {
        title: "Second Instance",
    },
    methods: {
        changeTitle: function(){
            one.title = "Title Changed";
        }
    },
    computed:{
        greet: function() {
            return "From Second Instance"
        }
    }
});
