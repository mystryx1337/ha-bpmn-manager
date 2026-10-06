/**
 * HA-BPMN-Manager: Multilingual Translations for BPMN-Quest, HUD & Certificate
 *
 * Supports comprehensive localization across DE, EN, ES, FR, IT, PT, NL, PL, RU, ZH, JA.
 * Dynamic fallback chain: exact lang -> lang prefix -> en -> de.
 *
 * @package HA_BPMN_Manager
 */

import { QUEST_TRANSLATIONS } from '../templates.js';

export function resolveQuestLang(lang) {
  if (!lang) return 'de';
  const clean = String(lang).toLowerCase().replace('-', '_');
  if (clean.includes('tw') || clean.includes('hant')) return 'zh_tw';
  if (clean.includes('zh') || clean.includes('hans') || clean.includes('cn')) return 'zh';
  const prefix = clean.split('_')[0];
  if (HUD_STRINGS.chapterBadge[clean]) return clean;
  if (HUD_STRINGS.chapterBadge[prefix]) return prefix;
  return clean;
}

export const HUD_STRINGS = {
  chapterBadge: {
    de: 'KAPITEL', en: 'CHAPTER', es: 'CAPÍTULO', fr: 'CHAPITRE',
    it: 'CAPITOLO', pt: 'CAPÍTULO', nl: 'HOOFDSTUK', pl: 'ROZDZIAŁ',
    ru: 'ГЛАВА', zh: '第', ja: '第'
  },
  solved: {
    de: 'Gelöst', en: 'Solved', es: 'Resuelto', fr: 'Résolu',
    it: 'Risolto', pt: 'Resolvido', nl: 'Opgelost', pl: 'Rozwiązano',
    ru: 'Решено', zh: '已解决', ja: '完了'
  },
  yourMission: {
    de: 'DEINE MISSION', en: 'YOUR MISSION', es: 'TU MISIÓN', fr: 'VOTRE MISSION',
    it: 'LA TUA MISSIONE', pt: 'SUA MISSÃO', nl: 'JE MISSIE', pl: 'TWOJA MISJA',
    ru: 'ВАША МИССИЯ', zh: '你的任务', ja: 'ミッション'
  },
  done: {
    de: 'Erfüllt!', en: 'Done!', es: '¡Completado!', fr: 'Terminé !',
    it: 'Completato!', pt: 'Concluído!', nl: 'Voltooid!', pl: 'Zrobione!',
    ru: 'Выполнено!', zh: '已完成！', ja: '達成！'
  },
  pending: {
    de: 'Offen', en: 'Pending', es: 'Pendiente', fr: 'En attente',
    it: 'In sospeso', pt: 'Pendente', nl: 'In behandeling', pl: 'Oczekujące',
    ru: 'В процессе', zh: '进行中', ja: '未完了'
  },
  subtasksHeader: {
    de: 'SCHRITT-FÜR-SCHRITT TEILAUFGABEN', en: 'STEP-BY-STEP SUBTASKS',
    es: 'SUBTAREAS PASO A PASO', fr: 'SOUS-TÂCHES ÉTAPE PAR ÉTAPE',
    it: 'SOTTO-ATTIVITÀ PASSO DOPO PASSO', pt: 'SUBTAREFAS PASSO A PASSO',
    nl: 'STAP-VOOR-STAP DEELTAKEN', pl: 'ZADANIA KROK PO KROKU',
    ru: 'ПОШАГОВЫЕ ПОДЗАДАЧИ', zh: '分步子任务', ja: 'ステップ別サブタスク'
  },
  insightsTitle: {
    de: 'BPMN-Wissen', en: 'BPMN Insights', es: 'Conocimiento BPMN', fr: 'Aperçu BPMN',
    it: 'Approfondimento BPMN', pt: 'Conhecimento BPMN', nl: 'BPMN Inzichten', pl: 'Wiedza BPMN',
    ru: 'BPMN Знания', zh: 'BPMN 知识', ja: 'BPMNの知識'
  },
  focusCamera: {
    de: 'Kamera fokussieren', en: 'Focus Element', es: 'Enfocar elemento', fr: 'Centrer l\'élément',
    it: 'Centra elemento', pt: 'Focar elemento', nl: 'Element focussen', pl: 'Skup na elemencie',
    ru: 'Фокусировать элемент', zh: '聚焦元素', ja: '要素にフォーカス'
  },
  highlight: {
    de: 'Hervorheben', en: 'Highlight', es: 'Resaltar', fr: 'Mettre en surbrillance',
    it: 'Evidenzia', pt: 'Destacar', nl: 'Markeren', pl: 'Wyróżnij',
    ru: 'Подсветить', zh: '高亮显示', ja: 'ハイライト'
  },
  prevChapter: {
    de: 'Zurück', en: 'Previous', es: 'Anterior', fr: 'Précédent',
    it: 'Indietro', pt: 'Anterior', nl: 'Vorige', pl: 'Wstecz',
    ru: 'Назад', zh: '上一章', ja: '前へ'
  },
  nextChapter: {
    de: 'Nächstes Kapitel', en: 'Next Chapter', es: 'Siguiente capítulo', fr: 'Chapitre suivant',
    it: 'Prossimo capitolo', pt: 'Próximo capítulo', nl: 'Volgend hoofdstuk', pl: 'Następny rozdział',
    ru: 'Следующая глава', zh: '下一章', ja: '次へ'
  },
  openCertificate: {
    de: 'Urkunde öffnen', en: 'Open Diploma', es: 'Abrir diploma', fr: 'Ouvrir le diplôme',
    it: 'Apri diploma', pt: 'Abrir diploma', nl: 'Diploma openen', pl: 'Otwórz dyplom',
    ru: 'Открыть диплом', zh: '查看证书', ja: '認定証を開く'
  },
  reloadTemplateOnly: {
    de: 'Nur Vorlage neu laden', en: 'Reload template only', es: 'Solo recargar plantilla', fr: 'Recharger le modèle uniquement',
    it: 'Ricarica solo modello', pt: 'Recarregar apenas modelo', nl: 'Alleen sjabloon herladen', pl: 'Tylko przeładuj szablon',
    ru: 'Только перезагрузить шаблон', zh: '仅重新载入模板', ja: 'テンプレートのみ再読込'
  },
  reloadTemplateOnlyTooltip: {
    de: 'Nur offizielle Vorlage frisch ins Diagramm laden (Quest-Fortschritt bleibt vollständig erhalten)',
    en: 'Reload official template fresh into diagram (quest progress is fully preserved)',
    es: 'Recargar la plantilla oficial en el diagrama (el progreso se conserva por completo)',
    fr: 'Recharger le modèle officiel dans le diagramme (la progression est entièrement conservée)',
    it: 'Ricarica il modello ufficiale nel diagramma (i progressi vengono mantenuti)',
    pt: 'Recarregar o modelo oficial no diagrama (o progresso é totalmente preservado)',
    nl: 'Alleen de officiële sjabloon herladen (voortgang blijft volledig bewaard)',
    pl: 'Załaduj ponownie oficjalny szablon (postęp w queście zostaje zachowany)',
    ru: 'Перезагрузить официальный шаблон (прогресс полностью сохраняется)',
    zh: '将官方规范模板重新导入画布（你的所有任务进度将完整保留）',
    ja: '公式テンプレートを再読み込みします（進捗はすべて維持されます）'
  },
  reloadTemplateAndReset: {
    de: 'Vorlage neu laden & Fortschritt zurücksetzen', en: 'Reload template & reset progress',
    es: 'Recargar plantilla y restablecer progreso', fr: 'Recharger le modèle & réinitialiser',
    it: 'Ricarica modello e ripristina progressi', pt: 'Recarregar modelo e redefinir progresso',
    nl: 'Sjabloon herladen & voortgang resetten', pl: 'Przeładuj szablon i zresetuj postęp',
    ru: 'Перезагрузить шаблон и сбросить прогресс', zh: '重置所有进度并重新载入模板', ja: 'テンプレート再読込＆進捗リセット'
  },
  reloadTemplateAndResetTooltip: {
    de: 'Vorlage neu laden & Quest-Fortschritt zurücksetzen',
    en: 'Reload template & reset quest progress',
    es: 'Recargar plantilla y restablecer el progreso de la misión',
    fr: 'Recharger le modèle et réinitialiser la progression de la quête',
    it: 'Ricarica il modello e ripristina i progressi della quest',
    pt: 'Recarregar modelo e redefinir o progresso da missão',
    nl: 'Sjabloon herladen en quest-voortgang resetten',
    pl: 'Przeładuj szablon i zresetuj postęp w queście',
    ru: 'Перезагрузить шаблон и сбросить весь прогресс квеста',
    zh: '重新载入模板并清空任务历史进度',
    ja: 'テンプレートを再読み込みし、クエストの進捗をリセットします'
  },
  openCompanion: {
    de: 'Quest-Begleiter öffnen', en: 'Open Quest Companion', es: 'Abrir compañero de misiones', fr: 'Ouvrir le compagnon de quête',
    it: 'Apri compagno di quest', pt: 'Abrir companheiro de missão', nl: 'Quest-begeleider openen', pl: 'Otwórz asystenta questu',
    ru: 'Открыть помощник квеста', zh: '打开任务伴侣', ja: 'クエストコンパニオンを開く'
  },
  minimize: {
    de: 'Minimieren', en: 'Minimize', es: 'Minimizar', fr: 'Réduire',
    it: 'Riduci a icona', pt: 'Minimizar', nl: 'Minimaliseren', pl: 'Minimalizuj',
    ru: 'Свернуть', zh: '最小化', ja: '最小化'
  },
  close: {
    de: 'Schließen', en: 'Close', es: 'Cerrar', fr: 'Fermer',
    it: 'Chiudi', pt: 'Fechar', nl: 'Sluiten', pl: 'Zamknij',
    ru: 'Закрыть', zh: '关闭', ja: '閉じる'
  },
  tabJourney: {
    de: 'Kapitel-Reise', en: 'Chapter Journey', es: 'Viaje de capítulos', fr: 'Voyage des chapitres',
    it: 'Percorso dei capitoli', pt: 'Jornada de capítulos', nl: 'Hoofdstuk-reis', pl: 'Ścieżka rozdziałów',
    ru: 'Путешествие по главам', zh: '章节征途', ja: 'チャプターの旅'
  },
  tabChallenges: {
    de: 'Linter-Challenges', en: 'Linter Challenges', es: 'Desafíos de linter', fr: 'Défis du linter',
    it: 'Sfide del linter', pt: 'Desafios do linter', nl: 'Linter-uitdagingen', pl: 'Wyzwania lintera',
    ru: 'Задачи линтера', zh: 'Linter 质检挑战', ja: 'リンター挑戦'
  },
  challengesIntro: {
    de: 'Meistere typische BPMN-Fehler! Lade ein Rätsel, behebe die Modellierungsfehler und bringe den Linter auf 0 Warnungen!',
    en: 'Master typical BPMN pitfalls! Load a challenge, repair the diagram, and reduce bpmnlint errors to zero!',
    es: '¡Domina los errores típicos de BPMN! Carga un rompecabezas, corrige los fallos y reduce los avisos a 0.',
    fr: 'Maîtrisez les pièges typiques de BPMN ! Chargez une énigme, corrigez les erreurs et ramenez le linter à 0 alerte !',
    it: 'Padroneggia i tipici errori BPMN! Carica un enigma, correggi gli errori e porta il linter a 0 avvisi!',
    pt: 'Domine os erros comuns de BPMN! Carregue um desafio, corrija as falhas e zere os avisos do linter!',
    nl: 'Beheers typische BPMN-valkuilen! Laad een puzzel, herstel de fouten en breng de linter naar 0 waarschuwingen!',
    pl: 'Opanuj typowe pułapki BPMN! Załaduj zagadkę, napraw błędy i zredukuj ostrzeżenia lintera do 0!',
    ru: 'Устраняйте типичные ошибки BPMN! Загрузите задачу, исправьте модель и доведите число предупреждений до 0!',
    zh: '征服各种典型 BPMN 建模隐患！载入校验谜题，修复流程缺陷，让 Linter 警告清零！',
    ja: 'BPMNの典型的なミスを克服！パズルを読み込み、モデリングエラーを解消してリンター警告を0にしましょう！'
  },
  startPuzzle: {
    de: 'Rätsel laden', en: 'Start Puzzle', es: 'Cargar desafío', fr: 'Démarrer l\'énigme',
    it: 'Carica enigma', pt: 'Carregar desafio', nl: 'Puzzel laden', pl: 'Rozpocznij zagadkę',
    ru: 'Начать головоломку', zh: '开始解谜', ja: 'パズル開始'
  },
  checkNow: {
    de: 'Prüfung ausführen', en: 'Check Now', es: 'Comprobar ahora', fr: 'Vérifier maintenant',
    it: 'Verifica ora', pt: 'Verificar agora', nl: 'Nu controleren', pl: 'Sprawdź teraz',
    ru: 'Проверить сейчас', zh: '立即校验', ja: '今すぐ検証'
  },
  linterGuardActive: {
    de: 'Linter-Wächter aktiv', en: 'Linter Guard active', es: 'Guardián Linter activo', fr: 'Garde Linter actif',
    it: 'Guardiano Linter attivo', pt: 'Guardião Linter ativo', nl: 'Linter-bewaker actief', pl: 'Strażnik Lintera aktywny',
    ru: 'Страж линтера активен', zh: 'Linter 哨兵已激活', ja: 'リンター監視中'
  },
  completedPrefix: {
    de: '✓ Erledigt:', en: '✓ Completed:', es: '✓ Completado:', fr: '✓ Terminé :',
    it: '✓ Completato:', pt: '✓ Concluído:', nl: '✓ Voltooid:', pl: '✓ Zrobione:',
    ru: '✓ Выполнено:', zh: '✓ 已完成：', ja: '✓ 完了：'
  },
  chapterUnlocked: {
    de: '🎉 Kapitel freigeschaltet!', en: '🎉 Chapter unlocked!', es: '¡🎉 Capítulo desbloqueado!', fr: '🎉 Chapitre débloqué !',
    it: '🎉 Capitolo sbloccato!', pt: '🎉 Capítulo desbloqueado!', nl: '🎉 Hoofdstuk ontgrendeld!', pl: '🎉 Odblokowano rozdział!',
    ru: '🎉 Глава разблокирована!', zh: '🎉 章节已解锁！', ja: '🎉 チャプターが解放されました！'
  },
  lockedTooltip: {
    de: 'Gesperrt - Schließe vorherige Kapitel ab', en: 'Locked - Complete previous chapters',
    es: 'Bloqueado - Completa los capítulos anteriores', fr: 'Verrouillé - Complétez les chapitres précédents',
    it: 'Bloccato - Completa i capitoli precedenti', pt: 'Bloqueado - Conclua os capítulos anteriores',
    nl: 'Vergrendeld - Voltooi vorige hoofdstukken', pl: 'Zablokowane - Ukończ poprzednie rozdziały',
    ru: 'Заблокировано - завершите предыдущие главы', zh: '已锁定 - 请先完成前置章节', ja: 'ロック中 - 前のチャプターを完了してください'
  },
  completeSubtasksFirst: {
    de: 'Erfülle zuerst alle Teilaufgaben!', en: 'Complete all subtasks first!',
    es: '¡Completa todas las subtareas primero!', fr: 'Complétez d\'abord toutes les sous-tâches !',
    it: 'Completa prima tutte le sotto-attività!', pt: 'Conclua todas as subtarefas primeiro!',
    nl: 'Voltooi eerst alle deeltaken!', pl: 'Najpierw ukończ wszystkie zadania!',
    ru: 'Сначала выполните все подзадачи!', zh: '请先达成所有子任务！', ja: 'まずすべてのサブタスクを完了してください！'
  },
  dragHandleTitle: {
    de: 'Gedrückt halten zum Verschieben (Doppelklick = Zurücksetzen)',
    en: 'Drag to move (Double-click to reset)',
    es: 'Arrastra para mover (Doble clic para restablecer)',
    fr: 'Glisser pour déplacer (Double-clic pour réinitialiser)',
    it: 'Trascina per spostare (Doppio clic per ripristinare)',
    pt: 'Arraste para mover (Duplo clique para redefinir)',
    nl: 'Slepen om te verplaatsen (Dubbelklik om te herstellen)',
    pl: 'Przeciągnij, aby przesunąć (Podwójne kliknięcie = reset)',
    ru: 'Удерживайте для перемещения (Двойной клик = сброс)',
    zh: '拖拽以移动（双击复位）',
    ja: 'ドラッグで移動（ダブルクリックで位置リセット）'
  },
  questOpened: {
    de: '🎮 BPMN-Quest geöffnet.', en: '🎮 BPMN-Quest opened.',
    es: '🎮 BPMN-Quest abierto.', fr: '🎮 BPMN-Quest ouvert.',
    it: '🎮 BPMN-Quest aperto.', pt: '🎮 BPMN-Quest aberto.',
    nl: '🎮 BPMN-Quest geopend.', pl: '🎮 BPMN-Quest otwarty.',
    ru: '🎮 BPMN-Quest открыт.', zh: '🎮 BPMN-Quest 已开启。', ja: '🎮 BPMN-Quest を開きました。'
  },
  questAlreadyOpen: {
    de: '🎮 BPMN-Quest ist bereits geöffnet. Klicke unten auf „Nur Vorlage neu laden“ oder „Fortschritt zurücksetzen“, falls du neu aufsetzen möchtest.',
    en: '🎮 BPMN-Quest is already open. Click "Reload template only" or "Reset progress" at the bottom if you want to refresh.',
    es: '🎮 BPMN-Quest ya está abierto. Haz clic en "Solo recargar plantilla" o "Restablecer progreso" en la parte inferior.',
    fr: '🎮 BPMN-Quest est déjà ouvert. Cliquez en bas sur "Recharger le modèle uniquement" ou "Réinitialiser".',
    it: '🎮 BPMN-Quest è già aperto. Fai clic in basso su "Ricarica solo modello" o "Ripristina progressi".',
    pt: '🎮 BPMN-Quest já está aberto. Clique abaixo em "Recarregar apenas modelo" ou "Redefinir progresso".',
    nl: '🎮 BPMN-Quest is al geopend. Klik onderaan op "Alleen sjabloon herladen" of "Voortgang resetten".',
    pl: '🎮 BPMN-Quest jest już otwarty. Kliknij na dole "Tylko przeładuj szablon" lub "Zresetuj postęp".',
    ru: '🎮 BPMN-Quest уже открыт. Нажмите внизу "Только перезагрузить шаблон" или "Сбросить прогресс".',
    zh: '🎮 BPMN-Quest 伴侣已在运行中。若想重置，请点击底部的“仅重新载入模板”或“重置所有进度”。',
    ja: '🎮 BPMN-Quest は既に開いています。最初からやり直す場合は下部の「テンプレートのみ再読込」または「進捗リセット」をクリックしてください。'
  },
  confirmReloadTitle: {
    de: 'Nur BPMN-Vorlage neu laden?', en: 'Reload BPMN Template Only?',
    es: '¿Solo recargar la plantilla BPMN?', fr: 'Recharger uniquement le modèle BPMN ?',
    it: 'Ricaricare solo il modello BPMN?', pt: 'Recarregar apenas o modelo BPMN?',
    nl: 'Alleen BPMN-sjabloon herladen?', pl: 'Załadować tylko szablon BPMN?',
    ru: 'Только перезагрузить шаблон BPMN?', zh: '仅重新载入 BPMN 模板？', ja: 'BPMNテンプレートのみ再読み込みしますか？'
  },
  confirmReloadText: {
    de: 'Möchtest du die offizielle Vorlage frisch ins Diagramm laden?\n\nDein Quest-Fortschritt (XP, gelöste Kapitel & Rätsel) bleibt zu 100% erhalten.',
    en: 'Do you want to reload the official template into the diagram?\n\nYour quest progress (XP, completed chapters & puzzles) will be 100% preserved.',
    es: '¿Deseas recargar la plantilla oficial en el diagrama?\n\nTu progreso de misiones (XP, capítulos resueltos y acertijos) se conservará al 100%.',
    fr: 'Voulez-vous recharger le modèle officiel dans le diagramme ?\n\nVotre progression (XP, chapitres et énigmes résolus) sera conservée à 100%.',
    it: 'Vuoi ricaricare il modello ufficiale nel diagramma?\n\nI tuoi progressi (XP, capitoli ed enigmi risolti) saranno conservati al 100%.',
    pt: 'Deseja recarregar o modelo oficial no diagrama?\n\nSeu progresso da missão (XP, capítulos resolvidos e desafios) será 100% preservado.',
    nl: 'Wil je de officiële sjabloon opnieuw in het diagram laden?\n\nJe quest-voortgang (XP, voltooide hoofdstukken & puzzels) blijft 100% behouden.',
    pl: 'Czy chcesz załadować oficjalny szablon do diagramu?\n\nTwój postęp w queście (XP, rozwiązane rozdziały i zagadki) zostanie zachowany w 100%.',
    ru: 'Перезагрузить официальный шаблон в диаграмму?\n\nВаш прогресс (XP, пройденные главы и задачи) сохранится на 100%.',
    zh: '是否确认将官方标准化模板重新注入当前画布？\n\n你的所有任务成就（XP经验值、已通关章节与校验挑战）将 100% 完整保留。',
    ja: '公式テンプレートをダイアグラムに再読み込みしますか？\n\n獲得したXPやクリアしたチャプター・パズルの進捗は100%維持されます。'
  },
  confirmResetTitle: {
    de: 'Fortschritt & BPMN-Vorlage zurücksetzen?', en: 'Reset Progress & BPMN Template?',
    es: '¿Restablecer el progreso y la plantilla BPMN?', fr: 'Réinitialiser la progression et le modèle BPMN ?',
    it: 'Ripristinare i progressi e il modello BPMN?', pt: 'Redefinir o progresso e o modelo BPMN?',
    nl: 'Voortgang & BPMN-sjabloon resetten?', pl: 'Zresetować postęp i szablon BPMN?',
    ru: 'Сбросить прогресс и шаблон BPMN?', zh: '重置全部进度与 BPMN 模板？', ja: '進捗状況とBPMNテンプレートを初期化しますか？'
  },
  confirmResetText: {
    de: 'Möchtest du das gesamte Quest-Abenteuer von vorne beginnen?\n\nDein gesamter Fortschritt (XP, gelöste Kapitel und Linter-Challenges) wird zurückgesetzt und die Vorlage frisch geladen.',
    en: 'Do you want to restart the quest adventure from the beginning?\n\nAll your progress (XP, completed chapters, and linter challenges) will be reset and the template will be reloaded.',
    es: '¿Deseas reiniciar la aventura desde el principio?\n\nTodo tu progreso (XP, capítulos resueltos y desafíos) se restablecerá y la plantilla se cargará limpia.',
    fr: 'Voulez-vous recommencer l\'aventure depuis le début ?\n\nToute votre progression (XP, chapitres et défis) sera réinitialisée et le modèle sera rechargé.',
    it: 'Vuoi ricominciare l\'avventura dall\'inizio?\n\nTutti i tuoi progressi (XP, capitoli completati e sfide) saranno azzerati e il modello verrà ricaricato.',
    pt: 'Deseja reiniciar a aventura de missões do início?\n\nTodo o seu progresso (XP, capítulos concluídos e desafios) será redefinido e o modelo será recarregado.',
    nl: 'Wil je het quest-avontuur helemaal opnieuw beginnen?\n\nAl je voortgang (XP, voltooide hoofdstukken en uitdagingen) wordt gereset en het sjabloon wordt vers geladen.',
    pl: 'Czy chcesz rozpocząć przygodę od początku?\n\nCały Twój postęp (XP, ukończone rozdziały i wyzwania lintera) zostanie zresetowany, a szablon załadowany na nowo.',
    ru: 'Начать приключение с самого начала?\n\nВесь ваш прогресс (XP, пройденные главы и задачи) будет сброшен, а шаблон загружен заново.',
    zh: '是否确认重新开始整趟 BPMN 教学征途？\n\n你的所有进度（经验值、通关章节、Linter 挑战）将被重置，画布模板恢复至纯净初始态。',
    ja: 'クエストを最初からやり直しますか？\n\nすべての進捗（XP、クリアしたチャプター、リンター課題）がリセットされ、初期テンプレートが読み込まれます。'
  },
  btnCancel: {
    de: 'Abbrechen', en: 'Cancel', es: 'Cancelar', fr: 'Annuler',
    it: 'Annulla', pt: 'Cancelar', nl: 'Annuleren', pl: 'Anuluj',
    ru: 'Отмена', zh: '取消', ja: 'キャンセル'
  },
  toastReloadDone: {
    de: '📄 BPMN-Vorlage frisch geladen. Dein Quest-Fortschritt ist unverändert erhalten!',
    en: '📄 BPMN template reloaded. Your quest progress is fully preserved!',
    es: '📄 Plantilla BPMN recargada. ¡Tu progreso se conserva intacto!',
    fr: '📄 Modèle BPMN rechargé. Votre progression est conservée !',
    it: '📄 Modello BPMN ricaricato. I tuoi progressi sono intatti!',
    pt: '📄 Modelo BPMN recarregado. Seu progresso foi totalmente preservado!',
    nl: '📄 BPMN-sjabloon herladen. Je voortgang is ongewijzigd behouden!',
    pl: '📄 Szablon BPMN załadowany ponownie. Twój postęp pozostał nienaruszony!',
    ru: '📄 Шаблон BPMN перезагружен. Ваш прогресс полностью сохранен!',
    zh: '📄 BPMN 模板已重新加载。你的任务进度完好无损！',
    ja: '📄 BPMNテンプレートを再読み込みしました。進捗はすべて維持されています！'
  },
  toastResetDone: {
    de: '🔄 BPMN-Quest vollständig zurückgesetzt. Auf zu neuen Höhen!',
    en: '🔄 BPMN Quest completely reset. On to new achievements!',
    es: '🔄 BPMN-Quest restablecido por completo. ¡Hacia nuevas metas!',
    fr: '🔄 BPMN-Quest entièrement réinitialisé. En route vers de nouveaux sommets !',
    it: '🔄 BPMN-Quest completamente ripristinato. Verso nuovi traguardi!',
    pt: '🔄 BPMN-Quest totalmente redefinido. Rumo a novas conquistas!',
    nl: '🔄 BPMN-Quest volledig gereset. Op naar nieuwe hoogten!',
    pl: '🔄 BPMN-Quest zresetowany całkowicie. Czas na nowe osiągnięcia!',
    ru: '🔄 Квест BPMN полностью сброшен. Вперед к новым вершинам!',
    zh: '🔄 BPMN-Quest 已彻底重置。愿你在新的征程中勇攀高峰！',
    ja: '🔄 BPMN-Quest を完全にリセットしました。新たな挑戦を始めましょう！'
  },
  rulesStudiedDone: {
    de: '🎉 Regeln studiert! Aufgabe erfolgreich erfüllt.',
    en: '🎉 Rules studied! Task successfully completed.',
    es: '¡🎉 Reglas estudiadas! Tarea completada con éxito.',
    fr: '🎉 Règles étudiées ! Tâche accomplie avec succès.',
    it: '🎉 Regole studiate! Attività completata con successo.',
    pt: '🎉 Regras estudadas! Tarefa concluída com sucesso.',
    nl: '🎉 Regels bestudeerd! Taak succesvol voltooid.',
    pl: '🎉 Zasady przestudiowane! Zadanie pomyślnie zrealizowane.',
    ru: '🎉 Правила изучены! Задача успешно выполнена.',
    zh: '🎉 规则研读完毕！成功攻克该项子任务。',
    ja: '🎉 ルールを確認しました！タスク達成です。'
  },
  zeroErrors: {
    de: '🎉 0 Linter-Fehler! Ausgezeichnete Modellierung!',
    en: '🎉 0 errors found! Excellent modeling!',
    es: '¡🎉 0 errores encontrados! ¡Modelado excelente!',
    fr: '🎉 0 erreur trouvée ! Excellente modélisation !',
    it: '🎉 0 errori trovati! Modellazione eccellente!',
    pt: '🎉 0 erros encontrados! Modelagem excelente!',
    nl: '🎉 0 fouten gevonden! Uitstekende modellering!',
    pl: '🎉 Znaleziono 0 błędów! Doskonałe modelowanie!',
    ru: '🎉 0 ошибок найдено! Отличное моделирование!',
    zh: '🎉 0 个校验错误！模型结构无懈可击！',
    ja: '🎉 エラーは0件です！素晴らしいモデリングです！'
  },
  errorsRemaining: {
    de: 'Fehler zu beheben', en: 'error(s) remaining',
    es: 'error(es) por resolver', fr: 'erreur(s) restante(s)',
    it: 'errore/i da risolvere', pt: 'erro(s) restantes',
    nl: 'fout(en) over', pl: 'błąd/błędy do naprawy',
    ru: 'ошибок осталось исправить', zh: '处隐患待消除', ja: '件のエラーが残っています'
  },
  puzzleActive: {
    de: '🎯 Rätsel aktiv', en: '🎯 Puzzle active',
    es: '🎯 Desafío activo', fr: '🎯 Énigme active',
    it: '🎯 Enigma attivo', pt: '🎯 Desafio ativo',
    nl: '🎯 Puzzel actief', pl: '🎯 Zagadka aktywna',
    ru: '🎯 Задача активна', zh: '🎯 解谜挑战进行中', ja: '🎯 パズル挑戦中'
  }
};

export function getHudString(key, lang) {
  const table = HUD_STRINGS[key];
  if (!table) return '';
  const resolved = resolveQuestLang(lang);
  return table[resolved] || table[resolved.split('_')[0]] || table.en || table.de || '';
}
export const CHAPTER_I18N = {
  chapter1: {
    titleKey: 'banner1',
    taskText: {
      de: 'Aktiviere das Token Game, starte am Start-Event und erstelle deine erste eigene Aufgabe!',
      en: 'Activate token simulation, start at start event, and model your first task!',
      es: '¡Activa la simulación de tokens, comienza en el evento de inicio y modela tu primera tarea propia!',
      fr: 'Activez la simulation de tokens, démarrez sur l\'événement de début et modélisez votre première tâche !',
      it: 'Attiva la simulazione dei token, parti dall\'evento iniziale e modella la tua prima attività!',
      pt: 'Ative a simulação de tokens, comece no evento de início e modele sua primeira tarefa própria!',
      nl: 'Activeer het Token Game, start bij het start-event en modelleer je eerste eigen taak!',
      pl: 'Aktywuj grę tokenów, wystartuj od zdarzenia początkowego i stwórz własne pierwsze zadanie!',
      ru: 'Активируйте Токен-игру, запустите стартовое событие и смоделируйте свою первую задачу!',
      zh: '激活令牌模拟游戏，从开始事件起步并亲自创建你的第一个任务！',
      ja: 'トークンゲームを起動し、開始イベントからスタートして最初のタスクをモデリングしましょう！'
    },
    tipText: {
      de: 'Nutze die linke Palette oder klicke auf ein Element, um das Kontext-Menü (Kreis) zu nutzen.',
      en: 'Use the left palette or click any element to use the circular context pad.',
      es: 'Usa la paleta izquierda o haz clic en un elemento para usar el menú contextual circular.',
      fr: 'Utilisez la palette de gauche ou cliquez sur un élément pour utiliser le menu contextuel circulaire.',
      it: 'Usa la tavolozza a sinistra o fai clic su un elemento per utilizzare il menu contestuale circolare.',
      pt: 'Use a paleta esquerda ou clique em qualquer elemento para usar o menu de contexto circular.',
      nl: 'Gebruik het linker palet of klik op een element om het contextmenu te openen.',
      pl: 'Skorzystaj z lewej palety lub kliknij element, aby użyć menu kontekstowego.',
      ru: 'Используйте левую панель инструментов или нажмите на элемент, чтобы вызвать контекстное меню.',
      zh: '使用左侧工具面板，或点击画布上的任意元素调出上下文环形菜单。',
      ja: '左側のパレットを使用するか、要素をクリックしてコンテキストパッドを活用してください。'
    }
  },
  chapter2: {
    titleKey: 'banner2',
    taskText: {
      de: 'Schalte die XOR-Weiche um, löse die Ausnahme-Falle aus und schließe den Fluchtweg mit einem End-Event ab!',
      en: 'Toggle XOR switch, trigger incident trap, and complete the escape path with an End Event!',
      es: '¡Cambia la compuerta XOR, dispara la trampa de excepción y completa la ruta de escape con un evento de fin!',
      fr: 'Basculez l\'aiguillage XOR, déclenchez le piège d\'exception et terminez la voie de secours par un événement de fin !',
      it: 'Commuta il bivio XOR, attiva la trappola di eccezione e completa la via di fuga con un evento finale!',
      pt: 'Alterne a bifurcação XOR, dispare a armadilha de exceção e conclua a rota de fuga com um evento final!',
      nl: 'Zet de XOR-wissel om, activeer de uitzonderingsval en sluit het vluchtpad af met een eind-event!',
      pl: 'Przełącz bramkę XOR, wyzwól pułapkę wyjątku i zamknij ścieżkę ucieczki zdarzeniem końcowym!',
      ru: 'Переключите развилку XOR, активируйте ловушку исключения и завершите путь эвакуации конечным событием!',
      zh: '切换 XOR 异或网关分支，触发异常事件陷阱，并用结束事件完成逃生通道的闭环！',
      ja: 'XOR分岐を切り替え、例外トラップを発動させて、脱出ルートを終了イベントで完結させましょう！'
    },
    tipText: {
      de: '💡 Was ist ein Linter? Wie eine automatische Rechtschreibprüfung für Prozesse prüft er dein BPMN-Modell nach ISO 19510! Du findest den Linter-Button unten zentriert auf der Zeichenfläche. Klicke darauf, um Regelverstöße und die 3 goldenen Regeln anzuzeigen!',
      en: '💡 What is a linter? Like an automated spell checker for workflows, it validates your model against ISO 19510! Find the linter button centered at the bottom of the canvas. Click it to view issues and inspect the 3 golden rules!',
      es: '💡 ¿Qué es un linter? Al igual que un corrector ortográfico automático para procesos, valida tu modelo según ISO 19510. Encuentra el botón del linter en la parte inferior central del lienzo.',
      fr: '💡 Qu\'est-ce qu\'un linter ? Comme un correcteur orthographique pour processus, il valide votre modèle selon la norme ISO 19510 ! Trouvez le bouton du linter en bas au centre du canevas.',
      it: '💡 Cos\'è un linter? Come un correttore ortografico per processi, convalida il tuo modello secondo la norma ISO 19510! Trova il pulsante del linter in basso al centro della tela.',
      pt: '💡 O que é um linter? Como um verificador ortográfico para fluxos de trabalho, ele valida seu modelo conforme a ISO 19510! Encontre o botão do linter na parte inferior central.',
      nl: '💡 Wat is een linter? Als een automatische spellingcontrole voor processen valideert hij je BPMN-model volgens ISO 19510! Klik op de linter-knop onderaan.',
      pl: '💡 Czym jest linter? Jak automatyczny korektor pisowni procesów, weryfikuje Twój model zgodnie z normą ISO 19510! Kliknij przycisk lintera na dole.',
      ru: '💡 Что такое линтер? Как автопроверка орфографии для рабочих процессов, он проверяет модель по стандарту ISO 19510! Кнопка расположена внизу по центру.',
      zh: '💡 什么是 Linter 校验器？如同流程的自动化拼写检查工具，它遵循 ISO 19510 严格校验 BPMN 模型！点击画布底部中央的按钮即可查看规则。',
      ja: '💡 リンターとは？プロセスの自動スペルチェッカーのように、ISO 19510に準拠してモデルを検証します！キャンバス下部中央のボタンをクリックしてください。'
    }
  },
  chapter3: {
    titleKey: 'banner3',
    taskText: {
      de: 'Verbinde die Schmiede per Pfeil mit dem AND-Join, löse den AND-Split aus und beobachte die Synchronisation!',
      en: 'Connect forge to AND-Join, trigger AND-Split, and observe synchronization!',
      es: '¡Conecta la forja a la compuerta AND-Join, activa el portal AND-Split y observa la sincronización en vivo!',
      fr: 'Reliez la forge à la passerelle AND-Join, déclenchez le portail AND-Split et observez la synchronisation !',
      it: 'Collega la forgia al gateway AND-Join, attiva il portale AND-Split e osserva la sincronizzazione!',
      pt: 'Conecte a forja ao gateway AND-Join, acione o portal AND-Split e observe a sincronização!',
      nl: 'Verbind de smederij met de AND-Join, activeer de AND-Split en bekijk de synchronisatie!',
      pl: 'Połącz kuźnię z bramką AND-Join, wyzwól AND-Split i obserwuj synchronizację!',
      ru: 'Соедините кузницу со шлюзом AND-Join, активируйте AND-Split и наблюдайте за синхронизацией!',
      zh: '将锻造任务连线到 AND 汇聚网关，触发 AND 并行传送门，亲身体验多分支同步汇聚！',
      ja: '鍛冶場をAND結合ゲートウェイに矢印で接続し、AND分岐を発動させて同期の仕組みを観察しましょう！'
    },
    tipText: {
      de: 'Das AND-Join (➕) wartet geduldig, bis Tokens aus ALLEN eingehenden Pfaden eingetroffen sind.',
      en: 'The AND-Join (➕) synchronizes by waiting until tokens arrive from ALL incoming branches.',
      es: 'La compuerta AND-Join (➕) sincroniza esperando pacientemente hasta que los tokens de TODAS las ramas hayan llegado.',
      fr: 'La passerelle AND-Join (➕) synchronise en attendant patiemment que les tokens de TOUTES les branches entrantes soient arrivés.',
      it: 'Il gateway AND-Join (➕) sincronizza attendendo pazientemente che i token arrivino da TUTTI i rami in entrata.',
      pt: 'O gateway AND-Join (➕) sincroniza aguardando até que os tokens de TODOS os caminhos tenham chegado.',
      nl: 'De AND-Join (➕) synchroniseert door geduldig te wachten tot tokens uit ALLE inkomende takken zijn gearriveerd.',
      pl: 'Bramka AND-Join (➕) synchronizuje przepływ, czekając, aż tokeny ze WSZYSTKICH gałęzi dotrą do węzła.',
      ru: 'Шлюз AND-Join (➕) синхронизирует процесс, терпеливо ожидая токены из ВСЕХ входящих веток.',
      zh: 'AND 汇合网关（➕）具备严格的同步特性，它会耐心等待来自全部输入分支的令牌到齐后才继续放行。',
      ja: 'AND結合（➕）は、すべての入力ルートからトークンが揃うまで待機して同期を行います。'
    }
  },
  chapter4: {
    titleKey: 'banner4',
    taskText: {
      de: 'Raste 3s am Lagerfeuer, platziere einen Datenspeicher (🛢️ Tresor) beim Gewölbe und berge das BPMN-Relikt!',
      en: 'Rest 3s at campfire, place a Data Store (🛢️ Vault) near the vault, and loot relic!',
      es: '¡Descansa 3s en la hoguera, coloca un almacén de datos (🛢️ Bóveda) junto a la cámara y recupera el reliquia BPMN!',
      fr: 'Reposez-vous 3s au feu de camp, placez un magasin de données (🛢️ Coffre) près de la chambre et pillez la relique !',
      it: 'Riposa 3s al falò, posiziona un archivio dati (🛢️ Caveau) vicino al caveau e recupera la reliquia BPMN!',
      pt: 'Descanse 3s na fogueira, posicione um armazenamento de dados (🛢️ Cofre) e resgate a relíquia BPMN!',
      nl: 'Rust 3s bij het kampvuur, plaats een gegevensopslag (🛢️ Kluis) en bemachtig het BPMN-relict!',
      pl: 'Odpocznij 3s przy ognisku, umieść magazyn danych (🛢️ Skarbiec) i zdobądź relikt BPMN!',
      ru: 'Отдохните 3 секунды у костра, разместите хранилище данных (🛢️ Сейф) у склепа и заберите реликвию BPMN!',
      zh: '在篝火旁休憩 3 秒，在宝库旁放置一个持久化数据存储（🛢️ 宝库），并深入子流程夺取 BPMN 圣物！',
      ja: '焚き火で3秒休息し、宝物庫の近くにデータストア（🛢️ 金庫）を配置して、伝説のBPMNレリックを回収しましょう！'
    },
    tipText: {
      de: 'Datenspeicher (🛢️) repräsentieren persistente Datenstrukturen oder Tresore, die über den Prozess hinaus bestehen.',
      en: 'Data stores (🛢️) represent persistent storage structures retained beyond single workflow executions.',
      es: 'Los almacenes de datos (🛢️) representan estructuras de almacenamiento persistentes que trascienden la ejecución del proceso.',
      fr: 'Les magasins de données (🛢️) représentent des structures de stockage persistantes conservées au-delà d\'une exécution de processus.',
      it: 'I data store (🛢️) rappresentano strutture di archiviazione persistenti che rimangono oltre la singola esecuzione del processo.',
      pt: 'Armazenamentos de dados (🛢️) representam dados persistentes que sobrevivem à execução única do fluxo.',
      nl: 'Gegevensopslagen (🛢️) vertegenwoordigen persistente structuren die blijven bestaan na afloop van het proces.',
      pl: 'Magazyny danych (🛢️) reprezentują trwałe repozytoria danych, które istnieją poza pojedynczym wykonaniem procesu.',
      ru: 'Хранилища данных (🛢️) обозначают постоянные базы данных или хранилища, существующие дольше единичного процесса.',
      zh: '数据存储（🛢️）代表超越单一工作流实例生命周期的持久化数据库或外部存储仓库。',
      ja: 'データストア（🛢️）は、個別のプロセス実行を超えて永続化されるデータ構造や保管庫を表現します。'
    }
  },
  chapter5: {
    titleKey: 'banner5',
    taskText: {
      de: 'Verknüpfe das Quest-Logbuch per Daten-Assoziation, führe das Gilden-Audit durch und nimm deinen Titel entgegen!',
      en: 'Link Quest Logbook via data association, perform guild audit, and receive title!',
      es: '¡Vincula el libro de misiones mediante asociación de datos, completa la auditoría del gremio y recibe tu título!',
      fr: 'Liez le journal de quête via une association de données, effectuez l\'audit de la guilde et recevez votre titre !',
      it: 'Collega il registro di bordo tramite associazione dati, esegui l\'audit della gilda e ricevi il tuo titolo!',
      pt: 'Vincule o diário de missões via associação de dados, passe na auditoria da guilda e receba seu título!',
      nl: 'Koppel het logboek via data-associatie, voer de gilde-audit uit en ontvang je meestertitel!',
      pl: 'Połącz dziennik zadań asocjacją danych, przeprowadź audyt gildii i odbierz tytuł mistrzowski!',
      ru: 'Свяжите журнал заданий через ассоциацию данных, пройдите аудит гильдии и примите заслуженный титул!',
      zh: '使用数据关联将任务日志与活动相连，执行公会流程合规审计，荣获最高流程大师头衔！',
      ja: 'クエスト日誌をデータ関連付けで接続し、ギルドの品質監査を実施してグランドマスターの称号を授与されましょう！'
    },
    tipText: {
      de: 'Daten-Assoziationen (gestrichelte Pfeile) modellieren den Lese- und Schreibzugriff auf Datenobjekte.',
      en: 'Data associations (dashed arrows) model read/write access to data objects.',
      es: 'Las asociaciones de datos (flechas discontinuas) modelan el acceso de lectura y escritura a los objetos de datos.',
      fr: 'Les associations de données (flèches en pointillés) modélisent les accès en lecture et écriture aux objets de données.',
      it: 'Le associazioni di dati (frecce tratteggiate) modellano l\'accesso in lettura e scrittura agli oggetti dati.',
      pt: 'Associações de dados (setas tracejadas) modelam a leitura e escrita de objetos de dados.',
      nl: 'Data-associaties (gestreepte pijlen) modelleren lees- en schrijftoegang tot data-objecten.',
      pl: 'Asocjacje danych (linie przerywane ze strzałką) modelują operacje odczytu i zapisu obiektów danych.',
      ru: 'Ассоциации данных (пунктирные стрелки) моделируют доступ на чтение и запись к объектам данных.',
      zh: '数据关联（虚线箭头）专门用于表示活动节点对数据对象或数据存储的读取与写入访问。',
      ja: 'データ関連付け（破線の矢印）は、データオブジェクトに対する読み取りおよび書き込みアクセスをモデル化します。'
    }
  },
  chapter6: {
    titleKey: null,
    title: {
      de: 'Kapitel 6: Die Architekten-Prüfung (Cross-Lane Modellierung)',
      en: 'Chapter 6: The Architect\'s Exam (Cross-Lane Modeling)',
      es: 'Capítulo 6: El examen del arquitecto (Modelado entre carriles)',
      fr: 'Chapitre 6 : L\'examen de l\'architecte (Modélisation inter-couloirs)',
      it: 'Capitolo 6: L\'esame dell\'architetto (Modellazione tra corsie)',
      pt: 'Capítulo 6: O exame do arquiteto (Modelagem entre raias)',
      nl: 'Hoofdstuk 6: Het examen van de architect (Cross-lane modellering)',
      pl: 'Rozdział 6: Egzamin architekta (Modelowanie między torami)',
      ru: 'Глава 6: Экзамен архитектора (Междорожечное моделирование)',
      zh: '第6章：架构师大考（跨泳道综合建模）',
      ja: '第6章：アーキテクト試験（レーン間モデリング）'
    },
    taskText: {
      de: 'Die Meisterprüfung: Erstelle eine Aufgabe in der Werkstatt-Lane (Lane 3), ziehe Sequenzflüsse über Lane-Grenzen hinweg und schließe bei der Gilde (Lane 4) ab!',
      en: 'The Master Trial: Create a task in Workshop Lane (Lane 3), draw cross-lane sequence flows, and finish at the Guild (Lane 4)!',
      es: '¡La prueba maestra: Crea una tarea en el carril del taller (Carril 3), traza flujos de secuencia que crucen los carriles y finaliza en el gremio (Carril 4)!',
      fr: 'L\'épreuve suprême : Créez une tâche dans l\'atelier (Couloir 3), tracez des flux de séquence franchissant les limites de couloirs et concluez auprès de la Guilde (Couloir 4) !',
      it: 'La prova del maestro: Crea un\'attività nella corsia dell\'officina (Corsia 3), traccia flussi di sequenza tra corsie e concludi presso la gilda (Corsia 4)!',
      pt: 'A prova do mestre: Crie uma tarefa na oficina (Raia 3), desenhe fluxos de sequência que cruzam raias e conclua na guilda (Raia 4)!',
      nl: 'De meesterproef: Maak een taak in de werkplaats (Lane 3), trek sequentiestromen over lane-grenzen en sluit af bij het gilde (Lane 4)!',
      pl: 'Próba mistrzowska: Utwórz zadanie w torze warsztatu (Tor 3), poprowadź przepływy sekwencji przez granice torów i zakończ w gildii (Tor 4)!',
      ru: 'Мастерское испытание: Создайте задачу на дорожке мастерской (Дорожка 3), проведите потоки через границы дорожек и завершите процесс у Гильдии (Дорожка 4)!',
      zh: '终极大师考核：在工坊泳道（泳道 3）中创建任务，拉出跨越泳道边界的顺畅控制流，并最终交由公会（泳道 4）验收！',
      ja: 'マスター試験：工房レーン（レーン 3）にタスクを作成し、レーンの境界を越えるシーケンスフローを引いて、ギルド（レーン 4）でプロセスを完結させましょう！'
    },
    tipText: {
      de: 'Swimlanes trennen Verantwortungsbereiche. Sequenzflüsse dürfen frei zwischen Lanes fließen, aber niemals Pool-Grenzen überschreiten!',
      en: 'Swimlanes separate roles. Sequence flows cross lane boundaries freely, but never pool boundaries!',
      es: 'Los carriles separan responsabilidades. ¡Los flujos de secuencia cruzan carriles libremente, pero nunca los límites del pool!',
      fr: 'Les couloirs séparent les rôles. Les flux de séquence franchissent librement les couloirs, mais jamais les frontières de pool !',
      it: 'Le corsie separano i ruoli. I flussi di sequenza attraversano liberamente le corsie, ma mai i confini del pool!',
      pt: 'Raias separam responsabilidades. Fluxos de sequência cruzam raias livremente, mas nunca os limites do pool!',
      nl: 'Swimlanes scheiden verantwoordelijkheden. Sequentiestromen stromen vrij tussen lanes, maar nooit over poolgrenzen!',
      pl: 'Tory (lanes) dzielą role. Przepływy sekwencji swobodnie przecinają granice torów, lecz nigdy granice basenów (pools)!',
      ru: 'Дорожки разделяют роли. Потоки управления свободно пересекают границы дорожек, но никогда не пересекают границы пула!',
      zh: '泳道用于划定职责权限。顺序流可以在同一个池内的各泳道之间自由穿梭，但绝不允许跨越不同池的边界！',
      ja: 'スイムレーンは担当領域を区分します。シーケンスフローはレーン間を自由に行き来できますが、プール境界を越えることはできません！'
    }
  }
};

export function getChapterInfo(chapId, lang) {
  const conf = CHAPTER_I18N[chapId];
  if (!conf) return null;
  const resolved = resolveQuestLang(lang);

  let title = '';
  if (conf.titleKey && QUEST_TRANSLATIONS[resolved] && QUEST_TRANSLATIONS[resolved][conf.titleKey]) {
    title = QUEST_TRANSLATIONS[resolved][conf.titleKey];
  } else if (conf.title) {
    title = conf.title[resolved] || conf.title[resolved.split('_')[0]] || conf.title.en || conf.title.de || '';
  }

  const taskText = conf.taskText ? (conf.taskText[resolved] || conf.taskText[resolved.split('_')[0]] || conf.taskText.en || conf.taskText.de || '') : '';
  const tipText = conf.tipText ? (conf.tipText[resolved] || conf.tipText[resolved.split('_')[0]] || conf.tipText.en || conf.tipText.de || '') : '';

  return { title, taskText, tipText };
}

export const SUBTASK_I18N = {
  c1_toggle_sim: {
    text: {
      de: 'Token-Game aktivieren (Play-Symbol unten links)',
      en: 'Activate Token Game (Play icon bottom-left)',
      es: 'Activar Token Game (icono de reproducción abajo a la izquierda)',
      fr: 'Activer le Token Game (icône lecture en bas à gauche)',
      it: 'Attiva Token Game (icona play in basso a sinistra)',
      pt: 'Ativar Token Game (ícone de reprodução inferior esquerdo)',
      nl: 'Token Game activeren (afspeelicoon linksonder)',
      pl: 'Aktywuj Token Game (ikona odtwarzania w lewym dolnym rogu)',
      ru: 'Активировать Токен-игру (значок пуска внизу слева)',
      zh: '激活令牌模拟游戏（左下方播放图标）',
      ja: 'トークンゲームを起動（左下の再生アイコン）'
    },
    hint: {
      de: 'Klicke unten links auf das Play-Symbol oder drücke "T"',
      en: 'Click the play toggle in the bottom-left palette or press "T"',
      es: 'Haz clic en el icono de reproducción en la paleta inferior izquierda o pulsa "T"',
      fr: 'Cliquez sur l\'icône de lecture dans la palette en bas à gauche ou appuyez sur "T"',
      it: 'Fai clic sull\'icona play nella tavolozza in basso a sinistra o premi "T"',
      pt: 'Clique no ícone de reprodução na paleta inferior esquerda ou pressione "T"',
      nl: 'Klik linksonder op het afspeelicoon of druk op "T"',
      pl: 'Kliknij ikonę odtwarzania w lewej dolnej palecie lub naciśnij "T"',
      ru: 'Нажмите значок воспроизведения в левой нижней панели или клавишу "T"',
      zh: '点击左下角工具板中的播放切换按钮，或直接按下键盘快捷键 "T"',
      ja: '左下パレットの再生トグルをクリックするか、キーボードの「T」を押してください'
    }
  },
  c1_start_event: {
    text: {
      de: 'Start-Event auslösen (Token starten ▶)',
      en: 'Trigger Start Event (Launch token ▶)',
      es: 'Disparar evento de inicio (lanzar token ▶)',
      fr: 'Déclencher l\'événement de début (lancer le token ▶)',
      it: 'Attiva evento iniziale (lancia token ▶)',
      pt: 'Acionar evento de início (iniciar token ▶)',
      nl: 'Start-event activeren (token starten ▶)',
      pl: 'Uruchom zdarzenie początkowe (wystartuj token ▶)',
      ru: 'Запустить стартовое событие (пуск токена ▶)',
      zh: '触发开始事件（发射令牌 ▶）',
      ja: '開始イベントをトリガー（トークン発進 ▶）'
    },
    hint: {
      de: 'Klicke im aktiven Token Game auf den Kreis des Start-Events, um den goldenen Token loszuschicken',
      en: 'Click on the Start Event circle in active token simulation to launch the golden token',
      es: 'Haz clic en el círculo del evento de inicio en la simulación activa para lanzar el token dorado',
      fr: 'Cliquez sur le cercle de l\'événement de début pour lancer le token doré',
      it: 'Fai clic sul cerchio dell\'evento iniziale per lanciare il token dorato',
      pt: 'Clique no círculo do evento de início para lançar o token dourado',
      nl: 'Klik op de cirkel van het start-event om het gouden token te starten',
      pl: 'Kliknij okrąg zdarzenia początkowego, aby wystartować złoty token',
      ru: 'Нажмите на кружок стартового события, чтобы выпустить золотой токен',
      zh: '在激活的模拟状态下点击开始事件的细边圆圈，发出金色令牌',
      ja: 'シミュレーション中に開始イベントの円をクリックして、金色のトークンを発進させます'
    }
  },
  c1_model_task: {
    text: {
      de: '🔨 Bauauftrag: Aufgabe "Proviant vorbereiten" erstellen & benennen (Rechteck 🔲)',
      en: '🔨 Build Task: Create & name Task "Prepare Rations" (Rectangle 🔲)',
      es: '🔨 Tarea de construcción: Crear y nombrar tarea "Preparar provisiones" (Rectángulo 🔲)',
      fr: '🔨 Tâche de modélisation : Créer et nommer la tâche "Préparer les rations" (Rectangle 🔲)',
      it: '🔨 Attività di modellazione: Crea e nomina "Preparare provviste" (Rettangolo 🔲)',
      pt: '🔨 Tarefa de modelagem: Criar e nomear "Preparar provisões" (Retângulo 🔲)',
      nl: '🔨 Bouwopdracht: Taak "Provisie voorbereiden" maken & benoemen (Rechthoek 🔲)',
      pl: '🔨 Zadanie modelowania: Utwórz i nazwij "Przygotowanie prowiantu" (Prostokąt 🔲)',
      ru: '🔨 Задача моделирования: Создать и назвать задачу "Подготовить провизию" (Прямоугольник 🔲)',
      zh: '🔨 建模任务：创建并命名任务"准备口粮"（圆角矩形 🔲）',
      ja: '🔨 モデリング任務：タスク「食糧の準備」を作成・命名（角丸長方形 🔲）'
    },
    hint: {
      de: 'Klicke in der linken Palette auf das abgerundete Rechteck (Task 🔲), platziere es in der Helden-Lane und benenne es per Doppelklick als "Proviant vorbereiten"',
      en: 'Click the rounded rectangle (Task 🔲) in the left palette, place it into Hero Lane, and double-click to name it "Prepare Rations"',
      es: 'Haz clic en el rectángulo redondeado (Tarea 🔲) en la paleta izquierda, colócalo en el carril del héroe y haz doble clic para nombrarlo',
      fr: 'Cliquez sur le rectangle arrondi (Tâche 🔲) dans la palette de gauche, placez-le dans le couloir du héros et double-cliquez pour le nommer',
      it: 'Fai clic sul rettangolo arrotondato nella tavolozza di sinistra, posizionalo nella corsia dell\'eroe e fai doppio clic per nominarlo',
      pt: 'Clique no retângulo arredondado na paleta esquerda, coloque-o na raia do herói e clique duas vezes para nomeá-lo',
      nl: 'Klik op de afgeronde rechthoek (Taak 🔲) in het linker palet, plaats hem in de Helden-lane en dubbelklik om hem te benoemen',
      pl: 'Kliknij zaokrąglony prostokąt w lewej palecie, umieść go w torze bohatera i kliknij dwukrotnie, aby nadać nazwę',
      ru: 'Нажмите скругленный прямоугольник на левой панели, перетащите на дорожку героя и дважды щелкните для переименования',
      zh: '点击左侧工具板中的圆角矩形（任务 🔲），放入英雄泳道中，双击输入名称',
      ja: '左パレットの角丸長方形（タスク 🔲）をクリックして英雄レーンに配置し、ダブルクリックして名前を入力します'
    }
  },
  c1_color_task: {
    text: {
      de: '🎨 Farbe bekennen: Färbe eine Aufgabe in Lane 1 ein (Farbpalette 🎨)',
      en: '🎨 Choose Color: Color a task in Lane 1 (Color palette 🎨)',
      es: '🎨 Dar color: Colorear una tarea en Carril 1 (Paleta de colores 🎨)',
      fr: '🎨 Choisir une couleur : Colorer une tâche dans le couloir 1 (Palette de couleurs 🎨)',
      it: '🎨 Scegli colore: Colora un\'attività nella corsia 1 (Tavolozza 🎨)',
      pt: '🎨 Escolher cor: Colorir uma tarefa na raia 1 (Paleta de cores 🎨)',
      nl: '🎨 Kleur bekennen: Geef een taak in lane 1 een kleur (Kleurpalet 🎨)',
      pl: '🎨 Dodaj kolor: Pokoloruj zadanie w torze 1 (Paleta kolorów 🎨)',
      ru: '🎨 Назначить цвет: Раскрасить задачу на дорожке 1 (Палитра 🎨)',
      zh: '🎨 赋予颜色：在泳道 1 中为任务着色（调色板 🎨）',
      ja: '🎨 色を設定：レーン 1 のタスクに色を付ける（カラーパレット 🎨）'
    },
    hint: {
      de: 'Klicke auf deine erstellte Aufgabe "Proviant vorbereiten" oder eine Helden-Aufgabe und nutze das Farbpaletten-Symbol 🎨 im Menü direkt am Element.',
      en: 'Click your created task "Prepare Rations" or any hero task and use the color palette icon 🎨 in the context pad.',
      es: 'Haz clic en la tarea creada o en cualquier tarea del héroe y utiliza el icono de paleta de colores 🎨 en el menú contextual.',
      fr: 'Cliquez sur votre tâche créée ou sur une tâche du héros et utilisez l\'icône de palette 🎨 dans le menu contextuel.',
      it: 'Fai clic sull\'attività creata o su un\'attività dell\'eroe e usa l\'icona della tavolozza 🎨 nel menu contestuale.',
      pt: 'Clique na tarefa criada ou em qualquer tarefa do herói e use o ícone de paleta de cores 🎨 no menu de contexto.',
      nl: 'Klik op je taak en gebruik het kleurenpalet-icoon 🎨 in het element-contextmenu.',
      pl: 'Kliknij utworzone zadanie i użyj ikony palety kolorów 🎨 w menu kontekstowym.',
      ru: 'Нажмите на созданную задачу или задачу героя и выберите значок палитры 🎨 в контекстном меню.',
      zh: '选中你创建的任务或英雄任务，点击元素环形菜单中的调色板图标 🎨 为其设置主题颜色。',
      ja: '作成したタスクを選択し、コンテキストパッドのカラーパレットアイコン 🎨 を使って色を設定します。'
    }
  },
  c1_open_properties: {
    text: {
      de: '⚙️ Eigenschaften & Dokumentation öffnen (Button "Eigenschaften" oben)',
      en: '⚙️ Open Properties & Documentation ("Properties" button top)',
      es: '⚙️ Abrir propiedades y documentación (botón "Propiedades" arriba)',
      fr: '⚙️ Ouvrir les propriétés et la documentation (bouton "Propriétés" en haut)',
      it: '⚙️ Apri proprietà e documentazione (pulsante "Proprietà" in alto)',
      pt: '⚙️ Abrir propriedades e documentação (botão "Propriedades" no topo)',
      nl: '⚙️ Eigenschappen & documentatie openen (knop "Eigenschappen" bovenaan)',
      pl: '⚙️ Otwórz właściwości i dokumentację (przycisk "Właściwości" u góry)',
      ru: '⚙️ Открыть свойства и документацию (кнопка "Свойства" вверху)',
      zh: '⚙️ 打开属性与文档（顶部"属性"按钮）',
      ja: '⚙️ プロパティとドキュメントを開く（上部の「プロパティ」ボタン）'
    },
    hint: {
      de: 'Klicke oben in der Werkzeugleiste auf den Button "Eigenschaften" (📋). Markiere eine Aufgabe und öffne in der Seitenleiste den Bereich "Dokumentation"!',
      en: 'Click the "Properties" button (📋) in the top toolbar. Select a task and open the "Documentation" section in the right sidebar!',
      es: 'Haz clic en el botón "Propiedades" (📋) en la barra superior. Selecciona una tarea y abre la sección "Documentación" en la barra lateral derecha.',
      fr: 'Cliquez sur le bouton "Propriétés" (📋) dans la barre supérieure. Sélectionnez une tâche et ouvrez la section "Documentation" dans la barre latérale.',
      it: 'Fai clic sul pulsante "Proprietà" (📋) nella barra degli strumenti in alto. Seleziona un\'attività e apri la sezione "Documentazione"!',
      pt: 'Clique no botão "Propriedades" (📋) na barra de ferramentas superior. Selecione uma tarefa e abra a seção "Documentação"!',
      nl: 'Klik op de knop "Eigenschappen" (📋) in de bovenste werkbalk. Selecteer een taak en open de sectie "Documentatie"!',
      pl: 'Kliknij przycisk "Właściwości" (📋) na górnym pasku. Zaznacz zadanie i otwórz sekcję "Dokumentacja" w prawym panelu!',
      ru: 'Нажмите кнопку "Свойства" (📋) на верхней панели инструментов. Выделите задачу и раскройте раздел "Документация" справа!',
      zh: '点击顶部工具栏中的"属性"按钮（📋）。选中任意任务，并在右侧侧边栏中展开"文档"（Documentation）手风琴区域！',
      ja: '上部ツールバーの「プロパティ」ボタン（📋）をクリックします。タスクを選択し、右側パネルの「ドキュメント」セクションを開きます！'
    }
  },
  c1_add_annotation: {
    text: {
      de: '📝 Kommentar anheften: Ergänze eine Text-Annotation (Symbol [ am Element) an eine Aufgabe ohne Notiz',
      en: '📝 Attach Note: Add a Text Annotation (symbol [ on element) to a task without note',
      es: '📝 Adjuntar nota: Añade una anotación de texto (símbolo [ en el elemento) a una tarea sin nota',
      fr: '📝 Joindre une note : Ajouter une annotation texte (symbole [ sur l\'élément) à une tâche sans note',
      it: '📝 Allega nota: Aggiungi un\'annotazione di testo (simbolo [ sull\'elemento) a un\'attività senza nota',
      pt: '📝 Anexar nota: Adicione uma anotação de texto (símbolo [ no elemento) a uma tarefa sem nota',
      nl: '📝 Notitie toevoegen: Voeg een tekstannotatie toe (symbool [ op element) aan een taak zonder notitie',
      pl: '📝 Dołącz notatkę: Dodaj adnotację tekstową (symbol [ na elemencie) do zadania bez notatki',
      ru: '📝 Прикрепить заметку: Добавьте текстовую аннотацию (значок [ на элементе) к задаче без примечания',
      zh: '📝 附加注释：为尚无备注的任务添加文本注释（元素上的 [ 图标）',
      ja: '📝 メモを追加：注釈のないタスクにテキスト注釈（要素の [ 記号）を追加'
    },
    hint: {
      de: 'Klicke auf deine erstellte Aufgabe "Proviant vorbereiten" oder auf "Rucksack packen". Wähle im Kontextmenü direkt am Element das Notiz-Symbol [ (Text-Annotation).',
      en: 'Click your task "Prepare Rations" or "Pack Gear". In the element context menu, click the note symbol [ (Text Annotation) and type a brief note.',
      es: 'Haz clic en la tarea creada o en "Preparar mochila". En el menú contextual, haz clic en el símbolo de nota [ (Anotación de texto).',
      fr: 'Cliquez sur votre tâche ou sur "Préparer le sac". Dans le menu contextuel, cliquez sur le symbole de note [ (Annotation texte).',
      it: 'Fai clic sull\'attività creata o su "Prepara zaino". Nel menu contestuale, fai clic sul simbolo della nota [ (Annotazione di testo).',
      pt: 'Clique na tarefa criada ou em "Arrumar mochila". No menu de contexto, clique no símbolo de nota [ (Anotação de texto).',
      nl: 'Klik op je taak en kies het notitiesymbool [ (Tekstannotatie) in het contextmenu.',
      pl: 'Kliknij utworzone zadanie. W menu kontekstowym wybierz symbol notatki [ (Adnotacja tekstowa).',
      ru: 'Нажмите на созданную задачу. В контекстном меню выберите значок заметки [ (Текстовая аннотация).',
      zh: '选中创建的任务或"整理背包"任务，点击上下文菜单中的文本注释图标 [，输入简要说明文字。',
      ja: '作成したタスクまたは「装備のパッキング」をクリックし、コンテキストメニューのメモ記号 [（テキスト注釈）を選択します。'
    }
  },
  c1_user_tasks: {
    text: {
      de: 'Heldenklasse wählen (👤) & Rucksack packen (✋)',
      en: 'Choose Hero (👤) & Pack Gear (✋)',
      es: 'Elegir héroe (👤) y preparar mochila (✋)',
      fr: 'Choisir un héros (👤) & faire son sac (✋)',
      it: 'Scegli eroe (👤) e prepara zaino (✋)',
      pt: 'Escolher herói (👤) e arrumar mochila (✋)',
      nl: 'Heldenklasse kiezen (👤) & rugzak inpakken (✋)',
      pl: 'Wybierz bohatera (👤) i spakuj plecak (✋)',
      ru: 'Выбрать героя (👤) и собрать рюкзак (✋)',
      zh: '选择英雄职业 (👤) 与整理背包 (✋)',
      ja: '英雄の選択 (👤) と装備のパッキング (✋)'
    },
    hint: {
      de: 'Klicke auf die beiden Vorbereitungs-Aufgaben im Token Game',
      en: 'Click both preparation activities in token simulation',
      es: 'Haz clic en ambas tareas de preparación en la simulación de tokens',
      fr: 'Cliquez sur les deux activités de préparation dans la simulation de tokens',
      it: 'Fai clic su entrambe le attività di preparazione nella simulazione dei token',
      pt: 'Clique em ambas as atividades de preparação na simulação de tokens',
      nl: 'Klik op beide voorbereidingstaken in het Token Game',
      pl: 'Kliknij oba zadania przygotowawcze w grze tokenów',
      ru: 'Нажмите на обе подготовительные задачи в Токен-игре',
      zh: '在激活的令牌模拟中依次点击这两项前置准备任务',
      ja: 'トークンシミュレーション内で2つの準備タスクをクリックします'
    }
  },
  c2_switch_xor: {
    text: {
      de: 'Weiche umstellen (Klick auf XOR-Gateway ✖ oder Pfad-Schalter)',
      en: 'Toggle Switch (Click XOR Gateway ✖ or Branch Switch)',
      es: 'Cambiar bifurcación (clic en compuerta XOR ✖ o selector de ruta)',
      fr: 'Basculer l\'aiguillage (clic sur la passerelle XOR ✖ ou sélecteur)',
      it: 'Cambia deviazione (clic su gateway XOR ✖ o selettore)',
      pt: 'Alternar desvio (clique no gateway XOR ✖ ou no seletor)',
      nl: 'Wissel omzetten (klik op XOR-gateway ✖ of padschakelaar)',
      pl: 'Przełącz rozgałęzienie (kliknij bramkę XOR ✖ lub przełącznik ścieżki)',
      ru: 'Переключить развилку (клик по шлюзу XOR ✖ или переключателю пути)',
      zh: '切换分支（点击 XOR 网关 ✖ 或路径开关）',
      ja: '分岐の切り替え（XORゲートウェイ ✖ またはルートスイッチをクリック）'
    },
    hint: {
      de: 'Klicke im Simulationsmodus auf das XOR-Gateway ✖ oder den Pfad-Schalter, um den Gefahrenpfad einzuschalten',
      en: 'In simulation mode, click the XOR gateway ✖ or the branch button to select the hazard path',
      es: 'En el modo de simulación, haz clic en la compuerta XOR ✖ para seleccionar la ruta peligrosa',
      fr: 'En mode simulation, cliquez sur la passerelle XOR ✖ pour sélectionner le chemin dangereux',
      it: 'In modalità simulazione, fai clic sul gateway XOR ✖ per selezionare il percorso pericoloso',
      pt: 'No modo de simulação, clique no gateway XOR ✖ para selecionar o caminho perigoso',
      nl: 'Klik in simulatiemodus op de XOR-gateway ✖ om het gevarenpad te kiezen',
      pl: 'W trybie symulacji kliknij bramkę XOR ✖, aby wybrać niebezpieczną ścieżkę',
      ru: 'В режиме симуляции нажмите на шлюз XOR ✖, чтобы выбрать опасный путь',
      zh: '在模拟模式下点击 XOR 网关 ✖ 或分支按钮，切换至危险的巨魔洞穴路径',
      ja: 'シミュレーションモードでXORゲートウェイ ✖ をクリックして危険ルートを選択します'
    }
  },
  c2_trigger_trap: {
    text: {
      de: 'Ausnahme-Falle testen (Blitz-Symbol ⚡ Trollhöhle)',
      en: 'Test Exception Trap (Flash Icon ⚡ at Troll Cave)',
      es: 'Probar trampa de excepción (icono de rayo ⚡ en la cueva del trol)',
      fr: 'Tester le piège d\'exception (icône éclair ⚡ à la grotte du troll)',
      it: 'Testa trappola di eccezione (icona fulmine ⚡ nella caverna del troll)',
      pt: 'Testar armadilha de exceção (ícone de raio ⚡ na caverna do troll)',
      nl: 'Uitzonderingsval testen (bliksemicoon ⚡ bij trollengrot)',
      pl: 'Przetestuj pułapkę wyjątków (ikona błyskawicy ⚡ w jaskini trolla)',
      ru: 'Проверить ловушку исключения (значок молнии ⚡ в пещере тролля)',
      zh: '测试异常陷阱（巨魔洞穴处的闪电图标 ⚡）',
      ja: '例外トラップのテスト（トロール洞窟の雷アイコン ⚡）'
    },
    hint: {
      de: 'Error Boundary Events fangen unvorhergesehene Fehler ab und leiten sofort auf die Notfall-Spur um',
      en: 'Error boundary events catch failures and escalate immediately to emergency paths',
      es: 'Los eventos de límite de error capturan fallos y redirigen de inmediato a la ruta de emergencia',
      fr: 'Les événements de frontière d\'erreur interceptent les pannes et redirigent immédiatement vers les voies d\'urgence',
      it: 'Gli eventi limite di errore intercettano i guasti e deviano subito sul percorso di emergenza',
      pt: 'Eventos de fronteira de erro capturam falhas e redirecionam imediatamente para caminhos de emergência',
      nl: 'Error boundary events vangen fouten op en leiden direct om naar het noodpad',
      pl: 'Krawędziowe zdarzenia błędów przechwytują awarie i natychmiast przekierowują na ścieżkę awaryjną',
      ru: 'Граничные события ошибок перехватывают сбои и мгновенно перенаправляют на путь эскалации',
      zh: '边界错误事件（Error Boundary Event）可在任务发生意外故障时立即将其捕获，并无缝重定向到应急处置流',
      ja: 'エラー境界イベントは障害を検知し、直ちに緊急ルートへと処理をエスカレーションします'
    }
  },
  c2_model_end: {
    text: {
      de: '🔨 Bauauftrag: Verbinde "Notruf senden" mit dem End-Event \'Rückzug zum Basislager\'',
      en: '🔨 Build Task: Connect "Call Help" to End Event \'Retreat to Base Camp\'',
      es: '🔨 Tarea de construcción: Conectar "Enviar señal de socorro" con el evento de fin \'Retirada al campamento base\'',
      fr: '🔨 Tâche de modélisation : Relier "Envoyer un signal de détresse" à l\'événement de fin \'Repli vers le camp de base\'',
      it: '🔨 Attività di modellazione: Collega "Invia segnale di soccorso" all\'evento finale \'Ritiro al campo base\'',
      pt: '🔨 Tarefa de modelagem: Conectar "Enviar sinal de socorro" ao evento final \'Recuo para o acampamento base\'',
      nl: '🔨 Bouwopdracht: Verbind "Noodsignaal verzenden" met het eind-event \'Terugtrekking naar basiskamp\'',
      pl: '🔨 Zadanie modelowania: Połącz "Wyślij sygnał ratunkowy" ze zdarzeniem końcowym \'Odwrót do obozu bazowego\'',
      ru: '🔨 Задача моделирования: Соединить "Отправить сигнал бедствия" с конечным событием \'Отступление в базовый лагерь\'',
      zh: '🔨 建模任务：将"发送求救信号"连接至结束事件"撤退至大本营"',
      ja: '🔨 モデリング任務：「救援信号を送信」を終了イベント「ベースキャンプへの退却」に接続'
    },
    hint: {
      de: 'Klicke auf "Notruf senden", wähle das Pfeil-Werkzeug und klicke auf das rote End-Event (🔴)',
      en: 'Click "Call Help", select the arrow tool, and click on the red End Event (🔴)',
      es: 'Haz clic en "Enviar señal de socorro", selecciona la flecha y haz clic en el evento de fin rojo (🔴)',
      fr: 'Cliquez sur "Envoyer un signal", sélectionnez la flèche et cliquez sur l\'événement de fin rouge (🔴)',
      it: 'Fai clic su "Invia segnale", seleziona lo strumento freccia e fai clic sull\'evento finale rosso (🔴)',
      pt: 'Clique em "Enviar socorro", selecione a ferramenta de seta e clique no evento final vermelho (🔴)',
      nl: 'Klik op "Noodsignaal verzenden", kies het pijl-gereedschap en verbind met het rode eind-event (🔴)',
      pl: 'Kliknij "Wyślij sygnał", wybierz narzędzie strzałki i kliknij czerwone zdarzenie końcowe (🔴)',
      ru: 'Нажмите "Отправить сигнал", выберите стрелку последовательности и соедините с красным конечным событием (🔴)',
      zh: '点击"发送求救信号"，在环形菜单中选择顺序流箭头工具，连接到红色的结束事件（🔴）',
      ja: '「救援信号を送信」をクリックし、矢印ツールを選択して赤色の終了イベント（🔴）に接続します'
    }
  },
  c2_color_hazard: {
    text: {
      de: '🎨 Signalfarbe setzen: Färbe den Notfallpfad rot ein (z. B. End-Event 🔴)',
      en: '🎨 Set Alert Color: Color the incident path red (e.g. End Event 🔴)',
      es: '🎨 Asignar color de alerta: Colorear la ruta de emergencia en rojo (p. ej. evento de fin 🔴)',
      fr: '🎨 Définir la couleur d\'alerte : Colorer le chemin d\'urgence en rouge (ex. événement de fin 🔴)',
      it: '🎨 Imposta colore di allerta: Colora il percorso di emergenza in rosso (es. evento finale 🔴)',
      pt: '🎨 Definir cor de alerta: Colorir o caminho de emergência em vermelho (ex. evento final 🔴)',
      nl: '🎨 Signaalkleur instellen: Geef het noodpad een rode kleur (bijv. eind-event 🔴)',
      pl: '🎨 Ustaw kolor ostrzegawczy: Pokoloruj ścieżkę awaryjną na czerwono (np. zdarzenie końcowe 🔴)',
      ru: '🎨 Установить сигнальный цвет: Раскрасить путь инцидента в красный цвет (напр. конечное событие 🔴)',
      zh: '🎨 设置警示色彩：将应急路线标红（如结束事件 🔴）',
      ja: '🎨 警告色を設定：インシデントルートを赤で着色（例：終了イベント 🔴）'
    },
    hint: {
      de: 'In BPMN werden Ausnahmepfade oft rot hervorgehoben. Markiere das End-Event und wähle im Farbmenü 🎨 Rot.',
      en: 'In BPMN, exception paths are often colored red. Select the end event and pick red in color menu 🎨.',
      es: 'En BPMN, las rutas de excepción suelen resaltarse en rojo. Selecciona el evento de fin y elige rojo en el menú 🎨.',
      fr: 'En BPMN, les chemins d\'exception sont souvent surlignés en rouge. Sélectionnez l\'événement de fin et choisissez le rouge 🎨.',
      it: 'In BPMN i percorsi di eccezione sono evidenziati in rosso. Seleziona l\'evento finale e scegli il rosso 🎨.',
      pt: 'No BPMN, caminhos de exceção são destacados em vermelho. Selecione o evento final e escolha vermelho 🎨.',
      nl: 'In BPMN worden uitzonderingspaden rood gemarkeerd. Selecteer het eind-event en kies rood in het kleurmenu 🎨.',
      pl: 'W BPMN ścieżki wyjątków wyróżnia się na czerwono. Zaznacz zdarzenie końcowe i wybierz kolor czerwony 🎨.',
      ru: 'В BPMN пути инцидентов выделяют красным. Выделите конечное событие и выберите красный оттенок 🎨.',
      zh: '在专业 BPMN 建模中，异常与容灾路径通常以醒目的红色标注。选中结束事件，在调色板中选择红色 🎨。',
      ja: 'BPMNでは例外ルートを赤で強調表示するのが一般的です。終了イベントを選択してカラーメニュー 🎨 から赤を選びます。'
    }
  },
  c2_study_linter: {
    text: {
      de: 'Linter-Regeln studieren (Linter unten mittig aktivieren 📜)',
      en: 'Study Linter Rules (Activate linter at bottom center 📜)',
      es: 'Estudiar reglas del linter (activar linter abajo en el centro 📜)',
      fr: 'Étudier les règles du linter (activer le linter en bas au centre 📜)',
      it: 'Studia regole del linter (attiva linter in basso al centro 📜)',
      pt: 'Estudar regras do linter (ativar linter na parte inferior central 📜)',
      nl: 'Linter-regels bestuderen (activeer linter onderaan in het midden 📜)',
      pl: 'Przestudiuj reguły lintera (aktywuj linter na dole pośrodku 📜)',
      ru: 'Изучить правила линтера (активировать линтер внизу по центру 📜)',
      zh: '学习 Linter 规则（在画布底端中央激活 📜）',
      ja: 'リンター規則を学習（下部中央でリンターを起動 📜）'
    },
    hint: {
      de: 'Unten mittig auf der Zeichenfläche findest du den Linter-Button. Klicke darauf, um die 3 goldenen Regeln anzuzeigen.',
      en: 'Find the linter button at the bottom center of the canvas. Click it to inspect the 3 golden rules.',
      es: 'Encuentra el botón del linter en la parte inferior central del lienzo y haz clic para ver las 3 reglas de oro.',
      fr: 'Trouvez le bouton du linter en bas au centre du canevas et cliquez pour voir les 3 règles d\'or.',
      it: 'Trova il pulsante del linter in basso al centro della tela per visualizzare le 3 regole d\'oro.',
      pt: 'Encontre o botão do linter na parte inferior central para visualizar as 3 regras de ouro.',
      nl: 'Onderaan in het midden vind je de linter-knop. Klik erop om de 3 gouden regels te bekijken.',
      pl: 'Na dole pośrodku płótna znajdziesz przycisk lintera. Kliknij, aby zobaczyć 3 złote reguły.',
      ru: 'Внизу по центру холста находится кнопка линтера. Нажмите на нее, чтобы изучить 3 золотых правила.',
      zh: '在画布正下方找到药丸形状的 Linter 校验状态徽章，点击即可展开 3 条黄金建模法则。',
      ja: 'キャンバス下部中央のリンターボタンをクリックして、3つの黄金ルールを確認してください。'
    }
  },
  c3_model_connect: {
    text: {
      de: '🔨 Bauauftrag: Verbinde die Schmiede per Pfeil mit dem AND-Join (➕)',
      en: '🔨 Build Task: Connect forge to AND-Join Gateway (➕)',
      es: '🔨 Tarea de construcción: Conectar la forja con la compuerta AND-Join (➕)',
      fr: '🔨 Tâche de modélisation : Relier la forge à la passerelle AND-Join (➕)',
      it: '🔨 Attività di modellazione: Collega la forgia al gateway AND-Join (➕)',
      pt: '🔨 Tarefa de modelagem: Conectar a forja ao gateway AND-Join (➕)',
      nl: '🔨 Bouwopdracht: Verbind de smederij met de AND-Join (➕)',
      pl: '🔨 Zadanie modelowania: Połącz kuźnię z bramką AND-Join (➕)',
      ru: '🔨 Задача моделирования: Соединить кузницу со шлюзом AND-Join (➕)',
      zh: '🔨 建模任务：将锻造宝剑连线到 AND 并行汇合网关 (➕)',
      ja: '🔨 モデリング任務：鍛冶場をAND結合ゲートウェイ (➕) に接続'
    },
    hint: {
      de: 'Klicke auf "Schwert schmieden" in Lane 3 und ziehe einen Pfeil zum AND-Join',
      en: 'Click "Forge Sword" in Lane 3 and draw an arrow to AND-Join',
      es: 'Haz clic en "Forjar espada" en Carril 3 y traza una flecha hacia la compuerta AND-Join',
      fr: 'Cliquez sur "Forger l\'épée" dans le couloir 3 et tracez une flèche vers AND-Join',
      it: 'Fai clic su "Forgia spada" nella corsia 3 e traccia una freccia verso AND-Join',
      pt: 'Clique em "Forjar espada" na raia 3 e puxe uma seta para o AND-Join',
      nl: 'Klik op "Zwaard smeden" in lane 3 en trek een pijl naar de AND-Join',
      pl: 'Kliknij "Wykuj miecz" w torze 3 i poprowadź strzałkę do AND-Join',
      ru: 'Нажмите "Выковать меч" на дорожке 3 и проведите стрелку к AND-Join',
      zh: '点击泳道 3 中的"锻造魔法宝剑"服务任务，拉出箭头连接到右侧的 AND-Join 网关',
      ja: 'レーン 3 の「魔法の剣を鍛造」をクリックし、AND結合ゲートウェイへ矢印を引きます'
    }
  },
  c3_and_split: {
    text: {
      de: 'AND-Split auslösen (Klick auf AND-Gateway ➕)',
      en: 'Trigger AND-Split (Click AND Gateway ➕)',
      es: 'Activar portal AND-Split (clic en compuerta AND ➕)',
      fr: 'Déclencher AND-Split (clic sur la passerelle AND ➕)',
      it: 'Attiva AND-Split (clic sul gateway AND ➕)',
      pt: 'Acionar AND-Split (clique no gateway AND ➕)',
      nl: 'AND-Split activeren (klik op AND-gateway ➕)',
      pl: 'Uruchom AND-Split (kliknij bramkę AND ➕)',
      ru: 'Запустить AND-Split (клик по шлюзу AND ➕)',
      zh: '触发 AND 并行分流（点击 AND 网关 ➕）',
      ja: 'AND分岐を発動（ANDゲートウェイ ➕ をクリック）'
    },
    hint: {
      de: 'Erzeugt 2 Tokens gleichzeitig in Lane 1 und Lane 3',
      en: 'Spawns 2 tokens concurrently in Lane 1 and Lane 3',
      es: 'Genera 2 tokens simultáneamente en Carril 1 y Carril 3',
      fr: 'Génère 2 tokens simultanément dans les couloirs 1 et 3',
      it: 'Genera 2 token contemporaneamente nella corsia 1 e nella corsia 3',
      pt: 'Gera 2 tokens concorrentemente na raia 1 e na raia 3',
      nl: 'Genereert 2 tokens gelijktijdig in lane 1 en lane 3',
      pl: 'Generuje 2 tokeny równolegle w torze 1 i torze 3',
      ru: 'Создает 2 токена одновременно на дорожке 1 и дорожке 3',
      zh: '一个输入令牌将被克隆为 2 个完全独立的并行令牌，分别流向泳道 1 和泳道 3',
      ja: 'レーン 1 とレーン 3 に2つのトークンが同時に生成されます'
    }
  },
  c3_spell_task: {
    text: {
      de: 'Schutzzauber in Lane 1 wirken (🛡️ Business Rule)',
      en: 'Cast Shield Spell in Lane 1 (🛡️ Business Rule)',
      es: 'Lanzar hechizo protector en Carril 1 (🛡️ Regla de negocio)',
      fr: 'Lancer un sort dans le couloir 1 (🛡️ Règle métier)',
      it: 'Lancia incantesimo nella corsia 1 (🛡️ Regola aziendale)',
      pt: 'Lançar feitiço na raia 1 (🛡️ Regra de negócio)',
      nl: 'Beschermspreuk uitvoeren in lane 1 (🛡️ Business Rule)',
      pl: 'Rzuć czar w torze 1 (🛡️ Reguła biznesowa)',
      ru: 'Наложить заклинание на дорожке 1 (🛡️ Бизнес-правило)',
      zh: '在泳道 1 中施放护盾法术（🛡️ 业务规则任务）',
      ja: 'レーン 1 で防御魔法を詠唱（🛡️ ビジネスルール）'
    },
    hint: {
      de: 'Business Rule Tasks automatisieren Entscheidungslogiken',
      en: 'Business rule tasks automate decision logic',
      es: 'Las tareas de regla de negocio automatizan la lógica de decisión',
      fr: 'Les tâches de règles métier automatisent la logique de décision',
      it: 'Le attività di regole aziendali automatizzano la logica decisionale',
      pt: 'Tarefas de regras de negócio automatizam lógicas de decisão',
      nl: 'Business Rule Tasks automatiseren besluitvormingslogica',
      pl: 'Zadania reguł biznesowych automatyzują logikę decyzji',
      ru: 'Задачи бизнес-правил автоматизируют логику принятия решений',
      zh: '业务规则任务专门用于执行自动化规则表（如 DMN）或判定逻辑',
      ja: 'ビジネスルールタスクは判定ロジックを自動化します'
    }
  },
  c3_and_join: {
    text: {
      de: 'Synchronisation am AND-Join beobachten',
      en: 'Observe Synchronization at AND-Join',
      es: 'Observar sincronización en la compuerta AND-Join',
      fr: 'Observer la synchronisation sur AND-Join',
      it: 'Osserva la sincronizzazione su AND-Join',
      pt: 'Observar a sincronização no AND-Join',
      nl: 'Synchronisatie bekijken bij de AND-Join',
      pl: 'Obserwuj synchronizację na bramce AND-Join',
      ru: 'Наблюдать за синхронизацией на шлюзе AND-Join',
      zh: '在 AND 汇合网关处观察多流同步汇聚',
      ja: 'AND結合でのトークン同期を観察'
    },
    hint: {
      de: 'Das Join-Gateway wartet, bis BEIDE parallelen Pfade eingetroffen sind',
      en: 'The join gateway waits until BOTH paths have completed',
      es: 'La compuerta de unión espera hasta que AMBAS rutas hayan finalizado',
      fr: 'La passerelle de jointure attend que les DEUX chemins soient terminés',
      it: 'Il gateway di unione attende che ENTRAMBI i percorsi siano completati',
      pt: 'O gateway de junção aguarda até que AMBOS os caminhos estejam concluídos',
      nl: 'De join-gateway wacht tot BEIDE parallelle paden zijn gearriveerd',
      pl: 'Bramka łącząca czeka, aż OBIE ścieżki zostaną ukończone',
      ru: 'Объединяющий шлюз ждет прибытия токенов из ОБОИХ параллельных путей',
      zh: '汇聚网关会锁定先到的令牌，直到两个分支全部执行完毕才合并放行',
      ja: '合流ゲートウェイは、両方の並行ルートが完了するまで待機します'
    }
  },
  c4_timer_rest: {
    text: {
      de: '3s Pause am Lagerfeuer einlegen (⏱️ Timer-Event)',
      en: 'Rest 3s at campfire (⏱️ Timer Event)',
      es: 'Descansar 3s en la hoguera (⏱️ Evento temporizador)',
      fr: 'Pause de 3s au feu de camp (⏱️ Minuterie)',
      it: 'Pausa di 3s al falò (⏱️ Evento timer)',
      pt: 'Pausa de 3s na fogueira (⏱️ Evento temporizador)',
      nl: '3s pauze bij het kampvuur (⏱️ Timer-event)',
      pl: '3s odpoczynku przy ognisku (⏱️ Zdarzenie czasowe)',
      ru: '3 сек. перерыв у костра (⏱️ Событие-таймер)',
      zh: '在篝火旁停留 3 秒（⏱️ 定时器中间事件）',
      ja: '焚き火で3秒間の休息（⏱️ タイマーイベント）'
    },
    hint: {
      de: 'Zwischenereignisse vom Typ Timer pausieren die Simulation automatisch',
      en: 'Intermediate timer events pause execution automatically',
      es: 'Los eventos intermedios de temporizador pausan la simulación automáticamente',
      fr: 'Les événements intermédiaires de minuterie mettent la simulation en pause automatiquement',
      it: 'Gli eventi intermedi di tipo timer mettono automaticamente in pausa la simulazione',
      pt: 'Eventos intermediários de temporizador pausam a execução automaticamente',
      nl: 'Intermediaire timer-events pauzeren de simulatie automatisch',
      pl: 'Pośrednie zdarzenia czasowe automatycznie zatrzymują symulację',
      ru: 'Промежуточные события-таймеры автоматически приостанавливают поток процесса',
      zh: '中间捕获型定时器事件会依照预定时间（3秒）自动阻断并暂停令牌推进',
      ja: 'タイマー中間イベントはシミュレーションを自動的に一時停止させます'
    }
  },
  c4_model_datastore: {
    text: {
      de: '🔨 Bauauftrag: Platziere einen Datenspeicher (🛢️ Tresor-Symbol) beim Gewölbe',
      en: '🔨 Build Task: Place a Data Store (🛢️ Vault Storage) near vault',
      es: '🔨 Tarea de construcción: Colocar almacén de datos (🛢️ Bóveda) junto a la cámara',
      fr: '🔨 Tâche de modélisation : Placer un magasin de données (🛢️ Coffre) près de la chambre',
      it: '🔨 Attività di modellazione: Posiziona archivio dati (🛢️ Caveau) vicino al caveau',
      pt: '🔨 Tarefa de modelagem: Posicionar armazenamento de dados (🛢️ Cofre) junto à câmara',
      nl: '🔨 Bouwopdracht: Plaats een gegevensopslag (🛢️ Kluis) bij de kluis',
      pl: '🔨 Zadanie modelowania: Umieść magazyn danych (🛢️ Skarbiec) przy skarbcu',
      ru: '🔨 Задача моделирования: Разместить хранилище данных (🛢️ Сейф) у сокровищницы',
      zh: '🔨 建模任务：在宝藏库旁放置一个数据存储节点（🛢️ 圆柱体图标）',
      ja: '🔨 モデリング任務：宝物庫の近くにデータストア（🛢️ 金庫アイコン）を配置'
    },
    hint: {
      de: 'Wähle das Zylinder-Symbol (Datenspeicher 🛢️) in der linken Palette und platziere es beim Gewölbe',
      en: 'Select the cylinder icon (Data Store 🛢️) in the left palette and place it near the vault',
      es: 'Selecciona el icono de cilindro (Almacén de datos 🛢️) en la paleta izquierda y colócalo junto a la cámara',
      fr: 'Sélectionnez l\'icône cylindrique (Magasin de données 🛢️) dans la palette gauche et placez-la près du coffre',
      it: 'Seleziona l\'icona del cilindro nella tavolozza a sinistra e posizionala vicino al caveau',
      pt: 'Selecione o ícone de cilindro na paleta esquerda e posicione-o próximo à câmara',
      nl: 'Selecteer het cilinder-icoon in het linker palet en plaats het bij de schatkamer',
      pl: 'Wybierz ikonę cylindra w lewej palecie i umieść ją obok skarbca',
      ru: 'Выберите значок цилиндра (Хранилище данных 🛢️) на левой панели и поместите рядом со склепом',
      zh: '在左侧工具栏中找到代表持久存储的圆柱形图标（Data Store 🛢️），放置在宝库附近',
      ja: '左パレットの円柱アイコン（データストア 🛢️）を選択し、宝物庫の近くに配置します'
    }
  },
  c4_enter_vault: {
    text: {
      de: 'Subprozess "Schatzkammer" betreten & Relikt bergen (📦)',
      en: 'Enter "Vault" Subprocess & loot relic (📦)',
      es: 'Entrar al subproceso "Cámara acorazada" y saquear reliquia (📦)',
      fr: 'Entrer dans le sous-processus "Chambre forte" et piller la relique (📦)',
      it: 'Entra nel sottoprocesso "Caveau del tesoro" e recupera la reliquia (📦)',
      pt: 'Entrar no subprocesso "Câmara do tesouro" e resgatar relíquia (📦)',
      nl: 'Subproces "Schatkamer" betreden & relict bemachtigen (📦)',
      pl: 'Wejdź do podprocesu "Skarbiec" i zdobądź relikt (📦)',
      ru: 'Войти в подпроцесс "Сокровищница" и добыть реликвию (📦)',
      zh: '进入"宝藏库"嵌入式子流程并夺取传说圣物 (📦)',
      ja: 'サブプロセス「宝物庫」に突入し、レリックを回収 (📦)'
    },
    hint: {
      de: 'Klicke nacheinander auf die Aktivitäten im Subprozess',
      en: 'Click the activities sequentially inside the vault',
      es: 'Haz clic en las actividades secuencialmente dentro de la cámara acorazada',
      fr: 'Cliquez successivement sur les activités à l\'intérieur de la chambre',
      it: 'Fai clic sulle attività in sequenza all\'interno del caveau',
      pt: 'Clique nas atividades em sequência dentro da câmara',
      nl: 'Klik achtereenvolgens op de activiteiten in het subproces',
      pl: 'Klikaj kolejno aktywności wewnątrz podprocesu',
      ru: 'Нажимайте поочередно на задачи внутри подпроцесса сокровищницы',
      zh: '进入展开的子流程边框内，依次点击"撬开宝箱"与"夺取护身符"活动节点',
      ja: 'サブプロセス内部のアクティビティを順番にクリックして進めます'
    }
  },
  c5_model_data_assoc: {
    text: {
      de: '🔨 Bauauftrag: Verbinde "📄 Quest-Logbuch" mit der Urkunden-Aufgabe',
      en: '🔨 Build Task: Connect "📄 Quest Logbook" to Award Task',
      es: '🔨 Tarea de construcción: Conectar "📄 Cuaderno de misiones" con la tarea de certificación',
      fr: '🔨 Tâche de modélisation : Relier "📄 Journal de quête" à la tâche de certification',
      it: '🔨 Attività di modellazione: Collega "📄 Registro di bordo" all\'attività di certificazione',
      pt: '🔨 Tarefa de modelagem: Conectar "📄 Diário de bordo" à tarefa de certificação',
      nl: '🔨 Bouwopdracht: Verbind "📄 Quest-logboek" met de oorkonde-taak',
      pl: '🔨 Zadanie modelowania: Połącz "📄 Dziennik zadań" z zadaniem nadania dyplomu',
      ru: '🔨 Задача моделирования: Соединить "📄 Журнал заданий" с задачей награждения',
      zh: '🔨 建模任务：使用数据关联将"📄 任务日志"与宗师授衔任务相连接',
      ja: '🔨 モデリング任務：「📄 クエスト日誌」を認定タスクに接続'
    },
    hint: {
      de: 'Klicke auf das Datenobjekt und ziehe eine Datenassoziation zur Urkunden-Aufgabe',
      en: 'Click data object and draw data association to award task',
      es: 'Haz clic en el objeto de datos y traza una asociación de datos hacia la tarea de certificación',
      fr: 'Cliquez sur l\'objet de données et tracez une association de données vers la tâche',
      it: 'Fai clic sull\'oggetto dati e traccia un\'associazione di dati verso l\'attività',
      pt: 'Clique no objeto de dados e puxe uma associação de dados para a tarefa',
      nl: 'Klik op het data-object en trek een data-associatie naar de taak',
      pl: 'Kliknij obiekt danych i poprowadź asocjację danych do zadania',
      ru: 'Нажмите на объект данных и протяните пунктирную ассоциацию к задаче награждения',
      zh: '选中代表数据对象的文件图标，拉出虚线数据关联箭头连接到公会授衔任务',
      ja: 'データオブジェクトをクリックし、認定タスクへデータ関連付けの破線を引きます'
    }
  },
  c5_guild_audit: {
    text: {
      de: 'Gilden-Audit in Lane 4 durchführen (⚙️ Prüfung)',
      en: 'Conduct Guild Audit in Lane 4 (⚙️ Audit Task)',
      es: 'Realizar auditoría del gremio en Carril 4 (⚙️ Tarea de auditoría)',
      fr: 'Effectuer l\'audit de la guilde dans le couloir 4 (⚙️ Tâche d\'audit)',
      it: 'Esegui audit della gilda nella corsia 4 (⚙️ Attività di audit)',
      pt: 'Realizar auditoria da guilda na raia 4 (⚙️ Tarefa de auditoria)',
      nl: 'Gilde-audit uitvoeren in lane 4 (⚙️ Audit-taak)',
      pl: 'Przeprowadź audyt gildii w torze 4 (⚙️ Zadanie audytu)',
      ru: 'Провести аудит гильдии на дорожке 4 (⚙️ Задача аудита)',
      zh: '在泳道 4 中完成公会合规审计（⚙️ 流程审核任务）',
      ja: 'レーン 4 でギルド監査を実施（⚙️ 監査タスク）'
    },
    hint: {
      de: 'Die Gilde prüft Konformität und Qualität des Gesamtmodells',
      en: 'The Guild verifies compliance and quality of the model',
      es: 'El gremio verifica la conformidad y la calidad de todo el modelo',
      fr: 'La guilde vérifie la conformité et la qualité de l\'ensemble du modèle',
      it: 'La gilda verifica la conformità e la qualità del modello complessivo',
      pt: 'A guilda verifica a conformidade e a qualidade do modelo geral',
      nl: 'Het gilde controleert de conformiteit en kwaliteit van het totale model',
      pl: 'Gildia weryfikuje zgodność oraz jakość całego modelu',
      ru: 'Гильдия проверяет соответствие стандартам и безупречное качество модели',
      zh: '公会质检专员在泳道 4 针对全流程执行 ISO 19510 规范合规审计',
      ja: 'ギルドはプロセスモデル全体の整合性と品質基準を厳格に審査します'
    }
  },
  c5_award_master: {
    text: {
      de: 'Großmeister-Titel empfangen (👑 Task_AwardMaster)',
      en: 'Receive Master Title (👑 Task_AwardMaster)',
      es: 'Recibir título de gran maestro (👑 Tarea de distinción)',
      fr: 'Recevoir le titre de grand maître (👑 Tâche de distinction)',
      it: 'Ricevi titolo di gran maestro (👑 Attività di distinzione)',
      pt: 'Receber título de grão-mestre (👑 Tarefa de distinção)',
      nl: 'Grootmeester-titel ontvangen (👑 Oorkonde-taak)',
      pl: 'Odbierz tytuł arcymistrza (👑 Zadanie wyróżnienia)',
      ru: 'Получить титул гроссмейстера (👑 Задача награждения)',
      zh: '荣膺流程宗师崇高称号（👑 授衔活动）',
      ja: 'グランドマスターの称号を授与（👑 授与タスク）'
    },
    hint: {
      de: 'Klicke auf die Urkunden-Aufgabe, um den Weg zur Architekten-Prüfung freizuschalten',
      en: 'Click the award task to unlock the path to the Architect Exam',
      es: 'Haz clic en la tarea de distinción para desbloquear el examen del arquitecto',
      fr: 'Cliquez sur la tâche de distinction pour débloquer l\'examen de l\'architecte',
      it: 'Fai clic sull\'attività di distinzione per sbloccare l\'esame dell\'architetto',
      pt: 'Clique na tarefa de distinção para desbloquear o exame do arquiteto',
      nl: 'Klik op de oorkonde-taak om de weg naar het examen vrij te spelen',
      pl: 'Kliknij zadanie wyróżnienia, aby odblokować egzamin architekta',
      ru: 'Нажмите на задачу награждения, чтобы открыть доступ к экзамену архитектора',
      zh: '在令牌模拟中点击授衔任务，开启通往第 6 章顶级架构师大考的大门',
      ja: '認定タスクをクリックして、最終章アーキテクト試験への道を解放します'
    }
  },
  c6_plan_masterpiece: {
    text: {
      de: 'Meisterwerk in der Helden-Lane planen (👤 Task)',
      en: 'Plan Masterpiece in Hero Lane (👤 Task)',
      es: 'Planificar obra maestra en el carril del héroe (👤 Tarea)',
      fr: 'Planifier le chef-d\'œuvre dans le couloir du héros (👤 Tâche)',
      it: 'Pianifica capolavoro nella corsia dell\'eroe (👤 Attività)',
      pt: 'Planejar obra-prima na raia do herói (👤 Tarefa)',
      nl: 'Meesterwerk plannen in de Helden-lane (👤 Taak)',
      pl: 'Zaplanuj arcydzieło w torze bohatera (👤 Zadanie)',
      ru: 'Спланировать шедевр на дорожке героя (👤 Задача)',
      zh: '在英雄泳道中策划终极杰作（👤 用户任务）',
      ja: '英雄レーンでマスターピースを計画（👤 タスク）'
    },
    hint: {
      de: 'Klicke auf "Meisterwerk planen" in Lane 1',
      en: 'Click "Plan Masterpiece" in Lane 1',
      es: 'Haz clic en "Planificar obra maestra" en Carril 1',
      fr: 'Cliquez sur "Planifier le chef-d\'œuvre" dans le couloir 1',
      it: 'Fai clic su "Pianifica capolavoro" nella corsia 1',
      pt: 'Clique em "Planejar obra-prima" na raia 1',
      nl: 'Klik op "Meesterwerk plannen" in lane 1',
      pl: 'Kliknij "Zaplanuj arcydzieło" w torze 1',
      ru: 'Нажмите "Спланировать шедевр" на дорожке 1',
      zh: '在令牌模拟中点击泳道 1 顶端的"策划终极杰作"用户任务',
      ja: 'レーン 1 の「マスターピースの計画」をクリックします'
    }
  },
  c6_create_workshop_task: {
    text: {
      de: '🔨 Bauauftrag 1: Erstelle eine neue Aufgabe in der Werkstatt (Lane 3)',
      en: '🔨 Build Task 1: Create a new Task in Workshop (Lane 3)',
      es: '🔨 Tarea de construcción 1: Crear una nueva tarea en el taller (Carril 3)',
      fr: '🔨 Tâche de modélisation 1 : Créer une tâche dans l\'atelier (Couloir 3)',
      it: '🔨 Attività di modellazione 1: Crea un\'attività nell\'officina (Corsia 3)',
      pt: '🔨 Tarefa de modelagem 1: Criar uma nova tarefa na oficina (Raia 3)',
      nl: '🔨 Bouwopdracht 1: Maak een nieuwe taak in de werkplaats (Lane 3)',
      pl: '🔨 Zadanie modelowania 1: Utwórz nowe zadanie w warsztacie (Tor 3)',
      ru: '🔨 Задача моделирования 1: Создать новую задачу в мастерской (Дорожка 3)',
      zh: '🔨 建模任务 1：在工坊泳道（泳道 3）中创建一项全新任务',
      ja: '🔨 モデリング任務 1：工房（レーン 3）に新しいタスクを作成'
    },
    hint: {
      de: 'Ziehe eine Aufgabe aus der Palette in Lane 3 (Zauberwerkstatt) bei x > 3200',
      en: 'Drag a task from palette into Lane 3 (Workshop) at x > 3200',
      es: 'Arrastra una tarea desde la paleta hasta Carril 3 (Taller) en x > 3200',
      fr: 'Glissez une tâche de la palette vers le couloir 3 (Atelier) à x > 3200',
      it: 'Trascina un\'attività dalla tavolozza alla corsia 3 (Officina) a x > 3200',
      pt: 'Arraste uma tarefa da paleta para a raia 3 (Oficina) em x > 3200',
      nl: 'Sleep een taak uit het palet naar lane 3 (Werkplaats) bij x > 3200',
      pl: 'Przeciągnij zadanie z palety do toru 3 (Warsztat) w pozycji x > 3200',
      ru: 'Перетащите задачу из палитры на дорожку 3 (Мастерская) в координату x > 3200',
      zh: '从左侧工具板拖出一个新任务矩形，放置在泳道 3（魔法工坊）右侧（x > 3200）',
      ja: 'パレットからタスクをドラッグして、レーン 3（工房、x > 3200 付近）に配置します'
    }
  },
  c6_connect_cross_lane1: {
    text: {
      de: '🔨 Bauauftrag 2: Ziehe einen Pfeil von Lane 1 nach Lane 3 (Cross-Lane)',
      en: '🔨 Build Task 2: Draw an arrow from Lane 1 to Lane 3 (Cross-Lane)',
      es: '🔨 Tarea de construcción 2: Trazar una flecha de Carril 1 a Carril 3 (Entre carriles)',
      fr: '🔨 Tâche de modélisation 2 : Tracer une flèche du couloir 1 au couloir 3 (Inter-couloirs)',
      it: '🔨 Attività di modellazione 2: Traccia una freccia dalla corsia 1 alla corsia 3 (Tra corsie)',
      pt: '🔨 Tarefa de modelagem 2: Desenhar uma seta da raia 1 para a raia 3 (Entre raias)',
      nl: '🔨 Bouwopdracht 2: Trek een pijl van lane 1 naar lane 3 (Cross-Lane)',
      pl: '🔨 Zadanie modelowania 2: Poprowadź strzałkę z toru 1 do toru 3 (Między torami)',
      ru: '🔨 Задача моделирования 2: Провести стрелку с дорожки 1 на дорожку 3 (Междорожечный поток)',
      zh: '🔨 建模任务 2：拉出从泳道 1 跨越至泳道 3 的顺序流连线（跨泳道流程）',
      ja: '🔨 モデリング任務 2：レーン 1 からレーン 3 への矢印を接続（レーン間フロー）'
    },
    hint: {
      de: 'Verbinde "Meisterwerk planen" (Lane 1) mit deiner neuen Werkstatt-Aufgabe (Lane 3)',
      en: 'Connect "Plan Masterpiece" (Lane 1) to your new workshop task (Lane 3)',
      es: 'Conecta "Planificar obra maestra" (Carril 1) con tu nueva tarea del taller (Carril 3)',
      fr: 'Reliez "Planifier le chef-d\'œuvre" (Couloir 1) à votre nouvelle tâche d\'atelier (Couloir 3)',
      it: 'Collega "Pianifica capolavoro" (Corsia 1) alla nuova attività dell\'officina (Corsia 3)',
      pt: 'Conecte "Planejar obra-prima" (Raia 1) à sua nova tarefa da oficina (Raia 3)',
      nl: 'Verbind "Meesterwerk plannen" (Lane 1) met je nieuwe taak (Lane 3)',
      pl: 'Połącz "Zaplanuj arcydzieło" (Tor 1) z nowym zadaniem warsztatowym (Tor 3)',
      ru: 'Соедините "Спланировать шедевр" (Дорожка 1) с созданной задачей мастерской (Дорожка 3)',
      zh: '从泳道 1 中的"策划终极杰作"拉出顺序流控制箭头，跨线连接至你在泳道 3 新建的任务',
      ja: 'レーン 1 の「マスターピースの計画」からレーン 3 の新しい工房タスクへ矢印を接続します'
    }
  },
  c6_connect_cross_lane2: {
    text: {
      de: '🔨 Bauauftrag 3: Verbinde Werkstatt-Aufgabe mit "Finale Bauabnahme" (Lane 4)',
      en: '🔨 Build Task 3: Connect Workshop Task to "Final Audit" (Lane 4)',
      es: '🔨 Tarea de construcción 3: Conectar tarea del taller con "Inspección final" (Carril 4)',
      fr: '🔨 Tâche de modélisation 3 : Relier la tâche d\'atelier à la "Réception finale" (Couloir 4)',
      it: '🔨 Attività di modellazione 3: Collega l\'attività dell\'officina al "Collaudo finale" (Corsia 4)',
      pt: '🔨 Tarefa de modelagem 3: Conectar a tarefa da oficina à "Inspeção final" (Raia 4)',
      nl: '🔨 Bouwopdracht 3: Verbind werkplaatstaak met "Finale oplevering" (Lane 4)',
      pl: '🔨 Zadanie modelowania 3: Połącz zadanie warsztatowe z "Odbiorem końcowym" (Tor 4)',
      ru: '🔨 Задача моделирования 3: Соединить задачу мастерской с "Финальной приемкой" (Дорожка 4)',
      zh: '🔨 建模任务 3：将工坊任务与泳道 4 中的"最终竣工验收"任务相连',
      ja: '🔨 モデリング任務 3：工房タスクを「最終検収」（レーン 4）に接続'
    },
    hint: {
      de: 'Ziehe einen Pfeil von deiner Werkstatt-Aufgabe zu "Finale Bauabnahme" in der Gilden-Lane',
      en: 'Draw an arrow from your workshop task to "Final Audit" in Guild Lane',
      es: 'Traza una flecha desde la tarea del taller hasta "Inspección final" en el carril del gremio',
      fr: 'Tracez une flèche de votre tâche d\'atelier vers la "Réception finale" dans le couloir de la guilde',
      it: 'Traccia una freccia dall\'attività dell\'officina al "Collaudo finale" nella corsia della gilda',
      pt: 'Desenhe uma seta da tarefa da oficina para a "Inspeção final" na raia da guilda',
      nl: 'Trek een pijl van je taak naar "Finale oplevering" in de Gilde-lane',
      pl: 'Poprowadź strzałkę ze swojego zadania do "Odbioru końcowego" w torze gildii',
      ru: 'Протяните стрелку от задачи мастерской к задаче "Финальная приемка" на дорожке гильдии',
      zh: '从工坊任务向下拉出一条顺序流箭头，连接到公会泳道（Lane 4）中的"最终竣工验收"任务',
      ja: '工房タスクからギルドレーンの「最終検収」タスクへ矢印を接続します'
    }
  },
  c6_finish_grandmaster: {
    text: {
      de: 'Finale Bauabnahme durchführen & Großmeister-Status krönen (🏆)',
      en: 'Complete Final Audit & achieve Grandmaster Architect Status (🏆)',
      es: 'Realizar inspección final y coronar el estatus de Gran Maestro (🏆)',
      fr: 'Effectuer la réception finale & couronner le statut de Grand Maître (🏆)',
      it: 'Esegui collaudo finale e corona lo status di Gran Maestro (🏆)',
      pt: 'Realizar inspeção final e coroar o status de Grão-Mestre (🏆)',
      nl: 'Finale oplevering uitvoeren & Grootmeester-status bekronen (🏆)',
      pl: 'Przeprowadź odbiór końcowy i zdobądź status Arcymistrza Architektury (🏆)',
      ru: 'Провести финальную приемку и получить статус Гроссмейстера-Архитектора (🏆)',
      zh: '执行最终竣工验收，登顶 BPMN 首席架构大师巅峰 (🏆)',
      ja: '最終検収を実施し、グランドマスター・アーキテクトの頂点へ (🏆)'
    },
    hint: {
      de: 'Klicke im Token Game auf "Finale Bauabnahme" und das Abschluss-Event',
      en: 'Click "Final Audit" and the end event in token simulation',
      es: 'Haz clic en "Inspección final" y en el evento de fin en la simulación',
      fr: 'Cliquez sur "Réception finale" et sur l\'événement de fin dans la simulation',
      it: 'Fai clic su "Collaudo finale" e sull\'evento finale nella simulazione',
      pt: 'Clique em "Inspeção final" e no evento final na simulação',
      nl: 'Klik op "Finale oplevering" en het eind-event in het Token Game',
      pl: 'Kliknij "Odbiór końcowy" i zdarzenie końcowe w symulacji',
      ru: 'Нажмите "Финальная приемка" и завершающее событие в Токен-игре',
      zh: '在激活的模拟游戏中依次点击"最终竣工验收"任务和庄严的宗师大成结束事件',
      ja: 'トークンシミュレーションで「最終検収」と終了イベントをクリックします'
    }
  }
};

export function getSubtaskInfo(subtaskId, lang) {
  const conf = SUBTASK_I18N[subtaskId];
  if (!conf) return null;
  const resolved = resolveQuestLang(lang);
  const text = conf.text[resolved] || conf.text[resolved.split('_')[0]] || conf.text.en || conf.text.de || '';
  const hint = conf.hint[resolved] || conf.hint[resolved.split('_')[0]] || conf.hint.en || conf.hint.de || '';
  return { text, hint };
}


/* ==========================================================================
   HONOR GRADES & ADVANCEMENT (Multilingual)
   ========================================================================== */

export const HONOR_DATA = {
  tier5: {
    tier: 5,
    latin: 'EGREGIA CUM LAUDE',
    badgeColor: '#a855f7',
    sealType: 'titan',
    sealGradId: 'titanGrad',
    sealBorder: '#581c87',
    bannerBg: '#faf5ff',
    bannerBorder: '#c084fc',
    bannerText: '#581c87',
    shortLabel: 'Egregia Cum Laude',
    translation: {
      de: 'Höchste Würde • Vollendete Meisterschaft',
      en: 'Highest Distinction • Utmost Mastery',
      es: 'Máxima distinción • Maestría consumada',
      fr: 'Plus haute distinction • Maîtrise suprême',
      it: 'Massima distinzione • Maestria perfetta',
      pt: 'Distinção máxima • Maestria consumada',
      nl: 'Hoogste waardigheid • Volmaakt meesterschap',
      pl: 'Najwyższe wyróżnienie • Pełne mistrzostwo',
      ru: 'Высшее отличие • Абсолютное мастерство',
      zh: '最高荣誉 • 登峰造极',
      ja: '最高栄誉 • 完全無欠の熟練'
    },
    guildTitle: {
      de: 'Großmeister-Titan & Hüter des BPMN-Standards',
      en: 'Grandmaster Titan & Custodian of the Standard',
      es: 'Titán Gran Maestro y Custodio del Estándar',
      fr: 'Titan Grand Maître & Gardien du Standard',
      it: 'Titano Gran Maestro & Custode dello Standard',
      pt: 'Titã Grão-Mestre & Guardião do Padrão',
      nl: 'Grootmeester-Titaan & Hoeder van de Standaard',
      pl: 'Tytan Arcymistrz i Strażnik Standardu',
      ru: 'Гроссмейстер-Титан и Хранитель Стандарта',
      zh: '宗师级泰斗与 BPMN 规范守护者',
      ja: 'グランドマスター・タイタン＆BPMN標準の守護者'
    },
    summaryDedication: {
      de: (xp) => `Für vollendete Perfektion mit ${xp} von 2.000 XP: Beherrscht alle 6 Kapitel der 4-Lane-Architektur sowie 100% aller Linter-Governance-Herausforderungen nach ISO 19510.`,
      en: (xp) => `For supreme perfection with ${xp} of 2,000 XP: Mastered all 6 chapters of 4-lane architecture and 100% of all linter governance challenges compliant with ISO 19510.`,
      es: (xp) => `Por la perfección absoluta con ${xp} de 2.000 XP: Domina los 6 capítulos de la arquitectura de 4 carriles y el 100% de los desafíos de gobernanza del linter según la norma ISO 19510.`,
      fr: (xp) => `Pour une perfection suprême avec ${xp} sur 2 000 XP : Maîtrise les 6 chapitres de l'architecture à 4 couloirs et 100% des défis de gouvernance du linter selon l'ISO 19510.`,
      it: (xp) => `Per la suprema perfezione con ${xp} su 2.000 XP: Padroneggia tutti i 6 capitoli dell'architettura a 4 corsie e il 100% delle sfide di governance del linter secondo la norma ISO 19510.`,
      pt: (xp) => `Pela suprema perfeição com ${xp} de 2.000 XP: Domina todos os 6 capítulos da arquitetura de 4 raias e 100% dos desafios de governança do linter em conformidade com a ISO 19510.`,
      nl: (xp) => `Voor volmaakte perfectie met ${xp} van 2.000 XP: Beheerst alle 6 hoofdstukken van de 4-lane architectuur en 100% van de linter-governance uitdagingen conform ISO 19510.`,
      pl: (xp) => `Za najwyższą doskonałość z ${xp} na 2000 XP: Opanowane wszystkie 6 rozdziałów architektury 4 torów oraz 100% wyzwań nadzoru lintera zgodnie z normą ISO 19510.`,
      ru: (xp) => `За безупречное мастерство с результатом ${xp} из 2000 XP: Освоены все 6 глав 4-дорожечной архитектуры и 100% задач контроля качества линтера по стандарту ISO 19510.`,
      zh: (xp) => `以 ${xp} / 2000 XP 的卓越成就：精通 4 泳道架构全部 6 个核心章节，并通过 ISO 19510 规范下的 100% Linter 治理挑战。`,
      ja: (xp) => `2,000 XP中 ${xp} XP を獲得した卓越した熟練：4レーンアーキテクチャの全6章をマスターし、ISO 19510に準拠したリンターガバナンス課題を100%達成。`
    }
  },
  tier4: {
    tier: 4,
    latin: 'MAGNA CUM LAUDE',
    badgeColor: '#b38728',
    sealType: 'gold',
    sealGradId: 'goldGrad',
    sealBorder: '#aa771c',
    bannerBg: '#fffbeb',
    bannerBorder: '#fde68a',
    bannerText: '#92400e',
    shortLabel: 'Magna Cum Laude',
    translation: {
      de: 'Mit großem Lob • Meister-Architekt',
      en: 'With Great Praise • Master Architect',
      es: 'Con gran elogio • Arquitecto Maestro',
      fr: 'Avec grande distinction • Architecte Maître',
      it: 'Con grande lode • Architetto Maestro',
      pt: 'Com grande louvor • Arquiteto Mestre',
      nl: 'Met veel lof • Meester-Architect',
      pl: 'Z wielką pochwałą • Mistrz Architektury',
      ru: 'С большим отличием • Мастер-Архитектор',
      zh: '优等赞誉 • 架构大师',
      ja: '最優秀賞 • マスターアーキテクト'
    },
    guildTitle: {
      de: 'Meister-Architekt & Senior Prozess-Stratege',
      en: 'Master Architect & Senior Process Strategist',
      es: 'Arquitecto Maestro y Estratega Senior de Procesos',
      fr: 'Architecte Maître & Stratège Senior de Processus',
      it: 'Architetto Maestro & Senior Process Strategist',
      pt: 'Arquiteto Mestre & Estrategista Sênior de Processos',
      nl: 'Meester-Architect & Senior Processtrateeg',
      pl: 'Mistrz Architektury i Starszy Strateg Procesów',
      ru: 'Мастер-Архитектор и Ведущий Стратег Процессов',
      zh: '首席流程架构师与战略设计师',
      ja: 'マスターアーキテクト＆シニアプロセスストラテジスト'
    },
    summaryDedication: {
      de: (xp) => `In Anerkennung exzellenter Modellierungs-Governance mit ${xp} XP: Weit überdurchschnittliche Beherrschung von Datenassoziationen, Fehlerbehandlung und kollaborativer Pools.`,
      en: (xp) => `In recognition of excellent modeling governance with ${xp} XP: Far above-average mastery of data associations, boundary events, and collaborative pools.`,
      es: (xp) => `En reconocimiento a la excelente gobernanza con ${xp} XP: Dominio muy superior de asociaciones de datos, eventos de límite y pools colaborativos.`,
      fr: (xp) => `En reconnaissance d'une excellente gouvernance avec ${xp} XP : Maîtrise bien supérieure des associations de données, événements frontières et pools collaboratifs.`,
      it: (xp) => `In riconoscimento dell'eccellente governance con ${xp} XP: Padronanza superiore di associazioni dati, eventi limite e pool collaborativi.`,
      pt: (xp) => `Em reconhecimento à excelente governança com ${xp} XP: Domínio avançado de associações de dados, eventos de fronteira e pools colaborativos.`,
      nl: (xp) => `Ter erkenning van uitmuntende governance met ${xp} XP: Bovengemiddelde beheersing van data-associaties, grensevents en samenwerkingspools.`,
      pl: (xp) => `W uznaniu doskonałego modelowania z ${xp} XP: Znaczące opanowanie asocjacji danych, zdarzeń krawędziowych i basenów współpracy.`,
      ru: (xp) => `В знак признания отличного моделирования с результатом ${xp} XP: Уверенное владение ассоциациями данных, граничными событиями и пулами.`,
      zh: (xp) => `鉴于其以 ${xp} XP 展现出的卓越治理能力：深刻掌握数据关联、边界事件与多方协同池架构。`,
      ja: (xp) => `${xp} XP を獲得した優秀なモデリングへの認定：データ関連付け、境界イベント、協調プールの高度な習熟を証明。`
    }
  },
  tier3: {
    tier: 3,
    latin: 'CUM LAUDE',
    badgeColor: '#cbd5e1',
    sealType: 'silver',
    sealGradId: 'silverGrad',
    sealBorder: '#64748b',
    bannerBg: '#f8fafc',
    bannerBorder: '#cbd5e1',
    bannerText: '#334155',
    shortLabel: 'Cum Laude',
    translation: {
      de: 'Mit Lob • Zertifizierter Modellierer',
      en: 'With Praise • Certified Modeler',
      es: 'Con elogio • Modelador Certificado',
      fr: 'Avec distinction • Modélisateur Certifié',
      it: 'Con lode • Modellatore Certificato',
      pt: 'Com louvor • Modelador Certificado',
      nl: 'Met lof • Gecertificeerd Modelleur',
      pl: 'Z pochwałą • Certyfikowany Architekt',
      ru: 'С отличием • Сертифицированный Моделист',
      zh: '优秀认证 • 注册流程建模师',
      ja: '優秀賞 • 認定モデラー'
    },
    guildTitle: {
      de: 'Zertifizierter Prozessmodellierer',
      en: 'Certified Process Modeler',
      es: 'Modelador de Procesos Certificado',
      fr: 'Modélisateur de Processus Certifié',
      it: 'Modellatore di Processi Certificato',
      pt: 'Modelador de Processos Certificado',
      nl: 'Gecertificeerd Procesmodelleur',
      pl: 'Certyfikowany Analityk Procesów',
      ru: 'Сертифицированный Архитектор Процессов',
      zh: '注册业务流程建模工程师',
      ja: '認定プロセスモデラー'
    },
    summaryDedication: {
      de: (xp) => `Erfolgreicher Nachweis praktischer BPMN-Fertigkeiten mit ${xp} XP: Beherrschung von Sequenzflüssen, XOR-Weichen und Lane-Strukturen.`,
      en: (xp) => `Successful demonstration of practical BPMN skills with ${xp} XP: Mastery of sequence flows, XOR gateways, and lane structures.`,
      es: (xp) => `Demostración exitosa de habilidades prácticas con ${xp} XP: Dominio de flujos de secuencia, compuertas XOR y estructuras de carriles.`,
      fr: (xp) => `Démonstration réussie des compétences pratiques avec ${xp} XP : Maîtrise des flux de séquence, aiguillages XOR et structures de couloirs.`,
      it: (xp) => `Dimostrazione di competenze pratiche con ${xp} XP: Padronanza dei flussi di sequenza, gateway XOR e strutture a corsie.`,
      pt: (xp) => `Demonstração bem-sucedida de habilidades práticas com ${xp} XP: Domínio de fluxos de sequência, gateways XOR e estruturas de raias.`,
      nl: (xp) => `Succesvol bewijs van praktische vaardigheden met ${xp} XP: Beheersing van sequentiestromen, XOR-gateways en lane-structuren.`,
      pl: (xp) => `Pomyślne wykazanie praktycznych umiejętności z ${xp} XP: Opanowanie przepływów sekwencji, bramek XOR i struktur torów.`,
      ru: (xp) => `Успешное подтверждение практических навыков с результатом ${xp} XP: Владение потоками управления, шлюзами XOR и дорожками.`,
      zh: (xp) => `以 ${xp} XP 成功通过实践考评：熟练运用顺序流、XOR 分支控制与清晰的泳道架构。`,
      ja: (xp) => `${xp} XP を獲得した実践的BPMNスキルの実証：シーケンスフロー、XORゲートウェイ、レーン構造の習熟を証明。`
    }
  },
  tier2: {
    tier: 2,
    latin: 'RITE',
    badgeColor: '#b45309',
    sealType: 'bronze',
    sealGradId: 'bronzeGrad',
    sealBorder: '#78350f',
    bannerBg: '#fffbeb',
    bannerBorder: '#fed7aa',
    bannerText: '#9a3412',
    shortLabel: 'Rite',
    translation: {
      de: 'Ordnungsgemäß • Prozess-Geselle',
      en: 'Duly Completed • Process Journeyman',
      es: 'Completado debidamente • Oficial de Procesos',
      fr: 'Convenablement accompli • Compagnon de Processus',
      it: 'Compiuto regolarmente • Ufficiale di Processo',
      pt: 'Devidamente concluído • Oficial de Processos',
      nl: 'Naar behoren voltooid • Procesgezel',
      pl: 'Zgodnie z wymogami • Czeladnik Procesowy',
      ru: 'Успешно завершено • Практик Процессов',
      zh: '合格结业 • 流程中级工匠',
      ja: '修了 • プロセスジャーニーマン'
    },
    guildTitle: {
      de: 'Prozess-Geselle',
      en: 'Process Journeyman',
      es: 'Oficial de Procesos',
      fr: 'Compagnon de Processus',
      it: 'Ufficiale di Processo',
      pt: 'Oficial de Processos',
      nl: 'Procesgezel',
      pl: 'Czeladnik Procesowy',
      ru: 'Практик Процессов',
      zh: '业务流程中级建模师',
      ja: 'プロセス実践士'
    },
    summaryDedication: {
      de: (xp) => `Solide Grundlagen der Prozessmodellierung mit ${xp} XP: Erfolgreiche Modellierung von Start-, Zwischen- und End-Ereignissen sowie ersten Gateways.`,
      en: (xp) => `Solid foundations of process modeling with ${xp} XP: Successful modeling of start, intermediate, and end events plus foundational gateways.`,
      es: (xp) => `Bases sólidas de modelado con ${xp} XP: Modelado exitoso de eventos iniciales, intermedios y finales junto con compuertas básicas.`,
      fr: (xp) => `Bases solides de modélisation avec ${xp} XP : Modélisation réussie des événements de début, intermédiaires et de fin ainsi que des passerelles de base.`,
      it: (xp) => `Solide basi di modellazione con ${xp} XP: Modellazione corretta di eventi iniziali, intermedi e finali, oltre ai gateway fondamentali.`,
      pt: (xp) => `Bases sólidas de modelagem com ${xp} XP: Modelagem bem-sucedida de eventos iniciais, intermediários e finais, além dos primeiros gateways.`,
      nl: (xp) => `Solide basiskennis van procesmodellering met ${xp} XP: Succesvol modelleren van start-, tussen- en eind-events en basisgateways.`,
      pl: (xp) => `Solidne podstawy modelowania procesów z ${xp} XP: Udane modelowanie zdarzeń początkowych, pośrednich i końcowych oraz podstawowych bramek.`,
      ru: (xp) => `Прочные основы моделирования с ${xp} XP: Успешное построение стартовых, промежуточных и конечных событий, а также базовых шлюзов.`,
      zh: (xp) => `具备坚实的建模基础并斩获 ${xp} XP：成功建模开始、中间与结束事件，并建立基础网关控制。`,
      ja: (xp) => `${xp} XP を獲得したプロセスモデリングの堅実な基礎：開始・中間・終了イベントおよび基本ゲートウェイの確実な習得を証明。`
    }
  },
  tier1: {
    tier: 1,
    latin: 'INCEPTOR',
    badgeColor: '#64748b',
    sealType: 'inceptor',
    sealGradId: 'inceptorGrad',
    sealBorder: '#475569',
    bannerBg: '#f8fafc',
    bannerBorder: '#cbd5e1',
    bannerText: '#334155',
    shortLabel: 'Inceptor',
    translation: {
      de: 'Novize • Auf dem Weg zur Meisterschaft',
      en: 'Initiate • On the Path to Mastery',
      es: 'Iniciado • En el camino a la maestría',
      fr: 'Initié • Sur la voie de la maîtrise',
      it: 'Iniziato • Verso la maestria',
      pt: 'Iniciado • A caminho da maestria',
      nl: 'Beginner • Op weg naar meesterschap',
      pl: 'Adept • Na drodze do mistrzostwa',
      ru: 'Новичок • На пути к мастерству',
      zh: '启蒙学者 • 迈向卓越之路',
      ja: '初級モデラー • 熟練への第一歩'
    },
    guildTitle: {
      de: 'Prozess-Novize',
      en: 'Process Novice',
      es: 'Novato de Procesos',
      fr: 'Novice de Processus',
      it: 'Novizio di Processo',
      pt: 'Novato de Processos',
      nl: 'Procesbeginner',
      pl: 'Nowicjusz Procesowy',
      ru: 'Начинающий Моделист',
      zh: '初级流程学者',
      ja: 'プロセス見習い'
    },
    summaryDedication: {
      de: (xp) => `Erste Schritte auf dem Weg zur BPMN-Meisterschaft mit ${xp} XP: Grundlegendes Verständnis für BPMN-Elemente und Sequenzabläufe erworben.`,
      en: (xp) => `First steps on the journey to BPMN mastery with ${xp} XP: Acquired fundamental understanding of BPMN elements and basic flows.`,
      es: (xp) => `Primeros pasos hacia la maestría BPMN con ${xp} XP: Comprensión fundamental adquirida de elementos y flujos básicos.`,
      fr: (xp) => `Premiers pas vers la maîtrise de BPMN avec ${xp} XP : Acquisition d'une compréhension fondamentale des éléments et des flux.`,
      it: (xp) => `Primi passi verso la maestria BPMN con ${xp} XP: Acquisita comprensione fondamentale degli elementi e dei flussi.`,
      pt: (xp) => `Primeiros passos rumo à maestria em BPMN com ${xp} XP: Compreensão fundamental adquirida sobre elementos e fluxos básicos.`,
      nl: (xp) => `Eerste stappen op weg naar BPMN-meesterschap met ${xp} XP: Basiskennis van BPMN-elementen en eenvoudige stromen verworven.`,
      pl: (xp) => `Pierwsze kroki na drodze do mistrzostwa BPMN z ${xp} XP: Zdobyto podstawowe zrozumienie elementów i sekwencji procesów.`,
      ru: (xp) => `Первые шаги на пути к мастерству BPMN с результатом ${xp} XP: Получены базовые знания элементов и простых потоков.`,
      zh: (xp) => `开启 BPMN 卓越之旅并获得 ${xp} XP：已掌握 BPMN 基本符号与标准控制流的直观概念。`,
      ja: (xp) => `${xp} XP を獲得したBPMN熟練への第一歩：BPMN要素と基本フローの基礎的な理解を習得。`
    }
  }
};

export function getHonorGrade(xp, lang = 'de') {
  const resolved = resolveQuestLang(lang);
  let tierKey = 'tier1';
  if (xp >= 1750) tierKey = 'tier5';
  else if (xp >= 1350) tierKey = 'tier4';
  else if (xp >= 900) tierKey = 'tier3';
  else if (xp >= 400) tierKey = 'tier2';

  const t = HONOR_DATA[tierKey];
  const langKey = t.translation[resolved] ? resolved : (resolved.split('_')[0] || 'en');
  const translation = t.translation[langKey] || t.translation.en || t.translation.de;
  const guildTitle = t.guildTitle[langKey] || t.guildTitle.en || t.guildTitle.de;
  const dedicationFn = t.summaryDedication[langKey] || t.summaryDedication.en || t.summaryDedication.de;
  const summaryDedication = typeof dedicationFn === 'function' ? dedicationFn(xp) : '';

  return {
    tier: t.tier,
    latin: t.latin,
    translation,
    guildTitle,
    shortLabel: t.shortLabel,
    badgeColor: t.badgeColor,
    sealType: t.sealType,
    sealGradId: t.sealGradId,
    sealBorder: t.sealBorder,
    bannerBg: t.bannerBg,
    bannerBorder: t.bannerBorder,
    bannerText: t.bannerText,
    summaryDedication
  };
}

export function getNextTierInfo(xp, lang) {
  const resolved = resolveQuestLang(lang);
  const honor = getHonorGrade(xp, lang);
  if (honor.tier === 1) {
    const diff = 400 - xp;
    const map = {
      de: `Noch ${diff} XP bis Cum Laude`,
      en: `${diff} XP to Cum Laude`,
      es: `Faltan ${diff} XP para Cum Laude`,
      fr: `Encore ${diff} XP jusqu'à Cum Laude`,
      it: `Mancano ${diff} XP a Cum Laude`,
      pt: `Faltam ${diff} XP para Cum Laude`,
      nl: `Nog ${diff} XP tot Cum Laude`,
      pl: `Jeszcze ${diff} XP do Cum Laude`,
      ru: `Еще ${diff} XP до Cum Laude`,
      zh: `距离 Cum Laude 还需 ${diff} XP`,
      ja: `Cum Laude まであと ${diff} XP`
    };
    return map[resolved] || map[resolved.split('_')[0]] || map.en || map.de;
  } else if (honor.tier === 2) {
    const diff = 800 - xp;
    const map = {
      de: `Noch ${diff} XP bis Magna Cum Laude`,
      en: `${diff} XP to Magna Cum Laude`,
      es: `Faltan ${diff} XP para Magna Cum Laude`,
      fr: `Encore ${diff} XP jusqu'à Magna Cum Laude`,
      it: `Mancano ${diff} XP a Magna Cum Laude`,
      pt: `Faltam ${diff} XP para Magna Cum Laude`,
      nl: `Nog ${diff} XP tot Magna Cum Laude`,
      pl: `Jeszcze ${diff} XP do Magna Cum Laude`,
      ru: `Еще ${diff} XP до Magna Cum Laude`,
      zh: `距离 Magna Cum Laude 还需 ${diff} XP`,
      ja: `Magna Cum Laude まであと ${diff} XP`
    };
    return map[resolved] || map[resolved.split('_')[0]] || map.en || map.de;
  } else if (honor.tier === 3) {
    const diff = 1300 - xp;
    const map = {
      de: `Noch ${diff} XP bis Summa Cum Laude`,
      en: `${diff} XP to Summa Cum Laude`,
      es: `Faltan ${diff} XP para Summa Cum Laude`,
      fr: `Encore ${diff} XP jusqu'à Summa Cum Laude`,
      it: `Mancano ${diff} XP a Summa Cum Laude`,
      pt: `Faltam ${diff} XP para Summa Cum Laude`,
      nl: `Nog ${diff} XP tot Summa Cum Laude`,
      pl: `Jeszcze ${diff} XP do Summa Cum Laude`,
      ru: `Еще ${diff} XP до Summa Cum Laude`,
      zh: `距离 Summa Cum Laude 还需 ${diff} XP`,
      ja: `Summa Cum Laude まであと ${diff} XP`
    };
    return map[resolved] || map[resolved.split('_')[0]] || map.en || map.de;
  } else if (honor.tier === 4) {
    const diff = 1750 - xp;
    const map = {
      de: `Noch ${diff} XP bis Egregia Cum Laude`,
      en: `${diff} XP to Egregia Cum Laude`,
      es: `Faltan ${diff} XP para Egregia Cum Laude`,
      fr: `Encore ${diff} XP jusqu'à Egregia Cum Laude`,
      it: `Mancano ${diff} XP a Egregia Cum Laude`,
      pt: `Faltam ${diff} XP para Egregia Cum Laude`,
      nl: `Nog ${diff} XP tot Egregia Cum Laude`,
      pl: `Jeszcze ${diff} XP do Egregia Cum Laude`,
      ru: `Еще ${diff} XP до Egregia Cum Laude`,
      zh: `距离 Egregia Cum Laude 还需 ${diff} XP`,
      ja: `Egregia Cum Laude まであと ${diff} XP`
    };
    return map[resolved] || map[resolved.split('_')[0]] || map.en || map.de;
  } else {
    const map = {
      de: '🏆 Höchstes Prädikat erreicht (Titan)',
      en: '🏆 Maximum Distinction Achieved (Titan)',
      es: '🏆 Máxima distinción alcanzada (Titán)',
      fr: '🏆 Plus haute distinction atteinte (Titan)',
      it: '🏆 Massima distinzione raggiunta (Titano)',
      pt: '🏆 Distinção máxima alcançada (Titã)',
      nl: '🏆 Hoogste waardigheid behaald (Titaan)',
      pl: '🏆 Osiągnięto najwyższe wyróżnienie (Tytan)',
      ru: '🏆 Достигнуто высшее отличие (Титан)',
      zh: '🏆 已登顶最高荣誉殿堂（泰斗）',
      ja: '🏆 最高栄誉達成（タイタン）'
    };
    return map[resolved] || map[resolved.split('_')[0]] || map.en || map.de;
  }
}

/* ==========================================================================
   CERTIFICATE STRINGS (Multilingual)
   ========================================================================== */

export const CERTIFICATE_STRINGS = {
  headerTitle: {
    de: 'OFFIZIELLE QUALIFIKATIONS-URKUNDE',
    en: 'OFFICIAL CERTIFICATE OF QUALIFICATION',
    es: 'CERTIFICADO OFICIAL DE CUALIFICACIÓN',
    fr: 'CERTIFICAT OFFICIEL DE QUALIFICATION',
    it: 'CERTIFICATO UFFICIALE DI QUALIFICA',
    pt: 'CERTIFICADO OFICIAL DE QUALIFICAÇÃO',
    nl: 'OFFICIEEL KWALIFICATIE-DIPLOMA',
    pl: 'OFICJALNE ŚWIADECTWO KWALIFIKACJI',
    ru: 'ОФИЦИАЛЬНОЕ КВАЛИФИКАЦИОННОЕ СВИДЕТЕЛЬСТВО',
    zh: '官方专业资格认证证书',
    ja: '公式資格認定証'
  },
  certTitle: {
    de: 'GROSSMEISTER-URKUNDE',
    en: 'GRANDMASTER DIPLOMA',
    es: 'DIPLOMA DE GRAN MAESTRO',
    fr: 'DIPLÔME DE GRAND MAÎTRE',
    it: 'DIPLOMA DI GRAN MAESTRO',
    pt: 'DIPLOMA DE GRÃO-MESTRE',
    nl: 'GROOTMEESTER-DIPLOMA',
    pl: 'DYPLOM ARCYMISTRZA',
    ru: 'ДИПЛОМ ГРОССМЕЙСТЕРА',
    zh: '首席流程架构大师证书',
    ja: 'グランドマスター認定証'
  },
  certSubtitle: {
    de: 'BPMN 2.0 Process Modeling & Workflow Architecture',
    en: 'BPMN 2.0 Process Modeling & Workflow Architecture',
    es: 'Modelado de Procesos y Arquitectura BPMN 2.0',
    fr: 'Modélisation des Processus & Architecture BPMN 2.0',
    it: 'Modellazione dei Processi e Architettura BPMN 2.0',
    pt: 'Modelagem de Processos e Arquitetura BPMN 2.0',
    nl: 'BPMN 2.0 Procesmodellering & Workflow-architectuur',
    pl: 'Modelowanie Procesów i Architektura BPMN 2.0',
    ru: 'Моделирование процессов и архитектура BPMN 2.0',
    zh: 'BPMN 2.0 业务流程建模与工作流架构',
    ja: 'BPMN 2.0 プロセスモデリング＆ワークフローアーキテクチャ'
  },
  introText: {
    de: 'Hiermit wird bescheinigt, dass',
    en: 'This certifies that',
    es: 'Por la presente se certifica que',
    fr: 'Il est certifié par la présente que',
    it: 'Si certifica con il presente che',
    pt: 'Certifica-se por meio deste documento que',
    nl: 'Hierbij wordt gecertificeerd dat',
    pl: 'Niniejszym zaświadcza się, że',
    ru: 'Настоящим подтверждается, что',
    zh: '兹特证明',
    ja: 'ここに以下の者が'
  },
  descLine2: {
    de: 'die praxisorientierte Modellierungsprüfung nach ISO 19510 (BPMN 2.0) erfolgreich abgelegt hat.',
    en: 'has successfully completed the practical modeling qualification compliant with ISO 19510 (BPMN 2.0).',
    es: 'ha superado con éxito el examen de modelado práctico conforme a la norma ISO 19510 (BPMN 2.0).',
    fr: 'a réussi avec succès l\'examen pratique de modélisation conforme à la norme ISO 19510 (BPMN 2.0).',
    it: 'ha superato con successo l\'esame di modellazione pratica conforme alla norma ISO 19510 (BPMN 2.0).',
    pt: 'concluiu com êxito o exame de modelagem prática em conformidade com a norma ISO 19510 (BPMN 2.0).',
    nl: 'met succes het praktijkexamen modellering conform ISO 19510 (BPMN 2.0) heeft behaald.',
    pl: 'pomyślnie złożył(a) praktyczny egzamin z modelowania procesów zgodnie z normą ISO 19510 (BPMN 2.0).',
    ru: 'успешно сдал(а) практический экзамен по моделированию бизнес-процессов в соответствии с ISO 19510 (BPMN 2.0).',
    zh: '已圆满通过严格遵循 ISO 19510（BPMN 2.0）国际规范的实践建模综合考评。',
    ja: 'ISO 19510（BPMN 2.0）に準拠した実践モデリング認定試験に合格したことを証します。'
  },
  officialSeal: {
    de: 'OFFIZIELLES SIEGEL',
    en: 'OFFICIAL SEAL',
    es: 'SELLO OFICIAL',
    fr: 'SCEAU OFFICIEL',
    it: 'SIGILLO UFFICIALE',
    pt: 'SELO OFICIAL',
    nl: 'OFFICIEEL ZEGEL',
    pl: 'OFICJALNA PIECZĘĆ',
    ru: 'ОФИЦИАЛЬНАЯ ПЕЧАТЬ',
    zh: '官方权威印章',
    ja: '公式認証印'
  },
  userNameDefault: {
    de: 'BPMN-Prozessarchitekt',
    en: 'BPMN Process Architect',
    es: 'Arquitecto de Procesos BPMN',
    fr: 'Architecte de Processus BPMN',
    it: 'Architetto di Processi BPMN',
    pt: 'Arquiteto de Processos BPMN',
    nl: 'BPMN Procesarchitect',
    pl: 'Architekt Procesów BPMN',
    ru: 'Архитектор процессов BPMN',
    zh: 'BPMN 流程架构师',
    ja: 'BPMN プロセスアーキテクト'
  },
  signer1Title: {
    de: 'Der Gildenmeister',
    en: 'The Guild Master',
    es: 'El Maestro del Gremio',
    fr: 'Le Maître de la Guilde',
    it: 'Il Maestro della Gilda',
    pt: 'O Mestre da Guilda',
    nl: 'De Gildemeester',
    pl: 'Mistrz Gildii',
    ru: 'Глава Гильдии',
    zh: '公会大师',
    ja: 'ギルドマスター'
  },
  signer2Title: {
    de: 'BPMN-Trainer & Prüfer',
    en: 'BPMN Trainer & Examiner',
    es: 'Instructor y Evaluador BPMN',
    fr: 'Formateur & Examinateur BPMN',
    it: 'Istruttore & Esaminatore BPMN',
    pt: 'Instrutor e Avaliador BPMN',
    nl: 'BPMN Trainer & Examinator',
    pl: 'Trener i Egzaminator BPMN',
    ru: 'BPMN Тренер и Экзаменатор',
    zh: 'BPMN 资深导师与考评官',
    ja: 'BPMN 専任講師・検定員'
  },
  btnPrint: {
    de: 'Drucken / Als PDF',
    en: 'Print / PDF',
    es: 'Imprimir / Como PDF',
    fr: 'Imprimer / En PDF',
    it: 'Stampa / Come PDF',
    pt: 'Imprimir / Como PDF',
    nl: 'Afdrukken / PDF',
    pl: 'Drukuj / Jako PDF',
    ru: 'Печать / В формате PDF',
    zh: '打印 / 导出为 PDF',
    ja: '印刷 / PDFとして保存'
  },
  btnSvg: {
    de: 'Vektor-SVG',
    en: 'Vector SVG',
    es: 'SVG Vectorial',
    fr: 'SVG Vectoriel',
    it: 'SVG Vettoriale',
    pt: 'SVG Vetorial',
    nl: 'Vector-SVG',
    pl: 'Wektorowy SVG',
    ru: 'Векторный SVG',
    zh: '高清矢量 SVG',
    ja: 'ベクター SVG'
  },
  btnPng: {
    de: 'PNG-Bild (300 DPI)',
    en: 'PNG Image (300 DPI)',
    es: 'Imagen PNG (300 DPI)',
    fr: 'Image PNG (300 DPI)',
    it: 'Immagine PNG (300 DPI)',
    pt: 'Imagem PNG (300 DPI)',
    nl: 'PNG-Afbeelding (300 DPI)',
    pl: 'Obraz PNG (300 DPI)',
    ru: 'Изображение PNG (300 DPI)',
    zh: 'PNG 高清图（300 DPI）',
    ja: 'PNG画像（300 DPI）'
  },
  btnClose: {
    de: 'Schließen',
    en: 'Close',
    es: 'Cerrar',
    fr: 'Fermer',
    it: 'Chiudi',
    pt: 'Fechar',
    nl: 'Sluiten',
    pl: 'Zamknij',
    ru: 'Закрыть',
    zh: '关闭',
    ja: '閉じる'
  },
  distinctionLabel: {
    de: 'PRÄDIKAT',
    en: 'DISTINCTION',
    es: 'DISTINCIÓN',
    fr: 'DISTINCTION',
    it: 'DISTINZIONE',
    pt: 'DISTINÇÃO',
    nl: 'PREDICAAT',
    pl: 'WYRÓŻNIENIE',
    ru: 'ОТЛИЧИЕ',
    zh: '荣誉评定',
    ja: '授与称号'
  },
  chaptersSolvedLabel: {
    de: 'Kapitel gelöst',
    en: 'Chapters Solved',
    es: 'Capítulos resueltos',
    fr: 'Chapitres résolus',
    it: 'Capitoli risolti',
    pt: 'Capítulos concluídos',
    nl: 'Hoofdstukken voltooid',
    pl: 'Rozdziałów ukończono',
    ru: 'Глав пройдено',
    zh: '通关章节',
    ja: 'クリアした章'
  },
  puzzlesSolvedLabel: {
    de: 'Rätsel gelöst',
    en: 'Puzzles Solved',
    es: 'Desafíos resueltos',
    fr: 'Énigmes résolues',
    it: 'Enigmi risolti',
    pt: 'Desafios concluídos',
    nl: 'Puzzels opgelost',
    pl: 'Zagadek rozwiązano',
    ru: 'Задач решено',
    zh: '攻克谜题',
    ja: '解決したパズル'
  },
  dateLabel: {
    de: 'Datum:',
    en: 'Date:',
    es: 'Fecha:',
    fr: 'Date :',
    it: 'Data:',
    pt: 'Data:',
    nl: 'Datum:',
    pl: 'Data:',
    ru: 'Дата:',
    zh: '日期：',
    ja: '日付：'
  },
  dateConferralLabel: {
    de: 'Datum der Verleihung:',
    en: 'Date of Conferral:',
    es: 'Fecha de expedición:',
    fr: 'Date de délivrance :',
    it: 'Data di conferimento:',
    pt: 'Data de concessão:',
    nl: 'Datum van toekenning:',
    pl: 'Data nadania:',
    ru: 'Дата присвоения:',
    zh: '证书授予日期：',
    ja: '授与日：'
  }
};

export function getCertificateStrings(lang) {
  const resolved = resolveQuestLang(lang);
  const out = {};
  for (const [k, tbl] of Object.entries(CERTIFICATE_STRINGS)) {
    out[k] = tbl[resolved] || tbl[resolved.split('_')[0]] || tbl.en || tbl.de || '';
  }
  return out;
}

/* ==========================================================================
   CONFIRM MODAL STRINGS (Multilingual)
   ========================================================================== */

export const CONFIRM_MODAL_I18N = {
  reloadTitle: {
    de: '🔄 BPMN-Quest Vorlage neu laden & neu starten',
    en: '🔄 Reload BPMN-Quest Template & Restart',
    es: '🔄 Recargar plantilla BPMN-Quest y reiniciar',
    fr: '🔄 Recharger le modèle BPMN-Quest et recommencer',
    it: '🔄 Ricarica modello BPMN-Quest e ricomincia',
    pt: '🔄 Recarregar modelo BPMN-Quest e reiniciar',
    nl: '🔄 BPMN-Quest sjabloon herladen & opnieuw starten',
    pl: '🔄 Załaduj ponownie szablon BPMN-Quest i zacznij od nowa',
    ru: '🔄 Перезагрузить шаблон BPMN-Quest и начать заново',
    zh: '🔄 重新载入 BPMN-Quest 模板并重启冒险',
    ja: '🔄 BPMN-Questテンプレートを再読み込みして再スタート'
  },
  launchTitle: {
    de: '🎮 BPMN-Quest Lern-Abenteuer starten',
    en: '🎮 Launch BPMN-Quest Adventure',
    es: '🎮 Iniciar la aventura de aprendizaje BPMN-Quest',
    fr: '🎮 Lancer l\'aventure d\'apprentissage BPMN-Quest',
    it: '🎮 Avvia l\'avventura di apprendimento BPMN-Quest',
    pt: '🎮 Iniciar a aventura de aprendizagem BPMN-Quest',
    nl: '🎮 Start het BPMN-Quest leeravontuur',
    pl: '🎮 Rozpocznij przygodę edukacyjną BPMN-Quest',
    ru: '🎮 Начать обучающее приключение BPMN-Quest',
    zh: '🎮 启航 BPMN-Quest 交互式教学冒险',
    ja: '🎮 BPMN-Quest 学習アドベンチャーを開始'
  },
  reloadIntro: {
    de: 'Möchtest du das offizielle Quest-Diagramm frisch aus der Vorlage laden und den Quest-Fortschritt zurücksetzen?<br><br>💡 <strong>Hinweis:</strong> Dein Diagramm wird auf den sauberen Ausgangszustand zurückgesetzt (u.&nbsp;a. ist „Notruf senden“ wieder unverbunden, damit du die Bauaufgabe selbst lösen kannst).',
    en: 'Do you want to reload the official Quest diagram fresh from template and reset quest progress?<br><br>💡 <strong>Notice:</strong> Your diagram will be restored to its clean initial state (e.g. "Call Help" will be disconnected so you can complete the build task yourself).',
    es: '¿Deseas recargar el diagrama oficial de la misión desde la plantilla y restablecer el progreso?<br><br>💡 <strong>Nota:</strong> Tu diagrama se restaurará a su estado inicial para que puedas resolver la tarea de modelado por ti mismo.',
    fr: 'Voulez-vous recharger le diagramme de quête officiel à partir du modèle et réinitialiser la progression ?<br><br>💡 <strong>Remarque :</strong> Votre diagramme sera restauré dans son état initial pour que vous puissiez réaliser la tâche vous-même.',
    it: 'Vuoi ricaricare il diagramma ufficiale della quest dal modello e ripristinare i progressi?<br><br>💡 <strong>Nota:</strong> Il diagramma tornerà allo stato iniziale pulito per consentirti di risolvere autonomamente l\'attività.',
    pt: 'Deseja recarregar o diagrama oficial da missão a partir do modelo e redefinir o progresso?<br><br>💡 <strong>Aviso:</strong> Seu diagrama será restaurado ao estado inicial limpo para que você resolva a tarefa.',
    nl: 'Wil je het officiële quest-diagram opnieuw laden en je voortgang resetten?<br><br>💡 <strong>Opmerking:</strong> Je diagram wordt hersteld naar de schone begintoestand om de bouftaak zelf op te lossen.',
    pl: 'Czy chcesz załadować oficjalny diagram questu z szablonu i zresetować postęp?<br><br>💡 <strong>Wskazówka:</strong> Diagram powróci do czystego stanu początkowego, aby umożliwić samodzielne modelowanie.',
    ru: 'Перезагрузить официальную диаграмму квеста из шаблона и сбросить прогресс?<br><br>💡 <strong>Примечание:</strong> Диаграмма вернется в исходное состояние, чтобы вы могли решить задачу самостоятельно.',
    zh: '是否确认重新载入官方 Quest 规范图纸并重置任务进度？<br><br>💡 <strong>提示：</strong> 图纸将恢复至标准初始态，以供你亲手完成各个阶段的搭建任务。',
    ja: '公式クエストダイアグラムをテンプレートから再読み込みし、進捗を初期化しますか？<br><br>💡 <strong>注記：</strong> 自身でモデリング課題を解けるよう、初期のクリーンな状態に復元されます。'
  },
  launchIntro: {
    de: 'BPMN-Quest ist ein didaktisches Lern-Abenteuer in 4 professionellen Lanes mit Token-Game, Linter-Challenges und Meister-Urkunde.<br><br><strong>⚠️ Hinweis:</strong> Um die Quest zu spielen, muss das offizielle Quest-Diagramm geladen werden. Ungespeicherte Änderungen an deinem aktuellen Modell werden überschrieben.',
    en: 'BPMN-Quest is an interactive learning adventure featuring 4 professional lanes, token simulation, bpmnlint challenges, and a grandmaster diploma.<br><br><strong>⚠️ Notice:</strong> The official Quest diagram must be loaded. Any unsaved changes in your current diagram will be replaced.',
    es: 'BPMN-Quest es una aventura didáctica en 4 carriles profesionales con simulación de tokens, desafíos de linter y diploma oficial.<br><br><strong>⚠️ Aviso:</strong> Se cargará el diagrama oficial. Se sobrescribirán los cambios no guardados en tu modelo actual.',
    fr: 'BPMN-Quest est une aventure d\'apprentissage interactive sur 4 couloirs avec simulation de jetons, défis de linter et diplôme officiel.<br><br><strong>⚠️ Attention :</strong> Le diagramme officiel doit être chargé. Les modifications non enregistrées seront remplacées.',
    it: 'BPMN-Quest è un\'avventura di apprendimento in 4 corsie con simulazione di token, sfide del linter e diploma ufficiale.<br><br><strong>⚠️ Avviso:</strong> Deve essere caricato il diagramma ufficiale. Le modifiche non salvate andranno perse.',
    pt: 'BPMN-Quest é uma aventura interativa em 4 raias com simulação de tokens, desafios de linter e diploma oficial.<br><br><strong>⚠️ Aviso:</strong> O diagrama oficial será carregado. Alterações não salvas serão substituídas.',
    nl: 'BPMN-Quest is een interactief leeravontuur in 4 lanes met tokensimulatie, linter-uitdagingen en een meesterdiploma.<br><br><strong>⚠️ Let op:</strong> Het officiële diagram moet worden geladen. Niet-opgeslagen wijzigingen worden overschreven.',
    pl: 'BPMN-Quest to interaktywna przygoda edukacyjna w 4 torach z symulacją tokenów, wyzwaniami lintera i oficjalnym dyplomem.<br><br><strong>⚠️ Uwaga:</strong> Wymagane jest załadowanie oficjalnego diagramu. Niezapisane zmiany zostaną nadpisane.',
    ru: 'BPMN-Quest — интерактивное обучение на 4 дорожках с симуляцией токенов, проверками линтера и официальным дипломом.<br><br><strong>⚠️ Внимание:</strong> Будет загружена официальная диаграмма. Несохраненные изменения будут перезаписаны.',
    zh: 'BPMN-Quest 是一个贯穿 4 条专业泳道的交互式学习探险，包含令牌模拟、Linter 质检实操与大宗师认证证书。<br><br><strong>⚠️ 提示：</strong> 开始冒险需要载入官方基准图纸，当前画布上未保存的修改将被替换。',
    ja: 'BPMN-Quest は、トークンシミュレーション、リンター課題、公式認定証を備えた4レーンの実践的学習アドベンチャーです。<br><br><strong>⚠️ ご注意：</strong> 公式ダイアグラムが読み込まれ、未保存の変更は置き換えられます。'
  },
  btnConfirmReload: {
    de: '🔄 Vorlage neu laden & neu starten',
    en: '🔄 Reload Template & Restart',
    es: '🔄 Recargar plantilla y reiniciar',
    fr: '🔄 Recharger le modèle et recommencer',
    it: '🔄 Ricarica modello e ricomincia',
    pt: '🔄 Recarregar modelo e reiniciar',
    nl: '🔄 Sjabloon herladen & opnieuw starten',
    pl: '🔄 Załaduj szablon i zacznij od nowa',
    ru: '🔄 Перезагрузить шаблон и начать заново',
    zh: '🔄 重新载入模板并重启冒险',
    ja: '🔄 テンプレート再読込＆再スタート'
  },
  btnConfirmLaunch: {
    de: '🚀 Abenteuer laden & starten',
    en: '🚀 Load & Start Adventure',
    es: '🚀 Cargar e iniciar aventura',
    fr: '🚀 Charger & démarrer l\'aventure',
    it: '🚀 Carica e avvia avventura',
    pt: '🚀 Carregar e iniciar aventura',
    nl: '🚀 Avontuur laden & starten',
    pl: '🚀 Załaduj i rozpocznij przygodę',
    ru: '🚀 Загрузить и начать приключение',
    zh: '🚀 载入基准图纸并启航冒险',
    ja: '🚀 読み込んでアドベンチャーを開始'
  },
  btnCancel: {
    de: 'Abbrechen',
    en: 'Cancel',
    es: 'Cancelar',
    fr: 'Annuler',
    it: 'Annulla',
    pt: 'Cancelar',
    nl: 'Annuleren',
    pl: 'Anuluj',
    ru: 'Отмена',
    zh: '取消',
    ja: 'キャンセル'
  },
  langLabel: {
    de: 'Sprache des Abenteuers:',
    en: 'Adventure Language:',
    es: 'Idioma de la aventura:',
    fr: 'Langue de l\'aventure :',
    it: 'Lingua dell\'avventura:',
    pt: 'Idioma da aventura:',
    nl: 'Taal van het avontuur:',
    pl: 'Język przygody:',
    ru: 'Язык приключения:',
    zh: '教学冒险语言：',
    ja: 'アドベンチャーの言語：'
  }
};

export function getConfirmModalStrings(isReload, lang) {
  const resolved = resolveQuestLang(lang);
  const getVal = (tbl) => tbl[resolved] || tbl[resolved.split('_')[0]] || tbl.en || tbl.de || '';
  return {
    title: isReload ? getVal(CONFIRM_MODAL_I18N.reloadTitle) : getVal(CONFIRM_MODAL_I18N.launchTitle),
    intro: isReload ? getVal(CONFIRM_MODAL_I18N.reloadIntro) : getVal(CONFIRM_MODAL_I18N.launchIntro),
    btnConfirm: isReload ? getVal(CONFIRM_MODAL_I18N.btnConfirmReload) : getVal(CONFIRM_MODAL_I18N.btnConfirmLaunch),
    btnCancel: getVal(CONFIRM_MODAL_I18N.btnCancel),
    langLabel: getVal(CONFIRM_MODAL_I18N.langLabel)
  };
}

/* ==========================================================================
   LINTER RULES CONTENT (Multilingual)
   ========================================================================== */

export const LINTER_RULES_I18N = {
  modalTitle: {
    de: 'Die 3 goldenen BPMN-Linter-Regeln (ISO 19510)',
    en: 'The 3 Golden BPMN Linter Rules (ISO 19510)',
    es: 'Las 3 reglas de oro del linter BPMN (ISO 19510)',
    fr: 'Les 3 règles d\'or du linter BPMN (ISO 19510)',
    it: 'Le 3 regole d\'oro del linter BPMN (ISO 19510)',
    pt: 'As 3 regras de ouro do linter BPMN (ISO 19510)',
    nl: 'De 3 gouden BPMN-linterregels (ISO 19510)',
    pl: '3 złote zasady lintera BPMN (ISO 19510)',
    ru: '3 золотых правила линтера BPMN (ISO 19510)',
    zh: 'BPMN 质量审查三大黄金法则（ISO 19510）',
    ja: 'BPMNリンターの3大ゴールデンルール（ISO 19510）'
  },
  introTitle: {
    de: 'Was ist ein Linter & wo finde ich ihn?',
    en: 'What is a linter & where do I find it?',
    es: '¿Qué es un linter y dónde se encuentra?',
    fr: 'Qu\'est-ce qu\'un linter et où le trouver ?',
    it: 'Cos\'è un linter e dove si trova?',
    pt: 'O que é um linter e onde encontrá-lo?',
    nl: 'Wat is een linter en waar vind ik hem?',
    pl: 'Czym jest linter i gdzie go znaleźć?',
    ru: 'Что такое линтер и где его найти?',
    zh: '什么是 Linter？它在界面的什么位置？',
    ja: 'リンターとは？どこにありますか？'
  },
  introP1: {
    de: 'Ein Linter ist wie eine automatische Rechtschreib- und Grammatikprüfung für Geschäftsprozesse! Er scannt dein Diagramm in Echtzeit nach den offiziellen Best-Practices der ISO 19510 (BPMN 2.0).',
    en: 'A linter is like an automated spell- and grammar checker for business processes! It scans your diagram in real time against the official best practices of ISO 19510 (BPMN 2.0).',
    es: '¡Un linter es como un corrector ortográfico y gramatical automático para procesos! Analiza tu diagrama en tiempo real según las mejores prácticas de la norma ISO 19510 (BPMN 2.0).',
    fr: 'Un linter est comme un correcteur orthographique et grammatical automatique pour vos processus métier ! Il analyse votre diagramme en temps réel selon la norme ISO 19510 (BPMN 2.0).',
    it: 'Un linter è come un correttore ortografico automatico per i processi! Scansiona il diagramma in tempo reale secondo le best practice della norma ISO 19510 (BPMN 2.0).',
    pt: 'Um linter é como um corretor ortográfico automático para fluxos de processos! Ele verifica seu diagrama em tempo real com base nas diretrizes da ISO 19510 (BPMN 2.0).',
    nl: 'Een linter is als een automatische spellings- en grammaticacontrole voor bedrijfsprocessen! Hij scant je diagram realtime volgens de ISO 19510 (BPMN 2.0) best practices.',
    pl: 'Linter działa jak automatyczna autokorekta i sprawdzanie gramatyki dla procesów! Skanuje diagram w czasie rzeczywistym zgodnie z normą ISO 19510 (BPMN 2.0).',
    ru: 'Линтер — это автоматическая проверка орфографии и грамматики для бизнес-процессов! Он сканирует модель в реальном времени по стандарту ISO 19510 (BPMN 2.0).',
    zh: 'Linter 就像是业务流程图的自动化语法检查器！它严格依据 ISO 19510（BPMN 2.0）行业标准，在毫秒级时间内实时侦测图纸中的潜在逻辑漏洞与规范失误。',
    ja: 'リンターはビジネスプロセス向けの自動校正ツールです！ISO 19510（BPMN 2.0）の公式ベストプラクティスに基づき、リアルタイムで構文チェックを行います。'
  },
  introP2: {
    de: 'Du findest den Linter-Button unten zentriert auf der Zeichenfläche. Klicke darauf, um Regelverstöße im Diagramm farblich hervorzuheben und Fehlermeldungen direkt anzuzeigen!',
    en: 'Find the linter button centered at the bottom of the canvas. Click it to highlight rule violations and inspect error messages directly!',
    es: 'Encontrarás el botón del linter en la parte inferior central del lienzo. ¡Haz clic para resaltar infracciones de reglas y ver mensajes de error directamente!',
    fr: 'Vous trouverez le bouton du linter en bas au centre de la zone de dessin. Cliquez dessus pour surligner les infractions et afficher les messages d\'erreur !',
    it: 'Troverai il pulsante del linter in basso al centro dell\'area di disegno. Fai clic per evidenziare le violazioni e visualizzare subito i dettagli degli errori!',
    pt: 'Você encontrará o botão do linter na parte inferior central da tela. Clique para destacar violações de regras e ver as mensagens de erro diretamente!',
    nl: 'Je vindt de linter-knop onderaan in het midden van het canvas. Klik erop om fouten in kleur te markeren en direct details te bekijken!',
    pl: 'Przycisk lintera znajduje się u dołu na środku obszaru roboczego. Kliknij go, aby podświetlić naruszenia reguł i bezpośrednio zobaczyć komunikaty o błędach!',
    ru: 'Кнопка линтера расположена внизу по центру холста. Нажмите на нее, чтобы подсветить ошибки и просмотреть подсказки по их исправлению!',
    zh: '在画板底部中央即可找到专属 Linter 质检按钮。点击它即可让画布上的违规节点高亮闪烁，并直接呼出详细的修复建议！',
    ja: 'キャンバス下部中央にあるリンターボタンをクリックすると、違反箇所がカラーで強調表示され、エラー内容を直接確認できます！'
  },
  rulesTitle: {
    de: 'Die 3 goldenen Modellierungs-Regeln:',
    en: 'The 3 Golden Modeling Rules:',
    es: 'Las 3 reglas de oro del modelado:',
    fr: 'Les 3 règles d\'or de la modélisation :',
    it: 'Le 3 regole d\'oro della modellazione:',
    pt: 'As 3 regras de ouro da modelagem:',
    nl: 'De 3 gouden modelleerregels:',
    pl: '3 złote zasady modelowania:',
    ru: '3 золотых правила моделирования:',
    zh: '三大核心建模铁律：',
    ja: '3大ゴールデンモデリングルール：'
  },
  rule1Title: {
    de: 'Keine offenen Enden:',
    en: 'No Loose Ends:',
    es: 'Sin extremos sueltos:',
    fr: 'Pas d\'extrémités libres :',
    it: 'Nessun finale sospeso:',
    pt: 'Sem pontas soltas:',
    nl: 'Geen losse eindjes:',
    pl: 'Brak otwartych końców:',
    ru: 'Никаких оборванных веток:',
    zh: '绝不遗留未闭环节点：',
    ja: '未完了エンドの禁止：'
  },
  rule1Desc: {
    de: 'Jeder Prozesspfad muss an einem sauberen End-Event (dicker Kreis) abschließen.',
    en: 'Every workflow path must terminate at a clean End Event (thick circle).',
    es: 'Cada camino del proceso debe concluir en un evento de fin limpio (círculo grueso).',
    fr: 'Chaque chemin doit se terminer par un événement de fin propre (cercle épais).',
    it: 'Ogni percorso del processo deve terminare con un evento finale netto (cerchio spesso).',
    pt: 'Cada caminho do processo deve terminar em um evento final limpo (círculo espesso).',
    nl: 'Elk procespad moet eindigen bij een duidelijk eind-event (dikke cirkel).',
    pl: 'Każda ścieżka procesu musi kończyć się właściwym zdarzeniem końcowym (grube kółko).',
    ru: 'Каждая ветка процесса обязана заканчиваться аккуратным конечным событием (жирный круг).',
    zh: '每一条控制流分支都必须以庄严的结束事件（加粗实线圆圈）作为明确的落幕。',
    ja: 'すべてのプロセスルートは、明確な終了イベント（太い円）で完結させる必要があります。'
  },
  rule2Title: {
    de: 'Saubere Weichen:',
    en: 'Clean Gateways:',
    es: 'Compuertas limpias:',
    fr: 'Aiguillages propres :',
    it: 'Bivi puliti:',
    pt: 'Bifurcações limpas:',
    nl: 'Zuivere vertakkingen:',
    pl: 'Czyste rozgałęzienia:',
    ru: 'Четкие развилки:',
    zh: '规范使用网关分支：',
    ja: '適切なゲートウェイ分岐：'
  },
  rule2Desc: {
    de: 'Gateways trennen oder führen Pfade zusammen – verwende niemals Aktivitäten für implizite Verzweigungen.',
    en: 'Gateways split or merge paths – never use activity tasks for implicit branching.',
    es: 'Las compuertas dividen o fusionan caminos; nunca utilices tareas para ramificaciones implícitas.',
    fr: 'Les passerelles séparent ou fusionnent les flux – n\'utilisez jamais d\'activités pour des embranchements implicites.',
    it: 'I gateway separano o uniscono i percorsi: non usare mai le attività per diramazioni implicite.',
    pt: 'Gateways dividem ou unem caminhos – nunca use tarefas para ramificações implícitas.',
    nl: 'Gateways splitsen of voegen paden samen – gebruik nooit gewone taken voor impliciete vertakkingen.',
    pl: 'Bramki rozdzielają lub łączą ścieżki – nigdy nie używaj zadań do niejawnych rozgałęzień.',
    ru: 'Шлюзы разделяют или объединяют потоки — никогда не используйте задачи для неявных ветвлений.',
    zh: '使用网关进行严谨的分流与合流，切勿直接让单个活动节点拉出多条无条件的并发顺序流。',
    ja: 'ゲートウェイでフローの分岐や結合を行い、暗黙の分岐のためにアクティビティタスクを使用しないでください。'
  },
  rule3Title: {
    de: 'Lückenlose Sequenzflüsse:',
    en: 'Seamless Sequence Flows:',
    es: 'Flujos sin interrupciones:',
    fr: 'Flux de séquence continus :',
    it: 'Flussi di sequenza continui:',
    pt: 'Fluxos de sequência contínuos:',
    nl: 'Naadloze sequentiestromen:',
    pl: 'Ciągłe przepływy sekwencji:',
    ru: 'Непрерывные потоки управления:',
    zh: '杜绝游离孤岛元素：',
    ja: '途切れのないシーケンスフロー：'
  },
  rule3Desc: {
    de: 'Verwaiste Elemente ohne Sequenzfluss erzeugen unvollständige und unklare Prozesse.',
    en: 'Orphaned elements without incoming/outgoing sequence flows create invalid workflows.',
    es: 'Los elementos huérfanos sin flujo de secuencia generan procesos incompletos e inválidos.',
    fr: 'Les éléments orphelins sans flux de séquence génèrent des processus incomplets et invalides.',
    it: 'Elementi orfani senza flusso di sequenza creano processi incompleti e non validi.',
    pt: 'Elementos órfãos sem fluxo de sequência geram processos incompletos e inválidos.',
    nl: 'Verweesde elementen zonder sequentiestroom leiden tot onvolledige processen.',
    pl: 'Osierocone elementy bez przepływu sekwencji tworzą niekompletne procesy.',
    ru: 'Изолированные элементы без входящих/исходящих связей создают некорректные процессы.',
    zh: '画布上漂浮且没有任何前后控制流连接的孤立元素会导致流程模型完全失真。',
    ja: 'シーケンスフローが接続されていない孤立した要素は、不完全なプロセスを引き起こします。'
  }
};

export function getLinterRulesContent(lang) {
  const resolved = resolveQuestLang(lang);
  const getVal = (tbl) => tbl[resolved] || tbl[resolved.split('_')[0]] || tbl.en || tbl.de || '';
  return {
    modalTitle: getVal(LINTER_RULES_I18N.modalTitle),
    introTitle: getVal(LINTER_RULES_I18N.introTitle),
    introP1: getVal(LINTER_RULES_I18N.introP1),
    introP2: getVal(LINTER_RULES_I18N.introP2),
    rulesTitle: getVal(LINTER_RULES_I18N.rulesTitle),
    rule1Title: getVal(LINTER_RULES_I18N.rule1Title),
    rule1Desc: getVal(LINTER_RULES_I18N.rule1Desc),
    rule2Title: getVal(LINTER_RULES_I18N.rule2Title),
    rule2Desc: getVal(LINTER_RULES_I18N.rule2Desc),
    rule3Title: getVal(LINTER_RULES_I18N.rule3Title),
    rule3Desc: getVal(LINTER_RULES_I18N.rule3Desc)
  };
}
