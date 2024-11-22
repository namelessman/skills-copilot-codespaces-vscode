function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'object',
    fields: {
      name: {
        type: 'string',
        required: true,
        description: 'Name of the skill',
      },
      level: {
        type: 'number',
        required: true,
        description: 'Level of the skill',
      },
    },
  };
}