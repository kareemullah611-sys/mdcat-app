import { buildBatch } from "../build";
import { items as part1 } from "./phy-xi-b3-1";
import { items as part2 } from "./phy-xi-b3-2";
import { items as part3 } from "./phy-xi-b3-3";
import { items as part4 } from "./phy-xi-b3-4";

export const physicsXiBatch3 = buildBatch("phy-xi-b3", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 11 });
