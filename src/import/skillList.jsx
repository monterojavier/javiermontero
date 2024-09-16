// Image imports
import { IoLogoReact, IoLogoVue, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoAngular } from 'react-icons/io5'
import { FaJava } from 'react-icons/fa6'
import { BiLogoTypescript, BiLogoRedux, BiLogoPostgresql } from 'react-icons/bi'
import { SiExpress, SiDart, SiSequelize, SiPrisma, SiSwift, SiRuby } from 'react-icons/si'

// Skill List
const skillList = [
  {
    id: 1,
    skillName: 'React',
    icon: <IoLogoReact />,
    link: 'https://react.dev/'
  },
  {
    id: 2,
    skillName: 'Vue',
    icon: <IoLogoVue />,
    link: ''
  },
  {
    id: 3,
    skillName: 'HTML',
    icon: <IoLogoHtml5 />,
    link: ''
  },
  {
    id: 4,
    skillName: 'CSS',
    icon: <IoLogoCss3 />,
    link: ''
  },
  {
    id: 5,
    skillName: 'Javascript',
    icon: <IoLogoJavascript />,
    link: ''
  },
  {
    id: 6,
    skillName: 'Angular',
    icon: <IoLogoAngular />,
    link: ''
  },
  {
    id: 7,
    skillName: 'Java',
    icon: <FaJava />,
    link: ''
  },
  {
    id: 8,
    skillName: 'Typescript',
    icon: <BiLogoTypescript />,
    link: ''
  },
  {
    id: 9,
    skillName: 'Redux',
    icon: <BiLogoRedux />,
    link: ''
  },
  {
    id: 10,
    skillName: 'ProgresSql',
    icon: <BiLogoPostgresql />,
    link: ''
  },
  {
    id: 11,
    skillName: 'Ruby',
    icon: <SiRuby />,
    link: ''
  },
  {
    id: 12,
    skillName: 'Express',
    icon: <SiExpress />,
    link: ''
  },
  {
    id: 13,
    skillName: 'Dart',
    icon: <SiDart />,
    link: ''
  },
  {
    id: 14,
    skillName: 'Sequelize',
    icon: <SiSequelize />,
    link: ''
  },
  {
    id: 15,
    skillName: 'Primsa',
    icon: <SiPrisma />,
    link: ''
  },
  {
    id: 16,
    skillName: 'Siwft',
    icon: <SiSwift />,
    link: ''
  }
]

export default skillList

/* dataCategory & category ex:
    - web development
    - mobile

    Sample element:

    {
      id: 1,
      skillName: 'React',
      icon: 'image',
      link: 'link to Doc'
    }
*/
