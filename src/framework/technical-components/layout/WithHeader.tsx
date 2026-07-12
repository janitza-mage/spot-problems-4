import {type ReactNode} from "react";

export interface WithHeaderProps {
    children: ReactNode;
    header: ReactNode;
}

export function WithHeader(props: WithHeaderProps) {
    return <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
        <div style={{flex: "0 0 auto", backgroundColor: "#ccc", borderBottom: "1px solid #aaa"}}>
            {props.header}
        </div>
        <div style={{flex: "1 1 0", overflowX: "hidden", overflowY: "scroll"}}>
            {props.children}
        </div>
    </div>;
}
