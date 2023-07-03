import Image from 'next/image'
const Logo = ({ className = '', ...props }) => (
  <Image
    src="/logo.png"
    alt="Importlio - Ecommerce Product Importer & Management App"
    className={`logo ${className}`}
    width={602}
    height={80}
    // {...props}
  />
)
export default Logo