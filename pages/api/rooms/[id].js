import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { deleteRoom, getSingleRoom, updateRoom } from "../../../controllers/roomController";
import onError from "../../../middleware/errorMiddleware";


const handler = nextConnect({onError});

dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);



export default handler;

