import React from "react";
import Page from "../Page";
module.exports = class Files extends Page {
  constructor(props) {
    const title = props.linkedMode ? "Linked Files" : "Files";
    super({
      uuid: props.uuid,
      status: props.status,
      title,
      stylesheet: "/css/Files.css",
    });
    this.files = props.displayFiles;
    this.linkedMode = props.linkedMode;
  }
  render() {
    return (
      <>
        {this.BuildPage(
          <div className="download-content">
            <div className="links-wrapper">
              <div className="filetype-toggle">
                <a href="/files?type=owned">Owned</a>
                <a href="/files?type=linked">Linked</a>
              </div>
              <h1>{this.title}</h1>
              <div className="links" id="file-display">
                <ul>
                  {this.files.map((file, index) => (
                    <li key={index}>
                      <div className="file-actions">
                        <a
                          href={`/rawdata?nemo=${file.nemo}&target=${file.target}`}
                          className="link-get"
                        >
                          {file.filename}
                        </a>
                        <div className="file-options">
                          <a
                            href={`/download?nemo=${file.nemo}&target=${file.target}`}
                            className="link-download"
                          >
                            <i className="fa fa-download"></i>
                          </a>
                          <a
                            href={`/share?nemo=${file.nemo}&target=${file.target}`}
                            className="link-share"
                          >
                            <i className="fa fa-share-square-o"></i>
                          </a>
                          <a
                            href={`/delete-file?nemo=${file.nemo}&target=${file.target}`}
                            className="link-delete"
                          >
                            <i className="fa fa-trash"></i>
                          </a>
                          <span className="file-date">{file.date} </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {this.files.length == 0 && !this.linkedMode &&(
                <h2>
                  No files found <a href="/upload" id="no-files-link">click here </a>
                  to upload some!
                </h2>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
};