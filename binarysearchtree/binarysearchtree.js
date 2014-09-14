/**
 * Implementation of binary search tree.
 */

/**
 * A node of the tree
 *
 * @public
 * @constructor
 * @param {number|string} Value of the node
 * @param {Node} Left subling
 * @param {Node} Right sibling
 * @param {Node} Parent of the node
 */
function Node(value, left, right, parent) {
  this.value = value;
  this._left = left;
  this._right = right;
  this._parent = parent;
}

/**
 * Defines the binary tree
 *
 * @public
 * @constructor
 */
function BinaryTree() {
  this._root = null;
}

