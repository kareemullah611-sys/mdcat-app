import { buildBatch } from "../build";
import { items as part1 } from "./bio-xii-b3-1";
import { items as part2 } from "./bio-xii-b3-2";
import { items as part3 } from "./bio-xii-b3-3";
import { items as part4 } from "./bio-xii-b3-4";

export const biologyXiiBatch3 = buildBatch("bio-xii-b3", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 12 });
