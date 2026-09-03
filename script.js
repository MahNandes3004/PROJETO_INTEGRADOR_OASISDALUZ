:root {
    --bg-body: #f4f6f8;
    --bg-card: #ffffff;
    --primary-color: #8b0000; /* Vinho / Dark Red */
    --primary-gradient: linear-gradient(135deg, #8b0000, #40000b);
    --text-main: #1e293b;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    --radius-lg: 16px;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
    --font-scale: 16px;
}

body.high-contrast {
    --bg-body: #000000;
    --bg-card: #121212;
    --primary-color: #ffd700;
    --primary-gradient: #121212;
    --text-main: #ffffff;
    --text-muted: #d1d5db;
    --border-color: #374151;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: var(--font-scale);
    scroll-behavior: smooth;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-body);
    color: var(--text-main);
    line-height: 1.6;
    padding-bottom: 40px;
}

/* Header / Hero */
.hero {
    background: var(--primary-gradient);
    color: #ffffff;
    padding: 20px 20px 35px 20px;
    border-radius: 0 0 20px 20px;
    text-align: center;
}

.accessibility-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    padding: 8px 12px;
    border-radius: 30px;
    margin-bottom: 20px;
}

.toolbar-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
}

.toolbar-btns button {
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    margin-left: 4px;
}

.hero-content h1 {
    font-size: 2rem;
    font-weight: 800;
    margin: 8px 0 4px 0;
}

.hero-content p {
    font-size: 0.9rem;
    opacity: 0.9;
}

.badge {
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
}

/* Menu Fixo */
.sticky-nav {
    position: sticky;
    top: 0;
    background: var(--bg-card);
    border-bottom: 1px solid var(--border-color);
    z-index: 100;
    box-shadow: var(--shadow-sm);
}

.sticky-nav ul {
    display: flex;
    overflow-x: auto;
    list-style: none;
    padding: 10px 15px;
    gap: 10px;
    white-space: nowrap;
}

.sticky-nav a {
    text-decoration: none;
    color: var(--text-muted);
    font-weight: 600;
    font-size: 0.85rem;
    padding: 6px 12px;
    border-radius: 20px;
}

.sticky-nav a:hover {
    background: rgba(139, 0, 0, 0.1);
    color: var(--primary-color);
}

/* Layout Container */
.main-container {
    max-width: 750px;
    margin: 0 auto;
    padding: 20px 15px;
}

.section {
    margin-top: 30px;
}

.section-title h2 {
    font-size: 1.3rem;
    color: var(--text-main);
}

.section-title p {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 15px;
}

/* Cards */
.card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: var(--shadow-sm);
}

.card-header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 12px;
}

.card h3 {
    font-size: 1.1rem;
}

.btn-audio {
    background: rgba(139, 0, 0, 0.08);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
}

.description-text {
    font-size: 0.95rem;
    color: var(--text-main);
    margin-bottom: 20px;
}

/* Mídias (Vídeos e Imagens) */
.media-placeholder {
    margin: 20px 0;
    background: var(--bg-body);
    border: 1px dashed var(--border-color);
    border-radius: 12px;
    padding: 10px;
    text-align: center;
}

.media-content {
    width: 100%;
    max-width: 100%;
    border-radius: 8px;
    display: block;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.placeholder-tag {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-top: 8px;
    font-weight: 600;
}

/* Disco de Newton */
.newton-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 20px 0;
}

.disk {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: conic-gradient(red, orange, yellow, green, blue, indigo, violet, red);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    transition: transform 2.5s cubic-bezier(0.15, 0.85, 0.35, 1.2);
}

.disk.spinning {
    transform: rotate(1800deg);
}

/* Botões */
.btn-primary {
    background: var(--primary-color);
    color: #ffffff;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    width: 100%;
    max-width: 220px;
}

.btn-secondary {
    display: block;
    text-align: center;
    background: var(--bg-body);
    color: var(--text-main);
    border: 1px solid var(--border-color);
    padding: 12px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85rem;
    margin-top: 15px;
}

/* RGB Demo */
.rgb-demo {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 15px 0;
}

.rgb-circle {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    font-size: 0.9rem;
}
.rgb-circle.red { background: #ef4444; }
.rgb-circle.green { background: #10b981; }
.rgb-circle.blue { background: #3b82f6; }

/* Circuit Preview */
.circuit-preview {
    background: var(--bg-body);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    margin-top: 12px;
    border: 1px dashed var(--border-color);
}

.circuit-icon {
    font-size: 1.8rem;
    margin-bottom: 5px;
}

/* Mitos e Fatos Box */
.fact-box {
    background: var(--bg-body);
    border-radius: 12px;
    padding: 15px;
    margin-top: 20px;
    border-left: 4px solid var(--primary-color);
}

.fact-badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 0.68rem;
    font-weight: 800;
    margin-bottom: 6px;
}

.fact-badge.mito { background: #fee2e2; color: #dc2626; }
.fact-badge.fato { background: #d1fae5; color: #059669; }

.fact-box h4 {
    font-size: 0.95rem;
    margin-bottom: 6px;
}

.fact-box hr {
    border: none;
    border-top: 1px solid var(--border-color);
    margin: 10px 0;
}

.fact-box p {
    font-size: 0.85rem;
    color: var(--text-muted);
}

/* Flashcard Flip */
.flashcard {
    cursor: pointer;
}

.flashcard-inner {
    background: var(--bg-card);
    border: 2px solid var(--primary-color);
    border-radius: var(--radius-lg);
    padding: 25px 20px;
    text-align: center;
    transition: background-color 0.3s;
}

.flashcard.flipped .flashcard-inner {
    background: var(--primary-color);
    color: #ffffff;
}

.flashcard.flipped .flashcard-inner p,
.flashcard.flipped .flashcard-inner span {
    color: #ffffff;
}

.card-type {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--primary-color);
}

.flashcard-inner p {
    font-size: 1rem;
    font-weight: 600;
    margin: 8px 0;
}

.flashcard-inner small {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.flashcard-back { display: none; }
.flashcard.flipped .flashcard-front { display: none; }
.flashcard.flipped .flashcard-back { display: block; }

/* Footer */
footer {
    text-align: center;
    margin-top: 40px;
    padding: 20px;
    border-top: 1px solid var(--border-color);
    font-size: 0.85rem;
}

.sub-footer {
    color: var(--text-muted);
    font-size: 0.75rem;
    margin-top: 4px;
}