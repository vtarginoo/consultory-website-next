
export interface IEmployee {
  id: number;
  name: string;
  role: string;
  image: string; // Caminho da foto
  bio: string;
  expertise: string[]; // Um array de strings para a expertise
}