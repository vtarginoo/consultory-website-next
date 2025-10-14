import { TeamMember } from '@/types/ITeamMember';
import Image from 'next/image';


export default function TeamCard({
  member,
  index,
  hoveredIndex,
  setHoveredIndex
}: {
  member: TeamMember;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) {
  return (
    <div
      className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Image */}
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          hoveredIndex === index ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Info Card - Sempre visível */}
      <div className="absolute bottom-4 left-4 right-4 bg-[#1b1d1f] rounded-[10px] p-4 h-[14%] min-h-[40px]">
        {/* Nome e Role (padrão) */}
        <div 
          className={`pt transition-opacity duration-300 ${
            hoveredIndex === index ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <p 
            className="text-white font-medium mt-1"
            style={{
              fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
              fontSize: '18px',
              lineHeight: '1.4',
            }}
          >
            {member.name}
          </p>
          <p 
            className="text-white/70"
            style={{
              fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
              fontSize: '14px',
              lineHeight: '1.4',
            }}
          >
            {member.role}
          </p>
        </div>

        {/* Resume (hover) */}
        {member.resume && (
          <div 
            className={`absolute inset-0 p-2 transition-opacity duration-300 ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p 
              className="text-white/90"
              style={{
                fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
                fontSize: '12px',
                lineHeight: '1.6',
              }}
            >
              {member.resume}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}