var f = document.createElement("iframe");
  f.src = "https://widget.kopi.dev/corona";
  f.width = "100%";
  f.height = 380;
  f.scrolling = "no";
  f.frameBorder = 0;
  var rootEl = document.getElementById("kopi-covid");
  console.log(rootEl);
  rootEl.appendChild(f);