import { loadPyodide, version as pyodideVersion } from "pyodide";

let pyodide = null;
let pyodidePromise = null;

const DEFAULT_RESPONSE = [
  {
    stream: "stdout",
    content: "Program finished with no output.",
  },
];

async function getPyodide() {
  if (pyodide) {
    return pyodide;
  }

  if (!pyodidePromise) {
    pyodidePromise = loadPyodide({
      indexURL: `https://cdn.jsdelivr.net/pyodide/v${pyodideVersion}/full/`,
    });
  }

  try {
    pyodide = await pyodidePromise;
    return pyodide;
  } catch (error) {
    pyodidePromise = null;
    throw error;
  }
}

function safelyWrapCode(code) {
  return `try:
  ${code.replaceAll("\n", "\n  ")}
  pass
except Exception:
  import traceback
  traceback.print_exc()
`;
}

self.onmessage = async (event) => {
  const code = safelyWrapCode(event.data.code);
  const output = [];

  try {
    const py = await getPyodide();

    py.setStdout({
      batched: (text) =>
        output.push({
          stream: "stdout",
          content: text,
        }),
    });

    py.setStderr({
      batched: (text) =>
        output.push({
          stream: "stderr",
          content: text,
        }),
    });

    await py.runPythonAsync(code);

    self.postMessage({
      ok: true,
      output: output.length > 0 ? output : DEFAULT_RESPONSE,
    });
  } catch {
    self.postMessage({
      ok: false,
      output: output,
    });
  }
};
