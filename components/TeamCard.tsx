import { TeamMember } from '@/types/ITeamMember';
import Image from 'next/image';


export function TeamCard({
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
      className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          hoveredIndex === index ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Info Card - Expande no hover */}
      <div 
        className={`absolute bottom-4 left-4 right-4 bg-[#1b1d1f] rounded-[10px] p-4 transition-all duration-300 ${
          hoveredIndex === index ? 'min-h-0' : 'min-h-[80px]'
        }`}
      >
        {/* Nome e Role (padrão) */}
        <div 
          className={`transition-opacity duration-300 ${
            hoveredIndex === index ? 'opacity-0 absolute' : 'opacity-100'
          }`}
        >
          <p 
            className="text-white font-medium"
            style={{
              fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
              fontSize: '16px',
              lineHeight: '1.4',
            }}
          >
            {member.name}
          </p>
          <p 
            className="text-white/70 mt-1"
            style={{
              fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
              fontSize: '13px',
              lineHeight: '1.4',
            }}
          >
            {member.role}
          </p>
        </div>

        {/* Resume (hover) */}
        {member.resume && (
          <div 
            className={`transition-opacity duration-300 ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          >
            <p 
              className="text-white/90"
              style={{
                fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
                fontSize: '11px',
                lineHeight: '1.5',
              }}
            >
              {member.resume}
            </p>
          </div>
        )}
      </div>
    </div>
  );}