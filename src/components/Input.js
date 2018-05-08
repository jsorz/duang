def((XPut) => class extends XPut {
  get hint() { return 'Input'; }
  get defaultComponent() { return 'String'; }
  buildComponent() {
    let { args = {}, depot, value } = this;
    return req(this.componentName).then(Component => {
      this.result = new Component(args, { value, depot }).to(this.element);
    });
  }
});
