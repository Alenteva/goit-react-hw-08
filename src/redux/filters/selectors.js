import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filters.filter;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) =>
    contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
        contact.number.includes(filter.trim())
    )
);
