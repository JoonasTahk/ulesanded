let products = [];

function addItem() {
    const name = document.getElementById("productName").value;
    const quantity = parseInt(document.getElementById("productQuantity").value);
    if (name && quantity) {
        products.push({ name, quantity });
        updateProductSelect();
    }
}

function editItem() {
    const selectedIndex = document.getElementById("productSelect").selectedIndex;
    const newName = document.getElementById("newName").value;
    const newQuantity = parseInt(document.getElementById("newQuantity").value);
    if (selectedIndex >= 0 && (newName || !isNaN(newQuantity))) {
        const selectedProduct = products[selectedIndex];
        if (newName) {
            selectedProduct.name = newName;
        }
        if (!isNaN(newQuantity)) {
            selectedProduct.quantity = newQuantity;
        }
        updateProductSelect();
    }
}

function deleteItem() {
    const selectedIndex = document.getElementById("productSelect").selectedIndex;
    if (selectedIndex >= 0) {
        products.splice(selectedIndex, 1);
        updateProductSelect();
    }
}

function updateProductSelect() {
    const productSelect = document.getElementById("productSelect");
    productSelect.innerHTML = "";
    products.forEach((product, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

function searchItems() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    const searchResultsList = document.getElementById("searchResults");
    searchResultsList.innerHTML = "";
    searchResults.forEach(result => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `Nimi: ${result.name}, Kogus: ${result.quantity}`;
        searchResultsList.appendChild(listItem);
    });
}

