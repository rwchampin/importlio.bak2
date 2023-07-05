import Image from 'next/image'
const Logo = ({ className = '', ...props }) => (
  <Image
    src={props.src || '/logo.png'}
    alt="Importlio - Ecommerce Product Importer & Management App"
    className={`logo ${className}`}
    width={props.width || 100}
    height={props.width && props.height ? props.height : 80}
    // {...props}
  />
)
export default Logo