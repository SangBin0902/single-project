import DiaryEditor from "../src/diaryEditor";

const DiaryHome = () => {
    return (
        <div>
            <DiaryEditor
                onSubmit={() => {
                    alert("작성 완료 버튼을 클릭했음");
                }}
            />
        </div>
    );
};

export default DiaryHome;