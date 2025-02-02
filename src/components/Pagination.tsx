import { Button } from "./ui/button";

type Props = {
  totalPages: number;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onPageClick : (arg:number) => void
  page: number;
};

function Pagination({ totalPages, onNextClick, onPreviousClick, page,onPageClick }: Props) {
  return (
    <div className="flex gap-3 items-center justify-center">
      <Button disabled={page===0} onClick={onPreviousClick} className="border-none">
        &lt; Previous
      </Button>
      <div className="space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button onClick={() => onPageClick(index)} key={index}>{index + 1}</Button>
        ))}
      </div>
      <Button
        disabled={page===totalPages-1}
        onClick={onNextClick}
        className="border-none"
      >
        Next &gt;
      </Button>
    </div>
  );
}

export default Pagination;
