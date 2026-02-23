function showPage(pageId) {
    // Verberg alle pagina's
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Toon de gekozen pagina
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
        // Scrol naar de bovenkant van de pagina
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}
