// IIFE - Immediately Invoked Function Expression

(() => {
    function Start(): void {
        console.log('App Started...');
    }
    window.addEventListener('load', Start);
})();