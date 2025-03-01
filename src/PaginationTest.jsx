import React, { useEffect, useState } from "react";
import Pagination from "./mini-projects/pagination";
import "../src/mini-projects/pagination/Pagination.css"

function PaginationTest() {
    const [dummyData, setDummyData] = useState([]);

    useEffect(() => {
        const data = Array.from({ length: 100 }, (_, index) => ({
            id: index + 1,
            name: `Product ${index + 1}`,
        }));
        setDummyData(data);
    }, []); // Runs only once on mount
    const itemPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);
    console.log(currentListOfItems)

    function handlePageChange(newPage) {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <h1>Pagination</h1>
            <ul>
                {currentListOfItems?.map((listItem) => (
                    <li key={listItem.id}>{listItem.name}</li>
                ))}
            </ul>
            <Pagination
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={Math.ceil(dummyData.length / itemPerPage)}
            />
        </div>
    );
}

export default PaginationTest;
