(() => {
  let currentId;

  const links = Array.from(document.querySelectorAll(".photos ul"))
    .map((element) => ({
      id: element.id,
      bottom: element.getBoundingClientRect().top + (element.getBoundingClientRect().height * 0.75)
    }));

  const setActiveItem = () => {
    const {scrollTop} = document.querySelector("html");
    const activeElement = document.querySelector("a.active");

    if (activeElement) activeElement.classList.remove("active");

    for (var i = 0; i < links.length; i++) {
      if (scrollTop < links[i].bottom) {
        currentId = links[i].id;
        document.querySelector("a[href='#" + currentId + "']").classList.add("active");
        break;
      }
    }
  };

  setActiveItem();

  window.addEventListener("scroll", setActiveItem);
})();
