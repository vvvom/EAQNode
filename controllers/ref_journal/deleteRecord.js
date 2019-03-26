let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Ref_journal = dataBase.getModel('Ref_journal');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        await Ref_journal.destroy({
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