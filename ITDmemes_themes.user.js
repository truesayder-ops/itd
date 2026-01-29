// ==UserScript==
// @name         Сменщик тем для сайтов
// @namespace    localhost
// @version      3.2
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const themesList = {
        "Галактика": { bg: "linear-gradient(135deg, #1a2a6c, #b21f1f)", text: "#ffffff" },
        "Ночное небо": { bg: "linear-gradient(135deg, #0f2027, #203a43)", text: "#ffffff" },
        "Лесная глушь": { bg: "linear-gradient(135deg, #134e5e, #71b280)", text: "#ffffff" },
        "Закат огня": { bg: "linear-gradient(135deg, #200122, #6f0000)", text: "#ffffff" },
        "Морская пучина": { bg: "linear-gradient(135deg, #000428, #004e92)", text: "#ffffff" },
        "Фиолетовый космос": { bg: "linear-gradient(135deg, #2c003e, #720026)", text: "#ffffff" },
        "Стальной металл": { bg: "linear-gradient(135deg, #434343, #000000)", text: "#ffffff" },
        "Неоновая ночь": { bg: "linear-gradient(135deg, #360033, #0b8793)", text: "#ffffff" },
        "Мятная тьма": { bg: "linear-gradient(135deg, #004d40, #00796b)", text: "#ffffff" },
        "Кофейный мрак": { bg: "linear-gradient(135deg, #3e2723, #000000)", text: "#ffffff" },
        "Туман лаванды": { bg: "linear-gradient(135deg, #9d50bb, #6e48aa)", text: "#ffffff" },
        "Золото заката": { bg: "linear-gradient(135deg, #ff7e5f, #feb47b)", text: "#000000" },
        "Океан изумруда": { bg: "linear-gradient(135deg, #0052d4, #4364f7, #6fb1fc)", text: "#ffffff" },
        "Бархат вина": { bg: "linear-gradient(135deg, #8e0e00, #1f1c18)", text: "#ffffff" },
        "Ледяная арктика": { bg: "linear-gradient(135deg, #00c6ff, #0072ff)", text: "#ffffff" },
        "Синий сапфир": { bg: "linear-gradient(135deg, #0c2461, #1e3799, #4a69bd)", text: "#ffffff" },
        "Пустынный вечер": { bg: "linear-gradient(135deg, #c04848, #480048)", text: "#ffffff" },
        "Город неона": { bg: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", text: "#ffffff" },
        "Чаща леса": { bg: "linear-gradient(135deg, #0b3d0b, #1a5f1a, #2e8b2e)", text: "#ffffff" },
        "Рассвет фиолета": { bg: "linear-gradient(135deg, #41295a, #2f0743)", text: "#ffffff" },
        "Черный уголь": { bg: "#000000", text: "#ffffff" },
        "Темная синева": { bg: "#0a192f", text: "#ccd6f6" },
        "Зеленый мрак": { bg: "#0a2f0a", text: "#c8e6c9" },
        "Серая пустошь": { bg: "#121212", text: "#e0e0e0" },
        "Бордо": { bg: "#2a0a0a", text: "#ffcccc" },
        "Темный фиолет": { bg: "#1a0a2a", text: "#d1c4e9" },
        "Горький шоколад": { bg: "#261a0a", text: "#ffecb3" },
        "Белый свет": { bg: "#ffffff", text: "#000000" },
        "Голубая свежесть": { bg: "#e3f2fd", text: "#0d47a1" },
        "Зеленая весна": { bg: "#e8f5e8", text: "#1b5e20" },
        "Розовый рассвет": { bg: "#fce4ec", text: "#880e4f" },
        "Кремовый шелк": { bg: "#fff8e1", text: "#5d4037" },
        "Светлый серый": { bg: "#f5f5f5", text: "#212121" },
        "Кристальный лед": { bg: "linear-gradient(135deg, #E0F7FA, #B2EBF2)", text: "#006064" },
        "Малиновый рубин": { bg: "linear-gradient(135deg, #880E4F, #AD1457)", text: "#FFFFFF" },
        "Золотой песок": { bg: "linear-gradient(135deg, #FFD54F, #FFB300)", text: "#5D4037" },
        "Фиолетовая магия": { bg: "linear-gradient(135deg, #7B1FA2, #4A148C)", text: "#E1BEE7" },
        "Бирюзовый рай": { bg: "linear-gradient(135deg, #00695C, #004D40)", text: "#B2DFDB" },
        "Огненный дракон": { bg: "linear-gradient(135deg, #FF6F00, #E65100)", text: "#FFECB3" },
        "Лунная ночь": { bg: "linear-gradient(135deg, #1A237E, #283593)", text: "#C5CAE9" },
        "Розовый туман": { bg: "linear-gradient(135deg, #F48FB1, #EC407A)", text: "#880E4F" },
        "Изумрудный лес": { bg: "linear-gradient(135deg, #1B5E20, #2E7D32)", text: "#C8E6C9" },
        "Сапфировый океан": { bg: "linear-gradient(135deg, #01579B, #0277BD)", text: "#B3E5FC" },
        "Кровавый закат": { bg: "linear-gradient(135deg, #B71C1C, #D32F2F)", text: "#FFCDD2" },
        "Фиолетовый сон": { bg: "linear-gradient(135deg, #4A148C, #6A1B9A)", text: "#E1BEE7" },
        "Зеленый чай": { bg: "linear-gradient(135deg, #689F38, #7CB342)", text: "#F1F8E9" },
        "Оранжевый взрыв": { bg: "linear-gradient(135deg, #F57C00, #FF9800)", text: "#FFF3E0" },
        "Глубокая ночь": { bg: "#0D1B2A", text: "#E0E1DD" },
        "Темный изумруд": { bg: "#0D2818", text: "#D8F3DC" },
        "Винный погреб": { bg: "#370617", text: "#FFB3C1" },
        "Черный жемчуг": { bg: "#001219", text: "#94D2BD" },
        "Темный хаки": { bg: "#3A5A40", text: "#DAD7CD" },
        "Синий металл": { bg: "#1D3557", text: "#A8DADC" },
        "Фиолетовый бархат": { bg: "#240046", text: "#E0AAFF" },
        "Темный терракот": { bg: "#5A189A", text: "#FF9E00" },
        "Серый бетон": { bg: "#415A77", text: "#E0E1DD" },
        "Темный оливковый": { bg: "#283618", text: "#FEFAE0" },
        "Коралловый риф": { bg: "linear-gradient(135deg, #FF6B6B, #FF8E53)", text: "#2D3047" },
        "Лавандовые поля": { bg: "linear-gradient(135deg, #E2C2FF, #B892FF)", text: "#4A1E6F" },
        "Мятный коктейль": { bg: "linear-gradient(135deg, #80FFDB, #64DFDF)", text: "#1A3C40" },
        "Персиковый рассвет": { bg: "linear-gradient(135deg, #FFAFCC, #FFC8DD)", text: "#590D22" },
        "Голубая лагуна": { bg: "linear-gradient(135deg, #4CC9F0, #4361EE)", text: "#FFFFFF" },
        "Шоколадная мечта": { bg: "linear-gradient(135deg, #6D4C41, #8D6E63)", text: "#D7CCC8" },
        "Розовое золото": { bg: "linear-gradient(135deg, #FFB7C3, #FFD166)", text: "#5E503F" },
        "Фисташковый рай": { bg: "linear-gradient(135deg, #CCD5AE, #E9EDC9)", text: "#606C38" },
        "Бирюзовый бриз": { bg: "linear-gradient(135deg, #A9D6E5, #89C2D9)", text: "#012A4A" },
        "Аметистовый туман": { bg: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", text: "#FFFFFF" },
        "Светлая лаванда": { bg: "#E6CCFF", text: "#4B0082" },
        "Нежный персик": { bg: "#FFDAB9", text: "#8B4513" },
        "Мятный холод": { bg: "#98FF98", text: "#006400" },
        "Ванильное небо": { bg: "#FFF8DC", text: "#8B7355" },
        "Розовый кварц": { bg: "#FFB6C1", text: "#8B0000" },
        "Серебряный иней": { bg: "#F0F8FF", text: "#2F4F4F" },
        "Лимонный свет": { bg: "#FFFACD", text: "#556B2F" },
        "Голубой хлопок": { bg: "#B3E0FF", text: "#003366" },
        "Сиреневый шепот": { bg: "#D8BFD8", text: "#4B0082" },
        "Карамельная пена": { bg: "#FFE4C4", text: "#8B4513" },
        "Глубокий космос": { bg: "linear-gradient(135deg, #000000, #1A1A2E, #16213E)", text: "#E6E6FA" },
        "Вулканическая лава": { bg: "linear-gradient(135deg, #FF0000, #FF4500, #FF8C00)", text: "#2F0F0F" },
        "Тропический лес": { bg: "linear-gradient(135deg, #228B22, #32CD32, #98FB98)", text: "#0A2F0A" },
        "Полярное сияние": { bg: "linear-gradient(135deg, #00FFFF, #00CED1, #20B2AA)", text: "#003333" },
        "Королевский пурпур": { bg: "linear-gradient(135deg, #800080, #9932CC, #BA55D3)", text: "#FFD700" },
        "Медовый закат": { bg: "linear-gradient(135deg, #FFA500, #FF8C00, #FF6347)", text: "#8B0000" },
        "Изумрудный градиент": { bg: "linear-gradient(135deg, #006400, #228B22, #32CD32)", text: "#F5FFFA" },
        "Аквамариновый прилив": { bg: "linear-gradient(135deg, #7FFFD4, #66CDAA, #5F9EA0)", text: "#2F4F4F" },
        "Рубиновый блеск": { bg: "linear-gradient(135deg, #DC143C, #B22222, #8B0000)", text: "#FFDAB9" },
        "Сапфировый градиент": { bg: "linear-gradient(135deg, #000080, #0000CD, #4169E1)", text: "#E6E6FA" },
        "Темный графит": { bg: "#2F2F2F", text: "#D3D3D3" },
        "Ночной океан": { bg: "#000033", text: "#B0E0E6" },
        "Багровый мрак": { bg: "#330000", text: "#FFB6C1" },
        "Зеленый мох": { bg: "#2E4F2E", text: "#F0FFF0" },
        "Фиолетовая тьма": { bg: "#2E003E", text: "#DDA0DD" },
        "Коричневая земля": { bg: "#3D2B1F", text: "#DEB887" },
        "Синяя бездна": { bg: "#001F3F", text: "#7FDBFF" },
        "Серый камень": { bg: "#505050", text: "#F5F5F5" },
        "Темный индиго": { bg: "#310062", text: "#C5B4E3" },
        "Оливковая ночь": { bg: "#3D3D1F", text: "#F5F5DC" },
        "Неоновый градиент": { bg: "linear-gradient(135deg, #00FF00, #00CED1, #0000FF)", text: "#000000" },
        "Пастельный рассвет": { bg: "linear-gradient(135deg, #FFB6C1, #FFDAB9, #E6E6FA)", text: "#696969" },
        "Огненный градиент": { bg: "linear-gradient(135deg, #FF0000, #FF8C00, #FFFF00)", text: "#000000" },
        "Лесной градиент": { bg: "linear-gradient(135deg, #228B22, #006400, #2E4F2E)", text: "#F5F5DC" },
        "Океанский градиент": { bg: "linear-gradient(135deg, #0000FF, #00CED1, #00FFFF)", text: "#000033" },
        "Фиолетовый градиент": { bg: "linear-gradient(135deg, #800080, #4B0082, #9400D3)", text: "#FFD700" },
        "Золотой градиент": { bg: "linear-gradient(135deg, #FFD700, #FFA500, #FF8C00)", text: "#000000" },
        "Розовый градиент": { bg: "linear-gradient(135deg, #FFC0CB, #FF69B4, #C71585)", text: "#FFFFFF" },
        "Бирюзовый градиент": { bg: "linear-gradient(135deg, #40E0D0, #00CED1, #20B2AA)", text: "#000000" },
        "Серебряный градиент": { bg: "linear-gradient(135deg, #C0C0C0, #A9A9A9, #808080)", text: "#000000" },
        "Светлый беж": { bg: "#F5F5DC", text: "#8B4513" },
        "Бледный голубой": { bg: "#E6F2FF", text: "#003366" },
        "Светлая мята": { bg: "#F0FFF0", text: "#006400" },
        "Нежная роза": { bg: "#FFE4E1", text: "#8B0000" },
        "Кремовый ваниль": { bg: "#FFFDD0", text: "#8B7355" },
        "Светлый сиреневый": { bg: "#F8F0FF", text: "#4B0082" },
        "Бледный зеленый": { bg: "#F5FFFA", text: "#2E4F2E" },
        "Светлый коралловый": { bg: "#FFE4E1", text: "#8B0000" },
        "Нежный голубой": { bg: "#F0F8FF", text: "#000080" },
        "Светлый персиковый": { bg: "#FFDAB9", text: "#8B4513" }
    };

    let userTheme = { bgStart: '#000000', bgEnd: '#222222', text: '#ffffff' };
    let activeTheme = '';
    let styleTag = null;
    let menuBox, menuTitle, menuContent, pageNav, customButtonBox;
    let isMenuOpen = false;
    let isCustomOpen = false;
    let updatePreviewTimeout = null;
    let isMobile = window.innerWidth <= 768;

    const menuSettings = {
        itemsPerPage: 12,
        currentPage: 0,
        pageCount: 0
    };

    function setThemeStyles(background, color) {
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'theme-css';
            document.head.appendChild(styleTag);
        }
        
        const styleRules = `
            body {
                background: ${background} !important;
                color: ${color} !important;
                transition: background 0.5s ease, color 0.5s ease !important;
            }
            
            * {
                transition: color 0.3s ease !important;
            }
            
            body div:not([class*="icon"]):not([class*="Icon"]):not(.button):not(.btn):not([role="button"]):not([type="button"]),
            body span:not([class*="icon"]):not([class*="Icon"]):not(.button):not(.btn):not([role="button"]):not([type="button"]),
            body p:not([class*="icon"]):not([class*="Icon"]):not(.button):not(.btn):not([role="button"]):not([type="button"]) {
                color: inherit !important;
            }
        `;
        
        styleTag.textContent = styleRules;
        document.body.style.background = background;
        document.body.style.color = color;
    }

    function activateTheme(background, color, themeTitle = '') {
        setThemeStyles(background, color);
        markActiveButton(themeTitle);
        
        if (themeTitle) {
            activeTheme = themeTitle;
            localStorage.setItem('savedThemeTitle', themeTitle);
        }
    }

    function markActiveButton(themeTitle) {
        if (!menuContent) return;
        
        const allButtons = menuContent.querySelectorAll('.theme-button');
        allButtons.forEach(button => {
            button.classList.remove('active');
            button.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            button.style.fontWeight = 'normal';
            button.style.boxShadow = 'none';
        });
        
        allButtons.forEach(button => {
            if (button.textContent === themeTitle) {
                button.classList.add('active');
                button.style.borderColor = '#4cc9f0';
                button.style.fontWeight = 'bold';
                button.style.boxShadow = '0 0 20px rgba(76, 201, 240, 0.5)';
            }
        });
        
        if (themeTitle === 'custom' && customButtonBox) {
            const customBtn = customButtonBox.querySelector('#custom-theme-button');
            if (customBtn) {
                customBtn.style.background = 'linear-gradient(135deg, #4361ee, #4cc9f0)';
                customBtn.style.borderColor = '#4361ee';
                customBtn.style.boxShadow = '0 0 20px rgba(67, 97, 238, 0.5)';
            }
        }
    }

    function storeTheme(themeData, themeTitle = '') {
        localStorage.setItem('savedThemeData', JSON.stringify(themeData));
        if (themeTitle) {
            localStorage.setItem('savedThemeTitle', themeTitle);
        }
    }

    function restoreTheme() {
        const storedData = localStorage.getItem('savedThemeData');
        const storedTitle = localStorage.getItem('savedThemeTitle');
        
        if (!storedData) return false;
        
        const themeInfo = JSON.parse(storedData);
        if (themeInfo.type === 'preset') {
            activateTheme(themeInfo.bg, themeInfo.text, storedTitle || '');
            return true;
        } else if (themeInfo.type === 'custom') {
            const gradient = `linear-gradient(135deg, ${themeInfo.bgStart}, ${themeInfo.bgEnd})`;
            activateTheme(gradient, themeInfo.text, 'custom');
            userTheme = { bgStart: themeInfo.bgStart, bgEnd: themeInfo.bgEnd, text: themeInfo.text };
            return true;
        }
        return false;
    }

    function setupPageNavigation() {
        const themeTitles = Object.keys(themesList);
        menuSettings.pageCount = Math.ceil(themeTitles.length / menuSettings.itemsPerPage);
        
        if (!pageNav) return;
        
        pageNav.innerHTML = '';
        
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '◀';
        prevButton.className = 'nav-button';
        prevButton.disabled = menuSettings.currentPage === 0;
        prevButton.onclick = () => {
            if (menuSettings.currentPage > 0) {
                menuSettings.currentPage--;
                showThemes();
                setupPageNavigation();
            }
        };
        
        const pageIndicator = document.createElement('span');
        pageIndicator.textContent = ` ${menuSettings.currentPage + 1}/${menuSettings.pageCount} `;
        pageIndicator.className = 'page-indicator';
        
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '▶';
        nextButton.className = 'nav-button';
        nextButton.disabled = menuSettings.currentPage === menuSettings.pageCount - 1;
        nextButton.onclick = () => {
            if (menuSettings.currentPage < menuSettings.pageCount - 1) {
                menuSettings.currentPage++;
                showThemes();
                setupPageNavigation();
            }
        };
        
        pageNav.appendChild(prevButton);
        pageNav.appendChild(pageIndicator);
        pageNav.appendChild(nextButton);
    }

    function showThemes() {
        if (!menuContent) return;
        
        const themeButtonsContainer = menuContent.querySelector('.theme-buttons-container');
        if (themeButtonsContainer) {
            themeButtonsContainer.innerHTML = '';
        }
        
        const themeTitles = Object.keys(themesList);
        const startIndex = menuSettings.currentPage * menuSettings.itemsPerPage;
        const endIndex = Math.min(startIndex + menuSettings.itemsPerPage, themeTitles.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const themeTitle = themeTitles[i];
            const themeColors = themesList[themeTitle];
            
            const themeButton = document.createElement('button');
            themeButton.className = 'theme-button';
            themeButton.textContent = themeTitle;
            
            themeButton.style.cssText = `
                padding: ${isMobile ? '8px 10px' : '10px 12px'} !important;
                border: 2px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 10px !important;
                cursor: pointer !important;
                background: rgba(255, 255, 255, 0.08) !important;
                color: #fff !important;
                transition: all 0.3s ease !important;
                font-size: ${isMobile ? '12px' : '13px'} !important;
                text-align: left !important;
                margin-bottom: 6px !important;
                backdrop-filter: blur(15px) !important;
                position: relative !important;
                overflow: hidden !important;
                min-height: ${isMobile ? '36px' : '44px'} !important;
                display: flex !important;
                align-items: center !important;
                flex-wrap: wrap !important;
            `;
            
            themeButton.onmouseenter = () => {
                if (!themeButton.classList.contains('active')) {
                    themeButton.style.transform = 'translateY(-3px) scale(1.02)';
                    themeButton.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
                    themeButton.style.background = 'rgba(255, 255, 255, 0.15) !important';
                    themeButton.style.borderColor = 'rgba(76, 201, 240, 0.4)';
                }
            };
            
            themeButton.onmouseleave = () => {
                if (!themeButton.classList.contains('active')) {
                    themeButton.style.transform = '';
                    themeButton.style.boxShadow = '';
                    themeButton.style.background = 'rgba(255, 255, 255, 0.08) !important';
                    themeButton.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }
            };
            
            themeButton.onclick = (e) => {
                e.stopPropagation();
                activateTheme(themeColors.bg, themeColors.text, themeTitle);
                storeTheme({ type: 'preset', bg: themeColors.bg, text: themeColors.text }, themeTitle);
                
                themeButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    themeButton.style.transform = '';
                }, 150);
                
                showMessage(`✅ Тема "${themeTitle}" применена`);
            };
            
            const colorPreview = document.createElement('div');
            colorPreview.style.cssText = `
                width: ${isMobile ? '16px' : '20px'} !important;
                height: ${isMobile ? '16px' : '20px'} !important;
                border-radius: 50% !important;
                margin-right: 8px !important;
                border: 2px solid rgba(255, 255, 255, 0.3) !important;
                flex-shrink: 0 !important;
            `;
            
            if (themeColors.bg.includes('gradient')) {
                colorPreview.style.background = themeColors.bg;
            } else {
                colorPreview.style.background = themeColors.bg;
            }
            
            themeButton.insertBefore(colorPreview, themeButton.firstChild);
            themeButtonsContainer.appendChild(themeButton);
        }
        
        const savedTitle = localStorage.getItem('savedThemeTitle');
        if (savedTitle && savedTitle !== 'custom') {
            markActiveButton(savedTitle);
        }
    }

    function adjustLayoutForScreenSize() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        isMobile = screenWidth <= 768;
        const isSmallScreen = screenHeight < 700;
        
        if (menuBox) {
            const menuWidth = isMobile ? Math.min(280, screenWidth - 40) : 320;
            const menuHeight = isSmallScreen ? 450 : 550;
            
            menuBox.style.width = `${menuWidth}px !important`;
            menuBox.style.maxHeight = isMenuOpen ? `${menuHeight}px` : '60px';
            
            if (isMenuOpen) {
                const themeButtonsContainer = menuContent.querySelector('.theme-buttons-container');
                if (themeButtonsContainer) {
                    themeButtonsContainer.style.maxHeight = `${menuHeight - 180}px`;
                }
            }
        }
        
        if (customButtonBox) {
            const buttonWidth = isMobile ? Math.min(280, screenWidth - 40) : 320;
            customButtonBox.style.width = `${buttonWidth}px`;
        }
    }

    function createInterface() {
        const oldMenu = document.getElementById('theme-menu');
        if (oldMenu) oldMenu.remove();
        
        const oldCustomButton = document.getElementById('custom-button-container');
        if (oldCustomButton) oldCustomButton.remove();

        adjustLayoutForScreenSize();

        const menuWidth = isMobile ? Math.min(280, window.innerWidth - 40) : 320;

        menuBox = document.createElement('div');
        menuBox.id = 'theme-menu';
        menuBox.setAttribute('data-theme-element', 'menu');
        
        menuBox.style.cssText = `
            position: fixed !important;
            top: ${isMobile ? '10px' : '20px'} !important;
            right: ${isMobile ? '10px' : '20px'} !important;
            width: ${menuWidth}px !important;
            border: 2px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 20px !important;
            font-family: 'Segoe UI', system-ui, sans-serif !important;
            font-size: 14px !important;
            z-index: 99999 !important;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5) !important;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
            overflow: hidden !important;
            max-height: 60px !important;
            background: rgba(15, 20, 40, 0.92) !important;
            backdrop-filter: blur(25px) !important;
            -webkit-backdrop-filter: blur(25px) !important;
        `;

        menuTitle = document.createElement('div');
        menuTitle.textContent = '🎨 Темы';
        menuTitle.style.cssText = `
            padding: ${isMobile ? '12px 15px' : '16px 20px'} !important;
            cursor: pointer !important;
            font-weight: 700 !important;
            color: #fff !important;
            background: linear-gradient(135deg, rgba(67, 97, 238, 0.3), rgba(76, 201, 240, 0.2)) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            font-size: ${isMobile ? '14px' : '16px'} !important;
        `;
        
        const titleRight = document.createElement('div');
        titleRight.style.cssText = 'display: flex; align-items: center; gap: 8px;';
        
        const counter = document.createElement('span');
        counter.textContent = Object.keys(themesList).length;
        counter.style.cssText = 'font-size: 11px; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 10px; color: #fff; font-weight: bold;';
        
        const arrow = document.createElement('span');
        arrow.id = 'menu-arrow';
        arrow.textContent = '▼';
        arrow.style.cssText = 'font-size: 11px; color: #4cc9f0; transition: transform 0.3s;';
        
        titleRight.appendChild(counter);
        titleRight.appendChild(arrow);
        menuTitle.appendChild(titleRight);
        menuBox.appendChild(menuTitle);

        menuContent = document.createElement('div');
        menuContent.style.cssText = `
            display: flex !important;
            flex-direction: column !important;
            padding: ${isMobile ? '15px' : '20px'} !important;
            gap: 6px !important;
            background: rgba(10, 15, 35, 0.95) !important;
            max-height: 400px !important;
            overflow: hidden !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
        `;

        const themeButtonsContainer = document.createElement('div');
        themeButtonsContainer.className = 'theme-buttons-container';
        themeButtonsContainer.style.cssText = `
            overflow-y: auto !important;
            max-height: 280px !important;
            padding-right: 5px !important;
            margin-bottom: 10px !important;
        `;
        
        menuContent.appendChild(themeButtonsContainer);

        pageNav = document.createElement('div');
        pageNav.style.cssText = `
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            padding: ${isMobile ? '10px 0 5px 0' : '15px 0 10px 0'} !important;
            margin-top: 5px !important;
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
            gap: ${isMobile ? '8px' : '12px'} !important;
        `;
        
        const navigationStyles = document.createElement('style');
        navigationStyles.textContent = `
            .nav-button {
                padding: ${isMobile ? '6px 12px' : '8px 16px'} !important;
                border: 2px solid rgba(76, 201, 240, 0.3) !important;
                border-radius: 10px !important;
                background: rgba(76, 201, 240, 0.15) !important;
                color: #fff !important;
                cursor: pointer !important;
                font-size: ${isMobile ? '12px' : '14px'} !important;
                transition: all 0.3s ease !important;
                min-width: ${isMobile ? '32px' : '40px'} !important;
                backdrop-filter: blur(10px) !important;
                font-weight: bold !important;
            }
            
            .nav-button:hover:not(:disabled) {
                background: rgba(76, 201, 240, 0.3) !important;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(76, 201, 240, 0.3);
            }
            
            .nav-button:disabled {
                opacity: 0.4 !important;
                cursor: not-allowed !important;
            }
            
            .page-indicator {
                color: #4cc9f0 !important;
                font-size: ${isMobile ? '12px' : '14px'} !important;
                font-weight: bold !important;
                padding: ${isMobile ? '3px 8px' : '5px 10px'};
                background: rgba(76, 201, 240, 0.1);
                border-radius: 8px;
            }
            
            .theme-button.active {
                background: rgba(76, 201, 240, 0.25) !important;
                color: white !important;
                font-weight: bold !important;
                border-color: #4cc9f0 !important;
                box-shadow: 0 0 25px rgba(76, 201, 240, 0.4) !important;
                backdrop-filter: blur(15px) !important;
            }
            
            #theme-menu::-webkit-scrollbar {
                width: 6px;
            }
            
            #theme-menu::-webkit-scrollbar-track {
                background: rgba(255,255,255,0.05);
                border-radius: 10px;
            }
            
            #theme-menu::-webkit-scrollbar-thumb {
                background: rgba(76, 201, 240, 0.5);
                border-radius: 10px;
            }
            
            .theme-buttons-container::-webkit-scrollbar {
                width: 5px;
            }
            
            .theme-buttons-container::-webkit-scrollbar-track {
                background: rgba(255,255,255,0.05);
                border-radius: 10px;
            }
            
            .theme-buttons-container::-webkit-scrollbar-thumb {
                background: rgba(76, 201, 240, 0.3);
                border-radius: 10px;
            }
        `;
        document.head.appendChild(navigationStyles);

        menuContent.appendChild(pageNav);
        menuBox.appendChild(menuContent);
        document.body.appendChild(menuBox);

        menuTitle.onclick = () => {
            isMenuOpen = !isMenuOpen;
            const arrow = document.getElementById('menu-arrow');
            
            if (isMenuOpen) {
                adjustLayoutForScreenSize();
                arrow.textContent = '▲';
                
                showThemes();
                setupPageNavigation();
                
                if (customButtonBox) {
                    const menuRect = menuBox.getBoundingClientRect();
                    customButtonBox.style.top = `${menuRect.bottom + 10}px`;
                }
                
                if (isCustomOpen) {
                    closeCustomPanel();
                }
            } else {
                menuBox.style.maxHeight = '60px';
                arrow.textContent = '▼';
                
                if (customButtonBox) {
                    customButtonBox.style.top = `${parseInt(menuBox.style.top) + 70}px`;
                }
            }
            
            menuBox.style.boxShadow = isMenuOpen ? 
                '0 25px 80px rgba(0, 0, 0, 0.7)' : 
                '0 20px 60px rgba(0, 0, 0, 0.5)';
        };

        showThemes();
        setupPageNavigation();
        
        const initialTop = parseInt(menuBox.style.top) + 70;
        
        customButtonBox = document.createElement('div');
        customButtonBox.id = 'custom-button-container';
        customButtonBox.setAttribute('data-theme-element', 'custom-container');
        
        customButtonBox.style.cssText = `
            position: fixed !important;
            top: ${initialTop}px !important;
            right: ${isMobile ? '10px' : '20px'} !important;
            width: ${menuWidth}px !important;
            z-index: 99998 !important;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        `;

        const customButton = document.createElement('button');
        customButton.id = 'custom-theme-button';
        customButton.textContent = '✨ Создать свою тему';
        
        customButton.style.cssText = `
            width: 100% !important;
            padding: ${isMobile ? '12px 15px' : '16px 20px'} !important;
            border: 2px solid rgba(255, 255, 255, 0.15) !important;
            border-radius: 20px !important;
            cursor: pointer !important;
            background: linear-gradient(135deg, rgba(67, 97, 238, 0.2), rgba(76, 201, 240, 0.15)) !important;
            color: #fff !important;
            transition: all 0.3s ease !important;
            font-size: ${isMobile ? '13px' : '15px'} !important;
            text-align: center !important;
            font-weight: 700 !important;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3) !important;
            backdrop-filter: blur(25px) !important;
            -webkit-backdrop-filter: blur(25px) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 8px !important;
        `;
        
        const paintIcon = document.createElement('span');
        paintIcon.textContent = '🎨';
        paintIcon.style.fontSize = isMobile ? '14px' : '16px';
        customButton.insertBefore(paintIcon, customButton.firstChild);
        
        customButton.onmouseenter = () => {
            const saved = localStorage.getItem('savedThemeTitle');
            if (saved !== 'custom') {
                customButton.style.background = 'linear-gradient(135deg, rgba(67, 97, 238, 0.3), rgba(76, 201, 240, 0.25))';
                customButton.style.borderColor = 'rgba(67, 97, 238, 0.5)';
                customButton.style.transform = 'translateY(-3px)';
                customButton.style.boxShadow = '0 20px 50px rgba(67, 97, 238, 0.4)';
            }
        };
        
        customButton.onmouseleave = () => {
            const saved = localStorage.getItem('savedThemeTitle');
            if (saved !== 'custom') {
                customButton.style.background = 'linear-gradient(135deg, rgba(67, 97, 238, 0.2), rgba(76, 201, 240, 0.15))';
                customButton.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                customButton.style.transform = '';
                customButton.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
            }
        };
        
        customButton.onclick = () => {
            if (isMenuOpen) {
                menuTitle.click();
                setTimeout(() => {
                    showCustomPanel();
                }, 300);
            } else {
                showCustomPanel();
            }
        };
        
        customButtonBox.appendChild(customButton);
        document.body.appendChild(customButtonBox);

        const saved = localStorage.getItem('savedThemeTitle');
        if (saved) {
            setTimeout(() => markActiveButton(saved), 100);
            
            if (saved === 'custom') {
                customButton.style.background = 'linear-gradient(135deg, #4361ee, #4cc9f0)';
                customButton.style.borderColor = '#4361ee';
                customButton.style.boxShadow = '0 0 25px rgba(67, 97, 238, 0.5)';
            }
        }
    }

    function showCustomPanel() {
        isCustomOpen = true;
        
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const isMobile = screenWidth <= 768;
        const isSmallScreen = screenHeight < 700;
        
        const overlay = document.createElement('div');
        overlay.id = 'custom-panel-overlay';
        overlay.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background-color: rgba(0,0,0,0.9) !important;
            display: flex !important;
            align-items: ${isSmallScreen ? 'flex-start' : 'center'} !important;
            justify-content: center !important;
            z-index: 100000 !important;
            backdrop-filter: blur(10px) !important;
            animation: fadeIn 0.4s ease !important;
            overflow-y: auto !important;
            padding: ${isSmallScreen ? '20px' : '0'} !important;
        `;

        const panelWidth = isMobile ? Math.min(300, screenWidth - 40) : 
                          isSmallScreen ? Math.min(350, screenWidth - 40) : 380;
        
        const panel = document.createElement('div');
        panel.id = 'custom-theme-panel';
        panel.style.cssText = `
            position: relative !important;
            display: flex !important;
            flex-direction: column !important;
            padding: ${isMobile ? '20px' : '25px'} !important;
            background: linear-gradient(135deg, rgba(26, 26, 46, 0.98), rgba(15, 20, 35, 0.98)) !important;
            border-radius: ${isMobile ? '20px' : '25px'} !important;
            width: ${panelWidth}px !important;
            gap: ${isMobile ? '15px' : '20px'} !important;
            border: 2px solid rgba(76, 201, 240, 0.2) !important;
            box-shadow: 0 30px 80px rgba(0,0,0,0.9) !important;
            backdrop-filter: blur(40px) !important;
            -webkit-backdrop-filter: blur(40px) !important;
            animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
            transform-origin: center !important;
            margin: ${isSmallScreen ? '20px 0' : '0'} !important;
            max-height: ${isSmallScreen ? 'calc(100vh - 40px)' : '90vh'} !important;
            overflow-y: auto !important;
        `;

        const titleRow = document.createElement('div');
        titleRow.style.cssText = 'display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;';
        
        const title = document.createElement('h3');
        title.textContent = '✨ Создать тему';
        title.style.cssText = `color: #fff; margin: 0; font-size: ${isMobile ? '18px' : '20px'}; font-weight: 700;`;
        
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.style.cssText = `
            background: none;
            border: none;
            color: #4cc9f0;
            font-size: 24px;
            cursor: pointer;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            flex-shrink: 0;
        `;
        closeButton.onmouseenter = () => {
            closeButton.style.background = 'rgba(76, 201, 240, 0.2)';
            closeButton.style.transform = 'rotate(90deg)';
        };
        closeButton.onmouseleave = () => {
            closeButton.style.background = 'none';
            closeButton.style.transform = 'rotate(0deg)';
        };
        closeButton.onclick = () => {
            restoreTheme();
            closeCustomPanel();
        };
        
        titleRow.appendChild(title);
        titleRow.appendChild(closeButton);
        panel.appendChild(titleRow);

        const description = document.createElement('p');
        description.textContent = 'Выберите цвета для создания градиента:';
        description.style.cssText = `color: #aaa; margin: 0 0 ${isMobile ? '15px' : '20px'} 0; font-size: ${isMobile ? '13px' : '14px'}; line-height: 1.5;`;
        panel.appendChild(description);

        const createColorSelect = (labelText, startValue, elementId) => {
            const container = document.createElement('div');
            container.style.cssText = 'display: flex; flex-direction: column; gap: 10px;';
            
            const labelRow = document.createElement('div');
            labelRow.style.cssText = 'display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;';
            
            const label = document.createElement('label');
            label.textContent = labelText;
            label.style.cssText = `color: #fff; font-size: ${isMobile ? '14px' : '15px'}; font-weight: 600;`;
            label.htmlFor = elementId;
            
            const hexDisplay = document.createElement('span');
            hexDisplay.textContent = startValue.toUpperCase();
            hexDisplay.style.cssText = `color: #4cc9f0; font-family: "Monaco", "Courier New", monospace; font-size: ${isMobile ? '12px' : '13px'}; background: rgba(76, 201, 240, 0.1); padding: ${isMobile ? '4px 8px' : '5px 10px'}; border-radius: 6px; border: 1px solid rgba(76, 201, 240, 0.3);`;
            
            labelRow.appendChild(label);
            labelRow.appendChild(hexDisplay);
            
            const inputRow = document.createElement('div');
            inputRow.style.cssText = 'display: flex; align-items: center; gap: 15px;';
            
            const colorInput = document.createElement('input');
            colorInput.type = 'color';
            colorInput.id = elementId;
            colorInput.value = startValue;
            colorInput.style.cssText = `
                width: ${isMobile ? '60px' : '70px'};
                height: ${isMobile ? '45px' : '50px'};
                cursor: pointer;
                border-radius: ${isMobile ? '10px' : '12px'};
                border: 3px solid rgba(255,255,255,0.3);
                background: rgba(0,0,0,0.5);
                transition: all 0.3s;
                flex-shrink: 0;
            `;
            
            const previewBox = document.createElement('div');
            previewBox.style.cssText = `
                flex: 1;
                height: ${isMobile ? '45px' : '50px'};
                background: ${startValue};
                border-radius: ${isMobile ? '10px' : '12px'};
                border: 3px solid rgba(255,255,255,0.2);
                backdrop-filter: blur(10px);
                transition: background 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: ${isMobile ? '10px' : '11px'};
                font-weight: bold;
                text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                flex-shrink: 1;
            `;
            previewBox.textContent = 'ПРЕВЬЮ';
            
            colorInput.addEventListener('input', () => {
                hexDisplay.textContent = colorInput.value.toUpperCase();
                previewBox.style.background = colorInput.value;
                
                if (updatePreviewTimeout) {
                    clearTimeout(updatePreviewTimeout);
                }
                
                updatePreviewTimeout = setTimeout(() => {
                    const gradient = `linear-gradient(135deg, ${firstColor.input.value}, ${secondColor.input.value})`;
                    activateTheme(gradient, textColor.input.value, 'custom');
                    userTheme = {
                        bgStart: firstColor.input.value,
                        bgEnd: secondColor.input.value,
                        text: textColor.input.value
                    };
                }, 100);
            });
            
            inputRow.appendChild(colorInput);
            inputRow.appendChild(previewBox);
            
            container.appendChild(labelRow);
            container.appendChild(inputRow);
            return { container, input: colorInput, hexDisplay, previewBox };
        };

        let firstColor, secondColor, textColor;

        firstColor = createColorSelect('Начало градиента:', userTheme.bgStart, 'first-color');
        secondColor = createColorSelect('Конец градиента:', userTheme.bgEnd, 'second-color');
        textColor = createColorSelect('Цвет текста:', userTheme.text, 'text-color');

        panel.appendChild(firstColor.container);
        panel.appendChild(secondColor.container);
        panel.appendChild(textColor.container);

        const buttonRow = document.createElement('div');
        buttonRow.style.cssText = 'display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap;';

        const saveButton = document.createElement('button');
        saveButton.textContent = '💾 Сохранить тему';
        saveButton.style.cssText = `
            flex: 2;
            min-width: 140px;
            padding: ${isMobile ? '14px' : '16px'};
            background: linear-gradient(135deg, rgba(76, 201, 240, 0.3), rgba(67, 97, 238, 0.4));
            color: white;
            border: 2px solid rgba(76, 201, 240, 0.5);
            border-radius: ${isMobile ? '10px' : '12px'};
            cursor: pointer;
            font-weight: 700;
            font-size: ${isMobile ? '14px' : '15px'};
            transition: all 0.3s ease;
            backdrop-filter: blur(15px);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        `;
        saveButton.onmouseenter = () => {
            saveButton.style.background = 'linear-gradient(135deg, rgba(76, 201, 240, 0.5), rgba(67, 97, 238, 0.6))';
            saveButton.style.transform = 'translateY(-2px)';
            saveButton.style.boxShadow = '0 10px 25px rgba(76, 201, 240, 0.5)';
            saveButton.style.borderColor = 'rgba(76, 201, 240, 0.8)';
        };
        saveButton.onmouseleave = () => {
            saveButton.style.transform = '';
            saveButton.style.boxShadow = '';
            saveButton.style.background = 'linear-gradient(135deg, rgba(76, 201, 240, 0.3), rgba(67, 97, 238, 0.4))';
            saveButton.style.borderColor = 'rgba(76, 201, 240, 0.5)';
        };
        saveButton.onclick = () => {
            storeTheme({ 
                type: 'custom', 
                bgStart: firstColor.input.value,
                bgEnd: secondColor.input.value,
                text: textColor.input.value 
            }, 'custom');
            
            const customBtn = document.querySelector('#custom-theme-button');
            if (customBtn) {
                customBtn.style.background = 'linear-gradient(135deg, #4361ee, #4cc9f0)';
                customBtn.style.borderColor = '#4361ee';
                customBtn.style.boxShadow = '0 0 20px rgba(67, 97, 238, 0.5)';
            }
            
            closeCustomPanel();
            showMessage('✨ Тема сохранена!');
        };

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Отмена';
        cancelButton.style.cssText = `
            flex: 1;
            min-width: 100px;
            padding: ${isMobile ? '14px' : '16px'};
            background: linear-gradient(135deg, rgba(108, 117, 125, 0.3), rgba(73, 80, 87, 0.4));
            color: white;
            border: 2px solid rgba(108, 117, 125, 0.5);
            border-radius: ${isMobile ? '10px' : '12px'};
            cursor: pointer;
            font-size: ${isMobile ? '14px' : '15px'};
            transition: all 0.3s ease;
            backdrop-filter: blur(15px);
            font-weight: 600;
        `;
        cancelButton.onclick = () => {
            restoreTheme();
            closeCustomPanel();
        };

        buttonRow.appendChild(saveButton);
        buttonRow.appendChild(cancelButton);
        panel.appendChild(buttonRow);

        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        overlay.onclick = (event) => {
            if (event.target === overlay) {
                restoreTheme();
                closeCustomPanel();
            }
        };

        const escHandler = (event) => {
            if (event.key === 'Escape') {
                restoreTheme();
                closeCustomPanel();
            }
        };
        document.addEventListener('keydown', escHandler);
        
        const animationStyle = document.createElement('style');
        animationStyle.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from { 
                    opacity: 0;
                    transform: translateY(40px) scale(0.95);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
        `;
        document.head.appendChild(animationStyle);
        
        setTimeout(() => firstColor.input.focus(), 100);
        
        overlay.addEventListener('DOMNodeRemoved', () => {
            document.removeEventListener('keydown', escHandler);
            if (updatePreviewTimeout) {
                clearTimeout(updatePreviewTimeout);
            }
        });
    }

    function closeCustomPanel() {
        isCustomOpen = false;
        const overlay = document.getElementById('custom-panel-overlay');
        if (overlay) {
            overlay.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
        if (updatePreviewTimeout) {
            clearTimeout(updatePreviewTimeout);
        }
    }

    function showMessage(text) {
        const messageBox = document.createElement('div');
        messageBox.textContent = text;
        messageBox.style.cssText = `
            position: fixed !important;
            bottom: 20px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            background: linear-gradient(135deg, rgba(76, 201, 240, 0.95), rgba(67, 97, 238, 0.95)) !important;
            color: white !important;
            padding: ${isMobile ? '12px 20px' : '15px 30px'} !important;
            border-radius: 12px !important;
            z-index: 100001 !important;
            box-shadow: 0 15px 40px rgba(0,0,0,0.5) !important;
            font-weight: 600 !important;
            animation: message-fade 2.5s ease !important;
            pointer-events: none !important;
            font-size: ${isMobile ? '14px' : '15px'} !important;
            text-align: center !important;
            backdrop-filter: blur(20px) !important;
            border: 2px solid rgba(255, 255, 255, 0.3) !important;
            max-width: 90%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `;
        
        const animationStyle = document.createElement('style');
        animationStyle.textContent = `
            @keyframes message-fade {
                0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
                15% { opacity: 1; transform: translateX(-50%) translateY(0); }
                85% { opacity: 1; transform: translateX(-50%) translateY(0); }
                100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(animationStyle);
        
        document.body.appendChild(messageBox);
        
        setTimeout(() => {
            if (messageBox.parentNode) {
                messageBox.parentNode.removeChild(messageBox);
            }
        }, 2500);
    }

    function start() {
        createInterface();
        
        setTimeout(() => {
            const loaded = restoreTheme();
            
            if (!loaded) {
                const defaultTheme = themesList["Галактика"];
                activateTheme(defaultTheme.bg, defaultTheme.text, "Галактика");
                storeTheme({ type: 'preset', bg: defaultTheme.bg, text: defaultTheme.text }, "Галактика");
            }
            
            markActiveButton(localStorage.getItem('savedThemeTitle') || '');
        }, 100);
    }

    start();
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    }

    const watcher = new MutationObserver(() => {
        const exists = document.getElementById('theme-css');
        if (!exists) {
            const stored = localStorage.getItem('savedThemeData');
            if (stored) {
                const themeInfo = JSON.parse(stored);
                if (themeInfo.type === 'preset') {
                    activateTheme(themeInfo.bg, themeInfo.text, localStorage.getItem('savedThemeTitle') || '');
                } else if (themeInfo.type === 'custom') {
                    const gradient = `linear-gradient(135deg, ${themeInfo.bgStart}, ${themeInfo.bgEnd})`;
                    activateTheme(gradient, themeInfo.text, 'custom');
                }
            }
        }
    });

    watcher.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    window.addEventListener('resize', () => {
        adjustLayoutForScreenSize();
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            setTimeout(start, 50);
        }
    });

})();