const corporationList = []

module.exports = {
    addCorporation: async (req, res) => {
        try {
            const requestData = req.body
            console.log("requrest body data : ", requestData)
            corporationList.push(requestData)
            return res.send({
                message: "Added corporation successfully",
                statusCode: 200,
                status: true,
                body: {
                    corporationList: corporationList,
                    totalCorporation: corporationList.length
                }
            })
        } catch (error) {
            return res.send({
                message: "Internal server at add corporation",
                statusCode: 500,
                status: false,
                error: error.toString()
            })
        }
    },
    editCorporation: async () => { },
    deleteCorporation: async () => { },
}