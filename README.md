# Studio Perla - Webová stránka

Profesionální kadeřnické studio v Praze 8 - Kobylisy.

## 📋 O projektu

Toto je statická webová stránka pro Studio Perla, vytvořená pomocí čistého HTML, CSS a JavaScriptu bez použití frameworků. Stránka je plně responzivní a optimalizovaná pro všechna zařízení.

## 🚀 Technologie

- **HTML5** - Sémantický markup
- **CSS3** - Moderní styling s custom properties
- **JavaScript (ES6+)** - Interaktivní funkce
- **Google Fonts** - Playfair Display & Inter
- **GitHub Pages** - Automatický deployment

## 📁 Struktura projektu

```
studio-perla/
├── index.html          # Hlavní stránka
├── o-nas.html          # O nás
├── kontakt.html        # Kontakt a rezervace
├── cenik.html          # Ceník služeb
├── kadernictvi.html    # Detail kadeřnických služeb
├── style.css           # Všechny styly
├── script.js           # JavaScript funkce
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow
```

## 🛠️ Lokální vývoj

### Prerekvizity

- Webový prohlížeč (Chrome, Firefox, Safari, Edge)
- Volitelně: lokální server (Live Server, Python SimpleHTTPServer, Node.js http-server)

### Spuštění

1. Klonování repozitáře:
```bash
git clone https://github.com/lukaskotrbaty/studio-perla.git
cd studio-perla
```

2. Otevření v prohlížeči:
```bash
# Jednoduše otevřete index.html v prohlížeči, nebo:

# Pomocí Python 3:
python -m http.server 8000

# Pomocí Node.js:
npx http-server

# Pomocí VS Code Live Server extension
# (Pravý klik na index.html → "Open with Live Server")
```

3. Stránka běží na `http://localhost:8000` (nebo jiném portu)

## 🌐 Deployment

### Automatický deployment na GitHub Pages

Projekt používá GitHub Actions pro automatické nasazení:

#### 📝 Pull Request (PR)
Když vytvoříte nebo upravíte PR do `main` větve:
1. ✅ Workflow automaticky sestaví stránku
2. 💬 Přidá komentář do PR s informacemi o buildu
3. 🔍 Můžete zkontrolovat, že build proběhl úspěšně

#### 🚀 Po Merge do Main
Když je PR zmergován do `main` větve:
1. ✅ Workflow sestaví stránku
2. 🌐 Automaticky nasadí na GitHub Pages
3. 📍 Stránka je dostupná na: `https://lukaskotrbaty.github.io/studio-perla/`

#### ⚙️ Manuální spuštění
Můžete také spustit deployment manuálně:
1. Jděte na GitHub → Actions tab
2. Vyberte "Deploy Static Site to GitHub Pages"
3. Klikněte "Run workflow"

### Konfigurace GitHub Pages

Pro správnou funkci GitHub Pages zajistěte:

1. V repozitáři jděte do **Settings** → **Pages**
2. V sekci "Source" vyberte:
   - Source: **GitHub Actions** (ne "Deploy from branch")
3. Stránka bude dostupná na `https://<username>.github.io/<repository>/`

## 📱 Vlastnosti webu

- ✅ Plně responzivní design (mobil, tablet, desktop)
- ✅ Moderní a elegantní vzhled
- ✅ Rychlé načítání (žádné frameworky)
- ✅ SEO optimalizované
- ✅ Přístupné (ARIA labely, sémantický HTML)
- ✅ Mobilní menu s smooth animations
- ✅ Scroll efekty
- ✅ Google Maps integrace
- ✅ Kontaktní formulář připravený k propojení

## 🎨 Barevné schéma

```css
--color-cream: #FFFBF5;      /* Pozadí */
--color-pink: #F4DFEB;        /* Akcenty */
--color-champagne: #F7E6D4;   /* Zvýraznění */
--color-gold: #D4AF37;        /* Primární barva */
--color-text-dark: #343a40;   /* Tmavý text */
--color-text-light: #6c757d;  /* Světlý text */
```

## 📄 Stránky

1. **Úvod** (`index.html`)
   - Hero sekce s velkým obrázkem
   - Benefity studia
   - Ukázka služeb
   - Recenze
   - Otevírací doba

2. **O nás** (`o-nas.html`)
   - Historie a filosofie
   - Hodnoty
   - Představení týmu

3. **Kontakt** (`kontakt.html`)
   - Kontaktní informace
   - Google Maps mapa
   - Rezervační formulář
   - Důležité informace

4. **Ceník** (`cenik.html`)
   - Kompletní ceník služeb
   - Orientační ceny

5. **Kadeřnictví** (`kadernictvi.html`)
   - Detailní popis služeb
   - Značky produktů
   - Ceník

## 🤝 Přispívání

1. Fork repozitář
2. Vytvořte feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit změny (`git commit -m 'Add some AmazingFeature'`)
4. Push do branch (`git push origin feature/AmazingFeature`)
5. Otevřete Pull Request

## 📞 Kontakt

**Studio Perla**
- 📍 Služská 1865/15, Praha 8 - Kobylisy, 182 00
- ☎️ +420 774 031 001
- ✉️ studioperla@email.cz
- 🌐 [Facebook](https://www.facebook.com/studioperla1/)

## 📝 Licence

Tento projekt je proprietární. Všechna práva vyhrazena © Studio Perla.

## 🙏 Poděkování

- Google Fonts za fonty Playfair Display a Inter
- Lucide Icons za SVG ikony
- GitHub Pages za hosting

---

**Vytvořeno s ❤️ pro Studio Perla**
