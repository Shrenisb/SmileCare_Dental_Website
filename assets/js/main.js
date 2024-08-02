new Vue({
    el: "#contact-form",
    data: {
        first_name: '',
		last_name: '',
        email: '',
        phone: '',
        message: ''
    },
    methods:{
        checkForm: function(event){
            if( this.first_name && this.last_name && this.validEmail(this.email) && this.phone && this.message )
            {
                return true;
            }
            if( !this.first_name)
            {
                this.first_name = null;
            }
            if( !this.last_name)
            {
                this.last_name = null;
            }

            if(!this.validEmail(this.email))
            {
                this.email = null;
            }
            
            if( !this.phone)
            {
                this.phone = null;
            }

            if( !this.message)
            {
                this.message = null;
            }

            event.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
})