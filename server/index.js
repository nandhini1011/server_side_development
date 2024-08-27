//importing dependencies
const express = require("express");

//setting up express app
const app =express();

//Define port
const PORT = 8080

app.use((req, res, next) => {
    console.log(req.path , req.method);
    next();
})

//importing Router
const dashboardRoutes = require('./routes/dashboardRoutes.js');

app.use("/dashboard",dashboardRoutes);

app.listen(PORT, () => {
    console.log(`Dashboard => listening to ${PORT}`);
});