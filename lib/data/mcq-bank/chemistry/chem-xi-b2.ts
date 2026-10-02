import { buildBatch } from "../build";
import { items as part1 } from "./chem-xi-b2-1";
import { items as part2 } from "./chem-xi-b2-2";
import { items as part3 } from "./chem-xi-b2-3";
import { items as part4 } from "./chem-xi-b2-4";

export const chemistryXiBatch2 = buildBatch("chem-xi-b2", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 11 });
