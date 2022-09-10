const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
	name:{
		type: String,
		required:[true,'Please enter the room name'],
		maxlength:[100,'Room name cannot exceed more than 100 characters'],
		trim: true
	},

	pricePerNight:{
		type: Number,
		required:[true,'Please enter the room price'],
		maxlength:[5,'Room price cannot exceed more than 5 chracters'],
		default: 0.0
	},

	description:{
		type: String,
		required:[true,'Please enter the room description'],
	},

	address:{
		type: String,
		required:[true,'Please enter the room address'],
	},

	guestCapacity:{
		type: Number,
		required:[true,'Please enter the room guest capacity'],
	},

	numOfBeds:{
		type: Number,
		required:[true,'Please enter the number of beds in room'],
	},

	airConditioned:{
		type: Boolean,
		default: false
	},

	mealsAvailable:{
		type: Boolean,
		default: false
	},

	internetAvailable:{
		type: Boolean,
		default: false
	},

	roomCleaning:{
		type: Boolean,
		default: false
	},

	petsAllowed:{
		type: Boolean,
		default: false
	},

	ratings:{
		type: Number,
		default: 0
	},

	noOfReviews:{
		type: Number,
		default: 0
	},

	category:{
		type: String,
		required: true,
		enum:{
			values:[
				'King',
				'Queen',
				'Single',
				'Twins'
			],
			message:'Please select correct category for room'
		},
	},

	reviews:[
		// Reviews will also be having information about user but not all to not make it bloated but only necessary information
		// Since it is a complex type we will be havving sub schemas as well va schemaTypes
		{
			user:{
				type:mongoose.Schema.ObjectId,
				ref:'User',
				required:true
			},

			name:{
				type:String,
				required: true
			},

			comment:{
				type: String,
				required:true
			}
		}
	],

	images:[
		{
			public_id:{
				type: String,
				required: true
			},

			url:{
				type: String,
				required: true
			}
		}
	],

	user:{
		type:mongoose.Schema.ObjectId,
		ref:'User',
		required: false
	},

	createdAt:{
		type: Date,
		default: Date.now
	}







})

const Room = mongoose.models.Room || mongoose.model('Room',roomSchema);

module.exports= Room;