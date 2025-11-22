const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a nodeJS server with expressJS",
    due: "2020-10-01", score: 0, completed: false,
};
const module1 = {
    id: 1, name: "NodeJS Module",
    description: "Work with a nodeJS server and expressJS server",
    due: "2020-10-10", score: 0, completed: false,
};
export default function WorkingWithObjects (app) {
    const getAssignment = (req,res) => {
        res.json(assignment);
    };
    const getTitle = (req,res) => {
        res.json(assignment.title);
    };
    const setAssignmentTitle = (req,res) => {
        const {newTitle} = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    };
    const getModule =(req, res) => {
        res.json(module1);
    }
    const getModuleName = (req,res) => {
        res.json(module1.name);
    };
    const setModuleName = (req,res) => {
        const {newName} = req.params;
        module1.name = newName;
        res.json(module1);
    };
    app.get("/lab5/assignment", getAssignment);
    app.get("/lab5/assignment/title", getTitle);
    app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
    app.get("/lab5/module", getModule);
    app.get("/lab5/module/name", getModuleName);
    app.get("/lab5/module/name/:newName", setModuleName);
};