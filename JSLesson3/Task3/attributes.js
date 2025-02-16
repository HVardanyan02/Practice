function getAttributes() {
    let link = document.getElementById("w3r");

    let href = link.getAttribute("href");
    let hreflang = link.getAttribute("hreflang");
    let rel = link.getAttribute("rel");
    let target = link.getAttribute("target");
    let type = link.getAttribute("type");

    alert("Href: " + href + 
          "\nHreflang: " + hreflang + 
          "\nRel: " + rel + 
          "\nTarget: " + target + 
          "\nType: " + type);
}