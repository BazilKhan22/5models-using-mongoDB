use('Assignment2DB');

// Users
db.users.insertMany([
  { name: "Ali", email: "ali@gmail.com", age: 22 },
  { name: "Sara", email: "sara@gmail.com", age: 25 }
]);

// Products
db.products.insertMany([
  { name: "Laptop", price: 1200, stock: 10 },
  { name: "Mouse", price: 25, stock: 50 }
]);

// Blogs
db.blogs.insertMany([
  { title: "MongoDB Tips", content: "Use indexes", author: "Admin" },
  { title: "React vs Vue", content: "React is 🔥", author: "User1" }
]);

// Orders
db.orders.insertMany([
  { userId: 1, product: "Laptop", quantity: 1 },
  { userId: 2, product: "Mouse", quantity: 3 }
]);

// Categories
db.categories.insertMany([
  { name: "Electronics" },
  { name: "Accessories" }
]);
