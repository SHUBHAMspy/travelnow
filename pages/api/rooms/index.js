import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, createNewRoom } from "../../../controllers/roomController";
import onError from "../../../middleware/errorMiddleware";

const handler = nextConnect({onError});

dbConnect();

handler.get(allRooms);
handler.post(createNewRoom);

export default handler;