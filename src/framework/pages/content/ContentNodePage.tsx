import {type ContentNode} from "../../content.tsx";
import {FolderPage} from "./FolderPage.tsx";
import {ExercisePage} from "./ExercisePage.tsx";
import {CollectionPage} from "./CollectionPage.tsx";

export interface ContentNodePageProps {
    node: ContentNode;
    path: string[];
}

export function ContentNodePage(props: ContentNodePageProps) {
    switch (props.node.type) {
        case "folder":
            return <FolderPage folder={props.node} path={props.path} />;
        case "collection":
            return <CollectionPage collection={props.node} path={props.path} />;
        case "exercise":
            return <ExercisePage exercise={props.node} path={props.path} />;
    }
}
