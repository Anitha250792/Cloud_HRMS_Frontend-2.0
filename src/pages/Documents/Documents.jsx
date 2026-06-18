import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

function Documents() {

  const [documents, setDocuments] =
    useState([]);

  const handleUpload = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const fileURL =
      URL.createObjectURL(file);

    setDocuments([
      ...documents,
      {
        name: file.name,
        size: (
          file.size / 1024
        ).toFixed(2),
        url: fileURL,
      },
    ]);
  };

  const handleDelete = (index) => {

    const updatedDocs =
      documents.filter(
        (_, i) => i !== index
      );

    setDocuments(updatedDocs);
  };

  return (

    <AdminLayout>

      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        Documents Management
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "16px",
        }}
      >

        <h2>
          Upload Employee Document
        </h2>

        <input
          type="file"
          onChange={handleUpload}
          style={{
            marginTop: "20px",
          }}
        />

      </div>

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "16px",
          marginTop: "20px",
        }}
      >

        <h2>
          Uploaded Documents
        </h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >

          <thead>

            <tr>
              <th>File Name</th>
              <th>Size (KB)</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {documents.map(
              (doc, index) => (

                <tr key={index}>

                  <td>
                    {doc.name}
                  </td>

                  <td>
                    {doc.size}
                  </td>

                  <td>

                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>

                    {" | "}

                    <a
                      href={doc.url}
                      download={doc.name}
                    >
                      Download
                    </a>

                    {" | "}

                    <button
                      onClick={() =>
                        handleDelete(index)
                      }
                      style={{
                        border: "none",
                        background: "none",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  );
}

export default Documents;