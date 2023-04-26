const   device_small    = false;
const   device_large    = true;  
// const   widths_friends  = [1, 0.35];
// const   widths_chat     = [1, 0.65];

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
                    chat_is_active      : false,
                }
    },
    created()
    {
        if (this.just_started)
        {
            this.just_started = false;
            this.check_device();
            // this.modify_css_root();
        }
    },
    mounted()
    {
        // Funzionamento ok in inspector, non ok in window resize
        window.addEventListener("resize", () => {this.check_device_change()});
    },
    methods: 
    {
        modify_css_root()
        {
            let css_root = document.querySelector(":root");
            // Per settare correttamente i coefficienti di larghezza dei due blocchi (friends e chat) si indicizzano gli elementi appositi negli specifici array, utilizzando il valore numerico della variabile booleana check_if_change..... (false = 0 ==> coefficiente nell'array all'indice 0) e (true = 1 ==> coefficiente all'indice 1)
            css_root.style.setProperty("--width_friends_side", widths_friends[this.check_if_large]); 
            css_root.style.setProperty("--width_chat_side", widths_chat[this.check_if_large]); 
        },

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
                // this.modify_css_root();
           }
        }
    }
}).mount('#vue_app')