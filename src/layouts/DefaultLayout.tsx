import { Footer, Header } from '../partials';

interface Props {
    children: React.JSX.Element;
}

const DefaultLayout = (props: Props) => {
    return (
        <div className='default-layout'>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
