document.addEventListener("DOMContentLoaded", function() {
  // reference
  const artistCheckboxes = document.querySelectorAll('input[name="artist"]');
  const bodyPartCheckboxes = document.querySelectorAll('input[name="bodyPart"]');
  const locationCheckboxes = document.querySelectorAll('input[name="location"]');
  
  // event listen
  artistCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", filterGallery);
  });
  
  bodyPartCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", filterGallery);
  });

  locationCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", filterGallery);
  });
  
  // filter
  function filterGallery() {
    // get values
    const selectedArtists = Array.from(artistCheckboxes)
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkbox) {
        return checkbox.value;
      });
  
    const selectedBodyParts = Array.from(bodyPartCheckboxes)
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkbox) {
        return checkbox.value;
      });
    const selectedLocations = Array.from(locationCheckboxes)
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkbox) {
        return checkbox.value;
      });
  
    const galleryItems = document.querySelectorAll(".card");
  
    galleryItems.forEach(function(item) {
      const artist = item.dataset.artist;
      const bodyPart = item.dataset.bodypart;
      const location = item.dataset.location;
  
      // find selected value
      const artistMatch = selectedArtists.length === 0 || selectedArtists.includes(artist);
      const bodyPartMatch = selectedBodyParts.length === 0 || selectedBodyParts.includes(bodyPart);
      const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(location);
  
      // display selected
      if (artistMatch && bodyPartMatch && locationMatch) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  
});
