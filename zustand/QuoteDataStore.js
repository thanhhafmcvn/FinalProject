import { create } from "zustand";
export const QuoteDataStore = create((set) => ({
  quoteData: [],
  authorShown: false,
  authorName: "",
  setQuoteData: (value) => set((state) => ({ quoteData: value })),
  setAuthorShown: (status) => set((state) => ({ authorShown: status })),
  setAuthorName: (value) => set((state) => ({ authorName: value })),
}));
