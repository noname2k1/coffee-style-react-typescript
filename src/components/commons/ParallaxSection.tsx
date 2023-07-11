interface Props {
    bgImage: string;
}

const PrallaxSection = (props: Props) => {
    return (
        <div
            style={{
                height: '340px',
                marginBottom: '100px',
                backgroundImage: `url(${props.bgImage})`,
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
        ></div>
    );
};

export default PrallaxSection;
