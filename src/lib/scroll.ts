export const smoothScrollTo = (
  elementId: string,
  closeMobileMenu?: () => void
) => {
  const element = document.getElementById(elementId);
  if (element) {
    const isMobile = window.innerWidth < 1024;
    const navbarHeight = isMobile ? 68 : 73;

    const mainContainer = document.querySelector("main");
    if (mainContainer) {
      const elementPosition = element.offsetTop - navbarHeight;
      mainContainer.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    } else {
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    if (isMobile && closeMobileMenu) {
      closeMobileMenu();
    }
  }
};
