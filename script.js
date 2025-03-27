document.getElementById("tg-login").addEventListener("click", () => {
    const tg = window.Telegram.WebApp;
    tg.expand();
    const user = tg.initDataUnsafe.user;
    
    if (user) {
        console.log("Пользователь вошел:", user);
        localStorage.setItem("tgUserId", user.id);
        alert(`Привет, ${user.first_name}!`);
        location.reload();
    } else {
        alert("Ошибка входа. Попробуйте ещё раз.");
    }
});
