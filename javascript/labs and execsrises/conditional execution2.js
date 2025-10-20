let contacts = [
  { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk" },
  { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
  { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

// Function to show the first contact using if-else
function showFirstContact() {
  if (contacts.length > 0) {
    console.log("First contact:", contacts[0]);
  } else {
    console.log("Contact list is empty.");
  }
}

// Function to show the last contact using conditional (ternary) operator
function showLastContact() {
  const lastContact = contacts.length > 0 ? contacts[contacts.length - 1] : null;
  lastContact ? console.log("Last contact:", lastContact) : console.log("Contact list is empty.");
}

// Function to add a contact and validate inputs using switch-case
function addContact(name, phone, email) {
  switch (true) {
    case !name:
      console.log("Name is missing. Contact not added.");
      break;
    case !phone:
      console.log("Phone is missing. Contact not added.");
      break;
    case !email:
      console.log("Email is missing. Contact not added.");
      break;
    default:
      contacts.push({ name, phone, email });
      console.log("Contact added successfully:", { name, phone, email });
  }
}

// Test the functions:
showFirstContact();
showLastContact();

addContact("Sarah Connor", "0712 456 7890", "sarah.connor@example.com"); // should add
addContact("John Doe", "", "john.doe@example.com");                     // missing phone
addContact("", "0123 456 7890", "no.name@example.com");                 // missing name

// Show updated contacts list
console.log("Updated contact list:", contacts);