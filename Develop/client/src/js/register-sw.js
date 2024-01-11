//Service worker registration code

export const registerSW = () => {
    //check that service workers are supported
    if ('serviceWorker' in navigator) {
        //use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
        })
    }
}