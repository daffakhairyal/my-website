'use client';
import { useEffect } from 'react';
import "../app/globals.css";

export default function RotatingText() {
    useEffect(() => {
        const text = document.querySelector(".text p") as HTMLElement;
        if (!text) return;

        const chars: string[] = text.innerText.split('');
        const totalChars: number = chars.length;
        const angle: number = 360 / totalChars;
        const radius: number = 10;

        text.innerHTML = chars.map(
            (char: string, i: number) =>
                `<span style="transform:rotate(${i * angle}deg) translateY(-${radius}px)">${char}</span>`
        ).join('');
    }, []);

    return (
        <div className="circle">
            <div className="text">
                <p>-MY SERVICE-MY SERVICE-MY SERVICE</p>
            </div>
        </div>
    );
}
