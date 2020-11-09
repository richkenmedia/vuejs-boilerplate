export default function IsAuthenticated(to, from, next) {
  console.log('From', from);
  console.log('To', to);
  next();
}
