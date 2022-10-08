import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter Tests", () => {
    let arttırBtn, azaltBtn, count;

    beforeEach(() => {
        console.log("Her testen önce çalışacağım!");

        render(<Counter />);
        count = screen.getByText("0");
        arttırBtn = screen.getByText("Arttır");
        azaltBtn = screen.getByText("Azalt");
    });

    beforeAll(() => {
        console.log("İlk başta bir kere çalışacağım!");
    });

    afterAll(() => {
        console.log("En son bir kere çalışacağım!");
    });

    afterEach(() => {
        console.log("Her testen sonra çalışacağım!");
    })

    test("arttır btn", () => {
        userEvent.click(arttırBtn);
        expect(count).toHaveTextContent("1");
    });

    test("azalt btn", () => {
        userEvent.click(azaltBtn);
        expect(count).toHaveTextContent("-1");
    });
});

