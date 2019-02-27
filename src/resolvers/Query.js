function people(parent, args, context, info) {
  return context.prisma.persons();
}

module.exports = {
  people
};