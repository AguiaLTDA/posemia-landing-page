import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles, Cpu } from 'lucide-react';

export const AiEngineWidget: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = 240);

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = 240;
    };
    window.addEventListener('resize', handleResize);

    // Nodes structure matching the dynamic neural engine in Anexo 4
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
    }

    const initialNodePositions = [
      { x: 0.15, y: 0.28 },
      { x: 0.52, y: 0.20 },
      { x: 0.82, y: 0.38 },
      { x: 0.42, y: 0.58 },
      { x: 0.76, y: 0.72 }
    ];

    const colors = ['#00F296', '#00E5FF', '#6FFBC9', '#00D889'];

    const nodes: Node[] = initialNodePositions.map((pos, idx) => ({
      x: pos.x * width,
      y: pos.y * height,
      baseX: pos.x * width,
      baseY: pos.y * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: idx === 3 || idx === 4 ? 8 : 6,
      color: colors[idx % colors.length],
      pulse: Math.random() * Math.PI * 2
    }));

    let mouseX = -1000;
    let mouseY = -1000;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      isHovered = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Recalculate base positions on width changes
      nodes.forEach((node, idx) => {
        node.baseX = initialNodePositions[idx].x * width;
        node.baseY = initialNodePositions[idx].y * height;
      });

      // Update positions with mouse attraction / repulsion physics
      nodes.forEach((node) => {
        node.pulse += 0.05;

        // Return force to base position
        const dxBase = node.baseX - node.x;
        const dyBase = node.baseY - node.y;
        node.x += dxBase * 0.05;
        node.y += dyBase * 0.05;

        // Mouse reactive force
        if (isHovered) {
          const dxMouse = mouseX - node.x;
          const dyMouse = mouseY - node.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < 130) {
            const force = (130 - distMouse) / 130;
            node.x += (dxMouse / distMouse) * force * 4;
            node.y += (dyMouse / distMouse) * force * 4;
          }
        }
      });

      // Draw connecting lines between nodes
      ctx.lineWidth = 1.2;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 260) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            const opacity = Math.min(1, Math.max(0.15, (1 - dist / 260) * 0.8));
            ctx.strokeStyle = `rgba(0, 242, 150, ${opacity})`;
            ctx.setLineDash(i === 0 && j === 1 ? [4, 4] : []);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // Draw glowing nodes and halos
      nodes.forEach((node) => {
        const currentRadius = node.radius + Math.sin(node.pulse) * 1.5;

        // Outer glow halo
        const glowGrad = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          currentRadius * 4
        );
        glowGrad.addColorStop(0, `${node.color}99`);
        glowGrad.addColorStop(0.5, `${node.color}33`);
        glowGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Inner solid core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card rounded-3xl p-6 sm:p-8 border border-[#00F296]/30 bg-gradient-to-b from-[#05140F]/90 to-black relative overflow-hidden shadow-[0_0_50px_rgba(0,242,150,0.15)] group hover:border-[#00F296]/60 transition-all duration-300"
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <span className="font-display font-black text-8xl sm:text-9xl text-white uppercase tracking-tighter">
          UNIVC
        </span>
      </div>

      {/* Card Header Line */}
      <div className="flex items-center justify-between border-b border-[#0A382A] pb-4 mb-4 font-mono text-xs">
        <span className="text-[#00F296] font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00F296] animate-ping" />
          ./AI_ENGINE_V2.6
        </span>
        <span className="text-[#94A3B8] tracking-widest uppercase flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-[#00E5FF]" />
          STATUS: <strong className="text-[#00F296]">ATIVO</strong>
        </span>
      </div>

      {/* Main Monospace Quote */}
      <div className="relative z-10 my-2">
        <p className="font-mono text-xs sm:text-sm text-[#E2E8F0] leading-relaxed italic bg-[#000000]/60 p-4 rounded-xl border border-[#0A382A]">
          "Transforme dados brutos, modelos de linguagem e automações visuais em impacto direto na sua carreira."
        </p>
      </div>

      {/* Interactive Reactive Node Canvas */}
      <div className="relative z-10 w-full h-[240px] my-2 cursor-crosshair">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#94A3B8] opacity-60 group-hover:opacity-100 transition-opacity">
          ✦ Passe o cursor para interagir
        </div>
      </div>

      {/* Bottom Metrics Bar matching Anexo 4 */}
      <div className="pt-4 border-t border-[#0A382A] flex items-center justify-between font-display relative z-10">
        <div>
          <span className="font-extrabold text-2xl sm:text-3xl text-white tracking-tight">360h</span>
          <span className="font-mono text-[10px] text-[#94A3B8] uppercase block tracking-wider mt-0.5">
            CARGA HORÁRIA
          </span>
        </div>
        <div className="text-right">
          <span className="font-extrabold text-2xl sm:text-3xl text-[#00F296] tracking-tight">6</span>
          <span className="font-mono text-[10px] text-[#94A3B8] uppercase block tracking-wider mt-0.5">
            MÓDULOS PRÁTICOS
          </span>
        </div>
      </div>
    </motion.div>
  );
};
