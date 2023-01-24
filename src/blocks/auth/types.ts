export type SubmitType = {
    validate: (validateCondition?: { condition: boolean, errorLabel: string }) => boolean | undefined;
    value: string;
}
