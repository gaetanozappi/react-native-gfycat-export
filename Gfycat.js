import cio from 'cheerio-without-node-native';
export function GfExport(url, type) {
  let ext = [
    '-small.gif',
    '-max-1mb.gif',
    '-size_restricted.gif',
    '-mobile.mp4',
  ];
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(r => r.text())
      .then(rs => cio.load(rs))
      .then($ => {
        resolve(
          $('meta[name="twitter:url"]')
            .attr('content')
            .replace('https://gfycat.com/ifr/', 'https://thumbs.gfycat.com/') +
            ext[type]
        );
      })
      .catch(error => {
        reject(error);
      });
  });
}
