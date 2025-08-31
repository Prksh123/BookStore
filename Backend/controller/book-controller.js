import Book from '../Models/Book-model.js';

export const getBook = async(req, res) => {
    try {
        const { type } = req.query;
        const filter = {};

        if(type == "free"){
            filter.catagory = "Free";
        }
        else if(type == "paid"){
            filter.catagory = { $ne: "Free" };
        }
        const book = await Book.find(filter);
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};