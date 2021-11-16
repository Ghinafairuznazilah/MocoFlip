// import React from "react";
// import { Title, Testi } from "../style/testimonipagestyle";
// import logo from "../images/MocoFLip.png"
// import { Form, Button, Card} from "react-bootstrap";
// import Rating from "./rating"

// export default function FormTestimoni(){
//     // const [nama, setNama] = useState('');
//     // const [testimoni, setTestimoni] = useState('');
//     // const handleSubmit=(e)=>{
//     //     e.preventDefault();
//     //     console.log(nama);
//     //     addTestimoni(nama)
//     //     setNama('');
//     // }

//     // const [inputField , setInputField] = useState({
//     //     nama: '',
//     //     testimoni: ''
//     // })

//     // const inputsHandler = (e) =>{
//     //     setInputField( {[e.target.name]: e.target.value} )
//     // }

//     // const submitButton = () =>{
//     //     alert(inputField.nama)
//     // }
//     return(
//         <Card style={{
//                 backgroundColor: '#C697AD',
//               }} className="col-lg-6 col-md-12 col-sm-12 mx-lg-auto mx-md-auto"
//         >
//         <Card.Img src={logo} className=" w-25 h-25 rounded mx-lg-auto mx-md-auto mx-sm-auto d-block mb-3 mt-3"/>
//         <Card.Body>
//            <Title>Bagaimana Pengalamanmu Menggunakan Mocoflip?</Title>
//            <Testi className="col-lg-12 col-md-12 col-sm-12 mb-3">Tuliskan testimoni kamu disini!</Testi>
//            <Form>
//                 <Form.Group className="mb-2 col-lg-12 col-md-12 col-sm-12" controlId="exampleForm.ControlInput1">
//                     <Form.Label>Nama</Form.Label>
//                     <Form.Control type="text" placeholder="nama kamu"  />
//                 </Form.Group>
//                 <Form.Group className="mb-2 col-lg-12 col-md-12 col-sm-12"  controlId="exampleForm.ControlTextarea1">
//                     <Form.Label>Testimoni</Form.Label>
//                     <Form.Control as="textarea" rows={4} placeholder="testimoni..."  />
//                 </Form.Group>
//                 <Rating/>
//                 <Button style={{
//                 backgroundColor: '#282262',
//               }} variant="outline-light" type="submit" className="mt-3 col-lg-3 col-md-3 col-sm-3" value="add testimoni"> Kirim</Button>
//             </Form>
//         </Card.Body>
//         </Card>
            
//     )
// }

import React, {useState} from "react";
import { Title, Testi } from "../style/testimonipagestyle";
import logo from "../images/MocoFLip.png"
import { Form, Button, Card} from "react-bootstrap";
import Rating from "./rating"


 const FormTestimoni=({ addTestimoni })=>{
    const [data, setData] = useState([
        {
            nama: '', 
            testimoni: '',
        }
    ]);
 const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(data.nama);
     console.log(data.testimoni);
     addTestimoni(data);
 }

 const onChangeData = (e) => {
     setData({...data,[e.target.name] : [e.target.value]})
 }
    return(
        <Card style={{
            backgroundColor: '#C697AD',
          }} className="col-lg-6 col-md-12 col-sm-12 mx-lg-auto mx-md-auto"
    >
    <Card.Img src={logo} className=" w-25 h-25 rounded mx-lg-auto mx-md-auto mx-sm-auto d-block mb-3 mt-3"/>
    <Card.Body>
       <Title>Bagaimana Pengalamanmu Menggunakan Mocoflip?</Title>
       <Testi className="col-lg-12 col-md-12 col-sm-12 mb-3">Tuliskan testimoni kamu disini!</Testi>
       <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2 col-lg-12 col-md-12 col-sm-12" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="nama kamu" value={data.nama} required onChange={onChangeData} name="nama"  />
            </Form.Group>
            <Form.Group className="mb-2 col-lg-12 col-md-12 col-sm-12"  controlId="exampleForm.ControlTextarea1">
                <Form.Label>Testimoni</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="testimoni..."  value={data.testimoni} required onChange={onChangeData} name="testimoni"/>
            </Form.Group>
            <Rating/>
            <Button style={{
            backgroundColor: '#282262',
          }} variant="outline-light" type="submit" className="mt-3 col-lg-3 col-md-3 col-sm-3" value="add testimoni"> Kirim</Button>
        </Form>
    </Card.Body>
    </Card>
    );
}
export default FormTestimoni;





// import React, {useState} from "react";

//  const FormTestimoni=({ addTestimoni })=>{
//     const [data, setData] = useState([
//         {
//             nama: '', 
//             testimoni: '',
//         }
//     ]);
//  const handleSubmit=(e)=>{
//      e.preventDefault();
//      console.log(data.nama);
//      console.log(data.testimoni);
//      addTestimoni(data);
//  }

//  const onChangeData = (e) => {
//      setData({...data,[e.target.name] : [e.target.value]})
//  }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>Name:</label>
//             <input type="text" value={data.nama} required onChange={onChangeData} name="nama" />
//             <label>Testimoni:</label>
//             <input type="text"value={data.testimoni} required onChange={onChangeData} name="testimoni" />
//             <input type="submit" value="add testimoni" />
//         </form>
//     );
// }
// export default FormTestimoni;
