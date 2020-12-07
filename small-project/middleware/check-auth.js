export default function(context) {
  console.log("check  => initAuth");
  context.store.dispatch("initAuth", context.req);
}
