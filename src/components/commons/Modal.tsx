interface Props {
    title: string;
    children: React.ReactNode;
    onClose?: () => void;
}

const Modal = ({ title, onClose, children }: Props) => {
    return (
        <div
            className='inset-0 flex justify-center items-center bg-black/70 fixed'
            onClick={onClose}
        >
            <div
                data-aos='zoom-in'
                data-aos-duration='300'
                className='bg-white rounded-md md:min-w-[50%]'
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    e.stopPropagation()
                }
            >
                <header className='py-4 px-10 text-2xl font-semibold border-b border-border-light flex items-center justify-between'>
                    <h1 className='capitalize'>{title}</h1>
                    <button
                        onClick={onClose}
                        className='hover:scale-110 duration-150'
                    >
                        X
                    </button>
                </header>
                <section className='px-10'>{children}</section>
            </div>
        </div>
    );
};

export default Modal;
