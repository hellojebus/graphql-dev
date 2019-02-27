function postedBy(parent, args, context) {
  return context.prisma.person({ id: parent.id }).postedBy()
}

module.exports = {
  postedBy,
};