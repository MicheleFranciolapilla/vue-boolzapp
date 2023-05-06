# BOOLZAP CON VUE 3 #
---
### Riproduzione fac-simile di WEB WHATSAPP ###
---

#### Consegna: ####

**Milestone 1:**      
-   *Replica della grafica, con la possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianco), assegnando due classi CSS diverse.*
-   *Visualizzazione dinamica della lista contatti: tramite la direttiva "v-for" visualizzare nome e immagine di ogni contatto.*

**Milestone 2:**
-   *Visualizzazione dinamica dei messaggi: tramite la direttiva "v-for", visualizzare tutti i messaggi relativi al contatto attivo, all'interno del pannello della conversazione.*
-   *Click sul contatto mostra la conversazione del contatto cliccato.*

**Milestone 3:**
-   *Aggiunta di un messaggio: l'utente scrive un testo nella parte bassa e digitando "enter" il testo viene aggiunto al thread sopra, come messaggio verde.*
-   *Risposta dell'interlocutore: ad ogni inserimento di un messaggio, l'utente riceverà un "ok" come risposta, che apparirà dopo 1 secondo.*

**Milestone 4:**
-   *Ricerca utenti: scrivendo qualcosa nell'input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite.*

**Milestone 5 (Opzionale):**
-   *Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato.*

---

#### Realizzazione: ####

**Il progetto, realizzato con "Vue 3", poggia sui classici tre files "index.html", "style.css" e "main.js" ed utilizza, all'occorrenza, la libreria Bootstrap 5 e le icone di Font Awesome 6.**

**Il progetto nasce con una lieve impronta di "responsività". Il breakpoint di riferimento è quello dei 576 pixel (eventualmente modificabile attraverso il valore della variabile `device_threshold` nel file main.js**
**La responsività si esprime in due aspetti:**
-   *Titolo `<h1>`: ...a seconda del device, al titolo "Vue Boolzapp" si affianca il testo (Large) o (Small).*
-   *Sezioni "Contatti" e "Chat": ...nel device "Large" le due sezioni coesistono affiancate, mentre nel device "Small" solo una di esse è visibile (attiva) ed il passaggio tra le due avviene mediante il settaggio della variabile `chat_is_active` ottenuto facendo click (o enter) sul contatto già attivo, nella sezione contatti (Passaggio da sezione contatti a sezione chat) o facendo click sull'icona lampeggiante, in basso, nella sezione chat (Passggio da sezione chat a sezione contatti). Nella modalità "Large", oltre al meccanismo di passaggio tra sezioni appena menzionato, lo stesso si realizza facendo semplicemente click sulla sezione da attivare.*
##### Criticità: #####
**Lo switch tra le due modalità funziona fluidamente all'interno dell'inspector ma non funziona al ridimensionamento manuale della finestra del browser (programma testato solo su Google Chrome)**

**Oltre alla già citata responsività ed alle modalità di attivazione/disattivazione della sezione attiva, il programma ha le seguenti caratteristiche di funzionamento...**

-   **Area notifiche:**         *Nell'area notifiche, tanto l'icona "campanella" quanto il testo in blu sono dinamici e cliccabili*
-   **Barra di ricerca:**       *La barra di ricerca assolve alle funzioni richieste e, inoltre, in caso di input (con tasto "enter" o click su apposita icona) di un contatto inesistente, attiva una sotto-sezione di `error_manager`.*
-   **Scroll dei contatti:**    *E' possibile scorrere la lista dei contatti mediante i tasti freccia "up" e "down". Durante lo scorrimento, il nuovo contatto "on focus" assume lo status di contatto attivo.*
-   **Click su contatto:**      *Facendo click su un contatto lo si rende attivo e, laddove già attivo, si sposta l'azione sulla sezione "chat" del contatto stesso (stesso effetto ottenuto premendo "enter").*
-   **Hover su messaggio:**     *L'hover sui messaggi è sempre possibile ma produce effetti solo quando ad essere attiva è la sezione "chat". Gli effetti dell'hover sono: cambio di colore del testo e del bordo del messaggio in oggetto e, soprattutto, visualizazione dell'icona "cestino", cliccando sulla quale si accede al dropdown menu specifico del messaggio, all'interno del quale si può optare per la cancellazione dello stesso. Nota: l'ultimo messaggio presenta un bordo di colorazione differente.*
-   **Input nuovo messaggio:**  *Come da consegna, è possibile digitare e caricare un nuovo messaggio, direttamente dall'area dedicata. Al nuovo messaggio digitato farà seguito un messaggio di risposta casuale, dopo un tempo di attesa specificato dalla variabile `new_message_delay`*
-   **is_rect_inside(rect1, rect2) + focus_on_active(index)...**    *La combinazione di questi due metodi ha consentito di avere il contatto attivo sempre in vista, anche quando all'esterno dell'area visualizzata dalla scrollbar. Essi si basano sulla combinazione del metodo JS `getBoundingClientRect()` e dell'utilizzo di un "tag on purpose" `<a>` su cui si genera un click virtuale mediante il metodo `click()`*

###### Fare riferimento al file main.js per il dettaglio dei 27 metodi sviluppati. ######

---
---
---
