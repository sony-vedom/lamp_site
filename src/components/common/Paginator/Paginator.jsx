import React, {useState, useEffect} from "react";
import styles from "./Paginator.module.css";
import Preloader from "../Preloader/Preloader";

const Paginator = ({totalUserCount: totalItemCount, pageSize, onPagedChanged, portionSize = 15, currentPage, ...props}) => {
    const pagesCount = Math.ceil(totalItemCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push([i])
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPageNumber = portionNumber * portionSize;
    useEffect(()=>{
        setPortionNumber(Math.ceil(currentPage/portionSize))
        }, [currentPage]);
    return (
        <div className={styles.pagesContainer}>

            {portionNumber > 1 &&
                <button className={styles.switch}
                        onClick={() => setPortionNumber(portionNumber - 1)}>← PREV</button>}

            {pages.filter(p => p >= leftPageNumber && p <= rightPageNumber)
                .map(p => <button className={(p===currentPage) ? styles.active : styles.list }
                                  key={p}
                                  onClick={(e) => onPagedChanged(e.target.textContent) }>{p}</button>)
            }

            {portionCount > portionNumber &&
                <button className={styles.switch}
                        onClick={() => setPortionNumber(portionNumber + 1)}>NEXT →</button>}
        </div>
    )
}

export default Paginator