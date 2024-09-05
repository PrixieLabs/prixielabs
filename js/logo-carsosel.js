// document.addEventListener('DOMContentLoaded', () => {
//     const track = document.querySelector('.carousel-track');
//     const items = Array.from(track.children);
//     const cloneCount = items.length;

//     // Clone the items to create a continuous loop effect
//     items.forEach(item => {
//         const clone = item.cloneNode(true);
//         track.appendChild(clone);
//     });

//     // Function to reset the animation by adjusting scroll position
//     const resetScroll = () => {
//         track.style.animation = 'none';
//         track.style.transform = 'translateX(0)';
//         setTimeout(() => {
//             track.style.animation = '';
//         }, 50);
//     };

//     // Add an event listener to reset the animation when it ends
//     track.addEventListener('animationiteration', resetScroll);
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const track = document.querySelector('.carousel-track');
//     const clones = track.innerHTML;
//     track.innerHTML += clones;

//     track.addEventListener('animationiteration', () => {
//         track.style.transform = 'translateX(0)';
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const cloneCount = items.length;

    // Clone the items to create a continuous loop effect
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    // Ensure the scrolling is seamless
    track.addEventListener('animationiteration', () => {
        track.style.transform = 'translateX(0)';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track-2');
    const items = Array.from(track.children);
    const cloneCount = items.length;

    // Clone the items to create a continuous loop effect
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    // Ensure the scrolling is seamless
    track.addEventListener('animationiteration', () => {
        track.style.transform = 'translateX(0)';
    });
});


