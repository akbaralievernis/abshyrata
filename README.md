<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Abshyr Ata - Главная</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Playfair+Display:wght@700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        * {margin: 0;padding: 0;box-sizing: border-box;}
        body {font-family: 'Poppins', sans-serif;overflow-x: hidden;background: #f8f9fa;}
        h1, h2, h3, h4, h5 {font-family: 'Playfair Display', serif;color: #2c2c2c;}
        a {text-decoration: none;color: #d4a373;transition: color 0.3s ease;}
        a:hover {color: #b68a56;}
        button {border: none;background: none;cursor: pointer;transition: transform 0.2s ease;}
        button:hover {transform: scale(1.05);}
        ul {list-style: none;}
        header {min-height: 100vh;background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center;background-size: cover;background-attachment: fixed;display: flex;flex-direction: column;color: #fff;}
        nav {padding: 20px 40px;display: flex;align-items: center;justify-content: space-between;position: relative;}
        nav h2 a {color: #e0e0e0;text-transform: uppercase;font-size: 1.5rem;letter-spacing: 2px;border-bottom: 2px solid #e0e0e0;}
        .nav-button {color: #e0e0e0;font-size: 1.8rem;display: none;}
        nav .menu {display: flex;gap: 20px;}
        nav .menu li a {color: #e0e0e0;text-transform: uppercase;font-size: 0.9rem;padding: 10px 0;border-bottom: 2px solid transparent;transition: border-color 0.3s ease;}
        nav .menu li a:hover,nav .menu li a.active {border-bottom-color: #d4a373;}
        .mobile-menu {position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.95);transform: translateX(100%);transition: transform 0.3s ease;display: flex;justify-content: center;align-items: center;z-index: 1000;}
        .mobile-menu.show {transform: translateX(0);}
        .mobile-menu ul {display: flex;flex-direction: column;gap: 20px;text-align: center;}
        .mobile-menu .exit-menu {position: absolute;top: 20px;right: 20px;color: #e0e0e0;font-size: 1.5rem;}
        .center {margin: auto;text-align: center;padding: 20px;}
        .center h1 {font-size: 4rem;color: #d4a373;margin-bottom: 20px;animation: fadeUp 0.8s ease forwards;}
        .center h2 {text-transform: uppercase;letter-spacing: 4px;font-size: 1.8rem;animation: fade 0.8s ease forwards 0.3s;opacity: 0;}
        .center #asterisk {font-size: 2rem;color: #d4a373;margin: 20px 0;animation: spin 0.8s ease forwards 0.6s;opacity: 0;}
        .center p {text-transform: uppercase;font-size: 0.9rem;letter-spacing: 2px;animation: fadeDown 0.8s ease forwards 0.9s;opacity: 0;}
        .add-padding {padding: 40px 20px;}
        .add-flex {display: flex;flex-direction: column;align-items: center;gap: 30px;}
        .center-text {text-align: center;max-width: 600px;}
        .center-text h1 {font-size: 3rem;color: #d4a373;}
        .center-text h2 {font-size: 1.5rem;margin: 20px 0;}
        .center-text p {line-height: 1.6;color: #4a4a4a;}
        .center-text a {font-size: 0.9rem;text-transform: uppercase;border-bottom: 2px solid #d4a373;padding-bottom: 5px;}
        .stuffed-cherries {background: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center;background-size: cover;width: 100%;max-width: 400px;height: 300px;border-radius: 10px;box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);}
        .bread-background {background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center;background-size: cover;background-attachment: fixed;height: 400px;display: flex;justify-content: center;align-items: center;text-align: center;}
        .cake-background {background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center;background-size: cover;background-attachment: fixed;height: 400px;display: flex;justify-content: center;align-items: center;text-align: center;}
        .custom-h1 {font-size: 3rem;color: #fff;text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);}
        footer {background: #2c2c2c;color: #e0e0e0;padding: 40px 20px;position: relative;}
        footer .to-top {position: absolute;top: -25px;left: 50%;transform: translateX(-50%);background: #d4a373;color: #fff;width: 50px;height: 50px;border-radius: 50%;display: flex;align-items: center;justify-content: center;font-size: 1rem;}
        .restaurant-info {display: flex;flex-direction: column;gap: 30px;text-align: center;}
        .locations, .hours {flex: 1;}
        .copyright {background: #3a3a3a;padding: 15px;text-align: center;font-size: 0.8rem;}
        @keyframes fadeUp {from { opacity: 0; transform: translateY(20px); }to { opacity: 1; transform: translateY(0); }}
        @keyframes fadeDown {from { opacity: 0; transform: translateY(-20px); }to { opacity: 1; transform: translateY(0); }}
        @keyframes fade {from { opacity: 0; transform: scale(1.2); }to { opacity: 1; transform: scale(1); }}
        @keyframes spin {from { opacity: 0; transform: rotate(0deg); }to { opacity: 1; transform: rotate(360deg); }}
        @media (max-width: 768px) {
            .nav-button {display: block;}
            nav .menu {display: none;}
            .bread-background, .cake-background {background-attachment: scroll;}
        }
        @media (min-width: 769px) {
            nav {padding: 20px 80px;}
            .mobile-menu {display: none;}
            .add-flex {flex-direction: row;justify-content: center;}
            .restaurant-info {flex-direction: row;justify-content: space-around;text-align: left;}
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <h2><a href="index.html" id="logo">Abshyr-Ata</a></h2>
            <button class="nav-button"><i class="fas fa-bars"></i></button>
            <ul class="menu">
                <li><a href="index.html" class="active">Добро пожаловать</a></li>
                <li><a href="menu.html">Меню</a></li>
                <li><a href="news.html">Новости</a></li>
                <li><a href="contacts.html">Контакты</a></li>
            </ul>
            <div class="mobile-menu">
                <button class="exit-menu"><i class="fas fa-times"></i></button>
                <ul>
                    <li><a href="index.html" class="active">Добро пожаловать</a></li>
                    <li><a href="menu.html">Меню</a></li>
                    <li><a href="news.html">Новости</a></li>
                    <li><a href="contacts.html">Контакты</a></li>
                </ul>
            </div>
        </nav>
        <div class="center">
            <h1>Добро пожаловать</h1>
            <h2>Абшыр-атабыз</h2>
            <span id="asterisk">*</span>
            <p>Ready to be opened</p>
        </div>
    </header>
    <section class="add-padding add-flex">
        <div class="center-text">
            <h1><span>Открыть</span><br>Наша история</h1>
            <h2>*</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aspernatur beatae laboriosam dicta tempora ab, dolorem mollitia perspiciatis, deleniti quidem dolor repellat animi.</p>
            <a href="#">О нас</a>
        </div>
        <div class="stuffed-cherries"></div>
    </section>
    <section class="bread-background">
        <h1 class="custom-h1"><span>Со вкусом</span><br>Рецепты</h1>
    </section>
    <section class="add-flex add-padding">
        <div class="center-text">
            <h1><span>Открыть</span><br>Наша меню</h1>
            <h2>*</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae distinctio possimus tempore voluptatem, quo repellendus quas culpa quasi.</p>
            <a href="menu.html">Смотреть полное меню</a>
        </div>
    </section>
    <section class="cake-background">
        <h1 class="custom-h1"><span>Перфекты</span><br>смесь</h1>
    </section>
    <section class="add-flex add-padding">
        <div class="center-text">
            <h1><span>Кулинария</span><br>Наслаждение</h1>
            <h2>*</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi odit in dignissimos neque ratione, laboriosam rerum!</p>
            <a href="contacts.html">Сделать бронирование</a>
        </div>
    </section>
    <footer>
        <button class="to-top"><i class="fas fa-chevron-up"></i></button>
        <div class="restaurant-info">
            <div class="locations">
                <h4>Локации</h4>
                <div class="location-1">
                    <h5>Кызыл-кия<br>Кулатова 142</h5>
                </div>
                <div class="location-2">
                    <h5>Кызыл-кия<br>Абшыр-Атабыз</h5>
                </div>
            </div>
            <div class="hours">
                <h4>Время</h4>
                <div class="weekdays">
                    <h5>Понедельник-Воскресенье<br>24/7</h5>
                </div>
                <div class="weekends">
                   <h5>Понедельник-Воскресенье<br>24/7</h5>
                </div>
                <div class="private-events">
                    <h5>Понедельник-Воскресенье<br>24/7</h5>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p><small>Copyright 2025 © Handcrafted with love by <span>PixelGrade</span> Team</small></p>
            <p><small>Permissions and Copyright • Contact The Team</small></p>
        </div>
    </footer>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const navButton = document.querySelector('.nav-button');
            const mobileMenu = document.querySelector('.mobile-menu');
            const exitMenu = document.querySelector('.exit-menu');
            const toTop = document.querySelector('.to-top');
            navButton.addEventListener('click', () => {mobileMenu.classList.add('show');});
            exitMenu.addEventListener('click', () => {mobileMenu.classList.remove('show');});
            toTop.addEventListener('click', () => {window.scrollTo({ top: 0, behavior: 'smooth' });});
        });
    </script>
</body>
</html>
