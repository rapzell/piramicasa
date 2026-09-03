import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = Record<string, never>;
/** A logo. */
export default function Logo2({ d, cids, styles }: { d: Logo2Data; cids: string[]; styles: Logo2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("box-content w-64 h-64 block absolute", styles.className)}>
      <img data-cid={cids[1]} className="box-content w-64 h-64 inline overflow-clip" data-component="image" alt="" role="presentation" src="/assets/cloned/images/c3dc95b462f5.webp" />
    </div>
  );
}
