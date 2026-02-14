function nextPage() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');

    const audio = document.getElementById('music');
    audio.play().catch(err => {
        console.error('Не удалось воспроизвести аудио:', err);
    });
}
