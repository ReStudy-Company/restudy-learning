// 利用規約とプライバシーのモーダルを実装しました
const openTerms = document.getElementById('openTerms');
    const closeTerms = document.getElementById('closeTerms');
    const termsModal = document.getElementById('termsModal');

    const openPrivacy = document.getElementById('openPrivacy');
    const closePrivacy = document.getElementById('closePrivacy');
    const privacyModal = document.getElementById('privacyModal');

    openTerms.addEventListener('click', () => {
      termsModal.style.display = 'block';
    });
    closeTerms.addEventListener('click', () => {
      termsModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target == termsModal) {
        termsModal.style.display = 'none';
      }
    });

    openPrivacy.addEventListener('click', () => {
      privacyModal.style.display = 'block';
    });
    closePrivacy.addEventListener('click', () => {
      privacyModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target == privacyModal) {
        privacyModal.style.display = 'none';
      }
    });

// スクロール制御
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // デフォルトの「#」ジャンプをキャンセル
    openModal();        // モーダルを開く関数
  });
});
