import React, { useEffect, useRef } from 'react';

export const FluidBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle class simulating digital water / neural flow
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
      baseY: number;
    }

    const particles: Particle[] = [];
    const numParticles = Math.min(Math.floor(width / 15), 70);

    const colors = ['#00D889', '#5EF2B0', '#063D2C', '#0B6B47', '#1ABC7B'];

    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background ambient glow halos
      const glowGrad = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time * 0.5) * 100,
        height * 0.3 + Math.cos(time * 0.3) * 80,
        50,
        width * 0.5,
        height * 0.3,
        width * 0.7
      );
      glowGrad.addColorStop(0, 'rgba(6, 61, 44, 0.25)');
      glowGrad.addColorStop(0.5, 'rgba(4, 26, 19, 0.15)');
      glowGrad.addColorStop(1, 'rgba(2, 11, 8, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw fluid digital wave curves in green-cyan
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      for (let x = 0; x <= width; x += 15) {
        const wave1 = Math.sin(x * 0.003 + time) * 40;
        const wave2 = Math.cos(x * 0.002 - time * 0.8) * 30;
        const y = height * 0.4 + wave1 + wave2;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const waveGrad = ctx.createLinearGradient(0, 0, width, 0);
      waveGrad.addColorStop(0, 'rgba(0, 216, 137, 0)');
      waveGrad.addColorStop(0.5, 'rgba(0, 216, 137, 0.18)');
      waveGrad.addColorStop(1, 'rgba(94, 242, 176, 0)');
      ctx.strokeStyle = waveGrad;
      ctx.stroke();

      // Second wave curve (lower, darker)
      ctx.beginPath();
      ctx.lineWidth = 1;
      for (let x = 0; x <= width; x += 20) {
        const wave = Math.sin(x * 0.004 - time * 0.6) * 60;
        const y = height * 0.75 + wave;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(11, 107, 71, 0.12)';
      ctx.stroke();

      // Connect nearby particles with subtle neural network lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 216, 137, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        // Slight interaction with mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= (dx / dist) * 0.5;
          p.y -= (dy / dist) * 0.5;
        }

        p.x += p.vx + Math.sin(time + p.y * 0.01) * 0.2;
        p.y += p.vy + Math.cos(time + p.x * 0.01) * 0.2;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00D889';
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
