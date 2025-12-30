import {type ContentNode} from "../../content.tsx";
import {Breadcrumbs, type BreadcrumbsElement} from "../../technical-components/navigation/Breadcrumbs/Breadcrumbs.tsx";
import {buildUrlPathForContentPath, getContentNodeChildById} from "../../paths.tsx";
import {contentTree} from "../../../content/contentTree.tsx";

export interface NavigationPageBreadcrumbsProps {
    path: string[];
}

export function NavigationPageBreadcrumbs(props: NavigationPageBreadcrumbsProps) {
    const elements = buildElements(props);
    if (!elements) {
        return <div>ERROR</div>;
    }
    return <Breadcrumbs elements={elements} trailingSeparator={elements.length > 0} />;
}

function buildElements(props: NavigationPageBreadcrumbsProps): BreadcrumbsElement[] | null {

    // no breadcrumbs for the root node
    if (props.path.length === 0) {
        return [];
    }
    
    // otherwise, add a breadcrumb that links to the root node even though there is no path segment for it
    const result: BreadcrumbsElement[] = [
        {
            text: "Topics",
            to: buildUrlPathForContentPath([])
        }
    ];
    
    // the breadcrumbs for the current node stop at the parent node
    const path = [...props.path];
    path.pop();

    // build the remaining breadcrumbs
    let currentNode: ContentNode = contentTree;
    const accumulatedPath: string[] = [];
    for (const pathSegment of path) {
        const child = getContentNodeChildById(currentNode, pathSegment);
        if (!child) {
            return null;
        }
        currentNode = child;
        accumulatedPath.push(pathSegment);
        result.push({
            text: getNodeName(currentNode),
            to: buildUrlPathForContentPath(accumulatedPath),
        });
    }
    
    return result;
}

// since we're on a folder or collection page, this does not have to handle exercises
function getNodeName(node: ContentNode): string {
  return (node.type === "folder" || node.type === "collection") ? node.name : "?";
}
