import { create } from "zustand";
import type { TableDataType } from "../types/dataTypes";
import { tableData } from "./initialState";

type RecordStoreState = {
  records: Array<TableDataType>;
  filterRecords: (filter: string) => Array<TableDataType>;
  setRecord: (newRecord: TableDataType) => void;
  deleteRecord: (recordId: string) => void;
  updateRecord: (recordId: string, newRecord: TableDataType) => void;
};

export const useStore = create<RecordStoreState>()((set, get) => ({
  records: tableData,
  filterRecords: (filter: string) =>
    get().records.filter(
      (record: TableDataType) =>
        record.name.toLowerCase().includes(filter.toLowerCase()) ||
        (record.number + "").includes(filter) ||
        record.date.includes(filter)
    ),
  setRecord: (newRecord: TableDataType) =>
    set((state) => ({ records: [...state.records, newRecord] })),
  deleteRecord: (recordId: string) =>
    set((state) => ({
      records: state.records.filter(
        (rec: TableDataType) => rec.key !== recordId
      ),
    })),
  updateRecord: (recordId: string, newRecord: TableDataType) =>
    set((state) => ({
      records: state.records.map((rec: TableDataType) =>
        rec["key"] === recordId ? { ...rec, ...newRecord } : rec
      ),
    })),
}));
