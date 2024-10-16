const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://arihant:fP67I74Tvl8pLtS2@cluster0.wjn40.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
