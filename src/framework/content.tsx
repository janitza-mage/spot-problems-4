import {type ReactNode} from "react";

// --------------------------------------------------------------------------------------------------------------------
// content nodes
// --------------------------------------------------------------------------------------------------------------------

export type ContentNodeType = "folder" | "collection" | "exercise";

export interface ContentNodeBase {
  type: ContentNodeType;
}

export interface Exercise extends ContentNodeBase {
  type: "exercise";
  intro?: ReactNode;
  label?: ReactNode;
  problem: ReactNode;
  answer: ReactNode;
}

export interface FolderElementBase extends ContentNodeBase {
  type: "folder" | "collection";
  id: string;
  name: string;
}

export interface Folder extends FolderElementBase {
  type: "folder";
  elements: FolderElement[];
}

export interface Collection extends FolderElementBase {
  type: "collection";
  exercises: Exercise[];
}

export type ContentNode = Folder | Collection | Exercise;
export type FolderElement = Folder | Collection;

// --------------------------------------------------------------------------------------------------------------------
// content tree helper functions
// --------------------------------------------------------------------------------------------------------------------

export function checkForDuplicateChildIds(folder: Folder) {
  const ids = new Set<string>();
  for (const child of folder.elements) {
    if (ids.has(child.id)) {
      const message = `Duplicate child id '${child.id}' in folder '${folder.id}'`;
      alert(message);
      throw new Error(message);
    }
    ids.add(child.id);
  }
}
