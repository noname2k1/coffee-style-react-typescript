interface Props {
    label: string;
    title: string;
    children: React.ReactNode;
}

const ContentWrapper = (props: Props) => {
    return (
        <div className='w-full flex justify-center items-center mx-[30px] lg:mx-0'>
            <div className='text-center mb-[100px] px-[30px]'>
                <div className='uppercase tracking-widest text-sm text-black/50'>
                    {props.label}
                </div>
                <h1 className='text-3xl my-5'>{props.title}</h1>
                <p className='lg:mx-[200px] text-black/50'>{props.children}</p>
            </div>
        </div>
    );
};

export default ContentWrapper;
