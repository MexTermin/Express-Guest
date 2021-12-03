module.exports = (app) => {
    let entries = []
    app.locals.entries = entries

    // Home
    app.get('/', (req, res) => {
        res.render("index", { title: "Home", data: [] })
    })


    // New entrys
    app.get('/new-entry', (req, res) => {
        res.render("new-entry", { title: "New Entry" })
    })

    app.post('/new-entry', (req, res) => {
        const data = req.body
        if (!data.title || !data.body) {
            res.send(400).json({ "message": "los campos no pueden estar vacios" })
        }
        const date = new Date();
        const newEntry = {
            title: data.title,
            content: data.body,
            published: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        }
        entries.push(newEntry)
        res.render("index", { title: "home", data: [newEntry] })
    })
}