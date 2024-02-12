type HSLtoHEX = {
  hue: number;
  saturation: number;
  lightness: number;
};

const utils = ({ hue, saturation, lightness }: HSLtoHEX) => {
  //convertion de la luminosité entre 0 et 1
  lightness /= 100;

  //calcul de l'opacité
  const opacity = (saturation * Math.min(lightness, 1 - lightness)) / 100;

  // création d'une fonction permettant de calculer les composantes de HEX
  // k est la position relative de la couleur dans le cercle des couleurs
  const componentToHex = (n: number) => {
    //k = (n + hue / 30) % 12
    // sert à normaliser la teinte
    const k = (n + hue / 30) % 12;

    // règle de calcul déterminant les distances de la couleur actuelle par rapport aux couleurs primaires
    // k - 3 => distance relative pour atteindre le rouge
    // 9 - k => distance relative pour atteindre le vert
    // 1 => distance relative pour atteindre le bleu
    const colorValue =
      lightness - opacity * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    // permet de retourner les éléments de la valeur hex
    return Math.round(255 * colorValue)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();
  };

  return `#${componentToHex(0)}${componentToHex(8)}${componentToHex(4)}`;
};

export default utils;
