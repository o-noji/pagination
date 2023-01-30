import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import AlbumList from "./AlbumList";
import "./Pagination.scss";
import Album from "./type";

type Props = {
  albums: Album[];
};

const Pagenation = (props: Props) => {
  const { albums } = props;

  const itemsPerPage = 6;

  const [itemsOffset, setItemsOffset] = useState(0);

  const endOffset = itemsOffset + itemsPerPage;

  const currentAlbums = albums.slice(itemsOffset, endOffset);
  const pageCount = Math.ceil(albums.length / itemsPerPage);

  const handlePgaeClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % albums.length;
    setItemsOffset(newOffset);
  };

  return (
    <div className="album">
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <div className="paginate">
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePgaeClick}
          nextLabel="next >"
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Pagenation;
