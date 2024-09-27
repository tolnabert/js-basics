import _ from "lodash";

/*
 * Your task is to ensure that the functions here do not
 * change the input object or its sub objects or arrays. Keep the original business logic.
 *
 * Do not call the functions in this file for testing, but
 * use the playground.js.
 *
 * Some resources to get inspired:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * - https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
 * - https://lodash.com/docs/4.17.15#cloneDeep
 * - https://immerjs.github.io/immer/produce
 *
 * (immer and lodash are installed as a dependencies)
 */

/**
 * Increase the dog.owner.age by one.
 *
 * The dog looks like this:
 *
 * const zeus = {
 *   name: 'Zeus',
 *   colors: ['brown', 'black'],
 *   owner: {
 *     name: 'Higgins',
 *     age: 45
 *   }
 * }
 *
 * @param {*} dog
 * @returns The modified dog object.
 */
export function celebrateTheOwnersBirthday(dog) {
  // dog.owner.age++
  // return dog

  //solution 1

  // return {
  //   ...dog,
  //   owner: {
  //     ...dog.owner,
  //     age: dog.owner.age + 1
  //   }
  // };

  // solution 2

  // const modifiedDog = produce(dog, (draft) => {
  //   draft.owner.age++;
  // });
  // return modifiedDog;

  const clonedDog = _.cloneDeep(dog);
  clonedDog.owner.age++;
  return clonedDog;
}

/**
 * Add a new color to the dog.color property.
 *
 * The dog looks like this:
 *
 * const zeus = {
 *   name: 'Zeus',
 *   colors: ['brown', 'black'],
 *   owner: {
 *     name: 'Higgins',
 *     age: 45
 *   }
 * }
 *
 * @param {*} dog
 * @param {string} newColor
 */
export function paintTheDogPartly(dog, newColor) {
  // original problem

  // dog.colors.push(newColor);
  // return dog;

  // solution 1

  // return {
  //   ...dog,
  //   colors: [...dog.colors, newColor]
  // };

  const clonedDog = _.cloneDeep(dog);
  clonedDog.colors.push(newColor);
  return clonedDog;
}

/**
 * Increase one item's quantity in a shopping cart.
 *
 * A cart item looks like this:
 * {name: 'book', price: 32, quantity: 1}
 *
 * @param {items[]} cart, an array of shopping cart item objects
 * @param {number} index, the index of the item to change.
 * @returns the modified cart
 */
export function increaseItemQuantity(cart, index) {
  // original problem

  // cart[index].quantity++;
  // return cart;

  // solution 1

  // return cart.map((item, i) =>
  //   i === index ? { ...item, quantity: item.quantity + 1 } : item
  // );

  const clonedCart = _.cloneDeep(cart);
  clonedCart[index].quantity++;
  return clonedCart;
}

/**
 * Change the name of an item in a shopping cart.
 *
 * A cart item looks like this:
 * {name: 'book', price: 32, quantity: 1}
 *
 * @param {items[]} cart, an array of shopping cart item objects
 * @param {number} index, the index of the item to change.
 * @param {string} newName
 * @returns the modified cart
 */
export function renameItem(cart, index, newName) {
  if (index >= cart.length) {
    throw new Error("Invalid index, the cart has not enough items.");
  }

  // original problem

  // cart[index].name = newName;
  // return cart;

  // solution 1

  // return cart.map((item, i) =>
  //   i === index ? { ...item, name: newName } : item
  // );

  const clonedCart = _.cloneDeep(cart);
  clonedCart[index].name = newName;
  return clonedCart;
}

/**
 * Decrease the price of an item with a given percentage.
 *
 * A cart item looks like this:
 * {name: 'book', price: 32, quantity: 1}
 *
 * @param {items[]} cart, an array of shopping cart item objects
 * @param {number} index, the index of the item to change.
 * @param {number} discount, the percentage to decrease with
 *  e.g. if it is 20, it means cheaper with 20 percent, so the original
 *  price's 80% should be calculated.
 * @returns the modified cart
 */
export function applyDiscount(cart, index, discount) {
  if (index >= cart.length) {
    throw new Error("Invalid index, the cart has not enough items.");
  }
  // original problem

  // const item = cart[index];
  // const newPrice = item.price * (1 - (discount / 100));
  // item.price = newPrice;
  // return cart;

  // solution 1

  // return cart.map((item, i) =>
  //   i === index ? { ...item, price: item.price * (1 - (discount / 100)) } : item
  // );

  const clonedCart = _.cloneDeep(cart);
  const item = clonedCart[index];
  item.price *= 1 - discount / 100;
  return clonedCart;
}
