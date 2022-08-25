export interface HeaderButtonType {
  text:        string
  handleClick: () => void
  isIcon?:     boolean
}

interface SkillType {
  skillName: string
  desc:      string
  year:      number
}
export interface SkillTypes {
  frontend: SkillType[]
  backend:  SkillType[]
}

export interface ProjectType {
  title: string
  desc:  string
  url:   NodeRequire
}

export interface SendEmailForm {
  from:    string;
  subject: string;
  text:    string;
}