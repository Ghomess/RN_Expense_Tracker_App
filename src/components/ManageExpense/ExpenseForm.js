import { Alert, StyleSheet, Text, View } from 'react-native';
import InputComponent from './InputComponent';
import { useState } from 'react';
import ButtonComponent from '../UI/ButtonComponent';
import { getFormattedDate } from '../../utils/date';
import { GlobalStyles } from '../../utils/styles';

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    console.log(inputIdentifier, enteredValue);
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    !amountIsValid || !dateIsValid || !descriptionIsValid
      ? setInputs((curInputs) => {
          return {
            amount: { value: curInputs.amount.value, isValid: amountIsValid },
            date: { value: curInputs.date.value, isValid: dateIsValid },
            description: {
              value: curInputs.description.value,
              isValid: descriptionIsValid,
            },
          };
        })
      : onSubmit(expenseData);
  };

  const formIsInValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <InputComponent
          style={styles.rowInput}
          label={'Amount'}
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: (amountValue) => {
              inputChangeHandler('amount', amountValue);
            },
            value: inputs.amount.value,
          }}
        />
        <InputComponent
          style={styles.rowInput}
          label={'Date'}
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (dateValue) => {
              inputChangeHandler('date', dateValue);
            },
            value: inputs.date.value,
          }}
        />
      </View>
      <InputComponent
        label={'Description'}
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: (descriptionValue) => {
            inputChangeHandler('description', descriptionValue);
          },
          value: inputs.description.value,
        }}
      />
      {formIsInValid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <ButtonComponent
          style={styles.button}
          mode={'flat'}
          onPress={onCancel}>
          Cancel
        </ButtonComponent>
        <ButtonComponent
          style={styles.button}
          onPress={submitHandler}>
          {submitButtonLabel}
        </ButtonComponent>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
