const Button = ({ text, path, externalUrl, theme }) => {
    // TailwindCSS classes.
    const btnTheme = {
        Blue: 'ctaBtn border border-primary-blue shadow-button shadow-primary-blue bg-primary-blue text-white text-normal-text font-semibold',
        Transparent: 'ctaBtn border border-primary-blue bg-transparent text-primary-blue text-normal-text font-semibold',
        Dark_Blue: 'ctaBtn border border-secondary-blue shadow-button shadow-secondary-blue bg-secondary-blue text-white text-normal-text font-semibold',
        Green: 'ctaBtn border border-primary-green shadow-button shadow-primary-green bg-primary-green text-white text-normal-text font-semibold',
        Yellow: 'ctaBtn border border-primary-yellow shadow-button shadow-primary-yellow bg-primary-yellow text-white text-normal-text font-semibold',
    };

    return (
        <button className={btnTheme[theme]}>
            <a href={externalUrl ? externalUrl : `#${path}`}>{text}</a>
        </button>
    );
};

export default Button;
