import { Rapport } from "../../types/administration/administration";

export interface AdministrationProps {
  raport: Rapport;
}

export const Administration: React.FC<AdministrationProps> = ({ raport }) => {
  return <div>Admin section</div>;
};
