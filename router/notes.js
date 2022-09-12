import express from 'express'
import { addNotepadData, getAllNotepadData, getByIdNotepadData, patchByIdNotepadDatah , deleteByIdNotepadDatah} from '../controller/notes.js';
const router = express.Router();

router.get("/", getAllNotepadData);

router.get("/:id", getByIdNotepadData);

router.post("/", addNotepadData);

router.patch("/:id", patchByIdNotepadDatah)  //to edit a particular data 

router.delete("/:id", deleteByIdNotepadDatah)

export default router;
