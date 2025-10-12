import React from "react";

interface MoreButtonProps {
    text: string;
    link: string;
}

export default function MoreButton({ text, link }: MoreButtonProps) {
    return (
        <div className="pt-4">
            <a
                href={link}
                className="inline-block px-8 py-3 rounded-full text-white uppercase 
                                            bg-[#ce9c5d] transition-all duration-200 
                                            hover:bg-[#222] hover:scale-[1.02]
                                            font-[700] tracking-[0.05em] text-[12px]"
                style={{
                    fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                }}
            >
                {text}
            </a>
        </div>
    );
}