import {type ReactNode} from "react";

// --------------------------------------------------------------------------------------------------------------------
// content nodes
// --------------------------------------------------------------------------------------------------------------------

export type ContentNodeType = "folder" | "exercise";

export interface ContentNodeBase {
    id: string;
    name: string;
    type: ContentNodeType;
}

export interface FolderNode extends ContentNodeBase {
    children: ContentNode[];
}

// TODO use unique IDs to better match existing state to changed content (currently using the index in the content array)
export type ContentItemId = number;

export interface ContentItem {
  intro?: ReactNode; 
  problem: ReactNode;
  answer: ReactNode;
}

export interface ExerciseNode extends ContentNodeBase {
  contentItems: ContentItem[];
}

export type ContentNode = FolderNode | ExerciseNode;

// --------------------------------------------------------------------------------------------------------------------
// content tree helper functions
// --------------------------------------------------------------------------------------------------------------------

export function checkForDuplicateChildIds(folderNode: FolderNode) {
  const ids = new Set<string>();
  for (const child of folderNode.children) {
    if (ids.has(child.id)) {
      const message = `Duplicate child id '${child.id}' in folder '${folderNode.id}'`;
      alert(message);
      throw new Error(message);
    }
    ids.add(child.id);
  }
}
