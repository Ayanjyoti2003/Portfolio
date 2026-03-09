interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="skill-badge">
      {skill}
    </div>
  );
}
