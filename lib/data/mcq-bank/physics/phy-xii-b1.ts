import { buildBatch } from "../build";
import { items as part1 } from "./phy-xii-b1-1";
import { items as part2 } from "./phy-xii-b1-2";
import { items as part3 } from "./phy-xii-b1-3";
import { items as part4 } from "./phy-xii-b1-4";

export const physicsXiiBatch1 = buildBatch("phy-xii-b1", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 12 });
