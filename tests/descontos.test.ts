import { describe,expect,it } from "vitest";
import {calculadoraDesconto } from "../src/descontos"

describe("Sistema de descontos", () => {
    it("não deve aplicar desconto em compras abaixo de R$ 100", () => {
        expect(calculadoraDesconto(50).toBe(50))
    });
    it("deve aplicar 10% de desconto em compras a partir de R$ 100", () => {
        expect(calculadoraDesconto(100).toBe(90))
    });
    it("deve aplicar 10% de desconto em compras de R$ 150", () => {
        expect(calculadoraDesconto(150).toBe(135))
    });
    it("deve aplicar 20% de desconto em compras a partir de R$ 200", () => {
        expect(calculadoraDesconto(200).toBe(160))
    });
    it("deve aplicar 20% de desconto em compras a partir de R$ 250", () => {
        expect(calculadoraDesconto(250).toBe(200))
    });
    it("deve arredondar o resultado para duas casas decimais", () => {
        expect(calculadoraDesconto(123.45).toBe(111.11))
    });
})