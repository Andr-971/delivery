import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import { useRouter } from "next/navigation";

// Мокаем next/navigation
jest.mock("next/navigation");

describe("CustomSelect Component", () => {
    const mockPush = jest.fn();

    beforeEach(() => {
        // Мокаем useRouter
        (useRouter as jest.Mock).mockImplementation(() => ({
            push: mockPush,
        }));
        mockPush.mockClear();
    });

    // Тест 1: Рендеринг компонента
    it("renders default state correctly", () => {
        render(<CustomSelect />);

        // Проверяем, что дефолтная опция отображается
        expect(screen.getByText("Все статусы")).toBeInTheDocument();
        // Проверяем, что список опций скрыт
        expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });

    // Тест 2: Открытие и закрытие выпадающего списка
    it("opens and closes dropdown on click", async () => {
        const user = userEvent.setup();
        render(<CustomSelect />);

        // Находим элемент по data-testid
        const toggleButton = screen.getByTestId("select-toggle");

        // Открываем список
        await user.click(toggleButton);
        expect(screen.getByRole("listbox")).toBeInTheDocument();

        // Закрываем список
        await user.click(toggleButton);
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    // Тест 3: Выбор опции
    it("selects option and updates URL", async () => {
        const user = userEvent.setup();
        render(<CustomSelect />);

        // Открываем список
        await user.click(screen.getByText("Все статусы"));

        // Выбираем опцию "Создан"
        await user.click(screen.getByText("Создан"));

        // Проверяем, что выбранная опция отображается
        expect(screen.getByText("Создан")).toBeInTheDocument();
        // Проверяем, что роутер был вызван с правильным аргументом
        expect(mockPush).toHaveBeenCalledWith("?status=CREATED");
    });

    // Тест 4: Закрытие списка при клике вне компонента
    it("closes dropdown on outside click", async () => {
        const user = userEvent.setup();
        render(
            <div>
                <CustomSelect />
                <div data-testid="outside">Outside Element</div>
            </div>,
        );

        // Открываем список
        await user.click(screen.getByText("Все статусы"));

        // Кликаем вне компонента
        await user.click(screen.getByTestId("outside"));

        // Проверяем, что список закрыт
        expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });

    // Тест 5: Подсветка активной опции
    it("highlights selected option", async () => {
        const { container } = render(<CustomSelect />);

        // Открываем список
        await userEvent.click(screen.getByText("Все статусы"));

        // Проверяем, что дефолтная опция активна
        const defaultOption = container.querySelector(".option.active");
        expect(defaultOption).toHaveTextContent("Все статусы");

        // Выбираем новую опцию
        await userEvent.click(screen.getByText("Создан"));

        // Открываем список снова
        await userEvent.click(screen.getByText("Создан"));

        // Проверяем, что новая опция активна
        const newOption = container.querySelector(".option.active");
        expect(newOption).toHaveTextContent("Создан");
    });
});
