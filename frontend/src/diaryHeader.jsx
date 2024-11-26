import "./style/diaryHeader.css";

const DiaryHeader = ({ title, leftChild, rightChild }) => {
    return (
        <div className="DiaryHeader">
            <div className="header_left">{leftChild}</div>
            <div className="header_title">{title}</div>
            <div className="header_right">{rightChild}</div>
        </div>
    );
};

export default DiaryHeader;