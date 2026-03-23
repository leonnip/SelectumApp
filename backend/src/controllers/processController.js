const ProcessStep = require("../models/processStep");
const ProcessHistory = require("../models/processHistory");

const { generateHash } = require("../services/hashService");

/**
 * Crea el proceso con los datos
 * que viene desde el FrontEnd
 * -----------------------------
 * @param {*} req 
 * @param {*} res 
 */
async function createProcess(req, res) {

    try {

        const { name, description, step_order } = req.body;

        const process = await ProcessStep.create({
            name,
            description,
            step_order
        });

        const lastRecord =
            await ProcessHistory.findOne({
                order: [["createdAt", "DESC"]]
            });

        const previousHash =
            lastRecord ? lastRecord.hash : "GENESIS";

        const data = {
            name,
            description,
            step_order
        };

        const hash =
            generateHash(data, previousHash);

        await ProcessHistory.create({
            process_id: process.id,
            action: "CREATE",
            data,
            previous_hash: previousHash,
            hash
        });

        res.json(process);

    } catch (error) {

        res.status(500).json(error);

    }

}

/**
 * Se obtienen los procesos
 * y se los retorna al FrontEnd
 * ------------------------------
 * @param {*} req 
 * @param {*} res 
 */
async function getProcesses(req, res) {

    const processes =
        await ProcessStep.findAll({
            order: [["step_order", "ASC"]]
        });

    res.json(processes);

}

/**
 * Se obtiene el historial
 * de los procesos creados
 * -------------------------
 * @param {*} req 
 * @param {*} res 
 */
async function getHistory(req, res) {

    const history =
        await ProcessHistory.findAll({
            order: [["createdAt", "ASC"]]
        });

    res.json(history);

}

module.exports = {
    createProcess,
    getProcesses,
    getHistory
};