// TailwindCSS classes.
const btnTheme = {
    Blue: 'border-primary-blue shadow-button shadow-primary-blue bg-primary-blue text-white',
    Transparent:'border-primary-blue bg-transparent text-primary-blue',
    Dark_Blue:'border-secondary-blue shadow-button shadow-secondary-blue bg-secondary-blue text-white',
    Green: 'border-secondary-green shadow-button shadow-secondary-green bg-secondary-green text-white',
    Yellow: 'border-primary-yellow shadow-button shadow-primary-yellow bg-primary-yellow text-white',
};

const Button = ({ text, path, externalUrl, theme }) => {
    return (
        <button className={'ctaBtn border text-normal-text font-semibold ' + btnTheme[theme]}>
            <a href={externalUrl ? externalUrl : `#${path}`}>{text}</a>
        </button>
    );
};

export default Button;
