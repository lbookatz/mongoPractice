const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const userRoutes = require("./routes/routes")
// const User = require("./models/user");
// const Movie = require("./models/movie");
const deleteCreate = require("./routes/create")
const showdb = require("./routes/showdb")
const addmovie = require("./routes/addmovie")

const addfavorite = require("./routes/addfavorite")


mongoose.connect("mongodb://localhost:27017/signup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json())

app.use("/create",deleteCreate)
app.use("/showdb",showdb)
app.use("/addmovie",addmovie)
app.use("/addfavorite",addfavorite)


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
