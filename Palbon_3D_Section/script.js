// Standalone UMD Three.js Script (Works on file:// protocol, no build tools needed)
const THREE = window.THREE;
const OrbitControls = THREE.OrbitControls;

// ─── MODULE DATA ────────────────────────────────────────────────────────────
const MODULES = [
  { name: 'HRMS',           subtitle: 'Manage People',       color: 0x0ea5e9, hex: '#0ea5e9', icon: 'hrms',       pos: [-4.6, 0, -3.4] },
  { name: 'ERP',            subtitle: 'Run Business',        color: 0x7c3aed, hex: '#7c3aed', icon: 'erp',        pos: [ 4.6, 0, -3.4] },
  { name: 'Learning (LXP)', subtitle: 'Develop Talent',      color: 0x0891b2, hex: '#0891b2', icon: 'learning',   pos: [-6.4, 0,  0.2] },
  { name: 'CRM',            subtitle: 'Build Relationships', color: 0x2563eb, hex: '#2563eb', icon: 'crm',        pos: [ 6.4, 0,  0.2] },
  { name: 'Analytics & AI', subtitle: 'Drive Insights',      color: 0x0284c7, hex: '#0284c7', icon: 'analytics',  pos: [-4.6, 0,  3.8] },
  { name: 'Operations',     subtitle: 'Streamline Work',     color: 0x4f46e5, hex: '#4f46e5', icon: 'operations', pos: [ 4.6, 0,  3.8] },
];

// ─── SCENE / CAMERA / RENDERER SETUP ─────────────────────────────────────────
const container = document.getElementById('root') ?? document.body;
const getW = () => container.clientWidth || window.innerWidth;
const getH = () => container.clientHeight || window.innerHeight;

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, getW() / getH(), 0.1, 1000);
camera.position.set(0, 9.5, 16.5);
camera.lookAt(0, -0.6, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(getW(), getH());
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
container.appendChild(renderer.domElement);

// ─── TRANSPARENT BACKGROUND ──────────────────────────────────
scene.background = null;

// ─── CONTROLS ──────────────────────────────────────────────────────────────
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping   = true;
controls.dampingFactor   = 0.05;
controls.enableZoom      = false;
controls.maxPolarAngle   = Math.PI / 2.05;
controls.minDistance     = 4;
controls.maxDistance     = 30;
controls.autoRotate      = true;
controls.autoRotateSpeed = 0.35;
controls.target.set(0, -0.6, 0);

// ─── LIGHTING ──────────────────────────────────────────────────────────────
scene.add(new THREE.AmbientLight(0xffffff, 2.2));

const mainLight = new THREE.DirectionalLight(0xffffff, 1.3);
mainLight.position.set(-6, 14, 8);
mainLight.castShadow = true;
mainLight.shadow.mapSize.set(1024, 1024);
mainLight.shadow.bias = -0.001;
scene.add(mainLight);

const fillLight = new THREE.DirectionalLight(0xcce3ff, 0.7);
fillLight.position.set(6, 6, -6);
scene.add(fillLight);

const blueAccent = new THREE.PointLight(0x3b82f6, 1.5, 20);
blueAccent.position.set(0, 6, 0);
scene.add(blueAccent);

// ─── 3D CRISP LABEL SPRITE ──────────────────────────────────────────────────
// ─── 3D CRISP ULTRA-PREMIUM GLASSMORPHISM LABEL SPRITE ─────────────────────
// ─── 3D INTERACTIVE SCI-FI HUD LABEL SPRITE (DEFAULT & HOVER STATES) ─────────
function createDefaultTexture(name, hexColor) {
  const CW = 1024, CH = 340;
  const cv = document.createElement('canvas');
  cv.width = CW; cv.height = CH;
  const ctx = cv.getContext('2d');

  ctx.clearRect(0, 0, CW, CH);

  const rr = (x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
    ctx.quadraticCurveTo(x+w,y,x+w,y+r); ctx.lineTo(x+w,y+h-r);
    ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h); ctx.lineTo(x+r,y+h);
    ctx.quadraticCurveTo(x,y+h,x,y+h-r); ctx.lineTo(x,y+r);
    ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
  };

  const px = 24, py = 20, pw = CW - 48, ph = CH - 40, rad = 36;

  // 1. Soft Ambient Colored Glow Shadow
  ctx.save();
  ctx.shadowColor   = hexColor;
  ctx.shadowBlur    = 24;
  ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 8;
  rr(px, py, pw, ph, rad);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fill();
  ctx.restore();

  // 2. ULTRA-TRANSLUCENT GLASS CARD (5% White Visibility!)
  rr(px, py, pw, ph, rad);
  const glassBg = ctx.createLinearGradient(px, py, px + pw, py + ph);
  glassBg.addColorStop(0,   'rgba(255, 255, 255, 0.08)');
  glassBg.addColorStop(0.5, 'rgba(255, 255, 255, 0.04)');
  glassBg.addColorStop(1,   'rgba(255, 255, 255, 0.06)');
  ctx.fillStyle = glassBg;
  ctx.fill();

  // 3. Top Specular Glass Reflection Highlight
  rr(px, py, pw, ph * 0.45, rad);
  const hlGrad = ctx.createLinearGradient(px, py, px, py + ph * 0.45);
  hlGrad.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
  hlGrad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
  ctx.fillStyle = hlGrad;
  ctx.fill();

  // 4. Glowing Vibrant Glass Edge Border
  rr(px, py, pw, ph, rad);
  ctx.strokeStyle = hexColor;
  ctx.lineWidth   = 5;
  ctx.stroke();

  // 5. Left Vertical Accent Color Pillar Strip
  ctx.save();
  rr(px, py, pw, ph, rad);
  ctx.clip();
  ctx.fillStyle = hexColor;
  ctx.fillRect(px, py, 22, ph);
  ctx.restore();

  // 6. Top Left Module Pill Badge (5% Glass Tint)
  const badgeX = px + 44, badgeY = py + 28, badgeW = 240, badgeH = 50;
  rr(badgeX, badgeY, badgeW, badgeH, 25);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.10)';
  ctx.fill();
  ctx.strokeStyle = hexColor;
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Badge Status Dot
  ctx.beginPath();
  ctx.arc(badgeX + 26, badgeY + 25, 7, 0, Math.PI * 2);
  ctx.fillStyle = hexColor;
  ctx.fill();

  ctx.fillStyle = hexColor;
  ctx.font = '800 22px Inter, system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('ENTERPRISE', badgeX + 44, badgeY + 25);

  // 7. HUGE BOLD HIGH-CONTRAST TITLE ONLY
  ctx.fillStyle    = '#0F172A';
  ctx.font         = '900 80px Inter, system-ui, sans-serif';
  ctx.textAlign    = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(name, px + 44, py + 104);

  // 8. Bottom Sci-Fi Hover Prompt Pill
  ctx.fillStyle = '#334155';
  ctx.font = '700 22px Inter, system-ui, sans-serif';
  ctx.fillText('✦ Hover to expand telemetry', px + 44, py + ph - 48);

  const texture = new THREE.CanvasTexture(cv);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.premultipliedAlpha = false;
  return texture;
}

function createHoverTexture(name, subtitle, hexColor) {
  const CW = 1024, CH = 520;
  const cv = document.createElement('canvas');
  cv.width = CW; cv.height = CH;
  const ctx = cv.getContext('2d');

  ctx.clearRect(0, 0, CW, CH);

  const rr = (x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
    ctx.quadraticCurveTo(x+w,y,x+w,y+r); ctx.lineTo(x+w,y+h-r);
    ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h); ctx.lineTo(x+r,y+h);
    ctx.quadraticCurveTo(x,y+h,x,y+h-r); ctx.lineTo(x,y+r);
    ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
  };

  const px = 20, py = 20, pw = CW - 40, ph = CH - 40, rad = 32;

  // Sci-Fi Tech Neon Glow Drop Shadow
  ctx.save();
  ctx.shadowColor   = hexColor;
  ctx.shadowBlur    = 36;
  ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 10;
  rr(px, py, pw, ph, rad);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fill();
  ctx.restore();

  // 5% White Glass Base
  rr(px, py, pw, ph, rad);
  const glassBg = ctx.createLinearGradient(px, py, px + pw, py + ph);
  glassBg.addColorStop(0,   'rgba(255, 255, 255, 0.10)');
  glassBg.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
  glassBg.addColorStop(1,   'rgba(255, 255, 255, 0.08)');
  ctx.fillStyle = glassBg;
  ctx.fill();

  // Sci-Fi Outer Glowing Neon Border
  rr(px, py, pw, ph, rad);
  ctx.strokeStyle = hexColor;
  ctx.lineWidth   = 5.5;
  ctx.stroke();

  // Sci-Fi Tech Corner Brackets [ ]
  const bw = 28;
  ctx.strokeStyle = hexColor;
  ctx.lineWidth = 6;

  // Top Left Bracket
  ctx.beginPath(); ctx.moveTo(px + bw, py + 14); ctx.lineTo(px + 14, py + 14); ctx.lineTo(px + 14, py + bw); ctx.stroke();
  // Top Right Bracket
  ctx.beginPath(); ctx.moveTo(px + pw - bw, py + 14); ctx.lineTo(px + pw - 14, py + 14); ctx.lineTo(px + pw - 14, py + bw); ctx.stroke();
  // Bottom Left Bracket
  ctx.beginPath(); ctx.moveTo(px + bw, py + ph - 14); ctx.lineTo(px + 14, py + ph - 14); ctx.lineTo(px + 14, py + ph - bw); ctx.stroke();
  // Bottom Right Bracket
  ctx.beginPath(); ctx.moveTo(px + pw - bw, py + ph - 14); ctx.lineTo(px + pw - 14, py + ph - 14); ctx.lineTo(px + pw - 14, py + ph - bw); ctx.stroke();

  // Sci-Fi Top Status Bar [ SYS_ONLINE // MODULE_NAME ]
  const barX = px + 36, barY = py + 30, barW = pw - 72, barH = 48;
  rr(barX, barY, barW, barH, 14);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.10)';
  ctx.fill();
  ctx.strokeStyle = hexColor;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = hexColor;
  ctx.font = '800 20px monospace';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(`[ SYS_ONLINE // ${name.toUpperCase().replace(/\s+/g, '_')} ]`, barX + 24, barY + 24);

  // Large Bold Title
  ctx.fillStyle    = '#0F172A';
  ctx.font         = '900 70px Inter, system-ui, sans-serif';
  ctx.textAlign    = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(name, px + 36, py + 98);

  // Sci-Fi Tech HUD Paragraph Box (Dynamic Hover Telemetry Reveal - 5% Glass)
  const boxX = px + 36, boxY = py + 188, boxW = pw - 72, boxH = ph - 210;
  rr(boxX, boxY, boxW, boxH, 20);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.fill();
  ctx.strokeStyle = hexColor + '90';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Sci-Fi Glowing Bullet Dot
  ctx.beginPath();
  ctx.arc(boxX + 32, boxY + 36, 8, 0, Math.PI * 2);
  ctx.fillStyle = hexColor;
  ctx.fill();

  // Subtitle Paragraph Text inside HUD Box
  ctx.fillStyle    = '#0F172A';
  ctx.font         = '700 32px Inter, system-ui, sans-serif';
  ctx.textAlign    = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(subtitle, boxX + 54, boxY + 22);

  const texture = new THREE.CanvasTexture(cv);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.premultipliedAlpha = false;
  return texture;
}

function makeLabelSprite(name, subtitle, hexColor, worldW = 3.2) {
  const defaultTex = createDefaultTexture(name, hexColor);
  const hoverTex   = createHoverTexture(name, subtitle, hexColor);

  const mat = new THREE.SpriteMaterial({
    map: defaultTex,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    toneMapped: false // Prevents ACESFilmic toneMapping from turning card backgrounds gray!
  });

  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(worldW, worldW * (340 / 1024), 1);
  sprite.renderOrder = 10;

  sprite.userData = {
    defaultTex,
    hoverTex,
    isHovered: false
  };

  return sprite;
}

// ─── ROUNDED 3D PLATFORM BUILDER ───────────────────────────────────────────
function drawRoundedRect(shape, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2 - 0.01, height / 2 - 0.01);
  shape.moveTo(x + r, y);
  shape.lineTo(x + width - r, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + r);
  shape.lineTo(x + width, y + height - r);
  shape.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  shape.lineTo(x + r, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
}

function createRoundedSlabGeometry(w, d, h, r = 0.35) {
  const shape = new THREE.Shape();
  drawRoundedRect(shape, -w / 2, -d / 2, w, d, r);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: h,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 1,
    bevelSize: 0.025,
    bevelThickness: 0.025,
    curveSegments: 16
  });
  geo.center();
  return geo;
}

function createRoundedShapeGeometry(w, d, r = 0.35) {
  const shape = new THREE.Shape();
  drawRoundedRect(shape, -w / 2, -d / 2, w, d, r);
  return new THREE.ShapeGeometry(shape, 16);
}

function glassMat(colorHex = 0x3b82f6) {
  return new THREE.MeshPhysicalMaterial({
    color:              0xffffff,
    emissive:           colorHex,
    emissiveIntensity:  0.15,
    transmission:       0.92,   // 92% crystal clear glass refraction!
    opacity:            0.88,
    transparent:        true,
    roughness:          0.04,
    ior:                1.54,   // Glass Refractive Index
    thickness:          0.55,
    clearcoat:          1.0,
    clearcoatRoughness: 0.03,
    reflectivity:       0.95,
  });
}

function buildSlab(w, d, colorHex = 0x3b82f6, cornerRadius = 0.35) {
  const H = 0.32;
  const g = new THREE.Group();

  // Rounded Blue Drop Shadows
  const sh = new THREE.Mesh(
    createRoundedShapeGeometry(w + 0.45, d + 0.45, cornerRadius + 0.1),
    new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide })
  );
  sh.rotation.x = -Math.PI / 2;
  sh.position.set(0.06, -H/2 - 0.04, 0.06);
  g.add(sh);

  const sh2 = new THREE.Mesh(
    createRoundedShapeGeometry(w + 0.85, d + 0.85, cornerRadius + 0.18),
    new THREE.MeshBasicMaterial({ color: 0x1d4ed8, transparent: true, opacity: 0.06, depthWrite: false, side: THREE.DoubleSide })
  );
  sh2.rotation.x = -Math.PI / 2;
  sh2.position.set(0.1, -H/2 - 0.08, 0.1);
  g.add(sh2);

  // Main Rounded Glass Body
  const body = new THREE.Mesh(createRoundedSlabGeometry(w, H, d, cornerRadius), glassMat(colorHex));
  body.castShadow    = true;
  body.receiveShadow = true;
  g.add(body);

  // Top Face Rounded Highlight
  const top = new THREE.Mesh(
    createRoundedShapeGeometry(w - 0.08, d - 0.08, Math.max(0.05, cornerRadius - 0.04)),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, depthWrite: false, side: THREE.DoubleSide })
  );
  top.rotation.x = -Math.PI / 2;
  top.position.y = H/2 + 0.015;
  g.add(top);

  // Rounded Rim Edge Line
  const shape = new THREE.Shape();
  drawRoundedRect(shape, -w / 2, -d / 2, w, d, cornerRadius);
  const pts2D = shape.getPoints(32);
  const pts3D = pts2D.map(p => new THREE.Vector3(p.x, H/2 + 0.016, -p.y));
  pts3D.push(pts3D[0].clone());
  
  const rim = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts3D), new THREE.LineBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.5 }));
  g.add(rim);

  return g;
}

// ─── RELATABLE 3D ICONS ─────────────────────────────────────────────────────
function iMat(c) {
  return new THREE.MeshPhysicalMaterial({
    color: c, emissive: c, emissiveIntensity: 0.45,
    metalness: 0.2, roughness: 0.2, clearcoat: 0.85,
  });
}
function accentMat(c) {
  return new THREE.MeshPhysicalMaterial({
    color: 0xffffff, emissive: c, emissiveIntensity: 0.7,
    metalness: 0.4, roughness: 0.1, clearcoat: 1.0,
  });
}

function hrmsIcon(c) {
  const g = new THREE.Group(), m = iMat(c), acc = accentMat(c);
  const leadHead = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), m); leadHead.position.set(0, 0.52, 0); g.add(leadHead);
  const leadBody = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.16, 0.28, 16), m); leadBody.position.set(0, 0.24, 0); g.add(leadBody);
  [ -0.26, 0.26 ].forEach((x) => {
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 14), m); head.position.set(x, 0.44, -0.05); g.add(head);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.13, 0.22, 14), m); body.position.set(x, 0.20, -0.05); g.add(body);
  });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.015, 8, 48), acc); halo.rotation.x = Math.PI / 2; halo.position.y = 0.08; g.add(halo);
  const badgePin = new THREE.Mesh(new THREE.OctahedronGeometry(0.07, 0), acc); badgePin.position.set(0, 0.74, 0); g.add(badgePin);
  return g;
}

function erpIcon(c) {
  const g = new THREE.Group(), m = iMat(c), acc = accentMat(c);
  const tower = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.52, 0.24), m); tower.position.set(-0.12, 0.30, 0.05); g.add(tower);
  const tower2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.38, 0.18), m); tower2.position.set(0.12, 0.23, 0.08); g.add(tower2);
  const gearHub = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.06, 16), acc); gearHub.position.set(0.08, 0.44, -0.10); gearHub.rotation.x = Math.PI / 3; g.add(gearHub);
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.06), acc); tooth.position.set(0.08 + Math.cos(angle) * 0.22, 0.44 + Math.sin(angle) * 0.22, -0.10); g.add(tooth);
  }
  const cube = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), acc); cube.position.set(-0.12, 0.10, -0.15); cube.rotation.y = Math.PI / 4; g.add(cube);
  return g;
}

function learningIcon(c) {
  const g = new THREE.Group(), m = iMat(c), acc = accentMat(c);
  const leftPage = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.03, 0.32), m); leftPage.position.set(-0.11, 0.12, 0); leftPage.rotation.z = 0.15; g.add(leftPage);
  const rightPage = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.03, 0.32), m); rightPage.position.set(0.11, 0.12, 0); rightPage.rotation.z = -0.15; g.add(rightPage);
  const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.32, 10), m); spine.rotation.x = Math.PI / 2; spine.position.set(0, 0.10, 0); g.add(spine);
  const capTop = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.03, 0.44), m); capTop.position.set(0, 0.46, 0); capTop.rotation.y = Math.PI / 4; g.add(capTop);
  const capSkull = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.14, 16), m); capSkull.position.set(0, 0.36, 0); g.add(capSkull);
  const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 10), acc); btn.position.set(0, 0.48, 0); g.add(btn);
  const tasselLine = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.18, 6), acc); tasselLine.position.set(0.14, 0.39, 0.14); tasselLine.rotation.z = -0.3; g.add(tasselLine);
  const tasselTip = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.08, 8), acc); tasselTip.position.set(0.20, 0.28, 0.16); g.add(tasselTip);
  const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.08, 0), acc); star.position.set(0, 0.65, 0); g.add(star);
  return g;
}

function crmIcon(c) {
  const g = new THREE.Group(), m = iMat(c), acc = accentMat(c);
  const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.10, 0.28, 14), m); leftArm.position.set(-0.20, 0.28, 0); leftArm.rotation.z = Math.PI / 3.5; g.add(leftArm);
  const rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.10, 0.28, 14), m); rightArm.position.set(0.20, 0.28, 0); rightArm.rotation.z = -Math.PI / 3.5; g.add(rightArm);
  const handClasp = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), acc); handClasp.position.set(0, 0.36, 0); g.add(handClasp);
  const shield = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.02, 10, 32), m); shield.position.set(0, 0.36, -0.05); g.add(shield);
  [-0.32, 0.32].forEach((x) => {
    const node = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 12), acc); node.position.set(x, 0.52, 0); g.add(node);
  });
  return g;
}

function analyticsIcon(c) {
  const g = new THREE.Group(), m = iMat(c), acc = accentMat(c);
  [ 0.20, 0.36, 0.52 ].forEach((h, i) => {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.12, h, 0.12), m); bar.position.set((i - 1) * 0.18, h / 2 + 0.06, 0); g.add(bar);
  });
  const arrowShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.56, 8), acc); arrowShaft.position.set(0, 0.38, 0.10); arrowShaft.rotation.z = -Math.PI / 4; g.add(arrowShaft);
  const arrowHead = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.14, 12), acc); arrowHead.position.set(0.20, 0.56, 0.10); arrowHead.rotation.z = -Math.PI / 4; g.add(arrowHead);
  const aiDiamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.10, 0), acc); aiDiamond.position.set(-0.18, 0.48, 0.10); g.add(aiDiamond);
  return g;
}

function operationsIcon(c) {
  const g = new THREE.Group(), m = iMat(c), acc = accentMat(c);
  const g1Hub = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.20, 0.07, 16), m); g1Hub.position.set(-0.10, 0.34, 0); g1Hub.rotation.x = Math.PI / 3; g.add(g1Hub);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.05), m); tooth.position.set(-0.10 + Math.cos(a) * 0.24, 0.34 + Math.sin(a) * 0.24, 0); g.add(tooth);
  }
  const g2Hub = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.07, 14), acc); g2Hub.position.set(0.20, 0.46, -0.04); g2Hub.rotation.x = Math.PI / 3; g.add(g2Hub);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.045, 0.045), acc); tooth.position.set(0.20 + Math.cos(a) * 0.18, 0.46 + Math.sin(a) * 0.18, -0.04); g.add(tooth);
  }
  const flowRing = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.012, 8, 40, Math.PI * 1.5), acc); flowRing.position.set(0.04, 0.38, -0.08); flowRing.rotation.z = Math.PI / 6; g.add(flowRing);
  return g;
}

function buildIcon(type, color) {
  return ({
    hrms: hrmsIcon,
    erp: erpIcon,
    learning: learningIcon,
    crm: crmIcon,
    analytics: analyticsIcon,
    operations: operationsIcon
  }[type] || ((c) => new THREE.Group()))(color);
}

// ─── CENTRAL HUB ────────────────────────────────────────────────────────────
function buildHub() {
  const hub = new THREE.Group();

  [
    { w:4.0, d:4.0, y:0,    c:0xeef5fc, r:0.48 },
    { w:3.2, d:3.2, y:0.34, c:0xf4f8fe, r:0.40 },
    { w:2.4, d:2.4, y:0.68, c:0xfafcff, r:0.32 },
  ].forEach(({w,d,y,c,r})=>{ const s=buildSlab(w,d,c,r); s.position.y=y; hub.add(s); });

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.42, 4),
    new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6, emissive: 0x2563eb, emissiveIntensity: 1.2,
      metalness: 0.9, roughness: 0.0, clearcoat: 1.0,
    })
  );
  core.name = 'core'; core.position.set(0, 1.55, 0); hub.add(core);

  const pCv=document.createElement('canvas'); pCv.width=pCv.height=128;
  const pCtx=pCv.getContext('2d');
  pCtx.clearRect(0,0,128,128);
  pCtx.fillStyle='rgba(255,255,255,0.98)';
  pCtx.font='bold 84px Arial, sans-serif'; pCtx.textAlign='center'; pCtx.textBaseline='middle';
  pCtx.fillText('P',64,68);
  const pMesh=new THREE.Mesh(
    new THREE.PlaneGeometry(0.52,0.52),
    new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(pCv),transparent:true,side:THREE.DoubleSide,depthTest:false})
  );
  pMesh.name='pLabel'; pMesh.position.set(0,1.55,0); hub.add(pMesh);

  [{r:0.66,rx:0,n:'r0'},{r:0.66,rx:Math.PI/2,n:'r1'},{r:0.90,rx:Math.PI/3,n:'r2'}].forEach(({r,rx,n})=>{
    const ring=new THREE.Mesh(
      new THREE.TorusGeometry(r,0.013,8,80),
      new THREE.MeshBasicMaterial({color:0x3b82f6,transparent:true,opacity:0.55})
    );
    ring.name=n; ring.position.set(0,1.55,0); ring.rotation.x=rx; hub.add(ring);
  });

  const scan=new THREE.Mesh(
    new THREE.TorusGeometry(1.18,0.009,6,96),
    new THREE.MeshBasicMaterial({color:0x3b82f6,transparent:true,opacity:0.25})
  );
  scan.name='scan'; scan.rotation.x=Math.PI/2; scan.position.y=0.08; hub.add(scan);

  const lbl=makeLabelSprite('PALBON SUITES','Unified Business Intelligence','#2563eb',3.0);
  lbl.name='hubLabel'; lbl.position.set(0,2.6,0); hub.add(lbl);

  const pl=new THREE.PointLight(0x3b82f6,2.5,10); pl.position.set(0,1.6,0); hub.add(pl);
  return hub;
}

// ─── MODULE NODE ────────────────────────────────────────────────────────────
function buildNode(mod) {
  const g = new THREE.Group();
  g.userData.isNode = true;
  g.userData.mod = mod;

  const s1=buildSlab(2.4,2.4,0xeef5fc,0.36); s1.position.y=0; g.add(s1);
  const s2=buildSlab(1.9,1.9,0xf4f8fe,0.28); s2.position.y=0.34; g.add(s2);

  const edge=new THREE.Mesh(
    new THREE.TorusGeometry(1.32,0.013,8,80),
    new THREE.MeshBasicMaterial({color:mod.color,transparent:true,opacity:0.65})
  );
  edge.rotation.x=Math.PI/2; edge.position.y=0.06; g.add(edge);

  const dot=new THREE.Mesh(
    new THREE.SphereGeometry(0.055,12,12),
    new THREE.MeshBasicMaterial({color:mod.color})
  );
  dot.position.y=0.07; g.add(dot);

  const icon=buildIcon(mod.icon,mod.color);
  icon.name='icon'; icon.position.set(0,0.82,0); g.add(icon);

  const lbl=makeLabelSprite(mod.name,mod.subtitle,mod.hex,2.3);
  lbl.name='label'; lbl.position.set(0,2.1,0); g.add(lbl);

  return g;
}

// ─── BEAMS ──────────────────────────────────────────────────────────────────
function buildBeam(sx,sz,ex,ez,color) {
  const g   = new THREE.Group();
  const Y   = 0.52;
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(sx, Y, sz),
    new THREE.Vector3((sx+ex)/2, Y+0.55, (sz+ez)/2),
    new THREE.Vector3(ex, Y, ez)
  );

  g.add(new THREE.Mesh(
    new THREE.TubeGeometry(curve,60,0.007,8,false),
    new THREE.MeshBasicMaterial({color:0x3b82f6,transparent:true,opacity:0.45})
  ));
  g.add(new THREE.Mesh(
    new THREE.TubeGeometry(curve,60,0.022,8,false),
    new THREE.MeshBasicMaterial({color:0x93c5fd,transparent:true,opacity:0.12})
  ));

  for(let i=1;i<=5;i++){
    const pos=curve.getPoint(i/6);
    const bead=new THREE.Mesh(
      new THREE.SphereGeometry(0.038,10,10),
      new THREE.MeshBasicMaterial({color:0x3b82f6,transparent:true,opacity:0.85})
    );
    bead.position.copy(pos); g.add(bead);
  }

  for(let i=0;i<3;i++){
    const pg=new THREE.Group();
    pg.userData.curve  = curve;
    pg.userData.speed  = 0.1+Math.random()*0.08;
    pg.userData.offset = i/3;

    pg.add(new THREE.Mesh(new THREE.SphereGeometry(0.042,10,10),new THREE.MeshBasicMaterial({color:0x2563eb})));

    for(let j=1;j<=8;j++){
      const ts=new THREE.Mesh(
        new THREE.SphereGeometry(0.026*(1-j/9),6,6),
        new THREE.MeshBasicMaterial({color:0x60a5fa,transparent:true,opacity:0.35*(1-j/9)})
      );
      ts.userData.tailOffset=j*0.014; pg.add(ts);
    }
    g.add(pg);
  }
  g.userData.curve=curve;
  return g;
}

// ─── AMBIENT PARTICLES ──────────────────────────────────────────────────────
function buildParticles() {
  const N=350; const pos=new Float32Array(N*3); const col=new Float32Array(N*3);
  for(let i=0;i<N;i++){
    pos[i*3]=(Math.random()-0.5)*34; pos[i*3+1]=Math.random()*12-1; pos[i*3+2]=(Math.random()-0.5)*34;
    const c=new THREE.Color().setHSL(0.58+Math.random()*0.08,0.65,0.6+Math.random()*0.2);
    col[i*3]=c.r; col[i*3+1]=c.g; col[i*3+2]=c.b;
  }
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
  geo.setAttribute('color',new THREE.BufferAttribute(col,3));
  return new THREE.Points(geo,new THREE.PointsMaterial({
    size:0.04,vertexColors:true,
    transparent:true,opacity:0.45,blending:THREE.AdditiveBlending,depthWrite:false,
  }));
}

// ─── BUILD SCENE ────────────────────────────────────────────────────────────
const worldGroup = new THREE.Group();
scene.add(worldGroup);

const hub   = buildHub();
const nodes = [];
const beams = [];
worldGroup.add(hub);
worldGroup.add(buildParticles());

const grid = new THREE.GridHelper(38,38,0x93c5fd,0xbfdbfe);
grid.position.y=-0.6; grid.material.transparent=true; grid.material.opacity=0.18;
worldGroup.add(grid);

MODULES.forEach(mod=>{
  const node=buildNode(mod);
  node.position.set(mod.pos[0],mod.pos[1],mod.pos[2]);
  worldGroup.add(node); nodes.push(node);
  const beam=buildBeam(0,0,mod.pos[0],mod.pos[2],mod.color);
  worldGroup.add(beam); beams.push(beam);
});

// ─── MOUSE MOVE CAMERA SHIFT & RAYCASTER LISTENER ─────────────────────────
let targetMouseX = 0;
let currentMouseX = 0;
const raycaster  = new THREE.Raycaster();
const mouseVec   = new THREE.Vector2(-999, -999);

function updateMouseVector(clientX, clientY) {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  mouseVec.x = (x / rect.width) * 2 - 1;
  mouseVec.y = -(y / rect.height) * 2 + 1;
}

window.addEventListener('mousemove', (e) => {
  targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
  updateMouseVector(e.clientX, e.clientY);
});

window.addEventListener('message', (e) => {
  if (e.data && typeof e.data.mouseX === 'number') {
    targetMouseX = e.data.mouseX;
  }
  if (e.data && typeof e.data.clientX === 'number' && typeof e.data.clientY === 'number') {
    updateMouseVector(e.data.clientX, e.data.clientY);
  }
});

// ─── ANIMATION LOOP ─────────────────────────────────────────────────────────
const clock=new THREE.Clock();

function animate(){
  const t=clock.getElapsedTime();

  // Smooth lerp mouse shift + continuous 360-degree auto rotation
  currentMouseX += (targetMouseX - currentMouseX) * 0.06;
  worldGroup.rotation.y = t * 0.15 + currentMouseX * 0.35;
  camera.lookAt(0, -0.4, 0);

  // ─── RAYCAST HOVER & CARD ZOOM DETECT ──────────────────────────────────────
  raycaster.setFromCamera(mouseVec, camera);
  const intersects = raycaster.intersectObjects(nodes, true);
  
  let hoveredNodeGroup = null;
  if (intersects.length > 0) {
    let obj = intersects[0].object;
    while (obj && obj !== scene) {
      if (nodes.includes(obj)) {
        hoveredNodeGroup = obj;
        break;
      }
      obj = obj.parent;
    }
  }

  const core=hub.getObjectByName('core');
  const pLabel=hub.getObjectByName('pLabel');
  if(core){ core.rotation.y=t*0.55; core.rotation.x=Math.sin(t*0.28)*0.18; core.position.y=1.55+Math.sin(t*0.9)*0.08; }
  if(pLabel&&core){ pLabel.position.y=core.position.y; pLabel.lookAt(camera.position); }

  ['r0','r1','r2'].forEach((n,i)=>{
    const r=hub.getObjectByName(n); if(!r) return;
    if(i===0) r.rotation.y=t*0.9;
    if(i===1){ r.rotation.y=-t*0.7; r.rotation.z=t*0.3; }
    if(i===2) r.rotation.y=t*0.5;
  });
  const scan=hub.getObjectByName('scan'); if(scan) scan.rotation.z=t*0.22;

  nodes.forEach((node, i) => {
    const isHovered = (node === hoveredNodeGroup);
    const targetScale = isHovered ? 1.35 : 1.0;

    node.scale.x += (targetScale - node.scale.x) * 0.14;
    node.scale.y += (targetScale - node.scale.y) * 0.14;
    node.scale.z += (targetScale - node.scale.z) * 0.14;

    const basePosY = Math.sin(t * 0.45 + i * 1.1) * 0.16;
    node.position.y += ((isHovered ? basePosY + 0.42 : basePosY) - node.position.y) * 0.14;

    const lbl = node.getObjectByName('label');
    if (lbl && lbl.userData) {
      if (isHovered && !lbl.userData.isHovered) {
        lbl.material.map = lbl.userData.hoverTex;
        lbl.material.needsUpdate = true;
        lbl.userData.isHovered = true;
      } else if (!isHovered && lbl.userData.isHovered) {
        lbl.material.map = lbl.userData.defaultTex;
        lbl.material.needsUpdate = true;
        lbl.userData.isHovered = false;
      }

      const baseW = isHovered ? 4.2 : 3.2;
      const aspect = isHovered ? (520 / 1024) : (340 / 1024);
      lbl.scale.x += (baseW - lbl.scale.x) * 0.14;
      lbl.scale.y += ((baseW * aspect) - lbl.scale.y) * 0.14;
    }

    const icon = node.getObjectByName('icon');
    if (icon) icon.rotation.y = t * 0.22 + i * 0.55;
  });

  beams.forEach(beam=>{
    beam.children.forEach(pg=>{
      if(!pg.userData.curve) return;
      const prog=(t*pg.userData.speed+pg.userData.offset)%1;
      const hp=pg.userData.curve.getPoint(prog);
      if(pg.children[0]) pg.children[0].position.copy(hp);
      if(pg.children[1]) pg.children[1].position.copy(hp);
      pg.children.slice(2).forEach(ts=>{
        pg.userData.curve.getPoint(Math.max(0,prog-ts.userData.tailOffset),ts.position);
      });
    });
  });

  blueAccent.intensity=1.5+Math.sin(t*0.9)*0.2;

  controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

// ─── RESIZE LISTENER ────────────────────────────────────────────────────────
window.addEventListener('resize',()=>{
  const W = getW(), H = getH();
  camera.aspect = W / H; camera.updateProjectionMatrix();
  renderer.setSize(W, H);
});
