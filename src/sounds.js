(function () {
  let _ctx = null;

  function getCtx() {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    return _ctx;
  }

  // Eagerly unlock the AudioContext on the first user gesture so all
  // subsequent sounds play immediately without an async delay.
  // Safari/iOS quirks handled here:
  //  - resume() must be called synchronously inside a real user gesture
  //  - iOS additionally requires playing a (silent) buffer inside the gesture
  //  - 'touchend' / 'pointerdown' are more reliable triggers than 'touchstart'
  var _unlocked = false;
  function unlock() {
    if (_unlocked) return;
    var c = getCtx();
    c.resume();
    try {
      var buf = c.createBuffer(1, 1, 22050);
      var src = c.createBufferSource();
      src.buffer = buf;
      src.connect(c.destination);
      src.start(0);
    } catch (e) { /* ignore */ }
    if (c.state === 'running') _unlocked = true;
  }
  ['pointerdown', 'touchend', 'touchstart', 'mousedown', 'click', 'keydown'].forEach(function (evt) {
    document.addEventListener(evt, unlock, { passive: true });
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
  // iOS can also put the context into an 'interrupted' state (phone call,
  // Siri, backgrounding) -- treat anything that isn't 'running' as suspended.
  function play(fn) {
    const c = getCtx();
    if (c.state === 'running') {
      fn(c);
    } else if (c.resume) {
      var p = c.resume();
      if (p && p.then) {
        p.then(function () { fn(c); }).catch(function () { /* stay silent */ });
      } else {
        fn(c);
      }
    }
  }

  // Soft hover blip -- skipped silently if context not yet unlocked,
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

  // Ascending C-E-G chime for correct answers
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

  // Four-note C-E-G-C fanfare for winning
  window.playWin = function () {
    play(function (c) {
      [[523, 0], [659, 0.15], [784, 0.30], [1047, 0.46]].forEach(function (p) {
        note(c, p[0], 'sine', 0.38, c.currentTime + p[1], 0.40);
      });
    });
  };

  // -- Text-to-speech, cross-browser --
  // Safari/Chrome load voices asynchronously; cache them when ready.
  var _voices = [];
  function loadVoices() {
    if (!window.speechSynthesis) return;
    _voices = window.speechSynthesis.getVoices() || [];
  }
  if (window.speechSynthesis) {
    loadVoices();
    if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  function speakUtterance(text, lang, rate, pitch) {
    if (!window.speechSynthesis) return;
    var synth = window.speechSynthesis;
    synth.cancel();                 // stop any in-progress speech
    if (synth.paused && synth.resume) synth.resume();   // Safari can get stuck paused

    var u    = new SpeechSynthesisUtterance(text);
    u.lang   = lang;
    u.rate   = rate;
    u.pitch  = pitch;
    u.volume = 1;
    if (!_voices.length) loadVoices();
    var v = _voices.find(function (vo) { return vo.lang && vo.lang.indexOf(lang.split('-')[0]) === 0; });
    if (v) u.voice = v;

    // Safari sometimes drops an utterance queued in the same tick as cancel().
    setTimeout(function () { synth.speak(u); }, 0);
  }

  // Speak a word/phrase in English. Slightly slower rate and raised
  // pitch make it friendlier for young kids.
  window.speak = function (text) {
    speakUtterance(text, 'en-US', 0.88, 1.15);
  };

  // Speak Chinese text with a Mandarin voice when available.
  window.speakZh = function (text) {
    speakUtterance(text, 'zh-CN', 0.75, 1.05);
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
