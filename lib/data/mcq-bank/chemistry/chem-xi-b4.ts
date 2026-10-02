import { buildBatch } from "../build";
import { items as part1 } from "./chem-xi-b4-1";
import { items as part2 } from "./chem-xi-b4-2";
import { items as part3 } from "./chem-xi-b4-3";
import { items as part4 } from "./chem-xi-b4-4";

export const chemistryXiBatch4 = buildBatch("chem-xi-b4", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 11 });
