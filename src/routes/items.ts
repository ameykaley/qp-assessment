import { createItemController } from "../controllers/createGroceryItems";
import { getItemsController } from "../controllers/getItemsController";
import { updateGroceryitems } from "../controllers/updateGroceryitems";
import { deleteItems } from "../controllers/deleteItems";
import { updateInventory } from "../controllers/update"

const express  = require('express');

const router = express.Router();


router.get('/', getItemsController);
router.post('/', createItemController);

router.put('/:id', updateGroceryitems);
router.delete('/:id', deleteItems)

router.patch('/:id', updateInventory)


module.exports = router;