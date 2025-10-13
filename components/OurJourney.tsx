import React from 'react';
import Image from 'next/image';
import { formatBold, formatText } from './lib/textFormatting';


interface OurJourneyProps {
    title?: string;
    imageSrc?: string;
    imageAlt?: string;
    imageSrc2?: string;
    imageAlt2?: string;
    className?: string;
}

export const OurJourney: React.FC<OurJourneyProps> = ({
    title = "NOSSA **JORNADA** PELA\\n**EXCELÊNCIA OPERACIONAL**",
    imageSrc = "/sections/runners-quem-somos.png",
    imageAlt = "Nossa Jornada pela Excelência Operacional",
    imageSrc2 = "/sections/graphic-quem-somos.png",
    imageAlt2 = "Gráfico Excelência Operacional",
    
    className = ''
}) => {
    return (
        <section className={`py-0 ${className}`}>
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-0">
                    <h4
                        className="uppercase mb-4"
                        style={{
                            fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                            fontSize: 'clamp(28px, 5vw, 36px)',
                            fontWeight: 500,
                            letterSpacing: '0em',
                            color: 'rgb(36, 36, 36)',
                            textAlign: 'center',
                        }}
                    >
                        {formatText(title)}
                    </h4>

                    {/* Divider Line */}
                    <div className="flex justify-center">
                        <div
                            className="hidden md:block"
                            style={{
                                backgroundColor: '#ce9c5d',
                                width: '40%',
                                height: '3px',
                            }}
                        />
                    </div>
                </div>

                {/* Runners Image */}
                <div className="runners mt-8 md:mt-12 relative w-full">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1900}
                        height={250}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                {/* Timeline Image */}
                <div className="timeline mt-8 md:mt-12 relative w-full">
                    <Image
                        src={imageSrc2}
                        alt={imageAlt2}
                        width={1427}
                        height={441}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default OurJourney;