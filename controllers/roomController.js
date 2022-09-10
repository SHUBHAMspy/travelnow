// It is actually the data fetching layer which controls and handles the in & out of data

import catchAsyncError from "../middleware/catchAsyncError";
import Room from "../models/room";
import ApiFeatures from "../utils/apiFeatures";
import CustomError from "../utils/error";

const allRooms = catchAsyncError(async (req,res) => {

	const roomsPerPage = 4;
	const roomsCount = await Room.countDocuments();
	
	const featuresApplied =  new ApiFeatures(Room.find(),req.query).search().filter();	

	let rooms = await featuresApplied.query.clone(); // this will be an array of rooms
	
	let filteredRoomsCount = rooms.length;
	
	featuresApplied.pagination(roomsPerPage);
	rooms = await featuresApplied.query;


	res.status(200).json({
			success:true,
			roomsCount,   
			filteredRoomsCount,
			roomsPerPage,	
			rooms
	})
		
	
})

const getSingleRoom = catchAsyncError(async (req,res,next) => {
	const room = await Room.findById(req.query.id);

	if(!room) {
		// res.status(404).json({
		// 	success: false,
		// 	error: 'Room not found with this id'
		// })
		next(new CustomError('Room not found with this id',404))
		return;
	}
  
	  res.status(200).json({
		  success: true,
		  room
	  })
  })

const createNewRoom= catchAsyncError(async (req,res) => {

	
		// If you try to send some extra fields in the request body but the create method while check
		// or will be knowing the schema only read the data defined in the schema.
		const room = await Room.create(req.body);  // seems like here creation & saving of document happens at the same time 
	
		res.status(200).json({
			success: true,
			room
		})
	
})

const updateRoom = catchAsyncError(async (req,res,next) => {
	const room = await Room.findByIdAndUpdate(req.query.id,req.body);

	if(!room) {
		// res.status(404).json({
		// 	success: false,
		// 	error: 'Room not found with this id'
		// })
		next(new CustomError('Room not found with this id',404))
		return;
	}
  
	res.status(200).json({
		success: true,
		room
	})
  })

	const deleteRoom = catchAsyncError(async (req,res,next) => {
		const room = await Room.findById(req.query.id);
	
		if(!room) {
			// res.status(404).json({
			// 	success: false,
			// 	error: 'Room not found with this id'
			// })
			next(new CustomError('Room not found with this id',404))
			return;
		}
		
		await Room.remove();

		res.status(200).json({
			success: true,
			message: 'Room has been deleted'
		})
	})
	
export {
	allRooms,
	getSingleRoom,
	createNewRoom,
	updateRoom,
	deleteRoom
};

