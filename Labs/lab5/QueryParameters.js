export default function QueryParameters (app) {
    const calc = (req,res) => {
        const {a, b, operation} = req.query;
        let result = 0;
        switch (operation) {
            case "add" :
                result = parseInt (a) + parseInt (b);
                break;
            case "sub" :
                result = parseInt (a) - parseInt (b);
                break;
            case "mul" :
                result = parseInt (a) * parseInt (b);
                break;
            case "div" :
                result = parseInt (a) / parseInt (b);
                break;
            default :
                result = "Invalid Operation";
        }
        res.send(result.toString());
    };
    app.get("/lab5/calculator", calc);
}