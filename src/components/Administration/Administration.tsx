import { Rapport } from "../../types/administration/administration";
import { Sidebar } from "./Sidebar";

export interface AdministrationProps {
  raport: Rapport;
}

export const Administration: React.FC<AdministrationProps> = ({ raport }) => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};
