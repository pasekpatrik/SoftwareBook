(function () {
    function findCopyValue(button) {
        if (button.dataset.copyEmoji) return button.dataset.copyEmoji;

        return button.parentElement?.querySelector('code')?.textContent.trim() || '';
    }

    function findStatus(button) {
        return button.closest('.topic')?.querySelector('.copy-status')
            || document.querySelector('#conventional-commits .copy-status');
    }

    async function copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            const field = document.createElement('textarea');
            field.value = text;
            field.style.position = 'fixed';
            field.style.opacity = '0';
            document.body.append(field);
            field.select();
            const copied = document.execCommand('copy');
            field.remove();
            return copied;
        }
    }

    document.addEventListener('click', async event => {
        const button = event.target.closest('[data-copy-emoji], .copy-button');
        if (!button) return;

        const text = findCopyValue(button);
        const status = findStatus(button);
        if (!text || !status) return;

        const copied = await copyText(text);
        if (!copied) {
            status.textContent = button.classList.contains('copy-button')
                ? 'Kopírování se nepodařilo. Označ příkaz a zkopíruj ho ručně.'
                : 'Kopírování se nepodařilo.';
            return;
        }

        status.textContent = `Zkopírováno: ${text}`;

        if (button.classList.contains('copy-button')) {
            button.textContent = 'Zkopírováno';
            window.setTimeout(() => { button.textContent = 'Kopírovat'; }, 1500);
        }
    });
})();
