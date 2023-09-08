import image from '../assets/ERR.png';

const Error404 = () => {

    return (
        <>
            {/* <h1 className="error-text-h3">"404 Error: It looks like the page you're searching for is lost in another dimension."</h1> */}
            <article className="error-page">
                < img src={image} className="error-image" alt="This page does not exist, please use the start again from the homepage" />
            </article>
        </>
    );
};

export default Error404;