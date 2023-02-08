import { BsBook, BsBookHalf } from 'react-icons/bs'
import { ImProfile } from 'react-icons/im'

const links = [
  { id: 1, text: 'all works', path: '/', icon: <BsBook /> },
  { id: 2, text: 'user works', path: 'user-works', icon: <BsBook /> },
  { id: 3, text: 'add work', path: 'add-work', icon: <BsBookHalf /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> }
]

export default links