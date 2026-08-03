import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';

import './CircularGallery.css';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function drawCardTexture(img, item = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 700;
  canvas.height = 900;
  const ctx = canvas.getContext('2d');

  // Fill base background
  ctx.fillStyle = '#01182F';
  ctx.fillRect(0, 0, 700, 900);

  // 1. Draw Image (cover)
  if (img && img.naturalWidth) {
    const scale = Math.max(700 / img.naturalWidth, 900 / img.naturalHeight);
    const x = (700 - img.naturalWidth * scale) / 2;
    const y = (900 - img.naturalHeight * scale) / 2;
    ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
  }

  // 2. Heavy Frosted Dark Blur Overlay Gradient (#01182F palette) for 100% Text Readability
  const gradient = ctx.createLinearGradient(0, 0, 0, 900);
  gradient.addColorStop(0, 'rgba(1, 24, 47, 0.72)');
  gradient.addColorStop(0.35, 'rgba(1, 24, 47, 0.88)');
  gradient.addColorStop(0.8, 'rgba(1, 24, 47, 0.96)');
  gradient.addColorStop(1, 'rgba(1, 24, 47, 0.99)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 700, 900);

  // 3. Card Outer Border Glow (Rounded to match card corner radius!)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 6;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(14, 14, 672, 872, 38);
    ctx.stroke();
  } else {
    ctx.strokeRect(14, 14, 672, 872);
  }

  // Safe inner padding (prevents edge truncation)
  const marginX = 55;

  // 4. Vibrant High-Contrast Icon Box Top-Left
  ctx.fillStyle = '#ffffff';
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(marginX, 55, 92, 92, 22);
    ctx.fill();
    ctx.strokeStyle = 'rgba(2, 132, 199, 0.4)';
    ctx.lineWidth = 3;
    ctx.stroke();
  } else {
    ctx.fillRect(marginX, 55, 92, 92);
  }

  // Emoji / Vector Icon symbol
  const icon = item.icon || '🚀';
  ctx.font = '50px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(icon, marginX + 46, 55 + 46);

  // 5. Category Pill Badge Top-Right
  const catLabel = item.catLabel || (item.category === 'hrms' ? 'HRMS Nucleus' : 'ERP Line');
  const isErp = !catLabel.toLowerCase().includes('hrms');
  
  ctx.fillStyle = isErp ? '#0284c7' : '#6366f1';
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(415, 58, 230, 56, 28);
    ctx.fill();
  } else {
    ctx.fillRect(415, 58, 230, 56);
  }

  ctx.font = 'bold 22px "Figtree", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(catLabel.toUpperCase(), 530, 86);

  // Reset text shadow for maximum readability
  ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
  ctx.shadowBlur = 16;

  // 6. Title Heading (Larger & Extra Bold!)
  const title = item.text || item.title || 'PALBON Module';
  ctx.font = '900 54px "Figtree", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  
  // Wrap title if needed
  const titleWords = title.split(' ');
  let titleLine = '';
  let titleY = 440;
  for (let n = 0; n < titleWords.length; n++) {
    const testLine = titleLine + titleWords[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > 580 && n > 0) {
      ctx.fillText(titleLine, marginX, titleY);
      titleLine = titleWords[n] + ' ';
      titleY += 64;
    } else {
      titleLine = testLine;
    }
  }
  ctx.fillText(titleLine, marginX, titleY);

  // 7. Subtext Description (Larger & Higher Contrast!)
  const desc = item.desc || 'Single record capability module for modern enterprise operations.';
  ctx.font = '600 30px "Figtree", sans-serif';
  ctx.fillStyle = '#f8fafc'; // slate-50
  
  const words = desc.split(' ');
  let line = '';
  let lineY = titleY + 74;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > 580 && n > 0) {
      ctx.fillText(line, marginX, lineY);
      line = words[n] + ' ';
      lineY += 40;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, marginX, lineY);

  // 8. Action Link Tag
  ctx.font = 'bold 30px "Figtree", sans-serif';
  ctx.fillStyle = '#38bdf8'; // sky-400
  ctx.textAlign = 'left';
  ctx.fillText('Explore Module →', marginX, 805);

  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  return canvas;
}

class Media {
  constructor({
    geometry,
    gl,
    image,
    itemData,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font
  }) {
    this.extra = 0;
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.itemData = itemData;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.hoverProgress = 0;
    this.createShader();
    this.createMesh();
    this.onResize();
  }
  createShader() {
    const texture = new Texture(this.gl, {
      generateMipmaps: true
    });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = 0.0; // REMOVED JIGGLING EFFECT COMPLETELY
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        uniform float uHover;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec4 color = texture2D(tMap, vUv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          // Soft outer drop shadow glow when hovered
          float shadowDist = roundedBoxSDF(vUv - 0.5, vec2(0.48 - uBorderRadius), uBorderRadius * 1.25);
          float shadowAlpha = (1.0 - smoothstep(-0.06, 0.06, shadowDist)) * 0.55 * uHover;
          
          vec3 shadowColor = vec3(0.003, 0.094, 0.184) * 0.4;
          vec3 finalColor = mix(shadowColor, color.rgb, alpha);
          float finalAlpha = max(alpha, shadowAlpha);
          
          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uBorderRadius: { value: this.borderRadius },
        uHover: { value: 0 }
      },
      transparent: true
    });
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      const cardCanvas = drawCardTexture(img, this.itemData || { text: this.text });
      texture.image = cardCanvas;
    };
  }
  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.plane.setParent(this.scene);
  }
  update(scroll, direction, mouseWorld) {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    // Accurate hover bounding box detection in 3D world space
    if (mouseWorld && mouseWorld.x < 9000) {
      const dx = Math.abs(this.plane.position.x - mouseWorld.x);
      const dy = Math.abs(this.plane.position.y - mouseWorld.y);
      const halfW = (this.baseScaleX || 3.5) * 0.5;
      const halfH = (this.baseScaleY || 4.5) * 0.5;
      this.isHovered = dx < halfW && dy < halfH;
    } else {
      this.isHovered = false;
    }

    // Lerp hover progress smoothly
    this.hoverProgress = lerp(this.hoverProgress, this.isHovered ? 1.0 : 0.0, 0.12);
    
    // Zoom out on hover (scale down to 90% for clear zoom-out response)
    const scaleFactor = 1.0 - this.hoverProgress * 0.10;
    
    if (this.baseScaleX && this.baseScaleY) {
      this.plane.scale.x = this.baseScaleX * scaleFactor;
      this.plane.scale.y = this.baseScaleY * scaleFactor;
    }

    if (this.plane.program.uniforms.uHover) {
      this.plane.program.uniforms.uHover.value = this.hoverProgress;
    }

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }
  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
    }
    // Responsive scale: derive from screen width on mobile/tablet so cards fill the viewport properly
    const isMobile = this.screen.width < 768;
    const isTablet = this.screen.width >= 768 && this.screen.width < 1024;
    if (isMobile) {
      // width/1100 → ~1.5 cards visible on mobile, smaller and better proportioned
      this.scale = this.screen.width / 1100;
    } else if (isTablet) {
      // ~2 cards visible on tablet
      this.scale = this.screen.width / 1400;
    } else {
      this.scale = this.screen.height / 1500;
    }
    this.baseScaleY = (this.viewport.height * (900 * this.scale)) / this.screen.height;
    this.baseScaleX = (this.viewport.width * (700 * this.scale)) / this.screen.width;
    
    const scaleFactor = 1.0 - (this.hoverProgress || 0) * 0.10;
    this.plane.scale.y = this.baseScaleY * scaleFactor;
    this.plane.scale.x = this.baseScaleX * scaleFactor;

    this.padding = isMobile ? 0.3 : isTablet ? 1.2 : 2;
    this.width = this.baseScaleX + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

class App {
  constructor(
    container,
    {
      items,
      bend,
      textColor = '#ffffff',
      borderRadius = 0,
      font = 'bold 30px Figtree',
      scrollSpeed = 2,
      scrollEase = 0.05
    } = {}
  ) {
    document.documentElement.classList.remove('no-js');
    this.container = container;
    this.originalBend = bend; // store to allow responsive adjustments
    this.scrollSpeed = scrollSpeed;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.mouseWorld = { x: 9999, y: 9999 };
    this.lastMouseX = null;
    this.onCheckDebounce = debounce(this.onCheck, 200);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
  }
  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }
  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }
  createScene() {
    this.scene = new Transform();
  }
  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100
    });
  }
  createMedias(items, bend = 1, textColor, borderRadius, font) {
    const defaultItems = [
      { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'Bridge' },
      { image: `https://picsum.photos/seed/2/800/600?grayscale`, text: 'Desk Setup' },
      { image: `https://picsum.photos/seed/3/800/600?grayscale`, text: 'Waterfall' }
    ];
    const galleryItems = items && items.length ? items : defaultItems;
    this.mediasImages = galleryItems.concat(galleryItems);
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        itemData: data,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.text,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font
      });
    });
  }
  onMouseMove(e) {
    const rect = this.container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const mouseNormalizedX = (x / rect.width) * 2 - 1;
    const mouseNormalizedY = -(y / rect.height) * 2 + 1;

    this.mouseWorld = {
      x: (mouseNormalizedX * this.viewport.width) / 2,
      y: (mouseNormalizedY * this.viewport.height) / 2
    };

    // Reversed mouse motion scroll trigger per user request (decreased sensitivity by 70%)
    if (this.lastMouseX !== null) {
      const dx = e.clientX - this.lastMouseX;
      // Moving mouse right (dx > 0) -> cards scroll right
      // Moving mouse left (dx < 0) -> cards scroll left
      this.scroll.target += dx * (this.scrollSpeed * 0.0105);
    }
    this.lastMouseX = e.clientX;
  }
  onMouseLeave() {
    this.mouseWorld = { x: 9999, y: 9999 };
    this.lastMouseX = null;
  }
  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientX : e.clientX;
  }
  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * (this.scrollSpeed * 0.0075);
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp() {
    this.isDown = false;
    this.onCheck();
  }
  onWheel(e) {
    const delta = e.deltaY || e.wheelDelta || e.detail;
    this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
    this.onCheckDebounce();
  }
  onKeyDown(e) {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        this.scroll.target += this.scrollSpeed * 5;
        this.onCheckDebounce();
        break;

      case 'ArrowLeft':
        e.preventDefault();
        this.scroll.target -= this.scrollSpeed * 5;
        this.onCheckDebounce();
        break;

      case 'Home':
        e.preventDefault();
        this.scroll.target = 0;
        this.onCheckDebounce();
        break;

      default:
        break;
    }
  }

  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }
  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height
    });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    // Reduce bend on mobile to prevent extreme card tilt angles
    const mobileBend = this.screen.width < 768 ? 1 : this.originalBend;
    if (this.medias) {
      this.medias.forEach(media => {
        media.bend = mobileBend;
        media.onResize({ screen: this.screen, viewport: this.viewport });
      });
    }
  }
  update() {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    if (this.medias) {
      this.medias.forEach(media => media.update(this.scroll, direction, this.mouseWorld));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }
  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);
    this.boundOnKeyDown = this.onKeyDown.bind(this);
    this.boundOnMouseMove = this.onMouseMove.bind(this);
    this.boundOnMouseLeave = this.onMouseLeave.bind(this);

    window.addEventListener('resize', this.boundOnResize);
    window.addEventListener('mousewheel', this.boundOnWheel);
    window.addEventListener('wheel', this.boundOnWheel);
    window.addEventListener('mousedown', this.boundOnTouchDown);
    window.addEventListener('mousemove', this.boundOnTouchMove);
    window.addEventListener('mouseup', this.boundOnTouchUp);
    window.addEventListener('touchstart', this.boundOnTouchDown);
    window.addEventListener('touchmove', this.boundOnTouchMove);
    window.addEventListener('touchend', this.boundOnTouchUp);

    this.container?.addEventListener('mousemove', this.boundOnMouseMove);
    this.container?.addEventListener('mouseleave', this.boundOnMouseLeave);
    this.container?.addEventListener('keydown', this.boundOnKeyDown);
  }
  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.boundOnResize);
    window.removeEventListener('mousewheel', this.boundOnWheel);
    window.removeEventListener('wheel', this.boundOnWheel);
    window.removeEventListener('mousedown', this.boundOnTouchDown);
    window.removeEventListener('mousemove', this.boundOnTouchMove);
    window.removeEventListener('mouseup', this.boundOnTouchUp);
    window.removeEventListener('touchstart', this.boundOnTouchDown);
    window.removeEventListener('touchmove', this.boundOnTouchMove);
    window.removeEventListener('touchend', this.boundOnTouchUp);
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }

    if (this.container) {
      this.container.removeEventListener('mousemove', this.boundOnMouseMove);
      this.container.removeEventListener('mouseleave', this.boundOnMouseLeave);
      this.container.removeEventListener('keydown', this.boundOnKeyDown);
    }
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  font = 'bold 30px Figtree',
  fontUrl,
  scrollSpeed = 2,
  scrollEase = 0.05
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    let app = new App(containerRef.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
      scrollSpeed,
      scrollEase
    });

    return () => {
      if (app) app.destroy();
    };
  }, [items, bend, textColor, borderRadius, font, fontUrl, scrollSpeed, scrollEase]);
  return (
    <div
      className="circular-gallery"
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Circular image gallery. Use left and right arrow keys to navigate."
    />
  );
}
