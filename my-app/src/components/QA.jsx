import React, { useState } from "react";
import plus from "./../assets/icon/plus.svg"
import minus from "./../assets/icon/minus.svg"
function Faq({ data }) {
    const [selected, setSelected] = useState()
    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div>
                            <div className={question} onClick={() => setSelected(index)}>
                                <div>{item.question}</div>
                                <div>
                                    {
                                        selected === index ? (
                                            <img src={plus} alt="plus" />
                                        ) : (<img src={plus} alt="minus" />)
                                        
                                    }
                                </div>

                            </div>

                            <div>
                                {
                                    selected === index && (<div>
                                        {item.answer}</div>)


                                }
                            </div>
                        </div>


                    )
                })
            }

        </div>
    )
}

