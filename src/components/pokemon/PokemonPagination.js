import React from "react";
import Pagination from "react-bootstrap/Pagination";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

const PokemonPagination = ({
  search,
  pagedList,
  searchPokemon,
  onPageSizeChange
}) => {
  const pagesArray = [];
  const onPageChange = (page) => {
    searchPokemon({
      name: search.name,
      type: search.type,
      page: page,
      size: search.pageSize
    });
  };
  for (let i = 1; i <= pagedList.pages; i++) {
    if (i > pagedList.current - 3 && i < pagedList.current + 3) {
      pagesArray.push(i);
    }
  }
  return (
    <Row>
      <Col
        lg="9"
        md="8"
      >
        <Pagination>
          <Pagination.First
            disabled={pagedList.first === pagedList.current}
            onClick={() => onPageChange(1)}
          />
          <Pagination.Prev
            disabled={pagedList.prev === null}
            onClick={() => onPageChange(pagedList.current - 1)}
          />
          {pagedList.pages >= search.pageSize && pagedList.current > 3 ? (
            <Pagination.Ellipsis />
          ) : null}
          {pagesArray.map((page) => (
            <Pagination.Item
              key={page}
              active={page === pagedList.current}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Pagination.Item>
          ))}
          {pagedList.pages >= search.pageSize &&
          pagedList.current <= pagedList.pages - 3 ? (
            <Pagination.Ellipsis />
          ) : null}
          <Pagination.Next
            disabled={pagedList.next === null}
            onClick={() => onPageChange(pagedList.current + 1)}
          />
          <Pagination.Last
            disabled={pagedList.last === pagedList.current}
            onClick={() => onPageChange(pagedList.pages)}
          />
        </Pagination>
        <span className="px-3 text-secondary">
          {pagedList.current} to {pagedList.pages} of {pagedList.items}
        </span>
      </Col>
      <Col
        lg="3"
        md="4"
        className="text-end"
      >
        <select
          className="form-select pagination-select"
          defaultValue={search.pageSize}
          onChange={(e) => {
            onPageSizeChange(e.target.value);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </Col>
    </Row>
  );
};

PokemonPagination.propTypes = {
  search: PropTypes.object.isRequired,
  pagedList: PropTypes.object.isRequired,
  searchPokemon: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired
};

export default PokemonPagination;
