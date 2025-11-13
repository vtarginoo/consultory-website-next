import { TeamMember } from "@/types/ITeamMember";

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
      className="relative aspect-[4/6] rounded-xl overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Image - cobre toda a área */}
      <div className="absolute inset-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
      </div>
      
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          hoveredIndex === index ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Spacer invisível - empurra o card para baixo */}
      <div className="absolute inset-0 flex flex-col justify-end pb-3 px-3">
        
        {/* Info Card - Altura FIXA para todos */}
        <div 
          className="bg-[#1b1d1f] rounded-[10px] p-4 relative overflow-hidden"
          style={{ 
            height: hoveredIndex === index ? '180px' : '95px',
            transition: 'height 0.3s ease'
          }}
        >
          {/* Nome e Role (sempre visível ou fade out) */}
          <div 
            className={`transition-opacity duration-300 ${
              hoveredIndex === index ? 'opacity-0 pointer-events-none' : 'opacity-100'
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

          {/* Resume (fade in no hover) */}
          {member.resume && (
            <div 
              className={`absolute inset-0 p-4 transition-opacity duration-300 flex items-center ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p 
                className="text-white/90"
                style={{
                  fontFamily: '"DM Sans", "DM Sans Placeholder", sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.5',
                }}
              >
                {member.resume}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}