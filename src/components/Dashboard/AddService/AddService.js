import React, { useContext } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import AddServiceForm from './AddServiceForm';

const AddService = () => {
    const [user] = useContext(UserContext);

    const [serviceTitle, setServiceTitle] = useState({
        title: '',
        titleErr: ''
    });
    const [serviceDes, setServiceDes] = useState({
        description: '',
        descriptionErr: ''
    });
    const [serviceImg, setServiceImg] = useState(null);
    const [serviceImgErr, setServiceImgErr] = useState('');
    
    const [message, setMessage] = useState({
        success: '',
        error: ''
    });
    const addService = (e) => {
        e.preventDefault();
        if(!serviceTitle.title && !serviceDes.description && serviceImg === null){
            setServiceTitle({titleErr: 'input required'});
            setServiceDes({descriptionErr: 'input required'})
            setServiceImgErr('file is required');
        }
        else if(!serviceTitle.title){
            setServiceTitle({titleErr: 'input required'});
        }
        else if(!serviceDes.description){
            setServiceDes({descriptionErr: 'input required'})
        }
        else if(serviceImg === null){
            setServiceImgErr('file is required');
        }
        else{
            const formData = new FormData()
            formData.append('file', serviceImg);
            formData.append('title', serviceTitle.title);
            formData.append('description', serviceDes.description);
            console.log(formData);

            fetch('http://localhost:5000/addService', {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    setMessage({
                        success: 'service successfully added',
                        error: ''
                    });
                }
            })
            .catch(err => {
                setMessage({
                    success: '',
                    error: err.message
                });
            })
        }
    };
    return (
        <section className="dashboard-style">
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <div className="d-flex justify-items-center">
                        <h2>Add Service</h2>
                        <h4>{user.email}</h4>
                    </div>
                    <div className="container-style">
                        <h4 className="text-success">{message.success}</h4>
                        <h4 className="text-danger">{message.error}</h4>
                        <AddServiceForm
                            serviceTitle={serviceTitle}
                            setServiceTitle={setServiceTitle}
                            serviceDes={serviceDes}
                            setServiceDes={setServiceDes}
                            serviceImg={serviceImg}
                            setServiceImg={setServiceImg}
                            addService={addService}
                            serviceImgErr={serviceImgErr}
                        />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default AddService;