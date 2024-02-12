const utils = (hslString: string) => {
  const regex = /hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/;
  const matches = hslString.match(regex);
  //hsl(15, 19, 19) devient => ["hsl(15, 19, 19)", "15", "19", "19"]
  //si les 4 élements sont bien présents, on a un pattern hsl valide et donc on peut
  //récupérer hue, saturation et lightness

  if (matches && matches.length === 4) {
    const hue = Number(matches[1]);
    const saturation = Number(matches[2]);
    const lightness = Number(matches[3]);

    return { hue, saturation, lightness };
  }

  return;
};

export default utils;
