export default function PathParameters (app) {
    const add = (req,res) => {
        const {a,b} = req.params;
        const sum = parseInt(a) + parseInt(b);
            res.send(sum.toString());
    };

    const sub = (req,res) => {
        const {a,b} = req.params;
        const diff = parseInt(a) - parseInt(b);
            res.send(diff.toString());
    };

    const mul = (req,res) => {
        const {a,b} = req.params;
        const prod = parseInt (a) * parseInt(b);
        res.send(prod.toString());
    };

    const div = (req,res) => {
        const {a,b} = req.params;
        const quo = parseInt (a) / parseInt (b);
        res.send(quo.toString());
    };
    app.get("/lab5/add/:a/:b", add);
    app.get("/lab5/sub/:a/:b", sub);
    app.get("/lab5/mul/:a/:b", mul);
    app.get("/lab5/div/:a/:b", div);
}