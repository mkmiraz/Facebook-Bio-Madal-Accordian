const bio_add = document.querySelector(".bio_add");
const bio_edite = document.querySelector(".bio_edite");
const bio_show = document.querySelector(".bio_show");

const bio_data = document.querySelector(".bio_data");

const bio_add_btn = document.getElementById("bio_add_btn");
const cancal_btn = document.getElementById("cancal_btn");
const Save_btn = document.getElementById("Save_btn");
const bio_edite_btn = document.getElementById("bio_edite_btn");
const write_bio = document.getElementById("write_bio");
const bio_limit = document.getElementById("bio_limit");

const getBioData = () => {
  const data = localStorage.getItem("bio");

  if (data) {
    bio_add.style.display = "none";
    bio_edite.style.display = "none";
    bio_show.style.display = "block";
    bio_data.innerHTML = data;
  } else {
    bio_add.style.display = "block";
    bio_edite.style.display = "none";
    bio_show.style.display = "none";
  }
};

getBioData();

// bio add btn
bio_add_btn.onclick = () => {
  bio_add.style.display = "none";
  bio_edite.style.display = "block";
};

// cancal btn
cancal_btn.onclick = () => {
  getBioData();
};

// bio writing
write_bio.onkeyup = () => {
  let getLength = write_bio.value.length;
  const updateLength = 101 - getLength;

  let stoLen = localStorage.getItem("bio");

  if (write_bio.value != stoLen) {
    Save_btn.style.opacity = 1;
    Save_btn.style.backgroundColor = "#0866ff";
  } else {
    Save_btn.style.opacity = 0.4;
    Save_btn.style.backgroundColor = "#dadbe1";
  }

  if (updateLength <= 0) {
    bio_limit.style.color = "red";
    bio_limit.innerHTML = "Stop your Writing";
  } else {
    bio_limit.style.color = "black";
    bio_limit.innerHTML = `${updateLength} characters remaining`;
  }
};

// save btn click
Save_btn.onclick = () => {
  localStorage.setItem("bio", write_bio.value);
  getBioData();
};

// bio edite btn
bio_edite_btn.onclick = () => {
  const oldBio = localStorage.getItem("bio");

  write_bio.value = oldBio;
  const remainLength = 101 - oldBio.length;
  bio_limit.innerHTML = `${remainLength} characters remaining`;

  bio_edite.style.display = "block";
  bio_show.style.display = "none";
};

/************************************************************************************ */
const modal_btn = document.getElementById("modal_btn");
const modal_close = document.getElementById("modal_close");
const modalArea = document.querySelector(".modalArea");
// Modal show
modal_btn.onclick = () => {
  modalArea.style.opacity = 1;
  modalArea.style.transform = "scale(1.1, 1.1)";
};

// modal hide

if (modal_close) {
  modal_close.onclick = () => {
    modalArea.style.opacity = 0;
    modalArea.style.transform = "scale(.9, .8)";
  };
}

document.addEventListener("click", (event) => {
  if (!modal_btn.contains(event.target) && event.target !== modal_close) {
    modalArea.style.opacity = 0;
    modalArea.style.transform = "scale(.9, .8)";
  }
});

/********************************** */

const accordionItems = document.querySelectorAll(".accordion_item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion_header");
  const content = item.querySelector(".accordion_content");

  header.addEventListener("click", () => {
    item.classList.toggle("active");
    content.classList.toggle("show");

    // Optionally, close other open accordions:
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-content").classList.remove("show");
      }
    });
  });
});
