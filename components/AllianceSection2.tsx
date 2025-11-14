import React from 'react';
import Image from 'next/image';

export default function AllianceSection() {
    return (
        <section className="w-full py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Conteúdo de Texto - Esquerda */}
                    <div className="space-y-6">
                        {/* Título */}
                        <h5
                            className="text-center lg:text-left"
                            style={{
                                fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                                fontSize: '28px',
                                lineHeight: '1.2em',
                                color: 'rgb(27, 29, 31)',
                                fontWeight: 400
                            }}
                        >
                            <span>NOSSA </span>
                            <strong style={{ fontWeight: 700 }}>ALIANÇA </strong>
                            <span>COM</span>
                            <br />
                            <span>A </span>
                            <strong style={{ fontWeight: 700 }}>GRANT THORNTON</strong>
                        </h5>

                        {/* Linha Divisória */}
                        <div className="w-16 h-1 bg-[#CE9C5D] mx-auto lg:mx-0"></div>

                        {/* Descrições */}
                        <div className="space-y-4">
                            <p style={{
                                fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                fontSize: '18px',
                                lineHeight: '1.6em',
                                color: 'rgb(27, 29, 31)'
                            }}>
                                A aliança entre a <strong>Grant Thornton Brasil</strong> e a <strong>ARCO Consulting Partners</strong> potencializa o compromisso de cada uma com a excelência na entrega de resultados.
                            </p>

                            <p style={{
                                fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                fontSize: '18px',
                                lineHeight: '1.6em',
                                color: 'rgb(27, 29, 31)'
                            }}>
                                <strong>Grant Thornton:</strong> Uma empresa global que entrega soluções completas e integradas de auditoria, consultoria, impostos, ESG, tecnologia e transações.
                            </p>

                            <p style={{
                                fontFamily: '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                fontSize: '18px',
                                lineHeight: '1.6em',
                                color: 'rgb(27, 29, 31)'
                            }}>
                                <strong>Arco:</strong> Otimiza a cadeia de valor dos negócios – desde o Diagnóstico e a Inteligência, até a implementação e captura de resultados – entregando excelência operacional, produtividade, geração de caixa e redução de custos.
                            </p>
                        </div>
                    </div>

                    {/* Imagem - Direita */}
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/sections/alliance-section.jpg"
                            alt="Grant Thornton e ARCO Alliance"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}