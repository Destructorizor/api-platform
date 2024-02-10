const Api = require('. .models/ApiModel');

module.exports = {
    createApi: (req, res) => {
        const { title, description, code, language } = req.body;
        const newApi = new Api({ title, description, code, language});
        newApi.save((err, api) => {
            if (err) return res.status(500).send(err);
            res.status(200).json(api);
        })
    }
};

getApiList: (req, res) => {
    Api.find({}, (err, apiList) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(apiList);
    })
};
