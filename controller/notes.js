import { notepadData } from "../data/nodepad.js";

export const getAllNotepadData = (req, res)=>{
    res.send(notepadData);
}

export const addNotepadData = (req, res)=>{
    const { body } = req;
    notepadData.push(body);
    res.send("Successfully added note to the DB");
}

export const getByIdNotepadData = (req, res)=> {
        console.log(req.params.id);
        const result = notepadData.filter(
          (notes) => notes.id === parseInt(req.params.id)
        );
        res.send(result);
      }

export const patchByIdNotepadDatah = (req, res) => {
            const { body, params } = req;
            console.log(req.params.id);
            notepadData.forEach((notes) => {
              if (notes.id === parseInt(params.id)) {
                if (body.title) {
                  notes.title = body.title;
                }
              }
            });
            res.send("Successfully updated note to the DB");
          };

export const deleteByIdNotepadDatah = (req, res) => {
                const idx = notepadData.findIndex(
                  (notes) => notes.id === parseInt(req.params.id)
                );
                if (idx >= 0) {
                  delete notepadData[idx];
                }
                res.send("Successfully deteled note to the DB");
              };
            
          
