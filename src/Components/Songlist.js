import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./songList.css";
import UpdateSong from "./UpdateSong";
import Researchbar from "./Researchbar";
import { Table, Container, Col, Row } from "react-bootstrap";

const Songlist = () => {
  const [sortType, setSortType] = useState("");
  const [search, setSearch] = useState();

  let playlist = useSelector((state) => state.playlistReducer.songs);
  playlist.sort((a, b) => {
    if (sortType === "") return 0;
    if (!a[sortType]) return 0;
    const nameA = a[sortType].toUpperCase();
    const nameB = b[sortType].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };
  const filterList = playlist.filter((item) => {
    if (search === undefined) {
      return true;
    }
    const upperCaseSearch = search.toUpperCase();
    if (
      search !== "" &&
      (item.song.toUpperCase().includes(upperCaseSearch) ||
        item.singer.toUpperCase().includes(upperCaseSearch))
    ) {
      return true;
    }

    return false;
  });
  console.log(filterList);
  console.log(search);
  console.log(playlist);
  return (
    <div>
      <h1>Music List</h1>
      <Container className="search">
        <Row>
          <Col md={6}>
            <Researchbar onSearch={handleSearch} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th onClick={() => setSortType("id")}>Sr#</th>
                  <th onClick={() => setSortType("singer")}>Singer Name</th>
                  <th onClick={() => setSortType("song")}>Song Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filterList.map((songList, index) => {
                  return (
                    <UpdateSong songList={songList} key={index} index={index} />
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Songlist;
