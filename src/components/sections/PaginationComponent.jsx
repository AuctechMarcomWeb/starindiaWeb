import React from "react";
import { Pagination } from "antd";

const PaginationComponent = ({ page, limit, total, onPageChange }) => {
  return (
    <div className="flex justify-center mt-12">
      <Pagination
        current={page}
        pageSize={limit}
        total={total}
        onChange={(current) => onPageChange(current)}
      />
    </div>
  );
};

export default PaginationComponent;
