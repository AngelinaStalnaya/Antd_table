import { create } from "zustand";
import type { TableDataType } from "../types/dataTypes";
import { tableData } from "./initialState";

type RecordStoreState = {
  records: Array<TableDataType>;
  setInitialRecordsArray: (recordsArray: Array<TableDataType>) => void;
  setRecord: (newRecord: TableDataType) => void;
  deleteRecord: (recordId: string) => void;
  updateRecord: (
    recordId: string,
    newRecord: TableDataType
  ) => void;
};

export const useStore = create<RecordStoreState>()((set) => ({
  records: tableData,
  setInitialRecordsArray: (recordsArray: Array<TableDataType>) =>
    set({ records: recordsArray }),
  setRecord: (newRecord: TableDataType) =>
    set((state) => ({ records: [...state.records, newRecord] })),
  deleteRecord: (recordId: string) =>
    set((state) => ({
      records: state.records.filter(
        (rec: TableDataType) => rec.key !== recordId
      ),
    })),
  updateRecord: (
    recordId: string,
    newRecord: TableDataType
  ) =>
    set((state) => ({
      records: state.records.map((rec: TableDataType) =>
        rec["key"] === recordId ? { ...rec, ...newRecord } : rec
      ),
    })),
}));
