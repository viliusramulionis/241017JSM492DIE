
# Repozitorijos klonavimas

Klonuoja repozitoriją:

    git clone REPOZITORIJOS_ADRESAS

Atsiunčia rezitorijos atnaujinimus:

    git pull 

# Klavišų kombinacijos VSCode:

    WIN             MAC                 VEIKSMAS  

    ctrl + s        |   cmd + s         failo išsaugojimas (save) 

    ctrl + c        |   cmd + c         kopijavimas (copy)

    ctrl + v        |   cmd + v         įklijavimas (paste)

    ctrl + z        |   cmd + z         veiksmas atgal (undo)

    ctrl + y        |   cmd + y         eiksmas į priekį (redo)

    ctrl + f        |   cmd + f         paieška faile

    shift+alt+up    |   shift+alt+up    kopijuoja pasirinktą eilutę į viršų

    shift+alt+down  |   shift+alt+down  kopijuoja pasirinktą eilutę į apačią

    ctrl + /        |   cmd + /         komentaro įterpimas

    shift + tab     |   shift + tab     pastumia kodą į kairę pusę

# Naudojimasis terminalu:

  

C:\Users\viliu\Desktop\testine-repozitorija - Absoliutus kelias

    . - Terminalo direktorijų struktūroje reiškia esamą direktoriją

    .. - Nurodo vieną direktoriją aukščiau nuo esamos

    cd - (Change Directory) Komanda kuri norodo esamos direktorijos pakeitimą

    ctrl + c - Nutraukia terminale paleistos programos veikimą
  

    echo "# testine-repozitorija" >> README.md - Sukuria failą pavadinimu README.md ir jame patalpina tekstą "# testine-repozitorija"

  

# Naujos repozitorijos sukūrimas naudojat komandas:

    git init - Inicijuoja repozitoriją

    git add . - Nurodo kokius failus pridedame į commit'ą

    git commit -m "first commit" - Commit žinutės priskyrimas

    git branch -M main - Atšakos (branch) nurodymas

    git remote add origin REPOZITORIJOS_ADRESAS - Github repozitorijos susiejimas

    git push -u origin main - Commito įkėlimo iniciavimas

  

# Repozitorijos atnaujinimas:

  

    git add .

    git commit -m "update message"

    git push

# NodeJS aplikacijos kūrimas
Sukuria package.json failą:
    npm init 

Atlieka tą patį tik su automatiniu užpildymu:
    npm init -y 

Norint paleisti programą:
    node failopavadinimas.js  

Jeigu failas vadinasi index.js
    node .

Nodemon paketo instaliacija kompiuteryje
    npm install -g nodemon

# React aplikacijos kūrimas
    npm create vite@latest

Įvedame projekto pavadinimą

Pasirenkame React

Tuomet Javascript

Aplikacijos paleidimas:

    npm run dev

Aplikacijos struktūra:

    ./src

        main.jsx - Pagrindinis failas

        App.jsx - Pagrindinis modifikuojamas failas

        components - Komponentų direktorija

            komponento-pavadinimas - Direktorija kurioje talpinsime komponentą

                KomponentoPavadinimas.jsx - Komponento failas

                KomponentoPavadinimas.css - Komponento stilius (esant poreikiui)
