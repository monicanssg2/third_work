var productList = [];

if(localStorage.getItem('our Product')!=null)
{
    productList = JSON.parse(localStorage.getItem('our Product'));
    displayProduct();
}

var pNameInput = document.getElementById("pName");
var pPriceInput = document.getElementById("pPrice");
var pCategoryInput = document.getElementById("pCategory");
var pDescriptionInput = document.getElementById("pDescription");


function addProduct()
{
    if("#main-btn" == "Add Product")
    {
        var product={
            name: pNameInput.value,
            price: pPriceInput.value,
            category: pCategoryInput.value,
            desc: pDescriptionInput.value
        }
        productList.push(product);
        localStorage.setItem('our Product', JSON.stringify(productList));
        console.log(productList);
        displayProduct();
        clearForm();
    }
    else
    {
        
    }
}

function clearForm()
{
    pNameInput.value ="";
    pPriceInput.value = "";
    pCategoryInput.value = "";
    pDescriptionInput.value = "";
}

function displayProduct()
{
    var cartona = ``;
    for(var i=0; i<productList.length; i++)
    {
        cartona += `<tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-danger">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-primary">Delete</button></td>
        </tr>`;

    }
    document.getElementById("table").innerHTML = cartona;
}

function deleteProduct(index)
{
    productList.splice(index, 1);
    localStorage.setItem('our Product', JSON.stringify(productList));
    displayProduct();
}

function searchProduct(term)
{
    var cartona = ``;
    for(var i=0; i<productList.length; i++)
    {
        if(productList[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            cartona += `<tr>
            <td>${i}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].desc}</td>
            <td><button onclick="updateProduct(${i})" class="btn btn-danger">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-primary">Delete</button></td>
            </tr>`;
        }
    }
    document.getElementById("table").innerHTML = cartona;
}

function updateProduct(index)
{
    pNameInput.value = productList[index].name;
    pPriceInput.value = productList[index].price;
    pCategoryInput.value = productList[index].category;
    pDescriptionInput.value = productList[index].desc;
    document.getElementById("main-btn").innerHTML = "Update Product";
}