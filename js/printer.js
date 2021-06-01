export function printer(root, text) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            root.innerText += text[i];
        }, i * 15)
    }
}