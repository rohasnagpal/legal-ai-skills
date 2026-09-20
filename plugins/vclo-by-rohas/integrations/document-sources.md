# Document sources

## Required capability

Provide matter documents from one or more authorised sources without making a workflow dependent on a particular vendor.

```text
documents:
  any_of:
    - local-or-uploaded-files
    - google-drive
    - sharepoint
    - onedrive
    - other-connected-document-source
```

## Expected actions

- search files by scoped terms and metadata;
- list a selected folder or matter location;
- read or export a document in a supported format;
- retrieve name, path, owner, version and modified-date metadata;
- save a final output only when the user requests it and the provider supports writing.

Search and read access are distinct. Do not assume that a connection permitting discovery also permits content retrieval or output storage.

## Legal-use rules

Record stable source locators, document dates, versions and missing attachments. Identify OCR, conversion or truncation limitations. Deduplicate copies without discarding annotations or version history. Do not infer that a document does not exist merely because a scoped search did not find it.

## Minimum scope

Confirm the source, account, folder or matter, search terms, relevant date range and whether writing is allowed. Request only the access needed for the current task.

## Fallback

If no document source is connected:

> I need the relevant documents to continue. Upload them here or provide them through an available connected document source. I can proceed on the files supplied and mark the remainder as unavailable.

Never describe Google Drive, SharePoint, OneDrive or another service as connected unless an executable tool confirms it.
