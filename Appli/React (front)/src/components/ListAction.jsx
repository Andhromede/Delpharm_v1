import React from "react";
import { Table } from "react-bootstrap";
import { BsTrashFill } from 'react-icons/bs';
import { MdAddCircle } from 'react-icons/md';
import '../assets/css/listeAction.css';


const ListAction = () => {
   return (
      <div className="my-5 col-11 text-center mx-auto">
         <Table className="text-dark table-secondary table-striped">
            <thead className="table-dark">
               <tr>
                  <th className="">Rapport N°</th>
                  <th className="col-1">Titre</th>
                  <th className="col-2">Date de l'action</th>
                  <th className="col-5">Description de l'action</th>
                  <th className="col-2">réponse</th>
                  <th className="">Validation HSE</th>
                  <th className="">Validation pilote</th>
                  <th className="">Validation porteur</th>
                  <th className="col-2">Date butoire</th>
                  <th className="">Action immédiate</th>
                  <th className="">Priorité</th>
                  <th className="">Criticité</th>
                  <th className="">Etat</th>
                  <th className="col-1">Type du rapport</th>
                  <th className=""></th>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <td><input type="text" className="form-control bgGrisClair1" value="1456" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="PQA" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="04/01/2021" /></td>
                  <td>
                     <textarea rows="6" className="form-control bgGrisClair1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veniam sunt iusto dolore eaque 
                        quisquam modi porro nesciunt ea suscipit eos dolorem dolorum necessitatibus unde, est velit, voluptas quae.
                     </textarea>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair1" value="sans objet" /></td>

                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="30/09/2022" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="non" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="0" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="Faux" /></td>
                  <td>
                     <select name="" id="" className="">
                        <option value="">En attente</option>
                        <option value="">Validé</option>
                        <option value="">Clos</option>
                        <option value="">Refusé</option>
                     </select>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair1" value="PQA" /></td>
                  <td><button className="btn btn-danger text-decoration-none"><BsTrashFill /></button> </td>
               </tr>

               <tr>
                  <td><input type="text" className="form-control bgGrisClair2" value="2735" /></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="AT" /></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="13/01/2022" /></td>
                  <td>
                     <textarea rows="6" className="form-control bgGrisClair2">
                        Facere sint ipsa et ab similique quia eaque nobis expedita tempore magnam, neque earum beatae!
                        Sapiente cum omnis autem libero eveniet facere ipsam temporibus accusantium suscipit neque, enim.
                     </textarea>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair2" value="Sans objet"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="21/01/2022"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="non"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="0"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="Faux"/></td>
                  <td>
                     <select name="" id="" className="">
                        <option value="">Validé</option>
                        <option value="">En attente</option>
                        <option value="">Clos</option>
                        <option value="">Refusé</option>
                     </select>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair2" value="ATPS"/></td>
                  <td><button className="btn btn-danger text-decoration-none"><BsTrashFill /></button> </td>
               </tr>

               <tr>
                  <td><input type="text" className="form-control bgGrisClair1" value="1456" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="PQA" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="04/01/2021" /></td>
                  <td>
                     <textarea rows="6" className="form-control bgGrisClair1">
                        Excepturi quidem molestiae adipisci laudantium odio amet officia soluta dolores dolor odit aspernatur 
                        delectus mollitia nulla molestias, exercitationem repellendus numquam illo voluptatum est fugit.
                     </textarea>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair1" value="sans objet" /></td>

                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="30/09/2022" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="non" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="0" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="Faux" /></td>
                  <td>
                     <select name="" id="" className="">
                     <option value="">Clos</option>
                        <option value="">En attente</option>
                        <option value="">Validé</option>
                        <option value="">Refusé</option>
                     </select>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair1" value="PQA" /></td>
                  <td><button className="btn btn-danger text-decoration-none"><BsTrashFill /></button> </td>
               </tr>

               <tr>
                  <td><input type="text" className="form-control bgGrisClair2" value="2735" /></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="AT" /></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="13/01/2022" /></td>
                  <td>
                     <textarea rows="6" className="form-control bgGrisClair2">
                        Autem sequi obcaecati ipsum quisquam impedit aperiam, facere sint ipsa et ab similique quia eaque nobis expedita 
                        tempore magnam, neque earum beatae. Sapiente cum omnis autem libero eveniet facere ipsam temporibus accusantium.
                     </textarea>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair2" value="Sans objet"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="21/01/2022"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="non"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="0"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="Faux"/></td>
                  <td>
                     <select name="" id="" className="">
                        <option value="">Refusé</option>
                        <option value="">Validé</option>
                        <option value="">En attente</option>
                        <option value="">Clos</option>
                     </select>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair2" value="ATPS"/></td>
                  <td><button className="btn btn-danger text-decoration-none"><BsTrashFill /></button> </td>
               </tr>

               <tr>
                  <td><input type="text" className="form-control bgGrisClair1" value="1456" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="PQA" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="04/01/2021" /></td>
                  <td>
                     <textarea rows="6" className="form-control bgGrisClair1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga veniam sunt iusto dolore eaque 
                        quisquam modi porro nesciunt ea suscipit eos dolorem dolorum necessitatibus unde, est velit, voluptas quae.
                     </textarea>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair1" value="sans objet" /></td>

                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="30/09/2022" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="non" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="0" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="Faux" /></td>
                  <td>
                     <select name="" id="" className="">
                        <option value="">En attente</option>
                        <option value="">Validé</option>
                        <option value="">Clos</option>
                        <option value="">Refusé</option>
                     </select>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair1" value="PQA" /></td>
                  <td><button className="btn btn-danger text-decoration-none"><BsTrashFill /></button> </td>
               </tr>

               <tr>
                  <td><input type="text" className="form-control bgGrisClair2" value="2735" /></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="AT" /></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="13/01/2022" /></td>
                  <td>
                     <textarea rows="6" className="form-control bgGrisClair2">
                        Facere sint ipsa et ab similique quia eaque nobis expedita tempore magnam, neque earum beatae!
                        Sapiente cum omnis autem libero eveniet facere ipsam temporibus accusantium suscipit neque, enim.
                     </textarea>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair2" value="Sans objet"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="21/01/2022"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="non"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="0"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="Faux"/></td>
                  <td>
                     <select name="" id="" className="">
                        <option value="">Validé</option>
                        <option value="">En attente</option>
                        <option value="">Clos</option>
                        <option value="">Refusé</option>
                     </select>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair2" value="ATPS"/></td>
                  <td><button className="btn btn-danger text-decoration-none"><BsTrashFill /></button> </td>
               </tr>

               <tr>
                  <td><input type="text" className="form-control bgGrisClair1" value="1456" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="PQA" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="04/01/2021" /></td>
                  <td>
                     <textarea rows="6" className="form-control bgGrisClair1">
                        Excepturi quidem molestiae adipisci laudantium odio amet officia soluta dolores dolor odit aspernatur 
                        delectus mollitia nulla molestias, exercitationem repellendus numquam illo voluptatum est fugit.
                     </textarea>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair1" value="sans objet" /></td>

                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="oui" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="30/09/2022" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="non" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="0" /></td>
                  <td><input type="text" className="form-control bgGrisClair1" value="Faux" /></td>
                  <td>
                     <select name="" id="" className="">
                        <option value="">Clos</option>
                        <option value="">En attente</option>
                        <option value="">Validé</option>
                        <option value="">Refusé</option>
                     </select>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair1" value="PQA" /></td>
                  <td><button className="btn btn-danger text-decoration-none"><BsTrashFill /></button> </td>
               </tr>

               <tr>
                  <td><input type="text" className="form-control bgGrisClair2" value="2735" /></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="AT" /></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="13/01/2022" /></td>
                  <td>
                     <textarea rows="6" className="form-control bgGrisClair2">
                        Autem sequi obcaecati ipsum quisquam impedit aperiam, facere sint ipsa et ab similique quia eaque nobis expedita 
                        tempore magnam, neque earum beatae. Sapiente cum omnis autem libero eveniet facere ipsam temporibus accusantium.
                     </textarea>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair2" value="Sans objet"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="oui"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="21/01/2022"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="non"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="0"/></td>
                  <td><input type="text" className="form-control bgGrisClair2" value="Faux"/></td>
                  <td>
                     <select name="" id="" className="">
                        <option value="">Refusé</option>
                        <option value="">Validé</option>
                        <option value="">En attente</option>
                        <option value="">Clos</option>
                     </select>
                  </td>
                  <td><input type="text" className="form-control bgGrisClair2" value="ATPS"/></td>
                  <td><button className="btn btn-danger text-decoration-none"><BsTrashFill /></button> </td>
               </tr>

            </tbody>
         </Table>

         {/* <a href="nom.pdf" class="btn btn-warning btn-lg d-print-none" download="nom.pdf">Télécharger en PDF</a> */}
      </div>
   );
};

export default ListAction;
