import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  width: string;
  href: string;
  rel?: string;
  alt: string;
  height: string;
  imgSrc: string;
  width2: string;
};
/** A logo. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <td data-cid={cids[0]} className={cn("box-content table-cell p-px align-middle [border-spacing:2px]", styles.className)} width={d.width}>
      <a data-cid={cids[1]} className="box-content inline text-primary text-sm leading-[1.1875rem] underline cursor-pointer [border-spacing:2px]" data-component="link" href={d.href} rel={d.rel} target="_blank">
        <img data-cid={cids[2]} className={cn("box-content inline overflow-clip [border-spacing:2px]", styles.className2)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width2} />
      </a>
    </td>
  );
}
