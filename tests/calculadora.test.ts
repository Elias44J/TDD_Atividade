
import { describe, expect, it } from "vitest";
import {
  somar,
  subtrair,
  multiplicar,
  dividir,
} from "../src/calculadora";

describe("Calculadora de operações", () => {
  it("deve somar 3 e 5, retornando 8", () => {
    expect(somar(3, 5)).toBe(8);
  });

  it("deve subtrair 4 de 10, retornando 6", () => {
    expect(subtrair(10, 4)).toBe(6);
  });

  it("deve multiplicar 4 por 3, retornando 12", () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  it("deve dividir 10 por 2, retornando 5", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  it("deve gerar erro ao dividir por zero", () => {
    expect(() => dividir(10, 0)).toThrow("Divisão por zero");
  });
});
