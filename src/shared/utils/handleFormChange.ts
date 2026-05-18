import React from "react";

export function handleFormChange<T>(
  setter: React.Dispatch<React.SetStateAction<T>>,
) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
}