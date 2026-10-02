import { buildBatch } from "../build";
import { items as part1 } from "./chem-xi-b1-1";
import { items as part2 } from "./chem-xi-b1-2";
import { items as part3 } from "./chem-xi-b1-3";
import { items as part4 } from "./chem-xi-b1-4";

export const chemistryXiBatch1 = buildBatch("chem-xi-b1", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 11 });
