import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/data/showcase";

describe("product explorer", () => {
  it("covers the camera, smart bracelet and system architecture", () => {
    expect(PRODUCTS.map((p) => p.id)).toEqual(["camera", "bracelet", "architecture"]);
  });

  it("gives every image multiple hotspots placed inside the image", () => {
    for (const product of PRODUCTS) {
      for (const view of product.views) {
        expect(view.hotspots.length).toBeGreaterThan(1);
        for (const h of view.hotspots) {
          expect(h.x).toBeGreaterThan(0);
          expect(h.x).toBeLessThan(view.width);
          expect(h.y).toBeGreaterThan(0);
          expect(h.y).toBeLessThan(view.height);
          expect(h.name && h.what && h.role).toBeTruthy();
        }
        const ids = view.hotspots.map((h) => h.id);
        expect(new Set(ids).size).toBe(ids.length);
      }
    }
  });
});
