export const getFileExtention = fileUrl => {
  // To get the file extension
  return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};
