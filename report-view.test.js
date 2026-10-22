'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const { summarizeReport } = require('./report-view');

test('report summary preserves Defender detection guidance and details', () => {
  const summary = summarizeReport({
    defenderScan: {
      status: 'completed',
      detections: 1,
      detectionWindowNote: 'Detection window note'
    },
    findings: [{
      severity: 'high',
      category: 'Menace détectée par Microsoft Defender',
      reason: 'Defender reported a threat',
      detail: 'Action success: False'
    }]
  });

  assert.equal(summary.defenderDetections, '1');
  assert.equal(summary.defenderDetectionWindowNote, 'Detection window note');
  assert.deepEqual(summary.defenderFindings, [{
    reason: 'Defender reported a threat',
    detail: 'Action success: False'
  }]);
});
