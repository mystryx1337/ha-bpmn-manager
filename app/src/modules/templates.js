/**
 * HA-BPMN-Manager: Starter Process Templates
 *
 * Provides pre-built, standard-compliant BPMN 2.0 process definitions
 * for instant initialization, learning, and guided modeling.
 * Includes "BPMN-Quest: Das interaktive Lern-Abenteuer" in 31 languages,
 * equipped with 4 distinct lanes, zero-collision routing, data objects,
 * interactive token game pauses, attached instruction notes,
 * and comprehensive documentation.
 *
 * @package HA_BPMN_Manager
 */

import { getConfirmModalStrings } from './quest/quest-i18n.js';

export const QUEST_TRANSLATIONS = {
  "de": {
    "poolName": "🎮 BPMN-Quest: Das interaktive Lern-Abenteuer",
    "laneHero": "👤 Held & Abenteurer (User-Ebene)",
    "laneWorkshop": "⚙️ Zauberwerkstatt & Systeme (Automatisierung)",
    "laneGuild": "🏛️ Gilde der Prozessmeister (QM & Validierung)",
    "banner1": "🏰 KAPITEL 1: Das Erwachen (Start-Events, User Tasks & Token-Play)",
    "banner2": "⚔️ KAPITEL 2: Weggabelung des Schicksals (XOR-Entscheidung & Linter-Regeln)",
    "banner3": "🔮 KAPITEL 3: Portal der Doppelgänger (AND-Parallelität & Synchronisation)",
    "banner4": "⏱️ KAPITEL 4: Halle der Zeit & Das Schatzgewölbe (Timer & Subprozess)",
    "banner5": "👑 KAPITEL 5: Gilde der Prozessmeister (QM-Prüfung & Großmeister-Status)",
    "startName": "Abenteuer gestartet",
    "startDoc": "👉 SCHRITT 1 — ANWEISUNG: Klicke oben rechts auf den Play-Button (▶) der Token-Simulation oder direkt auf dieses Start-Event!\n\n👀 BEOBACHTE: Eine goldene Token-Kugel erwacht und wandert den Sequenzfluss entlang.\n\n💡 BPMN-WISSEN: Dünn umrandete Kreise markieren in BPMN 2.0 immer den Beginn eines Workflows.",
    "taskChooseHeroName": "👤 Heldenklasse & Rolle wählen",
    "taskChooseHeroDoc": "👆 DEINE AKTION: Klicke im Token Game auf diesen Task, um ihn abzuschließen!\n\n👀 BEOBACHTE: Erst nach deinem Klick zieht der Token weiter zur nächsten Station.\n\n💡 BPMN-WISSEN: User Tasks (👤) erfordern menschliche Interaktion mit einer Software-Maske. Die Swimlane definiert die ausführende Rolle.",
    "taskPackGearName": "✋ Rucksack packen & Inventar prüfen",
    "taskPackGearDoc": "👆 DEINE AKTION: Klicke auch hier auf den Task, um das Packen zu bestätigen.\n\n💡 BPMN-WISSEN: Manual Tasks (✋) sind manuelle Tätigkeiten ohne Software (z. B. Packen, Stempeln, physisches Prüfen).",
    "gatewayXorName": "✖ Welchen Pfad wählst du?",
    "gatewayXorDoc": "🎯 DEINE AUFGABE: Entscheide dich für einen Pfad! Klicke auf den oberen Pfeil (Sicherer Pfad) ODER den unteren Pfeil (Düsterwald)!\n\n👀 BEOBACHTE: Ein XOR-Gateway (✖) lässt immer genau EINEN Pfad zu. Du bestimmst per Klick die Richtung.",
    "flowHeroPath": "Sicherer Heldenpfad",
    "flowDarkForest": "Düsterwald (Gefahr!)",
    "taskStudyLinterName": "📜 Die goldenen Linter-Regeln studieren",
    "taskStudyLinterDoc": "📜 ANWEISUNG: Studiere die goldenen Regeln!\n\n👀 BEOBACHTE: Der Linter oberhalb der Simulation zeigt 0 Fehler an! Regeln:\n1. Jeder Knoten muss verbunden sein.\n2. Sequenzflüsse dürfen niemals Poolgrenzen kreuzen.\n3. Jeder Pfad muss ein End-Event erreichen.",
    "taskTrollCaveName": "🐺 Durch Trollhöhle schleichen",
    "taskTrollCaveDoc": "🐺 ACHTUNG — GEFAHRENZONE: Hier lauert der Troll! An diesem Task hängt ein Boundary Event (angehefteter Kreis). Klicke im Token Game auf den Task oder das Blitz-Symbol!",
    "boundaryTrapName": "⚡ Falle ausgelöst!",
    "boundaryTrapDoc": "⚡ FEHLERFALL AUSLÖSEN: Klicke auf das Blitz-Symbol!\n\n👀 BEOBACHTE: Der reguläre Pfad bricht sofort ab und der Token wechselt auf die Notfall-Spur (Eskalation). So modelliert man Zwischenfälle!",
    "taskCallHelpName": "✉️ Notsignal senden",
    "taskCallHelpDoc": "✉️ DEINE AKTION: Klicke auf den Send Task, um den Hilferuf abzusenden.\n\n💡 BPMN-WISSEN: Send Tasks (✉️) versenden Nachrichten an externe Partner oder Dienste.",
    "endEscapedName": "⚫ Rückzug zum Basislager",
    "endEscapedDoc": "End-Event: Beendet diesen Pfad sauber. Dicke Randlinie kennzeichnet das Prozessende.",
    "gatewayMergeXorName": "Pfad-Zusammenführung",
    "gatewayAndSplitName": "➕ Mächte bündeln (Parallelitäts-Portal)",
    "gatewayAndSplitDoc": "➕ PARALLELITÄT ERLEBEN: Beobachte das AND-Gateway!\n\n👀 BEOBACHTE: Aus EINEM Token werden ZWEI eigenständige Tokens! Beide Pfade (Zauber und Schwert) laufen jetzt vollkommen parallel ab!",
    "taskCastSpellName": "🛡️ Schutzzauber wirken (Geschäftsregeln)",
    "taskCastSpellDoc": "🛡️ ANWEISUNG: Klicke im Token Game auf diesen Task.\n\n💡 BPMN-WISSEN: Business Rule Tasks führen automatisierte Entscheidungslogiken (z. B. DMN-Tabellen, Rabattberechnungen) fehlerfrei aus.",
    "taskForgeSwordName": "⚙️ Magisches Schwert schmieden",
    "taskForgeSwordDoc": "⚙️ ANWEISUNG: Klicke auf den Service Task in der Zauberwerkstatt.\n\n💡 BPMN-WISSEN: Service Tasks (⚙️) sind automatische Systemaufrufe (APIs, Webservices) ohne menschliches Zutun.",
    "gatewayAndJoinName": "➕ Siegel der Synchronisation",
    "gatewayAndJoinDoc": "➕ SYNCHRONISATION: Beobachte die Vereinigung!\n\n👀 BEOBACHTE: Das AND-Join wartet, bis BEIDE parallelen Tokens eingetroffen sind! Erst wenn Schwert UND Zauber fertig sind, geht die Reise weiter.",
    "timerRestName": "⏱️ Rast am Lagerfeuer (3s Pause)",
    "timerRestDoc": "⏸️ AUTOMATISCHE PAUSE: Das Portal hat beide Ströme wieder vereint! Raste kurz 3 Sekunden am Lagerfeuer, bevor du das geheimnisvolle Schatzgewölbe betrittst.",
    "subProcessVaultName": "📦 Schatzkammer erkunden (Subprozess)",
    "subProcessVaultDoc": "📦 SUBPROZESS BETRETEN: Der Token taucht in die Schatzkammer ein!\n\n👆 DEINE AKTION: Klicke nacheinander auf \"👤 Schatztruhe knacken\" und \"🏆 Legendäres BPMN-Amulett bergen\", um den Subprozess zu durchlaufen!",
    "subStartName": "Gewölbe betreten",
    "taskPickLockName": "👤 Schatztruhe knacken",
    "taskPickLockDoc": "👆 DEINE AKTION: Klicke auf diesen User Task im Gewölbe, um das Schloss zu knacken!",
    "taskLootRelicName": "🏆 Legendäres BPMN-Amulett bergen",
    "taskLootRelicDoc": "🏆 DEINE AKTION: Klicke auf das Amulett! Du erhältst 100% Prozess-Transparenz und ISO-Konformität!",
    "subEndName": "Gewölbe gesichert verlassen",
    "taskVerifyGuildName": "⚙️ QM-Zertifizierung prüfen & Audit loggen",
    "taskVerifyGuildDoc": "⚙️ QUALITÄTSPRÜFUNG: Gilden-Audit!\n\n💡 TIPP: Nutze oben im Studio-Menü \"QM Handbook\", um die vollständige Dokumentation und Prozesslandkarte als druckbaren Bericht zu öffnen!",
    "taskAwardMasterName": "👑 BPMN-Großmeisterurkunde verleihen (Gilde)",
    "taskAwardMasterDoc": "👑 GILDEN-AUDIT BESTANDEN: Der Gildenmeister verleiht dir feierlich die Großmeister-Urkunde! Klicke im Token Game auf den Task, um sie entgegenzunehmen.",
    "endGrandmasterName": "🏆 Großmeister-Status erreicht!",
    "endGrandmasterDoc": "🏆 ABENTEUER VOLLENDET: Du hast alle Kernkomponenten von BPMN 2.0 (Lanes, Events, Tasks, Gateways, Timer, Boundary Events, Subprozesse) interaktiv gemeistert!",
    "timerPauseHeroName": "⏱️ 1. Pause: Durchatmen (3s)",
    "timerPauseHeroDoc": "⏸️ AUTOMATISCHE PAUSE: Das Token Game hält hier für 3 Sekunden an. Nimm dir Zeit, die Rollen-Verteilung in den Swimlanes zu studieren!",
    "timerPauseXorName": "⏱️ 2. Pause: Wegweiser prüfen (3s)",
    "timerPauseXorDoc": "⏸️ AUTOMATISCHE PAUSE: Vorbereitung auf den Scheideweg! Gleich musst du am XOR-Gateway aktiv per Klick entscheiden, welchen Pfad du wählst.",
    "timerPauseGuildName": "⏱️ 4. Pause: Siegelprüfung (3s)",
    "timerPauseGuildDoc": "⏸️ AUTOMATISCHE PAUSE: Die Gilde prüft deine Dokumentation! Letzte Rast vor der feierlichen Verleihung des Großmeister-Titels.",
    "noteStart": "▶️ SCHRITT 1:\nKlicke oben auf Play (▶)\noder auf das Start-Event,\num das Abenteuer zu starten!",
    "noteChooseHero": "👆 SCHRITT 2:\nUser Tasks brauchen Klick!\nKlicke im Token Game\nauf die Helden-Box!",
    "noteXorChoice": "🎯 SCHRITT 3: ENTSCHEIDUNG!\nKlicke auf einen Pfeil:\nSicherer Pfad (oben) ODER\nDüsterwald (unten)!",
    "noteTrap": "⚡ FEHLER-TEST: Falle!\nKlicke auf den Blitz,\num Ausnahmen & Eskalation\nauszuprobieren!",
    "noteAndSplit": "➕ PARALLELITÄT:\nSieh wie 2 Tokens\ngleichzeitig entstehen\nund parallel laufen!",
    "noteRestCamp": "⏱️ AUTOMATISCHE PAUSE:\nDas Token Game wartet hier\n3 Sekunden, damit du\ndurchatmen kannst!",
    "noteVault": "📦 SUBPROZESS:\nKlicke im Gewölbe auf\ndas Schloss, um das\nlegendäre Relikt zu bergen!",
    "noteGrandmaster": "👑 ZIEL ERREICHT!\nAlle Tokens vollendet!\nDu hast BPMN 2.0\nerfolgreich gemeistert!",
    "laneDanger": "🐺 Gefahrenzone & Ausnahmen (Incident Management)",
    "dataLogbookName": "📄 Quest-Logbuch & Prüfbericht",
    "dataLogbookDoc": "BPMN-Datenobjekt: Dokumentiert den Reiseverlauf und die QM-Konformitätsprüfung der Gilde.",
    "noteWorkshopHint": "🔨 Bauplatz Werkstatt:\nErstelle hier eine Aufgabe\n(z. B. \"Artefakt herstellen\")!"
  },
  "en": {
    "poolName": "🎮 BPMN-Quest: The Interactive Process Adventure",
    "laneHero": "👤 Hero & Adventurer (User Level)",
    "laneWorkshop": "⚙️ Magic Workshop & Systems (Automation)",
    "laneGuild": "🏛️ Guild of Process Masters (QM & Validation)",
    "banner1": "🏰 CHAPTER 1: The Awakening (Start Events, User Tasks & Token Play)",
    "banner2": "⚔️ CHAPTER 2: Crossroads of Destiny (XOR Choice & Linter Rules)",
    "banner3": "🔮 CHAPTER 3: Portal of Duplication (AND Parallelism & Sync)",
    "banner4": "⏱️ CHAPTER 4: Hall of Time & The Treasure Vault (Timer & Subprocess)",
    "banner5": "👑 CHAPTER 5: Guild of Process Masters (QM Audit & Grandmaster Status)",
    "startName": "Adventure Started",
    "startDoc": "👉 Welcome to BPMN-Quest! Launch token simulation via the Play button (▶) in the studio toolbar or click directly on this start event. Thin-bordered circles in BPMN 2.0 mark the origin of a workflow.",
    "taskChooseHeroName": "👤 Select Hero Class & Role",
    "taskChooseHeroDoc": "Role concept in BPMN: User Tasks (👤) represent human interactions with systems. The swimlane defines the assigned role. Click this task in token simulation to complete it!",
    "taskPackGearName": "✋ Pack Gear & Inspect Inventory",
    "taskPackGearDoc": "Manual Tasks (✋) are physical activities performed without software (packing, checking, signing). Clicking elements in BPMN-Manager opens the task drawer with detailed SOPs.",
    "gatewayXorName": "✖ Which Path Do You Choose?",
    "gatewayXorDoc": "XOR Gateway (Exclusive ✖): Exactly ONE branch must be taken. In token simulation, click on your desired branch to steer the process flow!",
    "flowHeroPath": "Safe Hero Path",
    "flowDarkForest": "Dark Forest (Hazard!)",
    "taskStudyLinterName": "📜 Study Golden Linter Rules",
    "taskStudyLinterDoc": "Linter validation in BPMN-Manager: bpmnlint validates rules in real time:\n1. All nodes must be connected.\n2. Sequence flows cannot cross pool boundaries.\n3. Every branch must reach a valid end event.",
    "taskTrollCaveName": "🐺 Sneak Through Troll Cave",
    "taskTrollCaveDoc": "Caution! A hazard awaits. BPMN uses boundary events (attached circles) to handle exceptions, errors, or timeouts.",
    "boundaryTrapName": "⚡ Trap Triggered!",
    "boundaryTrapDoc": "Error Boundary Event: When an exception occurs, normal flow aborts and the escalation branch activates.",
    "taskCallHelpName": "✉️ Send Distress Beacon",
    "taskCallHelpDoc": "Send Task (✉️): Dispatches a message (email, webhook, alert) to an external system.",
    "endEscapedName": "⚫ Retreat to Base Camp",
    "endEscapedDoc": "End Event: Gracefully concludes this branch. Thick border indicates process termination.",
    "gatewayMergeXorName": "Path Merge",
    "gatewayAndSplitName": "➕ Combine Powers (Parallel Portal)",
    "gatewayAndSplitDoc": "AND Gateway (Fork ➕): Splits flow into parallel paths! In token simulation, you will see TWO tokens traveling concurrently.",
    "taskCastSpellName": "🛡️ Cast Protective Ward (Business Rules)",
    "taskCastSpellDoc": "Business Rule Task: Executes automated business logic (DMN / decision tables). Configure rule attributes in the properties panel.",
    "taskForgeSwordName": "⚙️ Forge Enchanted Blade",
    "taskForgeSwordDoc": "Service Task (⚙️): Fully automated system invocation (REST API, microservice, ERP). No human input required.",
    "gatewayAndJoinName": "➕ Seal of Synchronization",
    "gatewayAndJoinDoc": "AND Join: Waits until BOTH parallel tokens arrive! Only when both sword and spell are ready can the process advance.",
    "timerRestName": "⏱️ Rest at Campfire (3s Pause)",
    "timerRestDoc": "Intermediate Timer Event: Suspends workflow execution for a set duration (e.g. 3 seconds or 24 hours). Watch the live pause in token simulation!",
    "subProcessVaultName": "📦 Explore Treasure Vault (Subprocess)",
    "subProcessVaultDoc": "Embedded Subprocess: Encapsulates complex composite workflows with its own internal start and end events.",
    "subStartName": "Enter Vault",
    "taskPickLockName": "👤 Pick Chest Lock",
    "taskPickLockDoc": "Precision task: Apply lockpick and analyze mechanism.",
    "taskLootRelicName": "🏆 Recover Legendary BPMN Amulet",
    "taskLootRelicDoc": "The amulet grants 100% process visibility and ISO compliance!",
    "subEndName": "Securely Exit Vault",
    "taskVerifyGuildName": "⚙️ Verify QM Certification & Log Audit",
    "taskVerifyGuildDoc": "QM Validation: Verifies complete documentation. Tip: Click \"QM Handbook\" in the top bar to export a complete audit handbook!",
    "taskAwardMasterName": "👑 Confer BPMN Grandmaster Diploma (Guild)",
    "taskAwardMasterDoc": "👑 GUILD AUDIT PASSED: The Guild Master officially confers the Grandmaster diploma upon you! Click this task in token simulation to accept it.",
    "endGrandmasterName": "🏆 Grandmaster Status Achieved!",
    "endGrandmasterDoc": "Terminate End Event: Immediately terminates the entire process instance, consuming all tokens. Quest triumphantly complete!",
    "timerPauseHeroName": "⏱️ 1st Pause: Catch Breath (3s)",
    "timerPauseHeroDoc": "⏸️ AUTOMATIC PAUSE: Token simulation halts for 3 seconds. Take a moment to observe the swimlane role assignment!",
    "timerPauseXorName": "⏱️ 2nd Pause: Check Signpost (3s)",
    "timerPauseXorDoc": "⏸️ AUTOMATIC PAUSE: Crossroads ahead! Get ready to actively click an arrow at the XOR gateway to choose your path.",
    "timerPauseGuildName": "⏱️ 4th Pause: Seal Verification (3s)",
    "timerPauseGuildDoc": "⏸️ AUTOMATIC PAUSE: The Guild audits your documentation! One last breather before grandmaster coronation.",
    "noteStart": "▶️ STEP 1: Start here!\nClick Play (▶) on the\ntoolbar or click this\nevent to start!",
    "noteChooseHero": "👆 STEP 2: Click task!\nUser tasks need action:\nClick the hero box in\nthe Token Game!",
    "noteXorChoice": "🎯 STEP 3: CHOOSE PATH!\nClick an outgoing arrow:\nSafe Hero Path (top) OR\nDark Forest (bottom)!",
    "noteTrap": "⚡ TEST EXCEPTION!\nClick the lightning bolt\nto trigger the trap and\nescalation path!",
    "noteAndSplit": "➕ PARALLEL FORK:\nWatch 2 tokens spawn\nsimultaneously and run\nin parallel!",
    "noteRestCamp": "⏱️ AUTOMATIC PAUSE:\nToken game rests for 3s\nso you can catch your\nbreath!",
    "noteVault": "📦 SUBPROCESS:\nClick the chest inside\nthe vault to retrieve the\nlegendary relic!",
    "noteGrandmaster": "👑 QUEST COMPLETE!\nAll tokens finished!\nYou have mastered\nBPMN 2.0!",
    "laneDanger": "🐺 Hazard Zone & Exceptions (Incident Management)",
    "dataLogbookName": "📄 Quest Logbook & Audit Record",
    "dataLogbookDoc": "BPMN Data Object: Documents the journey progress and Guild QM conformity audit.",
    "noteWorkshopHint": "🔨 Workshop Site:\nCreate a task here\n(e.g. \"Craft Artifact\")!"
  },
  "es": {
    "poolName": "🎮 BPMN-Quest: La Aventura Interactiva de Procesos",
    "laneHero": "👤 Héroe y Aventurero (Nivel Usuario)",
    "laneWorkshop": "⚙️ Taller Mágico y Sistemas (Automatización)",
    "laneGuild": "🏛️ Gremio de Maestros de Procesos (Control de Calidad)",
    "banner1": "🏰 CAPÍTULO 1: El Despertar (Eventos de Inicio, Tareas de Usuario y Token Game)",
    "banner2": "⚔️ CAPÍTULO 2: Encrucijada del Destino (Decisión XOR y Reglas Linter)",
    "banner3": "🔮 CAPÍTULO 3: Portal de la Duplicación (Paralelismo AND y Sincronización)",
    "banner4": "⏱️ CAPÍTULO 4: Sala del Tiempo y Cripta del Tesoro (Temporizador y Subproceso)",
    "banner5": "👑 CAPÍTULO 5: Gremio de Maestros (Auditoría de Calidad y Estado de Gran Maestro)",
    "startName": "Aventura Iniciada",
    "startDoc": "👉 ¡Bienvenido a BPMN-Quest! Inicia la simulación de tokens con el botón Play (▶) en la barra superior o haz clic directamente en este evento de inicio.",
    "taskChooseHeroName": "👤 Elegir Clase de Héroe y Rol",
    "taskChooseHeroDoc": "Principio de roles en BPMN: Las tareas de usuario (👤) representan la interacción humana con sistemas. El carril define el rol.",
    "taskPackGearName": "✋ Empacar Mochila e Inspeccionar Equipo",
    "taskPackGearDoc": "Las tareas manuales (✋) son actividades físicas sin software (empacar, firmar).",
    "gatewayXorName": "✖ ¿Qué camino eliges?",
    "gatewayXorDoc": "Pasarela XOR (Exclusiva ✖): Solo se puede tomar UN camino. ¡En la simulación puedes hacer clic en la rama deseada!",
    "flowHeroPath": "Camino Seguro del Héroe",
    "flowDarkForest": "Bosque Sombrío (¡Peligro!)",
    "taskStudyLinterName": "📜 Estudiar Reglas de Oro del Linter",
    "taskStudyLinterDoc": "Comprobación de reglas en BPMN-Manager:\n1. Todos los nodos deben estar conectados.\n2. Los flujos no cruzan límites de piscina.\n3. Cada camino termina en un evento final.",
    "taskTrollCaveName": "🐺 Escabullirse por la Cueva del Trol",
    "taskTrollCaveDoc": "¡Cuidado! Se avecina un peligro. BPMN usa eventos de frontera para capturar errores.",
    "boundaryTrapName": "⚡ ¡Trampa Activada!",
    "boundaryTrapDoc": "Evento de Frontera de Error: Al ocurrir una excepción, el flujo normal se interrumpe y se activa la ruta de escalada.",
    "taskCallHelpName": "✉️ Enviar Señal de Socorro",
    "taskCallHelpDoc": "Tarea de Envío (✉️): Despacha un mensaje (correo electrónico, webhook) a un sistema externo.",
    "endEscapedName": "⚫ Retirada al Campamento Base",
    "endEscapedDoc": "Evento de Fin: Concluye limpiamente esta rama. El borde grueso indica el final del proceso.",
    "gatewayMergeXorName": "Fusión de Caminos",
    "gatewayAndSplitName": "➕ Unir Fuerzas (Portal Paralelo)",
    "gatewayAndSplitDoc": "Pasarela AND (➕): Divide el flujo en ramas paralelas. Verás dos tokens avanzando al mismo tiempo.",
    "taskCastSpellName": "🛡️ Lanzar Hechizo Protector (Reglas de Negocio)",
    "taskCastSpellDoc": "Tarea de Reglas de Negocio: Ejecuta reglas automatizadas (DMN).",
    "taskForgeSwordName": "⚙️ Forjar Espada Encantada",
    "taskForgeSwordDoc": "Tarea de Servicio (⚙️): Llamada de sistema 100% automatizada (REST API, microservicio).",
    "gatewayAndJoinName": "➕ Sello de Sincronización",
    "gatewayAndJoinDoc": "Unión AND: Espera a que AMBOS tokens lleguen antes de continuar.",
    "timerRestName": "⏱️ Descanso en la Fogata (Pausa de 3s)",
    "timerRestDoc": "Temporizador Intermedio: Suspende el flujo durante un tiempo definido.",
    "subProcessVaultName": "📦 Explorar Cripta del Tesoro (Subproceso)",
    "subProcessVaultDoc": "Subproceso Incrustado: Encapsula un flujo complejo con su propio inicio y fin.",
    "subStartName": "Entrar en la Cripta",
    "taskPickLockName": "👤 Forzar Cerradura del Cofre",
    "taskPickLockDoc": "Tarea de precisión: Usar ganzúa y analizar mecanismo.",
    "taskLootRelicName": "🏆 Recuperar Amuleto Legendario BPMN",
    "taskLootRelicDoc": "¡El amuleto otorga 100% de visibilidad del proceso y conformidad ISO!",
    "subEndName": "Salir de la Cripta a Salvo",
    "taskVerifyGuildName": "⚙️ Verificar Certificación y Registrar Auditoría",
    "taskVerifyGuildDoc": "Control de Calidad: ¡Haz clic en \"Manual QM\" para exportar el informe de auditoría completo!",
    "taskAwardMasterName": "👑 Otorgar Título de Gran Maestro BPMN (Gremio)",
    "taskAwardMasterDoc": "👑 AUDITORÍA SUPERADA: ¡El Maestro del Gremio te otorga el diploma de Gran Maestro! Haz clic en la tarea para recibirlo.",
    "endGrandmasterName": "🏆 ¡Estatus de Gran Maestro Alcanzado!",
    "endGrandmasterDoc": "Evento de Fin de Terminación: Finaliza inmediatamente toda la instancia del proceso.",
    "timerPauseHeroName": "⏱️ 1ª Pausa: Respirar (3s)",
    "timerPauseHeroDoc": "⏸️ PAUSA AUTOMÁTICA: La simulación se detiene 3 segundos para observar los carriles de roles.",
    "timerPauseXorName": "⏱️ 2ª Pausa: Mirar la señal (3s)",
    "timerPauseXorDoc": "⏸️ PAUSA AUTOMÁTICA: ¡Se acerca el cruce! Prepárate para hacer clic en una flecha del XOR.",
    "timerPauseGuildName": "⏱️ 4ª Pausa: Verificación (3s)",
    "timerPauseGuildDoc": "⏸️ PAUSA AUTOMÁTICA: ¡El gremio audita la documentación antes del título de Gran Maestro!",
    "noteStart": "▶️ PASO 1: ¡Inicia!\nHaz clic en Play (▶)\no en el círculo de inicio\npara comenzar.",
    "noteChooseHero": "👆 PASO 2: ¡Haz clic!\nLas tareas de usuario\nrequieren tu clic en el\nToken Game.",
    "noteXorChoice": "🎯 PASO 3: ¡ELIGE!\nHaz clic en una flecha:\nCamino seguro (arriba) o\nBosque oscuro (abajo).",
    "noteTrap": "⚡ ¡PRUEBA DE ERROR!\nHaz clic en el rayo\npara activar la trampa\ny la escalación.",
    "noteAndSplit": "➕ PARALELISMO:\n¡Observa 2 fichas correr\nal mismo tiempo en\nparalelo!",
    "noteRestCamp": "⏱️ PAUSA AUTOMÁTICA:\nEl juego se pausa 3s\njunto a la hoguera para\nrecuperar fuerzas.",
    "noteVault": "📦 SUBPROCESO:\nHaz clic en el cofre del\nguardafangos para obtener\nel amuleto BPMN.",
    "noteGrandmaster": "👑 ¡LOGRO FINAL!\n¡Todas las fichas listas!\nHas dominado BPMN 2.0\ncon éxito.",
    "laneDanger": "🐺 Zona de Peligro y Excepciones (Gestión de Incidentes)",
    "dataLogbookName": "📄 Diario de Misión y Acta de Auditoría",
    "dataLogbookDoc": "Objeto de datos BPMN: Documenta el progreso del viaje y la auditoría de conformidad del gremio.",
    "noteWorkshopHint": "🔨 Taller de creación:\nCrea una tarea aquí\n(ej. \"Fabricar artefacto\")!"
  },
  "fr": {
    "poolName": "🎮 BPMN-Quest : L'Aventure Interactive des Processus",
    "laneHero": "👤 Héros & Aventurier (Niveau Utilisateur)",
    "laneWorkshop": "⚙️ Atelier Magique & Systèmes (Automatisation)",
    "laneGuild": "🏛️ Guilde des Maîtres de Processus (Assurance Qualité)",
    "banner1": "🏰 CHAPITRE 1 : L'Éveil (Événements de Début, Tâches Utilisateur & Token Game)",
    "banner2": "⚔️ CHAPITRE 2 : Le Carrefour du Destin (Décision XOR & Règles du Linter)",
    "banner3": "🔮 CHAPITRE 3 : Portail de Duplication (Parallélisme AND & Synchronisation)",
    "banner4": "⏱️ CHAPITRE 4 : Salle du Temps & Salle des Trésors (Minuteur & Sous-processus)",
    "banner5": "👑 CHAPITRE 5 : Guilde des Maîtres (Audit Qualité & Statut de Grand Maître)",
    "startName": "Aventure Commencée",
    "startDoc": "👉 Bienvenue dans BPMN-Quest ! Lancez la simulation de jeton avec le bouton Lecture (▶) dans la barre supérieure.",
    "taskChooseHeroName": "👤 Choisir la Classe du Héros & le Rôle",
    "taskChooseHeroDoc": "Principe des rôles en BPMN : Les tâches utilisateur (👤) représentent l'interaction humaine avec un système.",
    "taskPackGearName": "✋ Préparer le Sac à Dos & Vérifier l'Équipement",
    "taskPackGearDoc": "Les tâches manuelles (✋) sont des actions physiques sans logiciel (emballage, signature).",
    "gatewayXorName": "✖ Quelle voie choisis-tu ?",
    "gatewayXorDoc": "Passerelle XOR (Exclusive ✖) : Une SEULE branche peut être empruntée.",
    "flowHeroPath": "Voie Sûre du Héros",
    "flowDarkForest": "Forêt Sombre (Danger !)",
    "taskStudyLinterName": "📜 Étudier les Règles d'Or du Linter",
    "taskStudyLinterDoc": "Validation en temps réel dans BPMN-Manager : Tous les éléments doivent être reliés.",
    "taskTrollCaveName": "🐺 Se Faufiler dans la Grotte du Troll",
    "taskTrollCaveDoc": "Attention ! Un incident guette. BPMN utilise des événements de frontière pour intercepter les erreurs.",
    "boundaryTrapName": "⚡ Piège Déclenché !",
    "boundaryTrapDoc": "Événement de Frontière d'Erreur : Interrompt le flux standard et active l'escalade.",
    "taskCallHelpName": "✉️ Envoyer un Signal de Détresse",
    "taskCallHelpDoc": "Tâche d'Envoi (✉️) : Envoie un message à un système tiers.",
    "endEscapedName": "⚫ Repli au Camp de Base",
    "endEscapedDoc": "Événement de Fin : Termine proprement cette branche.",
    "gatewayMergeXorName": "Fusion des Voies",
    "gatewayAndSplitName": "➕ Unir les Forces (Portail Parallèle)",
    "gatewayAndSplitDoc": "Passerelle AND (➕) : Divise le flux en branches parallèles exécutées simultanément.",
    "taskCastSpellName": "🛡️ Lancer un Sortilège de Protection (Règles Métier)",
    "taskCastSpellDoc": "Tâche de Règles Métier : Exécute des tables de décision automatisées (DMN).",
    "taskForgeSwordName": "⚙️ Forger l'Épée Enchantée",
    "taskForgeSwordDoc": "Tâche de Service (⚙️) : Appel système entièrement automatisé (API REST).",
    "gatewayAndJoinName": "➕ Sceau de Synchronisation",
    "gatewayAndJoinDoc": "Jointure AND : Attend l'arrivée des DEUX jetons parallèles avant de poursuivre.",
    "timerRestName": "⏱️ Halte au Feu de Camp (Pause 3s)",
    "timerRestDoc": "Minuteur Intermédiaire : Suspend l'exécution pour une durée déterminée.",
    "subProcessVaultName": "📦 Explorer la Salle des Trésors (Sous-processus)",
    "subProcessVaultDoc": "Sous-processus Intégré : Encapsule un sous-ensemble avec ses propres début et fin.",
    "subStartName": "Entrer dans la Salle",
    "taskPickLockName": "👤 Crocheter le Verrou du Coffre",
    "taskPickLockDoc": "Tâche de précision : Analyser le mécanisme et utiliser le crochet.",
    "taskLootRelicName": "🏆 Récupérer la Relique Légendaire BPMN",
    "taskLootRelicDoc": "L'amulette garantit 100% de conformité et visibilité !",
    "subEndName": "Quitter la Salle en Sécurité",
    "taskVerifyGuildName": "⚙️ Valider la Certification Qualité & Audit",
    "taskVerifyGuildDoc": "Contrôle Qualité : Cliquez sur \"Manuel QM\" pour exporter un rapport d'audit complet !",
    "taskAwardMasterName": "👑 Décerner le Titre de Grand Maître BPMN (Guilde)",
    "taskAwardMasterDoc": "👑 AUDIT RÉUSSI : Le Maître de la Guilde vous décerne officiellement le diplôme de Grand Maître ! Cliquez sur la tâche.",
    "endGrandmasterName": "🏆 Statut de Grand Maître Atteint !",
    "endGrandmasterDoc": "Événement de Fin Terminaison : Clôture immédiatement l'ensemble du processus.",
    "timerPauseHeroName": "⏱️ 1ère Pause: Souffler (3s)",
    "timerPauseHeroDoc": "⏸️ PAUSE AUTOMATIQUE: La simulation s'arrête 3 secondes pour étudier la répartition des rôles.",
    "timerPauseXorName": "⏱️ 2ème Pause: Le carrefour (3s)",
    "timerPauseXorDoc": "⏸️ PAUSE AUTOMATIQUE: Préparez-vous à cliquer sur l'une des flèches de la passerelle XOR.",
    "timerPauseGuildName": "⏱️ 4ème Pause: Audit de guilde (3s)",
    "timerPauseGuildDoc": "⏸️ PAUSE AUTOMATIQUE: Vérification de conformité avant l'adoubement final!",
    "noteStart": "▶️ ÉTAPE 1: Démarrez!\nCliquez sur Play (▶)\nou sur le rond de départ\npour lancer le jeu!",
    "noteChooseHero": "👆 ÉTAPE 2: Cliquez!\nLes User Tasks ont besoin\nde votre clic dans la\nsimulation!",
    "noteXorChoice": "🎯 ÉTAPE 3: CHOIX!\nCliquez sur une flèche:\nVoie sécurisée (haut) ou\nForêt sombre (bas)!",
    "noteTrap": "⚡ TEST D'EXCEPTION!\nCliquez sur l'éclair pour\ndéclencher le piège et le\nflux d'alerte!",
    "noteAndSplit": "➕ PARALLÉLISME:\nObservez 2 jetons naître\net progresser de front en\nparallèle!",
    "noteRestCamp": "⏱️ PAUSE AUTOMATIQUE:\nLe jeu s'arrête 3s près\ndu feu de camp pour\nrespirer!",
    "noteVault": "📦 SOUS-PROCESSUS:\nCliquez sur le coffre\npour récupérer la relique\nlégendaire BPMN!",
    "noteGrandmaster": "👑 QUÊTE ACCOMPLIE!\nTous les jetons consommés!\nBPMN 2.0 maîtrisé avec\nsuccès!",
    "laneDanger": "🐺 Zone de Danger & Exceptions (Gestion des Incidents)",
    "dataLogbookName": "📄 Journal de Quête & Rapport d'Audit",
    "dataLogbookDoc": "Objet de données BPMN : Documente la progression et l'audit de conformité de la Guilde.",
    "noteWorkshopHint": "🔨 Atelier d'artisanat:\nCréez une tâche ici\n(ex. \"Fabriquer un artefact\")!"
  },
  "it": {
    "poolName": "🎮 BPMN-Quest: L'Avventura Interattiva dei Processi",
    "laneHero": "👤 Eroe & Avventuriero (Livello Utente)",
    "laneWorkshop": "⚙️ Laboratorio Magico & Sistemi (Automazione)",
    "laneGuild": "🏛️ Gilda dei Maestri di Processo (Controllo Qualità)",
    "banner1": "🏰 CAPITOLO 1: Il Risveglio (Eventi Iniziali, Attività Utente & Token Game)",
    "banner2": "⚔️ CAPITOLO 2: Il Bivio del Destino (Decisione XOR & Regole Linter)",
    "banner3": "🔮 CAPITOLO 3: Portale dello Sdoppiamento (Parallelismo AND & Sincronizzazione)",
    "banner4": "⏱️ CAPITOLO 4: Sala del Tempo & Cripta del Tesoro (Timer & Sottoprocesso)",
    "banner5": "👑 CAPITOLO 5: Gilda dei Maestri (Audit di Qualità & Stato di Gran Maestro)",
    "startName": "Avventura Iniziata",
    "startDoc": "👉 Benvenuto in BPMN-Quest! Avvia la simulazione con il pulsante Play (▶) nella barra superiore.",
    "taskChooseHeroName": "👤 Scegli Classe dell'Eroe & Ruolo",
    "taskChooseHeroDoc": "Principio dei ruoli in BPMN: Le attività utente (👤) rappresentano l'interazione con i sistemi.",
    "taskPackGearName": "✋ Prepara lo Zaino & Controlla l'Equipaggiamento",
    "taskPackGearDoc": "Le attività manuali (✋) sono azioni fisiche senza ausilio di software (preparazione, firma).",
    "gatewayXorName": "✖ Quale via scegli?",
    "gatewayXorDoc": "Gateway XOR (Esclusivo ✖): È consentita esattamente UNA sola diramazione.",
    "flowHeroPath": "Sentiero Sicuro dell'Eroe",
    "flowDarkForest": "Foresta Oscura (Pericolo!)",
    "taskStudyLinterName": "📜 Studia le Regole d'Oro del Linter",
    "taskStudyLinterDoc": "Validazione delle regole in tempo reale in BPMN-Manager.",
    "taskTrollCaveName": "🐺 Muoviti Cautamente nella Caverna del Troll",
    "taskTrollCaveDoc": "Attenzione! Si profila un pericolo. BPMN usa boundary events per intercettare gli errori.",
    "boundaryTrapName": "⚡ Trappola Attivata!",
    "boundaryTrapDoc": "Boundary Event di Errore: Interrompe il flusso regolare e attiva il ramo di gestione dell'errore.",
    "taskCallHelpName": "✉️ Invia Segnale di Soccorso",
    "taskCallHelpDoc": "Attività di Invio (✉️): Invia un messaggio a un sistema esterno.",
    "endEscapedName": "⚫ Ritiro all'Accampamento",
    "endEscapedDoc": "Evento Finale: Conclude questo ramo in modo ordinato.",
    "gatewayMergeXorName": "Ricongiungimento Sentieri",
    "gatewayAndSplitName": "➕ Unisci le Forze (Portale Parallelo)",
    "gatewayAndSplitDoc": "Gateway AND (➕): Suddivide il flusso in percorsi paralleli eseguiti insieme.",
    "taskCastSpellName": "🛡️ Lancia Incantesimo Protettivo (Regole di Business)",
    "taskCastSpellDoc": "Attività Regola di Business: Esegue decision tables automatizzate (DMN).",
    "taskForgeSwordName": "⚙️ Forgia la Spada Incantata",
    "taskForgeSwordDoc": "Attività di Servizio (⚙️): Chiamata di sistema interamente automatica (API REST).",
    "gatewayAndJoinName": "➕ Sigillo di Sincronizzazione",
    "gatewayAndJoinDoc": "Join AND: Attende l'arrivo di ENTRAMBI i token prima di procedere.",
    "timerRestName": "⏱️ Riposo al Falò (Pausa 3s)",
    "timerRestDoc": "Timer Intermedio: Sospende il flusso per una durata specifica.",
    "subProcessVaultName": "📦 Esplora la Cripta del Tesoro (Sottoprocesso)",
    "subProcessVaultDoc": "Sottoprocesso Incorporato: Incapsula un processo composito con inizio e fine propri.",
    "subStartName": "Entra nella Cripta",
    "taskPickLockName": "👤 Scassina la Serratura del Baule",
    "taskPickLockDoc": "Attività di precisione: Utilizza il grimaldello e analizza la serratura.",
    "taskLootRelicName": "🏆 Recupera il Leggendario Amuleto BPMN",
    "taskLootRelicDoc": "L'amuleto garantisce il 100% di visibilità e conformità ISO!",
    "subEndName": "Esci dalla Cripta al Sicuro",
    "taskVerifyGuildName": "⚙️ Verifica Certificazione Qualità & Registra Audit",
    "taskVerifyGuildDoc": "Verifica Qualità: Clicca su \"Manuale QM\" in alto per esportare il report di audit!",
    "taskAwardMasterName": "👑 Conferire Titolo di Gran Maestro BPMN (Gilda)",
    "taskAwardMasterDoc": "👑 AUDIT SUPERATO: Il Maestro della Gilda ti conferisce solennemente il diploma di Gran Maestro!",
    "endGrandmasterName": "🏆 Raggiunto lo Stato di Gran Maestro!",
    "endGrandmasterDoc": "Evento Finale di Terminazione: Termina istantaneamente l'intera istanza del processo.",
    "timerPauseHeroName": "⏱️ 1ª Pausa: Respiro (3s)",
    "timerPauseHeroDoc": "⏸️ PAUSA AUTOMATICA: Il Token Game si ferma per 3 secondi per farti studiare le swimlane!",
    "timerPauseXorName": "⏱️ 2ª Pausa: Bivio (3s)",
    "timerPauseXorDoc": "⏸️ PAUSA AUTOMATICA: Bivio in arrivo! Clicca su una freccia del gateway XOR per scegliere.",
    "timerPauseGuildName": "⏱️ 4ª Pausa: Verifica (3s)",
    "timerPauseGuildDoc": "⏸️ PAUSA AUTOMATICA: La Gilda verifica l'audit prima della cerimonia finale!",
    "noteStart": "▶️ PASSO 1: Avvia!\nClicca Play (▶) o premi\nsull'evento di inizio\nper giocare!",
    "noteChooseHero": "👆 PASSO 2: Clicca qui!\nI User Task richiedono\nil tuo clic nel\nToken Game!",
    "noteXorChoice": "🎯 PASSO 3: DECIDI!\nClicca su una freccia:\nSentiero sicuro (su) o\nForesta oscura (giù)!",
    "noteTrap": "⚡ TEST ERRORE!\nClicca sul fulmine\nper scatenare la trappola\ne l'escalation!",
    "noteAndSplit": "➕ PARALLELISMO:\nGuarda 2 token muoversi\ncontemporaneamente in\nparallelo!",
    "noteRestCamp": "⏱️ PAUSA AUTOMATICA:\nSosta di 3s al fuoco\ndi bivacco prima della\ncamera blindata!",
    "noteVault": "📦 SOTTOPROCESSO:\nClicca sullo scrigno\nper recuperare il leggendario\namuleto BPMN!",
    "noteGrandmaster": "👑 TRAGUARDO!\nTutti i token completati!\nHai padroneggiato appieno\nBPMN 2.0!",
    "laneDanger": "🐺 Zona Pericolo & Eccezioni (Gestione Incidenti)",
    "dataLogbookName": "📄 Diario di Missione & Verbale di Audit",
    "dataLogbookDoc": "Oggetto dati BPMN: Documenta l'avanzamento del viaggio e l'audit di conformità della Gilda.",
    "noteWorkshopHint": "🔨 Laboratorio magico:\nCrea un'attività qui\n(es. \"Forgiare manufatto\")!"
  },
  "pt": {
    "poolName": "🎮 BPMN-Quest: A Aventura Interativa de Processos",
    "laneHero": "👤 Herói e Aventureiro (Nível do Usuário)",
    "laneWorkshop": "⚙️ Oficina Mágica e Sistemas (Automação)",
    "laneGuild": "🏛️ Guilda dos Mestres de Processos (Gestão da Qualidade)",
    "banner1": "🏰 CAPÍTULO 1: O Despertar (Eventos Iniciais, Tarefas de Usuário e Token Game)",
    "banner2": "⚔️ CAPÍTULO 2: A Encruzilhada do Destino (Decisão XOR e Regras Linter)",
    "banner3": "🔮 CAPÍTULO 3: Portal da Duplicação (Paralelismo AND e Sincronização)",
    "banner4": "⏱️ CAPÍTULO 4: Salão do Tempo e Cripta do Tesouro (Temporizador e Subprocesso)",
    "banner5": "👑 CAPÍTULO 5: Guilda dos Mestres (Auditoria de Qualidade e Título de Grão-Mestre)",
    "startName": "Aventura Iniciada",
    "startDoc": "👉 Bem-vindo ao BPMN-Quest! Inicie a simulação pelo botão Play (▶) na barra superior.",
    "taskChooseHeroName": "👤 Escolher Classe do Herói e Papel",
    "taskChooseHeroDoc": "Conceito de papéis no BPMN: Tarefas de usuário (👤) representam a interação humana.",
    "taskPackGearName": "✋ Arrumar Mochila e Inspecionar Equipamento",
    "taskPackGearDoc": "Tarefas manuais (✋) são atividades físicas sem intervenção de software.",
    "gatewayXorName": "✖ Qual caminho você escolhe?",
    "gatewayXorDoc": "Gateway XOR (Exclusivo ✖): Exatamente UM único caminho deve ser escolhido.",
    "flowHeroPath": "Caminho Seguro do Herói",
    "flowDarkForest": "Floresta Sombria (Perigo!)",
    "taskStudyLinterName": "📜 Estudar Regras de Ouro do Linter",
    "taskStudyLinterDoc": "Validação em tempo real no BPMN-Manager.",
    "taskTrollCaveName": "🐺 Esgueirar-se pela Caverna do Troll",
    "taskTrollCaveDoc": "Atenção! Um imprevisto espreita. O BPMN usa eventos de limite para tratar exceções.",
    "boundaryTrapName": "⚡ Armadilha Disparada!",
    "boundaryTrapDoc": "Evento de Limite de Erro: Interrompe o fluxo normal e aciona o caminho de escalonamento.",
    "taskCallHelpName": "✉️ Enviar Sinal de Socorro",
    "taskCallHelpDoc": "Tarefa de Envio (✉️): Despacha uma mensagem a um sistema externo.",
    "endEscapedName": "⚫ Retirada para o Acampamento Base",
    "endEscapedDoc": "Evento Final: Conclui este ramo com segurança.",
    "gatewayMergeXorName": "União dos Caminhos",
    "gatewayAndSplitName": "➕ Unir Forças (Portal Paralelo)",
    "gatewayAndSplitDoc": "Gateway AND (➕): Divide o fluxo em caminhos paralelos simultâneos.",
    "taskCastSpellName": "🛡️ Conjurar Feitiço de Proteção (Regras de Negócio)",
    "taskCastSpellDoc": "Tarefa de Regras de Negócio: Executa tabelas de decisão automatizadas (DMN).",
    "taskForgeSwordName": "⚙️ Forjar Espada Encantada",
    "taskForgeSwordDoc": "Tarefa de Serviço (⚙️): Chamada de sistema totalmente automatizada (REST API).",
    "gatewayAndJoinName": "➕ Selo de Sincronização",
    "gatewayAndJoinDoc": "Junção AND: Aguarda a chegada de AMBOS os tokens paralelos.",
    "timerRestName": "⏱️ Descanso na Fogueira (Pausa de 3s)",
    "timerRestDoc": "Temporizador Intermediário: Pausa o fluxo por uma duração definida.",
    "subProcessVaultName": "📦 Explorar Cripta do Tesouro (Subprocesso)",
    "subProcessVaultDoc": "Subprocesso Incorporado: Encapsula um fluxo com início e fim próprios.",
    "subStartName": "Entrar na Cripta",
    "taskPickLockName": "👤 Arrombar a Fechadura do Baú",
    "taskPickLockDoc": "Tarefa de precisão: Usar gazua e analisar o mecanismo.",
    "taskLootRelicName": "🏆 Resgatar o Lendário Amuleto BPMN",
    "taskLootRelicDoc": "O amuleto concede 100% de visibilidade e conformidade ISO!",
    "subEndName": "Sair da Cripta em Segurança",
    "taskVerifyGuildName": "⚙️ Validar Certificação de Qualidade e Registrar Auditoria",
    "taskVerifyGuildDoc": "Controle de Qualidade: Clique em \"Manual QM\" para exportar o relatório de auditoria!",
    "taskAwardMasterName": "👑 Conceder Título de Grão-Mestre BPMN (Guilda)",
    "taskAwardMasterDoc": "👑 AUDITORIA APROVADA: O Mestre da Guilda concede solenemente o diploma de Grão-Mestre!",
    "endGrandmasterName": "🏆 Título de Grão-Mestre Conquistado!",
    "endGrandmasterDoc": "Evento Final de Encerramento: Finaliza imediatamente a instância inteira.",
    "timerPauseHeroName": "⏱️ 1ª Pausa: Respirar (3s)",
    "timerPauseHeroDoc": "⏸️ PAUSA AUTOMÁTICA: O Token Game pausa por 3 segundos para observar a divisão de papéis.",
    "timerPauseXorName": "⏱️ 2ª Pausa: Cruzamento (3s)",
    "timerPauseXorDoc": "⏸️ PAUSA AUTOMÁTICA: Prepare-se para escolher um dos caminhos no gateway XOR.",
    "timerPauseGuildName": "⏱️ 4ª Pausa: Auditoria (3s)",
    "timerPauseGuildDoc": "⏸️ PAUSA AUTOMÁTICA: A guilda audita tudo antes da consagração de Grão-Mestre!",
    "noteStart": "▶️ PASSO 1: Comece!\nClique em Play (▶) ou\nno círculo inicial para\niniciar o jogo!",
    "noteChooseHero": "👆 PASSO 2: Clique!\nTarefas de usuário\nprecisam do seu clique\nno Token Game!",
    "noteXorChoice": "🎯 PASSO 3: ESCOLHA!\nClique em uma seta:\nCaminho seguro (cima) ou\nFloresta escura (baixo)!",
    "noteTrap": "⚡ TESTE DE ERRO!\nClique no raio para\nacionar a armadilha e a\nescalação!",
    "noteAndSplit": "➕ PARALELISMO:\nVeja 2 tokens avançarem\nsimultaneamente em\nparalelo!",
    "noteRestCamp": "⏱️ PAUSA AUTOMÁTICA:\nDescanso de 3s na\nfogueira para respirar\ne observar!",
    "noteVault": "📦 SUBPROCESSO:\nClique no baú da câmara\npara resgatar o relicário\nBPMN!",
    "noteGrandmaster": "👑 VITÓRIA!\nTodos os tokens concluídos!\nVocê dominou BPMN 2.0\ncom mestria!",
    "laneDanger": "🐺 Zona de Perigo & Exceções (Gestão de Incidentes)",
    "dataLogbookName": "📄 Diário da Missão & Relatório de Auditoria",
    "dataLogbookDoc": "Objeto de dados BPMN: Documenta o progresso da jornada e a auditoria de conformidade da Guilda.",
    "noteWorkshopHint": "🔨 Oficina mágica:\nCrie uma tarefa aqui\n(ex. \"Criar artefato\")!"
  },
  "nl": {
    "poolName": "🎮 BPMN-Quest: Het Interactieve Procesavontuur",
    "laneHero": "👤 Held & Avonturier (Gebruikersniveau)",
    "laneWorkshop": "⚙️ Magische Werkplaats & Systemen (Automatisering)",
    "laneGuild": "🏛️ Gilde der Procesmeesters (Kwaliteitsborging & Audit)",
    "banner1": "🏰 HOOFDSTUK 1: Het Ontwaken (Start-Events, User Tasks & Token Game)",
    "banner2": "⚔️ HOOFDSTUK 2: Tweesprong van het Noodlot (XOR-Keuze & Linter-Regels)",
    "banner3": "🔮 HOOFDSTUK 3: Portaal der Duplicatie (AND-Parallellie & Synchronisatie)",
    "banner4": "⏱️ HOOFDSTUK 4: Hal der Tijd & De Schatkamer (Timer & Subproces)",
    "banner5": "👑 HOOFDSTUK 5: Gilde der Meesters (Kwaliteitsaudit & Grootmeesterstatus)",
    "startName": "Avontuur Gestart",
    "startDoc": "👉 Welkom bij BPMN-Quest! Start de tokensimulatie via de Play-knop (▶) in de bovenste balk.",
    "taskChooseHeroName": "👤 Heldenklasse & Rol Kiezen",
    "taskChooseHeroDoc": "Rollen in BPMN: Gebruikerstaken (👤) vertegenwoordigen menselijke systeeminteractie.",
    "taskPackGearName": "✋ Rugzak Inpakken & Uitrusting Controleren",
    "taskPackGearDoc": "Handmatige taken (✋) zijn fysieke handelingen zonder software.",
    "gatewayXorName": "✖ Welk pad kies je?",
    "gatewayXorDoc": "XOR-Gateway (Exclusief ✖): Slechts ÉÉN pad mag worden gekozen.",
    "flowHeroPath": "Veilig Heldenpad",
    "flowDarkForest": "Duister Woud (Gevaar!)",
    "taskStudyLinterName": "📜 Gouden Linter-Regels Bestuderen",
    "taskStudyLinterDoc": "Realtime validatie in BPMN-Manager.",
    "taskTrollCaveName": "🐺 Door Trollengrot Sluipen",
    "taskTrollCaveDoc": "Let op! Hier schuilt gevaar. BPMN gebruikt boundary events om uitzonderingen op te vangen.",
    "boundaryTrapName": "⚡ Val Geactiveerd!",
    "boundaryTrapDoc": "Error Boundary Event: Onderbreekt het reguliere proces en activeert het escalatiepad.",
    "taskCallHelpName": "✉️ Noodsignaal Verzenden",
    "taskCallHelpDoc": "Verzendtaak (✉️): Stuurt een bericht naar een extern systeem.",
    "endEscapedName": "⚫ Terugtocht naar het Basiskamp",
    "endEscapedDoc": "Eind-Event: Sluit dit pad netjes af.",
    "gatewayMergeXorName": "Padensamenvoeging",
    "gatewayAndSplitName": "➕ Krachten Bundelen (Parallel Portaal)",
    "gatewayAndSplitDoc": "AND-Gateway (➕): Splitst het proces in parallelle paden die gelijktijdig lopen.",
    "taskCastSpellName": "🛡️ Beschermspreuk Uitspreken (Bedrijfsregels)",
    "taskCastSpellDoc": "Bedrijfsregeltaak: Voert geautomatiseerde beslissingsregels uit (DMN).",
    "taskForgeSwordName": "⚙️ Betoverd Zwaard Smeden",
    "taskForgeSwordDoc": "Servicetaak (⚙️): Volledig geautomatiseerde systeemaanroep (REST API).",
    "gatewayAndJoinName": "➕ Zegel der Synchronisatie",
    "gatewayAndJoinDoc": "AND-Join: Wacht tot BEIDE parallelle tokens zijn gearriveerd alvorens verder te gaan.",
    "timerRestName": "⏱️ Rust bij het Kampvuur (3s Pauze)",
    "timerRestDoc": "Tussentijdse Timer: Onderbreekt de flow voor een vastgestelde tijdsduur.",
    "subProcessVaultName": "📦 Schatkamer Verkennen (Subproces)",
    "subProcessVaultDoc": "Ingebed Subproces: Bevat een zelfstandig deelproces met eigen start en einde.",
    "subStartName": "Schatkamer Betreden",
    "taskPickLockName": "👤 Sloten van Kist Kraken",
    "taskPickLockDoc": "Precisiewerk: Gebruik een loper en analyseer het slotmechanisme.",
    "taskLootRelicName": "🏆 Legendarisch BPMN-Amulet Binnenzakken",
    "taskLootRelicDoc": "Het amulet verleent 100% procestransparantie en ISO-conformiteit!",
    "subEndName": "Schatkamer Veilig Verlaten",
    "taskVerifyGuildName": "⚙️ Kwaliteitscertificering Valideren & Audit Loggen",
    "taskVerifyGuildDoc": "Kwaliteitscontrole: Klik op \"QM Handboek\" voor een complete auditrapportage!",
    "taskAwardMasterName": "👑 BPMN Grootmeester-diploma uitreiken (Gilde)",
    "taskAwardMasterDoc": "👑 GILDE-AUDIT GESLAAGD: De Gildemeester reikt je officieel het Grootmeester-diploma uit!",
    "endGrandmasterName": "🏆 Grootmeesterstatus Bereikt!",
    "endGrandmasterDoc": "Terminerend Eind-Event: Sluit onmiddellijk de gehele procesinstantie af.",
    "timerPauseHeroName": "⏱️ 1e Pauze: Adempauze (3s)",
    "timerPauseHeroDoc": "⏸️ AUTOMATISCHE PAUZE: Het Token Game pauzeert 3s om de rolverdeling te bekijken.",
    "timerPauseXorName": "⏱️ 2e Pauze: Wegwijzer (3s)",
    "timerPauseXorDoc": "⏸️ AUTOMATISCHE PAUZE: Bereid je voor om op een pijl van het XOR-gateway te klikken.",
    "timerPauseGuildName": "⏱️ 4e Pauze: Gilde-audit (3s)",
    "timerPauseGuildDoc": "⏸️ AUTOMATISCHE PAUZE: De gilde controleert het proces voor de meester-onderscheiding!",
    "noteStart": "▶️ STAP 1: Start hier!\nKlik op Play (▶) of op\nhet start-event om het\navontuur te beginnen!",
    "noteChooseHero": "👆 STAP 2: Klik hier!\nUser Tasks vereisen een\nklik in het Token Game\nom door te gaan!",
    "noteXorChoice": "🎯 STAP 3: KEUZE!\nKlik op een pijl:\nVeilig pad (boven) OF\nDuister woud (onder)!",
    "noteTrap": "⚡ FOUT TESTEN!\nKlik op de bliksem om\nde valstrik en escalatie\nte testen!",
    "noteAndSplit": "➕ PARALLELLISME:\nZie hoe 2 tokens tegelijk\nontstaan en parallel\nverder lopen!",
    "noteRestCamp": "⏱️ AUTOMATISCHE PAUZE:\n3 seconden rust bij het\nkampvuur om op adem\nte komen!",
    "noteVault": "📦 SUBPROCES:\nKlik in de schatkamer\nom het BPMN-amulet te\nbemachtigen!",
    "noteGrandmaster": "👑 DOEL BEREIKT!\nAlle tokens voltooid!\nJe beheerst BPMN 2.0\nnu volledig!",
    "laneDanger": "🐺 Gevarenzone & Uitzonderingen (Incidentbeheer)",
    "dataLogbookName": "📄 Quest-logboek & Auditverslag",
    "dataLogbookDoc": "BPMN-gegevensobject: Documenteert de voortgang van de reis en de kwaliteitsaudit van het gilde.",
    "noteWorkshopHint": "🔨 Werkplaats:\nMaak hier een taak aan\n(bijv. \"Artefact maken\")!"
  },
  "pl": {
    "poolName": "🎮 BPMN-Quest: Interaktywna Przygoda z Procesami",
    "laneHero": "👤 Bohater i Poszukiwacz Przygód (Poziom Użytkownika)",
    "laneWorkshop": "⚙️ Magiczny Warsztat i Systemy (Automatyzacja)",
    "laneGuild": "🏛️ Gildia Mistrzów Procesów (Kontrola Jakości i Audyt)",
    "banner1": "🏰 ROZDZIAŁ 1: Przebudzenie (Zdarzenia Początkowe, Zadania Użytkownika i Token Game)",
    "banner2": "⚔️ ROZDZIAŁ 2: Rozdroża Losu (Decyzja XOR i Zasady Lintera)",
    "banner3": "🔮 ROZDZIAŁ 3: Portal Klonowania (Równoległość AND i Synchronizacja)",
    "banner4": "⏱️ ROZDZIAŁ 4: Sala Czasu i Skarbiec (Czasomierz i Podproces)",
    "banner5": "👑 ROZDZIAŁ 5: Gildia Mistrzów (Audyt Jakości i Tytuł Arcymistrza)",
    "startName": "Przygoda Rozpoczęta",
    "startDoc": "👉 Witamy w BPMN-Quest! Uruchom symulację tokenów za pomocą przycisku Odtwórz (▶) na górnym pasku.",
    "taskChooseHeroName": "👤 Wybierz Klasę Bohatera i Rolę",
    "taskChooseHeroDoc": "Zasada ról w BPMN: Zadania użytkownika (👤) reprezentują interakcję człowieka z systemem.",
    "taskPackGearName": "✋ Spakuj Plecak i Sprawdź Ekwipunek",
    "taskPackGearDoc": "Zadania manualne (✋) to czynności fizyczne bez udziału oprogramowania.",
    "gatewayXorName": "✖ Którą ścieżkę wybierasz?",
    "gatewayXorDoc": "Bramka XOR (Rozłączna ✖): Można wybrać dokładnie JEDNĄ ścieżkę.",
    "flowHeroPath": "Bezpieczna Ścieżka Bohatera",
    "flowDarkForest": "Mroczny Las (Niebezpieczeństwo!)",
    "taskStudyLinterName": "📜 Zgłębiaj Złote Zasady Lintera",
    "taskStudyLinterDoc": "Walidacja w czasie rzeczywistym w BPMN-Managerze.",
    "taskTrollCaveName": "🐺 Przekradnij się przez Jaskinię Trolla",
    "taskTrollCaveDoc": "Uwaga! Zbliża się zagrożenie. BPMN stosuje zdarzenia krawędziowe do obsługi błędów.",
    "boundaryTrapName": "⚡ Pułapka Uruchomiona!",
    "boundaryTrapDoc": "Krawędziowe Zdarzenie Błędu: Przerywa normalny tok i kieruje na ścieżkę eskalacji.",
    "taskCallHelpName": "✉️ Wyślij Sygnał Ratunkowy",
    "taskCallHelpDoc": "Zadanie Wysyłania (✉️): Wysyła komunikat do systemu zewnętrznego.",
    "endEscapedName": "⚫ Odwrót do Obozu Bazowego",
    "endEscapedDoc": "Zdarzenie Końcowe: Bezpiecznie kończy tę gałąź.",
    "gatewayMergeXorName": "Połączenie Ścieżek",
    "gatewayAndSplitName": "➕ Połącz Siły (Portal Równoległy)",
    "gatewayAndSplitDoc": "Bramka AND (➕): Rozdziela przepływ na niezależne ścieżki równoległe.",
    "taskCastSpellName": "🛡️ Rzuć Zaklęcie Ochronne (Reguły Biznesowe)",
    "taskCastSpellDoc": "Zadanie Reguł Biznesowych: Wykonuje reguły decyzyjne (DMN).",
    "taskForgeSwordName": "⚙️ Wykuj Zaczarowany Miecz",
    "taskForgeSwordDoc": "Zadanie Usługowe (⚙️): Zautomatyzowane wywołanie systemowe (REST API).",
    "gatewayAndJoinName": "➕ Pieczęć Synchronizacji",
    "gatewayAndJoinDoc": "Połączenie AND: Oczekuje na dotarcie OBU równoległych tokenów.",
    "timerRestName": "⏱️ Odpoczynek przy Ognisku (Pauza 3s)",
    "timerRestDoc": "Pośrednie Zdarzenie Czasowe: Wstrzymuje proces na określony czas.",
    "subProcessVaultName": "📦 Zbadaj Skarbiec (Podproces)",
    "subProcessVaultDoc": "Zagnieżdżony Podproces: Samodzielny podprzepływ z własnym początkiem i końcem.",
    "subStartName": "Wejdź do Skarbca",
    "taskPickLockName": "👤 Otwórz Zamek Skrzyni Wytrychem",
    "taskPickLockDoc": "Zadanie precyzyjne: Analiza mechanizmu zamka.",
    "taskLootRelicName": "🏆 Odzyskaj Legendarny Amulet BPMN",
    "taskLootRelicDoc": "Amulet zapewnia 100% przejrzystości procesów i zgodność z ISO!",
    "subEndName": "Opuść Skarbiec Bezpiecznie",
    "taskVerifyGuildName": "⚙️ Zweryfikuj Certyfikację Jakości i Zapisz Audyt",
    "taskVerifyGuildDoc": "Kontrola Jakości: Kliknij \"Podręcznik QM\", aby wyeksportować raport audytu!",
    "taskAwardMasterName": "👑 Nadanie Tytułu Wielkiego Mistrza BPMN (Cech)",
    "taskAwardMasterDoc": "👑 AUDYT ZDANY: Mistrz Cechu uroczyście nadaje Ci dyplom Wielkiego Mistrza!",
    "endGrandmasterName": "🏆 Osiągnięto Status Arcymistrza!",
    "endGrandmasterDoc": "Zdarzenie Końcowe Przerywające: Natychmiast kończy całą instancję procesu.",
    "timerPauseHeroName": "⏱️ 1. Pauza: Oddech (3s)",
    "timerPauseHeroDoc": "⏸️ AUTOMATYCZNA PAUZA: Gra zatrzymuje się na 3s, aby zbadać tory ról.",
    "timerPauseXorName": "⏱️ 2. Pauza: Rozdroże (3s)",
    "timerPauseXorDoc": "⏸️ AUTOMATYCZNA PAUZA: Przygotuj się do kliknięcia strzałki na bramce XOR!",
    "timerPauseGuildName": "⏱️ 4. Pauza: Pieczęć (3s)",
    "timerPauseGuildDoc": "⏸️ AUTOMATYCZNA PAUZA: Gildia audytuje proces przed nadaniem tytułu arcymistrza.",
    "noteStart": "▶️ KROK 1: Start!\nKliknij Play (▶) lub\nzdarzenie początkowe,\naby zacząć!",
    "noteChooseHero": "👆 KROK 2: Kliknij!\nZadania użytkownika\nwymagają kliknięcia\nw Token Game!",
    "noteXorChoice": "🎯 KROK 3: WYBÓR!\nKliknij strzałkę:\nBezpieczna ścieżka (góra)\nlub Ciemny las (dół)!",
    "noteTrap": "⚡ TEST BŁĘDU!\nKliknij błyskawicę,\naby uruchomić pułapkę\ni eskalację!",
    "noteAndSplit": "➕ RÓWNOLEGŁOŚĆ:\nZobacz 2 tokeny płynące\njednocześnie w dwóch\nścieżkach!",
    "noteRestCamp": "⏱️ AUTOMATYCZNA PAUZA:\n3 sekundy odpoczynku\nprzy ognisku na zebranie\nsił!",
    "noteVault": "📦 PODPROCES:\nKliknij skrzynię w\nskarbcu, aby zdobyć\namulet BPMN!",
    "noteGrandmaster": "👑 CEL OSIĄGNIĘTY!\nWszystkie tokeny dotarły!\nBPMN 2.0 opanowane po\nmistrzowsku!",
    "laneDanger": "🐺 Strefa Zagrożenia i Wyjątki (Zarządzanie Incydentami)",
    "dataLogbookName": "📄 Dziennik Misji i Raport z Audytu",
    "dataLogbookDoc": "Obiekt danych BPMN: Dokumentuje postęp wyprawy i audyt zgodności Cechu.",
    "noteWorkshopHint": "🔨 Warsztat:\nUtwórz tutaj zadanie\n(np. \"Stwórz artefakt\")!"
  },
  "ru": {
    "poolName": "🎮 BPMN-Quest: Интерактивное приключение по процессам",
    "laneHero": "👤 Герой и Искатель приключений (Уровень пользователя)",
    "laneWorkshop": "⚙️ Магическая мастерская и Системы (Автоматизация)",
    "laneGuild": "🏛️ Гильдия Мастеров Процессов (Контроль качества и Аудит)",
    "banner1": "🏰 ГЛАВА 1: Пробуждение (Стартовые события, Пользовательские задачи и Токен-игра)",
    "banner2": "⚔️ ГЛАВА 2: Перепутье судьбы (Решение XOR и Правила линтера)",
    "banner3": "🔮 ГЛАВА 3: Портал раздвоения (Параллелизм AND и Синхронизация)",
    "banner4": "⏱️ ГЛАВА 4: Зал времени и Сокровищница (Таймер и Подпроцесс)",
    "banner5": "👑 ГЛАВА 5: Гильдия Мастеров (Аудит качества и Статус Гроссмейстера)",
    "startName": "Приключение началось",
    "startDoc": "👉 Добро пожаловать в BPMN-Quest! Запустите симуляцию токенов кнопкой Play (▶) на верхней панели.",
    "taskChooseHeroName": "👤 Выбрать класс героя и роль",
    "taskChooseHeroDoc": "Принцип ролей в BPMN: Пользовательские задачи (👤) обозначают взаимодействие человека с системой.",
    "taskPackGearName": "✋ Собрать рюкзак и проверить снаряжение",
    "taskPackGearDoc": "Ручные задачи (✋) — физические действия без участия ПО.",
    "gatewayXorName": "✖ Какой путь ты выберешь?",
    "gatewayXorDoc": "Шлюз XOR (Исключающий ✖): Можно выбрать ровно ОДИН путь.",
    "flowHeroPath": "Безопасная тропа героя",
    "flowDarkForest": "Темнолесье (Опасность!)",
    "taskStudyLinterName": "📜 Изучить золотые правила линтера",
    "taskStudyLinterDoc": "Проверка линтером в реальном времени в BPMN-Manager.",
    "taskTrollCaveName": "🐺 Прокрасться через пещеру тролля",
    "taskTrollCaveDoc": "Внимание! Впереди опасность. BPMN использует граничные события для перехвата ошибок.",
    "boundaryTrapName": "⚡ Ловушка сработала!",
    "boundaryTrapDoc": "Граничное событие ошибки: Прерывает обычный ход процесса и активирует путь эскалации.",
    "taskCallHelpName": "✉️ Отправить сигнал бедствия",
    "taskCallHelpDoc": "Задача отправки (✉️): Направляет сообщение внешней системе.",
    "endEscapedName": "⚫ Отступление в базовый лагерь",
    "endEscapedDoc": "Конечное событие: Корректно завершает данную ветвь.",
    "gatewayMergeXorName": "Слияние путей",
    "gatewayAndSplitName": "➕ Объединить силы (Параллельный портал)",
    "gatewayAndSplitDoc": "Шлюз AND (➕): Разделяет поток на параллельные пути, идущие одновременно.",
    "taskCastSpellName": "🛡️ Сотворить защитное заклинание (Бизнес-правила)",
    "taskCastSpellDoc": "Задача бизнес-правил: Выполняет автоматические таблицы решений (DMN).",
    "taskForgeSwordName": "⚙️ Выковать зачарованный клинок",
    "taskForgeSwordDoc": "Сервисная задача (⚙️): Полностью автоматический системный вызов (REST API).",
    "gatewayAndJoinName": "➕ Печать синхронизации",
    "gatewayAndJoinDoc": "Объединение AND: Ждет прибытия ОБОИХ токенов перед продолжением пути.",
    "timerRestName": "⏱️ Привал у костра (Пауза 3 сек)",
    "timerRestDoc": "Промежуточный таймер: Приостанавливает поток на заданное время.",
    "subProcessVaultName": "📦 Исследовать сокровищницу (Подпроцесс)",
    "subProcessVaultDoc": "Встроенный подпроцесс: Инкапсулирует подпоток с собственным началом и концом.",
    "subStartName": "Войти в сокровищницу",
    "taskPickLockName": "👤 Вскрыть замок сундука",
    "taskPickLockDoc": "Задача на точность: Использовать отмычку и изучить механизм.",
    "taskLootRelicName": "🏆 Забрать легендарный амулет BPMN",
    "taskLootRelicDoc": "Амулет дает 100% прозрачность процессов и соответствие стандартам ISO!",
    "subEndName": "Безопасно покинуть сокровищницу",
    "taskVerifyGuildName": "⚙️ Проверить сертификацию качества и записать аудит",
    "taskVerifyGuildDoc": "Контроль качества: Нажмите \"Руководство QM\" для экспорта аудиторского отчета!",
    "taskAwardMasterName": "👑 Присвоение звания Гроссмейстера BPMN (Гильдия)",
    "taskAwardMasterDoc": "👑 АУДИТ ПРОЙДЕН: Глава Гильдии торжественно вручает вам диплом Гроссмейстера!",
    "endGrandmasterName": "🏆 Достигнут статус Гроссмейстера!",
    "endGrandmasterDoc": "Завершающее конечное событие: Немедленно останавливает весь экземпляр процесса.",
    "timerPauseHeroName": "⏱️ 1-я Пауза: Передышка (3с)",
    "timerPauseHeroDoc": "⏸️ АВТОМАТИЧЕСКАЯ ПАУЗА: Игра замирает на 3 секунды для изучения дорожек ролей.",
    "timerPauseXorName": "⏱️ 2-я Пауза: Развилка (3с)",
    "timerPauseXorDoc": "⏸️ АВТОМАТИЧЕСКАЯ ПАУЗА: Приготовьтесь выбрать стрелку на шлюзе XOR!",
    "timerPauseGuildName": "⏱️ 4-я Пауза: Аудит (3с)",
    "timerPauseGuildDoc": "⏸️ АВТОМАТИЧЕСКАЯ ПАУЗА: Гильдия проверяет процесс перед вручением титула Гроссмейстера!",
    "noteStart": "▶️ ШАГ 1: Старт!\nНажмите Play (▶) или\nкликните начальное событие,\nчтобы начать!",
    "noteChooseHero": "👆 ШАГ 2: Кликните!\nПользовательские задачи\nтребуют клика в игре!",
    "noteXorChoice": "🎯 ШАГ 3: ВЫБОР!\nКликните по стрелке:\nБезопасный путь (вверх) или\nТёмный лес (вниз)!",
    "noteTrap": "⚡ ТЕСТ ОШИБКИ!\nКликните по молнии,\nчтобы вызвать ловушку и\nэскалацию!",
    "noteAndSplit": "➕ ПАРАЛЛЕЛЬНОСТЬ:\nСмотрите, как 2 токена\nидут одновременно по\nдвум веткам!",
    "noteRestCamp": "⏱️ АВТО-ПАУЗА:\n3 секунды у костра,\nчтобы перевести дух\nперед сокровищницей!",
    "noteVault": "📦 ПОДПРОЦЕСС:\nКликните на сундук в\nсокровищнице, чтобы взять\nамулет BPMN!",
    "noteGrandmaster": "👑 ФИНИШ!\nВсе токены завершены!\nВы полностью освоили\nстандарт BPMN 2.0!",
    "laneDanger": "🐺 Зона опасностей и исключений (Управление инцидентами)",
    "dataLogbookName": "📄 Журнал квеста и отчет аудита",
    "dataLogbookDoc": "Объект данных BPMN: Документирует прогресс путешествия и аудит соответствия Гильдии.",
    "noteWorkshopHint": "🔨 Мастерская магии:\nСоздайте задачу здесь\n(напр. \"Создать артефакт\")!"
  },
  "zh": {
    "poolName": "🎮 BPMN-Quest：交互式业务流程大冒险",
    "laneHero": "👤 英雄与冒险者（用户操作层）",
    "laneWorkshop": "⚙️ 魔法工坊与系统（自动化层）",
    "laneGuild": "🏛️ 流程大师工会（质量管理与审计）",
    "banner1": "🏰 第1章：觉醒（开始事件、用户任务与令牌模拟）",
    "banner2": "⚔️ 第2章：命运抉择（XOR 互斥网关与代码检查规则）",
    "banner3": "🔮 第3章：分身之门（AND 并行网关与同步汇聚）",
    "banner4": "⏱️ 第4章：时光之厅与宝藏密室（定时器与子流程）",
    "banner5": "👑 第5章：大师工会（质量管理审计与大师称号）",
    "startName": "冒险开始",
    "startDoc": "👉 欢迎来到 BPMN-Quest！点击顶部工具栏的播放按钮 (▶) 启动令牌模拟，或直接点击此开始事件。在 BPMN 2.0 中，细边框圆圈标志着流程起点。",
    "taskChooseHeroName": "👤 选择英雄职业与角色",
    "taskChooseHeroDoc": "BPMN 角色机制：用户任务 (👤) 代表人工系统操作。泳道定义执行角色。点击任务可标记为完成！",
    "taskPackGearName": "✋ 整理行囊与检查装备",
    "taskPackGearDoc": "手工任务 (✋) 是无需软件参与的物理作业（打包、清点、手写签字）。",
    "gatewayXorName": "✖ 选择前行道路？",
    "gatewayXorDoc": "XOR 网关（互斥 ✖）：只能选择唯一的一条分支推进。在模拟中可直接点击期望走的分支！",
    "flowHeroPath": "安全英雄之路",
    "flowDarkForest": "迷雾幽暗森林（危险！）",
    "taskStudyLinterName": "📜 研读三大黄金规范 (Linter)",
    "taskStudyLinterDoc": "BPMN-Manager 实时合规检查：\n1. 所有节点必须闭环连通。\n2. 顺序流不可跨越泳池边界。\n3. 每个分支必须有终点。",
    "taskTrollCaveName": "🐺 潜行穿过巨魔洞穴",
    "taskTrollCaveDoc": "注意！此任务潜伏突发状况。BPMN 使用边界事件（附着在边框上的圆圈）捕获异常或超时。",
    "boundaryTrapName": "⚡ 触发致命陷阱！",
    "boundaryTrapDoc": "错误边界事件：发生异常时，中断正常流程并转入升级异常处理路径。",
    "taskCallHelpName": "✉️ 发送紧急求救信号",
    "taskCallHelpDoc": "发送任务 (✉️)：向外部系统派发通知消息（邮件、Webhook、报警）。",
    "endEscapedName": "⚫ 撤退至大本营",
    "endEscapedDoc": "结束事件：安全终结此分支。粗边框圆圈表示流程节点终结。",
    "gatewayMergeXorName": "路径汇合",
    "gatewayAndSplitName": "➕ 凝聚力量（并行传送门）",
    "gatewayAndSplitDoc": "AND 网关（并行分支 ➕）：将流程拆分为并行执行的分支！在模拟中会看到两个令牌同时前进。",
    "taskCastSpellName": "🛡️ 吟唱防护法术（业务规则）",
    "taskCastSpellDoc": "业务规则任务：执行自动化决策规则 (DMN)。可在属性面板中配置规则绑定。",
    "taskForgeSwordName": "⚙️ 锻造附魔之剑",
    "taskForgeSwordDoc": "服务任务 (⚙️)：全自动系统调用（REST API、微服务、ERP 接口），无需人工介入。",
    "gatewayAndJoinName": "➕ 同步封印",
    "gatewayAndJoinDoc": "AND 汇聚：等待两个并行令牌全部到达！只有剑锻造完成且法术生效后，流程才能继续推进。",
    "timerRestName": "⏱️ 营火旁休憩（暂停3秒）",
    "timerRestDoc": "中间定时事件：将流程挂起指定时长（如3秒）。可在模拟中实时观察倒计时动画！",
    "subProcessVaultName": "📦 探索神秘宝藏密室（子流程）",
    "subProcessVaultDoc": "嵌入式子流程：封装复合子流程，具备独立的内部起点和终点。",
    "subStartName": "进入密室",
    "taskPickLockName": "👤 破解宝箱机关锁",
    "taskPickLockDoc": "精密任务：使用工具分析锁芯结构并完成解锁。",
    "taskLootRelicName": "🏆 取得传奇 BPMN 圣物",
    "taskLootRelicDoc": "圣物带来 100% 流程透明度与 ISO 规范兼容性！",
    "subEndName": "安全离开密室",
    "taskVerifyGuildName": "⚙️ 校验质量认证并记录审计日志",
    "taskVerifyGuildDoc": "质量审计：点击顶部的“QM 手册”即可一键导出完整的合规审计报告！",
    "taskAwardMasterName": "👑 授予BPMN特级宗师称号 (公会)",
    "taskAwardMasterDoc": "👑 审计通过：公会大师隆重授予您特级宗师证书！点击任务接受荣誉。",
    "endGrandmasterName": "🏆 荣登流程大师！",
    "endGrandmasterDoc": "终止结束事件：立即终结整个流程实例并销毁所有活动令牌。大获全胜！",
    "timerPauseHeroName": "⏱️ 第1次暂停: 调整呼吸 (3秒)",
    "timerPauseHeroDoc": "⏸️ 自动暂停: 令牌模拟暂停3秒。请仔细观察泳道中的角色职责划分！",
    "timerPauseXorName": "⏱️ 第2次暂停: 查看路标 (3秒)",
    "timerPauseXorDoc": "⏸️ 自动暂停: 即将到达分岔路！准备在XOR网关上点击箭号选择分支。",
    "timerPauseGuildName": "⏱️ 第4次暂停: 公会审核 (3秒)",
    "timerPauseGuildDoc": "⏸️ 自动暂停: 评审团正在核对文档！宗师加冕前的最后一次休憩。",
    "noteStart": "▶️ 步骤1: 启动！\n点击工具栏Play(▶)\n或起始事件圆形，\n开启探险之旅！",
    "noteChooseHero": "👆 步骤2: 点击任务！\n用户任务需要手动点击\n方可继续前行！",
    "noteXorChoice": "🎯 步骤3: 路径抉择！\n点击一条分支箭头:\n安全英雄路 (上) 或\n幽暗森林 (下)！",
    "noteTrap": "⚡ 异常测试！\n点击闪电图标，\n亲手触发陷阱与\n升级处理分支！",
    "noteAndSplit": "➕ 并行流转:\n观察1个令牌如何裂变为2个，\n同时在两条支线上并行！",
    "noteRestCamp": "⏱️ 自动休整:\n在营火旁休息3秒，\n为探索宝库蓄力！",
    "noteVault": "📦 子流程:\n点击宝库内部任务，\n开锁夺取传奇BPMN秘符！",
    "noteGrandmaster": "👑 宗师达成！\n所有令牌圆满到达终点！\n你已精通BPMN 2.0核心！",
    "laneDanger": "🐺 危险区域与异常 (事件管理)",
    "dataLogbookName": "📄 任务日志与审计报告",
    "dataLogbookDoc": "BPMN数据对象：记录旅程进展和公会的质量合规审计结果。",
    "noteWorkshopHint": "🔨 魔法工坊:\n在此创建任务\n(例如「制作神器」)!"
  },
  "ja": {
    "poolName": "🎮 BPMN-Quest：インタラクティブな業務プロセス大冒険",
    "laneHero": "👤 勇者＆冒険者（ユーザー作業階層）",
    "laneWorkshop": "⚙️ 魔法の工房＆システム（自動化階層）",
    "laneGuild": "🏛️ プロセスマスターギルド（品質保証・監査）",
    "banner1": "🏰 第1章：覚醒（開始イベント・ユーザータスク・トークンゲーム）",
    "banner2": "⚔️ 第2章：運命の分かれ道（XOR分岐・Linterルール）",
    "banner3": "🔮 第3章：分身のポータル（AND並行処理・同期）",
    "banner4": "⏱️ 第4章：時の広間と宝物庫（タイマー・サブプロセス）",
    "banner5": "👑 第5章：マスターギルド（QM監査・グランドマスター昇格）",
    "startName": "冒険開始",
    "startDoc": "👉 BPMN-Questへようこそ！上部ツールバーの再生ボタン（▶）からトークンシミュレーションを開始するか、この開始イベントをクリックしてください。",
    "taskChooseHeroName": "👤 勇者のクラスと役割を選択",
    "taskChooseHeroDoc": "BPMNの役割の概念：ユーザータスク（👤）は人間によるシステム操作を表します。レーンで担当役割を定義します。",
    "taskPackGearName": "✋ 装備の点検と荷造り",
    "taskPackGearDoc": "手作業タスク（✋）はソフトウェアを介さない物理的作業です（梱包、点検、書類署名など）。",
    "gatewayXorName": "✖ どちらの道を選択する？",
    "gatewayXorDoc": "XORゲートウェイ（排他的 ✖）：選べるルートは厳密に1つのみです。シミュレーションでクリックして進路を決定できます！",
    "flowHeroPath": "安全な勇者の道",
    "flowDarkForest": "暗闇の森（危険！）",
    "taskStudyLinterName": "📜 黄金のLinter規則を習得",
    "taskStudyLinterDoc": "BPMN-Managerリアルタイム規則検証：\n1. 全ノードが接続されていること。\n2. プール境界を越えないこと。\n3. 全ルートが終了イベントに到達すること。",
    "taskTrollCaveName": "🐺 トロールの洞窟を潜り抜ける",
    "taskTrollCaveDoc": "注意！このタスクには危険が潜んでいます。BPMNでは境界イベントを使って例外やエラーを捕捉します。",
    "boundaryTrapName": "⚡ 罠が発動！",
    "boundaryTrapDoc": "エラー境界イベント：例外発生時に通常の流れを中断し、エスカレーションルートへ移行します。",
    "taskCallHelpName": "✉️ 救難信号を発信",
    "taskCallHelpDoc": "送信タスク（✉️）：外部システムへ通知メッセージ（メール、Webhookなど）を発信します。",
    "endEscapedName": "⚫ 拠点キャンプへ退却",
    "endEscapedDoc": "終了イベント：この分岐を安全に完了させます。太枠の円がプロセスの終了を示します。",
    "gatewayMergeXorName": "ルート合流",
    "gatewayAndSplitName": "➕ 力を結集（並行ポータル）",
    "gatewayAndSplitDoc": "ANDゲートウェイ（並行分岐 ➕）：プロセスを並行して進む複数のパスに分割します！同時に2つのトークンが流れます。",
    "taskCastSpellName": "🛡️ 防護結界を展開（ビジネスルール）",
    "taskCastSpellDoc": "ビジネスルールタスク：自動化された意思決定ルール（DMNテーブル）を実行します。",
    "taskForgeSwordName": "⚙️ 魔法の剣を鍛造",
    "taskForgeSwordDoc": "サービスタスク（⚙️）：完全自動化されたシステム連携（REST API呼び出しなど）。",
    "gatewayAndJoinName": "➕ 同期の封印",
    "gatewayAndJoinDoc": "AND合流：両方の並行タスクが完了してトークンが揃うまで待機します。",
    "timerRestName": "⏱️ 焚き火で休息（3秒一時停止）",
    "timerRestDoc": "中間タイマーイベント：指定時間（3秒間）プロセスを保留します。シミュレーションでカウントダウンを確認できます！",
    "subProcessVaultName": "📦 宝物庫の探索（サブプロセス）",
    "subProcessVaultDoc": "埋め込みサブプロセス：独自の開始・終了を持つ複合的なプロセスをカプセル化します。",
    "subStartName": "宝物庫に突入",
    "taskPickLockName": "👤 宝箱の鍵を開錠",
    "taskPickLockDoc": "精密作業：ピッキングツールを用いて鍵の機構を解除します。",
    "taskLootRelicName": "🏆 伝説のBPMNアミュレットを入手",
    "taskLootRelicDoc": "アミュレットは100%のプロセス可視性とISO準拠をもたらします！",
    "subEndName": "宝物庫を無事脱出",
    "taskVerifyGuildName": "⚙️ 品質認定を照合し監査ログ記録",
    "taskVerifyGuildDoc": "品質管理：上部ツールバーの「QMハンドブック」から完全な監査ハンドブックを出力できます！",
    "taskAwardMasterName": "👑 BPMNグランドマスター称号授与 (ギルド)",
    "taskAwardMasterDoc": "👑 監査合格：ギルドマスターより正式にグランドマスター認定証が授与されます！",
    "endGrandmasterName": "🏆 グランドマスター昇格！",
    "endGrandmasterDoc": "停止終了イベント：すべてのトークンを消費しプロセスインスタンス全体を終了させます。クエストクリア！",
    "timerPauseHeroName": "⏱️ 第1の一服: ひと息 (3秒)",
    "timerPauseHeroDoc": "⏸️ 自動一時停止: トークンが3秒間停止します。スイムレーンの役割分担を確認しましょう！",
    "timerPauseXorName": "⏱️ 第2の一服: 分岐確認 (3秒)",
    "timerPauseXorDoc": "⏸️ 自動一時停止: まもなく分岐路です！XORゲートウェイで進む矢印をクリックする準備をしてください。",
    "timerPauseGuildName": "⏱️ 第4の一服: 認定検査 (3秒)",
    "timerPauseGuildDoc": "⏸️ 自動一時停止: ギルドが監査を実施中！グランドマスター授与前の最後の休憩です。",
    "noteStart": "▶️ ステップ1: 開始！\nツールバーのPlay(▶)か\n開始イベントをクリックして\nゲームスタート！",
    "noteChooseHero": "👆 ステップ2: クリック！\nユーザータスクは\nクリック操作で進行\nします！",
    "noteXorChoice": "🎯 ステップ3: 選択！\n分岐矢印をクリック:\n安全な道 (上) または\n暗い森 (下)！",
    "noteTrap": "⚡ 例外テスト！\n稲妻アイコンをクリックして\n罠とエスカレーションを\n発動！",
    "noteAndSplit": "➕ 並行処理:\n2つのトークンが同時に\n発生して並行して進むのを\n観察！",
    "noteRestCamp": "⏱️ 自動一時停止:\n焚き火で3秒間休憩し、\n一息つきましょう！",
    "noteVault": "📦 サブプロセス:\n宝物庫内のタスクを\nクリックして伝説の護符を\n入手！",
    "noteGrandmaster": "👑 クエスト達成！\n全トークン完了！\nBPMN 2.0を完全に\nマスターしました！",
    "laneDanger": "🐺 危険地帯と例外処理 (インシデント管理)",
    "dataLogbookName": "📄 クエスト日誌＆監査調書",
    "dataLogbookDoc": "BPMNデータオブジェクト：冒険の記録とギルドの適合性監査を記録します。",
    "noteWorkshopHint": "🔨 魔法工房:\nここにタスクを作成\n(例:「アーティファクト作成」)!"
  },
  "zh_TW": {
    "poolName": "🎮 BPMN-Quest：互動式流程大冒險",
    "laneHero": "👤 英雄與冒險者（使用者層級）",
    "laneWorkshop": "⚙️ 魔法工坊與系統（自動化層級）",
    "laneGuild": "🏛️ 流程大師工會（品管與稽核）",
    "banner1": "🏰 第1章：覺醒（開始事件、使用者任務與權杖模擬）",
    "banner2": "⚔️ 第2章：命運分岔路（XOR 互斥分支與 Linter 規範）",
    "banner3": "🔮 第3章：分身傳送門（AND 平行處理與同步彙流）",
    "banner4": "⏱️ 第4章：時間殿堂與秘寶庫（計時器與子流程）",
    "banner5": "👑 第5章：大師殿堂（QM 認證與流程大師頭銜）",
    "startName": "冒險啟程",
    "startDoc": "👉 歡迎來到 BPMN-Quest！透過頂部工具列的播放按鈕 (▶) 啟動權杖模擬，或直接點擊此開始事件。在 BPMN 2.0 中，細邊框圓形標誌著流程的起點。",
    "taskChooseHeroName": "👤 選擇英雄職業與角色",
    "taskChooseHeroDoc": "BPMN 角色機制：使用者任務 (👤) 代表人工與系統的互動。泳道定義執行的角色職責。在權杖模擬中點擊此任務可將其標記為完成！",
    "taskPackGearName": "✋ 整理行囊與清點裝備",
    "taskPackGearDoc": "手動任務 (✋) 是未涉及軟體系統的實體作業（如打包、清點、紙本簽核）。點擊任務即可在右側抽屜中查看作業標準書 (SOP)。",
    "gatewayXorName": "✖ 你選擇哪條道路？",
    "gatewayXorDoc": "XOR 閘道（互斥 ✖）：只能選擇一條路徑。在權杖模擬中，可透過滑鼠直接點選期望走的分支！",
    "flowHeroPath": "安全英雄之徑",
    "flowDarkForest": "迷霧黑森林（危險！）",
    "taskStudyLinterName": "📜 研讀三大金科玉律 (Linter)",
    "taskStudyLinterDoc": "BPMN-Manager 即時語法檢查：\n1. 每個節點必須相連。\n2. 順序流不可跨越泳池邊界。\n3. 每個分支必須通往定義好的結束事件。",
    "taskTrollCaveName": "🐺 潛入巨魔洞穴",
    "taskTrollCaveDoc": "注意！此任務潛藏突發狀況。BPMN 使用邊界事件（附著於外框的圓圈）來捕捉例外、錯誤或超時。",
    "boundaryTrapName": "⚡ 觸發致命陷阱！",
    "boundaryTrapDoc": "錯誤邊界事件：當例外發生時，中斷原本流程並轉入例外處理分支。",
    "taskCallHelpName": "✉️ 發送緊急求救信號",
    "taskCallHelpDoc": "發送任務 (✉️)：向外部系統發送訊息（電子郵件、Webhook、警報）。",
    "endEscapedName": "⚫ 撤退至大本營",
    "endEscapedDoc": "結束事件：安全終止此分支。粗邊框表示流程路徑結束。",
    "gatewayMergeXorName": "路徑彙整",
    "gatewayAndSplitName": "➕ 凝聚力量（平行傳送門）",
    "gatewayAndSplitDoc": "AND 閘道（分支 ➕）：將流程切分為平行路徑！在權杖模擬中會看到兩個權杖同時移動，兩項任務各自獨立執行。",
    "taskCastSpellName": "🛡️ 吟唱防禦結界（商業規則）",
    "taskCastSpellDoc": "商業規則任務：執行自動化決策規則 (DMN / 決策表)。可於屬性面板中設定規則連結。",
    "taskForgeSwordName": "⚙️ 鍛造附魔之劍",
    "taskForgeSwordDoc": "服務任務 (⚙️)：全自動系統呼叫（REST API、微服務、ERP 介接），無需人工介入。",
    "gatewayAndJoinName": "➕ 同步封印",
    "gatewayAndJoinDoc": "AND 彙流：等待兩個平行分支皆抵達！只有在寶劍鍛造完成且結界施放完畢後，流程方能繼續前行。",
    "timerRestName": "⏱️ 營火旁休憩（3秒暫停）",
    "timerRestDoc": "中間定時事件：流程在此暫停指定時長（例如 3 秒）。在權杖模擬中可即時觀看倒數動畫！",
    "subProcessVaultName": "📦 探索遠古寶庫（子流程）",
    "subProcessVaultDoc": "嵌入式子流程：封裝複雜的複合流程，具備獨立的內部起點與終點。",
    "subStartName": "進入寶庫",
    "taskPickLockName": "👤 解開寶箱密鎖",
    "taskPickLockDoc": "精密任務：使用撬鎖工具並分析鎖芯結構。",
    "taskLootRelicName": "🏆 取得傳奇 BPMN 聖物",
    "taskLootRelicDoc": "聖物帶來 100% 流程透明度與 ISO 規格合規性！",
    "subEndName": "安全離開寶庫",
    "taskVerifyGuildName": "⚙️ 審核 QM 認證並記錄日誌",
    "taskVerifyGuildDoc": "品管驗證：確認所有文件完備。提示：點擊頂部「QM 手冊」可一鍵匯出完整稽核手冊！",
    "taskAwardMasterName": "👑 授予BPMN特級大師稱號 (公會)",
    "taskAwardMasterDoc": "👑 審計通過：公會大師隆重授予您特級大師證書！點擊任務接受榮譽。",
    "endGrandmasterName": "🏆 榮登流程大師！",
    "endGrandmasterDoc": "終止結束事件：立即結束整個流程實例並回收所有權杖。冒險圓滿通關！",
    "timerPauseHeroName": "⏱️ 第1次暫停: 調整呼吸 (3秒)",
    "timerPauseHeroDoc": "⏸️ 自動暫停: 令牌模擬暫停3秒。請觀察泳道中的角色職責劃分！",
    "timerPauseXorName": "⏱️ 第2次暫停: 查看路標 (3秒)",
    "timerPauseXorDoc": "⏸️ 自動暫停: 即將抵達岔路！準備在XOR閘道上點擊箭號選擇分支。",
    "timerPauseGuildName": "⏱️ 第4次暫停: 公會審核 (3秒)",
    "timerPauseGuildDoc": "⏸️ 自動暫停: 評審團正在審查流程！大師授勳前的最後休整。",
    "noteStart": "▶️ 步驟1: 啟動！\n點擊工具列Play(▶)\n或起始事件圓形，\n開始探險！",
    "noteChooseHero": "👆 步驟2: 點擊任務！\n使用者任務需要手動點擊\n方可完成！",
    "noteXorChoice": "🎯 步驟3: 抉擇路徑！\n點擊一條箭頭分支:\n英雄坦途 (上) 或\n迷霧幽林 (下)！",
    "noteTrap": "⚡ 異常測試！\n點擊閃電符號，\n親自觸發陷阱與緊急升級！",
    "noteAndSplit": "➕ 平行分支:\n觀察單一令牌分裂為二，\n同步平行推進！",
    "noteRestCamp": "⏱️ 自動休整:\n營火旁小憩3秒，\n準備深入寶庫！",
    "noteVault": "📦 子流程:\n點擊藏寶庫內任務，\n開鎖取回傳奇符文！",
    "noteGrandmaster": "👑 試煉圓滿！\n全數令牌平安抵達！\n您已通曉BPMN 2.0精髓！",
    "laneDanger": "🐺 危險區域與例外 (事件管理)",
    "dataLogbookName": "📄 任務日誌與審計報告",
    "dataLogbookDoc": "BPMN資料物件：記錄旅程進展和公會的品質合規審計結果。",
    "noteWorkshopHint": "🔨 魔法工坊:\n在此建立任務\n(例如「製作神器」)!"
  },
  "sv": {
    "poolName": "🎮 BPMN-Quest: Det interaktiva processäventyret",
    "laneHero": "👤 Hjälte & Äventyrare (Användarnivå)",
    "laneWorkshop": "⚙️ Magisk verkstad & System (Automatisering)",
    "laneGuild": "🏛️ Processmästarnas gille (Kvalitetsstyrning & Granskning)",
    "banner1": "🏰 KAPITEL 1: Uppvaknandet (Start-händelser, Användaruppgifter & Token-spel)",
    "banner2": "⚔️ KAPITEL 2: Ödets vägskäl (XOR-beslut & Linter-regler)",
    "banner3": "🔮 KAPITEL 3: Dubblettportalen (AND-parallellism & Synkronisering)",
    "banner4": "⏱️ KAPITEL 4: Tidens sal & Skattkammaren (Timer & Delprocess)",
    "banner5": "👑 KAPITEL 5: Processmästarnas gille (Kvalitetsgranskning & Stormästarstatus)",
    "startName": "Äventyret startat",
    "startDoc": "👉 Välkommen till BPMN-Quest! Starta tokensimuleringen via Spela-knappen (▶) i verktygsfältet eller klicka direkt på denna starthändelse. Tunna cirklar indikerar starten på ett arbetsflöde.",
    "taskChooseHeroName": "👤 Välj hjälteklass och roll",
    "taskChooseHeroDoc": "Rollprincipen i BPMN: Användaruppgifter (👤) representerar mänsklig interaktion. Simbanan definierar den ansvariga rollen. Klicka i tokensimuleringen för att slutföra uppgiften!",
    "taskPackGearName": "✋ Packa ryggsäck och kontrollera utrustning",
    "taskPackGearDoc": "Manuella uppgifter (✋) är fysiska aktiviteter utan programvara (packa, signera). Klicka på uppgiften för att öppna instruktionspanelen.",
    "gatewayXorName": "✖ Vilken väg väljer du?",
    "gatewayXorDoc": "XOR-gateway (Exklusiv ✖): Exakt EN väg får tas. Klicka på önskad gren i tokensimuleringen för att styra flödet!",
    "flowHeroPath": "Säker hjälteväg",
    "flowDarkForest": "Mörka skogen (Fara!)",
    "taskStudyLinterName": "📜 Studera de gyllene linter-reglerna",
    "taskStudyLinterDoc": "Linter-granskning i BPMN-Manager:\n1. Alla noder måste vara anslutna.\n2. Flöden får inte korsa poolgränser.\n3. Varje gren måste nå en definierad sluthändelse.",
    "taskTrollCaveName": "🐺 Smyga genom trollgrottan",
    "taskTrollCaveDoc": "Se upp! En incident hotar. BPMN använder gränshändelser (bifogade cirklar) för att hantera fel, undantag eller tidsgränser.",
    "boundaryTrapName": "⚡ Fälla utlöst!",
    "boundaryTrapDoc": "Felgränshändelse: Vid ett undantag avbryts normalt flöde och eskaleringsvägen aktiveras.",
    "taskCallHelpName": "✉️ Skicka nödsignal",
    "taskCallHelpDoc": "Skicka-uppgift (✉️): Skickar ett meddelande (e-post, webhook, larm) till ett externt system.",
    "endEscapedName": "⚫ Återvänd till baslägret",
    "endEscapedDoc": "Sluthändelse: Avslutar denna gren rent. Tjock ram markerar processens slut.",
    "gatewayMergeXorName": "Flödessammanfogning",
    "gatewayAndSplitName": "➕ Samla krafter (Parallellportal)",
    "gatewayAndSplitDoc": "AND-gateway (➕): Delar upp flödet i parallella vägar! I tokensimuleringen ser du två tokens samtidigt.",
    "taskCastSpellName": "🛡️ Kasta skyddsbesvärjelse (Affärsregler)",
    "taskCastSpellDoc": "Affärsregeluppgift: Utför automatiserade regler (DMN). Konfigurera attribut i egenskapspanelen.",
    "taskForgeSwordName": "⚙️ Smida magiskt svärd",
    "taskForgeSwordDoc": "Tjänsteuppgift (⚙️): Helt automatiserat systemanrop (REST API, mikrotjänst). Ingen mänsklig interaktion.",
    "gatewayAndJoinName": "➕ Synkroniseringssigill",
    "gatewayAndJoinDoc": "AND-sammanfogning: Väntar tills BÅDA parallella tokens har anlänt innan processen kan fortsätta.",
    "timerRestName": "⏱️ Vila vid lägerelden (3 sekunder)",
    "timerRestDoc": "Mellanliggande timer: Pausar flödet under en angiven tid. Se nedräkningen live i simuleringen!",
    "subProcessVaultName": "📦 Utforska skattkammaren (Delprocess)",
    "subProcessVaultDoc": "Inbäddad delprocess: Kapslar in ett sammansatt arbetsflöde med egen start- och sluthändelse.",
    "subStartName": "Gå in i valvet",
    "taskPickLockName": "👤 Dyrka kistlås",
    "taskPickLockDoc": "Precisionsuppgift: Använd dyrk och analysera låsmekanismen.",
    "taskLootRelicName": "🏆 Bärga legendarisk BPMN-amulett",
    "taskLootRelicDoc": "Amuletten ger 100 % processöversikt och ISO-konformitet!",
    "subEndName": "Lämna valvet säkert",
    "taskVerifyGuildName": "⚙️ Verifiera certifiering & logga revision",
    "taskVerifyGuildDoc": "Kvalitetsgranskning: Tips: Klicka på \"QM Handbok\" i toppmenyn för att exportera en komplett revisionshandbok!",
    "taskAwardMasterName": "👑 Tilldela BPMN Stormästartitel (Gille)",
    "taskAwardMasterDoc": "👑 REVISION GODKÄND: Gillemästaren tilldelar dig högtidligt stormästardiplomet!",
    "endGrandmasterName": "🏆 Stormästarstatus uppnådd!",
    "endGrandmasterDoc": "Avsluta-sluthändelse: Avslutar omedelbart hela processinstansen och förbrukar alla tokens. Äventyret slutfört!",
    "timerPauseHeroName": "⏱️ 1:a Paus: Andrum (3s)",
    "timerPauseHeroDoc": "⏸️ AUTOMATISK PAUS: Simuleringen pausar 3s för att studera simbanorna.",
    "timerPauseXorName": "⏱️ 2:a Paus: Vägskäl (3s)",
    "timerPauseXorDoc": "⏸️ AUTOMATISK PAUS: Förbered dig på att klicka på en pil vid XOR-gatewayen.",
    "timerPauseGuildName": "⏱️ 4:e Paus: Granskning (3s)",
    "timerPauseGuildDoc": "⏸️ AUTOMATISK PAUS: Skrået granskar processen före mästarceremonin!",
    "noteStart": "▶️ STEG 1: Starta!\nKlicka Play (▶) eller på\nstarteventet för att börja!",
    "noteChooseHero": "👆 STEG 2: Klicka här!\nUser Tasks kräver ett\nklick i Token Game!",
    "noteXorChoice": "🎯 STEG 3: VÄLJ VÄG!\nKlicka på en pil:\nSäker stig (upp) eller\nMörk skog (ner)!",
    "noteTrap": "⚡ FELTEST!\nKlicka på blixten för att\nutlösa fällan och larmet!",
    "noteAndSplit": "➕ PARALLELLITET:\nSe 2 tokens vandra\nsamtidigt i parallella spår!",
    "noteRestCamp": "⏱️ AUTOMATISK PAUS:\n3 sekunders vila vid\nlägerelden!",
    "noteVault": "📦 DELPROCESS:\nKlicka i valvet för att\ndyrka kistan och hämta\namuletten!",
    "noteGrandmaster": "👑 UPPDRAG KLART!\nAlla tokens har nått mål!\nBPMN 2.0 behärskas fullt!",
    "laneDanger": "🐺 Farozon & Undantag (Incidenthantering)",
    "dataLogbookName": "📄 Uppdragslogg & Revisionsrapport",
    "dataLogbookDoc": "BPMN-dataobjekt: Dokumenterar resans framsteg och gillets efterlevnadsrevision.",
    "noteWorkshopHint": "🔨 Magisk verkstad:\nSkapa en uppgift här\n(t.ex. \"Tillverka artefakt\")!"
  },
  "da": {
    "poolName": "🎮 BPMN-Quest: Det interaktive proceseventyr",
    "laneHero": "👤 Helt & Eventyrer (Brugerniveau)",
    "laneWorkshop": "⚙️ Magisk værksted & Systemer (Automatisering)",
    "laneGuild": "🏛️ Procesmestrenes lav (Kvalitetsstyring & Audit)",
    "banner1": "🏰 KAPITEL 1: Opvågningen (Starthændelser, Brugeropgaver & Token-spil)",
    "banner2": "⚔️ KAPITEL 2: Skæbnens korsvej (XOR-beslutning & Linter-regler)",
    "banner3": "🔮 KAPITEL 3: Kloningsportalen (AND-parallelitet & Synkronisering)",
    "banner4": "⏱️ KAPITEL 4: Tidens hal & Skattekammeret (Timer & Underproces)",
    "banner5": "👑 KAPITEL 5: Procesmestrenes lav (Kvalitetsaudit & Stormesterstatus)",
    "startName": "Eventyr påbegyndt",
    "startDoc": "👉 Velkommen til BPMN-Quest! Start tokensimuleringen via Play-knappen (▶) i værktøjslinjen eller klik direkte på denne starthændelse.",
    "taskChooseHeroName": "👤 Vælg helteklasse og rolle",
    "taskChooseHeroDoc": "Rolleprincip i BPMN: Brugeropgaver (👤) repræsenterer menneskelig interaktion. Svømmebanen definerer ansvarsområdet.",
    "taskPackGearName": "✋ Pak rygsæk & kontroller udstyr",
    "taskPackGearDoc": "Manuelle opgaver (✋) er fysiske handlinger uden software. Klik på opgaven for at se detaljerede instrukser.",
    "gatewayXorName": "✖ Hvilken sti vælger du?",
    "gatewayXorDoc": "XOR-gateway (Eksklusiv ✖): Præcis ÉN forgrening må vælges. Vælg din gren direkte i tokensimuleringen!",
    "flowHeroPath": "Sikker heltesti",
    "flowDarkForest": "Mørkeskov (Fare!)",
    "taskStudyLinterName": "📜 Undersøg de gyldne linter-regler",
    "taskStudyLinterDoc": "Linter-validering i BPMN-Manager:\n1. Forbind alle elementer.\n2. Ingen krydsning af poolgrænser.\n3. Alle stier skal have en sluthændelse.",
    "taskTrollCaveName": "🐺 Liste igennem troldehulen",
    "taskTrollCaveDoc": "Pas på! Her lurer en hændelse. BPMN anvender grænsehændelser til at opfange fejl eller tidsudløb.",
    "boundaryTrapName": "⚡ Fælde udløst!",
    "boundaryTrapDoc": "Fejl-grænsehændelse: Ved undtagelser afbrydes den normale proces, og eskaleringen overtager.",
    "taskCallHelpName": "✉️ Send nødsignal",
    "taskCallHelpDoc": "Send-opgave (✉️): Sender en besked (e-mail, webhook) til et eksternt system.",
    "endEscapedName": "⚫ Tilbagetog til basislejren",
    "endEscapedDoc": "Sluthændelse: Afslutter dette spor korrekt. Tyk ramme angiver procesafslutning.",
    "gatewayMergeXorName": "Stisammenfletning",
    "gatewayAndSplitName": "➕ Foren kræfter (Parallelportal)",
    "gatewayAndSplitDoc": "AND-gateway (➕): Deler processen i parallelle spor. I simuleringen bevæger to tokens sig samtidigt.",
    "taskCastSpellName": "🛡️ Kaste beskyttelsesformel (Forretningsregler)",
    "taskCastSpellDoc": "Forretningsregelopgave: Udfører automatiserede regler (DMN). Juster parametre i panelet.",
    "taskForgeSwordName": "⚙️ Smede magisk sværd",
    "taskForgeSwordDoc": "Service-opgave (⚙️): Fuldautomatisk systemkald (REST API, mikrotjeneste).",
    "gatewayAndJoinName": "➕ Synkroniseringssegl",
    "gatewayAndJoinDoc": "AND-sammenføjning: Venter indtil BEGGE parallelle tokens er ankommet.",
    "timerRestName": "⏱️ Hvil ved lejrbålet (3s pause)",
    "timerRestDoc": "Mellemliggende timer: Sætter flowet på pause i et angivet tidsrum.",
    "subProcessVaultName": "📦 Udforsk skattekammeret (Underproces)",
    "subProcessVaultDoc": "Indlejret underproces: Samler en sammensat proces med egen start og slut.",
    "subStartName": "Gå ind i kammeret",
    "taskPickLockName": "👤 Dirke kistelås",
    "taskPickLockDoc": "Præcisionsarbejde: Brug dirkesæt og analyser mekanismen.",
    "taskLootRelicName": "🏆 Bjerge legendarisk BPMN-amulet",
    "taskLootRelicDoc": "Amuletten sikrer 100% gennemsigtighed og processtandarder!",
    "subEndName": "Forlad kammeret sikkert",
    "taskVerifyGuildName": "⚙️ Verificer kvalitetsaudit",
    "taskVerifyGuildDoc": "Audit: Klik på \"QM Håndbog\" i værktøjslinjen for at generere en komplet revisionsrapport!",
    "taskAwardMasterName": "👑 Tildel BPMN Stormestertitel (Laug)",
    "taskAwardMasterDoc": "👑 REVISION BESTÅET: Laugmesteren tildeler dig officielt stormesterdiplomet!",
    "endGrandmasterName": "🏆 Stormesterstatus opnået!",
    "endGrandmasterDoc": "Terminer-sluthændelse: Afslutter straks hele procesinstansen. Eventyret er fuldført!",
    "timerPauseHeroName": "⏱️ 1. Pause: Pust ud (3s)",
    "timerPauseHeroDoc": "⏸️ AUTOMATISK PAUSE: Simuleringen pauser 3s for at studere svømmebanerne.",
    "timerPauseXorName": "⏱️ 2. Pause: Vejskilt (3s)",
    "timerPauseXorDoc": "⏸️ AUTOMATISK PAUSE: Gør dig klar til at klikke på en pil ved XOR-gatewayen.",
    "timerPauseGuildName": "⏱️ 4. Pause: Laugskontrol (3s)",
    "timerPauseGuildDoc": "⏸️ AUTOMATISK PAUSE: Lauget undersøger processen før stormesterkroningen!",
    "noteStart": "▶️ TRIN 1: Start her!\nKlik Play (▶) eller på\nstart-cirklen for at begynde!",
    "noteChooseHero": "👆 TRIN 2: Klik opgave!\nUser Tasks kræver et klik\ni Token Game!",
    "noteXorChoice": "🎯 TRIN 3: VÆLG VEJ!\nKlik på en pil:\nSikker sti (op) eller\nMørk skov (ned)!",
    "noteTrap": "⚡ FEJLTEST!\nKlik på lynet for at\nudløse fælden og alarmen!",
    "noteAndSplit": "➕ PARALLELLITET:\nSe 2 tokens løbe parallelt\ni to spor på samme tid!",
    "noteRestCamp": "⏱️ AUTOMATISK PAUSE:\n3 sekunders pause ved\nlejrbålet for at puste ud!",
    "noteVault": "📦 UNDERPROCES:\nKlik i skatkammeret for\nat dirke låsen og hente\namuletten!",
    "noteGrandmaster": "👑 MÅL NÅET!\nAlle tokens gennemført!\nDu mestrer BPMN 2.0!",
    "laneDanger": "🐺 Farezone & Undtagelser (Hændelsesstyring)",
    "dataLogbookName": "📄 Opgavelog & Revisionsrapport",
    "dataLogbookDoc": "BPMN-dataobjekt: Dokumenterer rejsens forløb og laugets overensstemmelsesrevision.",
    "noteWorkshopHint": "🔨 Magisk værksted:\nOpret en opgave her\n(f.eks. \"Fremstil artefakt\")!"
  },
  "nb": {
    "poolName": "🎮 BPMN-Quest: Det interaktive prosesseventyret",
    "laneHero": "👤 Helt & Eventyrer (Brukernivå)",
    "laneWorkshop": "⚙️ Magisk verksted & Systemer (Automatisering)",
    "laneGuild": "🏛️ Prosessmesternes laug (Kvalitetsstyring & Revisjon)",
    "banner1": "🏰 KAPITTEL 1: Oppvåkningen (Starthendelser, Brukeroppgaver & Token-spill)",
    "banner2": "⚔️ KAPITTEL 2: Skjebnens veiskille (XOR-beslutning & Linter-regler)",
    "banner3": "🔮 KAPITTEL 3: Kloningsportalen (AND-parallellitet & Synkronisering)",
    "banner4": "⏱️ KAPITTEL 4: Tidens sal & Skattekammeret (Timer & Underprosess)",
    "banner5": "👑 KAPITTEL 5: Prosessmesternes laug (Kvalitetsrevisjon & Stormesterstatus)",
    "startName": "Eventyr påbegynt",
    "startDoc": "👉 Velkommen til BPMN-Quest! Start tokensimuleringen via Play-knappen (▶) i verktøylinjen eller klikk direkte på denne starthendelsen.",
    "taskChooseHeroName": "👤 Velg helteklasse og rolle",
    "taskChooseHeroDoc": "Rolleprinsipp i BPMN: Brukeroppgaver (👤) representerer menneskelig samhandling. Svømmebanen angir rollen.",
    "taskPackGearName": "✋ Pakk ryggsekk & kontroller utstyr",
    "taskPackGearDoc": "Manuelle oppgaver (✋) er fysiske oppgaver uten programvare (pakking, signering).",
    "gatewayXorName": "✖ Hvilken sti velger du?",
    "gatewayXorDoc": "XOR-gateway (Eksklusiv ✖): Kun ÉN vei kan velges. Velg retning direkte i simuleringen!",
    "flowHeroPath": "Trygg heltesti",
    "flowDarkForest": "Mørkeskogen (Fare!)",
    "taskStudyLinterName": "📜 Studer de gylne linter-reglene",
    "taskStudyLinterDoc": "Linter-sjekk i BPMN-Manager:\n1. Koble sammen alle noder.\n2. Ingen kryssing av bassenggrenser.\n3. Alle grener må ha en definert slutthendelse.",
    "taskTrollCaveName": "🐺 Liste gjennom trollhulen",
    "taskTrollCaveDoc": "Obs! En uventet hendelse lurer. BPMN bruker grensehendelser for feil- og tidsavbruddshåndtering.",
    "boundaryTrapName": "⚡ Felle utløst!",
    "boundaryTrapDoc": "Feilgrensehendelse: Ved avvik avbrytes den vanlige flyten, og eskaleringen trer i kraft.",
    "taskCallHelpName": "✉️ Send nødsignal",
    "taskCallHelpDoc": "Sendeoppgave (✉️): Sender en melding (e-post, varsel) til et eksternt system.",
    "endEscapedName": "⚫ Retrett til leiren",
    "endEscapedDoc": "Slutthendelse: Avslutter denne grenen ryddig. Tykk kantlinje indikerer fullføring.",
    "gatewayMergeXorName": "Stisammenføyning",
    "gatewayAndSplitName": "➕ Foren krefter (Parallellportal)",
    "gatewayAndSplitDoc": "AND-gateway (➕): Deler opp flyten i parallelle baner. To tokens vandrer uavhengig av hverandre.",
    "taskCastSpellName": "🛡️ Kaste beskyttelsesformel (Forretningsregler)",
    "taskCastSpellDoc": "Forretningsregeloppgave: Utfører automatiserte regler (DMN).",
    "taskForgeSwordName": "⚙️ Smi magisk sverd",
    "taskForgeSwordDoc": "Tjenesteoppgave (⚙️): Helautomatisert systemkall (REST API, mikrotjeneste).",
    "gatewayAndJoinName": "➕ Synkroniseringssegl",
    "gatewayAndJoinDoc": "AND-sammenføyning: Venter til BEGGE parallelle tokens har ankommet før ferden fortsetter.",
    "timerRestName": "⏱️ Hvile ved leirbålet (3s pause)",
    "timerRestDoc": "Mellomliggende timer: Pauser flyten i angitt tid. Følg nedtellingen direkte i simuleringen!",
    "subProcessVaultName": "📦 Utforsk skattekammeret (Underprosess)",
    "subProcessVaultDoc": "Innebygd underprosess: En samlet delprosess med egen start og slutt.",
    "subStartName": "Gå inn i hvelvet",
    "taskPickLockName": "👤 Dirke kistelås",
    "taskPickLockDoc": "Presisjonsarbeid: Analyser låsemekanismen og dirk opp kisten.",
    "taskLootRelicName": "🏆 Bærge legendarisk BPMN-amulett",
    "taskLootRelicDoc": "Amuletten sikrer 100 % prosesstransparens og ISO-etterlevelse!",
    "subEndName": "Forlat hvelvet trygt",
    "taskVerifyGuildName": "⚙️ Verifiser sertifisering & loggfør revisjon",
    "taskVerifyGuildDoc": "Kvalitetssjekk: Klikk på \"QM Håndbok\" for å eksportere en revisjonsklar håndbok!",
    "taskAwardMasterName": "👑 Tildel BPMN Stormestertittel (Laug)",
    "taskAwardMasterDoc": "👑 REVISJON BESTÅTT: Laugmesteren tildeler deg høytidelig stormesterdiplomet!",
    "endGrandmasterName": "🏆 Stormesterstatus oppnådd!",
    "endGrandmasterDoc": "Terminerende slutthendelse: Avslutter hele prosessforekomsten umiddelbart. Gratulerer!",
    "timerPauseHeroName": "⏱️ 1. Pause: Pustepause (3s)",
    "timerPauseHeroDoc": "⏸️ AUTOMATISK PAUSE: Simuleringen stopper i 3 sekunder for å studere rollene.",
    "timerPauseXorName": "⏱️ 2. Pause: Veiskille (3s)",
    "timerPauseXorDoc": "⏸️ AUTOMATISK PAUSE: Gjør deg klar til å velge pil på XOR-gatewayen.",
    "timerPauseGuildName": "⏱️ 4. Pause: Laugsrevisjon (3s)",
    "timerPauseGuildDoc": "⏸️ AUTOMATISK PAUSE: Lauget kontrollerer dokumentasjonen før kroningen!",
    "noteStart": "▶️ TRINN 1: Start!\nTrykk Play (▶) eller klikk\npå starthendelsen for å starte!",
    "noteChooseHero": "👆 TRINN 2: Klikk!\nBrukeroppgaver trenger et\nklikk i Token Game!",
    "noteXorChoice": "🎯 TRINN 3: VELG STI!\nKlikk på en pil:\nTrygg sti (opp) eller\nMørk skog (ned)!",
    "noteTrap": "⚡ FEILTEST!\nKlikk på lynet for å teste\nfellen og eskaleringen!",
    "noteAndSplit": "➕ PARALLELLITET:\nSe 2 tokens vandre samtidig\ni parallelle spor!",
    "noteRestCamp": "⏱️ AUTOMATISK PAUSE:\n3 sekunder pause ved leirbålet\nfør skattkammeret!",
    "noteVault": "📦 DELPROSESS:\nKlikk inne i hvelvet for å\nhente BPMN-amuletten!",
    "noteGrandmaster": "👑 MESTERSTATUS!\nAlle tokens i mål!\nDu mestrer nå BPMN 2.0!",
    "laneDanger": "🐺 Faresone & Unntak (Hendelseshåndtering)",
    "dataLogbookName": "📄 Oppdragslogg & Revisjonsrapport",
    "dataLogbookDoc": "BPMN-dataobjekt: Dokumenterer reisens fremgang og laugets samsvarsrevisjon.",
    "noteWorkshopHint": "🔨 Magisk verksted:\nOpprett en oppgave her\n(f.eks. \"Lage gjenstand\")!"
  },
  "fi": {
    "poolName": "🎮 BPMN-Quest: Interaktiivinen prosessiseikkailu",
    "laneHero": "👤 Sankari & Seikkailija (Käyttäjätaso)",
    "laneWorkshop": "⚙️ Taikapaja & Järjestelmät (Automaatiotaso)",
    "laneGuild": "🏛️ Prosessimestarien kilta (Laadunhallinta & Auditointi)",
    "banner1": "🏰 LUKU 1: Herääminen (Alkutapahtumat, Käyttäjätehtävät & Token-peli)",
    "banner2": "⚔️ LUKU 2: Kohtalon tienhaara (XOR-valinta & Linter-säännöt)",
    "banner3": "🔮 LUKU 3: Kaksoisolennon portaali (AND-rinnakkaisuus & Synkronointi)",
    "banner4": "⏱️ LUKU 4: Ajan sali & Aarrekammio (Ajastin & Aliprosessi)",
    "banner5": "👑 LUKU 5: Mestariprosessit (Laadunvarmistus & Suurmestarin asema)",
    "startName": "Seikkailu aloitettu",
    "startDoc": "👉 Tervetuloa BPMN-Questiin! Käynnistä simulaatio Play-painikkeesta (▶) työkaluriviltä tai napsauta tätä aloitustapahtumaa. Ohutreunainen ympyrä ilmaisee työnkulun alkua.",
    "taskChooseHeroName": "👤 Valitse sankarin luokka ja rooli",
    "taskChooseHeroDoc": "Rooliperiaate BPMN:ssä: Käyttäjätehtävät (👤) kuvaavat ihmisen ja järjestelmän välistä vuorovaikutusta.",
    "taskPackGearName": "✋ Pakkaa reppu & tarkista varusteet",
    "taskPackGearDoc": "Manuaaliset tehtävät (✋) ovat fyysisiä toimia ilman ohjelmistoa (pakkaaminen, allekirjoitus).",
    "gatewayXorName": "✖ Minkä polun valitset?",
    "gatewayXorDoc": "XOR-yhdyskäytävä (Eksklusiivinen ✖): Vain YKSI polku voidaan valita. Valitse haluamasi haara suoraan simulaatiossa!",
    "flowHeroPath": "Turvallinen sankaripolku",
    "flowDarkForest": "Pimeä metsä (Vaara!)",
    "taskStudyLinterName": "📜 Opiskele kultaiset linter-säännöt",
    "taskStudyLinterDoc": "BPMN-Managerin sääntötarkistus:\n1. Yhdistä kaikki elementit.\n2. Älä ylitä altaan rajoja sekvenssivirroilla.\n3. Jokaisella haaralla on oltava pääte.",
    "taskTrollCaveName": "🐺 Hiivi peikkoluolan läpi",
    "taskTrollCaveDoc": "Varoitus! Yllättävä vaara vaanii. BPMN käyttää reunatapahtumia virheiden ja poikkeusten käsittelyyn.",
    "boundaryTrapName": "⚡ Ansa laukesi!",
    "boundaryTrapDoc": "Virhereunatapahtuma: Virheen sattuessa normaali työnkulku keskeytyy ja eskalointi alkaa.",
    "taskCallHelpName": "✉️ Lähetä hätäsignaali",
    "taskCallHelpDoc": "Lähetystehtävä (✉️): Lähettää viestin (sähköposti, webhook) ulkoiselle järjestelmälle.",
    "endEscapedName": "⚫ Vetäytyminen leiriin",
    "endEscapedDoc": "Päätöstapahtuma: Päättää tämän reitin siististi. Paksu reunaviiva merkitsee prosessin loppua.",
    "gatewayMergeXorName": "Polkujen yhdistäminen",
    "gatewayAndSplitName": "➕ Yhdistä voimat (Rinnakkaisportaali)",
    "gatewayAndSplitDoc": "AND-yhdyskäytävä (➕): Jakaa virran rinnakkaisiin polkuihin. Simulaatiossa näet kaksi tokenia yhtä aikaa.",
    "taskCastSpellName": "🛡️ Loitsi suojakenttä (Liiketoimintasäännöt)",
    "taskCastSpellDoc": "Liiketoimintasääntötehtävä: Suorittaa automatisoituja sääntöjä (DMN).",
    "taskForgeSwordName": "⚙️ Tao maaginen miekka",
    "taskForgeSwordDoc": "Palvelutehtävä (⚙️): Täysin automatisoitu järjestelmäkutsu (REST API).",
    "gatewayAndJoinName": "➕ Synkronointisinetti",
    "gatewayAndJoinDoc": "AND-liitos: Odottaa, kunnes KUMPASIKIN rinnakkainen token on saapunut perille.",
    "timerRestName": "⏱️ Lepo nuotion äärellä (3s tauko)",
    "timerRestDoc": "Väliaikatapahtuma (ajastin): Keskeyttää etenemisen määrätyksi ajaksi.",
    "subProcessVaultName": "📦 Tutki aarrekammiota (Aliprosessi)",
    "subProcessVaultDoc": "Upotettu aliprosessi: Kapseloi itsenäisen osaprosessin, jolla on oma alku ja loppu.",
    "subStartName": "Astu kammioon",
    "taskPickLockName": "👤 Tiirikoi arkun lukko",
    "taskPickLockDoc": "Tarkkuustehtävä: Käytä tiirikkaa ja analysoi lukkomekanismia.",
    "taskLootRelicName": "🏆 Lunasta legendaarinen BPMN-amuletti",
    "taskLootRelicDoc": "Amuletti takaa täyden prosessinäkyvyyden ja ISO-standardien noudattamisen!",
    "subEndName": "Poistu kammiosta turvallisesti",
    "taskVerifyGuildName": "⚙️ Vahvista sertifiointi & kirjaa auditointi",
    "taskVerifyGuildDoc": "Laadunvarmistus: Napsauta työkalurivin \"QM-käsikirja\" -painiketta luodaksesi täydellisen käsikirjan!",
    "taskAwardMasterName": "👑 Myönnä BPMN-suurmestarin arvo (Kilta)",
    "taskAwardMasterDoc": "👑 AUDITOINTI HYVÄKSYTTY: Kiltamestari myöntää sinulle virallisen suurmestaridiplomin!",
    "endGrandmasterName": "🏆 Suurmestarin asema saavutettu!",
    "endGrandmasterDoc": "Päättävä lopetustapahtuma: Päättää koko prosessi-instanssin välittömästi. Seikkailu suoritettu!",
    "timerPauseHeroName": "⏱️ 1. Tauko: Hengähdys (3s)",
    "timerPauseHeroDoc": "⏸️ AUTOMAATTINEN TAUKO: Simulaatio pysähtyy 3 sekunniksi roolijakojen tutkimiseen.",
    "timerPauseXorName": "⏱️ 2. Tauko: Tienhaara (3s)",
    "timerPauseXorDoc": "⏸️ AUTOMAATTINEN TAUKO: Valmistaudu valitsemaan polku XOR-portilla klikkaamalla.",
    "timerPauseGuildName": "⏱️ 4. Tauko: Kiltatarkastus (3s)",
    "timerPauseGuildDoc": "⏸️ AUTOMAATTINEN TAUKO: Kilta tarkastaa laadun ennen mestarin arvon myöntämistä!",
    "noteStart": "▶️ VAIHE 1: Aloita!\nPaina Play (▶) tai klikkaa\naloitusympyrää!",
    "noteChooseHero": "👆 VAIHE 2: Klikkaa!\nKäyttäjätehtävät vaativat\nklikkauksen Token Gamessa!",
    "noteXorChoice": "🎯 VAIHE 3: VALITSE!\nKlikkaa nuolta:\nTurvallinen polku (ylä) tai\nPimeä metsä (ala)!",
    "noteTrap": "⚡ VIRHETESTI!\nKlikkaa salamaa laukaistaksesi\nansan ja hätäpolun!",
    "noteAndSplit": "➕ RINNAKKAISUUS:\nKatso kuinka 2 tokenia liikkuu\nsamassa tahdissa rinnakkain!",
    "noteRestCamp": "⏱️ AUTOMAATTINEN TAUKO:\n3 sekunnin lepo nuotion\näärellä ennen aarrekammiota!",
    "noteVault": "📦 ALIPROSESSI:\nKlikkaa holvin tehtävää\nhakeaksesi legendaarisen\namuletin!",
    "noteGrandmaster": "👑 MESTARUUS SAAVUTETTU!\nKaikki tokenit maalissa!\nBPMN 2.0 hallussa täysin!",
    "laneDanger": "🐺 Vaaravyöhyke & Poikkeukset (Häiriönhallinta)",
    "dataLogbookName": "📄 Tehtäväloki & Auditointiraportti",
    "dataLogbookDoc": "BPMN-tieto-objekti: Dokumentoi matkan etenemisen ja killan vaatimustenmukaisuusarvioinnin.",
    "noteWorkshopHint": "🔨 Taikapaja:\nLuo tehtävä tähän\n(esim. \"Valmista esine\")!"
  },
  "cs": {
    "poolName": "🎮 BPMN-Quest: Interaktivní procesní dobrodružství",
    "laneHero": "👤 Hrdina a dobrodruh (Uživatelská úroveň)",
    "laneWorkshop": "⚙️ Kouzelnická dílna a systémy (Automatizace)",
    "laneGuild": "🏛️ Cech procesních mistrů (Řízení kvality a audit)",
    "banner1": "🏰 KAPITOLA 1: Probuzení (Počáteční události, Uživatelské úkoly a Simulace tokenů)",
    "banner2": "⚔️ KAPITOLA 2: Rozcestí osudu (Rozhodování XOR a Pravidla linteru)",
    "banner3": "🔮 KAPITOLA 3: Portál duplikace (Paralelismus AND a Synchronizace)",
    "banner4": "⏱️ KAPITOLA 4: Síň času a Pokladnice (Časovač a Podproces)",
    "banner5": "👑 KAPITOLA 5: Síň mistrů (Audit kvality a Titul velmistra)",
    "startName": "Dobrodružství zahájeno",
    "startDoc": "👉 Vítejte v BPMN-Questu! Spusťte simulaci tokenů pomocí tlačítka Přehrát (▶) na horní liště nebo klikněte přímo na tuto počáteční událost.",
    "taskChooseHeroName": "👤 Vybrat třídu hrdiny a roli",
    "taskChooseHeroDoc": "Princip rolí v BPMN: Uživatelské úkoly (👤) představují lidskou interakci se systémy. Plavecká dráha určuje roli.",
    "taskPackGearName": "✋ Sbalit batoh a zkontrolovat výstroj",
    "taskPackGearDoc": "Manuální úkoly (✋) jsou fyzické činnosti bez zapojení softwaru (balení, podpis).",
    "gatewayXorName": "✖ Kterou cestu zvolíš?",
    "gatewayXorDoc": "Brána XOR (Exkluzivní ✖): Lze vybrat přesně JEDNU cestu. V simulaci tokenů klikněte na požadovanou větev!",
    "flowHeroPath": "Bezpečná stezka hrdiny",
    "flowDarkForest": "Temný hvozd (Nebezpečí!)",
    "taskStudyLinterName": "📜 Prostudovat zlatá pravidla linteru",
    "taskStudyLinterDoc": "Ověření linterem v BPMN-Manageru:\n1. Všechny uzly musí být propojeny.\n2. Toky nesmí překračovat hranice bazénu.\n3. Každá větev musí končit událostí.",
    "taskTrollCaveName": "🐺 Proplížit se trollí jeskyní",
    "taskTrollCaveDoc": "Pozor! Zde hrozí incident. BPMN používá hraniční události pro zachycení výjimek, chyb a vypršení času.",
    "boundaryTrapName": "⚡ Past sklapla!",
    "boundaryTrapDoc": "Chybová hraniční událost: Při výjimce se normální průběh přeruší a aktivuje se eskalační cesta.",
    "taskCallHelpName": "✉️ Vyslat nouzový signál",
    "taskCallHelpDoc": "Odesílací úkol (✉️): Odešle zprávu (e-mail, webhook) externímu systému.",
    "endEscapedName": "⚫ Ústup do tábora",
    "endEscapedDoc": "Konečná událost: Řádně ukončí tuto větev. Tlusté ohraničení značí konec toku.",
    "gatewayMergeXorName": "Sloučení cest",
    "gatewayAndSplitName": "➕ Spojit síly (Paralelní portál)",
    "gatewayAndSplitDoc": "Brána AND (➕): Rozdělí tok do paralelních cest! V simulaci uvidíte dva tokeny současně.",
    "taskCastSpellName": "🛡️ Seslat ochranné kouzlo (Obchodní pravidla)",
    "taskCastSpellDoc": "Úkol obchodních pravidel: Provádí automatizovaná pravidla (DMN).",
    "taskForgeSwordName": "⚙️ Vykovat kouzelný meč",
    "taskForgeSwordDoc": "Servisní úkol (⚙️): Plně automatizované volání systému (REST API, mikroslužba).",
    "gatewayAndJoinName": "➕ Pečeť synchronizace",
    "gatewayAndJoinDoc": "Sloučení AND: Čeká, dokud nedorazí OBA paralelní tokeny, než proces pokračuje.",
    "timerRestName": "⏱️ Odpočinek u táboráku (Pauza 3 s)",
    "timerRestDoc": "Mezilehlý časovač: Pozastaví tok na stanovenou dobu. Sledujte odpočet živě v simulaci!",
    "subProcessVaultName": "📦 Prozkoumat pokladnici (Podproces)",
    "subProcessVaultDoc": "Vložený podproces: Zapouzdřuje složený dílčí proces s vlastním začátkem a koncem.",
    "subStartName": "Vstoupit do krypty",
    "taskPickLockName": "👤 Vypáčit zámek truhly",
    "taskPickLockDoc": "Přesný úkol: Použijte paklíč a analyzujte zámkový mechanismus.",
    "taskLootRelicName": "🏆 Získat legendární amulet BPMN",
    "taskLootRelicDoc": "Amulet zajišťuje 100% přehlednost procesu a shodu s normami ISO!",
    "subEndName": "Bezpečně opustit kryptu",
    "taskVerifyGuildName": "⚙️ Ověřit certifikaci kvality a zapsat audit",
    "taskVerifyGuildDoc": "Validace kvality: Kliknutím na \"Příručka QM\" v horní liště vygenerujete kompletní auditní příručku!",
    "taskAwardMasterName": "👑 Udělit titul velmistra BPMN (Cech)",
    "taskAwardMasterDoc": "👑 AUDIT ÚSPĚŠNÝ: Cechmistr vám slavnostně uděluje diplom velmistra BPMN!",
    "endGrandmasterName": "🏆 Dosažen status velmistra!",
    "endGrandmasterDoc": "Terminační konečná událost: Okamžitě ukončí celou instanci procesu. Dobrodružství je dokončeno!",
    "timerPauseHeroName": "⏱️ 1. Pauza: Oddech (3s)",
    "timerPauseHeroDoc": "⏸️ AUTOMATICKÁ PAUZA: Simulace se zastaví na 3 sekundy k prostudování plaveckých drah.",
    "timerPauseXorName": "⏱️ 2. Pauza: Rozcestí (3s)",
    "timerPauseXorDoc": "⏸️ AUTOMATICKÁ PAUZA: Připravte se kliknout na jednu ze šipek brány XOR.",
    "timerPauseGuildName": "⏱️ 4. Pauza: Kontrola cechu (3s)",
    "timerPauseGuildDoc": "⏸️ AUTOMATICKÁ PAUZA: Cech prověřuje kvalitu před udělením titulu Velmistra!",
    "noteStart": "▶️ KROK 1: Start!\nStiskněte Play (▶) nebo\nklikněte na počáteční událost!",
    "noteChooseHero": "👆 KROK 2: Klikněte!\nUživatelské úkoly vyžadují\nkliknutí v Token Game!",
    "noteXorChoice": "🎯 KROK 3: VOLBA!\nKlikněte na šipku:\nBezpečná stezka (nahoru) či\nTemný les (dolů)!",
    "noteTrap": "⚡ TEST CHYBY!\nKlikněte na blesk pro\nspuštění pasti a eskalace!",
    "noteAndSplit": "➕ SOUBĚŽNOST:\nSledujte 2 tokeny plynoucí\nsoučasně ve dvou větvích!",
    "noteRestCamp": "⏱️ AUTOMATICKÁ PAUZA:\n3 sekundy odpočinku u táboráku\nk nabrání sil!",
    "noteVault": "📦 PODPROCES:\nKlikněte v klenotnici na truhlu\na získejte amulet BPMN!",
    "noteGrandmaster": "👑 VELMISTR!\nVšechny tokeny dorazily!\nBPMN 2.0 úspěšně zvládnuto!",
    "laneDanger": "🐺 Nebezpečná zóna a výjimky (Správa incidentů)",
    "dataLogbookName": "📄 Deník úkolů a zpráva o auditu",
    "dataLogbookDoc": "Datový objekt BPMN: Zaznamenává průběh cesty a audit shody cechu.",
    "noteWorkshopHint": "🔨 Magická dílna:\nVytvořte zde úkol\n(např. \"Vyrobit artefakt\")!"
  },
  "tr": {
    "poolName": "🎮 BPMN-Quest: İnteraktif Süreç Macerası",
    "laneHero": "👤 Kahraman ve Maceracı (Kullanıcı Düzeyi)",
    "laneWorkshop": "⚙️ Büyü Atölyesi ve Sistemler (Otomasyon)",
    "laneGuild": "🏛️ Süreç Ustaları Loncası (Kalite Yönetimi ve Denetim)",
    "banner1": "🏰 BÖLÜM 1: Uyanış (Başlangıç Olayları, Kullanıcı Görevleri ve Simülasyon)",
    "banner2": "⚔️ BÖLÜM 2: Kader Kavşağı (XOR Kararı ve Linter Kuralları)",
    "banner3": "🔮 BÖLÜM 3: Çoğaltma Portalı (AND Paralelliği ve Senkronizasyon)",
    "banner4": "⏱️ BÖLÜM 4: Zaman Salonu ve Hazine Mahzeni (Zamanlayıcı ve Alt Süreç)",
    "banner5": "👑 BÖLÜM 5: Ustalar Loncası (Kalite Denetimi ve Büyük Usta Unvanı)",
    "startName": "Macera Başladı",
    "startDoc": "👉 BPMN-Quest macerasına hoş geldiniz! Üst araç çubuğundaki Oynat düğmesiyle (▶) simülasyonu başlatın veya bu başlangıç olayına tıklayın.",
    "taskChooseHeroName": "👤 Kahraman Sınıfını ve Rolünü Seç",
    "taskChooseHeroDoc": "BPMN Rol İlkesi: Kullanıcı Görevleri (👤) insan-sistem etkileşimlerini temsil eder. Kulvar sorumlu rolü belirler.",
    "taskPackGearName": "✋ Sırt Çantasını Hazırla ve Ekipmanı İncele",
    "taskPackGearDoc": "Manuel Görevler (✋) yazılım olmadan gerçekleştirilen fiziksel faaliyetlerdir (paketleme, imzalama).",
    "gatewayXorName": "✖ Hangi Yolu Seçiyorsun?",
    "gatewayXorDoc": "XOR Ağ Geçidi (Özel ✖): Yalnızca BİR dal seçilebilir. Simülasyonda istediğiniz kola tıklayarak akışı yönlendirin!",
    "flowHeroPath": "Güvenli Kahraman Yolu",
    "flowDarkForest": "Karanlık Orman (Tehlike!)",
    "taskStudyLinterName": "📜 Altın Linter Kurallarını İncele",
    "taskStudyLinterDoc": "BPMN-Manager Gerçek Zamanlı Kural Denetimi:\n1. Tüm düğümler bağlı olmalıdır.\n2. Akışlar havuz sınırlarını aşamaz.\n3. Her dal bir bitiş olayına ulaşmalıdır.",
    "taskTrollCaveName": "🐺 Trol Mağarasından Sessizce Geç",
    "taskTrollCaveDoc": "Dikkat! Burada bir tehlike pusuda bekliyor. BPMN, istisnaları yakalamak için sınır olaylarını kullanır.",
    "boundaryTrapName": "⚡ Tuzak Tetiklendi!",
    "boundaryTrapDoc": "Hata Sınır Olayı: Hata oluştuğunda normal akış kesilir ve eskalasyon yoluna geçilir.",
    "taskCallHelpName": "✉️ İmdat Sinyali Gönder",
    "taskCallHelpDoc": "Gönderim Görevi (✉️): Harici bir sisteme mesaj (e-posta, uyarı) iletir.",
    "endEscapedName": "⚫ Ana Kampa Geri Çekilme",
    "endEscapedDoc": "Bitiş Olayı: Bu dalı sonlandırır. Kalın kenarlık sürecin sonunu belirtir.",
    "gatewayMergeXorName": "Yol Birleştirme",
    "gatewayAndSplitName": "➕ Güçleri Birleştir (Paralel Portal)",
    "gatewayAndSplitDoc": "AND Ağ Geçidi (➕): Akışı paralel kollara böler! Simülasyonda aynı anda hareket eden iki simge görürsünüz.",
    "taskCastSpellName": "🛡️ Koruma Büyüsü Yap (İş Kuralları)",
    "taskCastSpellDoc": "İş Kuralı Görevi: Otomatik kuralları (DMN) yürütür. Özellikler panelinde kuralları yapılandırabilirsiniz.",
    "taskForgeSwordName": "⚙️ Büyülü Kılıç Döv",
    "taskForgeSwordDoc": "Servis Görevi (⚙️): İnsan müdahalesi gerektirmeyen tam otomatik sistem çağrısı (REST API).",
    "gatewayAndJoinName": "➕ Senkronizasyon Mührü",
    "gatewayAndJoinDoc": "AND Birleştirme: Süreç ilerlemeden önce HER İKİ paralel simgenin de ulaşmasını bekler.",
    "timerRestName": "⏱️ Kamp Ateşinde Dinlenme (3 sn Mola)",
    "timerRestDoc": "Ara Zamanlayıcı: Akışı belirli bir süre duraklatır. Simülasyonda geri sayımı canlı izleyin!",
    "subProcessVaultName": "📦 Hazine Mahzenini Keşfet (Alt Süreç)",
    "subProcessVaultDoc": "Gömülü Alt Süreç: Kendi başlangıç ve bitişine sahip bağımsız bir alt akışı kapsüller.",
    "subStartName": "Mahzene Gir",
    "taskPickLockName": "👤 Sandık Kilidini Aç",
    "taskPickLockDoc": "Hassas görev: Maymuncuk kullanın ve kilit mekanizmasını inceleyin.",
    "taskLootRelicName": "🏆 Efsanevi BPMN Tılsımını Al",
    "taskLootRelicDoc": "Tılsım %100 süreç şeffaflığı ve standart uyumluluğu sağlar!",
    "subEndName": "Mahzenden Güvenle Çık",
    "taskVerifyGuildName": "⚙️ Kalite Doğrulamasını Yap ve Günlüğü Kaydet",
    "taskVerifyGuildDoc": "Kalite Denetimi: Üstteki \"QM El Kitabı\" butonuna tıklayarak denetime hazır bir rapor oluşturun!",
    "taskAwardMasterName": "👑 BPMN Büyükusta Unvanı Verilmesi (Lonca)",
    "taskAwardMasterDoc": "👑 DENETİM BAŞARILI: Lonca Ustası size resmen Büyükusta diplomasını takdim ediyor!",
    "endGrandmasterName": "🏆 Büyük Usta Statüsüne Ulaşıldı!",
    "endGrandmasterDoc": "Sonlandırıcı Bitiş Olayı: Tüm süreci derhal tamamlar. Macera başarıyla sonuçlandı!",
    "timerPauseHeroName": "⏱️ 1. Mola: Nefeslenme (3s)",
    "timerPauseHeroDoc": "⏸️ OTOMATİK MOLA: Simülasyon kulvar rollerini incelemeniz için 3 saniye durur.",
    "timerPauseXorName": "⏱️ 2. Mola: Yol ayrımı (3s)",
    "timerPauseXorDoc": "⏸️ OTOMATİK MOLA: Hazır olun! XOR kapısında bir oka tıklayarak yol seçeceksiniz.",
    "timerPauseGuildName": "⏱️ 4. Mola: Lonca denetimi (3s)",
    "timerPauseGuildDoc": "⏸️ OTOMATİK MOLA: Büyük Usta unvanı öncesi kalite kontrolü!",
    "noteStart": "▶️ ADIM 1: Başla!\nÜstteki Play (▶) butonuna veya\nbaşlangıç çemberine tıklayın!",
    "noteChooseHero": "👆 ADIM 2: Tıkla!\nKullanıcı görevleri Token Game'de\ntıklama gerektirir!",
    "noteXorChoice": "🎯 ADIM 3: YOL SEÇ!\nBir oka tıkla:\nGüvenli yol (üst) VEYA\nKaranlık orman (alt)!",
    "noteTrap": "⚡ HATA TESTİ!\nTuzak ve acil durum akışını\ntetiklemek için şimşeğe tıkla!",
    "noteAndSplit": "➕ PARALELLİK:\n2 tokenin aynı anda iki kolda\nbirlikte aktığını izleyin!",
    "noteRestCamp": "⏱️ OTOMATİK MOLA:\nHazine odasından önce kamp\nateşinde 3 saniyelik mola!",
    "noteVault": "📦 ALT SÜREÇ:\nBPMN tılsımını almak için\nkasa içindeki göreve tıkla!",
    "noteGrandmaster": "👑 GÖREV TAMAMLANDI!\nTüm tokenler ulaştı!\nBPMN 2.0 ustalığı kazanıldı!",
    "laneDanger": "🐺 Tehlike Bölgesi ve İstisnalar (Olay Yönetimi)",
    "dataLogbookName": "📄 Görev Günlüğü ve Denetim Raporu",
    "dataLogbookDoc": "BPMN Veri Nesnesi: Yolculuk ilerlemesini ve loncanın kalite denetimini belgeler.",
    "noteWorkshopHint": "🔨 Büyülü Atölye:\nBurada bir görev oluşturun\n(örn. \"Eser Üret\")!"
  },
  "el": {
    "poolName": "🎮 BPMN-Quest: Η Διαδραστική Περιπέτεια Διεργασιών",
    "laneHero": "👤 Ήρωας & Εξερευνητής (Επίπεδο Χρήστη)",
    "laneWorkshop": "⚙️ Μαγικό Εργαστήριο & Συστήματα (Αυτοματισμός)",
    "laneGuild": "🏛️ Συντεχνία των Ειδικών Διεργασιών (Διασφάλιση Ποιότητας)",
    "banner1": "🏰 ΚΕΦΑΛΑΙΟ 1: Η Αφύπνιση (Γεγονότα Έναρξης, Εργασίες & Προσομοίωση)",
    "banner2": "⚔️ ΚΕΦΑΛΑΙΟ 2: Το Σταυροδρόμι του Πεπρωμένου (Απόφαση XOR & Κανόνες Linter)",
    "banner3": "🔮 ΚΕΦΑΛΑΙΟ 3: Η Πύλη της Διπλασίας (Παραλληλία AND & Συγχρονισμός)",
    "banner4": "⏱️ ΚΕΦΑΛΑΙΟ 4: Η Αίθουσα του Χρόνου & Το Θησαυροφυλάκιο (Χρονόμετρο & Υποδιεργασία)",
    "banner5": "👑 ΚΕΦΑΛΑΙΟ 5: Συντεχνία των Ειδικών (Έλεγχος Ποιότητας & Τίτλος Grandmaster)",
    "startName": "Η Περιπέτεια Ξεκίνησε",
    "startDoc": "👉 Καλώς ήρθατε στο BPMN-Quest! Ξεκινήστε την προσομοίωση με το κουμπί Αναπαραγωγή (▶) στην επάνω εργαλειοθήκη.",
    "taskChooseHeroName": "👤 Επιλογή Κλάσης Ήρωα & Ρόλου",
    "taskChooseHeroDoc": "Αρχή ρόλων στο BPMN: Οι Εργασίες Χρήστη (👤) αντιπροσωπεύουν ανθρώπινη αλληλεπίδραση με συστήματα.",
    "taskPackGearName": "✋ Προετοιμασία Σακιδίου & Έλεγχος Εξοπλισμού",
    "taskPackGearDoc": "Οι χειροκίνητες εργασίες (✋) είναι φυσικές δραστηριότητες χωρίς χρήση λογισμικού (πακετάρισμα, έλεγχος).",
    "gatewayXorName": "✖ Ποιο Μονοπάτι Επιλέγεις;",
    "gatewayXorDoc": "Πύλη XOR (Αποκλειστική ✖): Μόνο ΕΝΑ μονοπάτι μπορεί να επιλεγεί.",
    "flowHeroPath": "Ασφαλές Μονοπάτι",
    "flowDarkForest": "Σκοτεινό Δάσος (Κίνδυνος!)",
    "taskStudyLinterName": "📜 Μελέτη των Χρυσών Κανόνων Linter",
    "taskStudyLinterDoc": "Έλεγχος Linter στο BPMN-Manager:\n1. Όλοι οι κόμβοι πρέπει να συνδέονται.\n2. Οι ροές δεν διασχίζουν όρια δεξαμενής.\n3. Κάθε διακλάδωση καταλήγει σε γεγονός τέλους.",
    "taskTrollCaveName": "🐺 Πέρασμα από τη Σπηλιά των Τρολ",
    "taskTrollCaveDoc": "Προσοχή! Εδώ παραμονεύει κίνδυνος. Το BPMN χρησιμοποιεί γεγονότα ορίων για διαχείριση εξαιρέσεων.",
    "boundaryTrapName": "⚡ Η Παγίδα Ενεργοποιήθηκε!",
    "boundaryTrapDoc": "Γεγονός Ορίου Σφάλματος: Σε περίπτωση εξαίρεσης, η κανονική ροή διακόπτεται και ακολουθείται η διαδρομή κλιμάκωσης.",
    "taskCallHelpName": "✉️ Αποστολή Σήματος Κινδύνου",
    "taskCallHelpDoc": "Εργασία Αποστολής (✉️): Αποστέλλει μήνυμα (email, ειδοποίηση) σε εξωτερικό σύστημα.",
    "endEscapedName": "⚫ Υποχώρηση στη Βάση",
    "endEscapedDoc": "Γεγονός Τέλους: Τερματίζει αυτόν τον κλάδο ομαλά.",
    "gatewayMergeXorName": "Συγχώνευση Διαδρομών",
    "gatewayAndSplitName": "➕ Ένωση Δυνάμεων (Παράλληλη Πύλη)",
    "gatewayAndSplitDoc": "Πύλη AND (➕): Χωρίζει τη ροή σε παράλληλα μονοπάτια. Δύο διακριτικά κινούνται ταυτόχρονα.",
    "taskCastSpellName": "🛡️ Ξόρκι Προστασίας (Επιχειρηματικοί Κανόνες)",
    "taskCastSpellDoc": "Εργασία Επιχειρηματικών Κανόνων: Εκτελεί αυτοματοποιημένους κανόνες (DMN).",
    "taskForgeSwordName": "⚙️ Σφυρηλάτηση Μαγικού Σπαθιού",
    "taskForgeSwordDoc": "Εργασία Υπηρεσίας (⚙️): Πλήρως αυτοματοποιημένη κλήση συστήματος (REST API).",
    "gatewayAndJoinName": "➕ Σφραγίδα Συγχρονισμού",
    "gatewayAndJoinDoc": "Συγχώνευση AND: Αναμένει την άφιξη ΚΑΙ ΤΩΝ ΔΥΟ παράλληλων διακριτικών.",
    "timerRestName": "⏱️ Ανάπαυση στη Φωτιά (Παύση 3 δευτ.)",
    "timerRestDoc": "Ενδιάμεσο Χρονόμετρο: Διακόπτει προσωρινά τη ροή για καθορισμένο χρόνο.",
    "subProcessVaultName": "📦 Εξερεύνηση Θησαυροφυλακίου (Υποδιεργασία)",
    "subProcessVaultDoc": "Ενσωματωμένη Υποδιεργασία: Περιέχει αυτόνομη ροή με δική της αρχή και τέλος.",
    "subStartName": "Είσοδος στο Θησαυροφυλάκιο",
    "taskPickLockName": "👤 Παραβίαση Κλειδαριάς",
    "taskPickLockDoc": "Εργασία ακριβείας: Ανάλυση του μηχανισμού της κλειδαριάς.",
    "taskLootRelicName": "🏆 Ανάκτηση Θρυλικού Φυλαχτού BPMN",
    "taskLootRelicDoc": "Το φυλαχτό εξασφαλίζει απόλυτη διαφάνεια και συμμόρφωση ISO!",
    "subEndName": "Ασφαλής Έξοδος",
    "taskVerifyGuildName": "⚙️ Επαλήθευση Πιστοποίησης Ποιότητας",
    "taskVerifyGuildDoc": "Έλεγχος ποιότητας: Πατήστε \"Εγχειρίδιο QM\" για εξαγωγή πλήρους αναφοράς ελέγχου!",
    "taskAwardMasterName": "👑 Απονομή Τίτλου Μεγάλου Διδασκάλου BPMN (Συντεχνία)",
    "taskAwardMasterDoc": "👑 ΕΠΙΤΥΧΗΣ ΕΛΕΓΧΟΣ: Ο Επικεφαλής της Συντεχνίας σας απονέμει επίσημα το δίπλωμα!",
    "endGrandmasterName": "🏆 Επιτεύχθηκε η Κατάσταση Grandmaster!",
    "endGrandmasterDoc": "Γεγονός Τερματισμού: Ολοκληρώνει αμέσως ολόκληρη τη διεργασία.",
    "timerPauseHeroName": "⏱️ 1η Παύση: Ανάσχεση (3δ)",
    "timerPauseHeroDoc": "⏸️ ΑΥΤΟΜΑΤΗ ΠΑΥΣΗ: Η προσομοίωση σταματά για 3δ για παρατήρηση των ρόλων.",
    "timerPauseXorName": "⏱️ 2η Παύση: Σταυροδρόμι (3δ)",
    "timerPauseXorDoc": "⏸️ ΑΥΤΟΜΑΤΗ ΠΑΥΣΗ: Ετοιμαστείτε να κάνετε κλικ σε ένα βέλος στην πύλη XOR.",
    "timerPauseGuildName": "⏱️ 4η Παύση: Έλεγχος (3δ)",
    "timerPauseGuildDoc": "⏸️ ΑΥΤΟΜΑΤΗ ΠΑΥΣΗ: Η Συντεχνία ελέγχει τη διαδικασία πριν τη στέψη!",
    "noteStart": "▶️ ΒΗΜΑ 1: Έναρξη!\nΠατήστε Play (▶) ή κάντε κλικ\nστο αρχικό συμβάν!",
    "noteChooseHero": "👆 ΒΗΜΑ 2: Κλικ!\nΟι εργασίες χρήστη απαιτούν\nκλικ στο Token Game!",
    "noteXorChoice": "🎯 ΒΗΜΑ 3: ΕΠΙΛΟΓΗ!\nΚάντε κλικ σε ένα βέλος:\nΑσφαλές μονοπάτι ή Δάσος!",
    "noteTrap": "⚡ ΔΟΚΙΜΗ ΣΦΑΛΜΑΤΟΣ!\nΚάντε κλικ στον κεραυνό για\nενεργοποίηση παγίδας!",
    "noteAndSplit": "➕ ΠΑΡΑΛΛΗΛΙΣΜΟΣ:\nΔείτε 2 tokens να κινούνται\nταυτόχρονα παράλληλα!",
    "noteRestCamp": "⏱️ ΑΥΤΟΜΑΤΗ ΠΑΥΣΗ:\n3 δευτερόλεπτα ανάπαυσης στη\nφωτιά για ανασύνταξη!",
    "noteVault": "📦 ΥΠΟΔΙΕΡΓΑΣΙΑ:\nΚάντε κλικ στο θησαυροφυλάκιο\nγια το φυλακτό BPMN!",
    "noteGrandmaster": "👑 ΜΕΓΑΛΟΣ ΔΙΔΑΣΚΑΛΟΣ!\nΌλα τα tokens ολοκληρώθηκαν!\nBPMN 2.0 κατακτήθηκε πλήρως!",
    "laneDanger": "🐺 Ζώνη Κινδύνου & Εξαιρέσεις (Διαχείριση Περιστατικών)",
    "dataLogbookName": "📄 Ημερολόγιο Αποστολής & Έκθεση Ελέγχου",
    "dataLogbookDoc": "Αντικείμενο δεδομένων BPMN: Καταγράφει την πρόοδο του ταξιδιού και τον έλεγχο της Συντεχνίας.",
    "noteWorkshopHint": "🔨 Εργαστήριο:\nΔημιουργήστε μια εργασία εδώ\n(π.χ. \"Κατασκευή αντικειμένου\")!"
  },
  "hu": {
    "poolName": "🎮 BPMN-Quest: Az Interaktív Folyamat-Kaland",
    "laneHero": "👤 Hős és Kalandor (Felhasználói szint)",
    "laneWorkshop": "⚙️ Varázsműhely és Rendszerek (Automatizálás)",
    "laneGuild": "🏛️ Folyamatmesterek Céhe (Minőségirányítás és Audit)",
    "banner1": "🏰 1. FEJEZET: Az Ébredés (Kezdő események, Felhasználói feladatok és Szimuláció)",
    "banner2": "⚔️ 2. FEJEZET: A Végzet Útelágazása (XOR Döntés és Linter Szabályok)",
    "banner3": "🔮 3. FEJEZET: A Kettőződés Portálja (AND Párhuzamosság és Szinkronizáció)",
    "banner4": "⏱️ 4. FEJEZET: Az Idő Csarnoka és a Kincstár (Időzítő és Alfolyamat)",
    "banner5": "👑 5. FEJEZET: Mesterek Céhe (Minőségi Audit és Nagymesteri Rang)",
    "startName": "Kaland elindítva",
    "startDoc": "👉 Üdvözlünk a BPMN-Questben! Indítsd el a szimulációt a felső sáv Lejátszás (▶) gombjával vagy kattints a kezdő eseményre.",
    "taskChooseHeroName": "👤 Hősi osztály és szerepkör kiválasztása",
    "taskChooseHeroDoc": "Szerepkör elv a BPMN-ben: A felhasználói feladatok (👤) emberi interakciót jelölnek. A sáv határozza meg a felelőst.",
    "taskPackGearName": "✋ Hátizsák bepakolása és felszerelés ellenőrzése",
    "taskPackGearDoc": "A manuális feladatok (✋) szoftver nélküli fizikai tevékenységek (csomagolás, aláírás).",
    "gatewayXorName": "✖ Melyik utat választod?",
    "gatewayXorDoc": "XOR átjáró (Kizárólagos ✖): Pontosan EGY ág választható. A szimulációban kattintással irányíthatod az áramlást!",
    "flowHeroPath": "Biztonságos hősút",
    "flowDarkForest": "Sötét erdő (Veszély!)",
    "taskStudyLinterName": "📜 Az arany linter-szabályok tanulmányozása",
    "taskStudyLinterDoc": "Linter ellenőrzés a BPMN-Managerben:\n1. Minden csomópontnak csatlakoznia kell.\n2. A folyamatvonalak nem keresztezhetik a medencehatárokat.\n3. Minden ágnak végpontba kell futnia.",
    "taskTrollCaveName": "🐺 Átosonás a trollbarlangon",
    "taskTrollCaveDoc": "Figyelem! Váratlan incidens fenyeget. A BPMN határ menti eseményeket használ a kivételek kezelésére.",
    "boundaryTrapName": "⚡ Csapda aktiválva!",
    "boundaryTrapDoc": "Hiba-határesemény: Kivétel esetén a normál folyamat megszakad és az eszkalációs út lép érvénybe.",
    "taskCallHelpName": "✉️ Vészjelzés küldése",
    "taskCallHelpDoc": "Küldési feladat (✉️): Üzenetet (e-mail, értesítés) továbbít egy külső rendszernek.",
    "endEscapedName": "⚫ Visszavonulás az alaptáborba",
    "endEscapedDoc": "Vég-esemény: Tisztán lezárja ezt az ágat. A vastag szegély a folyamat végét jelöli.",
    "gatewayMergeXorName": "Utak egyesítése",
    "gatewayAndSplitName": "➕ Erők egyesítése (Párhuzamos portál)",
    "gatewayAndSplitDoc": "AND átjáró (➕): Párhuzamos utakra osztja a folyamatot! A szimulációban két zseton halad egyszerre.",
    "taskCastSpellName": "🛡️ Védővarázslat idézése (Üzleti szabályok)",
    "taskCastSpellDoc": "Üzleti szabály feladat: Automatizált szabályokat hajt végre (DMN).",
    "taskForgeSwordName": "⚙️ Varázskard kovácsolása",
    "taskForgeSwordDoc": "Szolgáltatási feladat (⚙️): Teljesen automatizált rendszerhívás (REST API).",
    "gatewayAndJoinName": "➕ Szinkronizáció pecsétje",
    "gatewayAndJoinDoc": "AND egyesítés: Megvárja, amíg MINDKÉT párhuzamos zseton megérkezik a folytatás előtt.",
    "timerRestName": "⏱️ Pihenés a tábortűznél (3 mp szünet)",
    "timerRestDoc": "Közbenső időzítő: Meghatározott időre szünetelteti a folyamatot. Figyeld a visszaszámlálást a szimulációban!",
    "subProcessVaultName": "📦 Kincstár felfedezése (Alfolyamat)",
    "subProcessVaultDoc": "Beágyazott alfolyamat: Önálló kezdettel és véggel rendelkező összetett folyamatrészt foglal magában.",
    "subStartName": "Belépés a kincstárba",
    "taskPickLockName": "👤 Láda zárjának feltörése",
    "taskPickLockDoc": "Precíziós feladat: Használj álkulcsot és elemezd a zárszerkezetet.",
    "taskLootRelicName": "🏆 A legendás BPMN amulett megszerzése",
    "taskLootRelicDoc": "Az amulett 100%-os folyamat-átláthatóságot és ISO szabványosságot biztosít!",
    "subEndName": "Biztonságos távozás a kincstárból",
    "taskVerifyGuildName": "⚙️ Minőségellenőrzés és audit naplózása",
    "taskVerifyGuildDoc": "Minőségellenőrzés: Kattints a \"QM kézikönyv\" gombra egy teljes auditjelentés exportálásához!",
    "taskAwardMasterName": "👑 BPMN Nagymesteri cím adományozása (Céh)",
    "taskAwardMasterDoc": "👑 AUDIT SIKERES: A Céhmester ünnepélyesen átadja a Nagymesteri oklevelet!",
    "endGrandmasterName": "🏆 Nagymesteri rang elérve!",
    "endGrandmasterDoc": "Befejező vég-esemény: Azonnal lezárja a teljes folyamatpéldányt. A kaland sikeresen befejeződött!",
    "timerPauseHeroName": "⏱️ 1. Szünet: Lélegzetvétel (3mp)",
    "timerPauseHeroDoc": "⏸️ AUTOMATIKUS SZÜNET: A szimuláció 3 másodpercre megáll a szerepek áttekintéséhez.",
    "timerPauseXorName": "⏱️ 2. Szünet: Útjelző (3mp)",
    "timerPauseXorDoc": "⏸️ AUTOMATIKUS SZÜNET: Készülj fel egy nyílra kattintani az XOR kapunál.",
    "timerPauseGuildName": "⏱️ 4. Szünet: Céh-ellenőrzés (3mp)",
    "timerPauseGuildDoc": "⏸️ AUTOMATIKUS SZÜNET: A céh ellenőrzi a minőséget a nagymesteri cím előtt!",
    "noteStart": "▶️ 1. LÉPÉS: Indítás!\nKattints a Play (▶) gombra\nvagy a kezdő eseményre!",
    "noteChooseHero": "👆 2. LÉPÉS: Kattints!\nA felhasználói feladatok\nkattintást igényelnek!",
    "noteXorChoice": "🎯 3. LÉPÉS: DÖNTÉS!\nKattints egy nyílra:\nBiztonságos út vagy Sötét erdő!",
    "noteTrap": "⚡ HIBATESZT!\nKattints a villámra a csapda és\neszkaláció kiváltásához!",
    "noteAndSplit": "➕ PÁRHUZAMOSSÁG:\nNézd, ahogy 2 token egyszerre\nhalad két párhuzamos ágon!",
    "noteRestCamp": "⏱️ AUTOMATIKUS SZÜNET:\n3 másodperc pihenő a tábortűznél\na kincstár előtt!",
    "noteVault": "📦 ALFOLYAMAT:\nKattints a kincstárban a ládára\na BPMN amulettért!",
    "noteGrandmaster": "👑 KÜLDETÉS TELJESÍTVE!\nMinden token célba ért!\nA BPMN 2.0 elsajátítva!",
    "laneDanger": "🐺 Veszélyzóna és Kivételek (Incidenskezelés)",
    "dataLogbookName": "📄 Küldetésnapló és Auditjelentés",
    "dataLogbookDoc": "BPMN adatobjektum: Rögzíti az utazás előrehaladását és a Céh megfelelőségi auditját.",
    "noteWorkshopHint": "🔨 Varázsműhely:\nHozzon létre itt egy feladatot\n(pl. \"Tárgy készítése\")!"
  },
  "ro": {
    "poolName": "🎮 BPMN-Quest: Aventura Interactivă a Proceselor",
    "laneHero": "👤 Erou și Aventurier (Nivel Utilizator)",
    "laneWorkshop": "⚙️ Atelier Magic și Sisteme (Automatizare)",
    "laneGuild": "🏛️ Breasla Maeștrilor de Proces (Managementul Calității & Audit)",
    "banner1": "🏰 CAPITOLUL 1: Trezirea (Evenimente de Start, Sarcini Utilizator & Simulare)",
    "banner2": "⚔️ CAPITOLUL 2: Răscrucea Destinului (Decizie XOR & Reguli Linter)",
    "banner3": "🔮 CAPITOLUL 3: Portalul Duplicării (Paralelism AND & Sincronizare)",
    "banner4": "⏱️ CAPITOLUL 4: Sala Timpului & Seiful Comorilor (Temporizator & Subproces)",
    "banner5": "👑 CAPITOLUL 5: Breasla Maeștrilor (Audit Calitate & Statut de Mare Maestru)",
    "startName": "Aventură începută",
    "startDoc": "👉 Bun venit la BPMN-Quest! Pornește simularea prin butonul Play (▶) din bara de instrumente sau dă clic direct pe acest eveniment de start.",
    "taskChooseHeroName": "👤 Alege clasa de erou și rolul",
    "taskChooseHeroDoc": "Principiul rolurilor în BPMN: Sarcinile de utilizator (👤) reprezintă interacțiunea umană cu sistemele.",
    "taskPackGearName": "✋ Pregătește rucsacul și verifică echipamentul",
    "taskPackGearDoc": "Sarcinile manuale (✋) sunt activități fizice fără software (împachetare, semnare).",
    "gatewayXorName": "✖ Ce cale alegi?",
    "gatewayXorDoc": "Poarta XOR (Exclusivă ✖): Se poate alege exact O SINGURĂ cale. În simulare, alege direct ramura dorită!",
    "flowHeroPath": "Calea sigură a eroului",
    "flowDarkForest": "Pădurea întunecată (Pericol!)",
    "taskStudyLinterName": "📜 Studiază regulile de aur linter",
    "taskStudyLinterDoc": "Validare linter în BPMN-Manager:\n1. Toate nodurile trebuie conectate.\n2. Fluxurile nu traversează limitele bazinului.\n3. Fiecare ramură trebuie să aibă un eveniment final.",
    "taskTrollCaveName": "🐺 Strecoară-te prin peștera trolilor",
    "taskTrollCaveDoc": "Atenție! Aici pândește un pericol. BPMN folosește evenimente limită pentru a gestiona erorile și excepțiile.",
    "boundaryTrapName": "⚡ Capcană declanșată!",
    "boundaryTrapDoc": "Eveniment limită de eroare: La o excepție, fluxul normal se oprește și se trece pe ramura de escaladare.",
    "taskCallHelpName": "✉️ Trimite semnal de urgență",
    "taskCallHelpDoc": "Sarcină de trimitere (✉️): Transmite un mesaj (email, alertă) către un sistem extern.",
    "endEscapedName": "⚫ Retragere în tabăra de bază",
    "endEscapedDoc": "Eveniment final: Încheie corect această ramură. Bordura groasă indică sfârșitul procesului.",
    "gatewayMergeXorName": "Îmbinare căi",
    "gatewayAndSplitName": "➕ Unirea forțelor (Portal paralel)",
    "gatewayAndSplitDoc": "Poarta AND (➕): Împarte fluxul în căi paralele. În simulare vezi două jetoane avansând simultan.",
    "taskCastSpellName": "🛡️ Lansează vraja de protecție (Reguli de afaceri)",
    "taskCastSpellDoc": "Sarcină de reguli de afaceri: Execută reguli decizionale automatizate (DMN).",
    "taskForgeSwordName": "⚙️ Făurește sabia fermecată",
    "taskForgeSwordDoc": "Sarcină de serviciu (⚙️): Apel de sistem complet automatizat (REST API).",
    "gatewayAndJoinName": "➕ Sigiliul sincronizării",
    "gatewayAndJoinDoc": "Îmbinare AND: Așteaptă sosirea AMBELOR jetoane paralele înainte de a continua.",
    "timerRestName": "⏱️ Odihnă la focul de tabără (Pauză 3s)",
    "timerRestDoc": "Temporizator intermediar: Întrerupe fluxul pentru o durată stabilită.",
    "subProcessVaultName": "📦 Explorează seiful comorilor (Subproces)",
    "subProcessVaultDoc": "Subproces încorporat: Încapsulează un flux compus cu propriul start și sfârșit.",
    "subStartName": "Intră în seif",
    "taskPickLockName": "👤 Sparge încuietoarea cufărului",
    "taskPickLockDoc": "Sarcină de precizie: Folosește șperaclu și analizează mecanismul.",
    "taskLootRelicName": "🏆 Recuperează amuleta legendară BPMN",
    "taskLootRelicDoc": "Amuleta oferă 100% transparență a procesului și conformitate ISO!",
    "subEndName": "Părăsește seiful în siguranță",
    "taskVerifyGuildName": "⚙️ Verifică certificarea QM și înregistrează auditul",
    "taskVerifyGuildDoc": "Validare calitate: Clic pe \"Manual QM\" pentru a genera un raport complet de audit!",
    "taskAwardMasterName": "👑 Acordare Titlu de Mare Maestru BPMN (Breaslă)",
    "taskAwardMasterDoc": "👑 AUDIT PROMOVAT: Marele Maestru al Breslei vă acordă solemn diploma de Mare Maestru!",
    "endGrandmasterName": "🏆 Statut de Mare Maestru atins!",
    "endGrandmasterDoc": "Eveniment final de terminare: Încheie imediat instanța de proces. Aventura este completă!",
    "timerPauseHeroName": "⏱️ Pauza 1: Răgaz (3s)",
    "timerPauseHeroDoc": "⏸️ PAUZĂ AUTOMATĂ: Simularea se oprește 3s pentru a studia culoarele de roluri.",
    "timerPauseXorName": "⏱️ Pauza 2: Răscruce (3s)",
    "timerPauseXorDoc": "⏸️ PAUZĂ AUTOMATĂ: Pregătiți-vă să alegeți o săgeată la poarta XOR.",
    "timerPauseGuildName": "⏱️ Pauza 4: Auditul Breslei (3s)",
    "timerPauseGuildDoc": "⏸️ PAUZĂ AUTOMATĂ: Breasla verifică procesul înainte de acordarea titlului de Mare Maestru!",
    "noteStart": "▶️ PASUL 1: Start!\nApasă Play (▶) sau dă clic\npe evenimentul de start!",
    "noteChooseHero": "👆 PASUL 2: Clic!\nSarcinile de utilizator necesită\nclic în Token Game!",
    "noteXorChoice": "🎯 PASUL 3: ALEGE!\nApasă pe o săgeată:\nCalea sigură (sus) sau\nPădurea întunecată (jos)!",
    "noteTrap": "⚡ TEST DE EROARE!\nDă clic pe fulger pentru a\ndeclanșa capcana și alerta!",
    "noteAndSplit": "➕ PARALELISM:\nPrivește 2 jetoane mișcându-se\nsimultan pe ramuri paralele!",
    "noteRestCamp": "⏱️ PAUZĂ AUTOMATĂ:\n3 secunde de odihnă la focul\nde tabără înainte de tezaur!",
    "noteVault": "📦 SUBPROCES:\nApasă pe sarcina din seif\npentru a recupera amuleta BPMN!",
    "noteGrandmaster": "👑 MARE MAESTRU!\nToate jetoanele au finalizat!\nAi stăpânit pe deplin BPMN 2.0!",
    "laneDanger": "🐺 Zonă de Pericol & Excepții (Gestiunea Incidentelor)",
    "dataLogbookName": "📄 Jurnal de Misiune & Raport de Audit",
    "dataLogbookDoc": "Obiect de date BPMN: Documentează călătoria și auditul de conformitate al Breslei.",
    "noteWorkshopHint": "🔨 Atelier magic:\nCreați o sarcină aici\n(de ex. \"Făurește artefact\")!"
  },
  "uk": {
    "poolName": "🎮 BPMN-Quest: Інтерактивна пригода у світі процесів",
    "laneHero": "👤 Герой та Шукач пригод (Рівень користувача)",
    "laneWorkshop": "⚙️ Магічна майстерня та Системи (Автоматизація)",
    "laneGuild": "🏛️ Гільдія майстрів процесів (Контроль якості та Аудит)",
    "banner1": "🏰 РОЗДІЛ 1: Пробудження (Початкові події, Користувацькі завдання та Симуляція)",
    "banner2": "⚔️ РОЗДІЛ 2: Роздоріжжя долі (Рішення XOR та Правила лінтера)",
    "banner3": "🔮 РОЗДІЛ 3: Портал двійників (Паралелізм AND та Синхронізація)",
    "banner4": "⏱️ РОЗДІЛ 4: Зала часу та Скарбниця (Таймер та Підпроцес)",
    "banner5": "👑 РОЗДІЛ 5: Гільдія майстрів (Аудит якості та Статус Гросмейстера)",
    "startName": "Пригоду розпочато",
    "startDoc": "👉 Ласкаво просимо до BPMN-Quest! Запустіть симуляцію токенів кнопкою Відтворити (▶) або натисніть на цю початкову подію.",
    "taskChooseHeroName": "👤 Обрати клас героя та роль",
    "taskChooseHeroDoc": "Концепція ролей у BPMN: Користувацькі завдання (👤) відображають взаємодію людини із системами.",
    "taskPackGearName": "✋ Зібрати рюкзак та перевірити спорядження",
    "taskPackGearDoc": "Ручні завдання (✋) — це фізичні дії без участі програмного забезпечення (пакування, підпис).",
    "gatewayXorName": "✖ Який шлях ти обираєш?",
    "gatewayXorDoc": "Шлюз XOR (Виключний ✖): Можна обрати лише ОДИН шлях. У симуляції виберіть потрібну гілку клацанням миші!",
    "flowHeroPath": "Безпечний шлях героя",
    "flowDarkForest": "Темний ліс (Небезпека!)",
    "taskStudyLinterName": "📜 Вивчити золоті правила лінтера",
    "taskStudyLinterDoc": "Перевірка лінтером у BPMN-Manager:\n1. Усі вузли мають бути зʼєднані.\n2. Потоки не можуть перетинати межі пулу.\n3. Кожна гілка повинна завершуватися подією.",
    "taskTrollCaveName": "🐺 Прокрастися крізь печеру тролів",
    "taskTrollCaveDoc": "Обережно! Тут чатує небезпека. BPMN використовує граничні події для обробки помилок та винятків.",
    "boundaryTrapName": "⚡ Пастку активовано!",
    "boundaryTrapDoc": "Гранична подія помилки: У разі винятку стандартний потік переривається та активується ескалація.",
    "taskCallHelpName": "✉️ Надіслати сигнал лиха",
    "taskCallHelpDoc": "Завдання надсилання (✉️): Відправляє повідомлення (email, сповіщення) зовнішній системі.",
    "endEscapedName": "⚫ Відступ до базового табору",
    "endEscapedDoc": "Кінцева подія: Завершує цю гілку. Товста рамка позначає кінець процесу.",
    "gatewayMergeXorName": "Обʼєднання шляхів",
    "gatewayAndSplitName": "➕ Обʼєднати сили (Паралельний портал)",
    "gatewayAndSplitDoc": "Шлюз AND (➕): Розділяє потік на паралельні гілки! У симуляції ви побачите два токени одночасно.",
    "taskCastSpellName": "🛡️ Накласти захисне закляття (Бізнес-правила)",
    "taskCastSpellDoc": "Завдання бізнес-правил: Виконує автоматизовані правила прийняття рішень (DMN).",
    "taskForgeSwordName": "⚙️ Викувати чарівний меч",
    "taskForgeSwordDoc": "Сервісне завдання (⚙️): Повністю автоматизований системний виклик (REST API).",
    "gatewayAndJoinName": "➕ Печатка синхронізації",
    "gatewayAndJoinDoc": "Обʼєднання AND: Чекає, поки ОДВА паралельні токени прибудуть, перш ніж продовжити рух.",
    "timerRestName": "⏱️ Відпочинок біля багаття (Пауза 3 с)",
    "timerRestDoc": "Проміжний таймер: Призупиняє потік на визначений час. Спостерігайте відлік у симуляції!",
    "subProcessVaultName": "📦 Дослідити скарбницю (Підпроцес)",
    "subProcessVaultDoc": "Вбудований підпроцес: Інкапсулює складений процес із власним початком і кінцем.",
    "subStartName": "Увійти до скарбниці",
    "taskPickLockName": "👤 Зламати замок скрині",
    "taskPickLockDoc": "Завдання високої точності: Використовуйте відмичку та проаналізуйте механізм.",
    "taskLootRelicName": "🏆 Здобути легендарний амулет BPMN",
    "taskLootRelicDoc": "Амулет гарантує 100% прозорість процесів та відповідність стандартам ISO!",
    "subEndName": "Безпечно залишити скарбницю",
    "taskVerifyGuildName": "⚙️ Перевірити сертифікацію якості та залогувати аудит",
    "taskVerifyGuildDoc": "Контроль якості: Натисніть \"Посібник QM\" на панелі інструментів для експорту повного звіту аудиту!",
    "taskAwardMasterName": "👑 Присвоєння звання Гросмейстера BPMN (Гільдія)",
    "taskAwardMasterDoc": "👑 АУДИТ ПРОЙДЕНО: Голова Гільдії урочисто вручає вам диплом Гросмейстера!",
    "endGrandmasterName": "🏆 Отримано статус Гросмейстера!",
    "endGrandmasterDoc": "Кінцева подія зупинки: Негайно завершує виконання всього екземпляра процесу. Пригоду пройдено!",
    "timerPauseHeroName": "⏱️ 1-ша Пауза: Перепочинок (3с)",
    "timerPauseHeroDoc": "⏸️ АВТОМАТИЧНА ПАУЗА: Симуляція зупиняється на 3с для вивчення ролей.",
    "timerPauseXorName": "⏱️ 2-га Пауза: Роздоріжжя (3с)",
    "timerPauseXorDoc": "⏸️ АВТОМАТИЧНА ПАУЗА: Приготуйтеся натиснути стрілку на шлюзі XOR!",
    "timerPauseGuildName": "⏱️ 4-та Пауза: Аудит Гільдії (3с)",
    "timerPauseGuildDoc": "⏸️ АВТОМАТИЧНА ПАУЗА: Гільдія перевіряє документацію перед врученням звання Гросмейстера!",
    "noteStart": "▶️ КРОК 1: Старт!\nНатисніть Play (▶) або\nпочаткову подію, щоб почати!",
    "noteChooseHero": "👆 КРОК 2: Клікніть!\nЗавдання користувача вимагають\nкліку в Token Game!",
    "noteXorChoice": "🎯 КРОК 3: ВИБІР!\nКлікніть стрілку:\nБезпечний шлях (вгору) чи\nТемний ліс (вниз)!",
    "noteTrap": "⚡ ТЕСТ ПОМИЛКИ!\nКлікніть блискавку для запуску\nпастки та ескалації!",
    "noteAndSplit": "➕ ПАРАЛЕЛЬНІСТЬ:\nПодивіться, як 2 токени\nрухаються одночасно поруч!",
    "noteRestCamp": "⏱️ АВТОМАТИЧНА ПАУЗА:\n3 секунди перепочинку біля\nбагаття перед скарбницею!",
    "noteVault": "📦 ПІДПРОЦЕС:\nКлікніть на скриню у сховищі,\nщоб забрати амулет BPMN!",
    "noteGrandmaster": "👑 ГРОСМЕЙСТЕР!\nВсі токени завершено!\nВи бездоганно опанували BPMN 2.0!",
    "laneDanger": "🐺 Зона небезпеки та винятки (Керування інцидентами)",
    "dataLogbookName": "📄 Журнал квесту та звіт аудиту",
    "dataLogbookDoc": "Об'єкт даних BPMN: Документує прогрес мандрівки та аудит відповідності Гільдії.",
    "noteWorkshopHint": "🔨 Чарівна майстерня:\nСтворіть завдання тут\n(напр. \"Виготовити артефакт\")!"
  },
  "ar": {
    "poolName": "🎮 مهمة BPMN: المغامرة التفاعلية للعمليات",
    "laneHero": "👤 البطل والمغامر (مستوى المستخدم)",
    "laneWorkshop": "⚙️ الورشة السحرية والأنظمة (مستوى الأتمتة)",
    "laneGuild": "🏛️ نقابة خبراء العمليات (إدارة الجودة والتدقيق)",
    "banner1": "🏰 الفصل 1: الصحوة (أحداث البداية، مهام المستخدم ومحاكاة الرمز)",
    "banner2": "⚔️ الفصل 2: مفترق طرق المصير (قرار XOR وقواعد المدقق)",
    "banner3": "🔮 الفصل 3: بوابة التكرار (توازي AND والمزامنة)",
    "banner4": "⏱️ الفصل 4: قاعة الزمن وخزينة الكنوز (المؤقت والعملية الفرعية)",
    "banner5": "👑 الفصل 5: نقابة الخبراء (تدقيق الجودة ولقب الأستاذ الكبير)",
    "startName": "بدء المغامرة",
    "startDoc": "👉 مرحبًا بك في BPMN-Quest! ابدأ محاكاة الرموز عبر زر التشغيل (▶) في الشريط العلوي أو انقر مباشرة على حدث البداية.",
    "taskChooseHeroName": "👤 اختيار فئة البطل ودوره",
    "taskChooseHeroDoc": "مبدأ الأدوار في BPMN: تمثل مهام المستخدم (👤) التفاعل البشري مع الأنظمة. يحدد المسار الدور المسؤول.",
    "taskPackGearName": "✋ حزم الحقيبة وفحص العتاد",
    "taskPackGearDoc": "المهام اليدوية (✋) هي أنشطة بدنية تتم دون برمجيات (حزم، توقيع ورقي).",
    "gatewayXorName": "✖ أي طريق تختار؟",
    "gatewayXorDoc": "بوابة XOR (حصرية ✖): يمكن اختيار مسار واحد فقط. انقر في المحاكاة لتوجيه التدفق!",
    "flowHeroPath": "طريق البطل الآمن",
    "flowDarkForest": "الغابة المظلمة (خطر!)",
    "taskStudyLinterName": "📜 دراسة قواعد التدقيق الذهبية",
    "taskStudyLinterDoc": "فحص القواعد في BPMN-Manager:\n1. يجب ربط كافة العقد.\n2. التدفقات لا تعبر حدود الأحواض.\n3. كل فرع ينتهي بحدث نهاية.",
    "taskTrollCaveName": "🐺 التسلل عبر كهف الغيلان",
    "taskTrollCaveDoc": "تحذير! حادث طارئ يتربص بك. يستخدم BPMN أحداث الحدود لمعالجة الأخطاء والاستثناءات.",
    "boundaryTrapName": "⚡ تم إطلاق الفخ!",
    "boundaryTrapDoc": "حدث حدود الخطأ: عند حدوث استثناء، يتوقف التدفق الطبيعي ويتم تفعيل مسار التصعيد.",
    "taskCallHelpName": "✉️ إرسال إشارة استغاثة",
    "taskCallHelpDoc": "مهمة إرسال (✉️): ترسل رسالة (بريد إلكتروني، تنبيه) إلى نظام خارجي.",
    "endEscapedName": "⚫ الانسحاب إلى المعسكر",
    "endEscapedDoc": "حدث النهاية: ينهي هذا الفرع بأمان. الإطار السميك يحدد نهاية العملية.",
    "gatewayMergeXorName": "دمج المسارات",
    "gatewayAndSplitName": "➕ توحيد القوى (البوابة المتوازية)",
    "gatewayAndSplitDoc": "بوابة AND (➕): تقسم التدفق إلى مسارات متوازية! في المحاكاة سترى رمزين يتحركان معًا.",
    "taskCastSpellName": "🛡️ إلقاء تعويذة الحماية (قواعد العمل)",
    "taskCastSpellDoc": "مهمة قواعد العمل: تنفذ قواعد اتخاذ القرار المؤتمتة (DMN).",
    "taskForgeSwordName": "⚙️ صياغة السيف المسحور",
    "taskForgeSwordDoc": "مهمة الخدمة (⚙️): استدعاء نظام مؤتمت بالكامل (REST API) دون تدخل بشري.",
    "gatewayAndJoinName": "➕ ختم المزامنة",
    "gatewayAndJoinDoc": "دمج AND: ينتظر وصول كلا الرمزين المتوازيين قبل السماح بمتابعة العملية.",
    "timerRestName": "⏱️ استراحة عند نار المعسكر (إيقاف 3 ثوانٍ)",
    "timerRestDoc": "مؤقت وسيط: يوقف التدفق لفترة محددة. تابع العد التنازلي مباشرة في المحاكاة!",
    "subProcessVaultName": "📦 استكشاف خزينة الكنوز (عملية فرعية)",
    "subProcessVaultDoc": "عملية فرعية مدمجة: تغلف عملية مركبة ببداية ونهاية خاصة بها.",
    "subStartName": "دخول الخزينة",
    "taskPickLockName": "👤 فتح قفل الصندوق",
    "taskPickLockDoc": "مهمة دقيقة: استخدام أدوات الفتح وتحليل آلية القفل.",
    "taskLootRelicName": "🏆 استعادة تميمة BPMN الأسطورية",
    "taskLootRelicDoc": "تمنح التميمة شفافية كاملة للعمليات وتوافقًا تامًا مع معايير ISO!",
    "subEndName": "مغادرة الخزينة بأمان",
    "taskVerifyGuildName": "⚙️ التحقق من شهادة الجودة وتسجيل التدقيق",
    "taskVerifyGuildDoc": "التحقق من الجودة: انقر على \"دليل الجودة\" في الشريط العلوي لتصدير تقرير التدقيق الكامل!",
    "taskAwardMasterName": "👑 منح لقب الأستاذ الأكبر لـ BPMN (النقابة)",
    "taskAwardMasterDoc": "👑 اجتياز التدقيق: يمنحك رئيس النقابة رسميًا شهادة الأستاذ الأكبر!",
    "endGrandmasterName": "🏆 تم تحقيق رتبة الأستاذ الكبير!",
    "endGrandmasterDoc": "حدث النهاية الإنهائي: ينهي مثيل العملية بالكامل فورًا. تمت المهمة بنجاح!",
    "timerPauseHeroName": "⏱️ وقفة 1: استراحة (3ث)",
    "timerPauseHeroDoc": "⏸️ توقف تلقائي: تتوقف المحاكاة لمدة 3 ثوانٍ لدراسة توزيع الأدوار.",
    "timerPauseXorName": "⏱️ وقفة 2: مفترق الطرق (3ث)",
    "timerPauseXorDoc": "⏸️ توقف تلقائي: استعد للنقر على سهم بوابة XOR لاختيار المسار.",
    "timerPauseGuildName": "⏱️ وقفة 4: تدقيق النقابة (3ث)",
    "timerPauseGuildDoc": "⏸️ توقف تلقائي: تدقق النقابة التوثيق قبل تتويجك بلقب الأستاذ الأكبر!",
    "noteStart": "▶️ الخطوة 1: ابدأ!\nاضغط تشغيل (▶) أو انقر\nعلى حدث البداية لبدء اللعبة!",
    "noteChooseHero": "👆 الخطوة 2: انقر هنا!\nمهام المستخدم تتطلب نقرة\nفي لعبة التوكن!",
    "noteXorChoice": "🎯 الخطوة 3: اختر المسار!\nانقر على السهم:\nالمسار الآمن (أعلى) أو\nالغابة المظلمة (أسفل)!",
    "noteTrap": "⚡ اختبار الاستثناء!\nانقر على الصاعقة لتشغيل\nالفخ ومسار التصعيد!",
    "noteAndSplit": "➕ التوازي:\nشاهد توكنين يتحركان معاً\nفي مسارين متوازيين!",
    "noteRestCamp": "⏱️ توقف تلقائي:\nاستراحة لـ 3 ثوانٍ عند النار\nقبل دخول الخزينة!",
    "noteVault": "📦 عملية فرعية:\nانقر داخل الخزينة لفتح الصندوق\nواستعادة قلادة BPMN!",
    "noteGrandmaster": "👑 تم الإنجاز!\nاكتملت جميع التوكنات!\nلقد أتقنت BPMN 2.0 بالكامل!",
    "laneDanger": "🐺 منطقة الخطر والاستثناءات (إدارة الحوادث)",
    "dataLogbookName": "📄 سجل المهمة وتقرير التدقيق",
    "dataLogbookDoc": "كائن بيانات BPMN: يوثق مسار الرحلة وتدقيق الامتثال الرسمي للنقابة.",
    "noteWorkshopHint": "🔨 ورشة السحر:\nأنشئ مهمة هنا\n(مثال: \"صنع الأثر\")!"
  },
  "id": {
    "poolName": "🎮 BPMN-Quest: Petualangan Proses Interaktif",
    "laneHero": "👤 Pahlawan & Penjelajah (Tingkat Pengguna)",
    "laneWorkshop": "⚙️ Bengkel Sihir & Sistem (Otomatisasi)",
    "laneGuild": "🏛️ Perkumpulan Master Proses (Manajemen Mutu & Audit)",
    "banner1": "🏰 BAB 1: Kebangkitan (Peristiwa Awal, Tugas Pengguna & Permainan Token)",
    "banner2": "⚔️ BAB 2: Persimpangan Takdir (Keputusan XOR & Aturan Linter)",
    "banner3": "🔮 BAB 3: Portal Penggandaan (Paralelisme AND & Sinkronisasi)",
    "banner4": "⏱️ BAB 4: Ruang Waktu & Gudang Harta (Timer & Subproses)",
    "banner5": "👑 BAB 5: Perkumpulan Master (Audit Mutu & Status Grandmaster)",
    "startName": "Petualangan Dimulai",
    "startDoc": "👉 Selamat datang di BPMN-Quest! Mulai simulasi token dengan tombol Putar (▶) di bilah atas atau klik langsung pada peristiwa awal ini.",
    "taskChooseHeroName": "👤 Pilih Kelas Pahlawan & Peran",
    "taskChooseHeroDoc": "Prinsip peran di BPMN: Tugas Pengguna (👤) mewakili interaksi manusia dengan sistem. Swimlane menentukan peran yang bertanggung jawab.",
    "taskPackGearName": "✋ Kemas Ransel & Periksa Perlengkapan",
    "taskPackGearDoc": "Tugas Manual (✋) adalah aktivitas fisik tanpa perangkat lunak (mengemas, menandatangani dokumen).",
    "gatewayXorName": "✖ Jalur Mana yang Kamu Pilih?",
    "gatewayXorDoc": "Gateway XOR (Eksklusif ✖): Hanya SATU jalur yang boleh dipilih. Di simulasi token, klik jalur yang diinginkan!",
    "flowHeroPath": "Jalur Pahlawan Aman",
    "flowDarkForest": "Hutan Gelap (Bahaya!)",
    "taskStudyLinterName": "📜 Pelajari Aturan Emas Linter",
    "taskStudyLinterDoc": "Pemeriksaan Linter di BPMN-Manager:\n1. Semua node harus terhubung.\n2. Aliran urutan tidak boleh melintasi batas pool.\n3. Setiap cabang harus memiliki peristiwa akhir.",
    "taskTrollCaveName": "🐺 Menyelinap Melalui Gua Troll",
    "taskTrollCaveDoc": "Perhatian! Bahaya mengintai di sini. BPMN menggunakan boundary events untuk menangani pengecualian dan kesalahan.",
    "boundaryTrapName": "⚡ Jebakan Terpicu!",
    "boundaryTrapDoc": "Boundary Event Kesalahan: Saat terjadi pengecualian, aliran normal dihentikan dan jalur eskalasi diaktifkan.",
    "taskCallHelpName": "✉️ Kirim Sinyal Darurat",
    "taskCallHelpDoc": "Tugas Kirim (✉️): Mengirimkan pesan (email, webhook) ke sistem eksternal.",
    "endEscapedName": "⚫ Mundur ke Perkemahan Utama",
    "endEscapedDoc": "Peristiwa Akhir: Mengakhiri cabang ini dengan rapi. Garis tepi tebal menandakan akhir alur.",
    "gatewayMergeXorName": "Penggabungan Jalur",
    "gatewayAndSplitName": "➕ Gabungkan Kekuatan (Portal Paralel)",
    "gatewayAndSplitDoc": "Gateway AND (➕): Membagi alur menjadi jalur paralel! Dalam simulasi, dua token berjalan bersamaan.",
    "taskCastSpellName": "🛡️ Rapalkan Mantra Pelindung (Aturan Bisnis)",
    "taskCastSpellDoc": "Tugas Aturan Bisnis: Menjalankan aturan keputusan otomatis (DMN).",
    "taskForgeSwordName": "⚙️ Tempa Pedang Bertuah",
    "taskForgeSwordDoc": "Tugas Layanan (⚙️): Panggilan sistem otomatis (REST API, layanan mikro) tanpa campur tangan manusia.",
    "gatewayAndJoinName": "➕ Segel Sinkronisasi",
    "gatewayAndJoinDoc": "Gabungan AND: Menunggu hingga KEDUA token paralel tiba sebelum melanjutkan proses.",
    "timerRestName": "⏱️ Beristirahat di Api Unggun (Jeda 3 detik)",
    "timerRestDoc": "Timer Perantara: Menghentikan sementara alur selama durasi tertentu.",
    "subProcessVaultName": "📦 Jelajahi Ruang Harta (Subproses)",
    "subProcessVaultDoc": "Subproses Tersemat: Merangkum alur kerja terpadu dengan awal dan akhir sendiri.",
    "subStartName": "Masuk ke Ruang Harta",
    "taskPickLockName": "👤 Bobol Kunci Peti",
    "taskPickLockDoc": "Tugas presisi: Gunakan alat pembuka dan analisis mekanisme kunci.",
    "taskLootRelicName": "🏆 Ambil Jimat Legendaris BPMN",
    "taskLootRelicDoc": "Jimat memberikan visibilitas proses 100% dan kepatuhan standar ISO!",
    "subEndName": "Keluar Ruang Harta dengan Aman",
    "taskVerifyGuildName": "⚙️ Verifikasi Sertifikasi Mutu & Catat Audit",
    "taskVerifyGuildDoc": "Validasi Mutu: Klik \"Buku Panduan QM\" untuk mengekspor laporan audit lengkap!",
    "taskAwardMasterName": "👑 Anugerah Gelar Grandmaster BPMN (Serikat)",
    "taskAwardMasterDoc": "👑 AUDIT LULUS: Ketua Serikat secara resmi menganugerahkan ijazah Grandmaster kepada Anda!",
    "endGrandmasterName": "🏆 Status Grandmaster Tercapai!",
    "endGrandmasterDoc": "Peristiwa Akhir Penghentian: Segera mengakhiri seluruh instans proses. Misi selesai dengan sukses!",
    "timerPauseHeroName": "⏱️ Jeda 1: Tarik Napas (3dtk)",
    "timerPauseHeroDoc": "⏸️ JEDA OTOMATIS: Simulasi berhenti 3 detik untuk mengamati pembagian peran swimlane.",
    "timerPauseXorName": "⏱️ Jeda 2: Persimpangan (3dtk)",
    "timerPauseXorDoc": "⏸️ JEDA OTOMATIS: Bersiaplah mengklik panah pada gateway XOR untuk memilih jalur.",
    "timerPauseGuildName": "⏱️ Jeda 4: Audit Guild (3dtk)",
    "timerPauseGuildDoc": "⏸️ JEDA OTOMATIS: Guild memverifikasi proses sebelum penganugerahan gelar Grandmaster!",
    "noteStart": "▶️ LANGKAH 1: Mulai!\nKlik Play (▶) atau lingkaran\nmulai untuk petualangan!",
    "noteChooseHero": "👆 LANGKAH 2: Klik!\nUser Tasks memerlukan klik\nAnda di Token Game!",
    "noteXorChoice": "🎯 LANGKAH 3: PILIH JALUR!\nKlik salah satu panah:\nJalur aman (atas) atau\nHutan gelap (bawah)!",
    "noteTrap": "⚡ UJI ERROR!\nKlik petir untuk memicu\njebakan dan eskalasi darurat!",
    "noteAndSplit": "➕ PARALELISME:\nLihat 2 token berjalan bersamaan\nsecara paralel di dua jalur!",
    "noteRestCamp": "⏱️ JEDA OTOMATIS:\nIstirahat 3 detik di api unggun\nsebelum masuk ruang harta!",
    "noteVault": "📦 SUB-PROSES:\nKlik peti di ruang harta untuk\nmengambil jimat BPMN legendaris!",
    "noteGrandmaster": "👑 GRANDMASTER TERCAPAI!\nSemua token selesai!\nAnda telah menguasai BPMN 2.0!",
    "laneDanger": "🐺 Zona Bahaya & Pengecualian (Manajemen Insiden)",
    "dataLogbookName": "📄 Buku Log Misi & Catatan Audit",
    "dataLogbookDoc": "Objek data BPMN: Mendokumentasikan perjalanan dan audit kepatuhan serikat.",
    "noteWorkshopHint": "🔨 Bengkel Ajaib:\nBuat tugas di sini\n(mis. \"Buat Artefak\")!"
  },
  "ko": {
    "poolName": "🎮 BPMN-Quest: 인터랙티브 프로세스 모험",
    "laneHero": "👤 영웅 및 모험가 (사용자 계층)",
    "laneWorkshop": "⚙️ 마법 공방 및 시스템 (자동화 계층)",
    "laneGuild": "🏛️ 프로세스 마스터 길드 (품질 관리 및 감사)",
    "banner1": "🏰 1장: 각성 (시작 이벤트, 사용자 태스크 및 토큰 시뮬레이션)",
    "banner2": "⚔️ 2장: 운명의 갈림길 (XOR 분기 결정 및 Linter 검증 규칙)",
    "banner3": "🔮 3장: 복제의 차원문 (AND 병렬 분기 및 동기화)",
    "banner4": "⏱️ 4장: 시간의 방과 보물 금고 (타이머 및 서브프로세스)",
    "banner5": "👑 5장: 마스터 길드 (품질 감사 및 프로세스 그랜드마스터)",
    "startName": "모험 시작",
    "startDoc": "👉 BPMN-Quest에 오신 것을 환영합니다! 상단 툴바의 재생 버튼(▶)으로 토큰 시뮬레이션을 시작하거나 시작 이벤트를 직접 클릭하세요.",
    "taskChooseHeroName": "👤 영웅 클래스 및 역할 선택",
    "taskChooseHeroDoc": "BPMN의 역할 원칙: 사용자 태스크(👤)는 사용자와 시스템 간의 상호작용을 나타냅니다. 스윔레인은 담당 역할을 정의합니다.",
    "taskPackGearName": "✋ 배낭 챙기기 및 장비 점검",
    "taskPackGearDoc": "수동 태스크(✋)는 소프트웨어 개입 없는 물리적 작업(짐 싸기, 서명 등)입니다.",
    "gatewayXorName": "✖ 어느 길을 선택하시겠습니까?",
    "gatewayXorDoc": "XOR 게이트웨이(배타적 ✖): 오직 하나의 분기만 선택할 수 있습니다. 시뮬레이션에서 원하는 분기를 클릭하세요!",
    "flowHeroPath": "안전한 영웅의 길",
    "flowDarkForest": "어둠의 숲 (위험!)",
    "taskStudyLinterName": "📜 핵심 Linter 검증 규칙 학습",
    "taskStudyLinterDoc": "BPMN-Manager 실시간 검증:\n1. 모든 노드는 연결되어야 합니다.\n2. 시퀀스 플로우는 풀 경계를 넘을 수 없습니다.\n3. 모든 경로는 종료 이벤트에 도달해야 합니다.",
    "taskTrollCaveName": "🐺 트롤 동굴 잠입",
    "taskTrollCaveDoc": "주의! 돌발 상황이 발생합니다. BPMN은 바운더리 이벤트를 통해 예외 및 오류를 처리합니다.",
    "boundaryTrapName": "⚡ 함정 발동!",
    "boundaryTrapDoc": "오류 바운더리 이벤트: 오류 발생 시 정상 플로우가 중단되고 에스컬레이션 경로로 전환됩니다.",
    "taskCallHelpName": "✉️ 조난 신호 발송",
    "taskCallHelpDoc": "송신 태스크(✉️): 외부 시스템에 메시지(이메일, 웹훅, 알림)를 전송합니다.",
    "endEscapedName": "⚫ 베이스캠프로 퇴각",
    "endEscapedDoc": "종료 이벤트: 이 분기를 정상 종료합니다. 굵은 테두리는 프로세스의 종료를 나타냅니다.",
    "gatewayMergeXorName": "경로 병합",
    "gatewayAndSplitName": "➕ 힘 모으기 (병렬 차원문)",
    "gatewayAndSplitDoc": "AND 게이트웨이(➕): 흐름을 병렬 경로로 분할합니다! 시뮬레이션에서 두 개의 토큰이 동시에 진행됩니다.",
    "taskCastSpellName": "🛡️ 보호 결계 영창 (비즈니스 규칙)",
    "taskCastSpellDoc": "비즈니스 규칙 태스크: 자동화된 의사결정 규칙(DMN)을 실행합니다.",
    "taskForgeSwordName": "⚙️ 마법 검 제련",
    "taskForgeSwordDoc": "서비스 태스크(⚙️): 사람의 개입이 필요 없는 완전 자동화 시스템 호출(REST API).",
    "gatewayAndJoinName": "➕ 동기화의 인장",
    "gatewayAndJoinDoc": "AND 조인: 두 병렬 토큰이 모두 도착할 때까지 대기한 후 다음 단계로 진행합니다.",
    "timerRestName": "⏱️ 모닥불 휴식 (3초 대기)",
    "timerRestDoc": "중간 타이머 이벤트: 지정된 시간 동안 프로세스를 일시 중지합니다.",
    "subProcessVaultName": "📦 보물 금고 탐험 (서브프로세스)",
    "subProcessVaultDoc": "임베디드 서브프로세스: 자체적인 시작과 종료를 갖는 복합 프로세스를 캡슐화합니다.",
    "subStartName": "금고 입장",
    "taskPickLockName": "👤 보물상자 자물쇠 해제",
    "taskPickLockDoc": "정밀 작업: 도구를 사용하여 자물쇠 메커니즘을 분석하고 해제합니다.",
    "taskLootRelicName": "🏆 전설의 BPMN 부적 획득",
    "taskLootRelicDoc": "부적은 100% 프로세스 가시성과 ISO 표준 준수를 보장합니다!",
    "subEndName": "금고 안전 퇴장",
    "taskVerifyGuildName": "⚙️ 품질 인증 검증 및 감사 로그 기록",
    "taskVerifyGuildDoc": "품질 검증: 상단의 \"QM 핸드북\"을 클릭하여 완벽한 감사 보고서를 내보내세요!",
    "taskAwardMasterName": "👑 BPMN 그랜드마스터 칭호 수여 (길드)",
    "taskAwardMasterDoc": "👑 감사 통과: 길드 마스터가 공식적으로 그랜드마스터 학위를 수여합니다!",
    "endGrandmasterName": "🏆 그랜드마스터 달성!",
    "endGrandmasterDoc": "종결 종료 이벤트: 전체 프로세스 인스턴스를 즉시 완료합니다. 퀘스트 완료!",
    "timerPauseHeroName": "⏱️ 1차 휴식: 숨고르기 (3초)",
    "timerPauseHeroDoc": "⏸️ 자동 일시정지: 스윔레인 역할 분담을 살펴볼 수 있도록 시뮬레이션이 3초간 멈춥니다.",
    "timerPauseXorName": "⏱️ 2차 휴식: 갈림길 확인 (3초)",
    "timerPauseXorDoc": "⏸️ 자동 일시정지: 곧 갈림길입니다! XOR 게이트웨이에서 화살표를 클릭할 준비를 하세요.",
    "timerPauseGuildName": "⏱️ 4차 휴식: 길드 심사 (3초)",
    "timerPauseGuildDoc": "⏸️ 자동 일시정지: 그랜드마스터 수여 전 길드 심사관이 문서를 점검합니다!",
    "noteStart": "▶️ 1단계: 시작!\n상단 Play(▶)나 시작 이벤트를\n클릭하여 게임을 시작하세요!",
    "noteChooseHero": "👆 2단계: 클릭!\n사용자 작업은 토큰 게임에서\n직접 클릭해야 진행됩니다!",
    "noteXorChoice": "🎯 3단계: 경로 선택!\n화살표를 클릭하세요:\n안전한 영웅길 (위) 또는\n어둠의 숲 (아래)!",
    "noteTrap": "⚡ 예외 테스트!\n번개 아이콘을 클릭하여 함정과\n비상 에스컬레이션을 시험하세요!",
    "noteAndSplit": "➕ 병렬 흐름:\n2개의 토큰이 동시에 생성되어\n병렬로 이동하는 모습을 확인하세요!",
    "noteRestCamp": "⏱️ 자동 휴식:\n보물창고에 들어가기 전 캠프파이어에서\n3초간 숨을 고릅니다!",
    "noteVault": "📦 서브프로세스:\n창고 안의 상자를 클릭하여\n전설의 BPMN 부적을 획득하세요!",
    "noteGrandmaster": "👑 퀘스트 완료!\n모든 토큰 완주 성공!\nBPMN 2.0을 완벽히 마스터했습니다!",
    "laneDanger": "🐺 위험 구역 및 예외 (인시던트 관리)",
    "dataLogbookName": "📄 퀘스트 일지 및 감사 보고서",
    "dataLogbookDoc": "BPMN 데이터 객체: 여정의 진행 상황과 길드의 품질 규정 준수 감사를 기록합니다.",
    "noteWorkshopHint": "🔨 마법 작업장:\n여기에 작업을 생성하세요\n(예: \"유물 제작\")!"
  },
  "gd": {
    "poolName": "🎮 BPMN-Quest: An Turas-gnìomh Eadar-ghnìomhach",
    "laneHero": "👤 Gaisgeach & Neach-siubhail (Ìre Cleachdaiche)",
    "laneWorkshop": "⚙️ Bùth-obrach Draoidheil & Siostaman (Fèin-obrachadh)",
    "laneGuild": "🏛️ Comann Maighstirean Phròiseas (Dearbhadh Càileachd)",
    "banner1": "🏰 CAIBIDEIL 1: An Dùsgadh (Tachartasan Tòiseachaidh, Gnìomhan & Geama Token)",
    "banner2": "⚔️ CAIBIDEIL 2: Crois-rathad an Dàin (Roghainn XOR & Riaghailtean Linter)",
    "banner3": "🔮 CAIBIDEIL 3: Geata nan Dùblachaidhean (Co-shìneadh AND & Sioncronachadh)",
    "banner4": "⏱️ CAIBIDEIL 4: Talla na h-Ùine & An Seòmar-ionmhais (Tìmear & Fo-phròiseas)",
    "banner5": "👑 CAIBIDEIL 5: Comann nam Maighstirean (Sgrùdadh Càileachd & Inbhe Àrd-mhaighstir)",
    "startName": "Turas air tòiseachadh",
    "startDoc": "👉 Fàilte gu BPMN-Quest! Tòisich an samhladh le putan Cluich (▶) air a' bhàr-inneal no briog air an tachartas tòiseachaidh seo. Cearcallan caol-iomall ann am BPMN 2.0 a' comharrachadh tòiseach sruth-obrach.",
    "taskChooseHeroName": "👤 Tagh Seòrsa Gaisgich & Dreuchd",
    "taskChooseHeroDoc": "Prionnsapal dhreuchdan ann am BPMN: Tha gnìomhan cleachdaiche (👤) a' riochdachadh eadar-obrachadh daonna le siostaman. Tha an t-sreath-snàmh a' mìneachadh na dreuchd.",
    "taskPackGearName": "✋ Pacaig am Màileid & Sgrùd an Uidheamachd",
    "taskPackGearDoc": "Gnìomhan-làimhe (✋): gnìomhan corporra gun bhathar-bog (pacadh, soidhnigeadh).",
    "gatewayXorName": "✖ Dè an t-slighe a thaghas tu?",
    "gatewayXorDoc": "Geata XOR (Neo-chuimseach ✖): Feumaidh dìreach AON mheur a bhith air a thaghadh. Briog anns an t-samhladh!",
    "flowHeroPath": "Slighe Thèarainte a' Ghaisgich",
    "flowDarkForest": "Coille Dhorcha (Cunnart!)",
    "taskStudyLinterName": "📜 Ionnsaich na Riaghailtean Òir Linter",
    "taskStudyLinterDoc": "Dearbhadh linter ann am BPMN-Manager: 1. Ceangail gach nód. 2. Na gabh tarsainn crìochan amar. 3. Feumaidh gach meur crìoch a ruighinn.",
    "taskTrollCaveName": "🐺 Snàig tron Uaimh Trollaich",
    "taskTrollCaveDoc": "An aire! Tha cunnart a' feitheamh. Tha BPMN a' cleachdadh tachartasan-crìche airson eisgeachdan.",
    "boundaryTrapName": "⚡ Ribe air a bhrosnachadh!",
    "boundaryTrapDoc": "Tachartas Crìche Mearachd: Nuair a thachras mearachd, stadaidh an sruth àbhaisteach agus tòisichidh an t-slighe àrdachaidh.",
    "taskCallHelpName": "✉️ Cuir Rabhadh Èiginn",
    "taskCallHelpDoc": "Gnìomh Cur (✉️): A' cur teachdaireachd gu siostam a-muigh.",
    "endEscapedName": "⚫ Tilleadh chun a' Champa",
    "endEscapedDoc": "Tachartas Crìche: A' crìochnachadh a' mheur seo gu sgiobalta.",
    "gatewayMergeXorName": "Co-aonadh Shlighean",
    "gatewayAndSplitName": "➕ Aonaich na Cumhachdan (Geata Co-shìnte)",
    "gatewayAndSplitDoc": "Geata AND (➕): A' roinn an t-srutha ann an slighean co-shìnte! Chì thu DÀ token a' gluasad còmhla.",
    "taskCastSpellName": "🛡️ Tilg Geasachd Dìon (Riaghailtean Gnìomhachais)",
    "taskCastSpellDoc": "Gnìomh Riaghailtean Gnìomhachais: A' ruith riaghailtean co-dhùnaidh fèin-ghluasadach (DMN).",
    "taskForgeSwordName": "⚙️ Dealbh Claidheamh Draoidheil",
    "taskForgeSwordDoc": "Gnìomh Seirbheis (⚙️): Gairm siostam gu tur fèin-ghluasadach (REST API).",
    "gatewayAndJoinName": "➕ Seula an t-Sioncronachaidh",
    "gatewayAndJoinDoc": "Co-aonadh AND: A' feitheamh gus an tig AN DÀ token co-shìnte mus lean am pròiseas.",
    "timerRestName": "⏱️ Fois aig an Teine-champa (Stad 3d)",
    "timerRestDoc": "Tìmear Eadar-mheadhanach: A' cur stad air an t-sruth airson ùine shuidhichte.",
    "subProcessVaultName": "📦 Rannsaich Seòmar an Ionmhais (Fo-phròiseas)",
    "subProcessVaultDoc": "Fo-phròiseas Leabaichte: A' cuartachadh sruth-co-shìnte le thoiseach is chrìoch fhèin.",
    "subStartName": "Rach a-steach don t-Seòmar",
    "taskPickLockName": "👤 Fosgail Glas na Ciste",
    "taskPickLockDoc": "Gnìomh mionaideach: Cleachd inneal-glasaidh agus sgrùd am meacanaigs.",
    "taskLootRelicName": "🏆 Faigh an Seudag Ainmeil BPMN",
    "taskLootRelicDoc": "Tha an t-seudag a' toirt 100% lèirsinneachd phròiseas agus co-chòrdalachd ISO!",
    "subEndName": "Fàg an Seòmar gu sàbhailte",
    "taskVerifyGuildName": "⚙️ Dearbh Teisteanas Càileachd & Clàraich Sgrùdadh",
    "taskVerifyGuildDoc": "Dearbhadh càileachd: Briog \"Leabhar-làimhe QM\" airson aithisg sgrùdaidh a chruthachadh!",
    "taskAwardMasterName": "👑 Bhuileachadh Ceum Àrd-Mhaighstir BPMN (Comann)",
    "taskAwardMasterDoc": "👑 SGRÙDADH SEACHAD: Tha Maighstir a' Chomainn a' buileachadh an teisteanais oifigeil ort!",
    "endGrandmasterName": "🏆 Inbhe Àrd-mhaighstir air a ruighinn!",
    "endGrandmasterDoc": "Tachartas Crìche Sgur: A' crìochnachadh an t-suidheachaidh gu lèir sa bhad. Turas air a choileanadh!",
    "timerPauseHeroName": "⏱️ 1d Stad: Gabh Anail (3s)",
    "timerPauseHeroDoc": "⏸️ STAD FÈIN-OBRACHTEACH: Tha an samhladh a' stad airson 3 diogan a sgrùdadh nan dreuchdan.",
    "timerPauseXorName": "⏱️ 2na Stad: Crois-rathad (3s)",
    "timerPauseXorDoc": "⏸️ STAD FÈIN-OBRACHTEACH: Dèan deiseil airson saighead a thaghadh aig a' gheata XOR!",
    "timerPauseGuildName": "⏱️ 4mh Stad: Sgrùdadh a' Chomainn (3s)",
    "timerPauseGuildDoc": "⏸️ STAD FÈIN-OBRACHTEACH: Tha an comann a' sgrùdadh a' phròiseis ron chomharrachadh!",
    "noteStart": "▶️ CEUM 1: Tòisich!\nBriog air Play (▶) no air an\ntachartas tòiseachaidh!",
    "noteChooseHero": "👆 CEUM 2: Briog!\nFeumaidh gnìomhan cleachdaiche\nbriogadh anns a' gheama!",
    "noteXorChoice": "🎯 CEUM 3: ROGHAINN!\nBriog air saighead:\nSlighe shàbhailte no Coille!",
    "noteTrap": "⚡ DEUCHAINN MEARACHD!\nBriog air an dealanach airson\nan ribe a dhearbhadh!",
    "noteAndSplit": "➕ CO-SHÌNEADH:\nFaic 2 token a' gluasad còmhla\nair dà shlighe!",
    "noteRestCamp": "⏱️ STAD FÈIN-OBRACHTEACH:\n3 diogan fois aig an teine\nmus tèid thu a-steach!",
    "noteVault": "📦 FO-PHRÒISEAS:\nBriog air a' chiste gus an\nseudag fhaighinn!",
    "noteGrandmaster": "👑 ÀRD-MHAIGHSTIR!\nGach token crìochnaichte!\nTha thu air BPMN 2.0 a mhaistreadh!",
    "laneDanger": "🐺 Raon Cunnairt & Eisgeachdan (Rianachd Tachartais)",
    "dataLogbookName": "📄 Leabhar-latha Cuairte & Clàr Sgrùdaidh",
    "dataLogbookDoc": "Nì dàta BPMN: A' clàradh adhartas a' thurais agus sgrùdadh a' Chomainn.",
    "noteWorkshopHint": "🔨 Ceàrdach:\nCruthaich obair an seo\n(m.e. \"Dèan ball-ealain\")!"
  },
  "futhark": {
    "poolName": "🎮 ᛒᛈᛗᚾ-ᚲᚹᛖᛊᛏ: ᚦᛖ ᚱᚢᚾᛁᚲ ᛈᚱᛟᛊᛖᛊᛊ ᛊᚨᚷᚨ",
    "laneHero": "👤 ᚺᛖᛚᛞ ᚢᚾᛞ ᚨᛒᛖᚾᛏᛖᚢᚱᛖᚱ (ᚱᚢᚾᛖᚾ-ᛖᛒᛖᚾᛖ)",
    "laneWorkshop": "⚙️ ᛉᚨᚢᛒᛖᚱᚹᛖᚱᚲᛊᛏᚨᛏᛏ (ᚨᚢᛏᛟᛗᚨᛏᛁᛊᛁᛖᚱᚢᚾᚷ)",
    "laneGuild": "🏛️ ᚷᛁᛚᛞᛖ ᛞᛖᚱ ᚱᚢᚾᛖᚾᛗᛖᛁᛊᛏᛖᚱ (ᛈᚱᚢᛖᚠᚢᚾᚷ)",
    "banner1": "🏰 ᚲᚨᛈᛁᛏᛖᛚ 1: ᛞᚨᛊ ᛖᚱᚹᚨᚲᚺᛖᚾ (ᛊᛏᚨᚱᛏ ᚢᚾᛞ ᛏᛟᚲᛖᚾ)",
    "banner2": "⚔️ ᚲᚨᛈᛁᛏᛖᛚ 2: ᚹᛖᚷᚷᚨᛒᛖᛚᚢᚾᚷ (ᛖᚾᛏᛊᚲᚺᛖᛁᛞᚢᚾᚷ)",
    "banner3": "🔮 ᚲᚨᛈᛁᛏᛖᛚ 3: ᛈᛟᚱᛏᚨᛚ ᛞᛖᚱ ᛉᚹᛁᛚᛚᛁᚾᚷᛖ",
    "banner4": "⏱️ ᚲᚨᛈᛁᛏᛖᛚ 4: ᚺᚨᛚᛚᛖ ᛞᛖᚱ ᛉᛖᛁᛏ (ᛏᛁᛗᛖᚱ)",
    "banner5": "👑 ᚲᚨᛈᛁᛏᛖᛚ 5: ᚷᛁᛚᛞᛖ ᛞᛖᚱ ᛗᛖᛁᛊᛏᛖᚱ (ᚱᚢᚾᛖᚾᛈᚱᚢᛖᚠᚢᚾᚷ)",
    "startName": "ᛊᚨᚷᚨ ᛒᛖᚷᛁᚾᚾᛏ",
    "startDoc": "👉 ᚹᛁᛚᛚᚲᛟᛗᛗᛖᚾ zur Runen-Quest! Starte das Token-Game über den Play-Button (▶). Die Runensteine weisen dir den Weg. In BPMN 2.0 markieren dünne Kreise den Beginn eines Schicksalsfadens.",
    "taskChooseHeroName": "👤 ᚹᚨᛖᚺᛚᛖ ᛞᛖᛁᚾᛖ ᚲᛚᚨᛊᛊᛖ",
    "taskChooseHeroDoc": "ᚱᛟᛚᛚᛖᚾᛈᚱᛁᚾᛉᛁᛈ: Wie die Nornen das Schicksal flechten, so definieren Swimlanes die Verantwortung. User Tasks (👤) sind Taten der Sterblichen. Klicke im Token Game auf diese Rune!",
    "taskPackGearName": "✋ ᚱᚢᛖᛊᛏᚢᚾᚷ ᛈᚨᚲᚲᛖᚾ",
    "taskPackGearDoc": "ᛗᚨᚾᚢᛖᛚᛚᛖ ᛏᚨᛏ: Handarbeit wie in der Schmiede der Zwerge — keine Magie, nur Muskelkraft und Weisheit.",
    "gatewayXorName": "✖ ᚹᛖᛚᚲᚺᛖᚾ ᛈᚠᚨᛞ?",
    "gatewayXorDoc": "ᛖᚾᛏᛊᚲᚺᛖᛁᛞᚢᚾᚷ am Runenkreuz: Wie Odin am Weltenbaum, wähle genau EINEN Pfad. Im Token Game bestimmst du das Schicksal per Klick!",
    "flowHeroPath": "ᛈᚠᚨᛞ ᛞᛖᛊ ᛚᛁᚲᚺᛏᛊ",
    "flowDarkForest": "ᛈᚠᚨᛞ ᛞᛖᛊ ᛊᚲᚺᚨᛏᛏᛖᚾᛊ",
    "taskStudyLinterName": "📜 ᛞᛁᛖ ᚱᚢᚾᛖᚾ-ᚱᛖᚷᛖᛚᚾ ᛚᛖᛊᛖᚾ",
    "taskStudyLinterDoc": "Die drei heiligen Gesetze des Linter-Orakels: 1. Jede Rune muss verknüpft sein. 2. Kein Faden kreuzt die Grenzen des Weltenbaums. 3. Jeder Pfad führt zu einem Ende der Saga.",
    "taskTrollCaveName": "🐺 ᛞᚢᚱᚲᚺ ᛞᛁᛖ ᛏᚱᛟᛚᛚᚺᛟᛖᚺᛚᛖ",
    "taskTrollCaveDoc": "ᚹᚨᚱᚾᚢᚾᚷ! Hier lauert der Fenriswolf. Boundary Events sind wie Odins Raben — sie warnen vor Unheil an den Rändern der Aufgabe.",
    "boundaryTrapName": "⚡ ᚠᚨᛚᛚᛖ!",
    "boundaryTrapDoc": "ᛖᚱᚱᛟᚱ ᛒᛟᚢᚾᛞᚨᚱᛁ: Ragnarök bricht herein! Der reguläre Pfad wird zerstört, der Eskalationspfad erwacht.",
    "taskCallHelpName": "✉️ ᚱᚢᚠ ᚾᚨᚲᚺ ᚺᛁᛚᚠᛖ",
    "taskCallHelpDoc": "ᛊᛖᚾᛞ ᛏᚨᛊᚲ: Wie Heimdalls Gjallarhorn — sende eine Botschaft durch die neun Welten!",
    "endEscapedName": "⚫ ᚱᚢᛖᚲᚲᛉᚢᚷ",
    "endEscapedDoc": "End-Rune: Die Saga dieses Pfades endet hier. Dicke Runensteine markieren das Schicksalsende.",
    "gatewayMergeXorName": "ᛈᚠᚨᛞ-ᚠᛚᛖᚲᚺᛏᚢᚾᚷ",
    "gatewayAndSplitName": "➕ ᛗᚨᛖᚲᚺᛏᛖ ᛒᚢᛖᚾᛞᛖᛚᚾ",
    "gatewayAndSplitDoc": "AND-Rune (➕): Wie Bifröst sich teilt, so spaltet sich der Faden. ZWEI Tokens wandern gleichzeitig durch parallele Welten!",
    "taskCastSpellName": "🛡️ ᛊᚲᚺᚢᛏᛉᛉᚨᚢᛒᛖᚱ",
    "taskCastSpellDoc": "ᚷᛖᛊᚲᚺᚨᛖᚠᛏᛊᚱᛖᚷᛖᛚ: Wie die Runenmagie der Völva — automatisierte Entscheidungstabellen (DMN) werden gewirkt.",
    "taskForgeSwordName": "⚙️ ᛊᚲᚺᚹᛖᚱᛏ ᛊᚲᚺᛗᛁᛖᛞᛖᚾ",
    "taskForgeSwordDoc": "ᛊᛖᚱᚹᛁᚲᛖ ᛏᚨᛊᚲ: Wie Eitri und Brokkr in der Zwergenesse — vollautomatisch, ohne sterbliche Hand.",
    "gatewayAndJoinName": "➕ ᛊᛁᛖᚷᛖᛚ ᛞᛖᚱ ᛖᛁᚾᚺᛖᛁᛏ",
    "gatewayAndJoinDoc": "AND-Vereinigung: Erst wenn BEIDE Runenströme zusammenfließen, öffnet sich das nächste Tor.",
    "timerRestName": "⏱️ ᚱᚨᛊᛏ ᚨᛗ ᚠᛖᚢᛖᚱ (3ᛊ)",
    "timerRestDoc": "Zwischenzeit-Rune: Der Faden ruht. Wie Odins Schlaf am Weltenbaum — 3 Herzschläge Pause im Token Game.",
    "subProcessVaultName": "📦 ᛞᛁᛖ ᛊᚲᚺᚨᛏᛉᚲᚨᛗᛗᛖᚱ",
    "subProcessVaultDoc": "Eingebettete Saga: Ein Prozess im Prozess — wie ein Traum in Odins Vision. Eigener Anfang, eigenes Ende.",
    "subStartName": "ᛖᛁᚾᛏᚱᛁᛏᛏ",
    "taskPickLockName": "👤 ᛊᚲᚺᛚᛟᛊᛊ ᚲᚾᚨᚲᚲᛖᚾ",
    "taskPickLockDoc": "Präzisionsrune: Nutze die Kunst der Zwerge und entriegle das uralte Schloss.",
    "taskLootRelicName": "🏆 ᚨᛗᚢᛚᛖᛏᛏ ᛒᛖᚱᚷᛖᚾ",
    "taskLootRelicDoc": "Das Runen-Amulett verleiht die Weisheit Odins: 100% Prozess-Sicht und Ordnung der neun Welten!",
    "subEndName": "ᚨᚢᛊᚷᚨᚾᚷ",
    "taskVerifyGuildName": "⚙️ ᛈᚱᚢᛖᚠᚢᚾᚷ ᛞᛖᚱ ᚱᚢᚾᛖᚾ",
    "taskVerifyGuildDoc": "Runen-Audit: Prüfe die Vollständigkeit der Saga. Tipp: \"QM Handbook\" öffnet die Chronik der Nornen!",
    "taskAwardMasterName": "👑 ᛒᛈᛗᚾ ᛗᚨᛋᛏᛖᚱ ᛞᛁᛈᛚᛟᛗᚨ",
    "taskAwardMasterDoc": "👑 ᚷᚢᛁᛚᛞ ᚨᚢᛞᛁᛏ ᛈᚨᛋᛋᛖᛞ: ᚷᚱᚨᚾᛞᛗᚨᛋᛏᛖᚱ ᚱᚢᚾᛖ ᚨᚹᚨᚱᛞᛖᛞ!",
    "endGrandmasterName": "🏆 ᚱᚢᚾᛖᚾᛗᛖᛁᛊᛏᛖᚱ!",
    "endGrandmasterDoc": "ᛏᛖᚱᛗᛁᚾᚨᛏᛖ: Ragnarök vollendet! Alle Fäden enden, alle Tokens kehren nach Walhalla zurück. Die Saga ist vollbracht!",
    "timerPauseHeroName": "⏱️ 1. ᚱᚨᛊᛏ: ᚨᛏᛖᛗᛈᚨᚢᛊᛖ (3ᛊ)",
    "timerPauseHeroDoc": "⏸️ ᚨᚢᛏᛟ-ᚱᚨᛊᛏ: Das Token Game hält für 3 Herzschläge an. Betrachte die Runen-Ebenen!",
    "timerPauseXorName": "⏱️ 2. ᚱᚨᛊᛏ: ᚹᛖᚷᚹᛖᛁᛊᛖᚱ (3ᛊ)",
    "timerPauseXorDoc": "⏸️ ᚨᚢᛏᛟ-ᚱᚨᛊᛏ: Vorbereitung am Runenkreuz! Klicke gleich auf einen Pfeil des XOR-Tores.",
    "timerPauseGuildName": "⏱️ 4. ᚱᚨᛊᛏ: ᛊᛁᛖᚷᛖᛚᛈᚱᚢᛖᚠᚢᚾᚷ (3ᛊ)",
    "timerPauseGuildDoc": "⏸️ ᚨᚢᛏᛟ-ᚱᚨᛊᛏ: Die Runenmeister prüfen die Chronik vor Odins Krönung!",
    "noteStart": "▶️ ᛊᚲᚺᚱᛁᛏᛏ 1: ᛊᛏᚨᚱᛏ!\nKlicke oben Play (▶) oder\nauf die Anfangs-Rune,\num die Saga zu beginnen!",
    "noteChooseHero": "👆 ᛊᚲᚺᚱᛁᛏᛏ 2: ᚲᛚᛁᚲᚲ!\nUser Tasks erfordern deine\nTat: Klicke auf die Rune!",
    "noteXorChoice": "🎯 ᛊᚲᚺᚱᛁᛏᛏ 3: ᚹᚨᛖᚺᛚᛖ!\nKlicke auf einen Pfeil:\nLichtpfad (oben) ODER\nSchattenpfad (unten)!",
    "noteTrap": "⚡ ᚠᚨᛚᛚᛖᚾ-ᛏᛖᛊᛏ!\nKlicke auf den Blitz,\num Fenris' Falle zu testen!",
    "noteAndSplit": "➕ ᛉᚹᛁᛚᛚᛁᚾᚷᛊ-ᛈᚠᚨᛞ:\nSieh wie 2 Tokens parallel\ndurch zwei Welten wandern!",
    "noteRestCamp": "⏱️ ᚱᚨᛊᛏ ᚨᛗ ᚠᛖᚢᛖᚱ:\n3 Herzschläge Pause\nvor der Schatzkammer!",
    "noteVault": "📦 ᛖᛁᚾᚷᛖᛒᛖᛏᛏᛖᛏᛖ ᛊᚨᚷᚨ:\nKlicke auf die Truhe,\num das Runen-Amulett zu bergen!",
    "noteGrandmaster": "👑 ᚱᚢᚾᛖᚾᛗᛖᛁᛊᛏᛖᚱ!\nAlle Tokens vollendet!\nDu beherrschst BPMN 2.0!",
    "laneDanger": "🐺 ᚺᚨᛉᚨᚱᛞ ᛉᛟᚾᛖ (ᚢᛚᚠᚨᚱ ᚲᚨᚢᛖ)",
    "dataLogbookName": "📄 ᛚᛟᚷᛒᛟᛟᚲ & ᛞᛟᚲᚢᛗᛖᚾᛏ",
    "dataLogbookDoc": "ᛒᛈᛗᚾ ᛞᚨᛏᚨ: ᚱᚢᚾᛖ ᛚᛟᚷᛒᛟᛟᚲ ᛟᚠ ᛏᚺᛖ ᚷᚢᛁᛚᛞ.",
    "noteWorkshopHint": "🔨 ᛊᚲᛗᛁᛖᛞᛖ:\nᛊᚲᚺᚨᚠᚠᛖ ᚨᚢᚠᚷᚨᛒᛖ\n(ᛉ.ᛒ. \"ᚨᚱᛏᛖᚠᚨᚲᛏ\")!"
  },
  "navi": {
    "poolName": "🎮 BPMN-Quest: Tirea Na'vi — Fya'o Letokx",
    "laneHero": "👤 Taronyu & Tsamsiyu (Tstxo Tute)",
    "laneWorkshop": "⚙️ Tsray Nì'aw & Eltu Si (Nìawnomum)",
    "laneGuild": "🏛️ Olo' Eyktan Fya'o (Tìfkeytok & Tìsung)",
    "banner1": "🏰 'OPIN 1: Tìsraw — Sngä'i, Tirea Tute & Tokx Uvan",
    "banner2": "⚔️ 'OPIN 2: Fya'o A'aw — Ftxey XOR & Ìlva Tìng",
    "banner3": "🔮 'OPIN 3: Tskxekeng Tsam — AND Nìmun & Tìkangkem",
    "banner4": "⏱️ 'OPIN 4: Trr & Kelku Tìng — Krr Fì & Fya'o Mì",
    "banner5": "👑 'OPIN 5: Olo' Eyktan — Tìfkeytok & Toruk Makto",
    "startName": "Tìsraw Sngä'i",
    "startDoc": "👉 Kaltxì! Zene ngivop tìtokx uvan ta pxel Play (▶) fa txayo. Nì'ul, tsap'alute ngeyä tìrol — fìtseng lu tìsraw. Tìng nìftue fìvrrtepìri!",
    "taskChooseHeroName": "👤 Ftxey Taronyu Hapxì",
    "taskChooseHeroDoc": "Fya'o Na'vi: User Tasks (👤) lu tirea tute, nìtut fko si kem hu tsray. Tìng set! Nì tokx uvan, fìgnìomh lumpe skxawng si.",
    "taskPackGearName": "✋ 'Ampi Tskxe & Tstal",
    "taskPackGearDoc": "Manual Task (✋): Kem 'awve — tstal tok, tskxe 'ampi, kxener si. Nì'ul lu fìkem nìtut tskxekeng.",
    "gatewayXorName": "✖ Pehem fya'o?",
    "gatewayXorDoc": "XOR Tsahìk (✖): Tsun ftxey AW fya'o nì'aw. Tokx uvan — ngivop fìfya'o ngeyä!",
    "flowHeroPath": "Fya'o Taronyu",
    "flowDarkForest": "Fya'o Tskxe (Txantslusam!)",
    "taskStudyLinterName": "📜 Ìlva Tìng Nì'eyng",
    "taskStudyLinterDoc": "Linter tìng Eywa mì: 1. Frapo nìwotx tìkangkem si. 2. Fya'o ke tok tsam olo'. 3. Frapo fya'o zene krr si.",
    "taskTrollCaveName": "🐺 Frrtu Mì Kelku",
    "taskTrollCaveDoc": "Tslam! Palulukan a'ewan fìtseng. BPMN tìng boundary events fpi säfpìl txantslusam.",
    "boundaryTrapName": "⚡ Kxì! Nìhawng!",
    "boundaryTrapDoc": "Error Boundary: Ngeyä fya'o txìng set — mipa fya'o tìsraw si fa tìfkeytok!",
    "taskCallHelpName": "✉️ Peng Olo'eyktan",
    "taskCallHelpDoc": "Send Task (✉️): Peng nì'ul tsam — kem fa tswayon, fpi eltur tìtxen si!",
    "endEscapedName": "⚫ Makto Nì'awtu",
    "endEscapedDoc": "Tìhawl: Fìfya'o tìkangkem lu letsim. Krr tìhawl.",
    "gatewayMergeXorName": "Fya'o Tsatseng Si",
    "gatewayAndSplitName": "➕ Tìkangkem Nìmun",
    "gatewayAndSplitDoc": "AND (➕): Fya'o tok tsam nìmun! Tokx uvan — MUNE tokx tok nìmun!",
    "taskCastSpellName": "🛡️ Tìhawnu Si Nìmweypey",
    "taskCastSpellDoc": "Business Rule: Lu txe kem — Eywa tokx fa DMN tìng nìawnomum.",
    "taskForgeSwordName": "⚙️ Ngop Tskxe Tsam",
    "taskForgeSwordDoc": "Service Task (⚙️): Nìawnomum tìkangkem — REST API, nì'aw tsray si.",
    "gatewayAndJoinName": "➕ Tìkangkem Nì'awve",
    "gatewayAndJoinDoc": "AND Join: Nìwotx zene MUNE tokx tok fìtseng fte fya'o si nìmun.",
    "timerRestName": "⏱️ Hahaw Fìtseng (3s)",
    "timerRestDoc": "Krr Fì: Fya'o tìhawl lu fpi krr (3 trr kxì). Tokx uvan — tìng krr nìtut!",
    "subProcessVaultName": "📦 Kelku Tìng (Fya'o Mì)",
    "subProcessVaultDoc": "Fya'o Mì: Tsatseng pxel mipa tìsraw — mì fìkelku lu sngä'i & tìhawl nìwotx.",
    "subStartName": "Sngä'i Mì",
    "taskPickLockName": "👤 Tskxe Key Si",
    "taskPickLockDoc": "Tìkangkem nì'eyng: Tsmukan — ngop set fa tstal.",
    "taskLootRelicName": "🏆 Tok Tawtute Seudag",
    "taskLootRelicDoc": "Seudag Eywa fpi tìkangkem nì'ul — 100% tìng tsam & ISO tok!",
    "subEndName": "Fya'o Tok Mì",
    "taskVerifyGuildName": "⚙️ Tìfkeytok Fya'o & Tìsung",
    "taskVerifyGuildDoc": "Tìfkeytok: Pxel \"QM Handbook\" fpi tìng fya'o nìwotx!",
    "taskAwardMasterName": "👑 Tirea Olo'eyktan BPMN Puk (Guild)",
    "taskAwardMasterDoc": "👑 NGA WIN: Olo'eyktan tì'i'avay ne Grandmaster diploma nìtxan!",
    "endGrandmasterName": "🏆 Toruk Makto!",
    "endGrandmasterDoc": "Terminate: Nìwotx fya'o tìhawl lu. Oel ngati kameie — Eywa ayngahu! Quest tìkangkem si!",
    "timerPauseHeroName": "⏱️ 'Awve Hahaw: Hahaw (3s)",
    "timerPauseHeroDoc": "⏸️ JEDA: Token uvan tìhawl lu fpi 3 trr fte tsray nìwotx tslam!",
    "timerPauseXorName": "⏱️ Muve Hahaw: Fya'o (3s)",
    "timerPauseXorDoc": "⏸️ JEDA: Zene ftxey fya'o ta XOR tsahìk fa pxel klick!",
    "timerPauseGuildName": "⏱️ Pxive Hahaw: Tìfkeytok (3s)",
    "timerPauseGuildDoc": "⏸️ JEDA: Olo'eyktan tìfkeytok si fpi Toruk Makto!",
    "noteStart": "▶️ HAPXÌ 1: Sngä'i!\nPxel Play (▶) fa txayo\nfte uvan sngä'i si!",
    "noteChooseHero": "👆 HAPXÌ 2: Pxel set!\nUser Task zene tute pxel\nmì token uvan!",
    "noteXorChoice": "🎯 HAPXÌ 3: FTXEY!\nPxel fya'o:\nTaronyu (krrve) srak\nTskxe (mìfa)?",
    "noteTrap": "⚡ KXÌ TEST!\nPxel palulukan fpi\ntìhawnu fya'o!",
    "noteAndSplit": "➕ MUNE TOKX:\nNìwotx MUNE tokx tok\nmì fya'o nìmun!",
    "noteRestCamp": "⏱️ HAHAW:\n3s hahaw fpi txayo\nmì kelku!",
    "noteVault": "📦 FYA'O MÌ:\nPxel tskxe fte\nBPMN seudag lätxay!",
    "noteGrandmaster": "👑 TORUK MAKTO!\nNìwotx tìkangkem letsim!\nNgaru lu BPMN 2.0!",
    "laneDanger": "🐺 Tsawke Tseng & Kxeyey (Palulukan Tskxe)",
    "dataLogbookName": "📄 Puk fpi Quest & Audit",
    "dataLogbookDoc": "BPMN Data: Horen fpi Omaticaya sì Guild mìn.",
    "noteWorkshopHint": "🔨 Srewfya:\nNgay tìkangkewi netseng\n(tseng \"Tìng te'lan\")!"
  },
  "sa": {
    "poolName": "🎮 BPMN-अभियानम्: संवादात्मकं प्रक्रिया-साहसम्",
    "laneHero": "👤 वीरः अभियान्ता च (उपयोक्तृ-स्तरः)",
    "laneWorkshop": "⚙️ मायाशाला तन्त्राणि च (स्वचालनम्)",
    "laneGuild": "🏛️ प्रक्रियागुरूणां श्रेणिः (गुणनियन्त्रणम्)",
    "banner1": "🏰 अध्यायः १: प्रबोधः (आरम्भघटनाः, कार्याणि, टोकन-क्रीडा)",
    "banner2": "⚔️ अध्यायः २: भाग्यविभाजनम् (XOR-निर्णयः, परीक्षणनियमाः)",
    "banner3": "🔮 अध्यायः ३: द्वैतद्वारम् (AND-समानान्तरता, समन्वयः)",
    "banner4": "⏱️ अध्यायः ४: कालमन्दिरं निधिकोशः च (कालमापकः, उपप्रक्रिया)",
    "banner5": "👑 अध्यायः ५: गुरूणां श्रेणिः (गुणपरीक्षा, महागुरुपदम्)",
    "startName": "साहसम् आरब्धम्",
    "startDoc": "👉 स्वागतम् BPMN-अभियाने! चालय टोकन-क्रीडां Play-बटन (▶) द्वारा। सूक्ष्मवृत्तं BPMN 2.0 मध्ये कार्यप्रवाहस्य आदिं सूचयति।",
    "taskChooseHeroName": "👤 वीरवर्गं भूमिकां च चिनु",
    "taskChooseHeroDoc": "भूमिकासिद्धान्तः BPMN मध्ये: उपयोक्तृकार्याणि (👤) मानवयन्त्रसंवादं प्रतिनिधयन्ति। तरणपथः भूमिकां निर्धारयति।",
    "taskPackGearName": "✋ भाण्डं सज्जीकुरु शस्त्रं परीक्षस्व",
    "taskPackGearDoc": "हस्तकार्यम् (✋): भौतिकं कर्म यन्त्ररहितम् — पेटिकाबन्धनम्, हस्ताक्षरम्, परीक्षणम्।",
    "gatewayXorName": "✖ कं पन्थानं वृणोषि?",
    "gatewayXorDoc": "XOR-द्वारम् (विशिष्टम् ✖): एकम् एव पथं गन्तुं शक्यते। टोकन-क्रीडायां क्लिक्-करणेन मार्गं चिनु!",
    "flowHeroPath": "वीरस्य सुरक्षितपथः",
    "flowDarkForest": "अन्धकारवनम् (संकटम्!)",
    "taskStudyLinterName": "📜 सुवर्णनियमान् अध्ययस्व",
    "taskStudyLinterDoc": "BPMN-प्रबन्धके परीक्षणम्: १. सर्वे ग्रन्थयः संयोजिताः भवेयुः। २. प्रवाहाः सीमाम् न लङ्घयेयुः। ३. प्रत्येकः मार्गः अन्तघटनां प्राप्नुयात्।",
    "taskTrollCaveName": "🐺 राक्षसगुहायां प्रविश",
    "taskTrollCaveDoc": "सावधान! अत्र विपत्तिः तिष्ठति। BPMN सीमाघटनाभिः दोषान् अपवादांश्च गृह्णाति।",
    "boundaryTrapName": "⚡ जालम् उद्भूतम्!",
    "boundaryTrapDoc": "दोषसीमाघटना: दोषे सति सामान्यप्रवाहः विच्छिद्यते, उन्नयनमार्गश्च सक्रियो भवति।",
    "taskCallHelpName": "✉️ आपत्सन्देशं प्रेषय",
    "taskCallHelpDoc": "प्रेषणकार्यम् (✉️): बाह्यतन्त्राय सन्देशं (विद्युत्पत्रम्, सूचनाम्) प्रेषयति।",
    "endEscapedName": "⚫ शिबिरं प्रति प्रत्यागमनम्",
    "endEscapedDoc": "अन्तघटना: अयं शाखा सम्यक् समाप्यते। स्थूलसीमा प्रक्रियान्तं सूचयति।",
    "gatewayMergeXorName": "पथसंगमः",
    "gatewayAndSplitName": "➕ शक्तिसंयोजनम् (समानान्तरद्वारम्)",
    "gatewayAndSplitDoc": "AND-द्वारम् (➕): प्रवाहः समानान्तरपथेषु विभज्यते! द्वौ टोकनौ एककाले गच्छतः।",
    "taskCastSpellName": "🛡️ रक्षामन्त्रं जपस्व (व्यापारनियमाः)",
    "taskCastSpellDoc": "व्यापारनियमकार्यम्: स्वचालितनिर्णयनियमान् (DMN) निष्पादयति।",
    "taskForgeSwordName": "⚙️ दिव्यखड्गं निर्मापय",
    "taskForgeSwordDoc": "सेवाकार्यम् (⚙️): पूर्णस्वचालितं तन्त्रावाहनम् (REST API)। मानवहस्तक्षेपो नास्ति।",
    "gatewayAndJoinName": "➕ समन्वयमुद्रा",
    "gatewayAndJoinDoc": "AND-संगमः: उभौ समानान्तरटोकनौ आगतौ चेदेव प्रक्रिया अग्रे गच्छति।",
    "timerRestName": "⏱️ अग्निपार्श्वे विश्रामः (३क्षणम्)",
    "timerRestDoc": "मध्यकालमापकः: निर्धारितकालं प्रवाहं स्थगयति। टोकन-क्रीडायां विरामं साक्षात् पश्य!",
    "subProcessVaultName": "📦 निधिकोशम् अन्वेषय (उपप्रक्रिया)",
    "subProcessVaultDoc": "अन्तर्निहितोपप्रक्रिया: स्वकीयारम्भान्तयुक्तं जटिलप्रक्रियाखण्डं समावेशयति।",
    "subStartName": "कोशं प्रविश",
    "taskPickLockName": "👤 कोशतालकं भिन्द्धि",
    "taskPickLockDoc": "सूक्ष्मकार्यम्: कुञ्चिकया तालकयन्त्रं विश्लेषय।",
    "taskLootRelicName": "🏆 पौराणिकं BPMN-कवचं लभस्व",
    "taskLootRelicDoc": "कवचम् शतप्रतिशतं प्रक्रियादृश्यतां ISO-अनुरूपतां च प्रयच्छति!",
    "subEndName": "कोशात् सुरक्षितं निर्गच्छ",
    "taskVerifyGuildName": "⚙️ गुणप्रमाणं सत्यापय, लेखापरीक्षां लिख",
    "taskVerifyGuildDoc": "गुणसत्यापनम्: \"QM-पुस्तिका\" क्लिक्-कृत्वा सम्पूर्णां लेखापरीक्षाप्रतिवेदनं निर्गमय!",
    "taskAwardMasterName": "👑 बीपीएम्-एन्-महागुरुपदप्रदानम् (सङ्घः)",
    "taskAwardMasterDoc": "👑 परीक्षा पूर्णा: सङ्घपतिः भवते महागुरुपदं प्रमाणपत्रं च ससम्मानं ददाति!",
    "endGrandmasterName": "🏆 महागुरुपदं प्राप्तम्!",
    "endGrandmasterDoc": "समाप्तिघटना: सम्पूर्णां प्रक्रियां सद्यः समापयति। सर्वे टोकनाः विलीयन्ते। साहसं विजयेन समाप्तम्!",
    "timerPauseHeroName": "⏱️ प्रथमा विश्रान्तिः (३क्षणम्)",
    "timerPauseHeroDoc": "⏸️ स्वचालिता विश्रान्तिः: तरणपथे भूमिकाविभागं द्रष्टुं ३ क्षणानि प्रवाहः तिष्ठति।",
    "timerPauseXorName": "⏱️ द्वितीया विश्रान्तिः: मार्गपरीक्षा (३क्षणम्)",
    "timerPauseXorDoc": "⏸️ स्वचालिता विश्रान्तिः: XOR-द्वारे मार्गं चेतुं सज्जः भव!",
    "timerPauseGuildName": "⏱️ तृतीया विश्रान्तिः: मुद्रापरीक्षा (३क्षणम्)",
    "timerPauseGuildDoc": "⏸️ स्वचालिता विश्रान्तिः: महागुरुपदप्राप्तेः प्राक् गुणानां लेखापरीक्षा!",
    "noteStart": "▶️ प्रथमः सोपानः: आरम्भः!\nPlay (▶) क्लिक्-कुरु\nअथवा वृत्तं स्पृश!",
    "noteChooseHero": "👆 द्वितीयः सोपानः: क्लिक्!\nउपयोक्तृकार्याणि टोकन-क्रीडायां\nक्लिक्-अपेक्षन्ते!",
    "noteXorChoice": "🎯 तृतीयः सोपानः: मार्गं चिनु!\nबाणं क्लिक्-कुरु:\nसुरक्षितपथः अथवा वनम्!",
    "noteTrap": "⚡ दोषपरीक्षा!\nआपत्कालं परीक्षितुं\nविद्युच्चिह्नं क्लिक्-कुरु!",
    "noteAndSplit": "➕ समानान्तरता:\nपश्य कथं द्वौ टोकनौ\nयुगपद् भ्रमन्तः स्तः!",
    "noteRestCamp": "⏱️ विश्रान्तिः:\nनिधिकोशात् पूर्वं ३ क्षणानि\nअग्निपार्श्वे विश्रामः!",
    "noteVault": "📦 उपप्रक्रिया:\nपौराणिकं BPMN-कवचं लब्धुं\nकोशे तालकं भिन्द्धि!",
    "noteGrandmaster": "👑 महागुरुपदम्!\nसर्वे टोकनाः समाप्ताः!\nBPMN 2.0 वशीकृतम्!",
    "laneDanger": "🐺 सङ्कटक्षेत्रम् अपवादाश्च (घटनाप्रबन्धनम्)",
    "dataLogbookName": "📄 यात्रानिरीक्षणवृत्तम् (लेखापरीक्षा)",
    "dataLogbookDoc": "BPMN-दत्तांशवस्तु: यात्रायाः प्रगतेः सङ्घस्य गुणवत्तापरीक्षणस्य च प्रलेखनम्।",
    "noteWorkshopHint": "🔨 कर्मशाला:\nअत्र कार्यं रचयत\n(यथा \"वस्तु निर्माणम्\")!"
  },
  "sux": {
    "poolName": "🎮 𒂗𒈠𒂗 BPMN-Quest: 𒊬𒉌𒂵 𒋗𒁲𒌓𒊑",
    "laneHero": "👤 𒌨𒊕 𒍣𒇷𒈬 (𒇽 𒊬𒉌)",
    "laneWorkshop": "⚙️ 𒂍𒀀𒋛 𒆤𒁁 (𒉡𒄀𒈠)",
    "laneGuild": "🏛️ 𒌉𒌉 𒉎𒄑 𒊬𒉌𒂵 (𒈹 𒋗𒌓𒊑)",
    "banner1": "🏰 𒊬𒅗 1: 𒋗 𒈿𒄠 (𒊬𒉌 𒋗𒁲, 𒇽𒊬𒉌 & 𒋧𒄠)",
    "banner2": "⚔️ 𒊬𒅗 2: 𒊕𒀀 𒈾𒀭𒈾 (XOR 𒋗𒁲𒌓𒊑 & 𒊑𒄀)",
    "banner3": "🔮 𒊬𒅗 3: 𒆠𒂵 𒆬𒈨𒊏 (AND 𒊬𒉌 & 𒋧𒉌)",
    "banner4": "⏱️ 𒊬𒅗 4: 𒂍 𒌓 & 𒂍 𒊬 (𒌓𒊑 & 𒊬𒉌 𒋛)",
    "banner5": "👑 𒊬𒅗 5: 𒌉𒌉 𒈹 (𒋗𒌓𒊑 & 𒉎𒄑)",
    "startName": "𒊬𒉌 𒋗𒁲",
    "startDoc": "👉 𒂗𒉈𒋧! BPMN 𒊬𒉌𒂵 𒋧𒄠 — 𒌑 Play (▶) 𒊬𒁲𒌓 𒊕𒁉. In BPMN 2.0 markiert ein dünner Kreis den Beginn des Schicksalsflusses zwischen den Göttern.",
    "taskChooseHeroName": "👤 𒌨𒊕 𒋗𒁲 𒈬𒊬",
    "taskChooseHeroDoc": "𒇽𒊬𒉌: User Tasks (👤) 𒇽 𒊬𒉌 𒆤𒁁 — Die Swimlane bestimmt, welcher Gott diese Aufgabe ausführt. Klicke im Token Game auf diesen Keilschrift-Block!",
    "taskPackGearName": "✋ 𒃻 𒊬𒁲𒌓 & 𒁁𒀀",
    "taskPackGearDoc": "𒇽𒊬𒉌 𒋛: Handarbeit der Sterblichen — wie das Formen von Tontafeln in Ur. Keine göttliche Automatisierung.",
    "gatewayXorName": "✖ 𒊕𒀀 𒈾 𒊬𒉌?",
    "gatewayXorDoc": "XOR 𒆬𒈨: Wie Enlil die Winde scheidet — nur EIN Pfad darf beschritten werden!",
    "flowHeroPath": "𒊕𒀀 𒈹",
    "flowDarkForest": "𒊕𒀀 𒃲𒈨 (𒈿𒄠!)",
    "taskStudyLinterName": "📜 𒊑𒄀 𒋗𒌓 𒊬𒉌",
    "taskStudyLinterDoc": "𒊑𒄀 𒌉𒌉: Die drei göttlichen Gesetze des Prozess-Linters, graviert in ewige Tontafeln.",
    "taskTrollCaveName": "🐺 𒃻 𒆠 𒈿 𒋛",
    "taskTrollCaveDoc": "𒈿𒄠! Hier lauert Tiamat. BPMN nutzt Boundary Events wie Schutzgötter an den Toren von Babylon.",
    "boundaryTrapName": "⚡ 𒈿 𒋗𒁲!",
    "boundaryTrapDoc": "𒈿 𒊬𒉌: Wenn das Unglück hereinbricht wie die Flut — der Eskalationspfad erwacht.",
    "taskCallHelpName": "✉️ 𒊬𒁲 𒂗𒈠",
    "taskCallHelpDoc": "𒊬𒁲 𒂗𒈠: Wie ein Eilbote zwischen den Stadtstaaten — Nachricht an ein externes System.",
    "endEscapedName": "⚫ 𒊬𒉌 𒋗",
    "endEscapedDoc": "𒊬𒉌 𒂍: Dieser Flusslauf endet hier. Die Keilschrift versiegelt das Ende.",
    "gatewayMergeXorName": "𒊕𒀀 𒋧𒉌",
    "gatewayAndSplitName": "➕ 𒋧𒄠 𒊬𒉌 (𒆬𒈨𒊏)",
    "gatewayAndSplitDoc": "AND 𒆬𒈨 (➕): Der Strom des Euphrat und Tigris fließt parallel! ZWEI Tokens, wie die Zwillingsflüsse.",
    "taskCastSpellName": "🛡️ 𒉎 𒊬𒁲 (𒊑𒄀)",
    "taskCastSpellDoc": "𒊑𒄀 𒊬𒉌: Wie ein Orakelspruch von Marduk — automatisierte Geschäftsregeln (DMN).",
    "taskForgeSwordName": "⚙️ 𒋗 𒈹 𒊬𒁲",
    "taskForgeSwordDoc": "𒊬𒉌 𒆤𒁁: Vollautomatisch wie die göttlichen Schmieden von Eridu.",
    "gatewayAndJoinName": "➕ 𒆤𒉈 𒋧𒉌",
    "gatewayAndJoinDoc": "AND 𒋧𒉌: Beide Ströme müssen zusammenfließen, wie Euphrat und Tigris am Persischen Golf.",
    "timerRestName": "⏱️ 𒃻 𒌓 (3𒋗)",
    "timerRestDoc": "𒌓 𒊬𒉌: 3 Herzschläge Pause — wie die Sanduhr der babylonischen Astronomen.",
    "subProcessVaultName": "📦 𒂍 𒊬 𒋗𒁲 (𒊬𒉌 𒋛)",
    "subProcessVaultDoc": "𒊬𒉌 𒋛: Ein Prozess im Prozess — wie ein Tempel im Tempel zu Ur.",
    "subStartName": "𒋗𒁲 𒊬",
    "taskPickLockName": "👤 𒊬 𒆬 𒊬𒁲",
    "taskPickLockDoc": "𒊬𒉌 𒈹: Entriegle den Siegelzylinder der Schatzkammer.",
    "taskLootRelicName": "🏆 𒊬 𒈹 BPMN",
    "taskLootRelicDoc": "𒊬 𒈹: Das Keilschrift-Amulett verleiht die Weisheit Hammurabis!",
    "subEndName": "𒊬𒉌 𒂍",
    "taskVerifyGuildName": "⚙️ 𒋗𒌓𒊑 𒊬𒉌 & 𒈹",
    "taskVerifyGuildDoc": "𒋗𒌓𒊑: Klicke \"QM Handbook\" für die Tontafel-Chronik!",
    "taskAwardMasterName": "👑 𒈗 𒃲 BPMN 𒁾 𒈠 𒂗",
    "taskAwardMasterDoc": "👑 𒁲 𒋻: 𒂗 𒆤 𒈗 𒃲 𒉆 𒋾 𒆷 𒀭 𒂄 𒄀!",
    "endGrandmasterName": "🏆 𒉎𒄑 𒈹!",
    "endGrandmasterDoc": "𒊬𒉌 𒋗: Die letzte Tontafel ist gesiegelt. Alle Tokens kehren zum Tempel zurück. Abenteuer vollendet!",
    "timerPauseHeroName": "⏱️ 1. 𒃻 𒌓: 𒈿𒄠 (3𒋗)",
    "timerPauseHeroDoc": "⏸️ 𒌓 𒊬𒉌: Das Token Game hält 3 Herzschläge an. Betrachte die Keilschrift-Tafeln der Götter!",
    "timerPauseXorName": "⏱️ 2. 𒃻 𒌓: 𒊕𒀀 𒊬 (3𒋗)",
    "timerPauseXorDoc": "⏸️ 𒌓 𒊬𒉌: Bereite dich vor, am XOR-Tor per Klick zwischen den Wegen zu entscheiden!",
    "timerPauseGuildName": "⏱️ 4. 𒃻 𒌓: 𒋗𒌓𒊑 𒈹 (3𒋗)",
    "timerPauseGuildDoc": "⏸️ 𒌓 𒊬𒉌: Die Schriftgelehrten prüfen die Tontafeln vor der Großmeister-Weihe!",
    "noteStart": "▶️ 𒊬𒅗 1: 𒋗𒁲!\nKlicke Play (▶) oben oder\nauf die Start-Keilschrift,\num das Abenteuer zu beginnen!",
    "noteChooseHero": "👆 𒊬𒅗 2: 𒇽𒊬𒉌!\nUser Tasks erfordern deine Tat:\nKlicke auf den Keilschrift-Block!",
    "noteXorChoice": "🎯 𒊬𒅗 3: 𒊕𒀀!\nKlicke auf einen Pfeil:\nPfad der Göttin ODER\nPfad der Schatten!",
    "noteTrap": "⚡ 𒈿 𒋗𒁲!\nKlicke auf den Blitz,\num Tiamats Falle zu testen!",
    "noteAndSplit": "➕ 𒆬𒈨𒊏:\nZWEI Tokens fließen wie\nEuphrat und Tigris parallel!",
    "noteRestCamp": "⏱️ 𒃻 𒌓:\n3 Herzschläge Rast am Feuer\nvor der Schatzkammer!",
    "noteVault": "📦 𒊬𒉌 𒋛:\nKlicke auf das Schloss, um\ndas Keilschrift-Amulett zu bergen!",
    "noteGrandmaster": "👑 𒉎𒄑 𒈹!\nAlle Tontafeln vollendet!\nDu beherrschst BPMN 2.0!",
    "laneDanger": "🐺 𒌶 𒆠  опас 𒆠 𒌨 (Urim Ki)",
    "dataLogbookName": "📄 𒁾 𒂍 𒀭 𒂗 𒆤 (Dub E-An-Enlil)",
    "dataLogbookDoc": "BPMN 𒁾: 𒁾 𒈨 𒂗 𒆤 𒆠 DomainMask Audit.",
    "noteWorkshopHint": "🔨 𒂍𒈥:\n createTask an-za\n(artifact dím)!"
  },
  "egy": {
    "poolName": "🎮 BPMN-𓂀𓃭𓇳: 𓊹𓏏𓏤 𓂋𓏤𓇋𓏏 𓂝𓃀𓅱",
    "laneHero": "👤 𓅃𓂋𓂧 𓊹𓏏𓏤 (𓂋𓏤 𓇋𓏏)",
    "laneWorkshop": "⚙️ 𓉐𓏤 𓎛𓂝𓏤 (𓋴𓎼𓏤)",
    "laneGuild": "🏛️ 𓉐𓉻 𓊹𓏏𓂋 (𓅓𓂝𓏏 𓎛𓂝)",
    "banner1": "🏰 𓊹𓏏 1: 𓇳𓂋 𓂧𓏤 (𓊹 𓋴𓏏, 𓂋𓏤 𓅃 & 𓃀𓅱𓏤)",
    "banner2": "⚔️ 𓊹𓏏 2: 𓊃𓏤𓃭 𓈖𓏤 (XOR 𓂋𓂧 & 𓎛𓂝)",
    "banner3": "🔮 𓊹𓏏 3: 𓉐 𓂋𓏤𓂧 (AND 𓈖𓏤 & 𓋴𓈖)",
    "banner4": "⏱️ 𓊹𓏏 4: 𓉐 𓇳 & 𓉐 𓊹 (𓇳𓏤 & 𓂋 𓋴)",
    "banner5": "👑 𓊹𓏏 5: 𓉐𓉻 𓅓𓂝 (𓅓𓂝𓏏 & 𓊹𓏏𓂋)",
    "startName": "𓇳 𓊹𓏏 𓋴𓏏",
    "startDoc": "👉 𓂋𓏤𓂋𓂧! Willkommen im Land der Pharaonen! Starte das Token-Game über den Play-Button (▶). In BPMN 2.0 sind dünne Kreise wie die Kartusche des Anfangs — sie markieren den Beginn der heiligen Prozess-Reise am Nil.",
    "taskChooseHeroName": "👤 𓅃𓂋 𓂧𓏤 𓎛𓂝",
    "taskChooseHeroDoc": "𓅃𓂋 𓊹𓏏: User Tasks (👤) repräsentieren die Handlungen der Sterblichen vor den Göttern. Die Swimlane ist wie der Tempel, der bestimmt, welcher Priester die Aufgabe erfüllt.",
    "taskPackGearName": "✋ 𓎛𓂝 𓃀𓅱 & 𓊹 𓂋𓏤",
    "taskPackGearDoc": "𓂝𓃀𓅱 𓋴: Manual Tasks (✋) — Handarbeit wie das Meißeln der Hieroglyphen in den Tempelstein. Keine Magie, nur Handwerk.",
    "gatewayXorName": "✖ 𓊃𓏤 𓈖 𓂋?",
    "gatewayXorDoc": "XOR-𓉐 (𓊃𓏤 ✖): Wie die Waage der Ma'at — genau EIN Pfad darf beschritten werden. Im Token Game wähle deinen Weg durch das Totenreich!",
    "flowHeroPath": "𓊃𓏤 𓅃𓂋",
    "flowDarkForest": "𓊃𓏤 𓂧𓏤𓃭 (𓂝𓃀!)",
    "taskStudyLinterName": "📜 𓎛𓂝 𓊹 𓅓𓂝",
    "taskStudyLinterDoc": "𓊹 𓅓𓂝: Die drei heiligen Gebote, in den Tempel gemeißelt: 1. Alle Hieroglyphen müssen verbunden sein. 2. Keine Linie kreuzt die Tempelmauern. 3. Jeder Pfad führt zur Grabkammer des Endes.",
    "taskTrollCaveName": "🐺 𓃹 𓉐 𓂧𓏤",
    "taskTrollCaveDoc": "𓂝𓃀! Hier lauert Apophis, die Schlange des Chaos. BPMN nutzt Boundary Events wie die Schutzamulette des Pharao.",
    "boundaryTrapName": "⚡ 𓃹 𓂝𓃀!",
    "boundaryTrapDoc": "𓂝𓃀 𓊹: Apophis greift an! Der reguläre Pfad wird verschlungen, der Rettungspfad durch Duat öffnet sich.",
    "taskCallHelpName": "✉️ 𓊹 𓂋𓏤 𓋴𓈖",
    "taskCallHelpDoc": "𓋴𓈖 𓊹: Wie ein Papyrus-Bote entlang des Nils — sende eine Botschaft an die fernen Tempel!",
    "endEscapedName": "⚫ 𓂋 𓉐 𓊹",
    "endEscapedDoc": "𓊹𓏏 𓋴: Dieser Zweig der Hieroglyphen-Kette endet. Die Kartusche wird versiegelt.",
    "gatewayMergeXorName": "𓊃𓏤 𓋴𓈖",
    "gatewayAndSplitName": "➕ 𓎛𓂝 𓋴𓈖 (𓉐 𓈖𓏤)",
    "gatewayAndSplitDoc": "AND-𓉐 (➕): Wie der Nil sich im Delta teilt — ZWEI Tokens fließen gleichzeitig durch parallele Kanäle!",
    "taskCastSpellName": "🛡️ 𓊹 𓎛𓂝 𓅓𓂝",
    "taskCastSpellDoc": "𓅓𓂝 𓊹: Wie ein Spruch aus dem Totenbuch — automatisierte Entscheidungsregeln (DMN) werden aktiviert.",
    "taskForgeSwordName": "⚙️ 𓊹 𓎛𓂝 𓃀",
    "taskForgeSwordDoc": "𓋴𓎼 𓊹 (⚙️): Vollautomatisch wie die göttliche Schmiede des Ptah in Memphis.",
    "gatewayAndJoinName": "➕ 𓋴𓈖 𓊹",
    "gatewayAndJoinDoc": "AND-𓋴𓈖: Beide Nilarme müssen zusammenfließen, bevor die Reise zum nächsten Tempel weitergeht.",
    "timerRestName": "⏱️ 𓇳 𓂋 (3𓏤)",
    "timerRestDoc": "𓇳 𓊹: 3 Sonnenwenden Pause — wie das Warten auf die Nilschwemme.",
    "subProcessVaultName": "📦 𓉐 𓊹 𓂋𓏤 (𓂋 𓋴)",
    "subProcessVaultDoc": "𓂋 𓋴: Eingebetteter Subprozess — wie eine Grabkammer innerhalb der Pyramide. Eigener Eingang, eigener Ausgang.",
    "subStartName": "𓋴𓏏 𓉐",
    "taskPickLockName": "👤 𓊹 𓎛𓂝 𓆬",
    "taskPickLockDoc": "𓂝𓃀 𓊹: Löse das Siegel der Pharaonenkammer mit dem Ankh-Schlüssel.",
    "taskLootRelicName": "🏆 𓊹 𓂀 BPMN",
    "taskLootRelicDoc": "𓊹 𓂀: Das Auge des Horus verleiht 100% Prozess-Allwissenheit und göttliche ISO-Konformität!",
    "subEndName": "𓂋 𓉐",
    "taskVerifyGuildName": "⚙️ 𓅓𓂝 𓊹 & 𓎛𓂝",
    "taskVerifyGuildDoc": "𓅓𓂝: Klicke \"QM Handbook\" für die Papyrusrolle der Tempelchronik!",
    "taskAwardMasterName": "👑 𓎛𓈎𓄿 𓅨𓂋 BPMN 𓄹𓊃𓂋 (Heqa Ur)",
    "taskAwardMasterDoc": "👑 𓊪𓏏𓎛 𓈖 𓊹𓊹: 𓅨𓂋 𓉐𓉐 𓏙 𓋹 𓈖 𓎢 𓎛𓎿𓊃 𓏤!",
    "endGrandmasterName": "🏆 𓊹𓏏𓂋 𓊹!",
    "endGrandmasterDoc": "𓊹 𓋴: Die letzte Hieroglyphe ist gemeißelt. Alle Tokens kehren ins Jenseits zurück. Die Pyramide der Prozesse ist vollendet! 𓂀",
    "timerPauseHeroName": "⏱️ 1. 𓇳: 𓊹 𓎛𓂝 (3𓏤)",
    "timerPauseHeroDoc": "⏸️ 𓇳 𓊹: Das Token Game hält 3 Sonnenwenden an. Betrachte die Hieroglyphen-Rollen der Priester!",
    "timerPauseXorName": "⏱️ 2. 𓇳: 𓊃𓏤 𓈖 (3𓏤)",
    "timerPauseXorDoc": "⏸️ 𓇳 𓊹: Bereite dich vor, am XOR-Tor per Klick zwischen den Pfaden des Nils zu wählen!",
    "timerPauseGuildName": "⏱️ 4. 𓇳: 𓅓𓂝 𓊹 (3𓏤)",
    "timerPauseGuildDoc": "⏸️ 𓇳 𓊹: Die Hohepriester prüfen den Papyrus vor der Pharaonen-Krönung!",
    "noteStart": "▶️ 𓊹𓏏 1: 𓋴𓏏!\nKlicke Play (▶) oder auf\ndie Kartusche des Anfangs,\num das Abenteuer zu beginnen!",
    "noteChooseHero": "👆 𓊹𓏏 2: 𓅃𓂋!\nUser Tasks brauchen deinen Klick:\nKlicke auf den Hieroglyphen-Task!",
    "noteXorChoice": "🎯 𓊹𓏏 3: 𓊃𓏤!\nKlicke auf einen Pfeil:\nPfad des Horus (oben) ODER\nPfad des Schattens (unten)!",
    "noteTrap": "⚡ 𓃹 𓂝𓃀!\nKlicke auf den Blitz,\num Apophis' Falle zu testen!",
    "noteAndSplit": "➕ 𓎛𓂝 𓋴𓈖:\nZWEI Tokens fließen wie die Arme\ndes Nils gleichzeitig parallel!",
    "noteRestCamp": "⏱️ 𓇳 𓂋:\n3 Sonnenwenden Rast am Nil\nvor der Pyramidenkammer!",
    "noteVault": "📦 𓉐 𓊹:\nKlicke auf das Ankh-Schloss,\num das Auge des Horus zu bergen!",
    "noteGrandmaster": "👑 𓊹𓏏𓂋 𓊹!\nAlle Hieroglyphen gemeißelt!\nDu beherrschst BPMN 2.0! 𓂀",
    "laneDanger": "🐺 𓃭𓅓𓏏𓊃 𓅓 𓊪𓏏𓂋𓏤 (Khaset Per)",
    "dataLogbookName": "📄 𓏛𓏤 𓋹𓍑𓋴 𓇳 𓄿𓏏 (Sesh Medjat)",
    "dataLogbookDoc": "BPMN 𓏛𓏤: 𓊃𓈙 𓅨𓂋 𓈖 𓉐𓉐 𓏤 𓇳.",
    "noteWorkshopHint": "🔨 𓉐𓂋𓏏:\n ir kAt m-a\n(ir xkrw)!"
  }
};

export function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function resolveLang(lang) {
  if (!lang) return 'de';
  if (QUEST_TRANSLATIONS[lang]) return lang;
  const clean = String(lang).toLowerCase().replace('-', '_');
  if (QUEST_TRANSLATIONS[clean]) return clean;
  if (clean.includes('tw') || clean.includes('hant') || clean.includes('trad')) return 'zh_TW';
  if (clean.includes('zh') || clean.includes('hans') || clean.includes('cn')) return 'zh';
  if (clean.startsWith('de')) return 'de';
  if (clean.startsWith('en')) return 'en';
  if (clean.startsWith('es')) return 'es';
  if (clean.startsWith('fr')) return 'fr';
  if (clean.startsWith('it')) return 'it';
  if (clean.startsWith('pt')) return 'pt';
  if (clean.startsWith('nl')) return 'nl';
  if (clean.startsWith('pl')) return 'pl';
  if (clean.startsWith('ru')) return 'ru';
  if (clean.startsWith('ja')) return 'ja';
  if (clean.startsWith('sv')) return 'sv';
  if (clean.startsWith('da')) return 'da';
  if (clean.startsWith('no') || clean.startsWith('nb') || clean.startsWith('nn')) return 'nb';
  if (clean.startsWith('fi')) return 'fi';
  if (clean.startsWith('cs')) return 'cs';
  if (clean.startsWith('tr')) return 'tr';
  if (clean.startsWith('el')) return 'el';
  if (clean.startsWith('hu')) return 'hu';
  if (clean.startsWith('ro')) return 'ro';
  if (clean.startsWith('uk')) return 'uk';
  if (clean.startsWith('ar')) return 'ar';
  if (clean.startsWith('id')) return 'id';
  if (clean.startsWith('ko')) return 'ko';
  if (clean.startsWith('gd') || clean.includes('gaelic') || clean.includes('gaidhlig')) return 'gd';
  if (clean.includes('futhark') || clean.includes('runic') || clean.includes('rune')) return 'futhark';
  if (clean.includes('navi') || clean.includes('na\'vi') || clean.includes('pandora')) return 'navi';
  if (clean.startsWith('sa') && !clean.startsWith('sv')) return 'sa';
  if (clean.includes('sux') || clean.includes('sumerian') || clean.includes('sumer') || clean.includes('cuneiform')) return 'sux';
  if (clean.includes('egy') || clean.includes('hieroglyph') || clean.includes('pharao')) return 'egy';
  return 'de';
}

/**
 * Checks if a given BPMN XML represents the BPMN-Quest learning scenario.
 *
 * @param {string} xml BPMN 2.0 XML string.
 * @return {boolean}
 */
export function isQuestDiagram(xml) {
  if (!xml || typeof xml !== 'string') return false;
  return xml.includes('Process_BpmnQuest') ||
         xml.includes('Definitions_BpmnQuest') ||
         xml.includes('Collaboration_BpmnQuest') ||
         xml.includes('StartEvent_Quest');
}

export function getQuestXml(lang = 'de') {
  const actualLang = resolveLang(lang);
  const t = QUEST_TRANSLATIONS[actualLang] || QUEST_TRANSLATIONS.de;

  return `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_BpmnQuest"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:collaboration id="Collaboration_BpmnQuest">
    <bpmn:participant id="Participant_Guild" name="${escapeXml(t.poolName)}" processRef="Process_BpmnQuest" />
    <bpmn:textAnnotation id="TextAnnotation_Banner1">
      <bpmn:text>${escapeXml(t.banner1)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:textAnnotation id="TextAnnotation_Banner2">
      <bpmn:text>${escapeXml(t.banner2)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:textAnnotation id="TextAnnotation_Banner3">
      <bpmn:text>${escapeXml(t.banner3)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:textAnnotation id="TextAnnotation_Banner4">
      <bpmn:text>${escapeXml(t.banner4)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:textAnnotation id="TextAnnotation_Banner5">
      <bpmn:text>${escapeXml(t.banner5)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:textAnnotation id="TextAnnotation_Banner6">
      <bpmn:text>${escapeXml(t.banner6 || (actualLang === 'de' ? '🏛️ KAPITEL 6: Die Architekten-Prüfung (Cross-Lane Modellierung & Meisterstück)' : '🏛️ CHAPTER 6: Architect Exam (Cross-Lane Modeling & Masterpiece)'))}</bpmn:text>
    </bpmn:textAnnotation>
  </bpmn:collaboration>

  <bpmn:process id="Process_BpmnQuest" isExecutable="false">
    <bpmn:laneSet id="LaneSet_Quest">
      <bpmn:lane id="Lane_Hero" name="${escapeXml(t.laneHero)}">
        <bpmn:flowNodeRef>StartEvent_Quest</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_ChooseHero</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Timer_PauseHero</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_PackGear</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Timer_PauseXor</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Gateway_XorChoice</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_StudyLinter</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Gateway_MergeXor</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Gateway_AndSplit</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_CastSpell</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Gateway_AndJoin</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Timer_RestCamp</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>SubProcess_Vault</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_PlanMasterpiece</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_Danger" name="${escapeXml(t.laneDanger || t.laneWorkshop)}">
        <bpmn:flowNodeRef>Task_TrollCave</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Boundary_Trap</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_CallHelp</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_Escaped</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_Workshop" name="${escapeXml(t.laneWorkshop)}">
        <bpmn:flowNodeRef>Task_ForgeSword</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_Guild" name="${escapeXml(t.laneGuild)}">
        <bpmn:flowNodeRef>Task_VerifyGuild</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Timer_PauseGuild</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_AwardMaster</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_FinalAudit</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_Grandmaster</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>

    <bpmn:dataObject id="DataObject_Logbook" />
    <bpmn:dataObjectReference id="DataObjectReference_Logbook" name="${escapeXml(t.dataLogbookName)}" dataObjectRef="DataObject_Logbook">
      <bpmn:documentation>${escapeXml(t.dataLogbookDoc)}</bpmn:documentation>
    </bpmn:dataObjectReference>

    <bpmn:startEvent id="StartEvent_Quest" name="${escapeXml(t.startName)}">
      <bpmn:documentation>${escapeXml(t.startDoc)}</bpmn:documentation>
      <bpmn:outgoing>Flow_1</bpmn:outgoing>
    </bpmn:startEvent>

    <bpmn:userTask id="Task_ChooseHero" name="${escapeXml(t.taskChooseHeroName)}">
      <bpmn:documentation>${escapeXml(t.taskChooseHeroDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_1</bpmn:incoming>
      <bpmn:outgoing>Flow_ToPauseHero</bpmn:outgoing>
    </bpmn:userTask>

    <bpmn:intermediateCatchEvent id="Timer_PauseHero" name="${escapeXml(t.timerPauseHeroName)}">
      <bpmn:documentation>${escapeXml(t.timerPauseHeroDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_ToPauseHero</bpmn:incoming>
      <bpmn:outgoing>Flow_ToPack</bpmn:outgoing>
      <bpmn:timerEventDefinition id="TimerDef_PauseHero">
        <bpmn:timeDuration xsi:type="bpmn:tFormalExpression">PT3S</bpmn:timeDuration>
      </bpmn:timerEventDefinition>
    </bpmn:intermediateCatchEvent>

    <bpmn:manualTask id="Task_PackGear" name="${escapeXml(t.taskPackGearName)}">
      <bpmn:documentation>${escapeXml(t.taskPackGearDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_ToPack</bpmn:incoming>
      <bpmn:outgoing>Flow_ToPauseXor</bpmn:outgoing>
    </bpmn:manualTask>

    <bpmn:intermediateCatchEvent id="Timer_PauseXor" name="${escapeXml(t.timerPauseXorName)}">
      <bpmn:documentation>${escapeXml(t.timerPauseXorDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_ToPauseXor</bpmn:incoming>
      <bpmn:outgoing>Flow_ToXor</bpmn:outgoing>
      <bpmn:timerEventDefinition id="TimerDef_PauseXor">
        <bpmn:timeDuration xsi:type="bpmn:tFormalExpression">PT3S</bpmn:timeDuration>
      </bpmn:timerEventDefinition>
    </bpmn:intermediateCatchEvent>

    <bpmn:exclusiveGateway id="Gateway_XorChoice" name="${escapeXml(t.gatewayXorName)}" default="Flow_SafePath">
      <bpmn:documentation>${escapeXml(t.gatewayXorDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_ToXor</bpmn:incoming>
      <bpmn:outgoing>Flow_SafePath</bpmn:outgoing>
      <bpmn:outgoing>Flow_HazardPath</bpmn:outgoing>
    </bpmn:exclusiveGateway>

    <bpmn:sequenceFlow id="Flow_SafePath" name="${escapeXml(t.flowHeroPath)}" sourceRef="Gateway_XorChoice" targetRef="Task_StudyLinter" />
    <bpmn:sequenceFlow id="Flow_HazardPath" name="${escapeXml(t.flowDarkForest)}" sourceRef="Gateway_XorChoice" targetRef="Task_TrollCave" />

    <bpmn:task id="Task_StudyLinter" name="${escapeXml(t.taskStudyLinterName)}">
      <bpmn:documentation>${escapeXml(t.taskStudyLinterDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_SafePath</bpmn:incoming>
      <bpmn:outgoing>Flow_4</bpmn:outgoing>
    </bpmn:task>

    <bpmn:task id="Task_TrollCave" name="${escapeXml(t.taskTrollCaveName)}">
      <bpmn:documentation>${escapeXml(t.taskTrollCaveDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_HazardPath</bpmn:incoming>
      <bpmn:outgoing>Flow_CaveDone</bpmn:outgoing>
    </bpmn:task>

    <bpmn:boundaryEvent id="Boundary_Trap" name="${escapeXml(t.boundaryTrapName)}" attachedToRef="Task_TrollCave">
      <bpmn:documentation>${escapeXml(t.boundaryTrapDoc)}</bpmn:documentation>
      <bpmn:outgoing>Flow_TrapFired</bpmn:outgoing>
      <bpmn:errorEventDefinition id="ErrorDef_Trap" />
    </bpmn:boundaryEvent>

    <bpmn:sendTask id="Task_CallHelp" name="${escapeXml(t.taskCallHelpName)}">
      <bpmn:documentation>${escapeXml(t.taskCallHelpDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_TrapFired</bpmn:incoming>
    </bpmn:sendTask>

    <bpmn:endEvent id="EndEvent_Escaped" name="${escapeXml(t.endEscapedName)}">
      <bpmn:documentation>${escapeXml(t.endEscapedDoc)}</bpmn:documentation>
    </bpmn:endEvent>

    <bpmn:exclusiveGateway id="Gateway_MergeXor" name="${escapeXml(t.gatewayMergeXorName)}">
      <bpmn:incoming>Flow_4</bpmn:incoming>
      <bpmn:incoming>Flow_CaveDone</bpmn:incoming>
      <bpmn:outgoing>Flow_ToAnd</bpmn:outgoing>
    </bpmn:exclusiveGateway>

    <bpmn:parallelGateway id="Gateway_AndSplit" name="${escapeXml(t.gatewayAndSplitName)}">
      <bpmn:documentation>${escapeXml(t.gatewayAndSplitDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_ToAnd</bpmn:incoming>
      <bpmn:outgoing>Flow_SpellBranch</bpmn:outgoing>
      <bpmn:outgoing>Flow_SwordBranch</bpmn:outgoing>
    </bpmn:parallelGateway>

    <bpmn:businessRuleTask id="Task_CastSpell" name="${escapeXml(t.taskCastSpellName)}">
      <bpmn:documentation>${escapeXml(t.taskCastSpellDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_SpellBranch</bpmn:incoming>
      <bpmn:outgoing>Flow_SpellDone</bpmn:outgoing>
    </bpmn:businessRuleTask>

    <bpmn:serviceTask id="Task_ForgeSword" name="${escapeXml(t.taskForgeSwordName)}">
      <bpmn:documentation>${escapeXml(t.taskForgeSwordDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_SwordBranch</bpmn:incoming>
      <bpmn:outgoing>Flow_SwordDone</bpmn:outgoing>
    </bpmn:serviceTask>

    <bpmn:parallelGateway id="Gateway_AndJoin" name="${escapeXml(t.gatewayAndJoinName)}">
      <bpmn:documentation>${escapeXml(t.gatewayAndJoinDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_SpellDone</bpmn:incoming>
      <bpmn:incoming>Flow_SwordDone</bpmn:incoming>
      <bpmn:outgoing>Flow_ToTimer</bpmn:outgoing>
    </bpmn:parallelGateway>

    <bpmn:intermediateCatchEvent id="Timer_RestCamp" name="${escapeXml(t.timerRestName)}">
      <bpmn:documentation>${escapeXml(t.timerRestDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_ToTimer</bpmn:incoming>
      <bpmn:outgoing>Flow_ToVault</bpmn:outgoing>
      <bpmn:timerEventDefinition id="TimerDef_Rest">
        <bpmn:timeDuration xsi:type="bpmn:tFormalExpression">PT3S</bpmn:timeDuration>
      </bpmn:timerEventDefinition>
    </bpmn:intermediateCatchEvent>

    <bpmn:subProcess id="SubProcess_Vault" name="${escapeXml(t.subProcessVaultName)}">
      <bpmn:documentation>${escapeXml(t.subProcessVaultDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_ToVault</bpmn:incoming>
      <bpmn:outgoing>Flow_ToAudit</bpmn:outgoing>
      <bpmn:startEvent id="SubStart_Vault" name="${escapeXml(t.subStartName)}">
        <bpmn:outgoing>Flow_Sub1</bpmn:outgoing>
      </bpmn:startEvent>
      <bpmn:userTask id="Task_PickLock" name="${escapeXml(t.taskPickLockName)}">
        <bpmn:documentation>${escapeXml(t.taskPickLockDoc)}</bpmn:documentation>
        <bpmn:incoming>Flow_Sub1</bpmn:incoming>
        <bpmn:outgoing>Flow_Sub2</bpmn:outgoing>
      </bpmn:userTask>
      <bpmn:task id="Task_LootRelic" name="${escapeXml(t.taskLootRelicName)}">
        <bpmn:documentation>${escapeXml(t.taskLootRelicDoc)}</bpmn:documentation>
        <bpmn:incoming>Flow_Sub2</bpmn:incoming>
        <bpmn:outgoing>Flow_Sub3</bpmn:outgoing>
      </bpmn:task>
      <bpmn:endEvent id="SubEnd_Vault" name="${escapeXml(t.subEndName)}">
        <bpmn:incoming>Flow_Sub3</bpmn:incoming>
      </bpmn:endEvent>
      <bpmn:sequenceFlow id="Flow_Sub1" sourceRef="SubStart_Vault" targetRef="Task_PickLock" />
      <bpmn:sequenceFlow id="Flow_Sub2" sourceRef="Task_PickLock" targetRef="Task_LootRelic" />
      <bpmn:sequenceFlow id="Flow_Sub3" sourceRef="Task_LootRelic" targetRef="SubEnd_Vault" />
    </bpmn:subProcess>

    <bpmn:serviceTask id="Task_VerifyGuild" name="${escapeXml(t.taskVerifyGuildName)}">
      <bpmn:documentation>${escapeXml(t.taskVerifyGuildDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_ToAudit</bpmn:incoming>
      <bpmn:outgoing>Flow_AuditPassed</bpmn:outgoing>
      <bpmn:dataOutputAssociation id="DataOutputAssoc_Logbook">
        <bpmn:targetRef>DataObjectReference_Logbook</bpmn:targetRef>
      </bpmn:dataOutputAssociation>
    </bpmn:serviceTask>

    <bpmn:intermediateCatchEvent id="Timer_PauseGuild" name="${escapeXml(t.timerPauseGuildName)}">
      <bpmn:documentation>${escapeXml(t.timerPauseGuildDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_AuditPassed</bpmn:incoming>
      <bpmn:outgoing>Flow_ToAward</bpmn:outgoing>
      <bpmn:timerEventDefinition id="TimerDef_PauseGuild">
        <bpmn:timeDuration xsi:type="bpmn:tFormalExpression">PT3S</bpmn:timeDuration>
      </bpmn:timerEventDefinition>
    </bpmn:intermediateCatchEvent>

    <bpmn:userTask id="Task_AwardMaster" name="${escapeXml(t.taskAwardMasterName)}">
      <bpmn:documentation>${escapeXml(t.taskAwardMasterDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_ToAward</bpmn:incoming>
      <bpmn:outgoing>Flow_ToArchExam</bpmn:outgoing>
    </bpmn:userTask>

    <bpmn:userTask id="Task_PlanMasterpiece" name="${escapeXml(t.taskPlanMasterpieceName || (actualLang === 'de' ? '🏛️ Meisterwerk planen & Vorgaben prüfen' : '🏛️ Plan Masterpiece & Review Specs'))}">
      <bpmn:documentation>${escapeXml(t.taskPlanMasterpieceDoc || (actualLang === 'de' ? '🏛️ ARCHITEKTEN-PRÜFUNG: Plane das Meisterwerk über 3 Swimlanes hinweg! Verbinde diese Aufgabe mit der Werkstatt-Lane.' : '🏛️ ARCHITECT EXAM: Plan the masterpiece across 3 swimlanes! Connect this task to Workshop Lane.'))}</bpmn:documentation>
      <bpmn:incoming>Flow_ToArchExam</bpmn:incoming>
    </bpmn:userTask>

    <bpmn:serviceTask id="Task_FinalAudit" name="${escapeXml(t.taskFinalAuditName || (actualLang === 'de' ? '🏛️ Finale Bauabnahme & Großmeister-Siegelung' : '🏛️ Final Architectural Audit & Seal'))}">
      <bpmn:documentation>${escapeXml(t.taskFinalAuditDoc || (actualLang === 'de' ? '🏛️ QUALITÄTSPRÜFUNG: Die Gilde prüft die Vollständigkeit des Lane-übergreifenden Modells!' : '🏛️ QUALITY AUDIT: The Guild inspects the cross-lane model integrity!'))}</bpmn:documentation>
      <bpmn:outgoing>Flow_FinalDone</bpmn:outgoing>
    </bpmn:serviceTask>

    <bpmn:endEvent id="EndEvent_Grandmaster" name="${escapeXml(t.endGrandmasterName)}">
      <bpmn:documentation>${escapeXml(t.endGrandmasterDoc)}</bpmn:documentation>
      <bpmn:incoming>Flow_FinalDone</bpmn:incoming>
      <bpmn:terminateEventDefinition id="TerminateDef_Final" />
    </bpmn:endEvent>

    <!-- Attached Instruction Notes -->
    <bpmn:textAnnotation id="TextAnnotation_Start">
      <bpmn:text>${escapeXml(t.noteStart)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Assoc_Start" sourceRef="StartEvent_Quest" targetRef="TextAnnotation_Start" />

    <bpmn:textAnnotation id="TextAnnotation_Hero">
      <bpmn:text>${escapeXml(t.noteChooseHero)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Assoc_Hero" sourceRef="Task_ChooseHero" targetRef="TextAnnotation_Hero" />

    <bpmn:textAnnotation id="TextAnnotation_Xor">
      <bpmn:text>${escapeXml(t.noteXorChoice)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Assoc_Xor" sourceRef="Gateway_XorChoice" targetRef="TextAnnotation_Xor" />

    <bpmn:textAnnotation id="TextAnnotation_Trap">
      <bpmn:text>${escapeXml(t.noteTrap)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Assoc_Trap" sourceRef="Boundary_Trap" targetRef="TextAnnotation_Trap" />

    <bpmn:textAnnotation id="TextAnnotation_And">
      <bpmn:text>${escapeXml(t.noteAndSplit)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Assoc_And" sourceRef="Gateway_AndSplit" targetRef="TextAnnotation_And" />

    <bpmn:textAnnotation id="TextAnnotation_RestCamp">
      <bpmn:text>${escapeXml(t.noteRestCamp)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Assoc_RestCamp" sourceRef="Timer_RestCamp" targetRef="TextAnnotation_RestCamp" />

    <bpmn:textAnnotation id="TextAnnotation_Vault">
      <bpmn:text>${escapeXml(t.noteVault)}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Assoc_Vault" sourceRef="SubProcess_Vault" targetRef="TextAnnotation_Vault" />

    <bpmn:textAnnotation id="TextAnnotation_ArchHint">
      <bpmn:text>${escapeXml(t.noteArchExam || (actualLang === 'de' ? '🔨 MEISTERPRÜFUNG:\n1. Baue Task in Lane 3!\n2. Verbinde Lane 1 ➔ Lane 3!\n3. Verbinde Lane 3 ➔ Lane 4!' : '🔨 ARCHITECT TRIAL:\n1. Build Task in Lane 3!\n2. Connect Lane 1 ➔ Lane 3!\n3. Connect Lane 3 ➔ Lane 4!'))}</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Assoc_ArchHint" sourceRef="Task_PlanMasterpiece" targetRef="TextAnnotation_ArchHint" />

    <bpmn:textAnnotation id="TextAnnotation_WorkshopHint">
      <bpmn:text>${escapeXml(t.noteWorkshopHint || (actualLang === 'de' ? '🔨 Bauplatz Werkstatt:\nErstelle hier eine Aufgabe\n(z.B. \"Artefakt herstellen\")!' : '🔨 Workshop Site:\nCreate a task here\n(e.g. \"Craft Artifact\")!'))}</bpmn:text>
    </bpmn:textAnnotation>

    <bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_Quest" targetRef="Task_ChooseHero" />
    <bpmn:sequenceFlow id="Flow_ToPauseHero" sourceRef="Task_ChooseHero" targetRef="Timer_PauseHero" />
    <bpmn:sequenceFlow id="Flow_ToPack" sourceRef="Timer_PauseHero" targetRef="Task_PackGear" />
    <bpmn:sequenceFlow id="Flow_ToPauseXor" sourceRef="Task_PackGear" targetRef="Timer_PauseXor" />
    <bpmn:sequenceFlow id="Flow_ToXor" sourceRef="Timer_PauseXor" targetRef="Gateway_XorChoice" />
    <bpmn:sequenceFlow id="Flow_4" sourceRef="Task_StudyLinter" targetRef="Gateway_MergeXor" />
    <bpmn:sequenceFlow id="Flow_CaveDone" sourceRef="Task_TrollCave" targetRef="Gateway_MergeXor" />
    <bpmn:sequenceFlow id="Flow_TrapFired" sourceRef="Boundary_Trap" targetRef="Task_CallHelp" />
    <bpmn:sequenceFlow id="Flow_ToAnd" sourceRef="Gateway_MergeXor" targetRef="Gateway_AndSplit" />
    <bpmn:sequenceFlow id="Flow_SpellBranch" sourceRef="Gateway_AndSplit" targetRef="Task_CastSpell" />
    <bpmn:sequenceFlow id="Flow_SwordBranch" sourceRef="Gateway_AndSplit" targetRef="Task_ForgeSword" />
    <bpmn:sequenceFlow id="Flow_SpellDone" sourceRef="Task_CastSpell" targetRef="Gateway_AndJoin" />
    <bpmn:sequenceFlow id="Flow_ToTimer" sourceRef="Gateway_AndJoin" targetRef="Timer_RestCamp" />
    <bpmn:sequenceFlow id="Flow_ToVault" sourceRef="Timer_RestCamp" targetRef="SubProcess_Vault" />
    <bpmn:sequenceFlow id="Flow_ToAudit" sourceRef="SubProcess_Vault" targetRef="Task_VerifyGuild" />
    <bpmn:sequenceFlow id="Flow_AuditPassed" sourceRef="Task_VerifyGuild" targetRef="Timer_PauseGuild" />
    <bpmn:sequenceFlow id="Flow_ToAward" sourceRef="Timer_PauseGuild" targetRef="Task_AwardMaster" />
    <bpmn:sequenceFlow id="Flow_ToArchExam" sourceRef="Task_AwardMaster" targetRef="Task_PlanMasterpiece" />
    <bpmn:sequenceFlow id="Flow_FinalDone" sourceRef="Task_FinalAudit" targetRef="EndEvent_Grandmaster" />
  </bpmn:process>

  <bpmndi:BPMNDiagram id="BPMNDiagram_Quest">
    <bpmndi:BPMNPlane id="BPMNPlane_Quest" bpmnElement="Collaboration_BpmnQuest">
      <bpmndi:BPMNShape id="Participant_Guild_di" bpmnElement="Participant_Guild" isHorizontal="true">
        <dc:Bounds x="160" y="80" width="4100" height="830" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_Hero_di" bpmnElement="Lane_Hero" isHorizontal="true">
        <dc:Bounds x="190" y="80" width="4070" height="220" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_Danger_di" bpmnElement="Lane_Danger" isHorizontal="true">
        <dc:Bounds x="190" y="300" width="4070" height="190" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_Workshop_di" bpmnElement="Lane_Workshop" isHorizontal="true">
        <dc:Bounds x="190" y="490" width="4070" height="190" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_Guild_di" bpmnElement="Lane_Guild" isHorizontal="true">
        <dc:Bounds x="190" y="680" width="4070" height="230" />
      </bpmndi:BPMNShape>

      <!-- Chapter Banners (Positioned strictly above the pool) -->
      <bpmndi:BPMNShape id="TextAnnotation_Banner1_di" bpmnElement="TextAnnotation_Banner1">
        <dc:Bounds x="250" y="15" width="600" height="45" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_Banner2_di" bpmnElement="TextAnnotation_Banner2">
        <dc:Bounds x="910" y="15" width="560" height="45" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_Banner3_di" bpmnElement="TextAnnotation_Banner3">
        <dc:Bounds x="1520" y="15" width="480" height="45" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_Banner4_di" bpmnElement="TextAnnotation_Banner4">
        <dc:Bounds x="2040" y="15" width="660" height="45" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_Banner5_di" bpmnElement="TextAnnotation_Banner5">
        <dc:Bounds x="2740" y="15" width="540" height="45" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_Banner6_di" bpmnElement="TextAnnotation_Banner6">
        <dc:Bounds x="3320" y="15" width="700" height="45" />
      </bpmndi:BPMNShape>

      <!-- LANE 1 ELEMENTS (Held / User) -->
      <bpmndi:BPMNShape id="StartEvent_Quest_di" bpmnElement="StartEvent_Quest">
        <dc:Bounds x="310" y="157" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="275" y="202" width="106" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_ChooseHero_di" bpmnElement="Task_ChooseHero">
        <dc:Bounds x="430" y="135" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Timer_PauseHero_di" bpmnElement="Timer_PauseHero">
        <dc:Bounds x="630" y="157" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="600" y="202" width="96" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_PackGear_di" bpmnElement="Task_PackGear">
        <dc:Bounds x="730" y="135" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Timer_PauseXor_di" bpmnElement="Timer_PauseXor">
        <dc:Bounds x="930" y="157" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="900" y="202" width="96" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_XorChoice_di" bpmnElement="Gateway_XorChoice" isMarkerVisible="true">
        <dc:Bounds x="1040" y="150" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1085" y="205" width="95" height="28" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_StudyLinter_di" bpmnElement="Task_StudyLinter">
        <dc:Bounds x="1200" y="135" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_MergeXor_di" bpmnElement="Gateway_MergeXor" isMarkerVisible="true">
        <dc:Bounds x="1410" y="150" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_AndSplit_di" bpmnElement="Gateway_AndSplit">
        <dc:Bounds x="1540" y="150" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1470" y="205" width="85" height="28" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_CastSpell_di" bpmnElement="Task_CastSpell">
        <dc:Bounds x="1660" y="135" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_AndJoin_di" bpmnElement="Gateway_AndJoin">
        <dc:Bounds x="1860" y="150" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Timer_RestCamp_di" bpmnElement="Timer_RestCamp">
        <dc:Bounds x="1960" y="157" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1925" y="122" width="106" height="25" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>

      <!-- SubProcess in Lane 1 -->
      <bpmndi:BPMNShape id="SubProcess_Vault_di" bpmnElement="SubProcess_Vault" isExpanded="true">
        <dc:Bounds x="2060" y="95" width="530" height="140" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="SubStart_Vault_di" bpmnElement="SubStart_Vault">
        <dc:Bounds x="2090" y="147" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_PickLock_di" bpmnElement="Task_PickLock">
        <dc:Bounds x="2165" y="125" width="120" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_LootRelic_di" bpmnElement="Task_LootRelic">
        <dc:Bounds x="2325" y="125" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="SubEnd_Vault_di" bpmnElement="SubEnd_Vault">
        <dc:Bounds x="2510" y="147" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_Sub1_di" bpmnElement="Flow_Sub1">
        <di:waypoint x="2126" y="165" />
        <di:waypoint x="2165" y="165" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Sub2_di" bpmnElement="Flow_Sub2">
        <di:waypoint x="2285" y="165" />
        <di:waypoint x="2325" y="165" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Sub3_di" bpmnElement="Flow_Sub3">
        <di:waypoint x="2455" y="165" />
        <di:waypoint x="2510" y="165" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNShape id="Task_PlanMasterpiece_di" bpmnElement="Task_PlanMasterpiece">
        <dc:Bounds x="3290" y="135" width="150" height="80" />
      </bpmndi:BPMNShape>

      <!-- LANE 2 ELEMENTS (Gefahrenzone y=300..490) -->
      <bpmndi:BPMNShape id="Task_TrollCave_di" bpmnElement="Task_TrollCave">
        <dc:Bounds x="1190" y="330" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Boundary_Trap_di" bpmnElement="Boundary_Trap">
        <dc:Bounds x="1242" y="392" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1225" y="430" width="70" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_CallHelp_di" bpmnElement="Task_CallHelp">
        <dc:Bounds x="1390" y="395" width="130" height="75" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_Escaped_di" bpmnElement="EndEvent_Escaped">
        <dc:Bounds x="1570" y="415" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1535" y="455" width="106" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>

      <!-- LANE 3 ELEMENTS (Zauberwerkstatt y=490..680) -->
      <bpmndi:BPMNShape id="Task_ForgeSword_di" bpmnElement="Task_ForgeSword">
        <dc:Bounds x="1660" y="545" width="140" height="80" />
      </bpmndi:BPMNShape>

      <!-- LANE 4 ELEMENTS (Gilde der Prozessmeister y=680..910) -->
      <bpmndi:BPMNShape id="Task_VerifyGuild_di" bpmnElement="Task_VerifyGuild">
        <dc:Bounds x="2700" y="725" width="150" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="DataObjectReference_Logbook_di" bpmnElement="DataObjectReference_Logbook">
        <dc:Bounds x="2750" y="585" width="36" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2710" y="555" width="120" height="25" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="DataOutputAssoc_Logbook_di" bpmnElement="DataOutputAssoc_Logbook">
        <di:waypoint x="2775" y="725" />
        <di:waypoint x="2775" y="635" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Timer_PauseGuild_di" bpmnElement="Timer_PauseGuild">
        <dc:Bounds x="2900" y="747" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2875" y="788" width="86" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_AwardMaster_di" bpmnElement="Task_AwardMaster">
        <dc:Bounds x="2990" y="725" width="150" height="80" />
      </bpmndi:BPMNShape>

      <!-- ATTACHED INSTRUCTION NOTES (Optimized Zero-Collision Coordinates) -->
      <bpmndi:BPMNShape id="TextAnnotation_Start_di" bpmnElement="TextAnnotation_Start">
        <dc:Bounds x="220" y="86" width="160" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Assoc_Start_di" bpmnElement="Assoc_Start">
        <di:waypoint x="310" y="157" />
        <di:waypoint x="300" y="136" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNShape id="TextAnnotation_Hero_di" bpmnElement="TextAnnotation_Hero">
        <dc:Bounds x="420" y="232" width="160" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Assoc_Hero_di" bpmnElement="Assoc_Hero">
        <di:waypoint x="500" y="215" />
        <di:waypoint x="500" y="232" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNShape id="TextAnnotation_Xor_di" bpmnElement="TextAnnotation_Xor">
        <dc:Bounds x="960" y="80" width="200" height="52" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Assoc_Xor_di" bpmnElement="Assoc_Xor">
        <di:waypoint x="1065" y="150" />
        <di:waypoint x="1065" y="132" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNShape id="TextAnnotation_Trap_di" bpmnElement="TextAnnotation_Trap">
        <dc:Bounds x="1020" y="410" width="150" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Assoc_Trap_di" bpmnElement="Assoc_Trap">
        <di:waypoint x="1242" y="410" />
        <di:waypoint x="1170" y="425" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNShape id="TextAnnotation_And_di" bpmnElement="TextAnnotation_And">
        <dc:Bounds x="1450" y="86" width="160" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Assoc_And_di" bpmnElement="Assoc_And">
        <di:waypoint x="1565" y="150" />
        <di:waypoint x="1565" y="136" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNShape id="TextAnnotation_RestCamp_di" bpmnElement="TextAnnotation_RestCamp">
        <dc:Bounds x="1890" y="225" width="140" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Assoc_RestCamp_di" bpmnElement="Assoc_RestCamp">
        <di:waypoint x="1978" y="193" />
        <di:waypoint x="1978" y="225" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNShape id="TextAnnotation_Vault_di" bpmnElement="TextAnnotation_Vault">
        <dc:Bounds x="2160" y="244" width="320" height="46" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Assoc_Vault_di" bpmnElement="Assoc_Vault">
        <di:waypoint x="2325" y="235" />
        <di:waypoint x="2325" y="244" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNShape id="TextAnnotation_ArchHint_di" bpmnElement="TextAnnotation_ArchHint">
        <dc:Bounds x="3240" y="228" width="250" height="56" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Assoc_ArchHint_di" bpmnElement="Assoc_ArchHint">
        <di:waypoint x="3365" y="215" />
        <di:waypoint x="3365" y="228" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNShape id="TextAnnotation_WorkshopHint_di" bpmnElement="TextAnnotation_WorkshopHint">
        <dc:Bounds x="3450" y="550" width="220" height="50" />
      </bpmndi:BPMNShape>

      <bpmndi:BPMNShape id="Task_FinalAudit_di" bpmnElement="Task_FinalAudit">
        <dc:Bounds x="3680" y="725" width="150" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_Grandmaster_di" bpmnElement="EndEvent_Grandmaster">
        <dc:Bounds x="3890" y="747" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="3870" y="788" width="76" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>

      <!-- SEQUENCE FLOW EDGES (Exact rectilinear paths with non-overlapping labels) -->
      <bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1">
        <di:waypoint x="346" y="175" />
        <di:waypoint x="430" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToPauseHero_di" bpmnElement="Flow_ToPauseHero">
        <di:waypoint x="570" y="175" />
        <di:waypoint x="630" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToPack_di" bpmnElement="Flow_ToPack">
        <di:waypoint x="666" y="175" />
        <di:waypoint x="730" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToPauseXor_di" bpmnElement="Flow_ToPauseXor">
        <di:waypoint x="870" y="175" />
        <di:waypoint x="930" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToXor_di" bpmnElement="Flow_ToXor">
        <di:waypoint x="966" y="175" />
        <di:waypoint x="1040" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_SafePath_di" bpmnElement="Flow_SafePath">
        <di:waypoint x="1090" y="175" />
        <di:waypoint x="1200" y="175" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1100" y="152" width="90" height="18" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_HazardPath_di" bpmnElement="Flow_HazardPath">
        <di:waypoint x="1065" y="200" />
        <di:waypoint x="1065" y="370" />
        <di:waypoint x="1190" y="370" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1080" y="300" width="95" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_di" bpmnElement="Flow_4">
        <di:waypoint x="1340" y="175" />
        <di:waypoint x="1410" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_CaveDone_di" bpmnElement="Flow_CaveDone">
        <di:waypoint x="1330" y="370" />
        <di:waypoint x="1360" y="370" />
        <di:waypoint x="1360" y="175" />
        <di:waypoint x="1410" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_TrapFired_di" bpmnElement="Flow_TrapFired">
        <di:waypoint x="1260" y="428" />
        <di:waypoint x="1260" y="432" />
        <di:waypoint x="1390" y="432" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToAnd_di" bpmnElement="Flow_ToAnd">
        <di:waypoint x="1460" y="175" />
        <di:waypoint x="1540" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_SpellBranch_di" bpmnElement="Flow_SpellBranch">
        <di:waypoint x="1590" y="175" />
        <di:waypoint x="1660" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_SwordBranch_di" bpmnElement="Flow_SwordBranch">
        <di:waypoint x="1565" y="200" />
        <di:waypoint x="1565" y="585" />
        <di:waypoint x="1660" y="585" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_SpellDone_di" bpmnElement="Flow_SpellDone">
        <di:waypoint x="1800" y="175" />
        <di:waypoint x="1860" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_SwordDone_di" bpmnElement="Flow_SwordDone">
        <di:waypoint x="1800" y="585" />
        <di:waypoint x="1830" y="585" />
        <di:waypoint x="1830" y="175" />
        <di:waypoint x="1860" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToTimer_di" bpmnElement="Flow_ToTimer">
        <di:waypoint x="1910" y="175" />
        <di:waypoint x="1960" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToVault_di" bpmnElement="Flow_ToVault">
        <di:waypoint x="1996" y="175" />
        <di:waypoint x="2060" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToAudit_di" bpmnElement="Flow_ToAudit">
        <di:waypoint x="2590" y="165" />
        <di:waypoint x="2640" y="165" />
        <di:waypoint x="2640" y="765" />
        <di:waypoint x="2700" y="765" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_AuditPassed_di" bpmnElement="Flow_AuditPassed">
        <di:waypoint x="2850" y="765" />
        <di:waypoint x="2900" y="765" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToAward_di" bpmnElement="Flow_ToAward">
        <di:waypoint x="2936" y="765" />
        <di:waypoint x="2990" y="765" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToArchExam_di" bpmnElement="Flow_ToArchExam">
        <di:waypoint x="3140" y="765" />
        <di:waypoint x="3220" y="765" />
        <di:waypoint x="3220" y="175" />
        <di:waypoint x="3290" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_FinalDone_di" bpmnElement="Flow_FinalDone">
        <di:waypoint x="3830" y="765" />
        <di:waypoint x="3890" y="765" />
      </bpmndi:BPMNEdge>    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
}

export const SUPPORTED_LANGS = [
  {
    "code": "de",
    "label": "🇩🇪 Deutsch (German)"
  },
  {
    "code": "en",
    "label": "🇬🇧 English"
  },
  {
    "code": "es",
    "label": "🇪🇸 Español (Spanish)"
  },
  {
    "code": "fr",
    "label": "🇫🇷 Français (French)"
  },
  {
    "code": "it",
    "label": "🇮🇹 Italiano (Italian)"
  },
  {
    "code": "pt",
    "label": "🇵🇹 Português (Portuguese)"
  },
  {
    "code": "nl",
    "label": "🇳🇱 Nederlands (Dutch)"
  },
  {
    "code": "pl",
    "label": "🇵🇱 Polski (Polish)"
  },
  {
    "code": "ru",
    "label": "🇷🇺 Русский (Russian)"
  },
  {
    "code": "ja",
    "label": "🇯🇵 日本語 (Japanese)"
  },
  {
    "code": "zh",
    "label": "🇨🇳 简体中文 (Chinese Simp.)"
  },
  {
    "code": "zh_TW",
    "label": "🇹🇼 繁體中文 (Chinese Trad.)"
  },
  {
    "code": "sv",
    "label": "🇸🇪 Svenska (Swedish)"
  },
  {
    "code": "da",
    "label": "🇩🇰 Dansk (Danish)"
  },
  {
    "code": "nb",
    "label": "🇳🇴 Norsk Bokmål (Norwegian)"
  },
  {
    "code": "fi",
    "label": "🇫🇮 Suomi (Finnish)"
  },
  {
    "code": "cs",
    "label": "🇨🇿 Čeština (Czech)"
  },
  {
    "code": "tr",
    "label": "🇹🇷 Türkçe (Turkish)"
  },
  {
    "code": "el",
    "label": "🇬🇷 Ελληνικά (Greek)"
  },
  {
    "code": "hu",
    "label": "🇭🇺 Magyar (Hungarian)"
  },
  {
    "code": "ro",
    "label": "🇷🇴 Română (Romanian)"
  },
  {
    "code": "uk",
    "label": "🇺🇦 Українська (Ukrainian)"
  },
  {
    "code": "ar",
    "label": "🇸🇦 العربية (Arabic)"
  },
  {
    "code": "id",
    "label": "🇮🇩 Bahasa Indonesia"
  },
  {
    "code": "ko",
    "label": "🇰🇷 한국어 (Korean)"
  },
  {
    "code": "gd",
    "label": "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Gàidhlig (Scottish Gaelic)"
  },
  {
    "code": "futhark",
    "label": "⚔️ ᚠᚢᚦᚨᚱᚲ (Elder Futhark Runes)"
  },
  {
    "code": "navi",
    "label": "🌿 Na'vi (Pandora / Avatar)"
  },
  {
    "code": "sa",
    "label": "🕉️ संस्कृतम् (Sanskrit)"
  },
  {
    "code": "sux",
    "label": "🏛️ 𒂗𒈠𒂗 (Sumerian Cuneiform)"
  },
  {
    "code": "egy",
    "label": "🔺 𓂀𓃭𓇳 (Ancient Egyptian Hieroglyphs)"
  }
];

export function getTemplates(lang = 'de') {
  const actualLang = resolveLang(lang);
  const t = QUEST_TRANSLATIONS[actualLang] || QUEST_TRANSLATIONS.de;
  const isDe = actualLang === 'de';

  return [
    {
      id: 'quest',
      title: t.poolName,
      category: isDe ? 'Interaktiv' : 'Interactive',
      badge: isDe ? 'Tutorial & Game' : 'Tutorial & Game',
      icon: '🎮',
      featured: true,
      description: isDe
        ? 'Lerne BPMN 2.0 spielerisch mit 4 professionellen Lanes, BPMN-Linter-Regeln, Datenobjekten und der Token-Simulation!'
        : 'Learn BPMN 2.0 playfully with 4 professional lanes, bpmnlint validation, data objects, and interactive token simulation!',
      xml: getQuestXml(actualLang)
    },
    {
      id: 'order-fulfillment',
      title: isDe ? 'Auftragsabwicklung (E-Commerce)' : 'Order Fulfillment (E-Commerce)',
      category: isDe ? 'Geschäftsprozess' : 'Business Process',
      badge: isDe ? 'Beliebt' : 'Popular',
      icon: '📦',
      description: isDe
        ? 'Vollständiger Bestellprozess: Zahlungseingang, Bonitätsprüfung, Lagerprüfung, Kommissionierung und Versand.'
        : 'Complete order handling: Payment reception, credit check, inventory verification, packing, and dispatch.',
      xml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_OrderFulfillment"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_OrderFulfillment" name="Auftragsabwicklung" isExecutable="true">
    <bpmn:startEvent id="Start_OrderReceived" name="Bestellung eingegangen">
      <bpmn:outgoing>Flow_ToPayment</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:serviceTask id="Task_ProcessPayment" name="Zahlung verarbeiten">
      <bpmn:incoming>Flow_ToPayment</bpmn:incoming>
      <bpmn:outgoing>Flow_ToPaymentCheck</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:exclusiveGateway id="Gateway_PaymentOk" name="Zahlung erfolgreich?" default="Flow_PaymentSuccess">
      <bpmn:incoming>Flow_ToPaymentCheck</bpmn:incoming>
      <bpmn:outgoing>Flow_PaymentSuccess</bpmn:outgoing>
      <bpmn:outgoing>Flow_PaymentFailed</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:userTask id="Task_PackOrder" name="Waren kommissionieren">
      <bpmn:incoming>Flow_PaymentSuccess</bpmn:incoming>
      <bpmn:outgoing>Flow_ToShip</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sendTask id="Task_NotifyCustomer" name="Kunde benachrichtigen (Fehlschlag)">
      <bpmn:incoming>Flow_PaymentFailed</bpmn:incoming>
      <bpmn:outgoing>Flow_ToCancelEnd</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:endEvent id="End_OrderCancelled" name="Bestellung storniert">
      <bpmn:incoming>Flow_ToCancelEnd</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:serviceTask id="Task_ShipGoods" name="Versanddienstleister beauftragen">
      <bpmn:incoming>Flow_ToShip</bpmn:incoming>
      <bpmn:outgoing>Flow_ToSuccessEnd</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:endEvent id="End_OrderShipped" name="Bestellung versandt">
      <bpmn:incoming>Flow_ToSuccessEnd</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_ToPayment" sourceRef="Start_OrderReceived" targetRef="Task_ProcessPayment" />
    <bpmn:sequenceFlow id="Flow_ToPaymentCheck" sourceRef="Task_ProcessPayment" targetRef="Gateway_PaymentOk" />
    <bpmn:sequenceFlow id="Flow_PaymentSuccess" name="Ja" sourceRef="Gateway_PaymentOk" targetRef="Task_PackOrder" />
    <bpmn:sequenceFlow id="Flow_PaymentFailed" name="Nein" sourceRef="Gateway_PaymentOk" targetRef="Task_NotifyCustomer" />
    <bpmn:sequenceFlow id="Flow_ToShip" sourceRef="Task_PackOrder" targetRef="Task_ShipGoods" />
    <bpmn:sequenceFlow id="Flow_ToSuccessEnd" sourceRef="Task_ShipGoods" targetRef="End_OrderShipped" />
    <bpmn:sequenceFlow id="Flow_ToCancelEnd" sourceRef="Task_NotifyCustomer" targetRef="End_OrderCancelled" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Order">
    <bpmndi:BPMNPlane id="BPMNPlane_Order" bpmnElement="Process_OrderFulfillment">
      <bpmndi:BPMNShape id="Start_OrderReceived_di" bpmnElement="Start_OrderReceived">
        <dc:Bounds x="160" y="162" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="145" y="205" width="67" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_ProcessPayment_di" bpmnElement="Task_ProcessPayment">
        <dc:Bounds x="250" y="140" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_PaymentOk_di" bpmnElement="Gateway_PaymentOk" isMarkerVisible="true">
        <dc:Bounds x="440" y="155" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="435" y="125" width="60" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_PackOrder_di" bpmnElement="Task_PackOrder">
        <dc:Bounds x="550" y="140" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_ShipGoods_di" bpmnElement="Task_ShipGoods">
        <dc:Bounds x="750" y="140" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_OrderShipped_di" bpmnElement="End_OrderShipped">
        <dc:Bounds x="950" y="162" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="940" y="205" width="57" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_NotifyCustomer_di" bpmnElement="Task_NotifyCustomer">
        <dc:Bounds x="550" y="270" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_OrderCancelled_di" bpmnElement="End_OrderCancelled">
        <dc:Bounds x="750" y="292" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="740" y="335" width="57" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_ToPayment_di" bpmnElement="Flow_ToPayment">
        <di:waypoint x="196" y="180" />
        <di:waypoint x="250" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToPaymentCheck_di" bpmnElement="Flow_ToPaymentCheck">
        <di:waypoint x="380" y="180" />
        <di:waypoint x="440" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_PaymentSuccess_di" bpmnElement="Flow_PaymentSuccess">
        <di:waypoint x="490" y="180" />
        <di:waypoint x="550" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_PaymentFailed_di" bpmnElement="Flow_PaymentFailed">
        <di:waypoint x="465" y="205" />
        <di:waypoint x="465" y="310" />
        <di:waypoint x="550" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToShip_di" bpmnElement="Flow_ToShip">
        <di:waypoint x="690" y="180" />
        <di:waypoint x="750" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToSuccessEnd_di" bpmnElement="Flow_ToSuccessEnd">
        <di:waypoint x="890" y="180" />
        <di:waypoint x="950" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToCancelEnd_di" bpmnElement="Flow_ToCancelEnd">
        <di:waypoint x="690" y="310" />
        <di:waypoint x="750" y="310" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
    },
    {
      id: 'approval-workflow',
      title: isDe ? 'Freigabeprozess (4-Augen-Prinzip)' : 'Approval Workflow (4-Eyes Principle)',
      category: isDe ? 'Governance' : 'Governance',
      badge: isDe ? 'Standard' : 'Standard',
      icon: '✅',
      description: isDe
        ? 'Dokumenten- oder Urlaubsantrag mit sequentieller Prüfung durch Abteilungsleiter und Qualitätsmanagement.'
        : 'Document or leave request with sequential review by team lead and quality management.',
      xml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_Approval"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:collaboration id="Collaboration_Approval">
    <bpmn:participant id="Participant_Approval" name="Freigabeprozess" processRef="Process_Approval" />
  </bpmn:collaboration>
  <bpmn:process id="Process_Approval" isExecutable="false">
    <bpmn:laneSet id="LaneSet_1">
      <bpmn:lane id="Lane_Requester" name="Antragsteller">
        <bpmn:flowNodeRef>Start_Req</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_CreateReq</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>End_Rejected</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_Approver" name="Genehmigende Stelle">
        <bpmn:flowNodeRef>Task_ReviewReq</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Gateway_Decision</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_ArchiveReq</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>End_Approved</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:startEvent id="Start_Req" name="Bedarf entstanden">
      <bpmn:outgoing>Flow_Req1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:userTask id="Task_CreateReq" name="Antrag einreichen">
      <bpmn:incoming>Flow_Req1</bpmn:incoming>
      <bpmn:outgoing>Flow_Req2</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:userTask id="Task_ReviewReq" name="Antrag prüfen">
      <bpmn:incoming>Flow_Req2</bpmn:incoming>
      <bpmn:outgoing>Flow_Req3</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="Gateway_Decision" name="Genehmigt?">
      <bpmn:incoming>Flow_Req3</bpmn:incoming>
      <bpmn:outgoing>Flow_Yes</bpmn:outgoing>
      <bpmn:outgoing>Flow_No</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:serviceTask id="Task_ArchiveReq" name="Freigabe dokumentieren">
      <bpmn:incoming>Flow_Yes</bpmn:incoming>
      <bpmn:outgoing>Flow_Fin1</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:endEvent id="End_Approved" name="Antrag genehmigt">
      <bpmn:incoming>Flow_Fin1</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:endEvent id="End_Rejected" name="Antrag abgelehnt">
      <bpmn:incoming>Flow_No</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_Req1" sourceRef="Start_Req" targetRef="Task_CreateReq" />
    <bpmn:sequenceFlow id="Flow_Req2" sourceRef="Task_CreateReq" targetRef="Task_ReviewReq" />
    <bpmn:sequenceFlow id="Flow_Req3" sourceRef="Task_ReviewReq" targetRef="Gateway_Decision" />
    <bpmn:sequenceFlow id="Flow_Yes" name="Ja" sourceRef="Gateway_Decision" targetRef="Task_ArchiveReq" />
    <bpmn:sequenceFlow id="Flow_No" name="Nein" sourceRef="Gateway_Decision" targetRef="End_Rejected" />
    <bpmn:sequenceFlow id="Flow_Fin1" sourceRef="Task_ArchiveReq" targetRef="End_Approved" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Appr">
    <bpmndi:BPMNPlane id="BPMNPlane_Appr" bpmnElement="Collaboration_Approval">
      <bpmndi:BPMNShape id="Participant_Approval_di" bpmnElement="Participant_Approval" isHorizontal="true">
        <dc:Bounds x="160" y="80" width="800" height="420" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_Requester_di" bpmnElement="Lane_Requester" isHorizontal="true">
        <dc:Bounds x="190" y="80" width="770" height="180" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_Approver_di" bpmnElement="Lane_Approver" isHorizontal="true">
        <dc:Bounds x="190" y="260" width="770" height="240" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Start_Req_di" bpmnElement="Start_Req">
        <dc:Bounds x="230" y="152" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_CreateReq_di" bpmnElement="Task_CreateReq">
        <dc:Bounds x="320" y="130" width="120" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_ReviewReq_di" bpmnElement="Task_ReviewReq">
        <dc:Bounds x="480" y="290" width="120" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_Decision_di" bpmnElement="Gateway_Decision" isMarkerVisible="true">
        <dc:Bounds x="645" y="305" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_ArchiveReq_di" bpmnElement="Task_ArchiveReq">
        <dc:Bounds x="730" y="390" width="120" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_Approved_di" bpmnElement="End_Approved">
        <dc:Bounds x="892" y="412" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_Rejected_di" bpmnElement="End_Rejected">
        <dc:Bounds x="742" y="152" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_Req1_di" bpmnElement="Flow_Req1">
        <di:waypoint x="266" y="170" />
        <di:waypoint x="320" y="170" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Req2_di" bpmnElement="Flow_Req2">
        <di:waypoint x="440" y="170" />
        <di:waypoint x="460" y="170" />
        <di:waypoint x="460" y="330" />
        <di:waypoint x="480" y="330" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Req3_di" bpmnElement="Flow_Req3">
        <di:waypoint x="600" y="330" />
        <di:waypoint x="645" y="330" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Yes_di" bpmnElement="Flow_Yes">
        <di:waypoint x="670" y="355" />
        <di:waypoint x="670" y="430" />
        <di:waypoint x="730" y="430" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_No_di" bpmnElement="Flow_No">
        <di:waypoint x="670" y="305" />
        <di:waypoint x="670" y="170" />
        <di:waypoint x="742" y="170" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Fin1_di" bpmnElement="Flow_Fin1">
        <di:waypoint x="850" y="430" />
        <di:waypoint x="892" y="430" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
    },
    {
      id: 'blank',
      title: isDe ? 'Leere Vorlage' : 'Blank Canvas',
      category: isDe ? 'Allgemein' : 'General',
      badge: isDe ? 'Minimal' : 'Minimal',
      icon: '📄',
      description: isDe
        ? 'Beginne mit einer sauberen, leeren Zeichenfläche mit einem einzelnen Start-Ereignis.'
        : 'Start with a clean blank slate containing a single start event.',
      xml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  id="Definitions_Blank"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_Blank" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1" name="Start" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_Blank">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="99" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
    }
  ];
}

export const showTemplateModal = (onSelect, i18n = {}) => {
  const existing = document.getElementById('ha-bpmn-template-modal');
  if (existing) {
    existing.remove();
  }

  const modal = document.createElement('div');
  modal.id = 'ha-bpmn-template-modal';
  modal.className = 'ha-bpmn-modal-backdrop';

  const modalTitle = i18n.selectTemplate || 'Prozess-Vorlage auswählen';
  const modalIntro = i18n.selectTemplateIntro || 'Wähle eine Vorlage als Ausgangspunkt für dein BPMN 2.0 Diagramm:';
  const btnText = i18n.useTemplate || 'Vorlage verwenden';
  const closeLabel = i18n.close || ((document.documentElement.lang || 'de').startsWith('de') ? 'Schließen' : 'Close');

  const defaultLang = resolveLang(i18n && i18n.siteLanguage);
  let selectedLang = defaultLang;

  const renderCards = (lang) => {
    // Exclude the interactive Quest template from general business templates
    const templates = getTemplates(lang).filter(tpl => tpl.id !== 'quest');
    return templates.map(tpl => `
      <div class="ha-template-card ${tpl.featured ? 'ha-template-featured' : ''}" data-template-id="${tpl.id}">
        <div class="ha-template-card-top">
          <span class="ha-template-icon">${tpl.icon}</span>
          <div class="ha-template-tags">
            ${tpl.badge ? `<span class="ha-template-badge">${tpl.badge}</span>` : ''}
            <span class="ha-template-category">${tpl.category}</span>
          </div>
        </div>
        <h3 class="ha-template-title">${tpl.title}</h3>
        <p class="ha-template-desc">${tpl.description}</p>
        <div class="ha-template-card-footer">
          <span class="ha-template-lanes">${tpl.lanes || ''}</span>
          <button type="button" class="button button-primary ha-btn-use-template" data-template-id="${tpl.id}">
            ${btnText}
          </button>
        </div>
      </div>
    `).join('');
  };

  modal.innerHTML = `
    <div class="ha-bpmn-modal-dialog ha-bpmn-template-dialog">
      <div class="ha-bpmn-modal-header">
        <div class="ha-bpmn-modal-title-wrap">
          <h2>${modalTitle}</h2>
        </div>
        <button type="button" class="ha-bpmn-modal-close" aria-label="${closeLabel}">&times;</button>
      </div>
      <div class="ha-bpmn-modal-body">
        <p class="ha-bpmn-modal-intro">${modalIntro}</p>
        <div class="ha-template-grid" id="ha-template-grid-container">
          ${renderCards(selectedLang)}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => {
    modal.remove();
    document.removeEventListener('keydown', handleKey);
  };

  const handleKey = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  document.addEventListener('keydown', handleKey);

  modal.querySelector('.ha-bpmn-modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  const bindCardClicks = () => {
    const gridEl = modal.querySelector('#ha-template-grid-container');
    if (!gridEl) return;

    gridEl.querySelectorAll('.ha-template-card').forEach(card => {
      const tplId = card.getAttribute('data-template-id');
      const templates = getTemplates(selectedLang).filter(tpl => tpl.id !== 'quest');
      const tpl = templates.find(t => t.id === tplId);
      if (!tpl) return;

      card.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
        if (typeof onSelect === 'function') {
          onSelect(tpl.xml, tpl.title);
        }
      });
    });
  };

  bindCardClicks();
};

/**
 * Shows a confirmation dialog before loading the BPMN-Quest learning adventure.
 * Offers language selection across all 31 supported languages and warns about
 * overwriting any unsaved changes in the active diagram.
 *
 * @param {Function} onConfirm Callback invoked with (questXml, selectedLang).
 * @param {Object} options Configuration and i18n options.
 */
export function showQuestConfirmModal(onConfirm, options = {}) {
  const existing = document.getElementById('ha-bpmn-quest-confirm-modal');
  if (existing) existing.remove();

  let selectedLang = resolveLang(options.lang || 'de');
  const isReload = !!options.isReload;

  const modal = document.createElement('div');
  modal.id = 'ha-bpmn-quest-confirm-modal';
  modal.className = 'ha-bpmn-modal-backdrop';

  let s = getConfirmModalStrings(isReload, selectedLang);

  const langOptionsHtml = SUPPORTED_LANGS.map(l => `
    <option value="${l.code}" ${l.code === selectedLang ? 'selected' : ''}>${l.label}</option>
  `).join('');

  modal.innerHTML = `
    <div class="ha-bpmn-modal-dialog ha-bpmn-quest-confirm-dialog" style="max-width: 540px;">
      <div class="ha-bpmn-modal-header">
        <h2 style="font-size: 16px; font-weight: 700; margin: 0; color: #1e293b;">${s.title}</h2>
        <button type="button" class="ha-bpmn-modal-close" aria-label="${s.btnCancel}">&times;</button>
      </div>
      <div class="ha-bpmn-modal-body" style="padding: 20px;">
        <p class="ha-quest-modal-intro" style="font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 18px;">${s.intro}</p>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
          <label for="ha-quest-lang-select" style="display: block; font-weight: 600; font-size: 12px; margin-bottom: 6px; color: #0f172a;">
            🌐 <span class="ha-quest-lang-label-text">${s.langLabel}</span>
          </label>
          <select id="ha-quest-lang-select" class="ha-template-lang-select" style="width: 100%; height: 36px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
            ${langOptionsHtml}
          </select>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 10px;">
          <button type="button" class="button button-secondary ha-btn-quest-cancel">${s.btnCancel}</button>
          <button type="button" class="button button-primary ha-btn-quest-confirm" style="font-weight: 700;">${s.btnConfirm}</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const updateModalLanguage = (newLang) => {
    selectedLang = newLang;
    const updated = getConfirmModalStrings(isReload, newLang);
    const titleEl = modal.querySelector('.ha-bpmn-modal-header h2');
    if (titleEl) titleEl.textContent = updated.title;
    const introEl = modal.querySelector('.ha-quest-modal-intro');
    if (introEl) introEl.innerHTML = updated.intro;
    const labelEl = modal.querySelector('.ha-quest-lang-label-text');
    if (labelEl) labelEl.textContent = updated.langLabel;
    const cancelBtn = modal.querySelector('.ha-btn-quest-cancel');
    if (cancelBtn) cancelBtn.textContent = updated.btnCancel;
    const confirmBtn = modal.querySelector('.ha-btn-quest-confirm');
    if (confirmBtn) confirmBtn.textContent = updated.btnConfirm;
  };

  const closeModal = () => {
    modal.remove();
    document.removeEventListener('keydown', handleKey);
  };

  const handleKey = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  document.addEventListener('keydown', handleKey);
  modal.querySelector('.ha-bpmn-modal-close').addEventListener('click', closeModal);
  modal.querySelector('.ha-btn-quest-cancel').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  const langSelect = modal.querySelector('#ha-quest-lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      updateModalLanguage(e.target.value);
    });
  }

  const confirmBtn = modal.querySelector('.ha-btn-quest-confirm');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      closeModal();
      if (typeof onConfirm === 'function') {
        const questXml = getQuestXml(selectedLang);
        onConfirm(questXml, selectedLang);
      }
    });
  }
}
