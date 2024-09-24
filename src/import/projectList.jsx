// Image imports
import shoppingListScreenshot from '../images/shopping-list-screenshot.png'

// Links to Deployed Site or Github Project
const shoppingListLink = 'https://monterojavier.github.io/simple-shopping-list/'

// Project List
const projectList = [
  {
    id: 1,
    link: shoppingListLink,
    alt: 'Shopping List',
    src: shoppingListScreenshot,
    title: 'Shopping List',
    category: 'Web Development',
    dataCategory: 'web development',
    status: 'deployed'
  },
  {
    id: 2,
    link: shoppingListLink,
    alt: 'Shopping List',
    src: 'null',
    title: 'Shopping List',
    category: 'Web Development',
    dataCategory: 'web development',
    status: 'coming soon'
  }
]

export default projectList

/* dataCategory & category ex:
    - web development
    - mobile

    Sample element:

    {
      id: 1,
      link: 'https://github.com/',
      alt: 'Alt name',
      src: projectPlaceholderImage,
      title: 'title name',
      category: 'Web Development',
      dataCategory: 'web development',
      status: "coming soon" or "deployed" or "in progress"
    }
*/
