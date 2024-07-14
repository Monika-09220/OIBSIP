function _cmnRemoveAllErrorMessage()
{
    var allErrorBorder = document.getElementByClassName('error-border');
    var allErrorMessage = document.getElementsByClassName('error-message');
    var i;
    // Remove border
    for(i= (allErrorBorder.length)-1; i>=0; i--)
    {
        allErrorBorder[i].classList.remove("error-border");
    }
    // Remove error message
    for(i= (allErrorMessage.length)-1; i>=0; i--)
    {
        allErrorMessage[i].remove;
    }
}

function _cmShowErrorMessageBottomOfTheInputField(fieldID,errorMessage)
{
    var inputField = document.getElementById(fieldID);
    inputField.classList.add("error-border"); // add border
    inputField.focus(); // focus error field

    var errorMessageElement = document.createElement("p"); // create a p tag for error message
    errorMessageElement.innerHTML = errorMessage; // set the error message in the p tag
    errorMessageElement.classList.add("error-message"); // add the error message style class
    inputField.parentNode.insertBefore(errorMessageElement, inputField.nextSibling); // set the error message

}

function _cmnHideElement(elementId)
{
    var displayProperty = document.getElementById(elementId).style.display;
    if(displayProperty != givenDisplayProperty)
    {
        document.getElementById(elementId).style.display = givenDisplayProperty;
    }
}
