function persons(parent, args, context) {
  return context.prisma.user({ id: parent.id }).persons()
}

module.exports = {
  persons,
};