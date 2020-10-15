import React from 'react';

const List = ({serviceList}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Title</th>
                    <th className="text-secondary" scope="col">Description</th>
                    <th className="text-secondary" scope="col">status</th>
                </tr>
            </thead>
            <tbody>
                {
                  serviceList.map((service, index) => 
                        
                    <tr key={service._id}>
                        <td>{index + 1}</td>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.title}</td>
                        <td>{service.description}</td>
                        <td>{
                            service.status === false ? 'pending' : 'Done'
                        }</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default List;