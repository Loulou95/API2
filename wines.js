> db.wines.insert({ name: "Blossom Hill" Year: [ "2009" ], Country: ["France"], Description: ["Fruity Rose"] } )
  WriteResult({ "nInserted" : 1 })
> db.wines.insert( { name: "Blossom Hill", Year: [ "2006" ], Country: ["France"], Description: ["Fruity Rose"] } )
  WriteResult({ "nInserted" : 1 })
> db.wines.insert( { name: "Castillo San Lorenzo Rioja Gran Reserva " Year: [ "2010" ], Country: ["France"], Description: ["Fruity Rose"] } )
  WriteResult({ "nInserted" : 1 })
  
  db.wines.find()
  { "_id" : ObjectId("5638d8b8cabb5db66a09d33a"), "name": "Blossom Hill" Year: [ "2009" ], Country: ["France"], Description: ["Fruity Rose"] }
  { "_id" : ObjectId("5638d98bcabb5db66a09d33b"), "name": "Blossom Hill", Year: [ "2006" ], Country: ["France"], Description: ["Fruity Rose"] }
  { "_id" : ObjectId("5638d9cbcabb5db66a09d33c"), "name": "Castillo San Lorenzo Rioja Gran Reserva" Year: [ "2010" ], Country: ["France"], Description: ["Fruity Rose"] }