document.addEventListener('partialsLoaded', async () => {
    await import('./header.js');
    import('./catering-options.js');
});
