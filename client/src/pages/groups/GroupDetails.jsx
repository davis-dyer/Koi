import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";


const GroupDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});


    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user.fName}</td>
                        <td>{user.lName}</td>
                    </tr>
                    <tr>
                        <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-social-media-260nw-1920331226.jpg"></img>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th>Creation Date</th>
                        <td>{user.createDateTime}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default GroupDetails