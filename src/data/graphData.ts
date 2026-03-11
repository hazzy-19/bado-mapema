import { Node, Edge } from '@xyflow/react';

// Common Teal Theme Styles
const baseNodeStyle = {
  background: '#f0fdf4', // Very light teal
  border: '2px solid #0f766e', // Solid teal border
  borderRadius: '8px',
  padding: '12px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '13px',
  fontWeight: 500,
  color: '#042f2e', // Dark teal text
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
};

const processNodeStyle = {
  ...baseNodeStyle,
  background: '#ffffff',
  border: '2px solid #0d9488',
};

const startNodeStyle = {
  ...baseNodeStyle,
  background: '#ccfbf1',
  border: '2px dashed #0f766e', // Dashed for entry points
  fontWeight: 700,
};

const endNodeStyle = {
  ...baseNodeStyle,
  background: '#99f6e4',
  border: '2px solid #115e59',
  fontWeight: 700,
};

const errorNodeStyle = {
  ...baseNodeStyle,
  background: '#fee2e2', // Light red for errors
  border: '2px solid #b91c1c',
  color: '#7f1d1d',
};

// Sticky Note specific styles for complex logic
const stickyNoteStyle = {
  background: '#fef3c7', // Pale yellow for notes
  border: '1px solid #fbbf24',
  borderRadius: '2px', // Sharper corners like a sticky note
  padding: '12px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '11px',
  color: '#78350f',
  width: 180,
  boxShadow: '2px 3px 6px rgba(0,0,0,0.1)',
  transform: 'rotate(-2deg)' // Slight tilt
};

export const initialNodes: Node[] = [
  // ================= SCENARIO 1: THE DAILY LOOP (AUTOMATED DEPOSIT) ================= //
  
  // Starting Point
  { id: 'cronStart', position: { x: 50, y: 150 }, data: { label: 'Start: Midnight Cron\n(Trigger Daily Check)' }, style: startNodeStyle },
  
  // Middle Processes
  { id: 'triggerSTK', position: { x: 300, y: 150 }, data: { label: 'Process: triggerSTKPush()\n(Daraja API)' }, style: processNodeStyle },
  { id: 'awaitCallback', position: { x: 550, y: 150 }, data: { label: 'Listen: mpesaCallback\nWebhook' }, style: processNodeStyle },
  { id: 'verifySuccess', position: { x: 800, y: 150 }, data: { label: 'Check: ResultCode === 0?' }, style: processNodeStyle },
  
  // Ending Points & State Changes
  { id: 'successUpdate', position: { x: 1050, y: 50 }, data: { label: 'End: Success\n- Credit Escrow Ledger\n- Increment Streak' }, style: endNodeStyle },
  { id: 'successScore', position: { x: 1050, y: 150 }, data: { label: 'End: Success\n- Discipline Score +1\n- Pet Status -> Healthy' }, style: endNodeStyle },
  
  // Error / Failure Branch
  { id: 'failureUpdate', position: { x: 1050, y: 250 }, data: { label: 'End: Failure / Timeout\n- Degrade Pet Health' }, style: errorNodeStyle },
  
  // Note
  { id: 'noteDaily', position: { x: 600, y: 50 }, data: { label: 'Sticky Note: The Daily Loop is the engine. Pet Health cascades down (Healthy -> Sick -> Critical -> Dead) for every consecutive missed day.' }, style: stickyNoteStyle },


  // ================= SCENARIO 2: THE WITHDRAWAL & VETO PROTOCOL ================= //

  // Starting Point
  { id: 'userWithdrawal', position: { x: 50, y: 500 }, data: { label: 'Start: User Action\n(Requests Withdrawal)' }, style: startNodeStyle },
  
  // Middle Processes
  { id: 'vetoCheck', position: { x: 300, y: 500 }, data: { label: 'Process: The Veto Protocol\n(Check targetDate)' }, style: processNodeStyle },
  { id: 'vetoAutoApprove', position: { x: 550, y: 400 }, data: { label: 'Date Reached?\nAuto-Approve' }, style: processNodeStyle },
  
  // Guardian Auth Loop
  { id: 'vetoDeny', position: { x: 550, y: 500 }, data: { label: 'Date Not Reached?\nTrigger GuardianSystem' }, style: processNodeStyle },
  { id: 'guardianJWT', position: { x: 800, y: 500 }, data: { label: 'Generate Guardian JWT URL\n(SMS Sent to Guardian)' }, style: processNodeStyle },
  
  { id: 'guardianDecision', position: { x: 1050, y: 500 }, data: { label: 'Guardian Decision:\nApprove or Deny' }, style: processNodeStyle },
  { id: 'userOverride', position: { x: 1050, y: 650 }, data: { label: 'User Overrides Guardian\n(Burn-The-Bridge Protocol)' }, style: errorNodeStyle },

  // Endings
  { id: 'disburseFunds', position: { x: 1300, y: 400 }, data: { label: 'End: disburseFunds()\nvia Daraja B2C API' }, style: endNodeStyle },
  { id: 'penaltyApplied', position: { x: 1300, y: 650 }, data: { label: 'End: Penalty\n- Discipline Score -20\n- Streak Reset to 0' }, style: errorNodeStyle },

  // Note
  { id: 'noteVeto', position: { x: 850, y: 350 }, data: { label: 'Sticky Note: The Veto Protocol is the most complex layer. It halts withdrawals midway if the goal is unfinished, routing authorization to a secure Guardian JWT link.' }, style: stickyNoteStyle },

  
  // ================= SCENARIO 3: PERSONALITY & COMMUNICATION ENGINE ================= //
  
  // Starting Point
  { id: 'smsLogs', position: { x: 50, y: 850 }, data: { label: 'Start: Background Parse\n(Send SMS logs via App)' }, style: startNodeStyle },
  
  // Middle Processes
  { id: 'geminiParse', position: { x: 300, y: 850 }, data: { label: 'Analyze with Gemini\n(Calculate Burn Rate/Risk)' }, style: processNodeStyle },
  { id: 'personalityEngine', position: { x: 550, y: 850 }, data: { label: 'Personality Engine\n(Determine Tone & Language)' }, style: processNodeStyle },
  
  // Conditions
  { id: 'shengLanguage', position: { x: 800, y: 800 }, data: { label: 'Condition:\nHigh Risk / Critical Pet -> Use Sheng' }, style: processNodeStyle },
  { id: 'englishLanguage', position: { x: 800, y: 900 }, data: { label: 'Condition:\nLow Risk / Healthy Pet -> Use English' }, style: processNodeStyle },

  // Endings
  { id: 'sendSMS', position: { x: 1100, y: 850 }, data: { label: 'End: Send Intervention SMS' }, style: endNodeStyle },
  
  // Note
  { id: 'noteGemini', position: { x: 300, y: 950 }, data: { label: 'Sticky Note: Gemini structures unstructured mobile logs into a "Burn Rate." This dynamically switches the Personality Engine into aggressive Sheng warnings when risk is high.' }, style: stickyNoteStyle },
];

export const initialEdges: Edge[] = [
  // Daily Loop Edges
  { id: 'e-cron-stk', source: 'cronStart', target: 'triggerSTK', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-stk-call', source: 'triggerSTK', target: 'awaitCallback', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-call-ver', source: 'awaitCallback', target: 'verifySuccess', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-ver-suc1', source: 'verifySuccess', target: 'successUpdate', label: 'Yes', animated: true, style: { stroke: '#059669', strokeWidth: 2 } }, // Green
  { id: 'e-ver-suc2', source: 'verifySuccess', target: 'successScore', label: 'Yes', animated: true, style: { stroke: '#059669', strokeWidth: 2 } },
  { id: 'e-ver-fail', source: 'verifySuccess', target: 'failureUpdate', label: 'No/Timeout', animated: true, style: { stroke: '#e11d48', strokeWidth: 2 } }, // Red

  // Veto Protocol Edges
  { id: 'e-with-veto', source: 'userWithdrawal', target: 'vetoCheck', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-veto-app', source: 'vetoCheck', target: 'vetoAutoApprove', label: 'Passed Date', animated: true, style: { stroke: '#059669', strokeWidth: 2 } },
  { id: 'e-app-dis', source: 'vetoAutoApprove', target: 'disburseFunds', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-veto-den', source: 'vetoCheck', target: 'vetoDeny', label: 'Early', animated: true, style: { stroke: '#e11d48', strokeWidth: 2 } },
  { id: 'e-den-jwt', source: 'vetoDeny', target: 'guardianJWT', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-jwt-dec', source: 'guardianJWT', target: 'guardianDecision', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-dec-app', source: 'guardianDecision', target: 'disburseFunds', label: 'Guardian Approves', animated: true, style: { stroke: '#059669', strokeWidth: 2 } },
  { id: 'e-dec-over', source: 'guardianDecision', target: 'userOverride', label: 'Guardian Denies -> User Forces', animated: true, style: { stroke: '#e11d48', strokeWidth: 2 } },
  { id: 'e-over-dis', source: 'userOverride', target: 'disburseFunds', animated: true, style: { stroke: '#e11d48', strokeWidth: 2 } },
  { id: 'e-over-pen', source: 'userOverride', target: 'penaltyApplied', animated: true, style: { stroke: '#e11d48', strokeWidth: 2 } },

  // Communication Engine Edges
  { id: 'e-sms-gem', source: 'smsLogs', target: 'geminiParse', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-gem-per', source: 'geminiParse', target: 'personalityEngine', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-per-sh', source: 'personalityEngine', target: 'shengLanguage', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-per-en', source: 'personalityEngine', target: 'englishLanguage', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-sh-send', source: 'shengLanguage', target: 'sendSMS', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
  { id: 'e-en-send', source: 'englishLanguage', target: 'sendSMS', animated: true, style: { stroke: '#0f766e', strokeWidth: 2 } },
];
