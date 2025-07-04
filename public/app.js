// Landing page logic for clickable gallery frames.
const frames = document.querySelectorAll('.mockup');
const dialog = document.getElementById('uploadDialog');
const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('imageUpload');
const connectBtn = document.getElementById('connectInstagram');
const closeBtn = document.getElementById('closeDialog');
let activeFrame = null;

frames.forEach(frame => {
    frame.addEventListener('click', () => {
        activeFrame = frame;
        dialog.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', closeDialog);
dialog.addEventListener('click', e => {
    if (e.target === dialog) closeDialog();
});

uploadBtn.addEventListener('click', () => fileInput.click());
connectBtn.addEventListener('click', () => {
    alert('Instagram integration coming soon.');
});

fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file || !activeFrame) return;
    const reader = new FileReader();
    reader.onload = ev => {
        activeFrame.style.backgroundImage = `url(${ev.target.result})`;
        activeFrame.classList.add('filled');
    };
    reader.readAsDataURL(file);
    closeDialog();
});

function closeDialog() {
    dialog.classList.add('hidden');
    fileInput.value = '';
    activeFrame = null;
}
