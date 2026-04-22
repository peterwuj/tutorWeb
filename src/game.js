const EMOJI_POOL = ['🍎','🐶','🌟','🦋','🌈','🐸','🌻','🍦','🦄','🎈',
                    '🍕','🐙','🎀','🦁','🌙','🚀','🍓','🐬','🎵','🎉'];

let mode, a, b, correct;
let score = 0, streak = 0;

function initGame(gameMode) {
  mode = gameMode;
  nextQuestion();

  document.getElementById('ans').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const nb = document.getElementById('nextBtn');
      if (nb.style.display !== 'none') nextQuestion();
      else checkAnswer();
    }
  });
}

function nextQuestion() {
  if (mode === 'addition') {
    a = Math.floor(Math.random() * 11);        // 0–10
    b = Math.floor(Math.random() * (20 - a + 1) % 11); // keep sum ≤ 20
    if (a + b > 20) b = 20 - a;
    correct = a + b;
  } else {
    a = Math.floor(Math.random() * 21);        // 0–20
    b = Math.floor(Math.random() * (a + 1));   // b ≤ a so result ≥ 0
    correct = a - b;
  }

  // Visuals
  const e1 = EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)];
  let e2 = EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)];
  while (e2 === e1) e2 = EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)];

  const vis = document.getElementById('visuals');
  if (mode === 'addition') {
    vis.innerHTML = e1.repeat(a) + (a > 0 && b > 0 ? ' <span style="font-size:1.5rem">+</span> ' : '') + e2.repeat(b);
  } else {
    // Show 'a' emojis with last 'b' crossed out
    let html = e1.repeat(a - b);
    if (b > 0) html += ' <span style="opacity:.35;text-decoration:line-through">' + e1.repeat(b) + '</span>';
    vis.innerHTML = html || '0';
  }

  const op   = mode === 'addition' ? '+' : '−';
  document.getElementById('eq').innerHTML = `${a} ${op} ${b} = <span class="blank">?</span>`;

  document.getElementById('ans').value = '';
  document.getElementById('ans').focus();
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('nextBtn').style.display = 'none';
}

function checkAnswer() {
  const val = parseInt(document.getElementById('ans').value, 10);
  const fb  = document.getElementById('feedback');
  const op  = mode === 'addition' ? '+' : '−';

  if (isNaN(val)) {
    fb.textContent = 'Please type a number! 🔢';
    fb.className = 'feedback';
    return;
  }

  if (val === correct) {
    score++;
    streak++;
    if (typeof playCorrect === 'function') playCorrect();
    fb.textContent = pick(['Awesome! 🎉','You got it! ⭐','Fantastic! 🌈','Super! 🦄','Great job! 👏']);
    fb.className = 'feedback correct';
    document.getElementById('eq').innerHTML = `${a} ${op} ${b} = <span style="color:#00b894">${correct}</span>`;
  } else {
    streak = 0;
    if (typeof playWrong === 'function') playWrong();
    fb.textContent = `Not quite — the answer is ${correct}. Keep trying! 💪`;
    fb.className = 'feedback wrong';
    document.getElementById('eq').innerHTML = `${a} ${op} ${b} = <span style="color:#e17055">${correct}</span>`;
  }

  updateScore();
  document.getElementById('nextBtn').style.display = 'block';
  // pop animation on feedback
  fb.classList.remove('pop');
  void fb.offsetWidth;
  fb.classList.add('pop');
}

function updateScore() {
  document.getElementById('score').textContent  = score;
  document.getElementById('streak').textContent = streak;
  document.getElementById('stars').textContent  = '⭐'.repeat(Math.min(streak, 5));
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
