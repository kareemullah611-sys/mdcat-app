import { buildBatch } from "../build";
import { items as part1 } from "./bio-xi-b1-1";
import { items as part2 } from "./bio-xi-b1-2";
import { items as part3 } from "./bio-xi-b1-3";
import { items as part4 } from "./bio-xi-b1-4";

export const biologyXiBatch1 = buildBatch("bio-xi-b1", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 11 });