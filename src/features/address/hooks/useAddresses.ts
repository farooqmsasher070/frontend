import { useAddressStore } from "../store/addressStore";

export function useAddresses() {
  return useAddressStore();
}