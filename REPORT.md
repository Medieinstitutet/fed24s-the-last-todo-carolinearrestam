# 📌 Rättningsrapport – fed24s-the-last-todo-carolinearrestam

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

## Tips

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för både G och VG. Den har hårdkodade todo-punkter, presenterar dessa i en lista, implementerar klickhändelse för att markera klart och ta bort todos, samt hanterar tillbaka-markering av klara todos. För VG har studenten dessutom implementerat ett formulär för att skapa nya todos, möjligheten att sortera listan, och använt Tailwind CSS för stil. Koden är välstrukturerad och använder React och TypeScript på ett sätt som är lätt att följa.

💡 **Förbättringsförslag:**  
Det finns några mindre förbättringsmöjligheter: 
1. Koden kan dra nytta av att bryta ut vissa delar av logiken i TodoApp-komponenten till egna custom hooks för att hålla komponenten mer fokuserad och hanterbar. 
2. I nuläget sker ingen specifik hantering av vad som händer om localStorage-objektet inte kan parsa JSON-kod korrekt. Det kan vara bra att hantera detta fall med en try-catch för att säkerställa att applikationen slutar köra vid eventuella fel. 
3. Förbättra eventhantering i formuläret och integrera mer robust försäkring om användarupplevelse, till exempel att automatiskt fokusera på inputfältet vid rendera, för en bättre UX. 