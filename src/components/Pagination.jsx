import React from "react";
import './Pagination.css'

const MAX_ITENS = 9
const MAX_LEFT = (MAX_ITENS - 1) / 2

export default function Pagination({ limit, total, offset, setOffset }){
    const currentPage = offset ? (offset / limit) + 1 : 1
    const pagesNumber = Math.ceil(total / limit)
    const firstButton = Math.max(currentPage - MAX_LEFT, 1)

    const handleChangePage = (page) => {
        setOffset((page - 1) * limit)
    }

    return(
        <ul className="pagination">
            <li>
                <button
                    onClick={() => handleChangePage(currentPage - 1)}
                    disabled={currentPage === 1}>
                    Anterior
                </button>
            </li>

            {Array.from({ length: Math.min(MAX_ITENS, pagesNumber) })
                .map((_, index) => index + firstButton)
                .map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => handleChangePage(page)}
                            className={currentPage === page ? 'pagination-button_active' : null}
                        >
                            {page}
                        </button>
                    </li>
                ))}

            <li>
                <button
                    onClick={() => handleChangePage(currentPage + 1)}
                    disabled={currentPage === pagesNumber}>
                    Próxima
                </button>
            </li>
        </ul>
    )
}