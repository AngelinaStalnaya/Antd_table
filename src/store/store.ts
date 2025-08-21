import { create } from "zustand";
import type { TableDataType } from "../types/dataTypes";

type RecordStoreState = {
  records: Array<TableDataType>;
  setRecordsArray: (recordsArray: Array<TableDataType>) => void;
  setRecord: (newRecord: TableDataType) => void;
  deleteRecord: (recordId: Extract<TableDataType, "key">) => void;
  updateRecord: (
    recordId: Extract<TableDataType, "key">,
    newRecord: TableDataType
  ) => void;
};

// type RecordStoreActions = {
//     setResord: (
//         newRecord : RecordStoreState | []
//     ) =>
// }

const useStore = create((set) => ({
  records: [],
  setRecordsArray: (recordsArray: Array<TableDataType>) =>
    set({ records: recordsArray }),
  setRecord: (newRecord: TableDataType) =>
    set((state) => ({ records: [...state.records, newRecord] })),
  deleteRecord: (recordId: Extract<TableDataType, "key">) =>
    set((state) => ({
      records: state.records.filter(
        (rec: TableDataType) => rec["key"] !== recordId
      ),
    })),
  updateRecord: (
    recordId: Extract<TableDataType, "key">,
    newRecord: TableDataType
  ) =>
    set((state) => ({
      records: state.records.map((rec: TableDataType) =>
        rec["key"] === recordId ? { ...rec, ...newRecord } : rec
      ),
    })),
}));
