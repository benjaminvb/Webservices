# MongoDB 3.4

### MongoDB installeren
Source: [mongodb.com](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/)
##### GPG key importeren:
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```

##### MongoDB aan de source.list toevoegen:
```
echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.4 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```

##### Locale package database herladen
```
sudo apt-get update
```

##### MongoDB packages installeren
```
sudo apt-get install -y mongodb-org
```

***

### MongoDB runnen
Source: [mongodb.com](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/)
##### MongoDB starten
```
sudo service mongod start
```

##### Nakijken of MongoDB succesvol gestart is
log file nakijken: /var/log/mongodb/mongod.log
Als MongoDB succesvol gestart zal de laatste lijn het volgende zijn:
```
[initandlisten] waiting for connections on port <port>
```
standaart poort is 27017.

##### MongoDB stoppen
```
sudo service mongod stop
```

##### MongoDB herstarten
```
sudo service mongod restart
```

***

### MongoDB configureren
Source: [mkyong.com](https://www.mkyong.com/mongodb/mongodb-allow-remote-access/)
##### Remote acces
Standaart luistert MongoDB enkel op localhost.
Om remote acces te kunnen gebruiken moet het ip van de server worden toegevoegd aan mongod.conf.
Hier kan ook de poort dat mongodb op luistert aangepast worden.
mongod.conf staat op /etc/mongod.conf
```
#network interfaces
net:
	port: 27017
    bindIP: 127.0.0.1,add ip here
```
```
#network interfaces
net:
	port: 27017
    bindIP: 127.0.0.1,192.168.20.57
```
***

### MongoDB remote access

##### Robomongo
source: [robomongo](https://robomongo.org/)
Robomongo downloaden via source.
Standaard installatie.
Nu kan er verbinding gemaakt worden met MongoDB op de server via het ip adres van de server op de poort dat MongoDB luistert.
Robomongo biedt een makkelijkere manier om de database te managen.
