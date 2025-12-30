import {type ContentNode, type Folder} from "./content.tsx";
import {contentTree} from "../content/contentTree.tsx";

export function getContentNodeChildById(node: ContentNode, id: string): ContentNode | null {
  switch (node.type) {

    case "folder": {
      let child = (node as Folder).elements.find(child => child.id === id);
      return child ?? null;
    }
    
    case "collection": {
      let numericId: number = Number.parseInt(id, 10);
      return node.exercises[numericId] ?? null;
    }
    
    case "exercise":
    default:
      return null;

  }
}

export function getContentNodeByPath(path: string[]): ContentNode | null {
    let currentNode = contentTree;
    for (const segment of path) {
        const child = getContentNodeChildById(currentNode, segment);
        if (!child) {
            return null;
        }
        currentNode = child;
    }
    return currentNode;
}

export function buildUrlPathForContentPath(path: string[]): string {
    return "/" + path.join("/");
}


