import {type ContentNode} from "../framework/content.tsx";
import {mathSubtree} from "./math/mathSubtree.tsx";
import {electricalEngineeringSubtree} from "./electrical/electricalEngineeringSubtree.tsx";

export const contentTree: ContentNode = {
    id: "root",
    name: "Topics",
    type: "folder",
    children: [
        mathSubtree,
        electricalEngineeringSubtree,
    ],
};
