
const Hero = ({ pretitle, title, subtitle, cta }) => {
    return (
        <div className="hero">
            <div className="hero__content">
                <div className="hero-pretitle">{pretitle}</div>
                <h1 className="hero-title">{title}</h1>
                <div className="hero-subtitle">{subtitle}</div>
                <div className="hero-cta">{cta}</div>
            </div>
        </div>
    );
}