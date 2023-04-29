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
                    some_error          : 0, 
                    error_array         : [
                                            "",
                                            "Errore nel tentativo di ricerca diretta del contatto. Si prega di digitare il nome del contatto per intero. N.B. La ricerca non è case-sensitive."
                                          ], 
                    random_replies      : [
                                            "Ciao",
                                            "Ok",
                                            "Non capisco cosa vuoi dire!",
                                            "Rispondo a casaccio",
                                            "Ci vediamo stasera?"
                                          ], 
                    new_message         : "", 
                    new_message_delay   : 1500, 
                    check_if_large      : null,
                    device_threshold    : 576,
                    chat_is_active      : false,
                    active_contact      : null, 
                    last_sent_data      : null, 
                    last_sent_msg       : null,
                    allow_notifications : false,
                    search_data         : "",
                    // Assumiamo la condizione secondo cui, per ogni contatto, il messaggio "sent" si intende come inviato dal contatto a me e il contrario per "received"
                    contacts            : [
                                            {
                                                name        : 'Michele',
                                                avatar      : './img/avatar_1.png',
                                                visible     : true,
                                                messages    : [
                                                                {
                                                                    date    : '10/01/2020 15:30:55',
                                                                    message : 'Hai portato a spasso il cane?',
                                                                    status  : 'sent'
                                                                },
                                                                {
                                                                    date    : '10/01/2020 15:50:00',
                                                                    message : 'Ricordati di stendere i panni',
                                                                    status  : 'sent'
                                                                },
                                                                {
                                                                    date    : '10/01/2020 16:15:22',
                                                                    message : 'Tutto fatto!',
                                                                    status  : 'received'
                                                                }
                                                              ],
                                            },
                                            {
                                                name        : 'Fabio',
                                                avatar      : './img/avatar_2.png',
                                                visible     : true,
                                                messages    : [
                                                                {
                                                                    date    : '20/03/2020 16:30:00',
                                                                    message : 'Ciao come stai?',
                                                                    status  : 'sent'
                                                                },
                                                                {
                                                                    date    : '20/03/2020 16:30:55',
                                                                    message : 'Bene grazie! Stasera ci vediamo?',
                                                                    status  : 'received'
                                                                },
                                                                {
                                                                    date    : '20/03/2020 16:35:00',
                                                                    message : 'Mi piacerebbe ma devo andare a fare la spesa.',
                                                                    status  : 'sent'
                                                                }
                                                              ],
                                            },
                                            {
                                                name        : 'Samuele',
                                                avatar      : './img/avatar_3.png',
                                                visible     : true,
                                                messages    : [
                                                                {
                                                                    date    : '28/03/2020 10:10:40',
                                                                    message : 'La Marianna va in campagna',
                                                                    status  : 'received'
                                                                },
                                                                {
                                                                    date    : '28/03/2020 10:20:10',
                                                                    message : 'Sicuro di non aver sbagliato chat?',
                                                                    status  : 'sent'
                                                                },
                                                                {
                                                                    date    : '28/03/2020 16:15:22',
                                                                    message : 'Ah scusa!',
                                                                    status  : 'received'
                                                                }
                                                              ],
                                            },
                                            {
                                                name        : 'Alessandro B.',
                                                avatar      : './img/avatar_4.png',
                                                visible     : true,
                                                messages    : [
                                                                {
                                                                    date    : '10/01/2020 15:30:55',
                                                                    message : 'Lo sai che ha aperto una nuova pizzeria?',
                                                                    status  : 'sent'
                                                                },
                                                                {
                                                                    date    : '10/01/2020 15:50:00',
                                                                    message : 'Si, ma preferirei andare al cinema',
                                                                    status  : 'received'
                                                                }
                                                              ],
                                            },
                                            {
                                                name        : 'Alessandro L.',
                                                avatar      : './img/avatar_5.png',
                                                visible     : true,
                                                messages    : [
                                                                {
                                                                    date    : '10/01/2020 15:30:55',
                                                                    message : 'Ricordati di chiamare la nonna',
                                                                    status  : 'sent'
                                                                },
                                                                {
                                                                    date    : '10/01/2020 15:50:00',
                                                                    message : 'Va bene, stasera la sento',
                                                                    status  : 'received'
                                                                }
                                                              ],
                                            },
                                            {
                                                name        : 'Claudia',
                                                avatar      : './img/avatar_6.png',
                                                visible     : true,
                                                messages    : [
                                                                {
                                                                    date    : '10/01/2020 15:30:55',
                                                                    message : 'Ciao Claudia, hai novità?',
                                                                    status  : 'sent'
                                                                },
                                                                {
                                                                    date    : '10/01/2020 15:50:00',
                                                                    message : 'Non ancora',
                                                                    status  : 'received'
                                                                },
                                                                {
                                                                    date    : '10/01/2020 15:51:00',
                                                                    message : 'Nessuna nuova, buona nuova',
                                                                    status  : 'sent'
                                                                }
                                                              ],
                                            },
                                            {
                                                name        : 'Federico',
                                                avatar      : './img/avatar_7.png',
                                                visible     : true,
                                                messages    : [
                                                                {
                                                                    date    : '10/01/2020 15:30:55',
                                                                    message : 'Fai gli auguri a Martina che è il suo compleanno!',
                                                                    status  : 'sent'
                                                                },
                                                                {
                                                                    date    : '10/01/2020 15:50:00',
                                                                    message : 'Grazie per avermelo ricordato, le scrivo subito!',
                                                                    status  : 'received'
                                                                }
                                                              ],
                                            },
                                            {
                                                name        : 'Davide',
                                                avatar      : './img/avatar_8.png',
                                                visible     : true,
                                                messages    : [
                                                                {
                                                                    date    : '10/01/2020 15:30:55',
                                                                    message : 'Ciao, andiamo a mangiare la pizza stasera?',
                                                                    status  : 'received'
                                                                },
                                                                {
                                                                    date    : '10/01/2020 15:50:00',
                                                                    message : 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                                                    status  : 'sent'
                                                                },
                                                                {
                                                                    date    : '10/01/2020 15:51:00',
                                                                    message : 'OK!!',
                                                                    status  : 'received'
                                                                }
                                                              ],
                                            }
                                          ]
                }
    },
    created()
    {
        this.fix_img_path();
        this.active_contact = 0;
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

        // let DOM_contacts = document.querySelectorAll(".contact");
        // DOM_contacts.addEventListener("keydown", (key_event) =>
        // {
            // key_event.preventDefault();
            // switch (key_event.key)
            // {
            //     case "ArrowUp":
            //         (this.active_contact==0) ? (this.active_contact=this.contacts.length-1) : (this.active_contact--);
            //         break;
            //     case "ArrowDown":
            //         (this.active_contact==this.contacts.length-1) ? (this.active_contact=0) : (this.active_contact++);
            //         break;
            // }
        // });

        search_form.addEventListener("submit", (key_event) => 
        {
            key_event.preventDefault();
            this.selection_by_search_bar();
        });

        new_message_form.addEventListener("submit", (key_event) =>
        {
            key_event.preventDefault();
            if (this.new_message != "") 
            {
                // setTimeout(this.add_new_message, this.new_message_delay);
                this.add_new_message();
            }
        });

    },
    methods: 
    {

        check_msg_amount(what)
        {
            let nr = 0;
            for (let i = 0; i < this.contacts[this.active_contact].messages.length; i++)
                if (this.contacts[this.active_contact].messages[i].status == what)
                    nr++;
            return nr;
        },

        int_random(max) {return Math.floor(Math.random() * max)},

        is_odd(number) {return ((number % 2) != 0)},

        random_reply()
        {
            let d_t_str = this.date_time_str();
            this.contacts[this.active_contact].messages.push({'date':d_t_str, 'message':this.random_replies[this.int_random(this.random_replies.length)], 'status': "sent"});
        },

        date_time_str()
        {
            const date_time = new Date();
            
            let day = date_time.getDate();
            let month = date_time.getMonth() + 1;
            let year = date_time.getFullYear();
            let hours = date_time.getHours();
            let minutes = date_time.getMinutes();
            let seconds = date_time.getSeconds();

            let date_time_array = [day.toString(),"/",month.toString(),"/",year.toString()," ",hours.toString(),":",minutes.toString(),":",seconds.toString()];
            let d_t_str = "";

            date_time_array.forEach((item, index) => { ((!this.is_odd(index)) && (item.length == 1)) ? (d_t_str += "0"+item) : (d_t_str += item)});
            return d_t_str;
        },

        add_new_message()
        {
            let d_t_str = this.date_time_str();

            this.contacts[this.active_contact].messages.push({'date':d_t_str, 'message':this.new_message, 'status': "received"});
            this.new_message = "";

            setTimeout(this.random_reply, this.new_message_delay);
        },

        fix_img_path()
        {
            this.contacts.forEach( item => 
                {
                    let {avatar} = item;
                    avatar = avatar.replace(".png", ".jpg");
                    avatar = avatar.replace("./", "./assets/");
                    item.avatar = avatar;
                });
        },

        leave_chat_area()
        {
            this.close_dropdown(-1);
            this.chat_is_active = false;
        },

        open_dropdown(index)
        {
            let all_dropdown = document.querySelectorAll(".dropdown");
            all_dropdown[index].classList.remove("d-none");
        },

        close_dropdown(index)
        {
            let all_dropdown = document.querySelectorAll(".dropdown");
            if (index < 0)
            {
                for (let i = 0; i < all_dropdown.length; i++)
                    all_dropdown[i].classList.add("d-none");
            }
            else
                all_dropdown[index].classList.add("d-none");
        },

        delete_message(index)
        {
            this.close_dropdown(index);
            this.contacts[this.active_contact].messages.splice(index,1);
        },

        contact_found()
        {
            let position = -1;
            this.contacts.forEach((item, index) =>
            {
                if (item.name.toUpperCase() == this.search_data.toUpperCase()) position = index;
            });
            return position;
        },

        reset_error()
        {
            this.some_error = 0;
        },

        error(what)
        {
            this.search_data = "";
            this.searching();
            this.some_error = what; 
        },

        focus_on_active(index)
        {
            let fake_anchor = document.createElement("a");
            fake_anchor.setAttribute("href",`#contact_${index}`);
            fake_anchor.click();
            fake_anchor.remove();
        },

        new_active(index)
        {
            this.search_data = "";
            this.searching();
            this.active_contact = index;
            this.focus_on_active(index);
        },

        selection_by_search_bar()
        {
            const item = this.contact_found();
            (item != -1) ? (this.new_active(item)) : (this.error(1));
        },

        searching()
        {
            this.contacts.forEach(item => 
            {
                (item.name.toUpperCase().includes(this.search_data.toUpperCase()) || (this.search_data == "")) ? (item.visible = true) : (item.visible = false)
            });
        },

        // Metodo che restituisce un valore booleano indicante la presenza o meno dei dati di ultimo accesso (ultimo messaggio inviato) relativamente al contatto indicizzato dal parametro. Il metodo salva gli eventuali dati (data / ora) aggiornando la variabile array "last_sent_data"
        check_last_sent(index)
        {
            last_sent_data = ["----","----"];
            last_sent_msg = "----";
            let flag = false;
            if (this.contacts[index].messages.length != 0)
            {
                let i = this.contacts[index].messages.length;
                do
                {
                    i--;
                    if (this.contacts[index].messages[i].status == "sent")
                    {
                        flag = true;
                        last_sent_data = this.contacts[index].messages[i].date.split(" ");
                        last_sent_msg = this.contacts[index].messages[i].message;
                    }
                } while ((!flag) && (i > 0));
            }
            return flag;
        },

        check_last_sent_plus_output(index, value)
        {
            let output_str = "";
            switch (value)
            {
                case 0:
                    (this.check_last_sent(index)) ? (output_str = `Ultimo accesso: ${last_sent_data[0].substring(0,5)} alle ${last_sent_data[1].substring(0,5)}`) : (output_str = "Ultimo accesso: ---- ");
                    break;
                case 1:
                    (this.check_last_sent(index)) ? (output_str = `${last_sent_msg}`) : (output_str = "----");
                    break;
                case 2:
                    (this.check_last_sent(index)) ? (output_str = `${last_sent_data[0].substring(0,5)}`) : (output_str = "----");
                    break;

            }
            return output_str;
        },

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