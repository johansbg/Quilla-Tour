import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

function NoticiaAmpliada({title, content}) {
    
    return(
      <div>
        <h3><strong>{title}</strong></h3>
        <p className="alinearTextoHistoria">{content}</p>
        <p className="alinearTextoHistoria">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ratione. Laboriosam ea et, numquam perferendis molestias unde cumque nihil dicta natus harum error in incidunt enim, corporis voluptates. Consequuntur, praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga ducimus, dolor tenetur aperiam iusto delectus recusandae adipisci, quod laboriosam, nam inventore culpa veritatis natus minima qui ex tempora! Saepe?</p>
        <p className="alinearTextoHistoria">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto culpa praesentium nihil! Sapiente in ipsa officia nisi praesentium eos nam fugit quasi. Saepe enim eius porro eligendi, deleniti aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officiis nisi inventore? Nostrum asperiores modi rem fugiat consectetur? Nisi obcaecati culpa voluptas unde fuga. Libero amet excepturi repellat velit minima.</p>
        <br />
        <br />
      </div>

    )
}

export default NoticiaAmpliada;