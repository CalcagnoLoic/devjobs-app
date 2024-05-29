export const parseRequirements = (
  requirementsString: string | string[],
): string[] => {
  if (Array.isArray(requirementsString)) {
    return requirementsString;
  }
  
  try {
    return JSON.parse(requirementsString as string);
  } catch (error) {
    console.error("Error parsing requirements:", error);
    return [];
  }
};
