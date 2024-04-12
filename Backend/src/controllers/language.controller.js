import { getConnection} from "./../database/database";

// Get Multi-Data
const getLanguages = async (req, res) => {
    try {
        const connection =  await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

// Get Uniq-Data
const getLanguage = async (req, res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const connection =  await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language WHERE idd = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

// Post
const addLanguage = async (req, res) => {
    try {
        const {name, programmers} = req.body;

        if(name== undefined || programmers== undefined){
            res.status(404).json({
                message: "Bad Request. Please fill all field."
            });
        }

        const language = {name, programmers};
        const connection =  await getConnection();
        const result = await connection.query("INSERT INTO language SET ?", language);
        res.json({
            message: "Lenguage added"
        });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

// Put Data
const updateLanguage = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, programmers} = req.body;

        if(id==undefined || name== undefined || programmers== undefined){
            res.status(404).json({
                message: "Bad Request. Please fill all field."
            });
        }
        
        const language = {id, name, programmers};
        const connection =  await getConnection();
        const result = await connection.query("UPDATE language SET ? WHERE id = ?", [language, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

// Delete Data
const deleteLanguage = async (req, res) => {
    try {
        const {id} = req.params;
        const connection =  await getConnection();
        const result = await connection.query("DELETE FROM language WHERE idd = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    updateLanguage,
    deleteLanguage
};