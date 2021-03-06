# nodeglobal-d3tree

A demonstration of viewing M globals (YottaDB, Intersystems Cache/IRIS, GTM) with d3-dtree using node and reactjs.

YottaDB is deployed with nodem to attain data from YottaDB globals.

 ![Alt text](node-d3tree.webp?raw=true?raw=true "Dtree view")

The following CARS global is used for the demonstation:

     ^CARS("Audi","A3","White","Petrol",2020)="$12,450"
     ^CARS("Audi","A8","Grey","Petrol",2016)="$13,200"
     ^CARS("Audi","Q7","Grey","Diesel",2021)="$22,450"
     ^CARS("BMW",320,"Grey","Petrol",2016)="$10,200"
     ^CARS("BMW",330,"Blue","Petrol",2021)="$18,000"
     ^CARS("Land Rover","Evoque","Gold","Diesel",2021)="$43,000"
     ^CARS("Mercedes","GLB","Black","Diesel",2020)="$21,500"
     ^CARS("Mercedes","GLB","Black","Petrol",2020)="$20,050"
     ^CARS("Mercedes","GLC","Red","Petrol",2021)="$21,200"
     ^CARS("Nissan","Civic","Red","Diesel",2019)="$11,000"
     ^CARS("Nissan","Civic","Red","Diesel",2020)="$12,000"
     ^CARS("Nissan","Civic","Red","Petrol",2020)="$11,600"
     ^CARS("Nissan","Qashqai","Blue","Diesel",2018)="$12,400"
     ^CARS("Nissan","Qashqai","Green","Hybrid",2020)="$18,000"
     ^CARS("Toyota","Rav4","Black","Petrol",2019)="$11,400"
     ^CARS("Toyota","Rav4","Green","Petrol",2019)="$11,000"
     ^CARS("Toyota","Rav4","Orange","Petrol",2019)="$11,000"
     ^CARS("Toyota","Rav4","Silver","Petrol",2019)="$11,250"


# Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/RamSailopal/nodeglobal-d3tree)

To run a Gitpod with this repo:

1) Create a free/paid Gitpod account - https://www.gitpod.io/
2) Log into the account
3) Open a new browser tab and add **gitpod.io/#https://github.com/RamSailopal/nodeglobal-d3tree** to the address - This will create a new Gitpod cloud instance.
4) Wait till the Docker compose messages stop scrolling in the terminal and then click on the ports in the bottom right of the Gitpod window, then the globe icon next to the 3003 port. This will open another browser tab.
5) Due to blocked cross origin requests, A CORS browser add-on also needs to be added and enabled
   https://addons.mozilla.org/en-GB/firefox/addon/cors-everywhere/
   
   https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en
   
   With the firefox addon, ensure that the plugin is enabled in the browser header as in the image below:
   
   ![Alt text](https://github.com/RamSailopal/Fileman-d3/raw/main/corsenabled.png?raw=true?raw=true "CORS enabled")
   
   This contrasts to when CORS is disabled as in the image below:
   
   ![Alt text](https://github.com/RamSailopal/Fileman-d3/raw/main/corsdisabled.png?raw=true?raw=true "CORS disabled") 
   
   Once the CORS plugin is enabled, the dTree chart for the global will appear.

# References

**dTree** - https://github.com/ErikGartner/dTree

**react d3-dtree** - https://github.com/bkrem/react-d3-tree

**nodem** - https://github.com/dlwicksell/nodem

**wc-d3** - https://github.com/robtweed/wc-d3
