import * as React from "react";
import Header from "./Header";
import { makeStyles } from "@fluentui/react-components";
import { TextBulletListSquare24Regular } from "@fluentui/react-icons";

// Ensure Office.js is ready
Office.onReady(() => {
  Word.run(async (context) => {
    const docBody = context.document.body.text;
    console.log("Document text (on load):", docBody);
  });
});

interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#0078d4",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  metadataSection: {
    marginTop: "20px",
  },
  metadataList: {
    listStyle: "none",
    padding: 0,
  },
  metadataItem: {
    marginBottom: "10px",
  },
  errorMessage: {
    color: "red",
    marginTop: "20px",
  },
});

const App: React.FC<AppProps> = (props: AppProps) => {
  const styles = useStyles();
  const [metadata, setMetadata] = React.useState<string[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  // Function to analyze the document and extract metadata using Hugging Face API
  const analyzeDocument = async () => {
    try {
      setError(null); // Clear previous errors

      // Fetch the document content
      const documentText = await Word.run(async (context) => {
        const body = context.document.body;
        body.load("text");
        await context.sync();
        return body.text;
      });

      if (!documentText || documentText.trim().length === 0) {
        setError("The document is empty. Please add some text and try again.");
        return;
      }

      // Call Hugging Face API for text classification
      const response = await fetch("https://api-inference.huggingface.co/models/distilbert-base-uncased", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_HUGGING_FACE_API_KEY}`, // Use the key from .env
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: documentText }),
      });

      const data = await response.json();

      if (response.status !== 200 || data.error) {
        throw new Error(data.error || "Failed to fetch metadata from the API.");
      }

      // Extract labels from the response
      const tags = data.map((result: any) => result.label); // Adjust this if your API response structure differs
      setMetadata(tags);
    } catch (error: any) {
      console.error("Error analyzing document:", error.message || error);
      setError(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className={styles.root}>
      <Header logo="assets/logo-filled.png" title={props.title} message="Welcome to Documentum AI Add-In" />
      <button className={styles.button} onClick={analyzeDocument}>
        Analyze Document
      </button>

      {error && <p className={styles.errorMessage}>{error}</p>}

      <div className={styles.metadataSection}>
        <h3>Suggested Metadata</h3>
        <ul className={styles.metadataList}>
          {metadata.length > 0 ? (
            metadata.map((item, index) => (
              <li key={index} className={styles.metadataItem}>
                <TextBulletListSquare24Regular /> {item}
              </li>
            ))
          ) : (
            <p>No metadata suggestions available. Analyze a document to see suggestions.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
