const   device_small    = false;
const   device_large    = true;  

// Script Vue 3
const {createApp} = Vue 

createApp(
{
    data() 
    {
        return  {
                    just_started        : true,
                    check_if_large      : null,
                    device_threshold    : 576,
                }
    },
    created()
    {
        if (this.just_started)
        {
            this.just_started = false;
            this.check_device();
        }
    },
    mounted()
    {
        // Funzionamento ok in inspector, non ok in window resize
        window.addEventListener("resize", () => {this.check_device_change()});
    },
    methods: 
    {
        check_device()
        {
            (window.screen.width < this.device_threshold) ? (this.check_if_large = device_small) : (this.check_if_large = device_large);
            return this.check_if_large;
        },

        check_device_change()
        {
           let device_before_resize = this.check_if_large; 
           if (this.check_device() != device_before_resize)
           {

           }
        }
    }
}).mount('#vue_app')