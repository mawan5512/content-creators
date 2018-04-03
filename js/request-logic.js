// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  let contentType;
  switch(extension) {
    case 'html':
        contentType = 'text/html';
        break;
    case 'css':
        contentType = 'text/css';
        break;
    case 'jpeg':
        contentType = 'image/jpeg';
        break;
    case 'jpg':
        contentType = 'image/jpeg';
        break;
    default:
        contentType = 'text/plain';
        break;
  }
  return contentType;
}