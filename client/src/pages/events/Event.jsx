import React, { useEffect, useState } from "react";
import {Card, CardBody} from "reactstrap";
import NotFound from "../../assets/NotFound.svg";

const Event = ({ data }) => {
  return (
    <div>
      {data && data.length > 0 ? (
       data.map((item) => (
        <Card>
          <CardBody key={item?.id}>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
          </CardBody>
        </Card>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
              Items Not Available
          </p>
      </div>
      )}
    </div>
  )
}

export default Event