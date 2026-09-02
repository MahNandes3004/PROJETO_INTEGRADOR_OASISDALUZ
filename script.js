:root {
    --bg-main: #fdfaf5;
    --bg-card: #ffffff;
    --primary: #003057;
    --secondary: #005088;
    --text: #222222;
    --border: #e0dcd3;
    --highlight: #e6f0f8;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    background-color: var(--bg-main);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    line-height: 1.6;
}

/* BARRA FIXA DE ACESSIBILIDADE NO TOPO */
#top-accessibility-bar {
    background-color: var(--primary);
    color: #fff;
    padding: 8px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}
.a11y-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.a11y-buttons button {
    background: rgba(255,255,255,0.15);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.3);
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 6px;
}
.a11y-buttons button:hover { background: rgba(255,255,255,0.3); }

/* HEADER E NAVEGAÇÃO */
#main-header {
    background: var(--bg-card);
    border-bottom: 2px solid var(--border);
    padding: 25px 0;
}
.header-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}
.brand h1 { font-family: 'Merriweather', serif; color: var(--primary); font-size: 2rem; }
.brand p { color: var(--secondary); font-size: 0.95rem; }

#navbar a {
    color: var(--primary);
    text-decoration: none;
    font-weight: bold;
    margin-left: 18px;
}
#navbar a:hover { text-decoration: underline; }

/* CONTAINER PRINCIPAL */
.main-container { max-width: 1100px; margin: 30px auto; padding: 0 20px; }

.content-block {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}
.block-title {
    font-family: 'Merriweather', serif;
    color: var(--primary);
    border-bottom: 2px solid var(--highlight);
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: 1.4rem;
}

/* GRADES ORGANIZADAS */
.grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center; }
.grid-3col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

/* MOLDURA/PLACEHOLDER DE IMAGEM */
.img-placeholder {
    background: #f0ebe1;
    border: 2px dashed #c5bfb2;
    border-radius: 8px;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #777;
    text-align: center;
    padding: 15px;
}
.img-placeholder i { font-size: 2.5rem; margin-bottom: 8px; }

/* TABELA */
.data-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
.data-table th, .data-table td { padding: 10px; border: 1px solid var(--border); text-align: left; }
.data-table th { background: var(--highlight); color: var(--primary); }

/* FAKE NEWS BOX */
.fakenews-box { background: #fffdf9; border-left: 4px solid #d9534f; padding: 20px; }
.fact-card { margin-bottom: 15px; }
.badge-fake { color: #d9534f; font-weight: bold; }
.badge-fact { color: #2e7d32; font-weight: bold; margin-top: 5px; display: inline-block; }

/* VÍDEO CARDS */
.video-card { background: var(--bg-main); border: 1px solid var(--border); padding: 15px; border-radius: 6px; text-align: center; }
.video-thumb { background: #222; color: #ff0000; height: 120px; border-radius: 4px; display: flex; justify-content: center; align-items: center; font-size: 3rem; margin-bottom: 10px; }
.btn-link { display: inline-block; margin-top: 10px; color: var(--secondary); font-weight: bold; text-decoration: none; }

/* FLASHCARDS */
.flashcard { height: 160px; perspective: 1000px; cursor: pointer; }
.card-inner { width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; position: relative; }
.flashcard.flipped .card-inner { transform: rotateY(180deg); }
.card-front, .card-back {
    position: absolute; width: 100%; height: 100%; backface-visibility: hidden;
    border: 1px solid var(--border); border-radius: 6px; padding: 20px;
    display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
}
.card-front { background: var(--highlight); color: var(--primary); }
.card-back { background: var(--primary); color: #fff; transform: rotateY(180deg); }

/* ALTO CONTRASTE */
body.high-contrast { background-color: #000; color: #fff; }
body.high-contrast .content-block, body.high-contrast #main-header { background: #111; border-color: #444; color: #fff; }
body.high-contrast .block-title, body.high-contrast .brand h1, body.high-contrast #navbar a { color: #ffff00; }
body.high-contrast .img-placeholder { background: #222; border-color: #ffff00; color: #ffff00; }

#footer { text-align: center; padding