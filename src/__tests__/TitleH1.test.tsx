
import React from "react";
import { render, screen } from "@testing-library/react";
import TitleH1 from "../components/TitleH1/TitleH1";
import { TitleProps } from "../components/TitleH1/typeTitle";

describe("TitleH1 Component", () => {
    const testProps: TitleProps = {
        title: "Test Heading",
    };

    // Тест 1: Базовый рендеринг
    it('renders correctly with provided title', () => {
        render(<TitleH1 {...testProps} />);

        const headingElement = screen.getByTestId('title-h1');
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent(testProps.title);
        expect(headingElement).toHaveClass('title__h1');
    });

    // Тест 2: Проверка HTML-тега
    it('renders correct h1 tag', () => {
        const { container } = render(<TitleH1 {...testProps} />);

        const h1Element = container.querySelector('h1.title__h1');
        expect(h1Element).not.toBeNull();
        expect(h1Element?.tagName).toBe('H1');
    });

    // Тест 3: Проверка содержимого
    it('displays dynamic content correctly', () => {
        const customTitle = 'Custom Header Text';
        render(<TitleH1 title={customTitle} />);

        expect(screen.getByText(customTitle)).toBeInTheDocument();
    });

    // Тест 4: Обработка пустого значения
    it('handles empty title gracefully', () => {
        render(<TitleH1 title="" />);

        const headingElement = screen.getByTestId('title-h1');
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('');
    });

    // Тест 5: Проверка структуры через snapshot
    it('matches snapshot', () => {
        const { asFragment } = render(<TitleH1 {...testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    // Тест 6: Проверка отсутствия лишних элементов
    it('does not render unexpected elements', () => {
        const { container } = render(<TitleH1 {...testProps} />);

        expect(container.querySelector('div')).toBeNull();
        expect(container.querySelector('h2')).toBeNull();
        expect(container.querySelector('span')).toBeNull();
    });
});