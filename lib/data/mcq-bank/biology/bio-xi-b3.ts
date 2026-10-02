import { buildBatch } from "../build";
import { items as part1 } from "./bio-xi-b3-1";
import { items as part2 } from "./bio-xi-b3-2";
import { items as part3 } from "./bio-xi-b3-3";
import { items as part4 } from "./bio-xi-b3-4";
import { items as part5 } from "./bio-xi-b3-5";

export const biologyXiBatch3 = buildBatch("bio-xi-b3", [...part1, ...part2, ...part3, ...part4, ...part5], { sourceGrade: 11 });
