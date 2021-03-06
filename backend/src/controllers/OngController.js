const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("Hex");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  },

  async getAll(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  }

  // async delete(request, response) {
  //   const { id } = request.body;

  //   await connection("ongs")
  //     .where("id", id)
  //     .delete();

  //   return response.json();
  // }
};
