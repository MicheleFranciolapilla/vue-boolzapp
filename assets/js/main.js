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
                    active_contact      : null, 
                    last_sent_data      : null, 
                    last_sent_msg       : null,
                    allow_notifications : false,
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
        if (this.just_started)
        {
            this.just_started = false;
            this.check_device();
            // this.modify_css_root();
        }
        this.initialize();
    },
    mounted()
    {
        // Funzionamento ok in inspector, non ok in window resize
        window.addEventListener("resize", () => {this.check_device_change()});
    },
    methods: 
    {
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

        // Inizializzazione ed individuazione del contatto attivo come primo contatto con chiave "visible = true"
        initialize()
        {
            let found_visible = false;
            let i = -1;
            do
            {
                i++;
                if (this.contacts[i].visible) found_visible = true;
            } while(!found_visible && i < this.contacts.length - 1);
            if (found_visible) this.active_contact = i;
            else
            {
                // Stabilire cosa fare se nessuno dei contatti è visible
            }
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
                    (this.check_last_sent(index)) ? (output_str = `${last_sent_data[0].substring(0,5)} - ${last_sent_data[1].substring(0,5)}`) : (output_str = "----");
                    break;
                case 2:
                    (this.check_last_sent(index)) ? (output_str = `${last_sent_msg}`) : (output_str = "----");
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