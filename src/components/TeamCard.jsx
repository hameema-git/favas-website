import './TeamCard.css'

export default function TeamCard({ member, delay = 0 }) {
  return (
    <div className={`team-card reveal delay-${delay}`}>
      <div className="team-photo-wrap">
        <div className="team-photo">
          {member.photo ? (
            <img src={member.photo} alt={member.name} />
          ) : (
            <div
              className="team-avatar-placeholder"
              style={{ background: `linear-gradient(135deg, ${member.avatarColor}, ${member.avatarColor}bb)` }}
            >
              <span>{member.initials}</span>
            </div>
          )}
        </div>
      </div>
      <div className="team-body">
        <div className="team-name">{member.name}</div>
        <div className="team-role">{member.role}</div>
        <div className="team-divider" />
        <p className="team-desc">{member.description}</p>
        {!member.photo && (
          <div className="team-note">📸 Replace with original photo</div>
        )}
      </div>
    </div>
  )
}
