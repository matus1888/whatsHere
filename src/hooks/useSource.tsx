import { useSearchParams } from "react-router";

export function useSource() {
  const [searchParams] = useSearchParams();
  const source = searchParams.get("source");
  if (source) {
    sessionStorage.setItem("source", source);
  }
}
