// calendar
$(document).ready(function() {
$('#date').datepicker({
    format: 'yyyy-mm-dd',
    autoclose: true
    });
});

// for dropdown
// get elements
const locDropdown = document.getElementById('location');
const artistDropdown = document.getElementById('artist');

// artists by loc
const artistsLoc = {
ottawa: ['Panda', 'Red-y'],
amsterdam: ['Foxy', 'Winter']
};

// update artist dropdown
function updateArtistOpts() {
    const selectLoc = locDropdown.value;
    const selectArtist = artistDropdown.value;
    artistDropdown.innerHTML = ''; // clear options

    // default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select artist';
    artistDropdown.appendChild(defaultOption);

    // enable artist selection
    if (!selectLoc) {
        defaultOption.textContent = 'Please select the location first';
        artistDropdown.disabled = true;
    } else {
        artistDropdown.disabled = false;

        if (selectArtist && (!artistsLoc.hasOwnProperty(selectLoc) || !artistsLoc[selectLoc].includes(selectArtist))) {
            // find location based on artist
            let artistLocation;
            for (const loc in artistsLoc) {
                const artists = artistsLoc[loc];
                if (artists.includes(selectArtist)) {
                    artistLocation = loc;
                    break;
                }
            }

        }

        if (selectLoc) {
            const artists = artistsLoc[selectLoc];
            artists.forEach(artist => {
                const option = document.createElement('option');
                option.value = artist;
                option.textContent = artist;
                artistDropdown.appendChild(option);
            });
        } 
    }
}
// location dropdown change listener
locDropdown.addEventListener('change', updateArtistOpts);

// update options on page load
updateArtistOpts();


//for book confirm
  document.getElementById('button1').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const notification = document.getElementById('notification');

    if (name && email && phone && location && date) {
      // All fields are filled
      notification.innerHTML = `
        <div class="alert alert-success" role="alert">
          <strong>Booking Confirmed</strong><br><strong>Thank you for choosing our shop!</strong><br>
          Name: ${name}<br>
          Location: ${location}<br>
          Date: ${date}<br>
          Time: ${time}<br>
        </div>
      `;
    } else {
      // Some fields are empty
      const missingFields = [];
      if (!name) missingFields.push('Full Name');
      if (!email) missingFields.push('Email');
      if (!phone) missingFields.push('Phone Number');
      if (!location) missingFields.push('Location');
      if (!date) missingFields.push('Date');
      if (!time) missingFields.push('Time');

      notification.innerHTML = `
        <div class="alert alert-danger" role="alert">
         <strong> Please fill in the following fields: ${missingFields.join(', ')}</strong>
        </div>
      `;
    }
  });