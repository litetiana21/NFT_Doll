export function scrollIntoViewCalc(id: string) {
  const yOffset = -140;
  const element = document.getElementById(id);
  if (element) {
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
