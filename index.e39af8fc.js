document.querySelectorAll(".tree").forEach(function(e){e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.closest("li").querySelector("ul");t&&(t.hidden=!t.hidden)}})}),document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");e.prepend(t),t.appendChild(t.nextSibling)});//# sourceMappingURL=index.e39af8fc.js.map

//# sourceMappingURL=index.e39af8fc.js.map
