import { buildBatch } from "../build";
import { items as part1 } from "./bio-xii-b2-1";
import { items as part2 } from "./bio-xii-b2-2";
import { items as part3 } from "./bio-xii-b2-3";
import { items as part4 } from "./bio-xii-b2-4";

export const biologyXiiBatch2 = buildBatch("bio-xii-b2", [...part1, ...part2, ...part3, ...part4], { sourceGrade: 12 });
