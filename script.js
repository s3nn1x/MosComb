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

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                onLocationFound({ latlng: L.latLng(position.coords.latitude, position.coords.longitude) });
            },
            () => {
                alert("Геолокация недоступна. Проверьте настройки браузера.");
            }
        );
    } else {
        alert("Геолокация не поддерживается этим устройством.");
    }
}
