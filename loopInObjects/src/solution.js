/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let totalCents = 0;

  for (const item in cart) {
    const { quantity, priceInCents } = cart[item];
    totalCents += quantity * priceInCents;
  }

  return totalCents;
}

function printCartInventory(cart) {
  let inventoryString = '';

  for (const item in cart) {
    const { quantity } = cart[item];
    inventoryString += `${quantity}x${item}\n`;
  }

  return inventoryString;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
