import React, { forwardRef } from "react";

const FileUpload = forwardRef(({ onChange }, ref) => (
  <input
    type="file"
    accept="image/*"
    onChange={(e) => onChange(e.target.files[0])}
    ref={ref}
    className="p-2 rounded border border-[#481E14] text-black"
  />
));

export default FileUpload;
