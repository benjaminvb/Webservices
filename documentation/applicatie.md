#Applicatie

#####Gebruikte technologien
* **M**ongoDB
* **E**xpress
* **A**ngularJS 2
* **N**ode.js
* typescript
* mongoose

#####Project opzetten
npm init maakt een initiele package.json file aan.
```
npm init
```
[screenshot npm](https://github.com/benjaminvb/Webservices/blob/master/documentation/screenshots/npm_init.png)  
  
typescrip installeren
-g is voor het globaal installeren ( = niet in project) omdat dit een tool installeert die niet nodig is om de applicatie te runnen.
```
npm install typescript -g
```
web applicatie framework
```
npm install express --save
```
koppling met de database.
```
npm install mongoose --save
```

#####Data in mongodb steken
Data van de solarlogs staat in csv files.
csv file inporteren in mongodb:
```
mongoimport -d mydb -c solarlogs --type csv  --file --headerline
```
op de 1ste lijn van de csv staan colom namen
source: [stackoverflow.com](http://stackoverflow.com/questions/4686500/how-to-use-mongoimport-to-import-csv)

#####Mongoose
Mongoose word gebruikt om te comuniceren met MongoDB
Standaart word er een v colom toegevoegd in de database, dit is een versie key.
Het is mogenlijk deze weg te doen door aan het mongoose schema het volegende toe te voegen:
```
{versionKey:false}
```

#####Typscript
Om typestcript te compileren:
```
tsc -p ./
```
error TS7006: Parameter 'a' implicity has an 'any' type
opgelost door in tsconfig:
```
 "noImplicitAny": false,
```

#####https
ssl certificaat
```
openssl x509 -req -days 365 -in server.csr -signkey key.pem -out cert.pem
```
***
voor de andere gebruikte dependeties zie dependencies.md

######gebruikte tutorials:
[Angular 2 In 60 Minutes](https://www.youtube.com/watch?v=-zW1zHqsdyc)
[EXPRESS WITH ANGULAR CLI IN 5 MINUTES](https://javascriptrocks.wordpress.com/2016/06/04/express-with-angular-cli-in-5-minutes/)
