/**
 * wraps `decodeURIComponent` and returns the original string if it cannot be decoded
 */
export function decodeUri(str: string) {
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
}

export function formEncode(obj: { [key: string]: string }) {
  return (Object
    .entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
  );
}

export function formDecode(str: string) {
  return str.split('&').reduce((decoded, keyValuePair) => {
    const [keyEncoded, valueEncoded] = keyValuePair.split('=');
    const key = decodeUri(keyEncoded);
    const value = decodeUri(valueEncoded);
    decoded[key] = value;
    return decoded;
  }, {} as { [key: string]: string });
}
