import express from "express";
const app = express();
import connectDB from "./Loader/db";
import cors from "cors"

// Connect Database
app.use(cors());
connectDB();
app.use(express.urlencoded());
app.use(express.json());

// Define Routes
app.use("/api/users", require("./api/users"));
app.use("/api/comment", require("./api/comment"));

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "production" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

app
    .listen(5000, () => {
        console.log(`
    ################################################
    🛡️  Server listening on port: 5000 🛡️
    ################################################
`);
    })
    .on("error", (err) => {
        console.error(err);
        process.exit(1);
    });
