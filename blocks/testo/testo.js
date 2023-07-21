export default function decorate(block) {
  console.log('I am testo!');

  console.log({ block });

  const { children: kids } = block;
  console.log({ kids });

  const art = document.createElement('article');
  [...kids].forEach((row) => {
    console.log({ row });
    const title = document.createElement('h1');
    title.innerHTML = row.innerHTML;
    art.append(title);
  });
  block.textContent = '';
  block.append(art);
}
