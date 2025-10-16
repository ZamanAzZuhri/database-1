
const drivers = [
  {
    name: "WAN MOHAMMAD ZAMAN AZ ZUHRI BIN ZAINUDDIN ",
    matrics: "b122320074",
  },
  {
    name: "anyone",
    matrics: "b12321",
  }
]; 

// show the data in the console
console.log(drivers);

// TODO: show the all the drivers name in the console 
drivers.forEach(driver => console.log(driver.name));

console.log("----------------------------------------------------------")

// TODO: add additional driver to the drivers array
const count = drivers.push({name: "hamshar", matrics: "b999999"});
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

    const driversCollection = db.collection("drivers");

    drivers.forEach(async (driver) => {
      const result = await driversCollection.insertOne(driver);
      console.log ("new driver created with result: ", result );
      console.log("Inserted documents count:", result.insertedCount);
      console.log("Inserted document with _id:", result.insertedId);
    });
  
    const availableDrivers = await db.collection('drivers').find ({
      isAvailable: true,
      rating: {$gte: 4.5} 
    }).toArray();
    console.log("Available drivers:", availableDrivers);
    
   
    
  }catch (err) {
    console.error("Error:", err);
  }
  finally {
    await client.close();
    console.log("✅ MongoDB connection closed.");
  }
}

main();
