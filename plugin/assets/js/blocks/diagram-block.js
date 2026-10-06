/**
 * HA-BPMN-Manager: Native Gutenberg Block
 *
 * Implements the 'ha-bpmn/viewer' block for WordPress Block Editor.
 *
 * @package HA_BPMN_Manager
 */

(function(wp) {
  const { registerBlockType } = wp.blocks;
  const { createElement: el, useState, useEffect } = wp.element;
  const { InspectorControls } = wp.blockEditor || wp.editor;
  const { PanelBody, SelectControl, TextControl, ToggleControl, Spinner } = wp.components;
  const apiFetch = wp.apiFetch;

  const data = window.haBpmnBlockData || { i18n: {} };
  const i18n = data.i18n;

  registerBlockType('ha-bpmn/viewer', {
    title: i18n.title || 'BPMN Diagramm',
    description: i18n.description || 'BPMN 2.0 Geschäftsprozess einbetten',
    icon: 'randomize',
    category: 'widgets',
    keywords: ['bpmn', 'prozess', 'workflow', 'camunda', 'diagramm'],

    edit: function(props) {
      const { attributes, setAttributes } = props;
      const { diagramId, height, fullscreen, mode, search, drawer, activeSteps, completedSteps } = attributes;

      const [diagrams, setDiagrams] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        apiFetch({ path: '/ha-bpmn/v1/diagrams' })
          .then(list => {
            setDiagrams(list || []);
            setLoading(false);
          })
          .catch(err => {
            console.warn('[HA-BPMN Block] Could not fetch diagrams list:', err);
            setLoading(false);
          });
      }, []);

      const options = [
        { label: i18n.choosePrompt || '-- Diagramm auswählen --', value: 0 }
      ];

      diagrams.forEach(d => {
        options.push({
          label: d.title + (d.status !== 'publish' ? ` (${d.status})` : ''),
          value: d.id
        });
      });

      const selectedDiagram = diagrams.find(d => Number(d.id) === Number(diagramId));

      return [
        el(InspectorControls, { key: 'inspector' },
          el(PanelBody, { title: i18n.displayOptions || 'Anzeige-Optionen', initialOpen: true },
            el(SelectControl, {
              label: i18n.selectDiagram || 'BPMN-Diagramm',
              value: diagramId,
              options: options,
              onChange: (val) => setAttributes({ diagramId: parseInt(val, 10) || 0 })
            }),
            el(SelectControl, {
              label: i18n.mode || 'Anzeigemodus',
              value: mode,
              options: [
                { label: i18n.modeInteractive || 'Interaktiv (bpmn-js mit Zoom & Simulation)', value: 'interactive' },
                { label: i18n.modeStatic || 'Statisch (Ultra-schnelles SVG, Zero-JS)', value: 'static' }
              ],
              onChange: (val) => setAttributes({ mode: val })
            }),
            el(TextControl, {
              label: i18n.height || 'Container-Höhe',
              value: height,
              onChange: (val) => setAttributes({ height: val })
            }),
            el(ToggleControl, {
              label: i18n.fullscreen || 'Vollbild-Schaltfläche anzeigen',
              checked: fullscreen,
              onChange: (val) => setAttributes({ fullscreen: val })
            }),
            el(ToggleControl, {
              label: i18n.search || 'Live-Suche im Viewer aktivieren',
              checked: search,
              onChange: (val) => setAttributes({ search: val })
            }),
            el(ToggleControl, {
              label: i18n.drawer || 'Klickbare Tasks (Details-Drawer)',
              checked: drawer,
              onChange: (val) => setAttributes({ drawer: val })
            })
          ),
          el(PanelBody, { title: i18n.trackingHeader || 'Prozess-Schritt-Tracker', initialOpen: false },
            el(TextControl, {
              label: i18n.activeSteps || 'Aktive Schritte (IDs oder Namen)',
              help: 'z.B. Task_Pruefung,Task_Freigabe',
              value: activeSteps,
              onChange: (val) => setAttributes({ activeSteps: val })
            }),
            el(TextControl, {
              label: i18n.completedSteps || 'Abgeschlossene Schritte (IDs oder Namen)',
              help: 'z.B. StartEvent_1,Task_AntragErfassen',
              value: completedSteps,
              onChange: (val) => setAttributes({ completedSteps: val })
            })
          )
        ),

        el('div', { key: 'preview', className: 'ha-bpmn-gutenberg-preview-wrap' },
          loading ? el('div', { className: 'ha-bpmn-preview-loading' }, el(Spinner), ' Lade BPMN-Diagramme...') :
          (!diagramId || !selectedDiagram) ?
            el('div', { className: 'ha-bpmn-preview-placeholder' },
              el('div', { className: 'placeholder-icon' }, '🔀'),
              el('h3', null, i18n.title || 'BPMN 2.0 Diagramm'),
              el('p', null, i18n.description || 'Wählen Sie rechts in der Seitenleiste oder im Menü ein Diagramm aus:'),
              el(SelectControl, {
                value: diagramId,
                options: options,
                onChange: (val) => setAttributes({ diagramId: parseInt(val, 10) || 0 })
              })
            ) :
            el('div', { className: 'ha-bpmn-preview-card' },
              el('div', { className: 'ha-preview-header' },
                el('span', { className: 'ha-preview-badge' }, mode === 'static' ? 'Statisch (SVG)' : 'Interaktiv'),
                el('span', { className: 'ha-preview-dim' }, `Höhe: ${height}`)
              ),
              el('h4', { className: 'ha-preview-title' }, selectedDiagram.title),
              el('p', { className: 'ha-preview-info' }, `Diagramm-ID: #${diagramId} | Kurzcode: [bpmnm id="${diagramId}"]`),
              activeSteps ? el('div', { className: 'ha-preview-tracking' }, `Aktiv: ${activeSteps}`) : null,
              el('div', { className: 'ha-preview-note' }, 'Die interaktive Darstellung des Diagramms wird im Frontend gerendert.')
            )
        )
      ];
    },

    save: function() {
      // Dynamic block rendered via server-side render_callback
      return null;
    }
  });
})(window.wp);
