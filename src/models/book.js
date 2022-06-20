module.exports = (connection, DataTypes) => {
    const schema = {
      title:  {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
          notEmpty: {
            args: [true],
            msg: 'The book title cannot be empty',
          },
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: [true],
            msg: 'Author cannot be empty',
          },
        },
      },
      genre: {
        type: DataTypes.STRING,
      },
      ISBN: {
        type: DataTypes.STRING,
      },
    };
  
    const BookModel = connection.define('Book', schema);
    return BookModel;
  };