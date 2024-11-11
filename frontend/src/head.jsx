import "./style/head.css";

const Head = () => {
    return (
        <div className="Head">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

export default Head;