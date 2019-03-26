let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const RefJournal = dataBase.getModel('RefJournal');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        await RefJournal.destroy({
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Record successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
