import { CgSearch, CgSearchLoading, CgSearchFound} from 'react-icons/cg'

interface PropTypes {
    type?: 'loading' | 'found',
}

const Search = ({ type }: PropTypes) => {
  switch (type) {
    case 'loading':
      return <CgSearchLoading />
    case 'found':
      return <CgSearchFound />
    default:
      return <CgSearch />
  }
}

export default Search