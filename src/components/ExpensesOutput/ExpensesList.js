import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';

export default function ExpensesList({ expenses }) {
  const renderExpenseItem = (itemData) => {
    return <ExpenseItem {...itemData.item} />;
  };
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
