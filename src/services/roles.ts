// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { RoleDTO} from "@/types/role";

export const getRolesList = async (): Promise<RoleDTO[]> => {
    const res =  await fetch('')
    if (!res.ok) throw Error("Ha ocurrido un error inesperado")
    return await res.json()

}