const app = new Vue({
    el: "#root",
    data: {
        emails:[],
        arraylength: 0,
        
    },
    methods: {

    },
    mounted() {
        for ( var i = 0; i < 10 ; i ++ ) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                this.emails.push(response.data.response);
            });
            
        }

        },

    });
