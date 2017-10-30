use route_planner;

db.routes.drop()

db.routes.insert([
  {
    name: "Three hour route",
    origin: {lat: 55.9519361, lng: -3.1917565},
    destination: {lat: 55.9519361, lng: -3.1917565},
    waypoints:[{location: "Scott Monument", stopover: true},
    {location: "The Royal Scots Greys Monument", stopover: true},
    {location: "Ross Fountain", stopover: true},
    {location: {lat: 55.947641,lng: -3.200549}, stopover: true},
    {location: "Mary's Milk Bar", stopover: true},
    {location: "The Bow Bar", stopover: false},
    {location: "David Hume Statue", stopover: true},
    {location: "Bella Italia Edinburgh Northbridge", stopover: true}]
  },

  {
    name: "Six Hour Route",
    origin: {lat: 55.9519361, lng: -3.1917565},
    destination: {lat: 55.9519361, lng: -3.1917565},
    waypoints:[{location: "Scott Monument", stopover: true},
    {location: "The Royal Scots Greys Monument", stopover: true},
    {location: "Ross Fountain", stopover: true},
    {location: {lat: 55.947641,lng: -3.200549}, stopover: true},
    {location: "Mary's Milk Bar", stopover: true},
    {location: "The Bow Bar", stopover: false},
    {location: "David Hume Statue", stopover: true},
    {location: "Bella Italia Edinburgh Northbridge", stopover: true},
    {location: "Abbey Sanctuary - Historic Scotland", stopover: true},
    {location: "Calton Hill", stopover: true}]
  },

  {
    name: "Eight Hour Route",
    origin: {lat: 55.9519361, lng: -3.1917565},
    destination: {lat: 55.9519361, lng: -3.1917565},
    waypoints:[
      {location: "Scott Monument", stopover: true},
      {location: "The Royal Scots Greys Monument", stopover: true},
      {location: "Ross Fountain", stopover: true},
      {location: {lat: 55.947641,lng: -3.200549}, stopover: true},
      {location: "Mary's Milk Bar", stopover: true},
      {location: "The Bow Bar", stopover: false},
      {location: "David Hume Statue", stopover: true},
      {location: "Bella Italia Edinburgh Northbridge", stopover: true},
      {location: "Abbey Sanctuary - Historic Scotland", stopover: true},
      {location: "Calton Hill", stopover: true},
      {location: "Scottish National Portrait Gallery", stopover: true}
    ]
  },

  {
    name: "Insta Edinburgh",
    origin: {lat: 55.9519361, lng: -2.1917565},
    destination: {lat: 55.9519361, lng: -1.1917565},
    waypoints:[
      {location: "National Museum of Scotland", stopover: true},
      {location: "Princes Street Gardens", stopover: true},
      {location: "Grassmarket", stopover: true},
      {location: "Vennel", stopover: true},
      {location: "Royal Mile", stopover: true},
      {location: "Advocate's Close", stopover: true},
      {location: "Victoria Street", stopover: false},
      {location: "New College", stopover: true},
      {location: "Calton Hill", stopover: true},
      {location: "Circus Lane", stopover: true},
      {location: "Dean Village", stopover: true},
      {location: "Belford Mews", stopover: true},
      {location: "Royal Botanic Gardens", stopover: true},
      {location: "Arthur's Seat", stopover: true}
    ]
  }

])

db.routes.find()
