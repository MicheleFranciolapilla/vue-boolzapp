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
                    contact_area_rect   : null,
                    chat_area_rect      : null,  
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
                                            "Ci vediamo stasera?",
                                            "Rispondo con qualcosa di insensato e lungo, tanto, con overflow ellipsis non ho problemi"
                                          ], 
                    new_message         : "", 
                    new_message_delay   : 1500, 
                    check_if_large      : null,
                    device_threshold    : 576,
                    chat_is_active      : false,
                    active_contact      : null, 
                    last_rec_sent_data      : null, 
                    last_rec_sent_msg       : null,
                    allow_notifications : false,
                    search_data         : "",
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
        }
    },
    mounted()
    {
        // Funzionamento ok in inspector, non ok in window resize
        window.addEventListener("resize", () => {this.check_device_change()});

        window.addEventListener("keydown", (key_event) => {this.check_key_action(key_event)});

        search_form.addEventListener("submit", (key_event) => 
        {
            key_event.preventDefault();
            key_event.stopPropagation();
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
        
        // this.get_areas_rect();

    },
    methods: 
    {

        // get_areas_rect()
        // {
        //     if (this.chat_is_active)
        //     let contact_area = document.querySelector("#contact_list");
        //     let chat_area = document.querySelector("#chat_messages_area");
        //     this.contact_area_rect = contact_area.getBoundingClientRect();
        //     this.chat_area_rect = chat_area.getBoundingClientRect();
        // },

        set_all_visible()
        {
            for (let i = 0; i < this.contacts.length; i++)
            {
                this.contacts[i].visible = true;
            }
        },

        check_key_action(key_event)
        {
            // Si analizza il tasto premuto, in funzione di scorrimento o selezione di un contatto a patto che non siano attive la finestra di errori, la barra di ricerca o l'input di un nuovo messaggio
            if ((this.some_error == 0) && (this.search_data == "") && (this.new_message == ""))
            {
                if (!this.chat_is_active)
                {
                    switch (key_event.key)
                    {
                        case "ArrowUp":
                            key_event.preventDefault();
                            if (this.active_contact == 0)
                            {
                                this.active_contact = this.contacts.length - 1;
                            }
                            else
                            {
                                this.active_contact--;
                            }
                            this.new_active(this.active_contact);
                            break;
                        case "ArrowDown":
                            key_event.preventDefault();
                            if (this.active_contact == this.contacts.length - 1)
                            {
                                this.active_contact = 0;
                            }
                            else
                            {
                                this.active_contact++;
                            }
                            this.new_active(this.active_contact);
                            break;
                        case "Enter":
                            key_event.preventDefault();
                            this.chat_is_active = true;
                            break;
                    }
                }
                else
                {}
            }
        },

        click_on_contact(index)
        {
            // this.set_all_visible();
            console.log("click su....",index);
            console.log("chat is active? ",this.chat_is_active);
            if (this.chat_is_active) 
            {
                this.leave_chat_area();
                this.new_active(index);
            }
            else 
            {
                if (index == this.active_contact)
                {
                    // L'invocazione a new_active in questo specifico caso, apparentemente inutile, torna utile laddove il click sul contatto già attivo avvenga mentre è operativa la barra di ricerca (eventuali contatti non visibili)
                    this.new_active(this.active_contact);
                    this.chat_is_active = true;
                }
                else this.new_active(index);
            }

        },

        // key_on_contact(index, key_event)
        // {
        //     console.log(index);
        //     console.log(key.event.key);
        // },

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
            this.contacts[this.active_contact].messages.push({'date':d_t_str, 'message':this.random_replies[this.int_random(this.random_replies.length)], 'status': "received"});
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

            this.contacts[this.active_contact].messages.push({'date':d_t_str, 'message':this.new_message, 'status': "sent"});
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
            this.focus_on_active(this.active_contact);
        },

        error(what)
        {
            this.search_data = "";
            this.searching();
            this.some_error = what; 
        },

        is_rect_inside(rect1, rect2)
        {
            let answer = false;
            console.log("--------------------------------");
            console.log(rect1.top, " - ", rect2.top);
            console.log(rect1.left, " - ", rect2.left);
            console.log(rect1.bottom, " - ", rect2.bottom);
            console.log(rect1.right, " - ", rect2.right);
            console.log("--------------------------------");
            if ((rect1.top >= rect2.top) &&
                (rect1.left >= rect2.left) &&
                (rect1.bottom <= rect2.bottom) &&
                (rect1.right <= rect2.right))
            {
                answer = true;
            }
            return answer;
        },

        focus_on_active(index)
        {
            let item_str = `#contact_${index}`;
            console.log("item_str: ",item_str);
            let item = document.querySelector(item_str);
            let item_area = item.getBoundingClientRect();
            console.log("area del contatto: ",item_area);
            let contact_area_rect = document.querySelector("#contact_list").getBoundingClientRect();

            if ((!this.is_rect_inside(item_area, contact_area_rect)) || (this.search_data != ""))
            {
                let fake_anchor = document.createElement("a");
                fake_anchor.setAttribute("href",item_str);
                console.log(fake_anchor);
                console.log(index);
                fake_anchor.click();
                fake_anchor.remove();
            } 
        },

        new_active(index)
        {
            this.set_all_visible();
            this.active_contact = index;
            this.focus_on_active(index);
            this.search_data = "";
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

        // Metodo che restituisce un valore booleano indicante la presenza o meno dei dati di ultimo accesso (ultimo messaggio inviato) relativamente al contatto indicizzato dal parametro. Il metodo salva gli eventuali dati (data / ora) aggiornando la variabile array "last_rec_sent_data"
        check_last(index, direction)
        {
            last_rec_sent_data = ["----","----"];
            last_rec_sent_msg = "----";
            let flag = false;
            let msg_direction = "received";
            if (direction) msg_direction = "sent";
            if (this.contacts[index].messages.length != 0)
            {
                let i = this.contacts[index].messages.length;
                do
                {
                    i--;
                    if (this.contacts[index].messages[i].status == msg_direction)
                    {
                        flag = true;
                        last_rec_sent_data = this.contacts[index].messages[i].date.split(" ");
                        last_rec_sent_msg = this.contacts[index].messages[i].message;
                    }
                } while ((!flag) && (i > 0));
            }
            return flag;
        },

        check_last_plus_output(index, value)
        {
            let output_str = "";
            switch (value)
            {
                case 0:
                    (this.check_last(index,false)) ? (output_str = `Ultimo accesso: ${last_rec_sent_data[0].substring(0,5)} alle ${last_rec_sent_data[1].substring(0,5)}`) : (output_str = "Ultimo accesso: ---- ");
                    break;
                case 1:
                    (this.check_last(index,false)) ? (output_str = `${last_rec_sent_msg}`) : (output_str = "----");
                    break;
                case 2:
                    (this.check_last(index,false)) ? (output_str = `${last_rec_sent_data[0].substring(0,5)}`) : (output_str = "----");
                    break;
                case 3:
                    (this.check_last(index,true)) ? (output_str = `${last_rec_sent_msg}`) : (output_str = "----");
                    break;
                case 4:
                    (this.check_last(index,true)) ? (output_str = `${last_rec_sent_data[0].substring(0,5)}`) : (output_str = "----");
                    break;
            }
            return output_str;
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
                // this.get_areas_rect();
            }
        }
    }
}).mount('#vue_app')