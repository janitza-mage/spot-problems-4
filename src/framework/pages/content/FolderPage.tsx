import {checkForDuplicateChildIds, type Folder} from "../../content.tsx";
import {NavigationPageBreadcrumbs} from "./NavigationPageBreadcrumbs.tsx";
import {NavigationList} from "../../technical-components/navigation/NavigationList/NavigationList.tsx";
import {
  useNavigateToContentNode
} from "../../technical-components/navigation/ContentNodeLink/useNavigateToContentNode.ts";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {WithHeader} from "../../technical-components/layout/WithHeader.tsx";

export interface FolderPageProps {
    folder: Folder;
    path: string[];
}

export function FolderPage(props: FolderPageProps) {
  checkForDuplicateChildIds(props.folder);
    const navigateToContentNode = useNavigateToContentNode();
    const navigationElements = props.folder.elements.map(element => {
        return {
            label: element.name,
            decoration: element.type === "folder" ? <ChevronRightIcon /> : <></>,
            onClick: () => navigateToContentNode([...props.path, element.id]),
        };
    });
    return <WithHeader
        header={<div style={{backgroundColor: "#ccc", borderBottom: "1px solid #aaa"}}>
            <NavigationPageBreadcrumbs path={props.path} />
            <h1 style={{margin: 0}}>{props.folder.name}</h1>
        </div>}
        overflow={"hidden scroll"}
    >
        <NavigationList elements={navigationElements} />
    </WithHeader>;
}
