// CHALLENGE - UNION TYPE
// Number |  String
let discount: number | string = 20;
discount = '20%';
// discount = true; // Error

// Literal types
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
// orderStatus = 'cancelled'; // Error
