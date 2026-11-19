import { useState } from "react";
import { PRODUCTS } from "@/data/showcase";
import { HotspotStage } from "./HotspotStage";

export function ProductExplorer() {
  const [productId, setProductId] = useState(PRODUCTS[0]?.id ?? "");
  const [viewIndex, setViewIndex] = useState(0);

  const product = PRODUCTS.find((p) => p.id === productId) ?? PRODUCTS[0];
  if (!product) return null;
  const view = product.views[viewIndex] ?? product.views[0];
  if (!view) return null;

  return (
    <section id="explore" className="explore">
      <div className="wrap">
        <div className="explore-head">
          <div>
            <h2>Explore the hardware</h2>
            <p className="lead">
              See how each physical part of E-Guard contributes to monitoring an elderly loved one's safety and health.
            </p>
          </div>
          <span className="hint">
            <span className="hint-dot" aria-hidden="true" />
            Explore the components
          </span>
        </div>

        <div className="ex-tabs" role="tablist" aria-label="Choose a product">
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={p.id === product.id}
              aria-controls={`tabpanel-${p.id}`}
              className="ex-tab"
              onClick={() => {
                setProductId(p.id);
                setViewIndex(0);
              }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={p.icon} />
              </svg>
              {p.tab}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={`tabpanel-${product.id}`} aria-labelledby={`tab-${product.id}`}>
          <div className="ex-intro">
            <div>
              <h3>{product.title}</h3>
              <p>{product.summary} Select a numbered marker to learn what it does.</p>
            </div>
            {product.views.length > 1 && (
              <div className="ex-views" aria-label="Choose a view">
                {product.views.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    className="ex-view"
                    aria-pressed={i === viewIndex}
                    onClick={() => setViewIndex(i)}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <HotspotStage key={`${product.id}-${view.id}`} view={view} baseId={`${product.id}-${view.id}`} />
        </div>
      </div>
    </section>
  );
}
