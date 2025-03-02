
"use client";
import React from "react";
import "./CustomSelect.css";
import { OptionSelect } from "./typesSelect";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const statusOptions: Array<OptionSelect> = [
    { id: "1", value: "", label: "Все статусы" },
    { id: "2", value: "CREATED", label: "Создан" },
    { id: "3", value: "ACCEPTED", label: "Принят" },
    { id: "4", value: "CANCELLED", label: "Отменено" },
    { id: "5", value: "ON_THE_WAY", label: "В пути" },
    { id: "6", value: "DELIVERED", label: "Доставлено" },
];

export default function CustomSelect() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия списка
    const [selectedOption, setSelectedOption] = useState<OptionSelect>(
        statusOptions[0],
    ); // Выбранный элемент
    const selectRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleFilterChange = (status: OptionSelect) => {
        router.push(`?status=${status.value}`);
        setSelectedOption(status);
        setIsOpen(false);

    };
    return (
        <div className="select-block" ref={selectRef}>
            <div
                className="selected-option"
                onClick={() => setIsOpen(!isOpen)}
                data-testid="select-toggle"
            >
                <span className="output">{selectedOption.label}</span>
                <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
            </div>
            {isOpen && (
                <ul className="options" role="listbox">
                    {statusOptions.map((option) => (
                        <li
                            key={option.id}
                            role="option"
                            data-id={option.id}
                            className={`option ${
                                option.value === selectedOption.value
                                    ? "active"
                                    : ""
                            }`}
                            onClick={(e) => handleFilterChange(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}