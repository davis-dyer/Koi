import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { me } from "../modules/authManager";


const Profile = () => {
    const { id } = useParams();
    const [person, setPerson] = useState({});



    useEffect(() => {
        me().then(setPerson)
    }, [])


    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-social-media-260nw-1920331226.jpg"></img>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{person.email}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Profile