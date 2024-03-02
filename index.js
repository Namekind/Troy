// Firebase configuration (replace with your own)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp_FJA7F41lSXZ2ynpejztXVCZhFyWSig",
  authDomain: "eversuse-46211.firebaseapp.com",
  projectId: "eversuse-46211",
  storageBucket: "eversuse-46211.appspot.com",
  messagingSenderId: "932580302128",
  appId: "1:932580302128:web:28a38f308a586ff31abcf5",
  measurementId: "G-D9NVQKD24D"
};
// Firebase configuration (replace with your own)

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Get references to Firestore database and message area
const db = firebase.firestore();
const messageArea = document.getElementById("message-area");

// Function to display messages (success or error)
const displayMessage = (message, type = "success") => {
  messageArea.classList.remove("alert-danger", "alert-success");
  messageArea.classList.add(`alert-${type}`);
  messageArea.querySelector("#message-text").textContent = message;
  messageArea.classList.remove("d-none");
  setTimeout(() => messageArea.classList.add("d-none"), 3000); // Hide message after 3 seconds
};



// Function to add more field input fields dynamically
const addField = () => {
  const fieldContainer = document.getElementById("field-container");
  const fieldGroup = document.createElement("div");
  fieldGroup.classList.add("mb-3", "field-group");
  fieldGroup.innerHTML = `
    <label for="fieldName" class="form-label">Field Name:</label>
    <input type="text" class="form-control" name="fieldName" placeholder="Enter field name">
    <label for="fieldValue" class="form-label">Field Value:</label>
    <input type="text" class="form-control" name="fieldValue" placeholder="Enter field value">
  `;
  fieldContainer.appendChild(fieldGroup);
};

// Add event listener for the "Add More Fields" button
const addFieldBtn = document.getElementById("addFieldBtn");
addFieldBtn.addEventListener("click", addField);




// Function to create a collection and document
const createCollectionAndDocument = () => {
  const collectionName = document.getElementById("collectionName").value;
  const documentName = document.getElementById("documentName").value;

  if (!collectionName || !documentName) {
    displayMessage("Please fill in Collection Name and Document Name", "error");
    return;
  }

  const fieldGroups = document.querySelectorAll(".field-group");
  if (fieldGroups.length === 0) {
    displayMessage("Please add at least one field", "error");
    return;
  }

  const data = {}; // Object to store field name-value pairs

  // Iterate over each field group and gather field name-value pairs
  fieldGroups.forEach((fieldGroup) => {
    const fieldNameInput = fieldGroup.querySelector('[name="fieldName"]');
    const fieldValueInput = fieldGroup.querySelector('[name="fieldValue"]');
    const fieldName = fieldNameInput.value.trim();
    const fieldValue = fieldValueInput.value.trim();

    if (fieldName && fieldValue) {
      data[fieldName] = fieldValue;
    }
  });

  if (Object.keys(data).length === 0) {
    displayMessage("Please fill in all field name and value pairs", "error");
    return;
  }

  // Use set method to add data to the document
  db.collection(collectionName)
    .doc(documentName)
    .set(data)
    .then(() => {
      console.log("Document created successfully!");
      displayMessage("Document created successfully!");
    })
    .catch((error) => {
      console.error("Error creating document:", error);
      displayMessage("Failed to create document: " + error.message, "error");
    });
};





// Function to update a specific field
const updateField = () => {
  const updateCollectionName = document.getElementById("updateCollectionName").value;
  const updateDocumentName = document.getElementById("updateDocumentName").value;
  const updateFieldName = document.getElementById("updateFieldName").value;
  const updateFieldValue = document.getElementById("updateFieldValue").value;

  if (!updateCollectionName || !updateDocumentName || !updateFieldName || !updateFieldValue) {
    displayMessage("Please fill in all fields", "error");
    return;
  }

  // Create an update object with the specific field and value
  const updateData = { [updateFieldName]: updateFieldValue };

  // Use update method to modify the targeted field
  db.collection(updateCollectionName)
    .doc(updateDocumentName)
    .update(updateData)
    .then(() => {
      console.log("Field updated successfully!");
      displayMessage("Field updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating field:", error);
      displayMessage("Failed to update field: " + error.message, "error");
    });
};

// Add event listeners for form submissions
const createForm = document.getElementById("create-form");
const updateForm = document.getElementById("update-form");

createForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createCollectionAndDocument();
});

updateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateField();
});
