import React from 'react'
import { Consumer } from '../contacts/context';
const Details = (props) => {
    return(
        <Consumer>
            {
                value => {
                    const {contacts} = value;
                    let newDetails = contacts.filter(el => el.id == props.match.params.id);
                    return (
                        newDetails.map(el => (
                            <div>
                                 <h2 className="d-flex justify-content-center text-danger">This is Page DeTails</h2>
                                <h3 className="d-flex justify-content-center">I' am {el.name}</h3>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 justify-content-center">
                                        <h4>My Phone: {el.phone}</h4>
                                    </div>
                                    <div className="col-md-6 justify-content-center">
                                        <h4>My Email: {el.email}</h4>
                                    </div>
                                </div>
                                <div>
            
            <h1 className="display-4">{el.name}</h1>
            <p className="d-flex p-2">Bài tập về nhà là xây dựng tương tự form input với AddContact2 dùng với ref các em nhé, và thực hiện check error đúng định dạng email số điện thoại và các trường input không được để trống  </p>
            <img className="" src="https://picsum.photos/200/300" alt="Anh" width="50%" height="350px"></img>
            <div className="d-flex justify-content-end row">
            <p className = "col-md-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <p className = "col-md-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            
            <div className="d-flex justify-content-end row">
            <img className="" src="https://picsum.photos/200/300" alt="Anh" width="50%" height="350px"></img>
            </div>
        </div>
                            </div>
                        )

                        )
                    )

                }
            }
        </Consumer>
    )

    return (
        <div>
            <h1>{props.match.params.id} params</h1>
            <h1 className="display-4">Chiến Chuẩn Chỉ</h1>
            <p className="d-flex p-2">Bài tập về nhà là xây dựng tương tự form input với AddContact2 dùng với ref các em nhé, và thực hiện check error đúng định dạng email số điện thoại và các trường input không được để trống  </p>
            <img className="" src="https://picsum.photos/200/300" alt="Anh" width="50%" height="350px"></img>
            <div className="d-flex justify-content-end row">
            <p className = "col-md-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <p className = "col-md-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            
            <div className="d-flex justify-content-end row">
            <img className="" src="https://picsum.photos/200/300" alt="Anh" width="50%" height="350px"></img>
            </div>
        </div>
        
    )
}
export default Details;