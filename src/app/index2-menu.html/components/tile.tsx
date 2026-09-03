export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, cids }: { d: TileData; cids: string[] }) {
  return (
    <tbody data-cid={cids[0]} className="box-content h-10.5 table-row-group align-middle [border-spacing:2px]">
      <tr data-cid={cids[1]} className="box-content h-5 table-row align-middle [border-spacing:2px]">
        <td data-cid={cids[2]} className="box-content table-cell p-px align-middle [border-spacing:2px]">
          {d.text}
        </td>
        <td data-cid={cids[3]} className="box-content h-4.5 table-cell p-px align-middle [border-spacing:2px]">
          {d.text2}
        </td>
      </tr>
      <tr data-cid={cids[4]} className="box-content table-row align-middle [border-spacing:2px]">
        <td data-cid={cids[5]} className="box-content table-cell p-px align-middle [border-spacing:2px]" colSpan="2">
          <hr data-cid={cids[6]} className="box-content w-38 h-0 border border-inset border-border block my-2 overflow-hidden text-border [border-spacing:2px]" />
        </td>
      </tr>
    </tbody>
  );
}
