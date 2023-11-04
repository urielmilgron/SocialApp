export const filterByDate = (postsObject) => {
  const postsFiltered = Object.values(postsObject);

  postsFiltered.sort((a, b) => {
    //       divido el date a partir de los signos dados en el split
    const partsA = a.createdAt.split(/[\/\,\s\:]+/);
    const partsB = b.createdAt.split(/[\/\,\s\:]+/);

    // Construyo un objeto Date manualmente, primero el año en posición 2 del split, el mes en segundo lugar
    //y se le resta uno ya que en js los meses son a partir del 0(enero), luego el día en posición 3 del split, la hora en posición 4 y luego los minutos y segundos
    const dateA = new Date(
      partsA[2],
      partsA[0] - 1,
      partsA[1],
      partsA[3],
      partsA[4],
      partsA[5]
    );
    const dateB = new Date(
      partsB[2],
      partsB[0] - 1,
      partsB[1],
      partsB[3],
      partsB[4],
      partsB[5]
    );
    //Se ordenan de manera ascendente
    return dateB - dateA;
  });
  return postsFiltered;
};
