import Client from "../models/clientModel.js";

export async function createNewClient(req, res) {
  const { name, email, date, time } = req.body;
  try {
    const newClient = {
      name,
      email,
      date,
      time,
    };
    const client = await Client.create(newClient);

    res.json(client);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function updateClient(req, res) {
  const { id } = req.params;
  const { name, email, date, time } = req.body;
  try {
    const client = await Client.findByIdAndUpdate(id, {
      name,
      email,
      date,
      time,
    });
    res.json(client);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function getAllRegisteredClients(req, res) {
  try {
    const response = await Client.find({});
    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function deleteClient(req, res) {
  try {
    const { id } = req.params;
    const deleteRes = await Client.findOneAndDelete({ _id: id });
    res.json(deleteRes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
