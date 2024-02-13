//
export default function Range (Props) {
    //
    let n = [];

    for (let i = 0; i < 9; i++) {
        n.push('0');
    }

    if (Props.score > 0) {
        for (let i = 0; i < Props.score; i++) {
            n[i] = '1';
        }
    }

    return (
        <>
            <div className="d-flex">
                <div className="d-flex me-2">
                    <div className={"boll-" + n[0] + " me-1"}></div>
                    <div className={"boll-" + n[1] + " me-1"}></div>
                    <div className={"boll-" + n[2] + " me-1"}></div>
                </div>
                <div className="d-flex me-2">
                    <div className={"boll-" + n[3] + " me-1"}></div>
                    <div className={"boll-" + n[4] + " me-1"}></div>
                    <div className={"boll-" + n[5] + " me-1"}></div>
                </div>
                <div className="d-flex">
                    <div className={"boll-" + n[6] + " me-1"}></div>
                    <div className={"boll-" + n[7] + " me-1"}></div>
                    <div className={"boll-" + n[8]}></div>
                </div>
            </div>
        </>
    )
}