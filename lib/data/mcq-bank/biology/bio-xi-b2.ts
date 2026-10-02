import { buildBatch } from "../build";
import { items as part1 } from "./bio-xi-b2-1";
import { items as part2 } from "./bio-xi-b2-2";
import { items as part3 } from "./bio-xi-b2-3";
import { items as part4 } from "./bio-xi-b2-4";
import { items as part5 } from "./bio-xi-b2-5";

export const biologyXiBatch2 = buildBatch("bio-xi-b2", [...part1, ...part2, ...part3, ...part4, ...part5], { sourceGrade: 11 });
