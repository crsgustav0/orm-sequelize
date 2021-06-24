module.exports ={
  up: (querryInterface, Sequelize) =>{
    return querryInterface.bulkInsert('Pessoas'),[
      {
        nome: 'Cristian',
        ativo: true,
        email: 'cristian@cristian.com',
        role: 'Estudante',
        createdAt: new Date(),
        updateAt: new Date(),
      },
      {
        nome: 'Gustavo',
        ativo: true,
        email: 'gustavo@gustavo.com',
        role: 'Professor',
        createdAt: new Date(),
        updateAt: new Date(),
      },
      {
        nome: 'Dr. Gustavo',
        ativo: true,
        email: 'gustavo@diretoria.com',
        role: 'Docente',
        createdAt: new Date(),
        updateAt: new Date(),
      },
      {
        nome: 'Dr. Cristian Gustavo',
        ativo: true,
        email: 'cristiangustavo@email.com',
        role: 'Diretor',
        createdAt: new Date(),
        updateAt: new Date(),
      },
    ]
  },
  down: (querryInterface,Sequelize)=>{
    return querryInterface.bulkDelete('Pessoas',null,{})
  }
}