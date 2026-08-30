import React from 'react';

/**
 * Composição abstrata do Hero.
 * Camadas translúcidas, formas orgânicas e linhas delicadas conectando
 * diferentes áreas do conhecimento — design editorial em movimento,
 * sem dashboards, HUD, circuitos ou partículas neon.
 */
export const HeroComposition: React.FC = () => {
  const nodes = [
    { label: 'Saúde', x: 50, y: 18 },
    { label: 'Direito', x: 84, y: 40 },
    { label: 'Engenharias', x: 74, y: 79 },
    { label: 'Educação', x: 27, y: 82 },
    { label: 'Negócios', x: 14, y: 44 }
  ];

  /** Início do traço no anel interno (r = 29), evitando cruzar o núcleo tipográfico. */
  const edgeStart = (x: number, y: number) => {
    const dx = x - 50;
    const dy = y - 50;
    const len = Math.hypot(dx, dy) || 1;
    return { x: 50 + (dx / len) * 29, y: 50 + (dy / len) * 29 };
  };

  return (
    <div
      className="relative w-full aspect-square max-w-[560px] mx-auto select-none"
      aria-hidden="true"
    >
      {/* Camadas orgânicas translúcidas */}
      <div className="absolute inset-[6%] rounded-[42%_58%_54%_46%/48%_42%_58%_52%] bg-[#103B32]/[0.07] animate-drift" />
      <div className="absolute inset-[16%] rounded-[56%_44%_40%_60%/52%_58%_42%_48%] bg-[#35C985]/[0.10] animate-drift-delayed" />
      <div className="absolute inset-[30%] rounded-full bg-white/70 backdrop-blur-[2px] border border-[#DDE3DF]" />

      {/* Linhas e nós de conexão */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
        <g stroke="#103B32" strokeOpacity="0.22" strokeWidth="0.35" fill="none">
          {nodes.map((n) => {
            const start = edgeStart(n.x, n.y);
            return <line key={n.label} x1={start.x} y1={start.y} x2={n.x} y2={n.y} />;
          })}
        </g>

        <circle cx="50" cy="50" r="27" fill="none" stroke="#103B32" strokeOpacity="0.14" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="#103B32" strokeOpacity="0.09" strokeWidth="0.3" strokeDasharray="1.4 2.6" />

        {nodes.map((n) => (
          <circle key={n.label} cx={n.x} cy={n.y} r="1.5" fill="#103B32" fillOpacity="0.55" />
        ))}
      </svg>

      {/* Rótulos das áreas — evidência da proposta multidisciplinar */}
      {nodes.map((n) => (
        <span
          key={n.label}
          className="absolute -translate-x-1/2 text-[11px] font-medium tracking-wide text-[#65726C] whitespace-nowrap"
          style={{ left: `${n.x}%`, top: `calc(${n.y}% + 12px)` }}
        >
          {n.label}
        </span>
      ))}

      {/* Núcleo tipográfico */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
        <span className="t-eyebrow mb-2">Núcleo comum</span>
        <span className="font-display text-[1.35rem] sm:text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] text-[#103B32]">
          Inteligência<br />Artificial
        </span>
        <span className="mt-3 rule-accent" />
        <span className="mt-3 t-micro">360 horas · 6 módulos</span>
      </div>
    </div>
  );
};
