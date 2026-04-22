(function () {
  let _ctx = null;

  function getCtx() {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    return _ctx;
  }

  // Eagerly resume AudioContext on the first user gesture so all
  // subsequent sounds play immediately without an async delay.
  ['click', 'touchstart', 'keydown'].forEach(function (evt) {
    document.addEventListener(evt, function handler() {
      getCtx().resume();
      document.removeEventListener(evt, handler);
    }, { once: true });
  });

  // Schedule a single oscillator tone on an already-running context.
  function note(c, freq, type, vol, t, dur) {
    const osc  = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type            = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.start(t);
    osc.stop(t + dur + 0.01);
  }

  // Resume if needed, then invoke fn(ctx). Handles the async resume
  // so notes are always scheduled against a running context.
  function play(fn) {
    const c = getCtx();
    if (c.state === 'running') {
      fn(c);
    } else {
      c.resume().then(function () { fn(c); });
    }
  }

  // Soft hover blip — skipped silently if context not yet unlocked,
  // since hover cannot itself be a user gesture on most browsers.
  window.playHover = function () {
    if (!_ctx || _ctx.state !== 'running') return;
    note(_ctx, 680, 'sine', 0.07, _ctx.currentTime, 0.07);
  };

  // Satisfying descending pop on click / select
  window.playTap = function () {
    play(function (c) {
      const osc  = c.createOscillator();
      const gain = c.createGain();
      osc.connect(gain);
      gain.connect(c.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, c.currentTime);
      osc.frequency.exponentialRampToValueAtTime(240, c.currentTime + 0.12);
      gain.gain.setValueAtTime(0.28, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.12);
      osc.start(c.currentTime);
      osc.stop(c.currentTime + 0.13);
    });
  };

  // Ascending C–E–G chime for correct answers
  window.playCorrect = function () {
    play(function (c) {
      [[523, 0], [659, 0.13], [784, 0.26]].forEach(function (p) {
        note(c, p[0], 'sine', 0.32, c.currentTime + p[1], 0.30);
      });
    });
  };

  // Descending sawtooth boing for wrong answers
  window.playWrong = function () {
    play(function (c) {
      const osc  = c.createOscillator();
      const gain = c.createGain();
      osc.connect(gain);
      gain.connect(c.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, c.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, c.currentTime + 0.4);
      gain.gain.setValueAtTime(0.15, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.4);
      osc.start(c.currentTime);
      osc.stop(c.currentTime + 0.41);
    });
  };

  // Four-note C–E–G–C fanfare for winning
  window.playWin = function () {
    play(function (c) {
      [[523, 0], [659, 0.15], [784, 0.30], [1047, 0.46]].forEach(function (p) {
        note(c, p[0], 'sine', 0.38, c.currentTime + p[1], 0.40);
      });
    });
  };

  // Auto-attach hover blip to static interactive elements after DOM ready.
  // Dynamic elements (num-cards, bank tiles) attach it themselves when created.
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll(
      '.card, .tab-bar button, .mult-selector button, ' +
      'button.check-btn, button.next-btn, .new-game-btn'
    ).forEach(function (el) {
      el.addEventListener('mouseenter', playHover);
    });
  });
})();
