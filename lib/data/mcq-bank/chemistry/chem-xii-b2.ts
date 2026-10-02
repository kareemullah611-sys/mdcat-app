import { buildBatch } from "../build";
import { items as part1 } from "./chem-xii-b2-1";
import { items as part2 } from "./chem-xii-b2-2";
import { items as part3 } from "./chem-xii-b2-3";
import { items as part4 } from "./chem-xii-b2-4";

export const chemistryXiiBatch2 = buildBatch("chem-xii-b2", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 12 });
