const arrowFunc = () => {
  const parentElement = document.querySelector('.starter-template');

  const newElement = () => {
    const template = `
<pre class="test-class my-4 p-2 border rounded-1">
<code>Hello there</code>
</pre>
    `;
    const doc = new DOMParser().parseFromString(template, 'text/html');
    return doc.body.firstChild;
  };

  if (parentElement) {
    const testEl = newElement();
    parentElement.append(testEl);
  }
};

export default arrowFunc;
