function replaceIcons() {
  const newIcon = "https://i.imgur.com/MFb3VRR.png"; // <-- Change this URL to change the icon 

  document.querySelectorAll("img").forEach(img => {
    if (img.src.startsWith("https://styles.redditmedia.com/t5_4v16af/styles/communityIcon")) {
      img.src = newIcon;
      img.srcset = newIcon;
    }
  });
}

replaceIcons();

const observer = new MutationObserver(replaceIcons);
observer.observe(document.body, { childList: true, subtree: true });
