interface ITag {
  data: string;
}
function Tags({ data }: ITag) {
  return <span className="tag">{data}</span>;
}
export default Tags;
