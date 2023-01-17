import React, {FC} from 'react';
import Input from "../inputs/Input";
import Button from "../Button";
import styles from "./styles.module.scss";

type Props = {
    searched: string;
    setSearched: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: FC<Props> = ({searched, setSearched}) => {
    return (
        <div className={styles.searchBar}>
            <Input type={"search"} value={searched} setValue={setSearched}/>
            <Button
                label={"search"}
                variant={"outlined"}
                callback={() => {
                }}
                style={{
                    width: "100px",
                    height: "30px",
                }}
            />
        </div>
    );
};

export default SearchBar;
