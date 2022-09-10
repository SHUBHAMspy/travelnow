import mongoose from "mongoose";


function dbConnect() {
	if(mongoose.connection.readyState >= 1){
		return;
	}

	mongoose.connect(process.env.LOCAL_DB_URI, {  // You cannot destructure process.env due to the nature of webpack
		useNewUrlParser: true,
		useUnifiedTopology: true,
		
})
.then(() =>  console.log('Connected to mongoDb ...'))
}

export default dbConnect;