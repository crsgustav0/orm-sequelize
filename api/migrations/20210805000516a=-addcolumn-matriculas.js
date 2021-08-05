'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      /*Informa a coluna a ser criada e informa suas 
      especificações
      Nome tabela - Nome coluna - Espec. coluna
      */
    return queryInterface.addColumn('Matriculas', 'deletedAt', {
        allowNull: true,
        type:Sequelize.DATE
     } );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeCoumn('Matriculas', 'deletedAt');
  }
};