async function traerData(url) {
    const respuesta = await fetch(url);

    const data = await respuesta.json();
    return data;
  }
  
  async function mostrarDatos() {
    try {
      const data = await traerData('https://jsonplaceholder.typicode.com/users');
      console.log(data);
    } catch (error) {
      console.error("Este es el error:" , error);
    }
  }
  
//   mostrarDatos();


//  function traerData(url) {
//     const respuesta =  fetch(url);

//     return respuesta;
//   }
  
//   async function mostrarDatos() {
//     try {
//       const data = await traerData('https://jsonplaceholder.typicode.com/users');
//       const datos = await data.json();

//       console.log(datos);
//     } catch (error) {
//       console.error("Este es el error:" , error);
//     }
//   }
  