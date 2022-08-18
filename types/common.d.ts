export interface HeaderButtonType {
  text: string;
  handleClick: () => void;
  isIcon?: boolean
}

// skills area
interface SkillType {
  [skillName: string]: {
    year: number;
    desc: string
  }
}
export interface SkillTypes {
  frontend: SkillType;
  backend: SkillType;
}

// projects area
interface ProjectType {
  title: string;
  url: NodeRequire;
  desc: string;
}

// contact area