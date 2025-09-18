"use client";

import { useMemo, useState } from "react";

export default function FormName() {
  // drafts (what user types)
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  // saved value (what user confirms)
  const [savedFullName, setSavedFullName] = useState<string | null>(null);

  const fullName = useMemo(() => `${name} ${lastName}`.trim(), [name, lastName]);

  function handleSave() {
    const clean = fullName.trim();
    if (clean) setSavedFullName(clean);
  }

  function handleClear() {
    setName("");
    setLastName("");
    setSavedFullName(null);
  }

  return (
    <div>
      <h1>welcome {savedFullName || "set your name"} 💖</h1>

      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="given-name"
        />
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="family-name"
        />

        <button onClick={handleSave} disabled={!fullName}>
          Save
        </button>
        <button onClick={handleClear} disabled={!name && !lastName && !savedFullName}>
          Clear
        </button>
      </div>

      {savedFullName && <p>your name: {savedFullName} is saved</p>}
    </div>
  );
}
