// Image imports
import shoppingListScreenshot from '../images/projects-images/shopping-list-screenshot.png'
import translateInstantMessenger from '../images/projects-images/translate-instant-messenger.png'
import mySpotify from '../images/projects-images/my-spotify.png'

// Links to Deployed Site or Github Project
const shoppingListLink = 'https://monterojavier.github.io/simple-shopping-list/'
const translateInstantMessengerLink = 'https://github.com/monterojavier/im-server'
const mySpotifyLink = 'https://github.com/monterojavier/my-spotify'

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
    status: 'repo'
  },
  {
    id: 2,
    link: translateInstantMessengerLink,
    alt: 'Translate Instant Messenger',
    src: translateInstantMessenger,
    title: 'Translate Instant Messenger',
    category: 'Desktop Application',
    dataCategory: 'desktop',
    status: 'repo'
  },
  {
    id: 3,
    link: mySpotifyLink,
    alt: 'My Spotify Repo',
    src: mySpotify,
    title: 'My Spotify Top 5',
    category: 'Web Development',
    dataCategory: 'web development',
    status: 'repo'
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
      status: "coming soon" or "deployed" or "in progress" or "repo"
    }
*/
