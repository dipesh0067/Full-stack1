// ============================================
// CET138 Portfolio — scripts.js
// Student: Dipesh Yadav | Reg: 250939312
// ============================================

// — QUIZ (Portfolio page only) —
const correctBtn = document.getElementById("correct-btn");
const wrongBtn   = document.getElementById("wrong-btn");
const feedback   = document.getElementById("quiz-feedback");
const resetBtn   = document.getElementById("quiz-reset-btn");

if (correctBtn) {
  function lockButtons() {
    [correctBtn, wrongBtn].forEach(b => b.style.pointerEvents = "none");
    resetBtn.style.display = "inline-block";
  }

  correctBtn.addEventListener("click", function() {
    feedback.textContent = "✓ Correct! Well done.";
    feedback.className = "quiz-feedback-box correct-fb show";
    correctBtn.classList.add("correct");
    lockButtons();
  });

  wrongBtn.addEventListener("click", function() {
    feedback.textContent = "✗ Not quite. Try again!";
    feedback.className = "quiz-feedback-box wrong-fb show";
    wrongBtn.classList.add("wrong");
    lockButtons();
  });

  resetBtn.addEventListener("click", function() {
    feedback.className = "quiz-feedback-box";
    correctBtn.classList.remove("correct");
    wrongBtn.classList.remove("wrong");
    [correctBtn, wrongBtn].forEach(b => b.style.pointerEvents = "auto");
    resetBtn.style.display = "none";
  });
}

// — COLOUR CHANGER DEMO (Portfolio page only) —
const colours = ['#16a34a', '#2563eb', '#7c3aed', '#dc2626', '#d97706', '#0891b2'];
let ci = 0;

function changeColour() {
  ci = (ci + 1) % colours.length;
  const box = document.getElementById('colour-box');
  if (box) {
    box.style.background = colours[ci];
    box.textContent = 'Background: ' + colours[ci];
  }
}

// — FULL STACK STEP ANIMATOR (Portfolio page only) —
function runFullStack() {
  const steps  = ['fs-1', 'fs-2', 'fs-3', 'fs-4', 'fs-5', 'fs-6'];
  const labels = [
    'Browser clicked...',
    'Packaging as JSON...',
    'Sending HTTP request...',
    'Backend processing...',
    'Database saving...',
    '✅ Order confirmed!'
  ];
  const status = document.getElementById('fs-status');
  if (!status) return;

  steps.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.querySelector('div').style.borderColor = 'var(--border)';
  });

  status.textContent = 'Processing...';

  steps.forEach((id, i) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.querySelector('div').style.borderColor = 'var(--primary)';
      status.textContent = labels[i];
      if (i === steps.length - 1) {
        status.style.color = 'var(--accent)';
        setTimeout(() => { status.style.color = 'var(--text-muted)'; }, 2000);
      }
    }, i * 600);
  });
}

// — CONTACT FORM (index.html only) —
function sendMessage() {
  const name  = document.getElementById('contact-name');
  const email = document.getElementById('contact-email');
  const msg   = document.getElementById('contact-msg');
  const success = document.getElementById('contact-success');
  if (!name) return;

  if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
    alert('Please fill in all fields before sending.');
    return;
  }
  success.style.display = 'block';
  name.value  = '';
  email.value = '';
  msg.value   = '';
}

// — SCROLL FADE ANIMATIONS —
const fades = document.querySelectorAll('.fade-up');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
fades.forEach(el => obs.observe(el));