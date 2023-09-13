//sort array

function sortArray(array) {
    let sorted = array.sort(function (a, b) {  return a - b;  });
       return sorted
 }
 
function removeDuplicates(sortedArray) {

 for (let i = 0; i < sortedArray.length; i++) {
     if (i > 0) {
         if (sortedArray[i] == sortedArray[i -1])
         sortedArray.splice([i - 1], 1)
     }

 }
    return sortedArray
   }


// JavaScript program to print BST in given range

// A binary tree node
class Node
{
	constructor(d)
	{
		this.data = d;
		this.left = null;
		this.right = null;
	}
}

var root = null;

/* A function that constructs Balanced Binary Search Tree
from a sorted array */
function sortedArrayToBST(arr, start, end)
{
   
	/* Base Case */
	if (start > end)
	{
		return null;
	}
	/* Get the middle element and make it root */
	var mid = parseInt((start + end) / 2);
	var node = new Node(arr[mid]);
	/* Recursively construct the left subtree and make it
	left child of root */
	node.left = sortedArrayToBST(arr, start, mid - 1);
	/* Recursively construct the right subtree and make it
	right child of root */
	node.right = sortedArrayToBST(arr, mid + 1, end);
	return node;
}


/* A utility function to print preorder traversal of BST */
function preOrder(node)
{
	if (node == null)
	{
		return;
	}
	console.log(node.data + " ");
	preOrder(node.left);
	preOrder(node.right);
}

//function to print tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let arr2 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]




function buildTree(arr) {
sortArray(arr)
removeDuplicates(arr)
console.log(arr)
let n = arr.length;
root = sortedArrayToBST(arr, 0, n - 1);
console.log("Preorder traversal of constructed BST<br>");
preOrder(root);

prettyPrint(root)
}

buildTree(arr2)

function insert(data, node = this.root) {
    if (node == null) {
      node = new Node(data);
      return node;
    }

    if (data < node.data) node.left = this.insert(data, node.left);
    else if (data > node.data) node.right = this.insert(data, node.right);
    return node;
  }

  insert(1050)
  insert (15252562566)

  function del(data, node = root) {
    if (node == null) return node;

    if (data < node.data) node.left = del(data, node.left);
    else if (data > node.data) node.right = del(data, node.right);
    else {
      // node with only one child or no child
      if (node.left == null) return node.right;
      if (node.right == null) return node.left;

      // node with two children
      node.data = this.minValue(node.right);
      node.right = this.delete(node.data, node.right);
    }
    return node;
  }

  function minValue(node) {
    let minv = node.data;
    while (node.left != null) {
      minv = node.left.data;
      node = node.left;
    }
    return minv;
  }

 

//del(1050)
prettyPrint(root)
console.log(minValue(root))

function find(value, root = this.root) {
	// Return root if null or matches value
	if (root === null || root.data === value) {
	return root;
	}

	// Access root's children if value not found; 
	if (value < root.data) {
	return this.find(value, root.left);
	}
	return this.find(value, root.right); 
  }

function depth(data, node = root) {
    if (node.data === data.data) return 0;
    if (data.data < node.data) return this.depth(data, node.left) + 1;
    if (data.data > node.data) return this.depth(data, node.right) + 1;
  }
  console.log(depth(find(7)));
