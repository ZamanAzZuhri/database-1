const { MongoClient } = require("mongodb");

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
drivers.forEach((element) => console.log(element)); 

// TODO: add additional driver to the drivers array
const count = drivers.push("hamshar");
console.log(count);
console.log(drivers);

async function main() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("testDB");
    const users = db.collection("users");

    const result = await users.insertOne({ name: "Test User", age: 25 });
    console.log("Inserted document with _id:", result.insertedId);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

main();
