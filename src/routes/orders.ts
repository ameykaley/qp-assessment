import { bookItems } from "../controllers/bookItems";
import { getItemsController } from "../controllers/getItemsController";

const express  = require('express');
const router = express.Router();

router.post('/', bookItems);
router.get('/', getItemsController)

module.exports = router;