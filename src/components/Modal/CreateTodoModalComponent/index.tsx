import React, {FC} from 'react';
import InputComposed from "../../inputs/InputComposed";
import Button from "../../Button";
import {useInput} from "../../../hooks/useInput";
import {createTodo} from "../../../api/todos";
import Icon from "../../Icon";
import {regExp} from "../../../regExp";
import styles from "./styles.module.scss"

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTodoModalComponent: FC<Props> = ({setOpen}) => {
    const title = useInput(
        {
            regexp: regExp.basic,
            errorMessage: "invalid title, at least 3 characters"
        }
    );
    const description = useInput(
        {
            regexp: regExp.basic,
            errorMessage: "invalid description, at least 3 characters"
        }
    );
    const time = useInput(
        {
            regexp: regExp.notEmpty,
            errorMessage: "chose time"
        }
    );
    const date = useInput(
        {
            regexp: regExp.notEmpty,
            errorMessage: "chose date"
        }
    )

    const submit = async () => {
        const titleValid = title.validate()
        const descriptionValid = description.validate()
        const timeValid = time.validate()
        const dateValid = date.validate()

        if (titleValid && descriptionValid && timeValid && dateValid) {
            const deadline = new Date(`${date.value}, ${time.value}`)

            await createTodo({
                title: title.value,
                description: description.value,
                deadline
            })

            setOpen(false)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.closeWrapper}>
                <Icon iconName={"close"} size={30} onClick={() => {
                    setOpen(false)
                }}/>
            </div>
            <InputComposed
                type={'text'}
                label={"title"}
                value={title.value}
                setValue={title.setValue}
                error={title.error}
                errorLabel={title.errorLabel}
            />
            <InputComposed
                type={'text'}
                label={"description"}
                value={description.value}
                setValue={description.setValue}
                error={description.error}
                errorLabel={description.errorLabel}
            />
            <InputComposed
                type={'time'}
                label={"time"}
                value={time.value}
                setValue={time.setValue}
                error={time.error}
                errorLabel={time.errorLabel}
            />
            <InputComposed
                type={'date'}
                label={"date"}
                value={date.value}
                setValue={date.setValue}
                error={date.error}
                errorLabel={date.errorLabel}
            />
            <div className={styles.submitWrapper}>
                <Button label={"submit"} variant={"primary"} callback={submit}/>
            </div>
        </div>
    );
};

export default CreateTodoModalComponent;
