const Room = require('../models/room');
const rooms = require('../data/rooms');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/travelnow", {  // You cannot destructure process.env due to the nature of webpack
	useNewUrlParser: true,
	useUnifiedTopology: true,
	
})
.then(() =>  console.log('Connected to mongoDb ...'))


const seedRooms = async () => {
    try {
        await Room.deleteMany();
        console.log('Previous present rooms have been deleted');
    
        await Room.insertMany(rooms);
        console.log('Rooms have been inserted');

				process.exit();
        
    } catch (error) {
        console.log(error.message);
				process.exit();
    }
    


}

seedRooms();