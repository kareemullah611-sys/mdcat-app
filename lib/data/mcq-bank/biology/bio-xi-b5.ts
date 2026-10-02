import { buildBatch } from "../build";
import { items as part1 } from "./bio-xi-b5-1";
import { items as part2 } from "./bio-xi-b5-2";
import { items as part3 } from "./bio-xi-b5-3";
import { items as part4 } from "./bio-xi-b5-4";

export const biologyXiBatch5 = buildBatch("bio-xi-b5", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 11 });
