export default function IsAdmin(to, from, next) {
  console.log('From', from);
  console.log('To', to);
  next();
}
