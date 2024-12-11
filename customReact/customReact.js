function customRender(reactElement, container) {
  /* this is not recommended method btw
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;

    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
container.appendClild(domElement);
*/
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) if (prop === "children") continue;
  domElement.setAttribute(prop, reactElement.props[prop]);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "cllck here to goto google.com",
};

const container = document.getElementById("root");

customRender(reactElement, container);
