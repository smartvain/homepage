export interface HeaderButtonType {
  text:        string
  handleClick: () => void
  isIcon?:     boolean
}

// skills area
interface SkillType {
  skillName: string
  desc:      string
  year:      number
}
export interface SkillTypes {
  frontend: SkillType[]
  backend:  SkillType[]
}

// projects area
interface ProjectType {
  title: string
  desc:  string
  url:   NodeRequire
}

// contact area