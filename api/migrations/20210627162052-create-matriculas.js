'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      /*Criação do campo responsável pela associação*/
       estudante_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: 
        /*Informa a tabela e o campo que será usado 
        para identificação*/
        { model: 'Pessoas', key: 'id' }
      },
      /*Criação do campo responsável pela associação*/
      turma_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: 
        /*Informa a tabela e o campo que será usado 
        para identificação*/
        { model: 'Turmas', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Matriculas');
  }
};