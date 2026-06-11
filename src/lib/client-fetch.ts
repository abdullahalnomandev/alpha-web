// lib/client-fetch.ts
export async function clientFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = typeof window !== "undefined" && window.sessionStorage.getItem("token");
  
  const isFormData = options.body instanceof FormData;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const contentType = res.headers.get("content-type");
  if (!res.ok) {
    let errorMessage = `API Error: ${res.status}`;
    if (contentType && contentType.includes("application/json")) {
      try {
        const errorData = await res.json();
        if (errorData) {
          errorMessage =
            errorData.message ||
            (errorData.errorMessages?.[0]?.message ?? errorMessage);
        }
      } catch {
        // Ignore parsing error
      }
    }
    throw new Error(errorMessage);
  }

  if (contentType && contentType.includes("application/json")) {
    return res.json() as Promise<T>;
  }
  // If not JSON, return empty object or throw error? Let's throw error for now
  throw new Error("Unexpected response type, expected JSON");
}
