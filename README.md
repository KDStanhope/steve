# Steve!

## Who or what is Steve?

Steve is a little pet project of mine. Steve is an ecosystem comprised of Steve and Steve Sense. 
Steve handles all the logic an enviromental controller would by turning on lights and fans and anything else really. 
Steve also collects environmental data using one of a  number of modular-design sensors quite frequently and keeps a log of it. 
Using this data, Steve makes choices about how to manage the environment using anumber of pre-defined factors. 
On top of this, Steve also hosts a front-end (Steve Sense) through which all manner of graphs and statistics can computed and perused. 
The Steve Sense front-end is web-based and all Steve's settings and parameters may be configured from there. 

# Ecosystem
## Raspberry-Pi
The brains of Steve reside on a Raspberry-Pi model 3b... or any little Debian based board - the Pi was what I had on hand. 
With Steve on the Pi, battery backup is possible and the system can operate for a couple of hours on battery alone. 

The Pi hosts a Django server running on Apache with Mod-WSGI. Django acts as an API end-point to receive readings from the sensor network.
The data is stored in a Postgresql Database.
Django also serves up a neat little front-end which displays live sensor readings on gauges as well as graphs and statistics relating to the sensor data collected.

## Sensor Network
The sensor network is currently a collection of low-cost ESP32 boards which simply collect sensor data at high frequency and update the main Steve database. 
Being modular means that additonal sensors can be easily implemented down the line. 
The sensors are built with intergrated battery backup as well. 

# Goal? 
Currently the main application for Steve is of course agriculture. 

Of pariucular interest to me was a different approach to maintaining optimum environmental conditions for plant biology than simply maintaining predefined relative humidity and temperature levels.
Often, in greenhouse settings, air-conditioning, heaters and dehumidifiers contribute significantly to the energy cost of producing plant biomass. 
I propose that a more meaningul metric to track would be that of vapour pressure, specifically the difference in vapour pressure between the air and the the saturated vapour pressure, for both the immediate atmoshere and the leaf surface. 
The difference would indicte the rate of transpiration of the plant, which is directly linked to other biological process such as nutrient uptake. 
Taking into consideration this metric and incorporating the ability to modulate light intensity using artificial lights, Steve aims to rather focus on the temperature and light intensity. 

# Current Status? 

Very alpha. Very very alpha. 

While Steve is fully operational and currently collecting data for me to test various approaches to the management of data and sensor information, I am still designing the enclosures for the sensors. 
Further to this, I am still testing Steve against AWS as a potential option to host as well as developing a complete solution for power distribution and monitoring where Steve shall be an integral part. 
The object of that excercise is to be able to include a single "box" that one simply plugs sensors and HVAC equipment into (all trip-switch isolated of course), therby effectively "Boxing" the whole Steve ecosystem. 

Let's see how this pans out... 
