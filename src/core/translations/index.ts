const t = (msg: string, values?: Record<string, string | number | null | undefined>) => {
  if (values) {
    return Object.keys(values).reduce(
      (acc, key: keyof typeof values) => acc.replace(`{${key}}`, `${values[key] ?? ''}`),
      msg
    );
  }
  return msg;
};

export { t };
