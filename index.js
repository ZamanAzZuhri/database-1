
const drivers = [
  { 
    name: "WAN MOHAMMAD ZAMAN AZ ZUHRI BIN ZAINUDDIN (B122320074)",
    vehicleType: "sedan" ,
    rating: 4.6, 
    isAvailable: true 
  },
  { 
    name: "Jane Smith", 
    vehicleType: "suv",
    rating: 4.2, 
    isAvailable: false 
  },
];


// show the data in the console
console.log(drivers);

// TODO: show the all the drivers name in the console 
drivers.forEach(driver => console.log(driver.name));

console.log("----------------------------------------------------------")

// TODO: add additional driver to the drivers array
const count = drivers.push({name: "hamshar", vehicleType:"mpv", rating: 3.5, isAvailable: true});
console.log(count);
console.log("---------------");
console.log(drivers);

const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("connected to mongodb");

    const db = client.db("testDB");

    //task 3
    console.log("task 3");

    const driversCollection = db.collection("drivers");

    //drivers.forEach(async (driver) => {
      const result = await driversCollection.insertMany(drivers);
      console.log("✅ Inserted documents count:", result.insertedCount);
      console.log("✅ Inserted IDs:", result.insertedIds);

    //});
    
    //task 4
    console.log("task 4");

    const availableDrivers = await db.collection('drivers').find ({
      isAvailable: true,
      rating: {$gte: 4.5} 
    }).toArray();
    console.log("Available drivers:", availableDrivers);

    //task 5
    
    await collection.updateOne(
    { name: "WAN MOHAMMAD ZAMAN AZ ZUHRI BIN ZAINUDDIN (B122320074)" },
    { $inc: { rating: 0.1 } }
    );


   
    
  }catch (err) {
    console.error("Error:", err);
  }
  finally {
    await client.close();
    console.log("✅ MongoDB connection closed.");
  }
}

main();
