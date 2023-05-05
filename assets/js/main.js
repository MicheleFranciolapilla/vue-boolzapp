// COSTANTI SEMANTICHE UTILIZZATE PER IDENTIFICARE IL DEVICE (MOBILE / DESKTOP) IN RIFERIMENTO AL BREAKPOINT DI 576 PIXEL
const   device_small    = false;
const   device_large    = true;  

// Script Vue 3
const {createApp} = Vue 

createApp(
{
    data() 
    {
        return  {
                    // SETTORE "ERRORI"
                    // Identificatore di errore (0 = nessun errore)
                    some_error          : 0, 
                    // Array contenente i messaggi di errore, indicizzato da "some_error"
                    error_array         : [
                                            "",
                                            "Errore nel tentativo di ricerca diretta del contatto. Si prega di digitare il nome del contatto per intero. N.B. La ricerca non è case-sensitive."
                                        ],
                    // SETTORE "DEVICE"
                    // Variabile booleana che identificherà il tipo di device (small o large)
                    check_if_large      : null,
                    // Soglia (576 pixel) che differenzia il tipo di device
                    device_threshold    : 576,
                    // SETTORE "MESSAGGI"
                    // Variabile destinata a contenere i messaggi digitati dall'utente
                    new_message         : "", 
                    // Tempo (in ms) di attesa prima della risposta ad un messaggio digitato
                    new_message_delay   : 1500,
                    // Array contenente le risposte casuali                     
                    random_replies      : [
                                            "Ciao",
                                            "Ok",
                                            "Non capisco cosa vuoi dire!",
                                            "Rispondo a casaccio",
                                            "Ci vediamo stasera?",
                                            "Rispondo con qualcosa di insensato e lungo, tanto, con overflow ellipsis non ho problemi"
                                        ],
                    // Variabili contenitore di informazioni relative all'ultimo messaggio (inviato o ricevuto)
                    last_rec_sent_data  : null, 
                    last_rec_sent_msg   : null,
                    // SETTORE "CONTATTI"
                    // Identificatore del contatto attivo
                    active_contact      : null, 
                    // Array di oggetti contenente tutte le informazioni sui contatti ed i messaggi scambiati
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
                                        ],
                    // Attributo che identifica la fase di avvio
                    just_started        : true,
                    // Variabile booleana che identifica la sezione attiva tra "sezione contatti" e "sezione chat"
                    chat_is_active      : false,
                    // Variabile booleana che viene settata/resettata ad ogni click sulla campanella o sullo specifico testo di fianco
                    allow_notifications : false,
                    // Variabile che acquisisce (reattivamente, mediante v-model) il testo digitato nella barra di ricerca
                    search_data         : ""

                }
    },
    created()
    {
        // Inizializzazione attributi
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
        // Funzione che rileva la dimensione (cambio di dimensione) del device
        // Funzionamento ok in inspector, non ok in window resize
        window.addEventListener("resize", () => {this.check_device_change()});

        // Funzione che si sintonizza sulla pressione dei tasti, utilizzata, fondamentalmente per lo scroll e la selezione diretta dei contatti
        window.addEventListener("keydown", (key_event) => {this.check_key_action(key_event)});

        // Funzione che gestisce l'input nella barra di ricerca
        search_form.addEventListener("submit", (key_event) => 
        {
            key_event.preventDefault();
            key_event.stopPropagation();
            this.selection_by_search_bar();
        });

        // Funzione che gestisce l'input del messaggio
        new_message_form.addEventListener("submit", (key_event) =>
        {
            key_event.preventDefault();
            if (this.new_message != "") 
            {
                this.add_new_message();
            }
        });
    },
    methods: 
    {
        // Metodi per il rilevamento del device
        // Metodo che restituisce un valore booleano identificativo del device in uso e ne setta la corrispondente variabile
        check_device()
        {
            (window.screen.width < this.device_threshold) ? (this.check_if_large = device_small) : (this.check_if_large = device_large);
            return this.check_if_large;
        },

        // Metodo che setta la specifica variabile al cambio del device
        check_device_change()
        {
            let device_before_resize = this.check_if_large; 
            if (this.check_device() != device_before_resize)
            {
            }
        },

        // Metodo che "aggiusta" le stringhe relative ai percorsi delle immagini degli avatar
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

        // Metodi di gestione e reset degli errori
        // Reset degli errori
        reset_error()
        {
            this.some_error = 0;
            this.focus_on_active(this.active_contact);
        },

        // Metodo utilizzato per identificare e visualizzare un eventuale errore occorso in fase di input nella barra di ricerca
        error(what)
        {
            this.search_data = "";
            this.searching();
            this.some_error = what; 
        },

        // Metodo che risetta su (visibile) tutti i contatti. Invocato a seguito di uscita dalla procedura eseguita dalla barra di ricerca
        set_all_visible()
        {
            for (let i = 0; i < this.contacts.length; i++)
            {
                this.contacts[i].visible = true;
            }
        },

        // Metodo invocato ad ogni pressione di tasto nella barra di ricerca; finalizzato ad individuare e visualizzare tutti i contatti il cui nome (a prescindere dall'eventuale uppercase) includa la combinazione digitata
        searching()
        {
            this.contacts.forEach(item => 
            {
                (item.name.toUpperCase().includes(this.search_data.toUpperCase()) || (this.search_data == "")) ? (item.visible = true) : (item.visible = false)
            });
        },

        // Metodo atto ad individuare l'eventuale contatto digitato (per intero - a prescindere dall'eventuale uppercase). Restituisce la posizione del contatto se individuato, oppure il valore "-1"
        contact_found()
        {
            let position = -1;
            this.contacts.forEach((item, index) =>
            {
                if (item.name.toUpperCase() == this.search_data.toUpperCase()) position = index;
            });
            return position;
        },

        // Metodo invocato al "submit" di ricerca contatto. Modifica il contatto attivo (se input valido) oppure invoca la funzione di "error manager"
        selection_by_search_bar()
        {
            const item = this.contact_found();
            (item != -1) ? (this.new_active(item)) : (this.error(1));
        },

        // Metodo booleano che rileva l'inclusione di un rettangolo in un altro. Utilizzato per verificare se il contatto attivo (la sua area visibile) sia incluso nella finestra a video (ovvero se il contatto attivo sia visibile o nascosto alla vista)
        is_rect_inside(rect1, rect2)
        {
            let answer = false;
            if ((rect1.top >= rect2.top) &&
                (rect1.left >= rect2.left) &&
                (rect1.bottom <= rect2.bottom) &&
                (rect1.right <= rect2.right))
            {
                answer = true;
            }
            return answer;
        },

        // Metodo che rileva l'area di visibilità del contatto indicizzato e, nel caso esso sia fuori dalla visuale, invoca un click fake su un anchor ad hoc per portarlo in piena visibilità
        focus_on_active(index)
        {
            let item_str = `#contact_${index}`;
            let item = document.querySelector(item_str);
            let item_area = item.getBoundingClientRect();
            let contact_area_rect = document.querySelector("#contact_list").getBoundingClientRect();

            if ((!this.is_rect_inside(item_area, contact_area_rect)) || (this.search_data != ""))
            {
                let fake_anchor = document.createElement("a");
                fake_anchor.setAttribute("href",item_str);
                fake_anchor.click();
                fake_anchor.remove();
            } 
        },

        // Metodo invocato ad ogni cambio del contatto attivo. Invoca ulteriori metodi per ottimizzare la sequenza di attivazione del contatto
        new_active(index)
        {
            this.set_all_visible();
            this.active_contact = index;
            this.focus_on_active(index);
            this.search_data = "";
        },

        // Metodo invocato ad ogni pressione di tasto, finalizzato a filtrare e gestire i tasti direzionali di scroll ed il tasto enter di selezione diretta del contatto
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

        // Metodo invocato al click su un contatto. Il comportamento del programma cambia a seconda che si sia sulla sezione chat o su quella dei contatti. Nel primo caso ha luogo il cambio di sezione con attivazione del contatto, nel secondo caso si accede alla sezione chat del contatto attivo o lo si seleziona (se non era attivo prima)
        click_on_contact(index)
        {
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

        // Metodo che formatta e restituisce le informazioni relative all'ultimo messaggio scambiato
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

        // Metodo che assegna le dovute classi al messaggio di turno relativo al contatto indicizzato
        set_message_classes(index)
        {
            let return_str = "";
            if (this.chat_is_active) return_str = "hoverable";
            if ((index + 1) == (this.check_msg_amount("received") + this.check_msg_amount("sent"))) return_str += " last";
            return return_str;
        },







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



        add_new_message()
        {
            let d_t_str = this.date_time_str();

            this.contacts[this.active_contact].messages.push({'date':d_t_str, 'message':this.new_message, 'status': "sent"});
            this.new_message = "";

            setTimeout(this.random_reply, this.new_message_delay);
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


    }
}).mount('#vue_app')