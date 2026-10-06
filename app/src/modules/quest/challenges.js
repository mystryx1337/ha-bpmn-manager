/**
 * HA-BPMN-Manager: Linter Challenges (Gamified Bug-Hunting)
 *
 * Provides educational, broken BPMN snippets that players must repair
 * using bpmnlint validation rules as the game referee.
 *
 * @package HA_BPMN_Manager
 */

export const LINTER_CHALLENGES = [
  {
    id: 'challenge_orphan',
    level: 1,
    title: {
      de: 'Challenge 1: Die verwaiste Insel (no-disconnected)',
      en: 'Challenge 1: The Orphaned Island (no-disconnected)'
    },
    xp: 150,
    badge: { de: 'Detektiv I', en: 'Detective I' },
    intro: {
      de: 'Ein Task schwebt isoliert auf der Zeichenfläche und hat keine Verbindung zum Prozess! Der Linter schlägt Alarm. Verbinde den Task mit dem Ablauf!',
      en: 'A task is floating disconnected on the canvas with no sequence flows! The linter raises an error. Connect it to the workflow!'
    },
    ruleKey: 'no-disconnected',
    initialXml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_Challenge1"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_Challenge1" isExecutable="false">
    <bpmn:startEvent id="Start_1" name="Meldung empfangen">
      <bpmn:outgoing>Flow_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_A" name="Dokument scannen">
      <bpmn:incoming>Flow_1</bpmn:incoming>
      <bpmn:outgoing>Flow_2</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_Orphan" name="⚠️ Wichtige Sicherheitsprüfung (Isoliert!)" />
    <bpmn:endEvent id="End_1" name="Vorgang abgeschlossen">
      <bpmn:incoming>Flow_2</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1" sourceRef="Start_1" targetRef="Task_A" />
    <bpmn:sequenceFlow id="Flow_2" sourceRef="Task_A" targetRef="End_1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Challenge1">
    <bpmndi:BPMNPlane id="BPMNPlane_Challenge1" bpmnElement="Process_Challenge1">
      <bpmndi:BPMNShape id="Start_1_di" bpmnElement="Start_1">
        <dc:Bounds x="180" y="152" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="160" y="195" width="76" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_A_di" bpmnElement="Task_A">
        <dc:Bounds x="280" y="130" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Orphan_di" bpmnElement="Task_Orphan">
        <dc:Bounds x="460" y="270" width="160" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_1_di" bpmnElement="End_1">
        <dc:Bounds x="500" y="152" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="480" y="195" width="76" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1">
        <di:waypoint x="216" y="170" />
        <di:waypoint x="280" y="170" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_di" bpmnElement="Flow_2">
        <di:waypoint x="410" y="170" />
        <di:waypoint x="500" y="170" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
  },
  {
    id: 'challenge_deadlock',
    level: 2,
    title: {
      de: 'Challenge 2: Der Deadlock-Fluch (XOR / AND Mismatch)',
      en: 'Challenge 2: The Deadlock Curse (XOR / AND Mismatch)'
    },
    xp: 250,
    badge: { de: 'Architekt I', en: 'Architect I' },
    intro: {
      de: 'Tödlicher BPMN-Fehler! Ein XOR-Split gabelt in zwei Pfade (es wird nur ein Token erzeugt), aber ein AND-Join wartet auf beide Tokens! Tausche das AND-Join gegen ein passendes XOR-Join aus!',
      en: 'Deadly BPMN mistake! An XOR-split branches into two paths (producing only one token), but an AND-join waits for both! Replace the AND-join with a matching XOR-join!'
    },
    ruleKey: 'fork-must-merge',
    initialXml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_Challenge2"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_Challenge2" isExecutable="false">
    <bpmn:startEvent id="Start_2" name="Auftrag erteilt">
      <bpmn:outgoing>Flow_2_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:exclusiveGateway id="Gateway_XorSplit" name="Express oder Standard?">
      <bpmn:incoming>Flow_2_1</bpmn:incoming>
      <bpmn:outgoing>Flow_Express</bpmn:outgoing>
      <bpmn:outgoing>Flow_Standard</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:task id="Task_Express" name="Express-Route">
      <bpmn:incoming>Flow_Express</bpmn:incoming>
      <bpmn:outgoing>Flow_ExpDone</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_Standard" name="Standard-Route">
      <bpmn:incoming>Flow_Standard</bpmn:incoming>
      <bpmn:outgoing>Flow_StdDone</bpmn:outgoing>
    </bpmn:task>
    <bpmn:parallelGateway id="Gateway_FaultyJoin" name="⚠️ FALSCHES AND-JOIN!">
      <bpmn:incoming>Flow_ExpDone</bpmn:incoming>
      <bpmn:incoming>Flow_StdDone</bpmn:incoming>
      <bpmn:outgoing>Flow_ToFin</bpmn:outgoing>
    </bpmn:parallelGateway>
    <bpmn:endEvent id="End_2" name="Auslieferung bereit">
      <bpmn:incoming>Flow_ToFin</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_2_1" sourceRef="Start_2" targetRef="Gateway_XorSplit" />
    <bpmn:sequenceFlow id="Flow_Express" name="Express" sourceRef="Gateway_XorSplit" targetRef="Task_Express" />
    <bpmn:sequenceFlow id="Flow_Standard" name="Standard" sourceRef="Gateway_XorSplit" targetRef="Task_Standard" />
    <bpmn:sequenceFlow id="Flow_ExpDone" sourceRef="Task_Express" targetRef="Gateway_FaultyJoin" />
    <bpmn:sequenceFlow id="Flow_StdDone" sourceRef="Task_Standard" targetRef="Gateway_FaultyJoin" />
    <bpmn:sequenceFlow id="Flow_ToFin" sourceRef="Gateway_FaultyJoin" targetRef="End_2" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Challenge2">
    <bpmndi:BPMNPlane id="BPMNPlane_Challenge2" bpmnElement="Process_Challenge2">
      <bpmndi:BPMNShape id="Start_2_di" bpmnElement="Start_2">
        <dc:Bounds x="180" y="182" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_XorSplit_di" bpmnElement="Gateway_XorSplit" isMarkerVisible="true">
        <dc:Bounds x="270" y="175" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Express_di" bpmnElement="Task_Express">
        <dc:Bounds x="380" y="100" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Standard_di" bpmnElement="Task_Standard">
        <dc:Bounds x="380" y="240" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_FaultyJoin_di" bpmnElement="Gateway_FaultyJoin">
        <dc:Bounds x="570" y="175" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_2_di" bpmnElement="End_2">
        <dc:Bounds x="680" y="182" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_2_1_di" bpmnElement="Flow_2_1">
        <di:waypoint x="216" y="200" />
        <di:waypoint x="270" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Express_di" bpmnElement="Flow_Express">
        <di:waypoint x="295" y="175" />
        <di:waypoint x="295" y="140" />
        <di:waypoint x="380" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_Standard_di" bpmnElement="Flow_Standard">
        <di:waypoint x="295" y="225" />
        <di:waypoint x="295" y="280" />
        <di:waypoint x="380" y="280" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ExpDone_di" bpmnElement="Flow_ExpDone">
        <di:waypoint x="510" y="140" />
        <di:waypoint x="595" y="140" />
        <di:waypoint x="595" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_StdDone_di" bpmnElement="Flow_StdDone">
        <di:waypoint x="510" y="280" />
        <di:waypoint x="595" y="280" />
        <di:waypoint x="595" y="225" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToFin_di" bpmnElement="Flow_ToFin">
        <di:waypoint x="620" y="200" />
        <di:waypoint x="680" y="200" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
  },
  {
    id: 'challenge_missing_end',
    level: 3,
    title: {
      de: 'Challenge 3: Der endlose Pfad (end-event-required)',
      en: 'Challenge 3: The Endless Path (end-event-required)'
    },
    xp: 200,
    badge: { de: 'Architekt II', en: 'Architect II' },
    intro: {
      de: 'Jeder BPMN-Prozesspfad muss an einem gültigen End-Event ankommen! Hier endet der Fehlerbehandlungs-Pfad im Nichts. Füge ein End-Event hinzu!',
      en: 'Every BPMN sequence flow must conclude at a valid end event! Here the escalation branch terminates nowhere. Add an End Event!'
    },
    ruleKey: 'end-event-required',
    initialXml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_Challenge3"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_Challenge3" isExecutable="false">
    <bpmn:startEvent id="Start_3" name="Alarm ausgelöst">
      <bpmn:outgoing>Flow_3_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_Alert" name="Notfallteam rufen">
      <bpmn:incoming>Flow_3_1</bpmn:incoming>
      <bpmn:outgoing>Flow_3_2</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_Log" name="Vorfallsbericht verfassen">
      <bpmn:incoming>Flow_3_2</bpmn:incoming>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_3_1" sourceRef="Start_3" targetRef="Task_Alert" />
    <bpmn:sequenceFlow id="Flow_3_2" sourceRef="Task_Alert" targetRef="Task_Log" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Challenge3">
    <bpmndi:BPMNPlane id="BPMNPlane_Challenge3" bpmnElement="Process_Challenge3">
      <bpmndi:BPMNShape id="Start_3_di" bpmnElement="Start_3">
        <dc:Bounds x="180" y="152" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Alert_di" bpmnElement="Task_Alert">
        <dc:Bounds x="280" y="130" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Log_di" bpmnElement="Task_Log">
        <dc:Bounds x="480" y="130" width="150" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_3_1_di" bpmnElement="Flow_3_1">
        <di:waypoint x="216" y="170" />
        <di:waypoint x="280" y="170" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_3_2_di" bpmnElement="Flow_3_2">
        <di:waypoint x="410" y="170" />
        <di:waypoint x="480" y="170" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
  },
  {
    id: 'challenge_join_fork',
    level: 2,
    title: {
      de: 'Challenge 4: Die Januskopf-Weiche (no-gateway-join-fork)',
      en: 'Challenge 4: The Janus Gateway (no-gateway-join-fork)'
    },
    xp: 200,
    badge: { de: 'Architekt III', en: 'Architect III' },
    intro: {
      de: 'BPMN-Anti-Pattern! Ein einzelnes Gateway bündelt 2 eingehende Pfade und spaltet gleichzeitig in 2 ausgehende Pfade auf (Join & Fork im selben Symbol). Trenne Join und Fork in zwei eigenständige Gateways auf!',
      en: 'BPMN Anti-Pattern! A single gateway joins 2 incoming paths and simultaneously forks into 2 outgoing paths. Separate join and fork into two distinct gateways!'
    },
    ruleKey: 'no-gateway-join-fork',
    initialXml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_Challenge4"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_Challenge4" isExecutable="false">
    <bpmn:startEvent id="Start_4A" name="Auftrag Web">
      <bpmn:outgoing>Flow_4_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:startEvent id="Start_4B" name="Auftrag Filiale">
      <bpmn:outgoing>Flow_4_2</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_4A" name="Web-Daten prüfen">
      <bpmn:incoming>Flow_4_1</bpmn:incoming>
      <bpmn:outgoing>Flow_4_3</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_4B" name="Filial-Daten prüfen">
      <bpmn:incoming>Flow_4_2</bpmn:incoming>
      <bpmn:outgoing>Flow_4_4</bpmn:outgoing>
    </bpmn:task>
    <bpmn:exclusiveGateway id="Gateway_Janus" name="⚠️ Verbotener Join-Fork!">
      <bpmn:incoming>Flow_4_3</bpmn:incoming>
      <bpmn:incoming>Flow_4_4</bpmn:incoming>
      <bpmn:outgoing>Flow_4_5</bpmn:outgoing>
      <bpmn:outgoing>Flow_4_6</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:task id="Task_4C" name="Rechnung erstellen">
      <bpmn:incoming>Flow_4_5</bpmn:incoming>
      <bpmn:outgoing>Flow_4_7</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_4D" name="Lager informieren">
      <bpmn:incoming>Flow_4_6</bpmn:incoming>
      <bpmn:outgoing>Flow_4_8</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="End_4A" name="Rechnung versendet">
      <bpmn:incoming>Flow_4_7</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:endEvent id="End_4B" name="Lager versendet">
      <bpmn:incoming>Flow_4_8</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_4_1" sourceRef="Start_4A" targetRef="Task_4A" />
    <bpmn:sequenceFlow id="Flow_4_2" sourceRef="Start_4B" targetRef="Task_4B" />
    <bpmn:sequenceFlow id="Flow_4_3" sourceRef="Task_4A" targetRef="Gateway_Janus" />
    <bpmn:sequenceFlow id="Flow_4_4" sourceRef="Task_4B" targetRef="Gateway_Janus" />
    <bpmn:sequenceFlow id="Flow_4_5" sourceRef="Gateway_Janus" targetRef="Task_4C" />
    <bpmn:sequenceFlow id="Flow_4_6" sourceRef="Gateway_Janus" targetRef="Task_4D" />
    <bpmn:sequenceFlow id="Flow_4_7" sourceRef="Task_4C" targetRef="End_4A" />
    <bpmn:sequenceFlow id="Flow_4_8" sourceRef="Task_4D" targetRef="End_4B" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Challenge4">
    <bpmndi:BPMNPlane id="BPMNPlane_Challenge4" bpmnElement="Process_Challenge4">
      <bpmndi:BPMNShape id="Start_4A_di" bpmnElement="Start_4A">
        <dc:Bounds x="160" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Start_4B_di" bpmnElement="Start_4B">
        <dc:Bounds x="160" y="242" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_4A_di" bpmnElement="Task_4A">
        <dc:Bounds x="240" y="80" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_4B_di" bpmnElement="Task_4B">
        <dc:Bounds x="240" y="220" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_Janus_di" bpmnElement="Gateway_Janus" isMarkerVisible="true">
        <dc:Bounds x="420" y="155" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_4C_di" bpmnElement="Task_4C">
        <dc:Bounds x="520" y="80" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_4D_di" bpmnElement="Task_4D">
        <dc:Bounds x="520" y="220" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_4A_di" bpmnElement="End_4A">
        <dc:Bounds x="700" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_4B_di" bpmnElement="End_4B">
        <dc:Bounds x="700" y="242" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_4_1_di" bpmnElement="Flow_4_1">
        <di:waypoint x="196" y="120" />
        <di:waypoint x="240" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_2_di" bpmnElement="Flow_4_2">
        <di:waypoint x="196" y="260" />
        <di:waypoint x="240" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_3_di" bpmnElement="Flow_4_3">
        <di:waypoint x="370" y="120" />
        <di:waypoint x="445" y="120" />
        <di:waypoint x="445" y="155" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_4_di" bpmnElement="Flow_4_4">
        <di:waypoint x="370" y="260" />
        <di:waypoint x="445" y="260" />
        <di:waypoint x="445" y="205" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_5_di" bpmnElement="Flow_4_5">
        <di:waypoint x="470" y="180" />
        <di:waypoint x="495" y="180" />
        <di:waypoint x="495" y="120" />
        <di:waypoint x="520" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_6_di" bpmnElement="Flow_4_6">
        <di:waypoint x="470" y="180" />
        <di:waypoint x="495" y="180" />
        <di:waypoint x="495" y="260" />
        <di:waypoint x="520" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_7_di" bpmnElement="Flow_4_7">
        <di:waypoint x="650" y="120" />
        <di:waypoint x="700" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_8_di" bpmnElement="Flow_4_8">
        <di:waypoint x="650" y="260" />
        <di:waypoint x="700" y="260" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
  },
  {
    id: 'challenge_implicit_split',
    level: 2,
    title: {
      de: 'Challenge 5: Der Schleichweg (no-implicit-split)',
      en: 'Challenge 5: The Uncontrolled Branch (no-implicit-split)'
    },
    xp: 200,
    badge: { de: 'Wächter der Pfade', en: 'Path Guardian' },
    intro: {
      de: 'Regelverstoß! Ein einfacher Task hat 2 ausgehende Sequenzflüsse direkt am Knoten. BPMN verlangt für Verzweigungen explizite Gateways! Setze ein Gateway hinter den Task.',
      en: 'Rule violation! A single task has 2 outgoing sequence flows directly from the activity. BPMN requires explicit gateways for branching! Insert a gateway behind the task.'
    },
    ruleKey: 'no-implicit-split',
    initialXml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_Challenge5"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_Challenge5" isExecutable="false">
    <bpmn:startEvent id="Start_5" name="Bewerbung eingegangen">
      <bpmn:outgoing>Flow_5_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_Splitter" name="⚠️ Unterlagen sichten (Impliziter Split!)">
      <bpmn:incoming>Flow_5_1</bpmn:incoming>
      <bpmn:outgoing>Flow_5_A</bpmn:outgoing>
      <bpmn:outgoing>Flow_5_B</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_5A" name="Interview terminieren">
      <bpmn:incoming>Flow_5_A</bpmn:incoming>
      <bpmn:outgoing>Flow_5_3</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_5B" name="Absageschreiben senden">
      <bpmn:incoming>Flow_5_B</bpmn:incoming>
      <bpmn:outgoing>Flow_5_4</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="End_5A" name="Kandidat eingeladen">
      <bpmn:incoming>Flow_5_3</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:endEvent id="End_5B" name="Absage erteilt">
      <bpmn:incoming>Flow_5_4</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_5_1" sourceRef="Start_5" targetRef="Task_Splitter" />
    <bpmn:sequenceFlow id="Flow_5_A" sourceRef="Task_Splitter" targetRef="Task_5A" />
    <bpmn:sequenceFlow id="Flow_5_B" sourceRef="Task_Splitter" targetRef="Task_5B" />
    <bpmn:sequenceFlow id="Flow_5_3" sourceRef="Task_5A" targetRef="End_5A" />
    <bpmn:sequenceFlow id="Flow_5_4" sourceRef="Task_5B" targetRef="End_5B" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Challenge5">
    <bpmndi:BPMNPlane id="BPMNPlane_Challenge5" bpmnElement="Process_Challenge5">
      <bpmndi:BPMNShape id="Start_5_di" bpmnElement="Start_5">
        <dc:Bounds x="180" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Splitter_di" bpmnElement="Task_Splitter">
        <dc:Bounds x="260" y="140" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_5A_di" bpmnElement="Task_5A">
        <dc:Bounds x="460" y="80" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_5B_di" bpmnElement="Task_5B">
        <dc:Bounds x="460" y="210" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_5A_di" bpmnElement="End_5A">
        <dc:Bounds x="640" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_5B_di" bpmnElement="End_5B">
        <dc:Bounds x="640" y="232" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_5_1_di" bpmnElement="Flow_5_1">
        <di:waypoint x="216" y="180" />
        <di:waypoint x="260" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_5_A_di" bpmnElement="Flow_5_A">
        <di:waypoint x="400" y="160" />
        <di:waypoint x="430" y="160" />
        <di:waypoint x="430" y="120" />
        <di:waypoint x="460" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_5_B_di" bpmnElement="Flow_5_B">
        <di:waypoint x="400" y="200" />
        <di:waypoint x="430" y="200" />
        <di:waypoint x="430" y="250" />
        <di:waypoint x="460" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_5_3_di" bpmnElement="Flow_5_3">
        <di:waypoint x="590" y="120" />
        <di:waypoint x="640" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_5_4_di" bpmnElement="Flow_5_4">
        <di:waypoint x="590" y="250" />
        <di:waypoint x="640" y="250" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
  },
  {
    id: 'challenge_duplicate_flows',
    level: 1,
    title: {
      de: 'Challenge 6: Die doppelte Schiene (no-duplicate-sequence-flows)',
      en: 'Challenge 6: The Duplicate Track (no-duplicate-sequence-flows)'
    },
    xp: 150,
    badge: { de: 'Gleisräumer', en: 'Track Clearer' },
    intro: {
      de: 'Redundante Verbindung! Zwischen "Daten erfassen" und "Qualitätsprüfung" verlaufen zwei identische Sequenzflüsse. Lösche den doppelten Pfeil!',
      en: 'Redundant connection! Between "Capture Data" and "Quality Check", there are two identical parallel sequence flows. Delete the duplicate flow!'
    },
    ruleKey: 'no-duplicate-sequence-flows',
    initialXml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_Challenge6"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_Challenge6" isExecutable="false">
    <bpmn:startEvent id="Start_6" name="Start">
      <bpmn:outgoing>Flow_6_0</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_6A" name="Daten erfassen">
      <bpmn:incoming>Flow_6_0</bpmn:incoming>
      <bpmn:outgoing>Flow_6_1</bpmn:outgoing>
      <bpmn:outgoing>Flow_6_2</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_6B" name="Qualitätsprüfung">
      <bpmn:incoming>Flow_6_1</bpmn:incoming>
      <bpmn:incoming>Flow_6_2</bpmn:incoming>
      <bpmn:outgoing>Flow_6_3</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="End_6" name="Ende">
      <bpmn:incoming>Flow_6_3</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_6_0" sourceRef="Start_6" targetRef="Task_6A" />
    <bpmn:sequenceFlow id="Flow_6_1" name="Pfad 1" sourceRef="Task_6A" targetRef="Task_6B" />
    <bpmn:sequenceFlow id="Flow_6_2" name="⚠️ Doppelter Pfad 2" sourceRef="Task_6A" targetRef="Task_6B" />
    <bpmn:sequenceFlow id="Flow_6_3" sourceRef="Task_6B" targetRef="End_6" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Challenge6">
    <bpmndi:BPMNPlane id="BPMNPlane_Challenge6" bpmnElement="Process_Challenge6">
      <bpmndi:BPMNShape id="Start_6_di" bpmnElement="Start_6">
        <dc:Bounds x="180" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_6A_di" bpmnElement="Task_6A">
        <dc:Bounds x="270" y="140" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_6B_di" bpmnElement="Task_6B">
        <dc:Bounds x="480" y="140" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_6_di" bpmnElement="End_6">
        <dc:Bounds x="670" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_6_0_di" bpmnElement="Flow_6_0">
        <di:waypoint x="216" y="180" />
        <di:waypoint x="270" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_6_1_di" bpmnElement="Flow_6_1">
        <di:waypoint x="400" y="165" />
        <di:waypoint x="480" y="165" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_6_2_di" bpmnElement="Flow_6_2">
        <di:waypoint x="400" y="195" />
        <di:waypoint x="480" y="195" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_6_3_di" bpmnElement="Flow_6_3">
        <di:waypoint x="610" y="180" />
        <di:waypoint x="670" y="180" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
  },
  {
    id: 'challenge_missing_start',
    level: 1,
    title: {
      de: 'Challenge 7: Der verlorene Ursprung (start-event-required)',
      en: 'Challenge 7: The Lost Origin (start-event-required)'
    },
    xp: 150,
    badge: { de: 'Chronist des Anfangs', en: 'Origin Chronicler' },
    intro: {
      de: 'Kopfloser Prozess! Dieser Ablauf beginnt direkt mit einem Task und besitzt überhaupt kein Start-Event. Füge ein Start-Event hinzu und verbinde es mit dem ersten Schritt!',
      en: 'Headless workflow! This process begins directly with a task and possesses no Start Event. Add a Start Event and connect it to the first step!'
    },
    ruleKey: 'start-event-required',
    initialXml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_Challenge7"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_Challenge7" isExecutable="false">
    <bpmn:task id="Task_7A" name="⚠️ Erster Schritt (Ohne Start-Event!)">
      <bpmn:outgoing>Flow_7_1</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_7B" name="Zweiter Schritt">
      <bpmn:incoming>Flow_7_1</bpmn:incoming>
      <bpmn:outgoing>Flow_7_2</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="End_7" name="Prozessende">
      <bpmn:incoming>Flow_7_2</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_7_1" sourceRef="Task_7A" targetRef="Task_7B" />
    <bpmn:sequenceFlow id="Flow_7_2" sourceRef="Task_7B" targetRef="End_7" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Challenge7">
    <bpmndi:BPMNPlane id="BPMNPlane_Challenge7" bpmnElement="Process_Challenge7">
      <bpmndi:BPMNShape id="Task_7A_di" bpmnElement="Task_7A">
        <dc:Bounds x="200" y="140" width="140" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_7B_di" bpmnElement="Task_7B">
        <dc:Bounds x="400" y="140" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_7_di" bpmnElement="End_7">
        <dc:Bounds x="590" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_7_1_di" bpmnElement="Flow_7_1">
        <di:waypoint x="340" y="180" />
        <di:waypoint x="400" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_7_2_di" bpmnElement="Flow_7_2">
        <di:waypoint x="530" y="180" />
        <di:waypoint x="590" y="180" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
  },
  {
    id: 'challenge_double_start',
    level: 2,
    title: {
      de: 'Challenge 8: Das doppelte Erwachen (single-blank-start-event)',
      en: 'Challenge 8: The Dual Awakening (single-blank-start-event)'
    },
    xp: 200,
    badge: { de: 'Großmeister-Stratege', en: 'Grandmaster Strategist' },
    intro: {
      de: 'Zwei Blank Start-Events im selben Prozess stiften Verwirrung! BPMN verbietet mehrere ungetypte Start-Events in einem Prozess. Führe den Ablauf auf ein einziges Start-Event zurück!',
      en: 'Two blank start events in the same process cause confusion! BPMN prohibits multiple untyped start events in one process. Consolidate into a single start event!'
    },
    ruleKey: 'single-blank-start-event',
    initialXml: `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_Challenge8"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_Challenge8" isExecutable="false">
    <bpmn:startEvent id="Start_8A" name="Start-Event A">
      <bpmn:outgoing>Flow_8_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:startEvent id="Start_8B" name="⚠️ Überflüssiges Start-Event B">
      <bpmn:outgoing>Flow_8_2</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_8A" name="Pfad A bearbeiten">
      <bpmn:incoming>Flow_8_1</bpmn:incoming>
      <bpmn:outgoing>Flow_8_3</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Task_8B" name="Pfad B bearbeiten">
      <bpmn:incoming>Flow_8_2</bpmn:incoming>
      <bpmn:outgoing>Flow_8_4</bpmn:outgoing>
    </bpmn:task>
    <bpmn:exclusiveGateway id="Gateway_8Join" name="Zusammenführung">
      <bpmn:incoming>Flow_8_3</bpmn:incoming>
      <bpmn:incoming>Flow_8_4</bpmn:incoming>
      <bpmn:outgoing>Flow_8_5</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:endEvent id="End_8" name="Prozess abgeschlossen">
      <bpmn:incoming>Flow_8_5</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_8_1" sourceRef="Start_8A" targetRef="Task_8A" />
    <bpmn:sequenceFlow id="Flow_8_2" sourceRef="Start_8B" targetRef="Task_8B" />
    <bpmn:sequenceFlow id="Flow_8_3" sourceRef="Task_8A" targetRef="Gateway_8Join" />
    <bpmn:sequenceFlow id="Flow_8_4" sourceRef="Task_8B" targetRef="Gateway_8Join" />
    <bpmn:sequenceFlow id="Flow_8_5" sourceRef="Gateway_8Join" targetRef="End_8" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Challenge8">
    <bpmndi:BPMNPlane id="BPMNPlane_Challenge8" bpmnElement="Process_Challenge8">
      <bpmndi:BPMNShape id="Start_8A_di" bpmnElement="Start_8A">
        <dc:Bounds x="170" y="102" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Start_8B_di" bpmnElement="Start_8B">
        <dc:Bounds x="170" y="232" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_8A_di" bpmnElement="Task_8A">
        <dc:Bounds x="260" y="80" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_8B_di" bpmnElement="Task_8B">
        <dc:Bounds x="260" y="210" width="130" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_8Join_di" bpmnElement="Gateway_8Join" isMarkerVisible="true">
        <dc:Bounds x="440" y="155" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="End_8_di" bpmnElement="End_8">
        <dc:Bounds x="560" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_8_1_di" bpmnElement="Flow_8_1">
        <di:waypoint x="206" y="120" />
        <di:waypoint x="260" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_8_2_di" bpmnElement="Flow_8_2">
        <di:waypoint x="206" y="250" />
        <di:waypoint x="260" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_8_3_di" bpmnElement="Flow_8_3">
        <di:waypoint x="390" y="120" />
        <di:waypoint x="465" y="120" />
        <di:waypoint x="465" y="155" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_8_4_di" bpmnElement="Flow_8_4">
        <di:waypoint x="390" y="250" />
        <di:waypoint x="465" y="250" />
        <di:waypoint x="465" y="205" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_8_5_di" bpmnElement="Flow_8_5">
        <di:waypoint x="490" y="180" />
        <di:waypoint x="560" y="180" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
  }
];
