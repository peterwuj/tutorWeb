// ninja-avatar.js – Lottie-powered ninja avatar for Ninja Math
(function () {

  const ANIMATION_DATA = {"v":"5.7.14","fr":30,"ip":0,"op":120,"w":400,"h":400,"nm":"Cute Ninja","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Ninja","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","nm":"LeftPupil","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[10,14]}},{"ty":"fl","c":{"a":0,"k":[0.08,0.08,0.12,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[178,182]},"a":{"a":0,"k":[0,0]},"s":{"a":1,"k":[{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":55,"s":[100,100]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":58,"s":[100,10]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":61,"s":[100,100]},{"t":120,"s":[100,100]}]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"RightPupil","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[10,14]}},{"ty":"fl","c":{"a":0,"k":[0.08,0.08,0.12,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[222,182]},"a":{"a":0,"k":[0,0]},"s":{"a":1,"k":[{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":55,"s":[100,100]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":58,"s":[100,10]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":61,"s":[100,100]},{"t":120,"s":[100,100]}]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"LeftEyeShine","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[4,4]}},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[180,178]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"RightEyeShine","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[4,4]}},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[224,178]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"LeftEyeWhite","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[20,22]}},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[178,182]},"a":{"a":0,"k":[0,0]},"s":{"a":1,"k":[{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":55,"s":[100,100]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":58,"s":[100,10]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":61,"s":[100,100]},{"t":120,"s":[100,100]}]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"RightEyeWhite","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[20,22]}},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[222,182]},"a":{"a":0,"k":[0,0]},"s":{"a":1,"k":[{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":55,"s":[100,100]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":58,"s":[100,10]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":61,"s":[100,100]},{"t":120,"s":[100,100]}]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"LeftBlush","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[14,9]}},{"ty":"fl","c":{"a":0,"k":[1,0.55,0.65,1]},"o":{"a":0,"k":75},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[163,208]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"RightBlush","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[14,9]}},{"ty":"fl","c":{"a":0,"k":[1,0.55,0.65,1]},"o":{"a":0,"k":75},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[237,208]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"EyeSlit","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[110,28]},"r":{"a":0,"k":14}},{"ty":"fl","c":{"a":0,"k":[1,0.83,0.69,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,182]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"HeadbandKnotLoop1","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[16,16]}},{"ty":"fl","c":{"a":0,"k":[0.86,0.18,0.22,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[264,158]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"HeadbandTail","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[-2,-4],[-6,4],[0,0]],"o":[[6,-2],[2,4],[0,0],[0,0]],"v":[[0,0],[35,-10],[50,20],[8,12]]}}},{"ty":"fl","c":{"a":0,"k":[0.86,0.18,0.22,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[262,150]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":0,"s":[-8]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":30,"s":[10]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":60,"s":[-8]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":90,"s":[10]},{"t":120,"s":[-8]}]},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"HeadbandTail2","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[-2,-3],[-5,3],[0,0]],"o":[[5,-2],[2,3],[0,0],[0,0]],"v":[[0,0],[30,8],[42,36],[6,22]]}}},{"ty":"fl","c":{"a":0,"k":[0.72,0.12,0.16,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[262,160]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":0,"s":[6]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":30,"s":[-12]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":60,"s":[6]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":90,"s":[-12]},{"t":120,"s":[6]}]},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"Headband","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[160,16]},"r":{"a":0,"k":4}},{"ty":"fl","c":{"a":0,"k":[0.86,0.18,0.22,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,152]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"HeadbandCircle","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[14,14]}},{"ty":"fl","c":{"a":0,"k":[1,0.95,0.85,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,152]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"HeadbandKanji","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,-3]},"s":{"a":0,"k":[8,1.5]},"r":{"a":0,"k":0}},{"ty":"fl","c":{"a":0,"k":[0.15,0.1,0.1,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,152]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"HeadbandKanji2","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[6,1.5]},"r":{"a":0,"k":0}},{"ty":"fl","c":{"a":0,"k":[0.15,0.1,0.1,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,152]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"HeadbandKanji3","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,3]},"s":{"a":0,"k":[4,1.5]},"r":{"a":0,"k":0}},{"ty":"fl","c":{"a":0,"k":[0.15,0.1,0.1,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,152]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"HeadHighlight","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[26,12]}},{"ty":"fl","c":{"a":0,"k":[0.25,0.25,0.32,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[172,142]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":-20},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"Head","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[150,155]}},{"ty":"fl","c":{"a":0,"k":[0.12,0.12,0.16,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":0,"s":[200,175,0],"to":[0,-0.5,0],"ti":[0,0.5,0]},{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":60,"s":[200,172,0],"to":[0,0.5,0],"ti":[0,-0.5,0]},{"t":120,"s":[200,175,0]}]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":0,"s":[-2]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":60,"s":[2]},{"t":120,"s":[-2]}]},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"LeftArm","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[28,100]},"r":{"a":0,"k":14}},{"ty":"fl","c":{"a":0,"k":[0.12,0.12,0.16,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[136,238]},"a":{"a":0,"k":[0,-45]},"s":{"a":0,"k":[100,100]},"r":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":0,"s":[15]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":60,"s":[8]},{"t":120,"s":[15]}]},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"RightArm","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[28,100]},"r":{"a":0,"k":14}},{"ty":"fl","c":{"a":0,"k":[0.12,0.12,0.16,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[264,238]},"a":{"a":0,"k":[0,-45]},"s":{"a":0,"k":[100,100]},"r":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":0,"s":[-15]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":60,"s":[-8]},{"t":120,"s":[-15]}]},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"Belt","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[110,12]},"r":{"a":0,"k":2}},{"ty":"fl","c":{"a":0,"k":[0.86,0.18,0.22,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,296]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"BeltKnot","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[18,20]},"r":{"a":0,"k":3}},{"ty":"fl","c":{"a":0,"k":[0.72,0.12,0.16,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,296]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"Body","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[120,110]},"r":{"a":0,"k":24}},{"ty":"fl","c":{"a":0,"k":[0.12,0.12,0.16,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,278]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"LeftLeg","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[36,40]},"r":{"a":0,"k":14}},{"ty":"fl","c":{"a":0,"k":[0.12,0.12,0.16,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[178,340]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"RightLeg","it":[{"ty":"rc","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[36,40]},"r":{"a":0,"k":14}},{"ty":"fl","c":{"a":0,"k":[0.12,0.12,0.16,1]},"o":{"a":0,"k":100},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[222,340]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"gr","nm":"Shadow","it":[{"ty":"el","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[140,18]}},{"ty":"fl","c":{"a":0,"k":[0.1,0.1,0.15,1]},"o":{"a":0,"k":25},"r":1,"bm":0},{"ty":"tr","p":{"a":0,"k":[200,368]},"a":{"a":0,"k":[0,0]},"s":{"a":1,"k":[{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.5,0.5],"y":[1,1]},"o":{"x":[0.5,0.5],"y":[0,0]},"t":60,"s":[92,100]},{"t":120,"s":[100,100]}]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ip":0,"op":120,"st":0,"bm":0}],"markers":[]};

  // 8 teleport positions: 4 corners + 4 side midpoints
  const TELEPORT_SPOTS = [
    { top: '30px',    left: '20px'  },                                   // top-left
    { top: '30px',    right: '20px' },                                   // top-right
    { bottom: '16px', left: '20px'  },                                   // bottom-left
    { bottom: '16px', right: '20px' },                                   // bottom-right
    { top: '30px',    left: '50%',  transform: 'translateX(-50%)' },    // top-center
    { bottom: '16px', left: '50%',  transform: 'translateX(-50%)' },    // bottom-center
    { top: '50%',     left: '20px', transform: 'translateY(-50%)' },    // left-center
    { top: '50%',     right: '20px',transform: 'translateY(-50%)' },    // right-center
    { top: '50%',     left: '50%',  transform: 'translate(-50%,-50%)' }, // center
  ];

  const CSS = `
/* ── Ninja Avatar Component ── */
.ninja-avatar-wrap {
  position: relative;
  display: inline-block;
  pointer-events: none;
  user-select: none;
}
.ninja-avatar-wrap .ninja-lottie {
  display: block;
  filter: drop-shadow(0 6px 14px rgba(0,0,0,.55));
}

/* Speech bubble */
.ninja-speech {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%) scale(.85);
  background: #fff;
  color: #12121e;
  font-family: 'Segoe UI', 'Comic Sans MS', cursive, sans-serif;
  font-size: .82rem;
  font-weight: 700;
  padding: 7px 13px;
  border-radius: 14px;
  white-space: nowrap;
  box-shadow: 0 3px 12px rgba(0,0,0,.35);
  pointer-events: none;
  opacity: 0;
  transition: opacity .2s, transform .2s;
  z-index: 10;
}
.ninja-speech.visible {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
.ninja-speech::after {
  content: '';
  position: absolute;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
  border: 7px solid transparent;
  border-top-color: #fff;
  border-bottom: none;
}

/* ── Pose keyframes (applied to the whole wrapper) ── */
@keyframes nj-bob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
@keyframes nj-jump {
  0%, 100% { transform: translateY(0); }
  42%       { transform: translateY(-26px); }
  58%       { transform: translateY(-24px); }
}
@keyframes nj-shake {
  0%, 100% { transform: translateX(0); }
  18%       { transform: translateX(-10px); }
  36%       { transform: translateX(10px); }
  54%       { transform: translateX(-7px); }
  72%       { transform: translateX(7px); }
  88%       { transform: translateX(-3px); }
}
@keyframes nj-lean {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-6px) rotate(-5deg); }
}

/* ── Pose classes ── */
.ninja-avatar-wrap.pose-idle      { animation: nj-bob   2.4s ease-in-out infinite; }
.ninja-avatar-wrap.pose-celebrate { animation: nj-jump   .58s ease-in-out infinite; }
.ninja-avatar-wrap.pose-correct   { animation: nj-bob   2s   ease-in-out infinite; }
.ninja-avatar-wrap.pose-wrong     { animation: nj-shake  .7s  ease-in-out; }
.ninja-avatar-wrap.pose-think     { animation: nj-bob   3s   ease-in-out infinite; }
.ninja-avatar-wrap.pose-wave      { animation: nj-lean  1s   ease-in-out infinite; }

/* ── Fog bomb ── */
@keyframes nj-puff {
  0%   { transform: translate(-50%, -50%) scale(0.1); opacity: 0.9; }
  100% { transform: translate(-50%, -50%) scale(3.2); opacity: 0;   }
}
.ninja-fog-puff {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  animation: nj-puff 0.7s ease-out forwards;
}

/* ── Teleport in/out  (!important overrides pose animations while active) ── */
@keyframes nj-tp-out {
  0%   { opacity: 1; transform: scale(1)    rotate(0deg);   }
  100% { opacity: 0; transform: scale(0.05) rotate(200deg); }
}
@keyframes nj-tp-in {
  0%   { opacity: 0; transform: scale(0.05) rotate(-90deg); }
  65%  { opacity: 1; transform: scale(1.14) rotate(4deg);   }
  100% { opacity: 1; transform: scale(1)    rotate(0deg);   }
}
.ninja-avatar-wrap.nj-tp-out { animation: nj-tp-out 0.38s ease-in  forwards !important; }
.ninja-avatar-wrap.nj-tp-in  { animation: nj-tp-in  0.45s ease-out forwards !important; }
`;

  const SPEEDS = { idle: 1, celebrate: 2, correct: 1.4, wrong: 0.6, think: 0.7, wave: 1.1 };

  function loadLottie(cb) {
    if (window.lottie) { cb(); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
    s.onload = cb;
    document.head.appendChild(s);
  }

  // ── NinjaAvatar class ──────────────────────────────────────────────
  class NinjaAvatar {
    constructor(container, { size = 120, pose = 'idle', spotIndex = 3 } = {}) {
      this._speechTimer   = null;
      this._poseTimer     = null;
      this._anim          = null;
      this._pendingPose   = pose;
      this._container     = container;
      this._spotIdx       = spotIndex;  // 3 = bottom-right (default)
      this._isTeleporting = false;

      if (!document.getElementById('ninja-avatar-css')) {
        const s = document.createElement('style');
        s.id = 'ninja-avatar-css';
        s.textContent = CSS;
        document.head.appendChild(s);
      }

      const wrap = document.createElement('div');
      wrap.className = 'ninja-avatar-wrap';
      wrap.style.width         = size + 'px';
      wrap.style.height        = size + 'px';
      wrap.style.pointerEvents = 'auto';
      wrap.style.cursor        = 'pointer';

      const lottiDiv = document.createElement('div');
      lottiDiv.className = 'ninja-lottie';
      lottiDiv.style.width  = size + 'px';
      lottiDiv.style.height = size + 'px';
      wrap.appendChild(lottiDiv);

      this._bubble = document.createElement('div');
      this._bubble.className = 'ninja-speech';
      wrap.appendChild(this._bubble);

      this._wrap = wrap;
      container.appendChild(wrap);

      loadLottie(() => {
        this._anim = window.lottie.loadAnimation({
          container:     lottiDiv,
          renderer:      'svg',
          loop:          true,
          autoplay:      true,
          animationData: ANIMATION_DATA,
        });
        this.pose(this._pendingPose);
        wrap.addEventListener('click', () => this._fogTeleport());
      });
    }

    // Switch to a named pose. Pass duration (ms) to auto-return to idle.
    pose(name, duration) {
      if (this._anim) this._anim.setSpeed(SPEEDS[name] || 1);

      const cl = this._wrap.classList;
      [...cl].filter(c => c.startsWith('pose-')).forEach(c => cl.remove(c));
      void this._wrap.offsetWidth; // reflow to restart animation
      cl.add('pose-' + name);

      clearTimeout(this._poseTimer);
      if (duration) this._poseTimer = setTimeout(() => this.pose('idle'), duration);
      return this;
    }

    // Show a speech bubble for `duration` ms.
    say(text, duration = 2400) {
      this._bubble.textContent = text;
      this._bubble.classList.add('visible');
      clearTimeout(this._speechTimer);
      this._speechTimer = setTimeout(() => this._bubble.classList.remove('visible'), duration);
      return this;
    }

    _fogTeleport() {
      if (this._isTeleporting) return;
      this._isTeleporting = true;

      const wrap = this._wrap;

      // Clear any visible speech bubble
      this._bubble.classList.remove('visible');
      clearTimeout(this._speechTimer);

      // Capture center of avatar for fog origin
      const r  = wrap.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;

      this._spawnFog(cx, cy);

      // Save current pose classes and remove them so we can override animation
      const poseCls = [...wrap.classList].filter(c => c.startsWith('pose-'));
      poseCls.forEach(c => wrap.classList.remove(c));

      wrap.classList.add('nj-tp-out');

      // After vanish animation completes, hide and wait ~1.6 s
      setTimeout(() => {
        wrap.style.visibility = 'hidden';
        wrap.classList.remove('nj-tp-out');

        setTimeout(() => {
          // Move to a new random spot (not the current one)
          this._spotIdx = this._pickNextSpot();
          this._applySpot(this._container, TELEPORT_SPOTS[this._spotIdx]);

          // Two rAFs to let the browser lay out the new position
          requestAnimationFrame(() => requestAnimationFrame(() => {
            const r2  = wrap.getBoundingClientRect();
            const cx2 = r2.left + r2.width  / 2;
            const cy2 = r2.top  + r2.height / 2;

            this._spawnFog(cx2, cy2);

            wrap.style.visibility = '';
            wrap.classList.add('nj-tp-in');

            wrap.addEventListener('animationend', () => {
              wrap.classList.remove('nj-tp-in');
              poseCls.forEach(c => wrap.classList.add(c));
              this._isTeleporting = false;
            }, { once: true });
          }));
        }, 1600); // hidden for ~1.6 s (total gap ≈ 2 s including fade times)
      }, 380);
    }

    _spawnFog(cx, cy) {
      const COLORS = [
        'rgba(180,195,215,0.85)',
        'rgba(140,155,180,0.75)',
        'rgba(200,210,230,0.70)',
        'rgba(120,130,160,0.80)',
        'rgba(220,225,240,0.65)',
      ];
      for (let i = 0; i < 9; i++) {
        const el   = document.createElement('div');
        el.className = 'ninja-fog-puff';
        const size  = 26 + Math.random() * 74;
        const ox    = (Math.random() - 0.5) * size * 0.9;
        const oy    = (Math.random() - 0.5) * size * 0.9;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const dur   = (0.45 + Math.random() * 0.35).toFixed(2);
        const delay = (i * 0.045).toFixed(2);
        el.style.cssText = [
          `width:${size}px`,
          `height:${size}px`,
          `left:${cx + ox}px`,
          `top:${cy + oy}px`,
          `background:radial-gradient(circle,${color} 0%,transparent 70%)`,
          `animation-duration:${dur}s`,
          `animation-delay:${delay}s`,
        ].join(';');
        document.body.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
      }
    }

    _applySpot(container, spot) {
      container.style.top       = spot.top       || '';
      container.style.right     = spot.right     || '';
      container.style.bottom    = spot.bottom    || '';
      container.style.left      = spot.left      || '';
      container.style.transform = spot.transform || '';
    }

    _pickNextSpot() {
      const n = TELEPORT_SPOTS.length;
      let idx;
      do { idx = Math.floor(Math.random() * n); }
      while (idx === this._spotIdx);
      return idx;
    }

    remove() {
      if (this._anim) this._anim.destroy();
      this._wrap.remove();
    }
  }

  window.NinjaAvatar = NinjaAvatar;
})();
