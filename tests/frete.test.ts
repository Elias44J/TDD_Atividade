import { describe, expect, it } from "vitest";
import { calcularFrete } from "../src/frete"

describe("Sistema de cálculo de frete", () => {
  it("deve cobrar R$ 20 para compras abaixo de R$ 100", () => {
    expect(calcularFrete(50)).toBe(20);
  });
  it("deve cobrar R$ 20 para compras de R$99,99", () => {
    expect(calcularFrete(99.99)).toBe(20);
  });
  it("deve cobrar R$ 10 para compras de R$100", () => {
    expect(calcularFrete(100)).toBe(10);
  });
  it("deve cobrar R$ 10 para compras de R$199,99", () => {
    expect(calcularFrete(199,99)).toBe(10);
  });
  it("deve oferecer frete grátis para compras a partir de R$ 200", () => {
    expect(calcularFrete(200)).toBe(0);
  });

});
