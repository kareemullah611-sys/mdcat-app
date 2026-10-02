import { buildBatch } from "../build";
import { items as part1 } from "./phy-xi-b5-1";
import { items as part2 } from "./phy-xi-b5-2";
import { items as part3 } from "./phy-xi-b5-3";
import { items as part4 } from "./phy-xi-b5-4";
import { items as part5 } from "./phy-xi-b5-5";

export const physicsXiBatch5 = buildBatch("phy-xi-b5", [...part1, ...part2, ...part3, ...part4, ...part5], { sourceGrade: 11 });
