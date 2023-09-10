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




