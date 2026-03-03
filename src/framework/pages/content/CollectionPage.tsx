import {type Collection} from "../../content.tsx";
import {NavigationPageBreadcrumbs} from "./NavigationPageBreadcrumbs.tsx";
import {NavigationList} from "../../technical-components/navigation/NavigationList/NavigationList.tsx";
import {
  useNavigateToContentNode
} from "../../technical-components/navigation/ContentNodeLink/useNavigateToContentNode.ts";
import {WithHeader} from "../../technical-components/layout/WithHeader.tsx";
import {getExerciseLabel} from "../../getExerciseLabel.tsx";

export interface CollectionPageProps {
    collection: Collection;
    path: string[];
}

export function CollectionPage(props: CollectionPageProps) {
    const navigateToContentNode = useNavigateToContentNode();
    const navigationElements = props.collection.exercises.map((exercise, index) => {
        return {
            label: getExerciseLabel(exercise, index),
            decoration: <></>,
            onClick: () => navigateToContentNode([...props.path, String(index)]),
        };
    });
    return <WithHeader
        header={<div style={{backgroundColor: "#ccc", borderBottom: "1px solid #aaa"}}>
            <NavigationPageBreadcrumbs path={props.path} />
            <h1 style={{margin: 0}}>{props.collection.name}</h1>
        </div>}
        overflow={"hidden scroll"}
    >
        <NavigationList elements={navigationElements} />
    </WithHeader>;
}
