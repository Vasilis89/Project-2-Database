import Character from "../models/Character.js";

export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findById(id);

    if (character) {
      return res.json(character);
    }

    res.status(404).json({ message: "Character not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCharacter = async (req, res) => {
  try {
    const character = new Character(req.body) 
  }
}
