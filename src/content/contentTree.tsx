import {type Folder} from "../framework/content.tsx";
import {mathSubtree} from "./math/mathSubtree.tsx";
import {electricalEngineeringSubtree} from "./electrical/electricalEngineeringSubtree.tsx";
import {designSubtree} from "./design/designSubtree.tsx";
import {organizationSubtree} from "./organization/organizationSubtree.tsx";

export const contentTree: Folder = {
    id: "root",
    name: "Topics",
    type: "folder",
    elements: [
        mathSubtree,
        electricalEngineeringSubtree,
        designSubtree,
        organizationSubtree,
    ],
};
