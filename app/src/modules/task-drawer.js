/**
 * HA-BPMN-Manager: Interactive Task Drawer
 *
 * Displays a slide-in documentation panel when users click on tasks or
 * activities in the BPMN viewer, showing responsibilities, instructions, and details.
 *
 * @package HA_BPMN_Manager
 */

function getTaskTypeLabels(i18n = {}) {
  const isDe = (document.documentElement.lang || 'de').startsWith('de');
  return {
    'bpmn:Task': i18n.task || (isDe ? 'Aufgabe' : 'Task'),
    'bpmn:UserTask': i18n.userTask || (isDe ? 'Benutzeraufgabe' : 'User Task'),
    'bpmn:ServiceTask': i18n.serviceTask || (isDe ? 'Automatisierter Dienst' : 'Service Task'),
    'bpmn:SendTask': i18n.sendTask || (isDe ? 'Nachricht senden' : 'Send Task'),
    'bpmn:ReceiveTask': i18n.receiveTask || (isDe ? 'Nachricht empfangen' : 'Receive Task'),
    'bpmn:ManualTask': i18n.manualTask || (isDe ? 'Manuelle Tätigkeit' : 'Manual Task'),
    'bpmn:BusinessRuleTask': i18n.businessRuleTask || (isDe ? 'Geschäftsregel' : 'Business Rule Task'),
    'bpmn:ScriptTask': i18n.scriptTask || (isDe ? 'Skriptaufgabe' : 'Script Task'),
    'bpmn:SubProcess': i18n.subProcess || (isDe ? 'Teilprozess' : 'Sub-Process'),
    'bpmn:CallActivity': i18n.callActivity || (isDe ? 'Aufruf-Aktivität' : 'Call Activity')
  };
}

/**
 * Initializes the Task Drawer on a bpmn-js viewer or modeler instance.
 *
 * @param {HTMLElement} wrap Container element (.ha-bpmn-viewer-wrap or .ha-bpmn-editor-wrap).
 * @param {Object} bpmnInstance Modeler or NavigatedViewer instance.
 * @param {Object} i18n Optional dictionary of translated strings.
 */
export function initTaskDrawer(wrap, bpmnInstance, i18n = {}) {
  let drawer = wrap.querySelector('.ha-bpmn-task-drawer');
  const isDe = (document.documentElement.lang || 'de').startsWith('de');

  const closeLabel = i18n.close || (isDe ? 'Schließen' : 'Close');
  const headingText = i18n.documentation || (isDe ? 'Handlungsanweisung & Beschreibung' : 'Instructions & Documentation');
  const defaultBadgeText = i18n.task || (isDe ? 'Aufgabe' : 'Task');
  const taskTypeLabels = getTaskTypeLabels(i18n);

  if (!drawer) {
    drawer = document.createElement('div');
    drawer.className = 'ha-bpmn-task-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <div class="ha-drawer-header">
        <div class="ha-drawer-meta">
          <span class="ha-drawer-badge" data-role="type">${defaultBadgeText}</span>
          <span class="ha-drawer-role" data-role="lane" style="display:none;"></span>
        </div>
        <button type="button" class="ha-drawer-close" aria-label="${closeLabel}">&times;</button>
      </div>
      <h3 class="ha-drawer-title"></h3>
      <div class="ha-drawer-content">
        <div class="ha-drawer-section">
          <h4>${headingText}</h4>
          <div class="ha-drawer-doc"></div>
        </div>
        <div class="ha-drawer-footer">
          <span class="ha-drawer-id"></span>
        </div>
      </div>
    `;
    wrap.appendChild(drawer);

    // Close button event
    drawer.querySelector('.ha-drawer-close').addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  const closeDrawer = () => {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  };

  const openDrawer = (element) => {
    const bo = element.businessObject;
    if (!bo) return;

    const name = bo.name || i18n.unnamedActivity || (isDe ? 'Unbenannte Aktivität' : 'Unnamed Activity');
    const typeKey = bo.$type || 'bpmn:Task';
    const typeLabel = taskTypeLabels[typeKey] || i18n.activity || (isDe ? 'Aktivität' : 'Activity');

    // Extract documentation text
    let docText = '';
    if (Array.isArray(bo.documentation) && bo.documentation.length > 0) {
      docText = bo.documentation[0]?.text || '';
    }

    // Determine parent lane or pool for responsibility
    let laneName = '';
    let curr = element.parent;
    while (curr) {
      if (curr.businessObject && curr.businessObject.$type === 'bpmn:Lane') {
        laneName = curr.businessObject.name || '';
        break;
      }
      if (curr.businessObject && curr.businessObject.$type === 'bpmn:Participant') {
        laneName = curr.businessObject.name || '';
      }
      curr = curr.parent;
    }

    // Update DOM
    drawer.querySelector('[data-role="type"]').textContent = typeLabel;
    
    const roleEl = drawer.querySelector('[data-role="lane"]');
    if (laneName) {
      const rolePrefix = i18n.assignedRole || (isDe ? 'Zuständig' : 'Responsible');
      roleEl.textContent = `${rolePrefix}: ${laneName}`;
      roleEl.style.display = 'inline-block';
    } else {
      roleEl.style.display = 'none';
    }

    drawer.querySelector('.ha-drawer-title').textContent = name;

    const docEl = drawer.querySelector('.ha-drawer-doc');
    if (docText) {
      // Normalize both literal \n escape sequences and actual newlines, then escape HTML
      const normalizedDoc = docText
        .replace(/\\r\\n|\\n/g, '\n')
        .replace(/\r\n|\r/g, '\n');

      const safeText = normalizedDoc
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>');
      docEl.innerHTML = safeText;
    } else {
      const emptyDocText = i18n.noDocumentation || (isDe ? 'Keine zusätzliche Beschreibung oder QM-Dokumentation für diesen Schritt hinterlegt.' : 'No additional instructions or QM documentation provided for this step.');
      docEl.innerHTML = `<em>${emptyDocText}</em>`;
    }

    drawer.querySelector('.ha-drawer-id').textContent = `ID: ${element.id}`;

    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  };

  // Listen to element click events
  try {
    const eventBus = bpmnInstance.get('eventBus');
    eventBus.on('element.click', (event) => {
      const el = event.element;
      if (!el || el.id.startsWith('Process_') || el.type === 'bpmn:Process' || el.type === 'bpmn:SequenceFlow') {
        return;
      }

      // Check if it's an activity or task
      if (
        el.type &&
        (el.type.indexOf('Task') !== -1 ||
         el.type === 'bpmn:SubProcess' ||
         el.type === 'bpmn:CallActivity' ||
         el.type.indexOf('Event') !== -1 ||
         el.type.indexOf('Gateway') !== -1)
      ) {
        openDrawer(el);
      }
    });
  } catch (e) {
    console.warn('[HA-BPMN] Could not attach Task Drawer event listener:', e);
  }

  return {
    open: openDrawer,
    close: closeDrawer
  };
}
