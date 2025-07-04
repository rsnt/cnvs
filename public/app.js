// Basic gallery logic: handle uploads and show placeholder for Instagram.
const uploadInput = document.getElementById('imageUpload');
const gallery = document.getElementById('gallery');
const emptyMessage = document.getElementById('emptyMessage');
const connectBtn = document.getElementById('connectInstagram');

uploadInput.addEventListener('change', handleFiles);
connectBtn.addEventListener('click', function () {
    alert('Instagram integration coming soon.');
});

function handleFiles(event) {
    const files = event.target.files;
    if (!files.length) return;

    emptyMessage.style.display = 'none';

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}
