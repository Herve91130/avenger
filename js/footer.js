//create new footer?
const fetchHeader = async () => {
  try {
    const res = await fetch("./header.txt");
    const template = await res.text();
    const parse = new DOMParser();
    const html = parse.parseFromString(template, "text/html");
    const header = html.querySelector("body header");

    document.body.prepend(header);
  } catch (err) {
    console.log(err);
  }
};

const fetchFooter = async () => {
  try {
    const res = await fetch("./footer.txt");
    const template = await res.text();
    const parse = new DOMParser();
    const html = parse.parseFromString(template, "text/html");
    const footer = html.querySelector("body footer");

    document.body.append(footer);
  } catch (err) {
    console.log(err);
  }
};

fetchHeader().then(fetchFooter);


const getElements = () => {
  const nav = document.querySelector(".navbar");
  const menuBtn = document.querySelector("#menu-btn");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    nav.classList.remove("active");
  });
};


fetchHeader().then(getElements).then(fetchFooter);
// OR
fetchHeader().then(getElements);
fetchFooter();


