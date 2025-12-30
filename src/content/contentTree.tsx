import {type Folder} from "../framework/content.tsx";
import {mathSubtree} from "./math/mathSubtree.tsx";
import {electricalEngineeringSubtree} from "./electrical/electricalEngineeringSubtree.tsx";

export const contentTree: Folder = {
    id: "root",
    name: "Topics",
    type: "folder",
    elements: [
        mathSubtree,
        electricalEngineeringSubtree,
    ],
};
