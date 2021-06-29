'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_incio: {
        type: Sequelize.DATEONLY
      },
      /*Criação do campo responsável pela associação*/
      docente_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: 
        /*Informa a tabela e o campo que será usado 
        para identificação*/
        { model: 'Pessoas', key: 'id' }
      },
       /*Criação do campo responsável pela associação*/
       nivel_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: 
        /*Informa a tabela e o campo que será usado 
        para identificação*/
        { model: 'Niveis', key: 'id' }
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
    await queryInterface.dropTable('Turmas');
  }
};