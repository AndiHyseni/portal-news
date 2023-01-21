import { Container } from "@mantine/core";
import { editUser } from "../../api/administration/administration";
import { EditUsers } from "../../components/AddUsers/EditUsers";
import { Sidebar } from "../../components/Administration/Sidebar";
import { BasePage } from "../../components/BasePage/BasePage";
import { useEditUser } from "../../hooks/useUsers/useEditUser";
import { useUsers } from "../../hooks/useUsers/useUsers";

export const EditUsersPage: React.FC = () => {
  const { data } = useUsers();
  const addUserMutation = useEditUser();

  return (
    <BasePage>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Container style={{ width: "100%" }}>
          {data && <EditUsers editUser={data[0]} mutation={addUserMutation} />}
        </Container>
      </div>
    </BasePage>
  );
};
