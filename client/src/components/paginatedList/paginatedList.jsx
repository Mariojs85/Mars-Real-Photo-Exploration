import { Children, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginatedList = ({
  children,
  pageSize = 10,
  listContainerClassName,
  lisPaginationClassName
}) => {
  const [pageNo, setPageNo] = useState(0);
  const [pageContent, setPageContent] = useState(null);
  const total = Children.count(children);

  useEffect(() => {
    setPageNo(0)
  }, [total])

  useEffect(() => {
    if (total > pageSize) {
      const temp = Children.toArray(children).slice(
        pageNo * pageSize,
        pageNo * pageSize + pageSize
      );
      setPageContent(temp);
    }
  }, [pageNo, children, pageSize, total]);

  const handlePrevPage = () => {
    if (pageNo > 0) setPageNo((state) => state - 1);
  };

  const handleNextPage = () => {
    if ((pageNo + 1) * pageSize < total) setPageNo((state) => state + 1);
  };

  return (
    <div className='d-flex flex-column align-items-center m-3'>
      <div className={listContainerClassName}>
        {total > pageSize ? pageContent : children}
      </div>
      {total > pageSize && (
        <div className={lisPaginationClassName}>
          <Pagination style={{ margin: 0 }}>
            <Pagination.Prev onClick={handlePrevPage} />
            <Pagination.Item>{`${pageNo + 1}/${Math.ceil(total/pageSize)}`}</Pagination.Item>
            <Pagination.Next onClick={handleNextPage} />
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default PaginatedList;
