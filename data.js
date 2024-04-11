function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Event listener to close the popup when the close button is clicked
document.getElementById('closePopupBtn').addEventListener('click', closePopup);

async function data () {
    try {
        const name = document.getElementById('name').value;
    const businessName = document.getElementById('bizname').value;
    const businessAddress = document.getElementById('bizAdd').value;
    const phoneNumber = document.getElementById('phone').value;
    const bt = document.getElementById('biz-bt');

    if (!name) {
        return alert('Your name is required');
    };

    if (!businessName) {
        return alert('Your Business name is required');
    };

    if (!businessAddress) {
        return alert('Your Business address is required');
    };

    if (!phoneNumber) {
        return alert('Your phone number is required');
    };

    bt.textContent = 'Please Wait';

    const data = {
        name,
        businessName,
        businessAddress,
        phoneNumber,
    };

    const url = 'https://sendquik-backend.onrender.com/api/add-business';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Access-Control-Allow-Origin-": "no-cors",
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    const msg = await response.json();
    console.log(msg);

    if (response.status === 200) {
        bt.textContent = 'Continue';
         return showPopup();
    }

    return alert('Something Went Wrong!');
    } catch (error) {
        return alert('No internet Connection');
    }
};