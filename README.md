# Van Gogh, da vicino

PWA statica bilingue (italiano / inglese) con cinque opere, zoom interattivo sui dettagli, schede di localizzazione, mappe e biglietterie ufficiali.

## Avvio locale

La PWA e la funzione offline richiedono localhost oppure un sito HTTPS.

Da PowerShell:

    cd "C:\Users\marco\Documents\Codex\2026-11-21\cr-ame\outputs\vangogh-pwa"
    python -m http.server 8000

Apri quindi http://localhost:8000. Dopo il primo caricamento, le pagine e le cinque immagini vengono memorizzate per l’uso offline. Su browser compatibili compare anche il comando Installa app.

Per pubblicarla, carica l’intera cartella su un hosting statico HTTPS mantenendo la struttura dei file.
