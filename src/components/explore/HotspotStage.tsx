import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { Hotspot, ProductView } from "@/data/showcase";

type CardProps = {
  hotspot: Hotspot;
  index: number;
  total: number;
  domId: string;
  onClose: () => void;
  onStep: (delta: number) => void;
  className: string;
  style?: CSSProperties;
};

function HotspotCard({ hotspot, index, total, domId, onClose, onStep, className, style }: CardProps) {
  return (
    <div id={domId} className={`hs-card ${className}`} style={style} role="dialog" aria-label={hotspot.name}>
      <button type="button" className="hs-close" onClick={onClose} aria-label="Close details">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      <div className="hs-eyebrow">
        <span className="hs-num">{index + 1}</span>Component
      </div>
      <h4>{hotspot.name}</h4>
      <p>{hotspot.what}</p>
      <div className="hs-role">
        <b>Role in E-Guard</b>
        <p>{hotspot.role}</p>
      </div>
      <div className="hs-nav">
        <span>
          {index + 1} of {total}
        </span>
        <div className="hs-steps">
          <button type="button" className="hs-step" onClick={() => onStep(-1)} aria-label="Previous component">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
            Prev
          </button>
          <button type="button" className="hs-step" onClick={() => onStep(1)} aria-label="Next component">
            Next
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/** Popover sits beside the marker, on whichever side has more room. */
function popoverPosition(xPct: number, yPct: number): CSSProperties {
  const style: CSSProperties = {};
  if (xPct > 55) style.right = `calc(${100 - xPct}% + 26px)`;
  else style.left = `calc(${xPct}% + 26px)`;
  if (yPct > 55) style.bottom = `calc(${100 - yPct}% - 28px)`;
  else style.top = `max(12px, calc(${yPct}% - 28px))`;
  return style;
}

export function HotspotStage({ view, baseId }: { view: ProductView; baseId: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const spots = view.hotspots;
  const activeIndex = spots.findIndex((h) => h.id === activeId);
  const active = activeIndex >= 0 ? spots[activeIndex] : undefined;

  const step = useCallback(
    (delta: number) => {
      const from = activeIndex >= 0 ? activeIndex : 0;
      const next = spots[(from + delta + spots.length) % spots.length];
      if (next) setActiveId(next.id);
    },
    [activeIndex, spots],
  );

  // Escape closes, arrow keys move between components.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    const onPointer = (e: PointerEvent) => {
      if (stageRef.current && !stageRef.current.contains(e.target as Node)) setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [active, step]);

  // On small screens the image scrolls sideways: bring the selected marker into view.
  useEffect(() => {
    const el = scrollRef.current;
    if (!active || !el || el.scrollWidth <= el.clientWidth) return;
    const left = (active.x / view.width) * el.scrollWidth - el.clientWidth / 2;
    el.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [active, view.width]);

  const toggle = (id: string) => setActiveId((cur) => (cur === id ? null : id));
  const popId = `${baseId}-details`;
  const panelId = `${baseId}-panel`;

  return (
    <div className="stage" ref={stageRef}>
      <div className="frame-scroll" ref={scrollRef}>
        <div className={`frame${active ? " is-active" : ""}`}>
          <img
            src={view.src}
            alt={view.alt}
            width={view.width}
            height={view.height}
            decoding="async"
            onClick={() => setActiveId(null)}
          />
          {spots.map((h, i) => {
            const isActive = h.id === activeId;
            return (
              <button
                key={h.id}
                type="button"
                className="hs"
                style={{
                  left: `${(h.x / view.width) * 100}%`,
                  top: `${(h.y / view.height) * 100}%`,
                  animationDelay: `${i * 60}ms`,
                }}
                aria-label={`${i + 1}. ${h.name}`}
                aria-expanded={isActive}
                aria-controls={isActive ? popId : undefined}
                onClick={() => toggle(h.id)}
              >
                {i + 1}
              </button>
            );
          })}
          {active && (
            <HotspotCard
              key={active.id}
              hotspot={active}
              index={activeIndex}
              total={spots.length}
              domId={popId}
              className="hs-pop"
              style={popoverPosition((active.x / view.width) * 100, (active.y / view.height) * 100)}
              onClose={() => setActiveId(null)}
              onStep={step}
            />
          )}
        </div>
      </div>
      <p className="swipe-hint">Swipe the image sideways to see every component.</p>

      {active && (
        <HotspotCard
          key={`panel-${active.id}`}
          hotspot={active}
          index={activeIndex}
          total={spots.length}
          domId={panelId}
          className="hs-panel"
          onClose={() => setActiveId(null)}
          onStep={step}
        />
      )}

      <ol className="parts" aria-label="Components in this image">
        {spots.map((h, i) => (
          <li key={h.id}>
            <button type="button" className="part" aria-pressed={h.id === activeId} onClick={() => toggle(h.id)}>
              <span className="hs-num">{i + 1}</span>
              {h.name}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
