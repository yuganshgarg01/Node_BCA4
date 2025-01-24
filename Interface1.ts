interface User {
  name: string;
  age: number;
  email: string;
  phone?: string; // Optional property
}

// Function that accepts a User object
function printUserDetails(user: User): void {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Email: ${user.email}`);
  if (user.phone) {
    console.log(`Phone: ${user.phone}`);
  }
}

// Create a User object
const user: User = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  phone: "123-456-7890",
};

// Call the function
printUserDetails(user);
