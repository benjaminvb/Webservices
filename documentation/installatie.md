# Installatie

### Debian

Debian installatie iso: debian-8.6.0-amd64-netinst.iso
Start een virtuele machine en installeer debian :
keuze's tijdens installatie :
- Hostname : BVB-1
- Root paswoord: xxxxxxx
- Gebruikersnaam : bvb - pw: xxxxxxx
- geïnstalleerde onderdelen: Desktop afzetten! - enkel ssh en core pavackages installeren.

### Node.js
source: [nodejs.org](https://nodejs.org/en/download/package-manager/)
##### Node.js installeren
```
sudo apt-get install -y nodejs
```

##### Node.js versie
```
nodejs --version
```
geeft:
`
v4.70
`



##### Nieuw project aanmaken
source: [weaintplastic.github.io](http://weaintplastic.github.io/web-development-field-guide/Development/Frontend_Development/Setting_up_your_project/Setup_Dependency_Managers/Node_Package_Manager/Initialize_NPM_on_a_new_project.html)
```
npm init
```
***
### Snort

source: [vultr.com](https://www.vultr.com/docs/how-to-configure-snort-on-debian)

#####pre installatie configuratie
pakketten voor SBPP
```
sudo apt-get install flex bison build-essential checkinstall libpcap-dev libnet1-dev libpcre3-dev libnetfilter-queue-dev iptables-dev libdumbnet-dev zlib1g-dev -y
```
file downloaden
```
wget https://www.snort.org/downloads/snort/daq-2.0.6.tar.gz
```
file extracten
```
tar xvfz daq-2.0.6.tar.gz
```
In daq directory gaan
```
cd daq-2.0.6
```
configureren en installeren
```
./configure; make; sudo make install
```

##### Snort installeren
In dezelfde directory als daq staat.
File downloaden:
```
wget https://www.snort.org/downloads/snort/snort-2.9.8.0.tar.gz
```
file extracten
```
tar xvfz snort-2.9.8.0.tar.gz
```
In daq directory gaan
```
cd snort-2.9.8.0
```
configureren en installeren
```
 ./configure --enable-sourcefire; make; sudo make install
```

##### Shared libraries updaten
```
sudo ldconfig
```

##### Snort testen
```
snort --version
```
[screenshot snort version](https://github.com/benjaminvb/Webservices/blob/master/documentation/screenshots/snort_version.png)
```
snort
```
[screenshot snort run part1](https://github.com/benjaminvb/Webservices/blob/master/documentation/screenshots/snortp1.png)

[screenshot snort run part2](https://github.com/benjaminvb/Webservices/blob/master/documentation/screenshots/snort%20p2.png)
***

###MongoDB
zie mongodb.md
