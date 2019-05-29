import cio from 'cheerio-without-node-native';
export function GfResolve(url, type) {
  let format = [
    '-small.gif',
    '-max-1mb.gif',
    '-size_restricted.gif',
    '-mobile.mp4',
  ];
  let ext = format[type] ? format[type] : format[3];
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(r => r.text())
      .then(rs => cio.load(rs))
      .then($ => {
        resolve(
          $('meta[name="twitter:url"]')
            .attr('content')
            .replace('https://gfycat.com/ifr/', 'https://thumbs.gfycat.com/') +
            ext
        );
      })
      .catch(error => {
        reject(error);
      });
  });
}
